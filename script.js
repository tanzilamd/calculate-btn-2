function cal(num1, num2) {
    console.log(`Sum = ${num1 + num2}`);
    console.log(`Sub = ${num1 - num2}`);
    console.log(`Mul = ${num1 * num2}`);
    console.log(`Div = ${num1 / num2}`);
    console.log(`Mod = ${num1 % num2}`);

    document.getElementById("myList").innerHTML = "";
    var node = document.createElement("LI");
    var textNode = document.createTextNode(`(${num1}, ${num2})`);
    node.appendChild(textNode);
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");
    var textNode = document.createTextNode(`Sum = ${num1 + num2}`);
    node.appendChild(textNode);
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");
    var textNode = document.createTextNode(`Sub = ${num1 - num2}`);
    node.appendChild(textNode);
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");
    var textNode = document.createTextNode(`Mul = ${num1 * num2}`);
    node.appendChild(textNode);
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");
    var textNode = document.createTextNode(`Div = ${num1 / num2}`);
    node.appendChild(textNode);
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");
    var textNode = document.createTextNode(`Mod = ${num1 % num2}`);
    node.appendChild(textNode);
    document.getElementById("myList").appendChild(node);
    
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

