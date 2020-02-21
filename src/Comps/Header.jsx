import React from "react";
import styled from "styled-components";
import img from "./Images/CallahanMichael.jpg"

function Header(){

    const HeaderCallMich = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    `
    const HeaderImg = styled.img`
    height: 100px;
    width: 100px;
    `

    return (
        <HeaderCallMich>
            <h1>Michael Callahan</h1>
            <HeaderImg src={img} alt="A picture of Michael Callahan"/>
        </HeaderCallMich>
    )
}

export default Header;