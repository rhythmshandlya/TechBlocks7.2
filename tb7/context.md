import { useState, createContext } from "react";
const DetailContext = createContext();

const DetailState = (props) => {
    const [state, setState] = useState({});
    return <DetailContext.Provider value={{ state, setState }}>
        {props.children}
    </DetailContext.Provider>
}

export default DetailState;