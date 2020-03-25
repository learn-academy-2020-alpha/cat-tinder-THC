import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button }
from 'reactstrap';
import cats from '../cats'


class CatShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
          form:{
            name: '',
            age: '',
            enjoys: ''
        }
      }
    }

    handleChange = (event) => {
      let { form } = this.state
      form[event.target.name] = event.target.value
      this.setState({ form: form })
    }

    handleSubmit = (e) => {
      e.preventDefault()
      console.log(this.state.form);
    }

    render() {
    return (
    <>
      <Form>
        <FormGroup>
          <Label htmlFor="name" id="name">Name</Label>
          <Input
            type="text"
            name="name"
            onChange={ this.handleChange }
            value={ this.state.form.name }
          />
          <br/>
          <Label htmlFor="age" id="age">Age</Label>
          <Input
            type="text"
            name="age"
            onChange={ this.handleChange }
            value={ this.state.form.age }
          />
          <br/>
          <Label htmlFor="enjoys" id="enjoys">Enjoys</Label>
          <Input
            type="text"
            name="enjoys"
            onChange={ this.handleChange }
            value={ this.state.form.enjoys }
          />
        </FormGroup>
        <Button type="submit" id="submit" onClick={ this.handleSubmit }>Add New Cat</Button>
      </Form>
    </>
    )}
}

export default CatShow
