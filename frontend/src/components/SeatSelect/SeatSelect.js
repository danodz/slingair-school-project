import { useState, useEffect } from "react";
import styled from "styled-components";

import Plane from "./Plane";
import Form from "./Form";

const SeatSelect = ({selectedFlight}) => {

    const [selectedSeat, setSelectedSeat] = useState("");

    const handleSubmit = (e, formData) => {
        e.preventDefault();
        // TODO: POST info to server
    }

    return (
        <Wrapper>
            <h2>Select your seat and Provide your information!</h2>
            <>
                <FormWrapper>
                    <Plane setSelectedSeat={setSelectedSeat} selectedFlight={selectedFlight} />
                    <Form handleSubmit={handleSubmit} selectedSeat={selectedSeat} />
                </FormWrapper>
            </>
        </Wrapper>
    );
};

const FormWrapper = styled.div`
    display: flex;
    margin: 50px 0px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`

export default SeatSelect;
