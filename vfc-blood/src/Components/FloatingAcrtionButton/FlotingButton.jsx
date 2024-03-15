import React from 'react';
import './FloatingButton.scss'; 
import { useNavigate } from 'react-router-dom';

function FloatingActionButton() {
    const navigate=useNavigate()
const navigateToCreate=()=>{
    navigate('/add-new')
}
  return (
    <button className="floating-action-button" onClick={navigateToCreate}>
      +
    </button>
  );
}

export default FloatingActionButton;
