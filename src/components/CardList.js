import React from "react";
import Card from "./Card";
// import robots from './robots';

const cardList = ({robots}) => 
{
// if(true){ // testing purposes for errorBoundry 
//   throw new Error("fadfas")
// }
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