import { Grid, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { inputFormElements } from "../../utils/formElements";
import TextFieldWrapper from "./wrappers/TextFieldWrapper";

const FormFromJson = () => {

    const [ formState, setFormState ] = useState();

    useEffect(() => {
        let tmpState = inputFormElements.map( (input) => {
            return {...input.definition, value:null}
        })
        setFormState(tmpState)
    }, [])

    return(
        <div>
            <h1>FormFromJson component</h1>
            <form>
                <Grid container spacing={1}>
                {
                    inputFormElements
                    //.slice(4, 9)
                    .map(input => 
                        <Grid key={input.definition.name} xs={input.definition.xs} sm={input.definition.sm} item>
                            { input.component_type == "TextField" &&
                                <TextFieldWrapper definition={input.definition} formState={formState} setFormState={setFormState}/>
                            }
                        </Grid>
                    )
                }
                </Grid>
                <Button onClick={()=>{ console.log(formState)}}>Submit</Button>
            </form>
        </div>
    )
}

export default FormFromJson;