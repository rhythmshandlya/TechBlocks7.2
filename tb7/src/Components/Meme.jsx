import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./../App.css"

const Loading = () => { 
    return <div class="loader"></div>
}

const Meme = () => {

    const callApi =async () => {
        const res = await axios.get("https://meme-api.herokuapp.com/gimme");
        console.log(res.data);
        setMeme(res.data);
        setIsLoading(false);
    }

    const [meme, setMeme] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        callApi();
    }, []);
  
    return (
        <div>
            <h1>Random Meme Generator :)</h1>
            <button onClick={() => {
                callApi();
            }}>MORE MEMESSSS!
            </button>
            {
                isLoading ?
                    <Loading />
                    :
                    <div>
                        <h1>{meme.title}</h1>
                        <img width="300px" src={meme.url} alt='meme' />
                    </div>
            }
        </div>
    );
};

export default Meme;
