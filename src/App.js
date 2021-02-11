import {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

//import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(){
    super();

    this.state = {
     monsters: [],
     searchField: ''
    };
   // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({searchField:e.target.value});
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
    
  }
  render(){
  const {monsters,searchField}= this.state 
const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
  //above is another way or wtiting this
  // const monsters = this.state.monsters;
  // const searchFiled = this.state.searchField;

   
    
    return(
      

      <div className="App">
        <h1>MONSTERS ROLODEX</h1>
        <SearchBox placeholder="search monster" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}/>
      
      
           </div>
    )
  }
}


export default App;
