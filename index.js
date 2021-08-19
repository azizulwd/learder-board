// Change subtitle color
function subTitleColor(titleId){
    let subTitle = document.getElementById(titleId);
    subTitle.style.color = "#ff5722";
}

// Calling function
subTitleColor("top_player");
subTitleColor("top_Blogs");
subTitleColor("latest_course");

// Change header background
let headerBg = document.getElementById("header");
headerBg.style.backgroundColor = "#ff5722";


// Change player background color
let player = document.querySelectorAll(".players div");
for(let allPlayer of player){
    allPlayer.style.backgroundColor = "rgba(255, 87, 34, 0.2)";
    allPlayer.style.padding = "15px 0 15px 15px";
    allPlayer.style.borderRadius = "5px";
}


// Footer (ul list)
document.getElementById("add_Link").addEventListener("click", function(){
    let footerLink = document.getElementById("footer_links");
    let createLi = document.createElement("li");
    createLi.innerText = "New List";

    footerLink.appendChild(createLi);
});


// Increasing input number
document.getElementById("increase_number").addEventListener("click", function(){
    let numberInput = document.getElementById("number_input");
    let numberInputText = numberInput.value;

    if(numberInputText < 5){
        numberInputText = parseInt(numberInput.value) + 1;
    }
    else if(numberInputText == 5){
        document.getElementById("increase_number").setAttribute("disabled", true);
    }
    numberInput.value = numberInputText;
});

document.getElementById("number_input").addEventListener("keyup", function(){
    let numberInput = document.getElementById("number_input");
    let numberInputText = numberInput.value;
    numberInputText = parseInt(numberInput.value);

    if(numberInputText == 5){
        document.getElementById("increase_number").setAttribute("disabled", true);
    }
    else{
        document.getElementById("increase_number").removeAttribute("disabled");
    }
    numberInput.value = numberInputText;
});