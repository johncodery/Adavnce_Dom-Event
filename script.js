'use strict'

//HOW DOM REALLY WORKS BEHIND THE SCENE
//SELECTING ELEMENTS

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector(".header");
console.log(header);
document.getElementsByClassName("");
document.getElementsByTagName("");
document.getElementById("");


//CREATING AND INSERTING ELEMENT;
const letUs = document.createElement("div");
letUs.classList.add(".fantasy");
letUs.innerHTML = " love";
header.prepend(letUs);
header.append(letUs);
console.log(letUs);


//HOW TO INSERT MULTIPLE COPIES OF SAME ELEMENT;
header.append(letUs.cloneNode(true));

//THIS MEANS THAT ALL THE CHILD ELEMENT WILL BE COPIED;

// HOW TO DELETE/REMOVING ELEMENTS

// const deleteElement = document.querySelector(".buttonClick")
// .addEventListener("click", function() {
//     letUs.remove();

//     //or (OLD WAY OF DOING )👇🏻;
//     letUs.parentElement.remove(letUs)
// });


letUs.style.backgroundColor = "";

//NOTE FOR THE ON;


 console.log(getComputedStyle.height); 
 letUs.style.height = Number.parseFloat(getComputedStyle(letUs).height, 10) + 40 + "px";

// 40 here is the height;

//CSS CUSTOM PROPERTIES AKA CSS VARIABLES(PRIMARY, SECONDARY && TERTIARY COLORS);
//TO CHANGE ANY OF THIS COLORS YOU CAN SIMPLY CODE THIS WAY;

// const resistSetProperty = document.documentElement.style.setProperty("--color-primary")

//ATTRIBUTES

    const logo = document.querySelector(".imageKite");
    console.log(logo.alt);
    console.log(logo.src);
    console.log(logo.id);
    console.log(logo.className);
    console.log(logo.designer);
    
    //Here we can set the logo to whatever we want to new value
    console.log(logo.id = "Image_powerful_image");;

//note since "DESIGNER" here is not part of the standard, there's another way we can get it done👇🏻
    console.log(logo.getAttribute("designer"));
    console.log(logo.setAttribute("dataType", "string"));

    //DATA ATTRIBUTES;

    console.log(logo.dataset.versionNumber);

   const retab = document.querySelector(".cashImage");
   console.log(retab.alt);
console.log(retab.dataset.versionNumber);


    console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
console.log("height:", document.documentElement.clientHeight, "width: ", document.documentElement.clientWidth);

      //SMOOTH SCROLL

const buttonClick  = document.querySelector(".button");
const sectionPoint = document.getElementById("section")
buttonClick.addEventListener("click", function(e) {
    console.log('power the generator');

const sectionPoint = document.getElementById("section")
    console.log(sectionPoint.getBoundingClientRect());
    console.log('X/Y:', window.pageXOffset, window.pageYOffset);

//    console.log( e.target.getBouncingClientRect());
   console.log( `Give the height:`,document.documentElement.clientHeight, `Give me the width:`, document.documentElement.clientWidth);
   
//HERE WE CAN ACTUALLY PASS THIS INTO AN OBJECTIVE SO THAT WHEN WE CLICK ON THE BUTTON IT CAN MOVE SLOWLY👇🏻
     
//OLD SCHOOL WAY;

//   console.log({
//   left:window.scrollTo(section.left + window.pageXOffset),
//   top:window.scrollTo(section.top + window.pageYOffset),
//   behavior: "smooth",
//  });

 //MODERN WAY
 //tAKE THE NAME OF THE SECTION YOU WANT TO SCROLL TO;

 section.scrollIntoView({
  behavior: "smooth",
 })

   const CodeHios = 'Coding is a better way of than drag and drop method';
   console.log(CodeHios);

  console.log(window.scrollTo(section));
 
})      

//TYPES OF EVENT AND EVENT HANDLER;

  //MOUSE ENTER EVENT

  const h1 = document.querySelector("h1");
