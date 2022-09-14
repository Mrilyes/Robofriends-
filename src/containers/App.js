import { React , Component} from 'react';
import CardList from '../components/CardList'
// import {robots} from './robots'
import SearchBox from '../components/SearchBox'
import '../containers/App.css' ; 
import 'tachyons'
import Scroll from '../components/Scroll'

class App extends Component  {
  constructor(){
    super();
    // state is what change in the app / It's what describes the app.
    //the virtual Dom is just a javascript object the virtual Dom is just a new object that collects this entire state and re-act uses this state to render and pass them down as props to these components so that these components that are just pure functions can just render.
    this.state ={
      robots : [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(usr => this.setState({robots:usr}));
  }

  onSearchChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      searchField : event.target.value
    })
    // console.log(filterRobots);
  }
  
  render(){   
    const {robots , searchField} = this.state;
      const filterRobots = robots.filter(robot => {
        return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase())
      })
      return !robots.length ?
        <h1 className='tc'> Loading...</h1> :
    <div className="tc">
    <h1 className='f1'>RoboFriends</h1>
    <SearchBox searchChange={this.onSearchChange} />
    <Scroll>
    <CardList robots={filterRobots} />
    </Scroll>
    </div>  
 }
}
export default App;
