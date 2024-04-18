window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
})

// Kontakt form

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init());
  } else {
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
      const link = `mailto:leon.bacanovic@gmail.com?subject=Upit &body=${mailcontent}%0D%0A%0D%0ALp, ${name}`;
      event.target.href = link;
    });
  }