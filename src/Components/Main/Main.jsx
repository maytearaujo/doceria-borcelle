import React from "react";
import imgMain from "../../assets/eclair-3366430_1280.jpg"
import styled from "styled-components";

const MainStyle = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
`

const Img = styled.img`
    width: 90vw;
    height: 70vh;
`

function Main() {
    return (
        <MainStyle>
            <Img src={imgMain} alt="" />
        </MainStyle>
    )
}

export default Main