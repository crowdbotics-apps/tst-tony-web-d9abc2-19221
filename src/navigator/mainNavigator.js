import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createDrawerNavigator } from "react-navigation-drawer"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import ImageCardList017434 from "../features/ImageCardList017434/navigator"

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
  ImageCardList017434: { screen: ImageCardList017434 },
  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator
  },
  {
    contentComponent: SideMenu
  }
)

const AppContainer = createAppContainer(DrawerAppNavigator)

export default AppContainer
