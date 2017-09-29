import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';

import Home from './Home';
import Heroes from '../containers/heroes';
import Settings from './Settings';

import HeroAdd from './HeroAdd';
import HeroView from './HeroView';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
    Navigation.registerComponent('tab.Home', () => Home);
    Navigation.registerComponent('tab.Heroes', () => Heroes, store, Provider);
    Navigation.registerComponent('tab.Settings', () => Settings);
    Navigation.registerComponent('push.HeroAdd', () => HeroAdd);
    Navigation.registerComponent('push.HeroView', () => HeroView);
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
    didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
  }).register();
}