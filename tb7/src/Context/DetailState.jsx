import { useState } from "react";
import DetailContext from "./DetailContext";

const DetailState = (props) => {
    const [details, setDetails] = useState({name: "rhythm"});
    return <DetailContext.Provider value={{ details, setDetails }}>
        {props.children}
    </DetailContext.Provider>
}

export default DetailState;