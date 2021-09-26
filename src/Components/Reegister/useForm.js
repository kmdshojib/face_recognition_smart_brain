import {useState} from 'react'

const useForm =()=>{
    const [values,setValues] = useState({
        name: '',
        email: '',
        password: '',
    })
    const handleChange = e =>{
        const [name,value] =e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    return {handleChange}
}
export default useForm;