import React from 'react';
import {withRouter} from 'react-router-dom';
import {Card, Row, Col, Button, Form, FormGroup, Input} from 'reactstrap';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  inputHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.history.push('/chat', {data: this.state});
  };

  render() {
    return (
      <Row>
        <Col lg={{size: '4', offset: 4}} className='mt-3'>
          <Card inverse body outline color='info'>
            <Form method='post' onSubmit={this.submitHandler}>
              <FormGroup>
                <Input
                  type='name'
                  name='username'
                  id='username'
                  placeholder='Enter Name'
                  value={this.state.name}
                  onChange={this.inputHandler}
                />
              </FormGroup>
              <div className='text-center'>
                <Button color='success'>Submit</Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default withRouter(UserForm);
