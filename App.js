import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './screens/Login';
import Home from './screens/Home';
import CreateAccount from './screens/CreateAccount';
import Jobs from './screens/Jobs';
import CreateJob from './screens/CreateJob';
import Matchs from './screens/Matchs';
import MyPostulations from './screens/MyPostulations';
import Postulations from './screens/Postulations';
import Profile from './screens/Profile';
import Subscriptions from './screens/Subscriptions';
import Vacancies from './screens/Vacancies';
import Notifications from './screens/Notifications/';
import Candidate from './screens/Candidate/Candidate';
import UpdateJob from './screens/UpdateJob';
import Chat from './components/ChatComponent/components/Chat';
import ChatList from './components/ChatComponent/components/List';

import colors from './src/assets/colors';
import RigthButtons from './components/NavigationBar/components/rigthButtons';
import LeftButtons from './components/NavigationBar/components/leftButton';

const Stack = createNativeStackNavigator();

export default function App() {

  const options = {
    headerShown: true,
    headerBackVisible: false,
    title: 'Inicio',
    headerRight: () => <RigthButtons />,
    headerLeft: () => <LeftButtons />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.principalColor,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Nunito-Bold',
            fontSize: 20
          }
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
          initialParams={{
            seccionName: 'Login'
          }}
        />
        <Stack.Screen
          name="Candidate"
          component={Candidate}
          options={options}
          initialParams={{
            seccionName: 'Candidato'
          }}
        />
        <Stack.Screen
          name='Notifications'
          component={Notifications}
          options={options}
          initialParams={{
            seccionName: 'Notificaciones'
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={options}
          initialParams={{
            seccionName: 'Perfil'
          }}
        />
        <Stack.Screen
          name="MyPostulations"
          component={MyPostulations}
          options={options}
          initialParams={{
            seccionName: 'Mis postulaciones'
          }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ headerShown: false }}
          initialParams={{
            seccionName: 'Crear cuenta'
          }}
        />
        <Stack.Screen
          name="CreateJob"
          component={CreateJob}
          options={options}
          initialParams={{
            seccionName: 'Crear trabajo'
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            headerBackVisible: false,
            title: 'Inicio',
            headerRight: () => <RigthButtons />,
            headerLeft: () => <LeftButtons />
          }}
          initialParams={{
            seccionName: 'Inicio'
          }}
        />
        <Stack.Screen
          name="Matchs"
          component={Matchs}
          options={options}
          initialParams={{
            seccionName: 'Matchs'
          }}
        />
        <Stack.Screen
          name="Postulations"
          component={Postulations}
          options={options}
          initialParams={{
            seccionName: 'Postulantes'
          }}
        />
        <Stack.Screen
          name="Subscriptions"
          component={Subscriptions}
          options={options}
          initialParams={{
            seccionName: 'Suscripciones'
          }}
        />
        <Stack.Screen
          name="Vacancies"
          component={Vacancies}
          options={options}
          initialParams={{
            seccionName: 'Vacante'
          }}
        />
        <Stack.Screen
          name='Jobs'
          component={Jobs}
          options={options}
          initialParams={{
            seccionName: 'Trabajos'
          }}
        />
        <Stack.Screen
          name='UpdateJob'
          component={UpdateJob}
          options={options}
          initialParams={{
            seccionName: 'Actualizar Trabajo'
          }}
        />
        <Stack.Screen
          name='Chats'
          component={ChatList}
          options={options}
          initialParams={{
            seccionName: 'Chats'
          }}
        />
        <Stack.Screen
          name='Chat'
          component={Chat}
          options={options}
          initialParams={{
            seccionName: 'Chat'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}