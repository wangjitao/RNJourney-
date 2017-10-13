

import {StackNavigator,addNavigationHelpers} from 'react-navigation';
import Journey from './Journey';
import CreatJourney from './CreatJourney';
import Test from './Test';
import React from 'react';

export default JourneyApp = StackNavigator({
    Journey:{
        screen:Journey,
        navigationOptions:({navigation,screenProps})=>({
            headerTitle:'行程小助手',
            headerStyle:{
                backgroundColor:'#3b8afb',
            },
            headerTitleStyle:{
                fontSize:28,
                color:'white',
            },
            gesturesEnabled:true,
        })
    },

    Test:{
        screen:Test,
    }

})