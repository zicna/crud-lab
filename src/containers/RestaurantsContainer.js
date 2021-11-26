import React, { Component } from "react";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";
import { connect } from "react-redux";
// import { ids } from "webpack";

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants 
          restaurants={this.props.restaurants}
          deleteRestaurant={this.props.deleteRestaurant}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { restaurants: state.restaurants};
}


function mapDispatchToProps(dispatch) {
  return {
    addRestaurant: (text) =>
      dispatch({ type: "ADD_RESTAURANT", text:text }),
    deleteRestaurant: (id) => dispatch({type: 'DELETE_RESTAURANT', id: id})
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer);
