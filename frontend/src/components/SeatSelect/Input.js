import styled from "styled-components"

const Input = ({type, placeholder, name, required, handleChange}) => {
    return (
        <StyledInput 
            type={type} 
            placeholder={placeholder} 
            required={required} 
            onChange={(e) => handleChange(name, e.target.value)}
        />
    )
}

const StyledInput = styled.input`
    padding: 4px;
    margin: 5px 0px;
`

export default Input