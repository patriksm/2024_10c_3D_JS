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

for(let i = 0; i < labirints.length; i++){
    var newElement = document.createElement("div");
    newElement.id = "element" + i;
    newElement.style.position = "absolute";
    newElement.style.background = labirints[i][8];
    newElement.style.opacity = labirints[i][9];
    newElement.style.width = `${labirints[i][6]}px`;
    newElement.style.height = `${labirints[i][7]}px`;
    newElement.style.transform = `
        rotateX(${labirints[i][3]}deg) 
        rotateY(${labirints[i][4]}deg) 
        rotateZ(${labirints[i][5]}deg)
        translate3d(
                ${labirints[i][0]}px,
                ${labirints[i][1]}px,
                ${labirints[i][2]}px
        )
    `;
    world.append(newElement);
}