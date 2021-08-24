import React from 'react'
import { Link } from 'components/Router'
import Theme from 'theme'
import styled from 'styled-components'

class Header extends React.Component {
    render() {
            return(
                <Nav>
                    <NavHeader>
                        <NavLeft><Link to="/"><img src="/img/corporate-logo.png"/></Link></NavLeft>
                    </NavHeader>
                </Nav>
            );
    }
}

export default Header

const Nav = styled.nav`
    background-color: ${Theme.color.black};
    position: fixed;
    top: 0;
    z-index: 10;
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