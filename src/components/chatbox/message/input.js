import React from 'react';

import './message.css';

class Message extends React.Component {
  render() {
    return (
      <div>
        {this.props.messages.map((message, index) => {
          if (this.props.name === message.sender) {
            return (
              <div key={index} className='outgoing_msg'>
                <div className='sent_msg'>
                  <p>{message.message}</p>
                  <span className='time_date'> 11:01 AM | June 9</span>
                </div>
              </div>
            );
          } else {
            return (
              <div key={index} className='incoming_msg'>
                <div className='incoming_msg_img'>
                  <img
                    src='https://ptetutorials.com/images/user-profile.png'
                    alt='sunil'
                  />
                </div>
                <div className='received_msg'>
                  <div className='received_withd_msg'>
                    <strong>
                      <p style={{color: '#ffa97a'}}>Matta</p>
                    </strong>
                    <p>{message.message}</p>
                    <span className='time_date'> 11:01 AM | June 9</span>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Message;
