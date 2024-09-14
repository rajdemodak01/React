import React ,{useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
},ref) {
    const id=useId()
  return (
    <div className='w-full'>
    { label && <label htmlFor={id} className=''></label>}
    <select 
        {...props} 
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}    
    >
        {
          //we use question make to check if options is not null(else it will throw an error/crash)
          options?.map((option)=>(
            <option key={option} value={option}>
                {option}
            </option>
          ))
        }
    </select>
    </div>
  )
}

export default React.forwardRef(Select)
//we can also export like this as we use ref in the component
//another way of doing it is to use "const Select= React.forwardRef(function Select(props here){return(functionalities here)})" and export default Select