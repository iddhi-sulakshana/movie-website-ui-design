// header search
    const searchBtn = document.querySelector(".search-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const searchBox = document.querySelector(".search-box");
    const inputBox = document.querySelector(".inputbox");

    inputBox.addEventListener("blur", () => {
        searchBtn.click();
    });

    searchBtn.onclick = () => {
        if(searchBox.classList.contains("active")){
          searchBox.classList.remove("active");
          searchBtn.innerHTML = '<i class="fa-light fa-search"></i>';
          return;
        }           
        inputBox.focus();
        searchBtn.innerHTML = '<i class="fa-light fa-x"></i>';
        searchBox.classList.add("active");
    }

// header loading
    const loadingbar = document.querySelector(".loading-bar");
    function loading(){
        var tl = gsap.timeline({repeat: 0, repeatDelay: 0.5});
        tl.to(loadingbar, {left: 0, right: "auto", duration: 0});
        tl.to(loadingbar, {width: "100%", duration: 1});
        tl.to(loadingbar, {right: 0, left: "auto", duration: 0});
        tl.to(loadingbar, {width: "0%", duration: 1});
    }
    loading();