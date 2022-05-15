import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages imports
import HomeScreen from '../pages/Inicio/Inicio';
import Procedimentos from '../pages/Cadastro/Procedimentos'

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen 
        name="Procedimentos" 
        component={Procedimentos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}