import React from 'react';
import './style.css'

const FilterLink = ({ text, active, onClick }) => {
  const className = active ? "filter-link activated" : "filter-link";
  return (
    <span className={className} onClick={onClick}>{text}</span>
  )

}

export default FilterLink;