new Swiper('.swiper-container');
// JS файл

new Swiper('.swiper-container', {
    // Вывод стрелок навигации
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }, 
     // JS код вывода пагинации
    pagination: {
        el: '.swiper-pagination',
        
    },     
    // JS код вывода скроллбара
    scrollbar: {
        el: '.swiper-scrollbar',
        // draggable: true
    },    
})
