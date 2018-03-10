let fruits = ["Orange", "Banana", "Potatoes", "Coconuts"]
let list = document.getElementById("fruitlist");
let ul = document.createElement("ul");

//window.onload = addToFruitList;

function addToFruitList() {

    let input = document.getElementById("input").value;

    if (input != "" && input != null) {
        //create elements
        let li = document.createElement("li");
        let div = document.createElement("div");
        let btnAdd = document.createElement("button");
        let btnDel = document.createElement("button");
        //apply property values
        li.innerText = input;
        btnAdd.innerText = "Add";
        btnDel.innerText = "Del";
        //ul»li»div»button
        div.appendChild(btnAdd);
        div.appendChild(btnDel);
        li.appendChild(div);
        ul.appendChild(li);
        list.appendChild(ul);
    }

}



document.getElementById("fruitlist").addEventListener("click", onListClick);

function onListClick(e) {

    if (e.target.innerText === "Add") {
        console.log("Add button clicked");








    } else {
        console.log("Del button clicked");
    }

}


