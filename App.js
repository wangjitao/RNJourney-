/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */



import React, {Component} from 'react';
import Journey from './component/Journey';
import { Navigator } from 'react-native-deprecated-custom-components';

export default class App extends Component<{}> {

    constructor(props){
        super(props)
    }

    render() {
        return (

            <Navigator
                initialRoute = {{component:Journey}}
                configureScene={() => Navigator.SceneConfigs.FloatFromRight}
                renderScene = {(route, navigator) => {
                    return <route.component navigator={navigator} {...route.args}/>
                    }
                }
            />
        );
    }

}

