// Animacije 

const observer = new IntersectionObserver((entires) => {
    entires.forEach((entry) =>{
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } 
            else {
                entry.target.classList.remove('show');
            }
        });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Header

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 400);
})

// FAQ

const faqs = document.querySelectorAll(".faq");

        faqs.forEach((faq) => {
            faq.addEventListener("click", () => {
                faq.classList.toggle("active");
            });
        });

        
// Kontakt form

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init());
  } else {
    init();
  }
  
  function init() {
    const yearElement = document.querySelector(".year");
    const todayYear = new Date().getFullYear();
  
    listenToName();
  }
  
  function listenToName() {
    let name = "";
    let mailcontent="";
    
    document.querySelector('#name').addEventListener('keyup', (event) => {
      name = event.target.value.trim();
    } );

    document.querySelector('#mailcontent').addEventListener('keyup', (event) => {
        mailcontent = event.target.value.trim();
    } );
  
    document.querySelector("#sendContact").addEventListener('click', (event) => {
      const link = `mailto:leon.bacanoivc@gmail.com?subject=Upit &body=${mailcontent}%0D%0A%0D%0ALp, ${name}`;
      event.target.href = link;
    });
  }