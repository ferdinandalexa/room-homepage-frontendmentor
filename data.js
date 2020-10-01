const $prev = document.getElementById('prev');
const $next = document.getElementById('next');

const $slider = document.getElementById('slider');
const $slider__picture = document.getElementById('slider__picture');
const $slider__cover = document.getElementById('slider__cover');
const $slider__title = document.querySelector('.Slider__Title');
const $slider__copy = document.querySelector('.Slider__Copy > p');

const DATA = [
    {
        picture: '/public/images/mobile-image-hero-1.jpg',
        cover: '/public/images/desktop-image-hero-1.jpg',
        title: 'Discover innovative ways to decorate',
        copy: 'We provide unmatched quality, comfort and style for property owner across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and maje your property a reflection of you and what you love',
    },
    {
        picture: '/public/images/mobile-image-hero-2.jpg',
        cover: '/public/images/desktop-image-hero-2.jpg',
        title: 'We are available all across the globe',
        copy: 'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we are in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today',
    },
    {
        picture: '/public/images/mobile-image-hero-3.jpg',
        cover: '/public/images/desktop-image-hero-3.jpg',
        title: 'Manufactured with the best materials',
        copy: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology is made as perfect and as consistent as possible. With three decades of experience in this industr, we understand what customers want for ther home and office',
    }
]

let slide = 0;

function swapData(slide)
{
    const {
        picture,
        cover,
        title,
        copy
    } = DATA[slide];
    
    $slider__picture.srcset = picture;
    $slider__cover.src = cover;
    $slider__title.innerHTML = title;
    $slider__copy.innerHTML = copy;
}

function changeSlide(value)
{
    const MAX_VALUE = DATA.length - 1;
    
    slide += value
    if (slide > MAX_VALUE)
    slide = 0;
    else if (slide < 0)
    slide = 2;
    
    swapData(slide)
}

$prev.addEventListener('click', () => changeSlide(-1));
$next.addEventListener('click', () => changeSlide(1));