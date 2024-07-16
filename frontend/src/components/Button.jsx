import React from 'react'

function Button({name,className,type,disabled,method}) {
  return (
    <button className={className} type={type} disabled={disabled} onClick={method} >{name}</button>
  
  )
}

export default Button