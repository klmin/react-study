import "./Body.css";
import { useState } from "react";

const Body = () => {

    console.log("update");

    const [state, setState] = useState({
        name:"",
        gender:"",
        birth:"",
        bio:""
    });

    const handleOnChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    return(
        <div>
            <div>
                <input name="name" value={state.name} onChange={handleOnChange} placeholder="이름"/>
            </div>
            <div>
                <select name="genrer" value={state.gender} onChange={handleOnChange}>
                    <option key={""}>선택</option>
                    <option key={"남성"}>남성</option>
                    <option key={"여성"}>여성</option>
                </select>
            </div>
            <div>
                <input type="date" name="birth" value={state.birth} onChange={handleOnChange} />
            </div>
            <div>
                <textarea name="bio" value={state.bio} onChange={handleOnChange} />
            </div>
        </div>
    );          
      
};  

export default Body;