import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

//TouchableOpacity
//TouchableHighlight

class RandomNumber extends React.Component {
  static PropTypes = {
    number: PropTypes.number.isRequiered
  };

  handlePress = () => {
    console.log(this.props.number);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text style={styles.random}>{this.props.number}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  random: {
    backgroundColor: "#eedd82",
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: "center"
  }
});

export default RandomNumber;
