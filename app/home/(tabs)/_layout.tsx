import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <>
      <Tabs screenOptions={{ tabBarActiveTintColor: '#71A6E9', headerShown: false }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Inicio',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="control"
          options={{
            title: 'Consultas',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="book" color={color} />,
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            headerShown: true,
            title: 'Perfil',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
          }}
        />
      </Tabs>
    </>
  );
}