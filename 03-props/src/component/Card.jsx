import React from 'react';

const Card = (props) => {
    return (
    <div className='parent'>
      <div className='card'>
        <img src={props.img}></img>
        <h2>{props.user} </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit..</p>
        <button>Click Me</button>
      </div>
    </div>
    )
}

export default Card;