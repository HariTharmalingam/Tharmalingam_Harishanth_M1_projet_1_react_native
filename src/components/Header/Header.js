import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';
import moment from "moment";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        day: moment(Date.now()).format('dddd'),
        date: moment(Date.now()).format('MMM Do YY'),
    }
  }

  render() {
    const { day } = this.state;
    const { date } = this.state;
    const { createdTasks, completedTasks } = this.props;
    return(
      <View style={styles.header}>
        <Text style={styles.date}><Text style={styles.day}>{day},</Text> {date}</Text>

        <View style={styles.taskCountContainer}>
          <View>
            <Text style={styles.createdTasks}>{createdTasks}</Text>
            <Text style={styles.tasksLabel}>Created tasks</Text>
          </View>

          <View>
            <Text style={styles.wordingTasks}>{completedTasks}</Text>
            <Text style={styles.tasksLabel}>Completed tasks</Text>
          </View>
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
  },
  day: {
    fontWeight: 'bold'
  },
  date: {
    fontSize: 25
  },
  createdTasks: {
    fontWeight: 'bold'
  },
  completedTasks: {
    fontWeight: 'bold',
    textAlign: "right"
  },
  tasksLabel: {
    color: '#ccc'
  },
  taskCountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom : 15
  }
})

export default Header;