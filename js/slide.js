window.onload = function(){
    let mySwiper = new Swiper(".slider",{
        autoplay:2000,
        disableOnInteraction:false,
        initialSlide:0,
        speed:500,
        observer:true,
        observeParents:true,
        grabCursor:true,
        loop:true,
        pagination:".swiper-pagination"
    })
}
