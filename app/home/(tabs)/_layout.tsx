import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <>
      <Tabs screenOptions={{
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: '#97D3FA', 
        headerShown: false,
        tabBarBackground: () => (<LinearGradient
          colors={['#3A4B84','#CD3131']}
          start={{ x: 1, y: 2 }}
          end={{ x: 0, y: 0 }}
          style={{ flex: 1 }}
        />
        )
      }}>
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