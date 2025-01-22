import "./Body.css";
import { useRef, useState, useEffect } from "react";

const Body = () => {

    const [text, setText] = useState("");
    const [text1, setText1] = useState("");
    const textRef = useRef();

    const handleOnChange = (e) => {
        console.log(`text change value : ${e.target.value}`)
        setText(e.target.value);
    }
    const handleOnChange1 = (e) => {
        console.log(`text1 change value : ${e.target.value}`)
        setText1(e.target.value);
    }

    const handleOnClick = () => {
        alert(text);
        textRef.current.value = "";
    }   

    useEffect(() => {
        console.log(`update text : ${text}`);
    }, [text]);

    return (
        <div>
            <input ref={textRef} value={text} onChange={handleOnChange}/>
            <button onClick={handleOnClick}>작성 완료</button>
            <input value={text1} onChange={handleOnChange1}/>
        </div>
    );
}

export default Body;