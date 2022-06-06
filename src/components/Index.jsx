import "./style.scss"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router"
import Aos from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react"
export default function Index ({sneaker, createSneaker, deleteSneaker}){
  useEffect(()=>{
    Aos.init({duration: 2000});
  },)
    const navigate = useNavigate()

    const [newInput, setNewInput] = useState({
        name:"",
        image:"",
        release:"",
        description:"",
    })


    const handleChange = (event) =>{
        setNewInput({...newInput,[event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        createSneaker(newInput)
        setNewInput({
        name:"",
        image:"",
        release:"",
        description:"",
        })
    }

    const removeSneaker = (id) =>{
      deleteSneaker(id)
    }
    const updateSneaker =(id)=>{
      navigate("/sneaker/" + id)

    }

    const loaded = ()=>

         sneaker.map((shoe)=>(<>
          <div className="sneaks" key={shoe._id}>
            <Link to="/sneakers/:id"><img className="pic" src={shoe.image} alt={shoe.name}/></Link>
                
            </div>
           <table className="data">
             Name
             <td>{shoe.name}</td>
             Year
             <td>{shoe.release}</td>
             Details
             <td>{shoe.description}</td>
           </table>
            <button className="button" onClick= {()=>removeSneaker(shoe._id)}>Delete Sneaker</button>
            <button className="button" onClick= {()=>updateSneaker(shoe._id)}>Update Sneaker</button>
           
            </>
        ))

    const loading = () => <h1>Loading</h1>
    
    return(
        <div>
          <h1>Kicks Kollection</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newInput.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newInput.image}
          name="image"
          placeholder="sneaker link"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newInput.release}
          name="release"
          placeholder="release year"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newInput.description}
          name="description"
          placeholder="descriptions"
          onChange={handleChange}
        />
        <button className="button"><input className="inner" type="submit" value="Add new Kicks" /></button>
      </form>
     {sneaker ? loaded() : loading()}
     </div>
    )
    }