const h1Function =  function() {
    // alert("the point where the code is getting sweet!");
}
 h1.addEventListener("mouseenter", h1Function)

 //THIS IS A CASE WHERE YOU WANT TO CALL THE EVENTLISTENER just ONCE👇🏻, NOTE IT CAN BE PUT IN ANY PLACE IN OUR CODE

 const callOnce = function() {
    const eventcallerOnce = setTimeout(() => {
         return h1.removeEventListener("mouseenter", h1Function);
    }, 3000);
    console.log(eventcallerOnce);
 }
 callOnce();

//ANOTHER WAY OF USING ADDEVENTLISTNER 👇🏻;
    
// pressButton.onmouseenter = function(e) {
//     alert("Is always ery hard learning sth new😂");
   
// };


       //EVENT PROPAGATION: BUBBLING AND CAPTURING;

const randomInt = ((min, max) =>  Math.floor(Math.random() * (max - min)) + min);
const randomColor = (() => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`);
console.log(randomColor);

    //THE OVERALL PARENT FOLDER

//  document.querySelector(".nav").addEventListener("click", function(e) {
// //    e.preventDefault(); 
// this.style.backgroundColor = randomColor();
// console.log('NAV', e.target, e.currentTarget);
// });

       //PARENT FOLDER

// document.querySelector(".nav-links").addEventListener("click", function(e) {
//     // e.preventDefault(); 
//     this.style.backgroundColor = randomColor();
//     console.log('CONTAINER', e.target, e.currentTarget);
// })

        //THE LINK TAGS

const power =document.querySelectorAll(".nav-link").forEach((el) =>el.addEventListener("click", function(e) {
    e.preventDefault();
    // e.stopPropagation();
     this.style.backgroundColor = randomColor();
    console.log(`LINKS`, e.target, e.currentTarget === this);
    //HERE IS A CODE SHOWING IF YOU WANT TO CLICK ON A LINK LIKE FEATURE TO TAKE YOU TO ANOTHER PAGE
    const id = this.getAttribute("href");
    // console.log(id);
    // document.querySelector(id).scrollIntoView({
    //     behavior:'smooth'
    // });
 }))

 //EVENT DELEGATION

 //HERE IS A CODE SHOWING IF YOU WANT TO CLICK ON A LINK LIKE FEATURE TO TAKE YOU TO ANOTHER PAGE
 
 //In Event Delegation it's basically needs two steps;
 //1. Add eventListener to the common parent element;
 //2. Determine what element originated the event;

 document.querySelector('.nav-links').addEventListener("click", function(e) {
    e.preventDefault();
    console.log(e.target);

      //MATCHING STRATEGY
      //this is basically created that when click on any of the link can take you to the section of the webpage you wanted
    if(e.target.classList.contains("nav-link")) {
        const id = e.target.getAttribute("href");
            // console.log(id);
            // document.querySelector(id).scrollIntoView({
            //     behavior:'smooth'
            // })
    }
 });

 //          DOM TRAVERSING

const rH1 = document.querySelector("h1");

//   GOING DOWNWARD: CHILD ELEMENTS

console.log(rH1.querySelectorAll(".pan"));

console.log(rH1.childNodes) 

console.log(rH1.children);

//  rH1.firstElementChild.style.color = "red";
// rH1.lastElementChild.style.color = 'orangered';

//  GOING UPWARD: PARENTs ELEMENTS;

console.log(rH1.parentNode);
console.log(rH1.parentElement);

// rH1.closest("header").style.backgroundColor = "red";

rH1.closest("h1").style.backgroundColor = " ";
const rej = document.querySelector("span");
rej.closest("span").style.color = "brown";
const far = document.querySelector("h1");

           //SIBLINGS
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.nextSibling);
[...h1.parentElement.children].forEach((lit) =>
     {
        if(lit === h1){
           lit.style.color = "orangered";
        }
        // else {
        //     h1.style.fontSize = "50%";
        // }
});

// WORKING ON OPACITY WHERE IF I HOVER THE LINKS IT CHANGE OPACITY;
//MENU FADING ANIMATION👇🏻


const nav = document.querySelector(".nav");

const lak = document.querySelectorAll(".nav-link");


const mouseOver = function(e, opacity) {
    console.log(this === e.currentTarget);
  if(!e.target.classList.contains(".nav-link")) {
    console.log( e.currentTarget);
    const stp = e.target;
    const htr = stp.closest(".nav").querySelectorAll(".nav-link");
    const App = stp.closest(".nav").querySelector(".pigApp");
    htr.forEach(el => {
        if(el !== stp) {
            el.style.opacity = opacity;  
        }
        App.style.opacity = opacity;
    })
  }
    const str = e.target;
    console.log(str);
};

lak.forEach(mov => mov.addEventListener("mouseover", function(e) {
    mouseOver( e, 0.5) 
    //you can use bind method => mouseover.bind(0.5)" you can put in wherever you see that function beside mouseover"
}));

lak.forEach(ca => ca.addEventListener("mouseout",  function(e) {
    mouseOver( e, 1) 
}))


//       //IMPLEMENTING A STICKY NAVIGATION: THE SCROLL EVENT;

const initialCoodinate = section.getBoundingClientRect().height;
console.log(initialCoodinate);

 const windowX = window.addEventListener("scroll", function() {
    console.log(window.scrollY); 
});




   //This doesn't work;

if(window.scrollY > initialCoodinate.top) {
// nav.classList.add("sticky");
}
else {
   nav.classList.remove("sticky");  
}

// A BETTER WAY: THE INTERSECTION OF OBSERVER API;
// This the appearing of navigation bars after you reach certain height on your webPage

const functionObs = function(entries, observer) {
    entries.forEach(el => {
        console.log(el);
    });
}

const obsOption = {
    root: null,
    threshold: [0,  0.2],
}

// const observerInter = new IntersectionObserver(functionObs, obsOption);
// observerInter.observe(section);

const headerOver = document.querySelector(".header")
const callFun = function(entries) {
  const [entry] = entries;
  console.log(entry);
  if(!entry.working) 
    //please later time make it visible it's important;
    nav.classList.add('sticky');

else {
 nav.classList.remove("sticky")
}
}
const optionObs = {
    root: null,
    threshold: 0,
    rootMargin: `-${initialCoodinate}px`,
} 
const interObs = new IntersectionObserver(callFun, optionObs);
console.log(interObs.observe(header));


// const pigApp = document.querySelector(".pigApp")
// const firstCorrdinates = pigApp.getBoundingClientRect().height;
// console.log(firstCorrdinates);
// const firstFun = function(first) {
//     const [firster] = first;
//     console.log(firster);
//     if(!firster.tap) {
//         pigApp.classList.add("sticky")
//     }
//     else {
//         pigApp.classList.remove("sticky")
//     }
// }
// const obOption = {
//     root: null,
//     threshold: 0,
//     rootMargin: `-${firstCorrdinates}px`
// }

// const firstInterSect = new IntersectionObserver(firstFun, obOption);
// firstInterSect.observe(pigApp);


//REVEALING AN ELEMENTS ON SCROLL
//This the appearing of elements or words in a smooth way on webpage(i.e written words we used h1, and co wrote) after you reach certain height on your webPage


const sectionObs = document.querySelectorAll(".section");
const onFUnObserver = function(va, obs) {
  const [cay] = va;
  console.log(cay); 
  cay.target.classList.remove("section")
   // guard class
  if(!cay.isIntersecting) return;
  //this is when you want to clear all the console.log from developer tool 
  obs.unoberve(cay.target);
}

const newObs = new IntersectionObserver(onFUnObserver, {
    root: null,
    threshold: 0.15,
})
sectionObs.forEach(mi => {
    newObs.observe(sectionObs);
    mi.classList.add("section")
})

//LAZY LOADING IMAGES

const images = document.querySelectorAll('img[data-src]');
const imgObserver = function(img, imgObserver) {
   const [mg] = img;
   console.log(mg);
   mg.target.src = mg.target.dataset.src;
   if(!mg.isIntersecting) return;
   
   mg.target.addEventListener("load", function() {
    //    mg.target.classList.remove('lazy-images');
    })
    imgObserver.unobserve(mg.target);
}
const imgInterSect = new IntersectionObserver(imgObserver, {
   root: null,
   threshold:0, 
   rootMargin: "200px",
})

// images.forEach(ma => 
//     imgInterSect.observe(img);
// )

      //slide show on images

const generalFamilySlidecover = function(){


      const btnLeft  = document.querySelector(".slider__btn--left");
      const btnRight = document.querySelector(".slider__btn--right");
    
      const slide = document.querySelectorAll(".slide");

     // note at the beginning this was uncommented to carryout the task, make sure when using to test
     // your work make it visible by uncommenting on it👇🏻
     //   const slider = document.querySelector(".slider");
    //   slider.style.transform =  'scale(0.2) translateX(-800px)';
    //   slider.style.overflow = 'visible';

    let curSlide = 0;
    const maxSlide  = slide.length;
    const marginSlide = slide.length;


// slide.forEach((s, i) => s.style.transform = `translateX(${100 * i }%)`); 

const goToSlide = function(slidez) {
    slide.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slidez)}%)`);
  //Note the current index(i) since it ranges from i = 0, 
                //Let the slidez = 1: i = 0, 1, 2, 3
