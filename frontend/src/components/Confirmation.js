import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import tombstone from "../assets/tombstone.png";
import FlightDetails from "./FlightDetails";

const Confirmation = () => {
    return <FlightDetails titleText="Your flight is confirmed"/>
};
export default Confirmation;
