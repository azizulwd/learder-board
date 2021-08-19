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