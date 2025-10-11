function getProducts(){
  if(typeof productos!=="undefined")return productos;
  if(window.productos)return window.productos;
  return [];
}
const $lista=document.getElementById("lista-productos");
const $tabs=document.getElementById("tabs-categorias");
const $msg=document.getElementById("msg-vacio");

function cardTemplate(p,pos){
  return `
    <article class="prod-card">
      <div class="prod-info">
        <h3 class="prod-title">${p.nombre}</h3>
        <p class="prod-desc">${p.descripcionCorta(85)}</p>
        <div class="prod-price">${p.precioFormateado()}</div>
        <div class="prod-actions">
          <button class="btn btn-view view-detail" data-pos="${pos}"><i class="fa-regular fa-eye"></i><span>Ver</span></button>
          <button class="btn btn-cart add-to-cart" data-id="${p.idProducto}" data-name="${p.nombre}" data-price="${p.precio}"><i class="fa-solid fa-basket-shopping"></i><span>Agregar</span></button>
        </div>
      </div>
      <div class="prod-thumb"><img src="${p.imagen}" alt="${p.nombre}" loading="lazy"></div>
    </article>
  `;
}

function render(list,all){
  if(!list.length){$lista.innerHTML="";$msg.style.display="block";return}
  $msg.style.display="none";
  $lista.innerHTML=list.map(p=>{
    const pos=all.findIndex(x=>x.idProducto===p.idProducto);
    return cardTemplate(p,pos);
  }).join("");
}

function filtrar(cat,all){
  if(cat==="__all__")return [...all];
  return all.filter(p=>p.categoria===cat);
}

function activarTab(el){
  $tabs.querySelectorAll(".tab-cat").forEach(t=>t.classList.remove("active"));
  el.classList.add("active");
}

function initTabs(all){
  $tabs.addEventListener("click",e=>{
    const tab=e.target.closest(".tab-cat");
    if(!tab)return;
    activarTab(tab);
    render(filtrar(tab.dataset.cat,all),all);
  });
}

function initActions(all){
  document.body.addEventListener("click",e=>{
    const v=e.target.closest(".view-detail[data-pos]");
    if(v){location.href=`detalle.html?pos=${encodeURIComponent(v.dataset.pos)}`;return}
    const a=e.target.closest(".add-to-cart");
    if(a){
      const {id,name,price}=a.dataset;
      const precio=parseFloat(price||"0");
      import("./cart.js").then(({agregarAlCarrito,renderCartDropdown})=>{
        agregarAlCarrito(id,name,precio);
        renderCartDropdown?.();
      }).catch(()=>{alert(`${name} añadido`)});
    }
  });
}

document.addEventListener("DOMContentLoaded",()=>{
  const all=getProducts();
  render(all,all);
  initTabs(all);
  initActions(all);
});
