$(document).ready(function() {
const btn = document.querySelector('.btn');
const changeColor = document.querySelector('.changeColor');
const bodyBG = document.querySelector('body');
const colors = ['yellow', 'red', 'green', '#fefefe', '#3ce', 'pink', 'purple'];

//Using Es6
//add color event
    changeColor.addEventListener('click', addColor = () => {
        let  userInput = window.prompt("Enter one valid color \n example:blue, #eee, #33e");    
        //if the value is sepearted by commas handle below
        let sanitize = userInput.replace(/,/g, "");
        const sanitized = sanitize.split(" ");
        //or use ternary operator
        let verified = (userInput == "") ?  alert("Please enter a valid color"): colors.push.apply(colors, sanitized);
    });

    //change color randomly
    btn.addEventListener('click', colorChanger = () => {
        let random = Math.floor(Math.random()*colors.length);
        bodyBG.style.backgroundColor = colors[random];

    });

});