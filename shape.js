let width = document.getElementById("width");
let height = document.getElementById("height");

let topRight = document.getElementById("topRight");
let topLeft = document.getElementById("topLeft");
let bottomRight = document.getElementById("bottomRight");
let bottomLeft = document.getElementById("bottomLeft");

let size = document.getElementById("size");
let borderRadius = document.getElementById("radius");
let borderColor = document.getElementById("borderColor");
let font = document.getElementById("font");
let fontColor = document.getElementById("fontColor");
let paddingDown = document.getElementById("paddingDown");
let paddingUp = document.getElementById("paddingUp");
let backgroundColor = document.getElementById("background");

// all input selector
let allShapeList = document.querySelectorAll(".controller #shapeList li input");
let allBtnList = document.querySelectorAll(".controller #buttonList li input");

// box shadow attributes
let xAxis = document.getElementById("x");
let yAxis = document.getElementById("y");
let alpha = document.getElementById("alpha");
let Blur = document.getElementById("blur");
let color = document.getElementById("color");
let shadowColor = document.getElementById("shadow");

// css generate button
let btn = document.getElementById("btn");


// css new code container
let cont = document.querySelector(".cont");

// reset button selector
let resetBtn = document.getElementById("reset");

let sectionGenerate = document.querySelector(".generateSection");

let actionCont = document.querySelector(".actionBtn");

let genBtn =  document.getElementById("generateBtn");
let genShape =  document.getElementById("generateShape");

let listBtn = document.getElementById("buttonList");
let listShape = document.getElementById("shapeList");

let shapeCont = document.querySelector(".shapeCont");

let childBtn = document.querySelector(".shapeCont .one");

let container =  document.querySelector(".container");


let closeMenuBtn = document.getElementById("close");


let div = document.createElement("div");
let newBtn = document.createElement("button");

let btnReset = document.getElementById("resetBtn");
let shapeReset = document.getElementById("resetShape");

let xBtn = document.getElementById("xBtn");
let yBtn = document.getElementById("yBtn");
let alphaBtn = document.getElementById("alphaBtn");
let blurBtn = document.getElementById("blurBtn");
let shadowColorBtn = document.getElementById("shadowBtn");

let text = document.getElementById("text");




function createAppendShape(){
    div.classList.add("css")
}


function createAppendBtn(){
    newBtn.innerHTML = "Button";
    newBtn.classList.add("one");
    shapeCont.appendChild(newBtn);

}

closeMenuBtn.onclick = function(){
    cont.style.display = "none";
}



let codeSet = true;
let counter = 1 ;
genBtn.onclick = function(){
    container.style.display = "flex";
    listBtn.style.display = "block";
    sectionGenerate.style.display = "flex";

    codeSet = false;

    listShape.style.display = "none";


    createAppendBtn();
    
    genBtn.classList.add("active");
    genShape.classList.remove("active");
    newBtn.style.display = "block";
    div.style.display = "none";


}
genShape.onclick = function(){
    container.style.display = "flex";
    listShape.style.display = "block";
    sectionGenerate.style.display = "flex";
    listBtn.style.display = "none";
    shapeCont.appendChild(div);
    
    codeSet = true;
    
    createAppendShape();
    genShape.classList.add("active");

    genBtn.classList.remove("active");
    newBtn.style.display = "none"
    div.style.display = "block";

    }
    

    
    





//function create & append child the contained the css code
function copyCode(){
        //create element that contained the css code
        let span = document.createElement("span");

        let copyCss = document.createElement("div");
        copyCss.classList = "css";
        cont.appendChild(span);
        cont.appendChild(copyCss);
        span.innerHTML = "STYLE CODE NUMBER  " + counter;

        if(codeSet === true){
            copyCss.innerHTML = `
            <p> width: ${width.value}px ;</p>
            <p> height: ${height.value}px ;</p>
            <p> box-shadow: ${x.value}px ${y.value }px ${alpha.value}px ${Blur.value}px ${shadowColor.value} ;</p>
            <p> border-radius: ${topLeft.value}px ${topRight.value }px ${bottomRight.value}px ${bottomLeft.value}px ;</p>
            <p> background-color: ${color.value} ;</p>
            `}else{
                copyCss.innerHTML = `
                <p> color: ${fontColor.value} ;</p>
                <p> border: ${size.value}px solid ${borderColor.value} ;</p>
                <p> padding: ${paddingUp.value}px ${paddingDown.value}px  ;</p>
                <p> font-size: ${font.value}rem ;</p>
                <p> box-shadow: ${xBtn.value}px ${yBtn.value}px ${alphaBtn.value}px ${blurBtn.value}px ${shadowColorBtn.value} ;</p>
                <p> border-radius: ${borderRadius.value}px ;</p>
                <p> background-color: ${backgroundColor.value} ;</p>
                `
            }
        
        }
            
        
