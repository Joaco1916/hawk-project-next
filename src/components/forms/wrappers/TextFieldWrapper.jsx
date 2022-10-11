import { TextField } from "@mui/material"

const TextFieldWrapper = ({
    definition, 
    formState, 
    setFormState 
}) => {
    const handleChange = (e) => {
        console.log(e.target.value)
    }

    return(
        <TextField { ...definition } onChange={handleChange}/>
    )
}

export default TextFieldWrapper