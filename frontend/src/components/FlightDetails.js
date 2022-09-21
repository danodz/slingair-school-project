import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import tombstone from "../assets/tombstone.png";

const FlightDetails = ({titleText}) => {
    const navigate = useNavigate();
    const [reservation, setReservation] = useState(null);
    useEffect( async () => {
        const reservationId = localStorage.reservationId;
        if(!reservationId){
            navigate("/")
        } else {
            const res = await fetch("/api/get-reservation/"+reservationId)
            const data = await res.json();
            setReservation(data.data);
        }
    }, []);

    return ( <>
        {reservation?<Wrapper>
            <p className="title">{titleText}</p>
            <p><span>Reservation #: </span>{reservation._id}</p>
            <p><span>Flight #: </span>{reservation.flight}</p>
            <p><span>Seat #: </span>{reservation.seat}</p>
            <p><span>Name: </span>{reservation.givenName + reservation.surname}</p>
            <p><span>Email: </span>{reservation.email}</p>
        </Wrapper>:<></>}
        <Img src={tombstone}/>
    </>)
};

const Wrapper = styled.div`
    border: 2px solid #aa001e;
    border-radius: 5px;
    padding: 25px;
    margin: 25px auto;
    font-size: 20px;

    .title{
        color: #aa001e;
        font-size: 25px;
        font-weight: bold;
        border-bottom: 1px solid #aa001e;
        margin-bottom: 20px;
        padding-bottom: 20px;
    }

    p{
        margin: 15px 0;
    }

    p span{
        font-weight: bold;
    }
`;

const Img = styled.img`
    width: 200px;
    margin: 0 auto;
`

export default FlightDetails;
