import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../telas/home';
import PerfilScreen from '../telas/perfil';
import ItensScreen from '../telas/itens';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={PerfilScreen} />
        <Tab.Screen name="Profile" component={ItensScreen} />
    </Tab.Navigator>
  );
}