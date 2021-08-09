import React, { useState } from "react";

function getRandomColor() {
    const colorList = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return colorList[randomIndex];
}


function ColorBox() {

   
    const [color, setColor] = useState(() =>{
        const initColor = localStorage.getItem("color-list") || "cyan";
        console.log(initColor);
        return initColor;
    });

  
    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem("color-list",newColor);
    }



    return (
        <div className="color-box" style={{ background: color }} onClick={handleBoxClick} >
           
        </div>
    )
}
export default ColorBox;