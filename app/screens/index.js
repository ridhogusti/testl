import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';

import Home from '../containers/home';
import Heroes from '../containers/heroes';
import Settings from './Settings';

import HeroAdd from './Hero/HeroAdd';
import HeroView from './Hero/HeroView';
import HeroEdit from './Hero/HeroEdit';
import Login from './Login';
import Loginn from './Loginn';
import Profile from '../containers/profile';
import Drawer from '../components/Drawer';
import HomeView from '../components/HomeView';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('tab.Home', () => Home, store, Provider);
  Navigation.registerComponent('push.HomeView', () => HomeView, store, Provider);
  Navigation.registerComponent('tab.Heroes', () => Heroes, store, Provider);
  Navigation.registerComponent('tab.Settings', () => Settings);
  Navigation.registerComponent('push.HeroAdd', () => HeroAdd, store, Provider);
  Navigation.registerComponent('push.HeroView', () => HeroView, store, Provider);
  Navigation.registerComponent('push.HeroEdit', () => HeroEdit, store, Provider);
  Navigation.registerComponent('Login', () => Login, store, Provider);
  Navigation.registerComponent('Loginn', () => Loginn, store, Provider);
  Navigation.registerComponent('Profile', () => Profile, store, Provider);
  Navigation.registerComponent('Drawer', () => Drawer, store, Provider);
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    // willAppear: ({ screen }) => console.log(`Displaying screen ${screen}`),
    // didAppear: ({ screen, startTime, endTime, commandType }) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    // willDisappear: ({ screen }) => console.log(`Screen will disappear ${screen}`),
    // didDisappear: ({ screen }) => console.log(`Screen disappeared ${screen}`),
  }).register();
}
