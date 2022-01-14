// write your custom hook here to control your checkout form

import { useState } from "react";


const useForm = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    
    const handleChanges = evt => {
        setValue({
            ...value, [evt.target.name]: evt.target.value
        })
    }

    return [value, handleChanges];
}

export default useForm;