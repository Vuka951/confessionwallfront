import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    state = { 
        buttonMessage: 'Share your Story...',
        url: '/message/add',
    };

    onNavClick = () => {
        this.state.buttonMessage === 'Share your Story...' ? ( this.setState({ buttonMessage: 'Go Back' })) : this.setState({ buttonMessage: 'Share your Story...' });
        this.state.url === '/message/add' ? ( this.setState({ url: '/' })) : this.setState({ url: '/message/add' });
    }

    render(){
        return(
        <div className="text-center p-5">
            <h1>Your Story</h1>
            <p className="text-secondary">Share your confession...etc</p>
            <button type="button" className="btn btn-outline-secondary"><Link to={this.state.url} className="nav-link text-color " onClick={this.onNavClick}>{this.state.buttonMessage}</Link></button>
        </div>
        )
    }
};

export default Header;