var world = document.getElementById("pasaule");

var labirints = [
    [0, 0, 0, 0, 0, 0, 200, 200, "url('img/wood.jpg')", 0.5], //priekseja
    [0, -100, -100, 90, 0, 0, 200, 200, "green", 0.5], // griida
    [0, 0, -200, 0, 0, 0, 200, 200, "greenyellow", 0.5], //aizmugure
    [0, -100, 100, 90, 0, 0, 200, 200, "orange", 0.5],
    [100, 0, 100, 0, 90, 0, 200, 200, "black", 0.5],
    [100, 0, -100, 0, 90, 0, 200, 200, "red", 0.5],
    [300, 40, 0, 78, 54, 45, 300, 400, "orange", 0.8],
];

var lab1 = [
    [0, 100, 0, 90, 0, 0, 2000, 2000, "red", 0.5],
    [0, 0, -1000, 0, 0, 0, 2000, 200, "green", 0.5],
    [-1000, 0, 0, 0, 90, 0, 2000, 200, "orange", 0.5],
    [1000, 0, 0, 0, 90, 0, 2000, 200, "brown", 0.5],
];

function zimetLabirintu(map){
    for(let i = 0; i < map.length; i++){
        var newElement = document.createElement("div");
        newElement.id = "element" + i;
        newElement.style.position = "absolute";
        newElement.style.background = map[i][8];
        newElement.style.opacity = map[i][9];
        newElement.style.width = `${map[i][6]}px`;
        newElement.style.height = `${map[i][7]}px`;
        newElement.style.transform = `
            
            translate3d(
                    ${600 - map[i][6]/2 + map[i][0]}px,
                    ${400 - map[i][7]/2 + map[i][1]}px,
                    ${map[i][2]}px
            )

            rotateX(${map[i][3]}deg) 
            rotateY(${map[i][4]}deg) 
            rotateZ(${map[i][5]}deg)
        `;
        world.append(newElement);
    }
}

zimetLabirintu(lab1);

var t = 0;

function update(){
    t+=1;

    world.style.transform = `
    
        translate3d(${0}px, ${0}px, ${0}px)

        rotateX(${0}deg)

        rotateY(${0}deg)

        rotateZ(${0}deg)
        
    `;
}

let spele = setInterval(update, 10);