import React from 'react'

function Button({name,className,type,disabled}) {
  return (
    <button className={className} type={type} disabled={disabled} >{name}</button>
  
  )
}

export default Button