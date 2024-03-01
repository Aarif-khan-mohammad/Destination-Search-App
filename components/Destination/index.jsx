import './index.css'

const Destination = (props) =>{
  const {destinationDetails} = props;
  const {unqiueNo, imageUrl, name} = destinationDetails;
  return(
    <li className='card-container'>
      <div className='card'>
        <img src={imageUrl} alt={name} className='card-image'/>
        <p className='place-name'>{name}</p>
      </div>
    </li>
  )
}

export default Destination;