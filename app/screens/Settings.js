import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import { StyleSheet, ScrollView, TouchableOpacity, Picker, AppState } from 'react-native';

const styles = StyleSheet.create({
  picker: {
    width: 100,
  },
});

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.handleAppStateChange = this.handleAppStateChange.bind(this);

    this.state = {
      seconds: 5,
    };
  }    

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    if (appState === 'background') {
      console.log('app is in background', this.state.seconds);
    }
  }
  render() {
    return (
      <Container>
        <Content>
          <Text>Settings</Text>
          <Text>
              Choose your notification time in seconds
          </Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.seconds}
            onValueChange={(seconds) => this.setState({ seconds })}
          >
            <Picker.Item label="5" value={5} />
            <Picker.Item label="10" value={10} />
            <Picker.Item label="15" value={15} />
          </Picker>
        </Content>
      </Container>       
    );
  }
}

