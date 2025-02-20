import React from "react";

const InputField = ({ text, updateText}) => {
    return( 
        <input type="text" value={text} onChange={updateText} placeholder="Type note..."></input>
    )
}

export default InputField;