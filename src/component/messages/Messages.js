import React, { Component } from 'react';
import Message from './Message';
import { Consumer } from '../../context';

class Messages extends Component {
render() {  
        return(
            <Consumer>
                {value => {
                    const { messages } = value;
                    return (
                        <div className="mt-4">
                            {messages.map((message) => (
                                <Message key={message._id} message={message} />
                            ))}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Messages;