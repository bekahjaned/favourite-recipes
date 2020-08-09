import React from "react";

import NavBar from "../NavBar/";

import { HeaderWrapper } from "../../Elements/HeaderWrapper/";
import { Title } from "../../Elements/Title/";

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <Title>{this.props.title}</Title>
        <NavBar />
      </HeaderWrapper>
    );
  }
}

export default Header;
