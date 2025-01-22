import "./Body.css";
import { useRef, useState, useEffect } from "react";

const Body = () => {

    const [text, setText] = useState("");
    const textRef = useRef();

    const handleOnChange = (e) => {
        setText(e.target.value);
    }
   
    const handleOnClick = () => {
        if(text.length < 5){
            textRef.current.focus();
            return;
        }
        alert(text);
        setText("")
    }   

    return (
        <div>
            <input ref={textRef} value={text} onChange={handleOnChange}/>
            <button onClick={handleOnClick}>작성 완료</button>
        </div>
    );
}

export default Body;