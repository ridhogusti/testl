import { Navigation } from 'react-native-navigation';

import { registerScreens, registerScreenVisibilityListener } from './screens';
import { Icon } from 'native-base';
import { Provider } from 'react-redux';
import store from './store';
// import Icon from 'react-native-vector-icons/Ionicons';
registerScreens(store, Provider); // this is where you register all of your app's screens
registerScreenVisibilityListener();
// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'tab.Home', // this is a registered name for a screen
      title: 'Home',
      icon: require('../img/guci.png'),
      navigatorStyle: {
        navBarHidden: true
      }
    },
    {
      label: 'Heroes',
      screen: 'tab.Heroes',
      title: 'Heroes',
      icon: require('../img/guci.png'),
      navigatorStyle: {
        navBarHidden: true
      }
    },
    {
      label: 'Settings',
      screen: 'tab.Settings',
      title: 'Settings',
      icon: require('../img/guci.png'),
      navigatorStyle: {
        navBarHidden: true
      }
    }
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
