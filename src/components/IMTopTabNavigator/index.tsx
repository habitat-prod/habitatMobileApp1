import React, { FunctionComponent } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

export interface IScreenOptions {
  lazy?: boolean;
  tabBarBounces?: boolean;
  tabBarScrollEnabled?: boolean;
  tabBarActiveTintColor?: string;
  tabBarInactiveTintColor?: string;
  tabBarStyle?: object;
  tabBarIndicatorStyle?: object;
  tabBarLabelStyle?: object;
}

export interface INavigatorData {
  backBehavior?: any;
  initialRouteName?: any;
  screenOptions?: IScreenOptions;
}

/**
 * Component : Pass it as a priority when initialParams is enough for the component
 * Children : Pass it as a function instead of Component when component needs to send
 * Exactly one among these two should be passed
 */
export interface IScreenNavigation {
  name: string;
  component: any;
  children: (props: any) => React.ReactNode;
  initialParams?: any;
  tabBarLabelIcon?: JSX.Element;
}

export interface ITopTabNavigation {
  navigatorData: INavigatorData;
  screenData: Array<IScreenNavigation>;
  id?: string;
}

export const IMTopTabNavigator: FunctionComponent<ITopTabNavigation> = (props: ITopTabNavigation) => {
  const Tab = createMaterialTopTabNavigator();

  const { tabBarStyle, tabBarLabelStyle, ...screenOptions } = props.navigatorData.screenOptions ?? {};

  const renderTabBarLabel = (value: IScreenNavigation, color: string) => (
    <View style={{ ...props.navigatorData.screenOptions?.tabBarStyle }}>
      <Text style={[props.navigatorData.screenOptions?.tabBarLabelStyle, { color }]}>{value.name}</Text>
      {value.tabBarLabelIcon}
    </View>
  );

  return (
    <Tab.Navigator
      testID={props.id ?? 'imTopTabNavigation'}
      backBehavior={props.navigatorData.backBehavior}
      initialRouteName={props.navigatorData.initialRouteName}
      screenOptions={screenOptions}
    >
      {props.screenData.map((value, index) => {
        return (
          <Tab.Screen
            options={{
              tabBarLabel: ({ color }) => renderTabBarLabel(value, color),
            }}
            name={value.name}
            component={value.component}
            children={value.children}
            initialParams={value.initialParams}
            key={index}
          />
        );
      })}
    </Tab.Navigator>
  );
};
