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

// Nav Bar ---------------------------------------------------------
const nav = document.querySelector('nav')  // this is the parent we wish to append the new link to
const servicesLink = document.createElement('a') //instantiate the element
servicesLink.textContent = 'Services'               // tack text content
servicesLink.href = '#'                            // tack any other attrs we need                          
nav.appendChild(servicesLink)                   // appending to the parent (research 'append')

const productLink = document.createElement('a') 
productLink.textContent = 'Product'               
productLink.href = '#'                        
nav.appendChild(productLink)                  

const visionLink = document.createElement('a') 
visionLink.textContent = 'Vision'               
visionLink.href = '#'                        
nav.appendChild(visionLink)

const featuresLink = document.createElement('a') 
featuresLink.textContent = 'Features'               
featuresLink.href = '#'                        
nav.appendChild(featuresLink)

const aboutLink = document.createElement('a') 
aboutLink.textContent = 'About'               
aboutLink.href = '#'                        
nav.appendChild(aboutLink)

const contactLink = document.createElement('a') 
contactLink.textContent = 'Contact'               
contactLink.href = '#'                        
nav.appendChild(contactLink)  

// -------------------------------------------------------------------

//Main Content

let mainImg = document.getElementById("cta-img");
mainImg.setAttribute('src', 'img/header-img.png')


let mainTextBody = document.querySelector('.cta-text')

let headingText = mainTextBody.querySelector('h1')
let headingButton = mainTextBody.querySelector('button')

headingText.innerText = "Dom \n is \n Awesome"
headingButton.textContent = "Get Started"


let firstTopContent = document.querySelector('.top-content .text-content:nth-of-type(1)')
let secondTopContent = document.querySelector('.top-content .text-content:nth-of-type(2)')

let featuresHeader = firstTopContent.querySelector('h4')
featuresHeader.textContent = "Features"
let featuresText = firstTopContent.querySelector('p')
featuresText.innerText = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let aboutHeader = secondTopContent.querySelector('h4')
let aboutText = secondTopContent.querySelector('p')
aboutHeader.textContent = "About"
aboutText.innerText = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
// featuresHeader.textContent = "Features"
// let lowerTextContent = document.getElementById('.text-content')

let mainContentImg = document.getElementById('middle-img')
mainContentImg.setAttribute('src', 'img/mid-page-accent.jpg')

let firstBottomContent = document.querySelector('.bottom-content .text-content:nth-of-type(1)')
let secondBottomContent = document.querySelector('.bottom-content .text-content:nth-of-type(2)')
let thirdBottomContent = document.querySelector('.bottom-content .text-content:nth-of-type(3)')

let servicesHeader = firstBottomContent.querySelector('h4')
let servicesText = firstBottomContent.querySelector('p')
servicesHeader.innerHTML = "Services"
servicesText.innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let productHeader = secondBottomContent.querySelector('h4')
let productText = secondBottomContent.querySelector('p')
productHeader.innerHTML = "Product"
productText.innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let visionHeader = thirdBottomContent.querySelector('h4')
let visionText = thirdBottomContent.querySelector('p')
visionHeader.innerHTML = "Vision"
visionText.innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let contactSection = document.querySelector('.contact')
let contactHeader = contactSection.querySelector('h4')
contactHeader.innerHTML = "Contact"

let contactParagraphs = contactSection.querySelectorAll('p')

contactParagraphs[0].innerText = "123 Way 456 Street \n Somewhere, USA"
contactParagraphs[1].innerHTML = "1 (888) 888-8888"
contactParagraphs[2].innerHTML = "sales@greatidea.io"

let copyright = document.querySelector('footer')
let copyrightText = copyright.querySelector ('p')

copyright.innerHTML = "Copyright Great Idea! 2018"

//Apending links

const exampleOneLink = document.createElement('a') 
exampleOneLink.textContent = 'Child One'               
exampleOneLink.href = '#'                        
nav.appendChild(exampleOneLink) 

const exampleTwoLink = document.createElement('a') 
exampleTwoLink.textContent = 'Child Two'               
exampleTwoLink.href = '#'                        
nav.appendChild(exampleTwoLink)

//Green Text
// let getNav = document.querySelector('nav')
// let allNavLinks = getNav.querySelectorAll('a')
// allNavLinks.style.color = 'green'

let allNavLinks = nav.querySelectorAll('a');
allNavLinks.forEach(link => {
  link.style.color = 'green'
})

// "main-content": {
//   "features-h4":"Features",
//   "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "about-h4":"About",
//   "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "middle-img-src": "img/mid-page-accent.jpg",
//   "services-h4":"Services",
//   "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "product-h4":"Product",
//   "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "vision-h4":"Vision",
//   "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
// }

// "contact": {
//   "contact-h4" : "Contact",
//   "address" : "123 Way 456 Street Somewhere, USA",
//   "phone" : "1 (888) 888-8888",
//   "email" : "sales@greatidea.io",
// },
// "footer": {
//   "copyright" : "Copyright Great Idea! 2018"
// },