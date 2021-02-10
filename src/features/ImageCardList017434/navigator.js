import { createStackNavigator } from "react-navigation-stack"
import Blank from "./screens/index"
export default createStackNavigator(
  { Blank: { screen: Blank } },
  { initialRouteName: "Blank" }
)
