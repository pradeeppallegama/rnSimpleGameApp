import React, { Component } from "react";
import PropTypes from "prop-types";
import RandomNumber from "./RandomNumber";
import { View, Text, StyleSheet } from "react-native";

class Game extends React.Component {
  static propTypes = {
    randomNumberCount: PropTypes.number.isRequiered
  };

  state = {
    selectedIds: []
  };

  //TODO:generate random numbers
  randomNumbers = Array.from({ length: this.props.randomNumberCount }).map(
    () => 1 + Math.floor(10 * Math.random())
  );

  //TODO:Shuffel the random numbers
  target = this.randomNumbers
    .slice(0, this.props.randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);

  isNumberSelected = numberIndex => {
    return this.state.selectedIds.indexOf(numberIndex) >= 0;
  };

  selectNumber = numberIndex => {
    this.setState(prevState => ({
      selectedIds: [...prevState.selectedIds, numberIndex]
    }));
  };

  //gamestatus: PLAYING, WON, LOST
  gameStatus = () => {
    const sumSelected = this.state.selectedIds.reduce((acc, curr) => {
      return acc + this.randomNumbers[curr];
    }, 0);
    if (sumSelected < this.target) {
      return "PLAYING";
    }
    if (sumSelected === this.target) {
      return "WON";
    }
    if (sumSelected > this.target) {
      return "LOST";
    }
    //console.warn(sumSelected);
  };

  render() {
    const gameStatus = this.gameStatus();
    return (
      <View style={styles.container}>
        <Text style={[styles.target, styles["STATUS_${gameStatus}"]]}>
          {this.target}
        </Text>
        <View style={styles.randomContainer}>
          {this.randomNumbers.map((randomNumber, index) => (
            <RandomNumber
              key={index}
              id={index}
              number={randomNumber}
              isDisabled={
                this.isNumberSelected(index) || gameStatus !== "PLAYING"
              }
              onPress={this.selectNumber}
            />
          ))}
        </View>
        <Text>{gameStatus}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafad2",
    flex: 1,
    paddingTop: 30
  },

  target: {
    fontSize: 40,
    backgroundColor: "#7fffd4",
    margin: 50,
    textAlign: "center"
  },

  randomContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },

  STATUS_PLAYING: {
    backgroundColor: "#7fffd4"
  },

  STATUS_WON: {
    backgroundColor: "green"
  },

  STATUS_LOST: {
    backgroundColor: "red"
  }
});

export default Game;
