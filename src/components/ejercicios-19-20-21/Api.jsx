import React, { useState, useEffect } from 'react';
import  getRandomUser  from '../../components/ejercicios-19-20-21/axios-config';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';

const Axiosexample = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        obtainUser()
    }, []);

    const obtainUser = () => {
        getRandomUser()
            .then((response) => {
                if(response.status === 200) {
                    setUser(response.data.value)
                    console.log(response.data.value)
                }
            })
            .catch((error) => {
                alert(`Sometimes wrong: ${error}`)
                console.log(error)
            })
    }

    
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    

    return (
        <div>
            <div>
            <h1>Chuck Norris</h1>
                <div>
                    <h3>{user}</h3>
                    <ThumbUpOutlinedIcon onClick={() =>setLike(like+1)}></ThumbUpOutlinedIcon>
                    {"  "}
                    <ThumbDownAltOutlinedIcon onClick={() => {dislike(setDislike(dislike+1))}}></ThumbDownAltOutlinedIcon>
                    <br />
                    <button onClick={obtainUser}>
                        Chistes al azar
                    </button>
                    <h4>Like: { like }</h4>
                    <h4>Dislike: { dislike }</h4>
                </div>
        </div>
        </div>
    );
}

export default Axiosexample;
