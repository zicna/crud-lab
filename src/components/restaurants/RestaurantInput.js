import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props){
    super(props);
    this.state={
      text:''
    }
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })

  }

  handleChange(event){
    this.setState({
      text: event.target.value
    })
  }
  render() {
    return (
      <form
      onSubmit={(event) => this.handleSubmit(event)}>
        <label htmlFor="text">Restaurant Name</label>
        <input 
          type="text" 
          name='text' 
          id='text'
          onChange={(event) => this.handleChange(event)}
          value={this.state.text}
        />
        <input type="submit" value="Add restourant" />
        {this.state.text}
      </form>
    );
  }
};

export default RestaurantInput;
