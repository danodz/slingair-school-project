import styled from "styled-components";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import SeatSelect from "./SeatSelect";
import Confirmation from "./Confirmation";
import Reservation from "./Reservation";
import GlobalStyles from "./GlobalStyles";

const App = () => {

    const [selectedFlight, setSelectedFlight] = useState("");

    const handleChange = (e) => {
        setSelectedFlight(e.target.value);
    }

    return (
        <BrowserRouter>
            <GlobalStyles />
            <Header handleChange={handleChange} />
            <Main>
                <Routes>
                    <Route path="/" element={<SeatSelect selectedFlight={selectedFlight} />} />
                    <Route path="/confirmation" element={<Confirmation />} />
                    <Route path="/reservation" element={<Reservation />} />
                    <Route path="" element={<h1>404: Oops!</h1>} />
                </Routes>
                <Footer />
            </Main>
        </BrowserRouter>
    );
};

const Main = styled.div`
  background: var(--color-orange);
  display: flex;
  flex-direction: column;
  height: calc(100vh - 150px);
`;

export default App;
