/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import Routers from './component/Routers';

export default class App extends Component {

    render() {

        const { dispatch, nav } = this.props;

        return (
            <Routers screenProps={{themeColor:'yellow'}}/>

        );
    }
}


