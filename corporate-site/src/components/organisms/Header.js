import React from 'react'
import { Link } from 'components/Router'

import styled from 'styled-components'

const Nav = styled.nav`
    background-color: #000000;
    position: fixed;
    top: 0;
`;

const NavHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavLeft = styled.div`
    color: white;
    margin-left: 2rem;
    img {
        width: 150px;
        height: auto;
    }
`

const NavRight = styled.div`
    color: white;
    display: flex;
`

const Title = styled.h1`
    font-size: 1.2rem;
    margin-right: 2rem;
`


class Header extends React.Component {
    render() {
            return(
                <Nav>
                    <NavHeader>
                        <NavLeft><img src="/img/corporate-logo.png"/></NavLeft>
                        <NavRight>
                            <Link to="/"><Title>About</Title></Link>
                            <Link to="/"><Title>Products</Title></Link>
                            <Link to="/"><Title>News</Title></Link>
                            <Link to="/"><Title>Members</Title></Link>
                            <Link to="/"><Title>Company</Title></Link>
                            <Link to="/"><Title>Contact</Title></Link>
                        </NavRight>
                    </NavHeader>
                </Nav>
            );
    }
}

export default Header