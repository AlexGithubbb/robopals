import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
  // for development mode
  // if(true) {
  //   throw new Error ('Nooooooo, found the error')
  // }
  return (
    <div>
      {robots.map((user, i) => {
        return (
          < Card key={i} id={user.id} name={user.name} email={user.email} />
        )
      })}
    </div>
  )
}

export default CardList;