// output : -100, 0, 100, 200, ;
}
// goToSlide(0)
const nextButton = function() {
    if(curSlide === maxSlide - 1) {
        curSlide = 0 
    }
     else {
        curSlide ++; 
     }   
      goToSlide(curSlide);
//This works when once the arrowRight is clicked let it change bgColor to the particula color       
    //   changeSlideButbgColor(curSlide)
}
const previousButton = function() {
    if(curSlide === 0) {
        curSlide = maxSlide - 1
    }
   
    else {
        curSlide--;
       
    }
    goToSlide(curSlide); 
    //This works when once the arrowLeft is clicked let it change bgColor to the particula color  
    // changeSlideButbgColor(curSlide)
}
btnRight.addEventListener("click", nextButton); 
btnLeft.addEventListener('click', previousButton);
   
       // WORKING ON THE ARROWKEYS
      
        //FIRST STEP

const eKeyArrowLeft = function(e) {
 
    if(e.key === 'ArrowLeft') {
        previousButton();
       
    }
     else if (e.key === 'ArrowRight') {
        nextButton();
    }  
};
document.addEventListener("keydown", eKeyArrowLeft);

        //SECOND STEP

// document.addEventListener("keydown", function(e) {
//    if(e.key === "ArrowLeft")  previousButton();
//    e.key === "ArrowRight" &&  nextButton();
// })

