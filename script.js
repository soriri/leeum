//스크롤 시 header fade-in
const header = document.querySelector("#header");
const headerHeight = header.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
    let node = document.querySelectorAll(".logo_cont")[0];
    let node2 = document.querySelectorAll(".gnb_box")[0];

    if (window.scrollY > headerHeight) {
        header.setAttribute("style", "background: white;");
        node.setAttribute('style', "display:none")
        node2.setAttribute('style', "display:block")
    } else {

        header.setAttribute("style", "background: transparent;");
        node.setAttribute('style', "display:block")
        node2.setAttribute('style', "display:none" )
    }
    
});


