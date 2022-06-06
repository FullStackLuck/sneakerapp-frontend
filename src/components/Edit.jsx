import { useParams, useNavigate } from "react-router"
import { useState } from "react"


export default function Edit({updateSneaker, sneaker,}){
    const {id} = useParams();
    const shoe = sneaker.find((s)=>s._id === id);
    const navigate = useNavigate();

    const [editInput, setEditInput] = useState(shoe);

    const handleChange = (event) =>{
        setEditInput((prevState)=>({ ...prevState, [event.target.name]: event.target.value}))
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        updateSneaker(editInput, id);
        navigate("/")
    }
    return(<>
        <img className="show" src={shoe.image} alt={shoe.name}/>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editInput.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editInput.image}
          name="image"
          placeholder="sneaker link"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editInput.release}
          name="release"
          placeholder="release year"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editInput.description}
          name="description"
          placeholder="descriptions"
          onChange={handleChange}
        />
        <button type="submit">Update Kicks</button>
      </form>
      </>
    )

}