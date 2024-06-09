

//Q1 : Assume an array of different fruits is given (5 elements), 
//you have to use dom to add images for all  items of the array to the html element as (ul) and show it in the html file.
//give it a suitable style.
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





//Q2 : Create a function that takes two arguments, 
//one is an array and the other is a number, 
//then return the index of the given value or return -1 if the element cannot be found.

function indexOf(arr, number)
{
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] == number) {
            return i;
        }
    }
    return -1;
}
let numArray = [1, 2, 3, 4, 5]
let find = 10;
console.log(indexOf(numArray,find))

