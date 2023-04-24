const openMenu = ()=>{
document.querySelector('aside').className='open'
}
const closeMenu=()=>{
    document.querySelector('aside').className=""
}
document.getElementById('menu').addEventListener('click',e=>{
    e.preventDefault()
    openMenu()
})
document.getElementById('close').addEventListener('click',e=>{
    e.preventDefault()
    closeMenu()
})
var swiper = new Swiper(".mySwiper", {
pagination: {
    el: ".swiper-pagination",
  },
});