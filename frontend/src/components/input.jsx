import React from 'react'

function Input({value,type,method,placeHolder,className,autocomplete,name}) {
  return (
    <input type={type} value={value} className={className} autoComplete={autocomplete} name={name} placeholder={placeHolder} onChange={method}/>
  )
}

export default Input