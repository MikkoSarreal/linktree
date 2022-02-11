import React from 'react'

function Button({ type="button", onClick= () => {}, disabled = false,  children }) {
  return (
    <button 
        type={type}
        className="btn"
        onClick={onClick}
        disabled={disabled}>
        {children}
    </button>
  );
}

export default Button;
