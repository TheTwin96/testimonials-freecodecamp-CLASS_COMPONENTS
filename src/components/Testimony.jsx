import React from 'react';
import '../style_sheets/Testimony.css';

class Testimony extends React.Component {
  render () {
    return (
      <div className="container_testimony">
        <img 
          className="image_testimony" 
          src={require(`../images/Testimony_${this.props.image}.png`)} 
          alt={`Foto de ${this.props.nombre}`} 
        />
        <div className='container_text_testimony'>
          <p className='name_testimony'><b>{this.props.name}</b> en {this.props.country}</p>
          <p className='responsibility_testimony'>{this.props.responsability} en <b>{this.props.company}</b></p>
          <p className='text_testimony'>"{this.props.testimony}"</p>
        </div>
      </div>
    );
  }
}

export default Testimony;