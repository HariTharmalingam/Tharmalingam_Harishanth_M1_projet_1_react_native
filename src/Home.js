import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header/Header';
import AddInput from './components/Input/AddInput'
import TaskList from './components/TaskList/TaskList';
import AddButton from './components/Button/AddButton';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      completedTasks: 0,
      createdTasks: 0,
      taskArray: []
    }
    this.updateTaskList = this.updateTaskList.bind(this)
  }

  componentDidMount() {
    this.manageTasklist()
  }

  manageTasklist() {
    const { taskArray } = this.state;
    this.setState({
      createdTasks: taskArray.length,
      completedTasks: taskArray.filter(taskArray=> taskArray.done).length
    })
  }

  updateTaskList(array) {
    this.setState({
      taskArray: array,
    })
    this.manageTasklist()
  }
    render() {
      const { completedTasks, createdTasks, taskArray } = this.state; 
        return(
          <View style={styles.container}>
            <Header completedTasks={completedTasks} createdTasks={createdTasks}/>
            <AddInput />
            <TaskList createdTasks={taskArray} updateTaskList={this.updateTaskList} />
            <AddButton createdTasks={taskArray} updateTaskList={this.updateTaskList} />
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 30
    }
})

export default Home;