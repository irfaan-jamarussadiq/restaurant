fetch('nav.html')
.then(res => res.text())
.then(text => {
    let navbarScript = document.querySelector("script#replace_with_navbar");
    let navBarContainer = document.createElement("div");
    navBarContainer.innerHTML = text;
    navBarContainer.id = "header";
    navbarScript.parentNode.replaceChild(navBarContainer, navbarScript);
})