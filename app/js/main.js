function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('element-show');
    }
    });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}

$('.portfolio__body-top-btn button').on('click', function(e){
    $(this).addClass('active')
    $('.portfolio__body-top-btn button').not(this).removeClass('active')
    let Section = $(this).index() + 1
    $('.portfolio__body-block').each(function(e){
        if ($(this).index() == Section){
            $(this).removeClass('none')
        }else{
            $(this).addClass('none')
        }
    })
})

$('.experience__body-top-btn button').on('click', function(e){
    $(this).addClass('active')
    $('.experience__body-top-btn button').not(this).removeClass('active')
    let Section = $(this).index() + 1
    $('.experience__body-block').each(function(e){
        if ($(this).index() == Section){
            $(this).removeClass('none')
        }else{
            $(this).addClass('none')
        }
    })
})

$('.company__body-end-more').on('click', function(e){
    $('.company__body-end p').addClass('open')
    $(this).addClass('none')
})
$('.company__body-end-more').on('click', function(e){
    $('.services__body-info-text').addClass('open')
    $(this).addClass('none')
})


$('.burger').on('click', function(e){
    $(this).toggleClass('active')
    $('.header').toggleClass('active')
    $('body').toggleClass('hidden')
})


var splide = new Splide( '.splide', {
    type   : 'loop',
    pagination: false
    } );
    
    splide.mount();