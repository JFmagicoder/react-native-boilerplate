import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeModule} from '../../modules';
import {Molecules} from '../../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      options={{
        headerShown: false,
      }}>
      {() => (
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: '#000',
          }}>
          <Tab.Screen
            name="锡安"
            component={HomeModule.HomeScreens.Home}
            options={{
              tabBarLabel: '锡安',
              tabBarIcon: ({color, size, focused}) => (
                <Molecules.IconImage
                  source={require('../../../assets/images/Home.png')}
                  size={22}
                  style={{tintColor: color}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="直播"
            component={HomeModule.HomeScreens.Blank}
            options={{
              tabBarLabel: '直播',
              tabBarIcon: ({color, size, focused}) => (
                <Molecules.IconImage
                  source={require('../../../assets/images/instagram.png')}
                  size={22}
                  style={{tintColor: color}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="课程"
            component={HomeModule.HomeScreens.Blank}
            options={{
              tabBarLabel: '课程',
              tabBarIcon: ({color, size, focused}) => (
                <Molecules.IconImage
                  source={require('../../../assets/images/book.png')}
                  size={22}
                  style={{tintColor: color, width: 24}}
                  resizeMode="contain"
                />
              ),
            }}
          />
          <Tab.Screen
            name="通知"
            component={HomeModule.HomeScreens.Blank}
            options={{
              tabBarLabel: '通知',
              tabBarIcon: ({color, size, focused}) => (
                <Molecules.IconImage
                  source={require('../../../assets/images/notification_bell.png')}
                  size={22}
                  style={{tintColor: color}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="我的"
            component={HomeModule.HomeScreens.Profile}
            options={{
              tabBarLabel: '我的',
              tabBarIcon: ({color, size}) => (
                <Molecules.IconImage
                  source={{
                    uri:
                      'https://media.thethao247.vn/upload/cuongnm/2020/04/28/guc-nga-truoc-nhan-sac-cua-hot-girl-bong-ro-xinh-dep-nhat-trung-quoc1588047165.jpg',
                  }}
                  size={24}
                  round={true}
                />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </Stack.Screen>
  </Stack.Navigator>
);

export default HomeStack;
