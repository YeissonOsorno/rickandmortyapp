import React from 'react'

const CharacterItem = () => {
  
  return ( 
    <div className="col mb-5">
      <div className="card shadow-sm">
        <img src={image} alt={name}/>
        <div className="card-body">
        <h5 class="card-title">{name}</h5>
          <p className="card-text"><b>Origin:</b> {nameEarth}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-success">{status}</button>
              <button type="button" className="btn btn-sm btn-info">{species}</button>
              <button type="button" className="btn btn-sm btn-danger">{gender}</button>
            </div>
            <small className="text-muted">9min</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterItem;