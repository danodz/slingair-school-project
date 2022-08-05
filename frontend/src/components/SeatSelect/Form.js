import { useState } from "react";
import styled from "styled-components"

import Input from "./Input"

const Form = ({handleSubmit, selectedSeat}) => {

    const [formData, setFormData] = useState({});

    const handleChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value
        })
    }

    return (
        <StyledForm onSubmit={(e) => handleSubmit(e, formData)}>
            <Input 
                type="text" 
                placeholder="First Name"
                name={"firstName"}
                required={true}
                handleChange={handleChange} 
            />
            <Input 
                type="text" 
                placeholder="Last Name"
                name={"lastName"}
                required={true}
                handleChange={handleChange} 
            />
            <Input 
                type="email" 
                placeholder="Email"
                name={"email"}
                required={true}
                handleChange={handleChange} 
            />
            <Submit type="submit" disabled={selectedSeat.length ? false : true}>Confirm</Submit>
        </StyledForm>
    )
}

const Submit = styled.button`
    background-color: #d1560e;
    border: none;
    margin-top: 5px;
    border-radius: 2px;

    &:disabled{
        color: var(--color-orange);
    }
`

const StyledForm = styled.form`
    margin-top: 24px;
    border: 5px solid var(--color-alabama-crimson);
    padding: 30px;
    margin: auto 0px auto;
    display: flex;
    flex-direction: column;
    margin-left: 50px;
`

export default Form