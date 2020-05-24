import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      {props.rank} of {props.suit}
    </div>
  )
}

export default Card;