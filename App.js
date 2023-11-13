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

const Stack = createNativeStackNavigator();

export default function App() {
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
          options={{ headerShown: false }}
          initialParams={{
            seccionName: 'Candidato'
          }}
        />
        <Stack.Screen
          name='Notifications'
          component={Notifications}
          options={{ headerShown: false }}
          initialParams={{
            seccionName: 'Notificaciones'
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
          initialParams={{
            seccionName: 'Perfil'
          }}
        />
        <Stack.Screen
          name="MyPostulations"
          component={MyPostulations}
          options={{ headerShown: false }}
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
          options={{ headerShown: false }}
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
            title: 'Inicio'
          }}
          initialParams={{
            seccionName: 'Inicio'
          }}
        />
        <Stack.Screen
          name="Matchs"
          component={Matchs}
          options={{ headerShown: false }}
          initialParams={{
            seccionName: 'Matchs'
          }}
        />
        <Stack.Screen
          name="Postulations"
          component={Postulations}
          options={{ headerShown: false }}
          initialParams={{
            seccionName: 'Postulantes'
          }}
        />
        <Stack.Screen
          name="Subscriptions"
          component={Subscriptions}
          options={{ headerShown: false }}
          initialParams={{
            seccionName: 'Suscripciones'
          }}
        />
        <Stack.Screen
          name="Vacancies"
          component={Vacancies}
          options={{ headerShown: false }}
          initialParams={{
            seccionName: 'Vacante'
          }}
        />
        <Stack.Screen
          name='Jobs'
          component={Jobs}
          options={{ headerShown: false }}
          initialParams={{
            seccionName: 'Trabajos'
          }}
        />
        <Stack.Screen
          name='UpdateJob'
          component={UpdateJob}
          options={{ headerShown: false }}
          initialParams={{
            seccionName: 'Actualizar Trabajo'
          }}
        />
        <Stack.Screen
          name='Chats'
          component={ChatList}
          options={{ headerShown: false }}
          initialParams={{
            seccionName: 'Chats'
          }}
        />
        <Stack.Screen
          name='Chat'
          component={Chat}
          options={{ headerShown: false }}
          initialParams={{
            seccionName: 'Chat'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}