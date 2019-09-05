import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import color from './styles/colors';

import Cart from './pages/Cart/index';
import Home from './pages/Home/index';

import Header from './components/Header';

const routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      cardStyle: {
        backgroundColor: color.dark,
      },
    }
  )
);

export default routes;
