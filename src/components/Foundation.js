import React from 'react';
import Card from '../components/Card';

const Foundation = (props) => {
  return (
    <div className="foundation">
      {props.cards &&
        <Card />
      }
    </div>
  )
}

export default Foundation;