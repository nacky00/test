import React from 'react'
import { Link } from 'components/Router'

class Header extends React.Component {
    render() {
        return (
            <header style={headerStyle.header}>
                <div>LOGO</div>
                <div>
                    <Link to="/blog/">About</Link>
                    <Link to="/blog/">Product</Link>
                    <Link to="/blog/">News</Link>
                    <Link to="/blog/">Members</Link>
                    <Link to="/blog/">Company</Link>
                    <Link to="/blog/">Contact</Link>
                </div>
            </header>
        );
    }
}

const headerStyle = {
        header: {
            background: '#000000',
            padding: 24,
            height: 60
        }
}

export default Header

