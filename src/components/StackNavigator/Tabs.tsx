import React from 'react';
import {
    TouchableOpacity,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';

//Stacks
import HomeStack from './HomeStack';
import AnimacionesStack from './AnimacionesStack';

//Hooks
import { useAppSelector } from '../../app/hooks';

//Custom Componentes
import MenuBottom from './MenuBottom';

//Assets
import { IconsHeader } from 'icons';

export type RootStackParams = {
    HomeStack: undefined;
    AnimacionesStack: undefined;
}
interface HeaderLeftProps{
    iconColor: string
}

function HeaderLeft({iconColor}:HeaderLeftProps){

    const navigation = useNavigation();

    function openLeftDrawer(){
        navigation.dispatch(DrawerActions.toggleDrawer())
    }

    return(
        <TouchableOpacity onPress={openLeftDrawer} style={{marginLeft: 15}}>
            <SvgXml xml={IconsHeader.burger(35, iconColor)}/>
        </TouchableOpacity>
    );
}

const Tab = createBottomTabNavigator<RootStackParams>();

export default function Tabs(){

    const theme = useAppSelector(({theme}) => theme.value);
    const language = useAppSelector(({language}) => language.value);

    return(
        <Tab.Navigator 
            initialRouteName='HomeStack' 
            tabBar={() => <MenuBottom/>}
            screenOptions={{
                headerStyle:{
                    backgroundColor: theme.headerBackgroundColor,
                },
                headerTitleStyle:{
                    color: theme.headerStackText,
                },
                headerLeft: () => <HeaderLeft iconColor={theme.headerStackText}/>
            }}
        >
            <Tab.Screen name='HomeStack' component={HomeStack} options={{title: language.home.screenTitle}}/>
            <Tab.Screen name='AnimacionesStack' component={AnimacionesStack} options={{title: language.animations.screenTitle}}/>
        </Tab.Navigator>
    );
}