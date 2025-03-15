import ButtonReload from '@/components/reload-button';
import Logout from '@/components/profile-tab/logout';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router, Tabs } from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '@/contexts/auth';
import { Badge, BadgeIcon, BadgeText } from '@/components/ui/badge';
import { GlobeIcon } from '@/components/ui/icon';
import { VStack } from '@/components/ui/vstack';
import VersionContext from '@/contexts/version';

export default function Layout() {
  const { isConnected, user } = useContext(AuthContext);
  const { fetchVersion } = useContext(VersionContext);


  const [badgeConfig, setBadgeConfig] = useState(false);

  async function setBadge() {
    fetchVersion().then((response) => {
      if (response.includes("atualizada")) {
        setBadgeConfig(true);
      } else {
        setBadgeConfig(false);
      }
    }).catch(() => {
      setBadgeConfig(false);
    });
  }

  useEffect(() => {
    if (!user.nome) { return router.replace('../../auth/login') };

    setBadge();
  }, []);

  return (
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
          title: 'Notas',
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
      <Tabs.Screen
        name='config'
        options={{
          title: 'Versão',
          tabBarIcon: ({ color }) =>
            <VStack>
              {
                badgeConfig ?
                  <Badge
                    className="z-10 self-end bg-red-600 rounded-full -mb-3.5 -mr-3.5"
                    variant="solid">
                    <BadgeText className="text-white">!</BadgeText>
                  </Badge>
                  :
                  <></>
              }
              <FontAwesome size={28} name="gear" color={color} />
            </VStack>
        }}
      />
    </Tabs>
  );
}
