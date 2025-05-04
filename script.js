
    console.log("lets go with js ")
    let hamburger = document.querySelector(".hamb");
    let sidebar=document.querySelector(".side");

    hamburger.addEventListener("click" ,()=>{
        sidebar.classList.toggle("active")
    })