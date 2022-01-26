import { useState, useEffect } from "react"
import axios from "axios";

//https://meme-api.herokuapp.com/gimme
const MemeGen = () => {

    const [meme, setMeme] = useState({});

    const fetchApi =async () => {
        const { data } = await axios.get('https://meme-api.herokuapp.com/gimme');
        setMeme(data);
    }

    useEffect( () => {
        fetchApi();
    }, []);
    
    return(
        <div>
            <h1>Meme Generator</h1>
            <button onClick={() => {
                fetchApi();
            }}>SEND MORE!</button>
            <h2>{meme.title}</h2>
            <img width="300px" src={meme.url} alt="meme"></img>
            
        </div>
    );
};

export default MemeGen;
