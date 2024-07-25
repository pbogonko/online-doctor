/* eslint-disable react/prop-types */

function Textarea({className,id,method,rows,type, placeHolder,value} ) {
  return (
    <textarea id={id} className={className} onChange={method} rows={rows} placeholder={placeHolder} type={type} value={value}>

    </textarea>
    
  )
}

export default Textarea