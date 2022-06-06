import { useParams } from 'react-router-dom'
function Show(props) {
  const { id } = useParams();
  const sneaker = props.sneaker
  const shoe = sneaker.find((p) => p._id === id)

  return (
    <div className="person">
      <h1>{shoe.name}</h1>
      <h2>{shoe.release}</h2>
      <img src={shoe.image} alt={shoe.name} />
      
    </div>
  )
}
export default Show