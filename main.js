
const video = document.getElementById("video");

function setVideo() {
    document.body.appendChild(video);
    video.style.zIndex = "-1";
}

let name = ""
document.getElementById("name").addEventListener("keyup",(e) => {
    if (e.key === "Enter")
    {
        name = document.getElementById("name").value;
        document.body.innerHTML = "";
        page1(name)
    }
})


function page1(e) {
    setVideo();
    let content = document.createElement("h1");
    content.classList.add("h1");

    let span = document.createElement("span");
    span.innerText = e;
    content.appendChild(span);
    content.innerHTML += ` Are You Alone?`;

    window.addEventListener("resize", () => {
        window.innerWidth < 768 ? content.style.fontSize = "60px": content.style.fontSize = "100px";
    })

    interval(content);
    
    document.body.appendChild(content);
}

function interval(e) {
    let show = setInterval(() => {
        e.innerHTML = `You Ready?`;
        e.style.webkitAnimation= "show 7s 2";
        clearInterval(show);
        
        let showPage = setInterval(() => {
            document.body.removeChild(e);
            page2();
            clearInterval(showPage);
        }, 7000);

    }, 7000);
}

function page2() {
    let con = document.createElement("div");
    con.classList.add("center");
    
    let cardCon = document.createElement("div");
    cardCon.classList.add("card-con");

    let title = document.createElement("h1");
    title.classList.add("h11");
    title.style.animationName = "";
    title.innerHTML = "Pick A Side";



    window.addEventListener("resize", () => {
        if (window.innerWidth < 768) {
            title.style.cssText = "font-size:60px; margin-top:120px";
            cardCon.style.cssText = "margin:60px 10px;";
        }else{
            title.style.cssText = "font-size:100px; margin-top:50px";
            cardCon.style.cssText = "margin:60px 90px;";
        }
    })
   

    CreateCard("red",cardCon);
    CreateCard("blue",cardCon);

    con.append(cardCon);
    document.body.append(title,con);
    
}

function CreateCard(color,con) {
    let cardBody = document.createElement("div");
    cardBody.setAttribute('class', 'card-body');
    cardBody.innerHTML = "?";
    cardBody.style.borderColor = color;

    window.addEventListener("resize", () => {
        window.innerWidth < 768 ? cardBody.style.cssText += "width:150px; height:250px; font-size:100px":cardBody.style.cssText += "width:250px; height:300px; font-size:200px"; 
    })
    
    con.appendChild(cardBody);
    document.body.style.display = "block";
    document.body.style.height = "unset";

    click(cardBody);
}


function click(e) {
    e.addEventListener("click",() => {
        if (e.style.borderColor == "red") {
            
            setTimeout(() => {
                window.location.assign("./red.html")
            }, 1000);
            
        }else if (e.style.borderColor == "blue"){
            setTimeout(() => {
                window.location.assign("./blue.html")
            }, 1000);
        }
    })
}


