import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

//function App() 
class App extends Component {
  constructor() {
    super();

    this.state ={
      monsters: [],
      searchField:''
    };
    //this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      //.then(response => console.log(response))
      .then(response => {
        console.log(response)
        return response.json();
      }) 
      //.then(outy1 => console.log(outy1));
      // .then(response => response.json())
      .then(users => {
        console.log(users)
        this.setState({monsters: users})
      });

  }
  
  handleChange = (e) => {this.setState({ searchField: e.target.value})};

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return(
      <div className= 'App'> 
        <h1 className='title-header'>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search Monsters'
          handleChange =  {this.handleChange}
        />
        <CardList monsters={filteredMonsters} /> 
      </div>
    );
  }
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
};

export default App;
