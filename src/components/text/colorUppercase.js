import React, { useState } from 'react';
import './colorUpper.css'

const ColorUppercase = ({ text, color, }) => {
    const [isUpperCase, setIsUppercase] = useState(false);

    const handleClick = () => {
    setIsUppercase(!isUpperCase);
    };

    return (
    <div className='color-uppercase' style={{ backgroundColor: color, }}>
        <p>Clique no texto abaixo</p>
        <h1 onClick={handleClick}
        style={{ textTransform: isUpperCase ? 'uppercase' : 'none', cursor: 'pointer' }}>
        {isUpperCase ? text.toUpperCase() : text} ☕ {} 
        </h1>
    </div>
    );
};

export default ColorUppercase
























// import React, {useState} from "react";
// const ColorUppercase = ({text, color }) => {
//     const [isUpperCase, setIsUppercase ] = useState(false);

//     const click = () => {
//         setIsUppercase(!isUpperCase)
//     };
//     }
    
//     return (
//         <div style={{backgroundColor: color}}>
//             <h1>coffee and codes ☕</h1>
//         </div>
//     )
// }

// export default ColorUppercase