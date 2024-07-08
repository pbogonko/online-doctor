/* eslint-disable react/prop-types */

function Textarea({className,id,method,rows,type, placeHolder} ) {
  return (
    <textarea id={id} className={className} onChange={method} rows={rows} placeholder={placeHolder} type={type}>

    </textarea>
  )
}

export default Textarea