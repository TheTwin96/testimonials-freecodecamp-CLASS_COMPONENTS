import React from 'react';
import '../style_sheets/Testimony.css';

export function Testimony(props) {
  return (
    <div className="container_testimony">
      <img className="image_testimony" src={require(`../images/Testimony_${props.image}.png`)} alt="" />
      <div className='container_text_testimony'>
        <p className='name_testimony'><b>{props.name}</b> en {props.country}</p>
        <p className='responsibility_testimony'>{props.responsability} en <b>{props.company}</b></p>
        <p className='text_testimony'>"{props.testimony}"</p>
      </div>
    </div>
  );
}