// WORKING ON THE DOTS

const dotContainer = document.querySelector(".dots");
const dotFunction = function() {
  slide.forEach(function(_, i) {
    dotContainer.insertAdjacentHTML('beforeend', `<button class="dots_dot dots__dot--active" data-slide="${i}"></button>`);
});
}
// dotFunction();

//NOTE THE CODE ON HERE IS SHOWING WHENEVER WE CHANGE THE SLIDE WE KNOW WHICH SLIDE IS CURRENTLY
//THE ACTIVE ONE: WITH THE DOT/ BUTTON WHICH WILL CHANGES 
//WITH DIFFERENT BACKGROUNDCOLORS AS DIFFERENT CURRENTsLIDE IS CLICK;

// const changeSlideButbgColor = function(slide) {
//     dotContainer.querySelectorAll(".dots").forEach(dot => dot.classList.remove("dots__dot--active"));
//     document.querySelector(`.dots__dot[data-slide = ${slide}]`).classList.add("dots__dot--active");
// }
// changeSlideButbgColor();

dotContainer.addEventListener("click", function(e) {
   if(!e.target.classList.contains ("dots__dot")) {
    console.log("Click on the dot");
    const [dotSlide] = e.target.dataset.slide;
    goToSlide(dotSlide);
 //This works when once any of the dots is clicked let it change bgColor to the particula color  
    // changeSlideButbgColor(dotSlide);
   }
});
const initalRefactoringFunctionsAllCalling = function() {
    dotFunction();
    goToSlide(0);
}
initalRefactoringFunctionsAllCalling();

}
generalFamilySlidecover()
