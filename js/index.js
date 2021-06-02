const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navItems = document.querySelectorAll('a');
console.log(navItems)

navItems[0].textContent = siteContent.nav['nav-item-1'];
navItems[1].textContent = siteContent.nav['nav-item-2'];
navItems[2].textContent = siteContent.nav['nav-item-3'];
navItems[3].textContent = siteContent.nav['nav-item-4'];
navItems[4].textContent = siteContent.nav['nav-item-5'];
navItems[5].textContent = siteContent.nav['nav-item-6'];

let cta = document.querySelector('.cta-text h1')
cta.innerText = 'Dom \n IS \n Awesome \n';

const button = document.querySelector('button');
button.textContent = siteContent.cta.button;

const ctaImage = document.getElementById('cta-img');
ctaImage.src = 'img/header-img.png';

let topSection = document.querySelectorAll('.top-content .text-content')

let top1 = topSection[0].children;
let top2 = topSection[1].children;

let featureHead = top1[0].textContent = (siteContent['main-content']['features-h4'])

let featureDesc = top1[1].textContent = (siteContent['main-content']['features-content'])

let aboutHead = top2[0].textContent = (siteContent['main-content']['about-h4'])

let aboutDesc = top2[1].textContent = (siteContent['main-content']['about-content'])

let middleimg = document.querySelector('#middle-img').src = siteContent['main-content']['middle-img-src']

let bottomSection = document.querySelectorAll('.bottom-content .text-content')

let bottom1 = bottomSection[0].children
let bottom2 = bottomSection[1].children
let bottom3 = bottomSection[2].children

let serviceHead = bottom1[0].textContent = (siteContent['main-content']['services-h4'])

let serviceDesc = bottom1[1].textContent = (siteContent['main-content']['services-content'])

let productHead = bottom2[0].textContent = (siteContent['main-content']['product-h4'])

let productDesc = bottom2[1].textContent = (siteContent['main-content']['product-content'])

let visionHead = bottom3[0].textContent = (siteContent['main-content']['vision-h4'])

let visionDesc = bottom3[1].textContent = (siteContent['main-content']['vision-content'])

let contactHead = document.querySelector('.contact h4').textContent = (siteContent['contact']['contact-h4'])

const contentMain = siteContent['main-content'];

let contactParas = document.querySelectorAll('.contact p')
let contactAddress = contactParas[0].textContent = (siteContent['contact']['address'])
let contactPhone = contactParas[1].textContent = (siteContent['contact']['phone'])
let contactEmail = contactParas[2].textContent = (siteContent['contact']['email'])

const footerSection = siteContent.footer;
const copyRightSection = document.querySelector('footer p');
copyRightSection.textContent = footerSection.copyright;