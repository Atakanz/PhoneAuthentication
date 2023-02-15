import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useFonts, Poppins_600SemiBold} from '@expo-google-fonts/poppins';
import DefaultHeader from '../components/defaultHeader/defaultHeader';
import MainPage from '../pages/mainPage/mainPage';
import MyCart from '../pages/myCart/myCart';
import Campaigns from '../pages/campaigns/campaigns';
import Main from '../assets/anasayfabottomicon.svg';
import Cart from '../assets/sepetimbottomicon.svg';
import Campaign from '../assets/kampanyalarbottomicon.svg';
import Focus from '../assets/focusIcon.svg';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  const [loaded] = useFonts({
    Poppins_600SemiBold,
  });

  if (!loaded) {
    return null;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarBackgroundColor: '#fff',
        tabBarActiveBackgroundColor: '#fff',
        headerTitle: '',
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 68,
          borderRadius: 14,
          ...styles.shadow,
        },
        headerBackground: () => <DefaultHeader />,
      }}>
      <Tab.Screen
        name="Ana Sayfa"
        component={MainPage}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarUnit}>
              <Main
                fill={focused ? 'rgb(21, 94, 117)' : '#FFFFFF'}
                style={focused ? styles.focusedIcon : styles.icon}
              />
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily: 'Poppins_600SemiBold',
                    color: focused ? 'rgb(21, 94, 117)' : '#212121',
                  },
                ]}>
                Main
              </Text>
              {focused && <Focus />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Sepetim"
        component={MyCart}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarUnit}>
              <Cart fill={focused ? 'rgb(21, 94, 117)' : '#FFFFFF'} />
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily: 'Poppins_600SemiBold',
                    color: focused ? 'rgb(21, 94, 117)' : '#212121',
                  },
                ]}>
                Cart
              </Text>
              {focused && <Focus />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Kampanyalar"
        component={Campaigns}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarUnit}>
              <Campaign fill={focused ? 'rgb(21, 94, 117)' : '#212121'} />
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily: 'Poppins_600SemiBold',
                    color: focused ? 'rgb(21, 94, 117)' : '#212121',
                  },
                ]}>
                Campaigns
              </Text>
              {focused && <Focus />}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowCoolor: 'rgb(21, 94, 117)',
    shadowOffset: 0,
  },
  text: {
    fontSize: 8,
  },
  tabBarUnit: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
