/* eslint-disable react-hooks/rules-of-hooks */
import React , {useState , useEffect } from 'react';
import CardList from '../components/CardList'
// import {robots} from './robots'
import SearchBox from '../components/SearchBox'
import '../containers/App.css' ; 
import 'tachyons'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';

const app = () => {

  const [robots , setRobots] = useState([]);
  const [searchFiled , setSearchFiled] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(usr => {setRobots(usr)})
    console.log(robots , searchFiled)
  },[]);

  const onSearchChange = (event) => {  
    setSearchFiled(event.target.value)
    }
     
  const filterRobots = robots.filter(robot => {
      return robot.name
      .toLowerCase()
      .includes(searchFiled.toLowerCase())
    })

    return !robots.length ?
      <h1 className='tc'> Loading...</h1> :
      <div className="tc">
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
      <CardList robots={filterRobots} />
        </ErrorBoundry>
      </Scroll>
      </div>  

}

export default app;