// on click function generate css code
btn.onclick = function(){
    btn.innerHTML = "CSS Done!"
    btn.classList.add("clicked");

    // function return the generate button to default situation
    setTimeout(function (){
        btn.innerHTML = "Generate CSS"
        btn.classList.remove("clicked");
    },2000);


    copyCode();

    counter += 1;

    cont.style.display = 'block';
    //  print the css code in console 
    // console.log(`
    //     border-radius:${topLeft.value}px ${topRight.value }px  ${bottomRight.value}px  ${bottomLeft.value}px;
    //     box-Shadow:${x.value}px ${y.value }px  ${alpha.value}px  ${Blur.value}px ${color.value};
    // `);
}







//function that change the value of the border radius & box shadow from the range input
allShapeList.forEach(function(ele){
    ele.addEventListener("input", function(){
        div.style.backgroundColor = `${color.value}`
        div.style.width = width.value + 'px';
        div.style.height = height.value + 'px';
        div.style.borderTopLeftRadius = topLeft.value + 'px';
        div.style.borderTopRightRadius = topRight.value + 'px';
        div.style.borderBottomRightRadius = bottomRight.value + 'px';
        div.style.borderBottomLeftRadius = bottomLeft.value + 'px';
        div.style.boxShadow = `${x.value}px ${y.value}px ${alpha.value}px ${Blur.value}px ${shadowColor.value}`;
    })
});


let btnText =  document.getElementById("text");
allBtnList.forEach(function(ele){
    ele.addEventListener("input", function(){
        newBtn.style.border = `${size.value}px solid`
        newBtn.style.borderColor = `${borderColor.value}`;
        newBtn.style.borderRadius = `${borderRadius.value}px`;
        newBtn.style.padding = `${paddingUp.value}px ${paddingDown.value}px`
        newBtn.style.color = fontColor.value;
        newBtn.style.fontSize = `${font.value}em`;
        newBtn.style.boxShadow = `${xBtn.value}px ${yBtn.value}px ${alphaBtn.value}px ${blurBtn.value}px ${shadowColorBtn.value}`;
        newBtn.style.backgroundColor= backgroundColor.value;
        newBtn.innerHTML =  btnText.value;

    })
})


//reset button of all values 
shapeReset.onclick = function(){

    div.style.width = 200 + 'px';
    div.style.height = 200 + 'px';
    div.style.borderTopLeftRadius =  0 + 'px';
    div.style.borderTopRightRadius = 0 + 'px';
    div.style.borderBottomRightRadius = 0 + 'px';
    div.style.borderBottomLeftRadius = 0 + 'px';
    div.style.boxShadow = `${0}px ${0}px ${0}px ${"#000"}`;


    width.value = 0;
    height.value = 0;
    topRight.value = 0;
    topLeft.value = 0;
    bottomRight.value = 0; 
    bottomLeft.value = 0;
    x.value = 0;
    y.value = 0;
    alpha.value = 0;
    Blur.value = 0;    
}

btnReset.onclick = function(){
    size.value  = 0;
    font.value = 1 ;
    borderRadius.value = 0;
    paddingUp.value = 0;
    paddingDown.value = 0;
    xBtn.value = 0;
    yBtn.value = 0;
    alphaBtn.value = 0;
    blurBtn.value = 0; 
    text.value = "";
    newBtn.style.border = "none";
    newBtn.style.borderRadius = borderRadius.value + 'px'; 
    newBtn.style.padding = paddingUp.value + 'px';
    newBtn.style.backgroundColor = "#000";
    newBtn.style.color = "#fff";
    newBtn.style.fontSize = font.value + 'rem';
    newBtn.style.boxShadow = `${0}px ${0}px ${0}px ${"#000"}`;

}
