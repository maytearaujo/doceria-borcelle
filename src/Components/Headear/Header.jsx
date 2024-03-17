import React from "react";
import styled from "styled-components"
import logo from "../../assets/logo.png"

const HeaderStyle = styled.header`
    background-color: #FEF3BB;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Img = styled.img `
    width: 15vw;
    height: 15vh;
`
const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 60vw;
    color: #BD6D71;
    font-size: 1.5rem;
    list-style: none;
    text-shadow: 2px 1px 2px #fff;
    cursor: pointer;
`

function Header() {
    return (
        <HeaderStyle>
            <Img src={logo} alt="Logomarca"/>

            <nav>
                <Ul>
                    <li>Inicio</li>
                    <li>Unidades</li>
                    <li>Cardápio</li>
                    <li>Cursos</li>
                </Ul>
            </nav>
        </HeaderStyle>
    )
}

export default Header