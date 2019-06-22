// window.onload = function(){
//     let mySwiper = new Swiper(".slider",{
//         autoplay:2000,//自动切换
//         disableOnInteraction:false,
//         initialSlide:0,
//         speed:500,
//         observer:true,
//         observeParents:true,
//         grabCursor:true,
//         loop:true,
//         pagination:".swiper-pagination"
//     })
// }

window.onload = function(){
    let mySwiper = new Swiper(".slider",{
        autoplay:2000,// 可设置数值来指定播放速度
        autoplayDisableOnInteraction :false,// 用户操作swiper之后，是否禁止autoplay
        initialSlide:2,//设定初始化时slide的索引。
        speed:500,// 切换图片速度
        observer:true, //启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
        observeParents:true,//将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.onresize，Swiper更新。
        grabCursor:true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。
        loop:true,// 循环播放
        pagination:".swiper-pagination"
    })
}
