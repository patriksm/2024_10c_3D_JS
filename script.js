var world = document.getElementById("pasaule");
var t=0;

var labirints = [
    [0, 0, 1000, 0, 0, 0, 2000, 200, "url('img/siena.jpg')", 1], //priekseja
    [0, 100, 0, 90, 0, 0, 2000, 2000, "url('img/zeme.jpg')", 1], // griida
    [0, 0, -1000, 0, 0, 0, 2000, 200, "url('img/siena.jpg')", 1], //aizmugure
    [-1000, 0, 0, 0, 90, 0, 2000, 200, "url('img/siena.jpg')", 1],
    [1000, 0, 0, 0, 90, 0, 2000, 200, "url('img/siena.jpg')", 1],
    [150, 0, 0, 0, 0, 0, 200, 200, "url('img/siena.jpg')", 1],//1
    [50, 0, 300, 0, 90, 0, 600, 200, "url('img/siena.jpg')", 1],//2
    [250, 0, 200, 0, 90, 0, 400, 200, "url('img/siena.jpg')", 1],//3
    [500, 0, 400, 0, 0, 0, 500, 200, "url('img/siena.jpg')", 1],//4
    [300, 0, 600, 0, 0, 0, 500, 200, "url('img/siena.jpg')", 1],//5
    [750, 0, 700, 0, 90, 0, 600, 200, "url('img/siena.jpg')", 1],//6
    [550, 0, 800, 0, 90, 0, 400, 200, "url('img/siena.jpg')", 1],//7
    [50, 0, 900, 0, 90, 0, 200, 200, "url('img/siena.jpg')", 1],//8
    [150, 0, 800, 0, 0, 0, 200, 200, "url('img/siena.jpg')", 1],//9
    [250, 0, 900, 0, 90, 0, 200, 200, "url('img/siena.jpg')", 1],//10
    [-600, 0, 800, 0, 0, 0, 800, 200, "url('img/siena.jpg')", 1],//11
    [-600, 0, 600, 0, 0, 0, 800, 200, "url('img/siena.jpg')", 1],//12
    [-200, 0, 700, 0, 90, 0, 200, 200, "url('img/siena.jpg')", 1],//13
    [-200, 0, -300, 0, 90, 0, 1400, 200, "url('img/siena.jpg')", 1],//14
    [-400, 0, -300, 0, 90, 0, 1400, 200, "url('img/siena.jpg')", 1],//15
    [-300, 0, 400, 0, 0, 0, 200, 200, "url('img/siena.jpg')", 1],//16
    [-700, 0, 400, 0, 0, 0, 200, 200, "url('img/siena.jpg')", 1],//17
    [-700, 0, 200, 0, 0, 0, 200, 200, "url('img/siena.jpg')", 1],//18
    [-600, 0, 300, 0, 90, 0, 200, 200, "url('img/siena.jpg')", 1],//19
    [-800, 0, 300, 0, 90, 0, 200, 200, "url('img/siena.jpg')", 1],//20
    [-800, 0, 0, 0, 0, 0, 400, 200, "url('img/siena.jpg')", 1],//21
    [-800, 0, -200, 0, 0, 0, 400, 200, "url('img/siena.jpg')", 1],//22
    [-600, 0, -100, 0, 90, 0, 200, 200, "url('img/siena.jpg')", 1],//23
    [-600, 0, -400, 0, 0, 0, 400, 200, "url('img/siena.jpg')", 1],//24
    [-600, 0, -600, 0, 0, 0, 400, 200, "url('img/siena.jpg')", 1],//25
    [-800, 0, -500, 0, 90, 0, 200, 200, "url('img/siena.jpg')", 1],//26
    [-800, 0, -500, 0, 90, 0, 200, 200, "url('img/siena.jpg')", 1],//27
    [725, 0, 200, 0, 0, 0, 550, 200, "url('img/siena.jpg')", 1],//28
    [725, 0, 0, 0, 0, 0, 550, 200, "url('img/siena.jpg')", 1],//29
    [450, 0, 100, 0, 90, 0, 200, 200, "url('img/siena.jpg')", 1],//30
    [450, 0, -500, 0, 90, 0, 700, 200, "url('img/siena.jpg')", 1],//31
    [250, 0, -500, 0, 90, 0, 700, 200, "url('img/siena.jpg')", 1],//32
    [350, 0, -850, 0, 0, 0, 200, 200, "url('img/siena.jpg')", 1],//33
    [350, 0, -150, 0, 0, 0, 200, 200, "url('img/siena.jpg')", 1],//34
    [800, 0, -150, 0, 0, 0, 400, 200, "url('img/siena.jpg')", 1],//35
    [800, 0, -350, 0, 0, 0, 400, 200, "url('img/siena.jpg')", 1],//36
    [600, 0, -250, 0, 90, 0, 200, 200, "url('img/siena.jpg')", 1],//37
    [600, 0, -775, 0, 90, 0, 450, 200, "url('img/siena.jpg')", 1],//38
    [800, 0, -775, 0, 90, 0, 450, 200, "url('img/siena.jpg')", 1],//39
    [700, 0, -550, 0, 0, 0, 200, 200, "url('img/siena.jpg')", 1],//40
    [-100, 0, -550, 0, 0, 0, 200, 200, "url('img/siena.jpg')", 1],//41
    [-100, 0, -350, 0, 0, 0, 200, 200, "url('img/siena.jpg')", 1],//42
    [0, 0, -450, 0, 90, 0, 200, 200, "url('img/siena.jpg')", 1],//43
    [100, 0, -900, 0, 90, 0, 200, 200, "url('img/siena.jpg')", 1],//43
    [-50, 0, -800, 0, 0, 0, 300, 200, "url('img/siena.jpg')", 1],//43
    
];

for(let i = 0; i < labirints.length; i++){
    var newElement = document.createElement("div");
    newElement.id = "element" + i;
    newElement.style.position = "absolute";
    newElement.style.background = labirints[i][8];
    newElement.style.opacity = labirints[i][9];
    newElement.style.width = `${labirints[i][6]}px`;
    newElement.style.height = `${labirints[i][7]}px`;
    newElement.style.transform = `
        
        translate3d(
                ${600 - labirints[i][6]/2 + labirints[i][0]}px,
                ${400 - labirints[i][7]/2 + labirints[i][1]}px,
                ${labirints[i][2]}px
        )

        rotateX(${labirints[i][3]}deg) 
        rotateY(${labirints[i][4]}deg) 
        rotateZ(${labirints[i][5]}deg)
    `;
    world.append(newElement);
}

function update(){
    t+=1;

    world.style.transform = `translate3d(${0}px,${0}px, ${-1500}px) rotateX(-50deg) rotateY(${t}deg) rotateZ(0deg) `;

}

let view = setInterval(update, 100);