import ButtonFilter from '@/components/filter/button-filter';
import Logout from '@/components/profile-tab/logout';
import { FilterProvider } from '@/contexts/filter';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <FilterProvider>
      <Tabs initialRouteName='profile'
        screenOptions={{
          tabBarInactiveTintColor: 'white',
          tabBarActiveTintColor: '#97D3FA',
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
          name="schedule"
          options={{
            title: 'Horários',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="calendar" color={color} />,
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
            headerRightContainerStyle: { marginEnd: 20 },
            headerRight: () => <ButtonFilter />,
            title: 'Histórico',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="history" color={color} />,
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            headerRightContainerStyle: { marginEnd: 20 },
            headerRight: () => <Logout />,
            title: 'Perfil',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
          }}
        />
      </Tabs>
    </FilterProvider>
  );
}
