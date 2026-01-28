const button = document.querySelectorAll(".text_start");
const highlight = document.querySelector(".highlight");
const nav_links = document.querySelector(".nav-links");
const navbar = document.getElementById("navbar");
const hidden = document.getElementById("hidden");
const nav_search_box = document.getElementById("nav_search_box");
// highlight.classList.add("opacity");
hidden.classList.add("opacitys");

window.addEventListener("scroll", function () {
    nav_search_box.classList.toggle("opacity",window.scrollY>50);
    nav_links.classList.toggle("opacity-nav",window.scrollY>50);
    hidden.classList.toggle("opacitys",window.scrollY<50);
    navbar.classList.toggle("scrolled",window.scrollY>50);
    
  });
function movehighlight(btn){
  highlight.style.width=btn.offsetWidth+"px";
  highlight.style.transform=`translateX(${btn.offsetLeft}px)`;
  nav_search_box.classList.add("nav");
};

  
  button.forEach(btn=>{
    btn.addEventListener("click",()=>{
      button.forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      movehighlight(btn);
    });
  });
  
  
  document.addEventListener("click",(e)=>{
    // buttons.classList.remove("active");
    if(!e.target.closest(".nav_search_box")){
      
      button.forEach(b=>b.classList.remove("active"));
      nav_search_box.classList.remove("nav");
    highlight.style.width="0";
  }
});
//down arrow
document.addEventListener("DOMContentLoaded",()=>{

  const down_arrow = document.getElementById("arrow")
  const drop_content = document.getElementById("dropcontent")
  const drop_down = document.getElementById("drop-down");
  let isOpen=false;
  drop_content.classList.add("opacity");
  console.dir(drop_down);
  down_arrow.addEventListener("click",()=>{
    if(!isOpen){
    drop_content.classList.remove("opacity");
    const clone=drop_down.content.cloneNode(true);
    drop_content.appendChild(clone);
    isOpen=true;
  }else{
    drop_content.classList.add("opacity");
    drop_content.innerHTML="";
    isOpen=false;
  }
   
  });
});