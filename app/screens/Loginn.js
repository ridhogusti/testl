import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Provider } from 'react-redux';
import { registerScreens, registerScreenVisibilityListener } from '../screens';
import store from '../store';
// import Icon from 'react-native-vector-icons/Ionicons';
registerScreens(store, Provider); // this is where you register all of your app's screens
registerScreenVisibilityListener();

const ACCESS_TOKEN = 'access_token';

export default class Loginn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
      showProgress: false,
      logint: false,
    };
  }

  //   componentWillMount() {
  //     this.getToken();
  //   }

  componentDidMount() {
    this.getToken();
  }
  async getToken() {
    try {
      const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);
      console.log(accessToken);
      if (accessToken) {
        this.setState({ logint: true });
        // this.loadTab();
        this.verifyToken(accessToken);
      } else {
        console.log('Token not set');
      }
    } catch (error) {
      console.log('Something went wrong');
    }
  }
  // If token is verified we will redirect the user to the home page
  async verifyToken(token) {
    const accessToken = token;
    
    try {
      const response = await fetch(`https://afternoon-beyond-22141.herokuapp.com/api/verify?session%5Baccess_token%5D=${accessToken}`);
      const res = await response.text();
      if (response.status >= 200 && response.status < 300) {
        // Verified token means user is logged in so we redirect him to home.
        this.setState({ logint: true });

        console.log(this.state.logint);
        console.log('object');
        // this.loadTab();
      } else {
        // Handle error
        const error = res;
        throw error;
      }
    } catch (error) {
      console.log(`error response: ${error}`);
    }
  }

  _loadInitialState = async () => {
    const value = await AsyncStorage.getItem('user');
    if (value !== null) {
      this.loadTab();
    }
  }

  loadTab() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Home',
          screen: 'tab.Home', // this is a registered name for a screen
          title: 'Home',
          icon: require('../../img/guci.png'),
          navigatorStyle: {
            navBarHidden: true,
          },
        },
        {
          label: 'Heroes',
          screen: 'tab.Heroes',
          title: 'Heroes',
          icon: require('../../img/guci.png'),
          navigatorStyle: {
            navBarHidden: true,
          },
        },
        {
          label: 'Settings',
          screen: 'tab.Settings',
          title: 'Settings',
          icon: require('../../img/guci.png'),
          navigatorStyle: {
            navBarHidden: true,
          },
        },
      ],
      tabsStyle: {
        tabBarBackgroundColor: '#003a66',
        // navBarButtonColor: 'red',
        tabBarLabelColor: 'white',
        tabBarButtonColor: '#ffffff',
        // navBarTextColor: 'red',
        tabBarSelectedButtonColor: '#ff505c',
        // navigationBarColor: '#003a66',
        // navBarBackgroundColor: '#003a66',
        statusBarColor: '#002b4c',
        tabFontFamily: 'BioRhyme-Bold',
      },
      // appStyle: {
      //   tabBarBackgroundColor: '#003a66',
      //   navBarButtonColor: '#ffffff',
      //   tabBarButtonColor: '#ffffff',
      //   navBarTextColor: '#ffffff',
      //   tabBarSelectedButtonColor: '#ff505c',
      //   navigationBarColor: '#003a66',
      //   navBarBackgroundColor: '#003a66',
      //   statusBarColor: '#002b4c',
      //   tabFontFamily: 'BioRhyme-Bold',
      // },
    });
  }
  storeToken(responseData) {
    AsyncStorage.setItem(ACCESS_TOKEN, responseData, (err) => {
      if (err) {
        console.log('an error');
        throw err;
      }
      console.log('success');
    }).catch((err) => {
      console.log(`error is: ${err}`);
    });
  }

  async login() {
    this.setState({ showProgress: true });
    try {
      const response = await fetch('https://afternoon-beyond-22141.herokuapp.com/api/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session: {
            email: this.state.email,
            password: this.state.password,
          },
        }),
      });
      const res = await response.text();
      if (response.status >= 200 && response.status < 300) {
        // Handle success
        const accessToken = res;
        console.log(accessToken);
        // On success we will store the access_token in the AsyncStorage
        this.storeToken(accessToken);
        this.loadTab();
      } else {
        // Handle error
        const error = res;
        throw error;
      }
    } catch (error) {
      this.setState({ error });
      console.log(`error ${error}`);
      this.setState({ showProgress: false });
    }
  }
  
  render() {
    return (
      <KeyboardAvoidingView
        behavior='padding'
        style={styles.wrapper}
      >
        <View
          style={styles.container}
        >
          <Text
            style={styles.header}
          >- LOGIN -</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Email'
            onChangeText={(text) => this.setState({ email: text })}
            underlineColorAndroid='transparent'
          />

          <TextInput
            style={styles.textInput}
            placeholder='Password'
            onChangeText={(text) => this.setState({ password: text })}
            underlineColorAndroid='transparent'
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.login()}
          >
            <Text>Log in</Text>
          </TouchableOpacity>
          <ActivityIndicator
            animating={this.state.showProgress}
            size="large"
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3',
    paddingLeft: 40,
    paddingRight: 40,
  },

  header: {
    fontSize: 24,
    marginBottom: 60,
    color: '#fff',
    fontWeight: 'bold',
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 20,
    alignItems: 'center',
  },
})
;
