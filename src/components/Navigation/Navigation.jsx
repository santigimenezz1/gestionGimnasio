import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ayuda from "../Screens/ayuda";
import Carrito from "../Screens/carrito";
import Contacto from "../Screens/contacto";
import Main from "../Main";
import Enlace from "../NavBar/Enlace/Enlace";
import { enableScreens } from "react-native-screens";

const Tab = createMaterialBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Ayuda"
        activeColor="#fff"
        inactiveColor="white"
        barStyle={{ backgroundColor: "black" }}
      >
        <Tab.Screen
          name="asdasd"
          component={Main}
          options={{
            tabBarLabel: 'Ruta', // Establece la etiqueta a la derecha
            tabBarIcon: ({ color }) => (
              <Enlace />
            ),
          }}
        />
        {/* Agrega más pestañas según sea necesario */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
