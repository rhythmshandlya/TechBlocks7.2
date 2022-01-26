import {useState, useEffect, useRef} from "react"


const UseRef = () => {
    const [text, setText] = useState("");
    const inputRef = useRef();

    useEffect(() => {
        console.log(inputRef.current);
        if (Number(text[text.length-1]) % 2 === 0) {
            inputRef.current.style.borderColor = "green";
        } else { 
            inputRef.current.style.borderColor = "pink";
        }
    }, [text]);
    
    return (
        <div>
            <h1>The Reference Hook</h1>
            <input type="text" value={text} ref={inputRef} onChange={(e) => {
                setText(e.target.value);
            }} />
        </div>
    );
};

export default UseRef;
