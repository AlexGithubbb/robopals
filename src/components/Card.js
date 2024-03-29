import React from 'react';


// Distructuring from ES6;
// const Card = (props) => {
//   const {name, id, email} = props;

// distructuring further!!!
const Card = ({ name, id, email } ) => {
  return (
    <div className = "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robot"/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;

// Matt Bowler
// Katelyn Vo
// Eduard Dean
// Aniqa Nichols
// Poppie French
// Leah Battle
// Aliya Bond
// Jess Barker
// Shanna Li
// Waseem Gonzale