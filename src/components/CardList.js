import React from "react";
import Card from "./Card";
// import robots from './robots';

const cardList = ({robots}) => 
{

  // 1nd Method 

  // return (
  // <div>
  //   {
  //     robots.map((user , i) => {
  //     return (
  //     <Card 
  //     key={i}
  //     id ={robots[i].id} 
  //     name ={robots[i].name} 
  //     email ={robots[i].email}
  //     />
  //     );
  //   })
  // }
  // </div>
  // );


  // 2nd Method 

      const cardsArray = robots.map((user , i) => {
      return (
      <Card 
      key={i}
      id ={robots[i].id} 
      name ={robots[i].name} 
      email ={robots[i].email}
      />
      );
    })
    
    return (
      <div>
        {cardsArray}
      </div>
   );

}

export default cardList