import ButtonReload from '@/components/reload-button';
import Logout from '@/components/profile-tab/logout';
import { HelperProvider } from '@/contexts/helper';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React, { useContext } from 'react';
import AuthContext from '@/contexts/auth';
import { Badge, BadgeIcon, BadgeText } from '@/components/ui/badge';
import { GlobeIcon } from '@/components/ui/icon';

export default function Layout() {
  const { isConnected } = useContext(AuthContext);

  return (
    <HelperProvider>
      <Tabs initialRouteName='profile'
        screenOptions={{
          tabBarInactiveTintColor: 'white',
          tabBarActiveTintColor: '#97D3FA',
          headerRight: () => <>{isConnected ? <ButtonReload /> : <Badge action='error'><BadgeIcon as={GlobeIcon} /><BadgeText>Sem conexão com a internet</BadgeText></Badge>}</>,
          tabBarStyle: { backgroundColor: 'black' },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            headerRight: () => <></>,
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
          name="grades"
          options={{
            title: 'Notas Parciais',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="book" color={color} />,
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: 'Histórico',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="history" color={color} />,
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            headerRight: () => <Logout />,
            title: 'Perfil',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
          }}
        />
      </Tabs>
    </HelperProvider>
  );
}
