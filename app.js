let fruits = ["Dragon Fruit", "Mango", "Passion Fruit", "Lychee", "Pineapple"];
let imgsURL = [
    "imgs/Dragon-fruit.jpg",
    "imgs/Mango.jpeg",
    "imgs/passtion-fruit.jpg",
    "imgs/lychee.jpg",
    "imgs/pineapple.jpeg"
]
const heroDiv = document.createElement("div");
const unOrderList = document.getElementById("fruitsList");


document.body.appendChild(heroDiv);
heroDiv.appendChild(unOrderList);

for (let i = 0; i < fruits.length; i++) {
    const itemText = document.createTextNode(fruits[i]);
    const itemImg = document.createElement("img");
    const listItem = document.createElement("li");
    itemImg.src = imgsURL[i]

    unOrderList.appendChild(listItem);
    listItem.appendChild(itemText);
    listItem.appendChild(itemImg);
    
    //styling 
    itemImg.style.width = "200px"
    itemImg.style.height = "150px"

    unOrderList.style.display = "flex"
    unOrderList.style.listStyle = "none"
    
    listItem.style.textAlign = "center"

    heroDiv.style.position = "absolute";
    heroDiv.style.top = "50%";
    heroDiv.style.left = "50%";
    heroDiv.style.transform = "translate(-50%, -50%)";
    
}








