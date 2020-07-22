import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen69233Navigator from '../features/BlankScreen69233/navigator';
import CopyOfBlankScreen49231Navigator from '../features/CopyOfBlankScreen49231/navigator';
import BlankScreen49226Navigator from '../features/BlankScreen49226/navigator';
import BlankScreen39133Navigator from '../features/BlankScreen39133/navigator';
import BlankScreen29075Navigator from '../features/BlankScreen29075/navigator';
import CopyOfBlankScreen19074Navigator from '../features/CopyOfBlankScreen19074/navigator';
import BlankScreen19072Navigator from '../features/BlankScreen19072/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen69233: { screen: BlankScreen69233Navigator },
CopyOfBlankScreen49231: { screen: CopyOfBlankScreen49231Navigator },
BlankScreen49226: { screen: BlankScreen49226Navigator },
BlankScreen39133: { screen: BlankScreen39133Navigator },
BlankScreen29075: { screen: BlankScreen29075Navigator },
CopyOfBlankScreen19074: { screen: CopyOfBlankScreen19074Navigator },
BlankScreen19072: { screen: BlankScreen19072Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
