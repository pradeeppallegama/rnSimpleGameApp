import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

//TouchableOpacity
//TouchableHighlight

class RandomNumber extends React.Component {
  static PropTypes = {
    id: PropTypes.number.isRequiered,
    number: PropTypes.number.isRequiered,
    isDisabled: PropTypes.bool.isRequiered,
    onPress: PropTypes.func.isRequiered
  };

  handlePress = () => {
    if (this.props.isDisabled) {
      return;
    }
    this.props.onPress(this.props.id);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text style={[styles.random, this.props.isDisabled && styles.disabled]}>
          {this.props.number}
        </Text>
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
  },

  disabled: {
    opacity: 0.3
  }
});

export default RandomNumber;
