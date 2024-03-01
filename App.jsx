import {Component} from 'react';
import Destination from './components/Destination/index.jsx'
import './App.css'


const InitialDestinationList = [
    {
      "uniqueNo": 1,
      "imageUrl": "https://i.ibb.co/6wkk1GW/pexels-shootcase-chronicles-8230904.jpg",
      "name": "Auroville"
    },
    {
      "uniqueNo": 2,
      "imageUrl": "https://i.ibb.co/t4rRb70/pexels-chirag-biyani-9902399.jpg",
      "name": "Hawa Mahal"
    },
    {
      "uniqueNo": 3,
      "imageUrl": "https://i.ibb.co/ggdBy0M/pexels-alex-azabache-3243028.jpg",
      "name": "Burj Khalifa"
    },
    {
      "uniqueNo": 4,
      "imageUrl": "https://i.ibb.co/Rcdxxnz/pexels-pixabay-2344.jpg",
      "name": "Arc de Triomphe"
    },
    {
      "uniqueNo": 5,
      "imageUrl": "https://i.ibb.co/fkL7wkm/pexels-rick-han-3428278.jpg",
      "name": "Disney World"
    },
    {
      "uniqueNo": 6,
      "imageUrl": "https://i.ibb.co/k5kWSJ9/pexels-oleksandr-p-2166553.jpg",
      "name": "Bali Handara Gate"
    },
    {
      "uniqueNo": 7,
      "imageUrl": "https://i.ibb.co/TW4LYyb/pexels-pixabay-372490.jpg",
      "name": "Big Ben"
    },
    {
      "uniqueNo": 8,
      "imageUrl": "https://i.ibb.co/xmfKDS6/pexels-pixabay-2363.jpg",
      "name": "Louvre Pyramid"
    },
    {
      "uniqueNo": 9,
      "imageUrl": "https://i.ibb.co/BVkqkqz/pexels-mudassir-ali-1878293.jpg",
      "name": "Sydney Opera House"
    },
    {
      "uniqueNo": 10,
      "imageUrl": "https://i.ibb.co/KDSgcb9/pexels-sudipta-mondal-1603650.jpg",
      "name": "Taj Mahal"
    }
  ]
  

class App extends Component{

  state = { searchInput :'' ,
          DestinationList : InitialDestinationList,}

  onChangeSearchInput = (event)=>{
    const inputValue = event.target.value;
    this.setState({searchInput : inputValue})
  }

  render(){
    const {searchInput, DestinationList} = this.state;
    const filteredDestinationList = DestinationList.filter(
      (each)=> each.name.toLowerCase().includes(searchInput.toLowerCase()))
    return(
      <div className="main-container">
        <h1>Destination Search</h1>
        <div className='inputContainer'>
          <input type="text" placeholder="Search Destination" value={searchInput} onChange={this.onChangeSearchInput}/>
          <img src="https://i.ibb.co/7124Cnm/search.png" alt="search" className='searchIcon'/>
        </div>
        <ul className='card-container'>
          {filteredDestinationList.map((each)=> 
            <Destination destinationDetails = {each} key = {each.uniqueNo}/> )}
        </ul>
        
        
      </div>
    );
  }
}


export default App;
