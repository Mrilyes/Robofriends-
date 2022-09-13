import { React , Component} from 'react';
import CardList from './CardList'
import {robots} from './robots'
import SearchBox from './SearchBox'

class App extends Component  {
  constructor(){
    super();
    // state is what change in the app / It's what describes the app.
    //the virtual Dom is just a javascript object the virtual Dom is just a new object that collects this entire state and re-act uses this state to render and pass them down as props to these components so that these components that are just pure functions can just render.


    this.state ={
      robots : robots,
      searchField: ''
    } 
  }

  onSearchChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      searchField : event.target.value
    })
    // console.log(filterRobots);
  }
  

  render(){   
      const filterRobots = this.state.robots.filter(robot => {
        return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase())
      })
    return (
      <div className="tc">
    <h1>RoboFriends</h1>
    <SearchBox searchChange={this.onSearchChange} />
    <CardList robots={filterRobots} />
    </div>
  );
 }
}
export default App;
