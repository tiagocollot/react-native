//! Step One-1-----------------------------------------

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import {createStackNavigator} from 'react-navigation-stack-navigator';
import IndexScreen from './src/screens/IndexScreen';
import  { Provider } from './src/context/BlogContext'
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';


const navigator = createStackNavigator ({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen
}, {
  inicialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'MY NOTES LIST'
  }
 }
);

const App = createAppContainer(navigator);


// *Understand this!------------------------------------

export default () => {
 return (
  <Provider>
   <App/>
  </Provider>
  );
};
