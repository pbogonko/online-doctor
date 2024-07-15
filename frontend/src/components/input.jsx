/* eslint-disable react/prop-types */


function Input({value,type,method,placeHolder,className,autocomplete,name,ariaReadOnly,readOnly,required}) {
  return (
    <input type={type} value={value} className={className} autoComplete={autocomplete} name={name} placeholder={placeHolder} onChange={method} required={required} aria-readonly={ariaReadOnly} readOnly={readOnly}/>
  )
}

export default Input