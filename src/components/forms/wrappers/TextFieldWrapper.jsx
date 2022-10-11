import { TextField } from "@mui/material"

const TextFieldWrapper = ({
    definition, 
    formState, 
    setFormState 
}) => {
    const handleChange = (e) => {
        const newState = formState.map( (input) => {
            let temporal = input
            if( input.name == definition.name){
                temporal = {...input, value: e.target.value}
            }
            return temporal
        })
        setFormState(newState)
    }

    return(
        <TextField { ...definition } onChange={handleChange}/>
    )
}

export default TextFieldWrapper