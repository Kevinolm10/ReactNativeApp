import { AppRegistry } from 'react-native';
import App from './App';  // This should work because App.js is in the same directory
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
