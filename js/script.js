let xasArray=[50,100,150,200,250,300,350,400,450,500]
let yasArray=[100,200,300,400,500,600]
let ns = "http://www.w3.org/2000/svg"

let desvg = document.createElementNS("http://www.w3.org/2000/svg","svg");
desvg.setAttribute("id","mySvg");
desvg.setAttribute("viewBox","0 0 800 800");
desvg.setAttribute("width", "800px");
desvg.setAttribute("height", "800px");



function addSquare(x,y,color){
    let vierkant = document. createElementNS("http://www.w3.org/2000/svg", "rect");
    vierkant.setAttribute("x", x-10);
    vierkant.setAttribute("y", y-10);
    vierkant.setAttribute("width", 20);
    vierkant.setAttribute("height", 20);
    vierkant.setAttribute("fill", color);
    return vierkant;
}



function addCircle(cx,cy,color){
    let cirkel = document. createElementNS("http://www.w3.org/2000/svg", "circle");
    cirkel.setAttribute("cx", cx);
    cirkel.setAttribute("cy", cy);
    cirkel.setAttribute("r", 10);
    cirkel.setAttribute("fill", color);
    return cirkel;
}

function setRgb(r=0,g=0,b=0) {
    return "rgb("+r+","+g+","+b+")"
}

let red = 255
let rgb = setRgb(r=red)

for (let i = 0; i < yasArray.length; i++) {
    for (let ii = 0; ii < xasArray.length; ii++) {
        if (ii==0) {
            desvg.appendChild(addSquare(xasArray[ii],yasArray[i],rgb))
        }
        else{
            desvg.appendChild(addCircle(xasArray[ii],yasArray[i],rgb))
        }
        
    }
    red = red - (255/yasArray.length)
    rgb = setRgb(r=red)
}

document.body.appendChild(desvg)