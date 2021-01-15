import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

class AddInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: null
    }
  }

  submitValue() {
    const { newTask } = this.state;
    const newData = {
      id: Math.floor(Math.random() * 1000),
      title: newTask,
      done: false
    }
  }
  render() {
    const { newTask } = this.state;
    return (
      <View style={{flexDirection: "row"}}>
        <TextInput value={newTask} onChangeText={(text) => this.toggleValue(text)} />
        <TouchableOpacity onPress={() => this.submitValue()}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Ajouter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddInput;
