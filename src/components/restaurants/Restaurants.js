import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  
  render() {
    const {restaurants, deleteRestaurant} = this.props
    const resList = restaurants.map(r => {
      return (
        <Restaurant 
          key={r.id}
          restaurant={r}
          deleteRestaurant={deleteRestaurant}
        />
        )})
    return(
      <ul>
        {/* {this.props.restaurants.map(r => {
          return(
            <Restaurant restaurant={r}/>
          )
        })} */}
        {resList}
      </ul>
    );
  }
};

export default Restaurants;