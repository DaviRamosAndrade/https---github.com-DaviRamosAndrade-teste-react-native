// React import's
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages imports
import LoginScreen from '../pages/Login/Login';
import Procedimentos from '../pages/Cadastro/Procedimentos'
import Usuarios from '../pages/Cadastro/UsuarioSistema';
import Inicio from '../pages/Inicio/Inicio';
import ListaProcedimento from '../pages/Procedimento/Listar';

const { Navigator, Screen } = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name="Login"
          component={LoginScreen}
        />
        <Screen
          name="Procedimentos"
          component={Procedimentos} />
        <Screen
          name="Usuarios"
          component={Usuarios} />
        <Screen
          name="Inicio"
          component={Inicio} />
        <Screen
          name="ListaProcedimento"
          component={ListaProcedimento} />
      </Navigator>
    </NavigationContainer>
  );
}