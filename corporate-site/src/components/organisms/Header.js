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
    background-color: rgba(15, 15, 17, 0.72);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    z-index: 10;
    border-bottom: solid 1px ${Theme.color.grey900};
`;

const NavHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavLeft = styled.div`
    color: white;
    margin-left: ${Theme.space.small};
    ${Theme.mediaQuery.mobile} {
        margin-left: ${Theme.space.tiny};
    }
    a {
        padding: ${Theme.space.micro} 0;
    }
    img {
        width: 150px;
        height: auto;
        ${Theme.mediaQuery.mobile} {
            width: 90px;
        }
    }
`