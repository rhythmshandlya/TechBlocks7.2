import React, {useRef,useState,useEffect, useContext} from 'react';
import DetailContext from '../Context/DetailContext';

//useRef
const UseRef = () => {
    const context = useContext(DetailContext);
    const [text, setText] = useState(0);
    //Do not use ref for updating content, use it for dom manipulation.
    const refToInput = useRef(0);

    useEffect(() => {
        console.log(context.details);
    }, []);
    
    useEffect(() => {
        if (Number(text[text.length-1]) % 2 === 0) {
            refToInput.current.style.border = "5px solid green";
        } else { 
            refToInput.current.style.border = "5px solid red";
        }
    }, [text]);
    
    return <div>
        <hr/>
        <h1>useRef hook</h1>
        <input type="text" value={text}
            ref={refToInput}
            onChange={(e) => { 
            setText(e.target.value);
        }} />
    </div>;
};

export default UseRef;
