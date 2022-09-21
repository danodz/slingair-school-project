import { useState, useEffect } from "react";
import styled from "styled-components";

import Plane from "./Plane";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

const SeatSelect = ({selectedFlight}) => {
    const navigate = useNavigate();
    const [selectedSeat, setSelectedSeat] = useState("");

    const handleSubmit = async (e, formData) => {
        e.preventDefault();

        const response = await fetch("/api/add-reservation", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                givenName: formData.firstName,
                surname: formData.lastName,
                email: formData.email,
                flight: selectedFlight,
                seat: selectedSeat
            })
        })
        const data = await response.json();
        localStorage.reservationId = data.data._id;
        navigate("/confirmation")
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
