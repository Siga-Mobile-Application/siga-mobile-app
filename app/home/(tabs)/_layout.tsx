import ButtonFilter from '@/components/filter/button-filter';
import { FilterProvider } from '@/contexts/filter';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <FilterProvider>
      <Tabs initialRouteName='profile'
        screenOptions={{
          tabBarInactiveTintColor: 'white',
          tabBarActiveTintColor: '#97D3FA',
          headerShown: false,
          tabBarStyle: { backgroundColor: 'black' },
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
            title: 'Atual',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="book" color={color} />,
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            headerShown: true,
            headerRightContainerStyle: { marginEnd: 20 },
            headerRight: () => <ButtonFilter />,
            title: 'Histórico',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="history" color={color} />,
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
    </FilterProvider>
  );
}
