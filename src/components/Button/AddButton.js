import React, { Component } from "react";
import { View, Modal, Button } from 'react-native';
import TaskModal from "../TaskModal/TaskModal";
import ActionButton from 'react-native-action-button';

class AddButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
      taskArray: []
    }
    this.closeView = this.closeView.bind(this)
  }

  async addToTaskList(newTask) {
    const { tasks } = this.props;
    this.setState({
      taskArray: await [...tasks, newTask]
    })
    this.props.updateTaskList(this.state.taskArray)
  }

  closeView(newTask) {
    this.setState({
      isVisible: false
    })
    this.addToTaskList(newTask)
  }
  render() {
    const { isVisible } = this.state;
    return(
      <View style={{flex: 1}}>
        <ActionButton position="right" buttonColor="lightgreen" onPress={() => this.setState({isVisible: true})} />
        <Modal animationType='slide' visible={isVisible}>
          <TaskModal closeView={this.closeView}/>
        </Modal>
      </View>
    )
  }
}

export default AddButton;