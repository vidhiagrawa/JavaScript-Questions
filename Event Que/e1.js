// create a toggle button that changes the scren to dark mode when clicked and light mode when cllicked again

    let btn = document.createElement("button");
    let body = document.querySelector("body");
    btn.innerText = "change mode";
    let curr = "light";
    console.log(btn)
    body.append(btn)
    btn.addEventListener("click", () => {
        if( curr === "light" ){
            curr = "dark"
            body.style.backgroundColor = "black"
        }else{
            curr = "light"
            body.style.backgroundColor = "grey"
        }
        console.log(curr)
    })


