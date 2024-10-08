import React,{useId} from 'react'


//forwardRef is used to pass ref to the child component
//useId is used to generate unique id for the input field
const Input=React.forwardRef(function Input({
    label,
    type='text',
    className='',
    ...props
//ref is used to get the reference of the parent component
},ref){
    const id=useId()
    return(
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            //ref is used to get the reference of the parent component
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input