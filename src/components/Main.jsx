import Index from "./Index";
import Edit from "./Edit";
import Show from "../pages/Show";
import { Routes,Route } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Main (){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'v1-sneakers.p.rapidapi.com',
            'X-RapidAPI-Key': '2cc20d9a77msh1f6709770f552d4p19081ajsn96b3210eed57'
        }
    };
    
    fetch('https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=10', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    
    const [sneaker, setSneaker] = useState([])
    const URL = "https://sneakerapp-oa.herokuapp.com/sneakers"

    const getSneaker = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setSneaker(data)
    }
    const createSneaker = async (sneaker) => {
        await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(sneaker),
        })
        getSneaker()
      };
    const updateSneaker = async (sneaker, id) =>{
        await fetch (URL + "/" + id, {
            method: "PUT",
            headers:{
                "Content-Type": "Apllication/json",
            },
            body: JSON.stringify(sneaker)
        })
        getSneaker();
    }

    const deleteSneaker = async (id) =>{
        await fetch (URL + "/" + id, {
            method: "DELETE",
        })
        getSneaker()
    }



    useEffect(() => {getSneaker()}, []);

    return(
    <main>
        <Routes>
        <Route exact path= "/" element= {<Index sneaker={sneaker} createSneaker={createSneaker} deleteSneaker={deleteSneaker} />}/>
        <Route exact path= "/sneaker/:id" element= {<Edit sneaker={sneaker} updateSneaker={updateSneaker}/>}/>
        <Route exact path= "sneaker/:id" element= {<Show sneaker={sneaker}/>}/>
        </Routes>
    </main>
    )
}