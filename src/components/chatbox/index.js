import React from 'react';
import {withRouter} from 'react-router-dom';
import io from 'socket.io-client';

import {
  Card,
  Row,
  Col,
  Button,
  Form,
  Input,
  CardBody,
  CardHeader,
  CardFooter,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';

import Message from './message/input';

const SOCKET_IO_URL = 'https://node-socket-prog.herokuapp.com/';
const socket = io(SOCKET_IO_URL, {path: '/connect'});
socket.on('connection', socket => {
  console.log('Connection', socket);
});

class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.location.state.data.username,
      messages: [],
      message: ''
    };
  }

  componentDidMount() {
    socket.on('message', data => {
      this.setState({messages: [...this.state.messages, data]});
    });
  }

  inputHandler = e => {
    this.setState({message: e.target.value});
  };

  submitHandler = e => {
    e.preventDefault();
    socket.emit('message', {
      sender: this.state.username,
      message: this.state.message
    });
    this.setState({message: ''});
  };

  render() {
    return (
      <div>
        <Row>
          <Col lg={{size: '4', offset: 4}} className='mt-3'>
            <Card
              style={{
                width: '40rem',
                height: '55rem'
              }}>
              <CardHeader>
                <div className='text-center'>Welcome {this.state.username}</div>
              </CardHeader>
              <CardBody
                style={{
                  maxHeight: '50rem',
                  overflowY: 'auto',
                  backgroundColor: '#333'
                }}>
                <Message
                  name={this.state.username}
                  messages={this.state.messages}
                />
              </CardBody>
              <CardFooter>
                <Form onSubmit={this.submitHandler}>
                  <InputGroup>
                    <Input
                      onChange={this.inputHandler}
                      value={this.state.message}
                      placeholder='Enter your message'
                    />
                    <InputGroupAddon addonType='append'>
                      <Button color='info'>Send</Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Form>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(ChatBox);
