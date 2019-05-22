import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

import BehavHis from './BehaviorHistory';
import JoinEventHis from './JoinEventHistory';

class JoinEventHistory extends Component {
    render() {
        return (
            <JoinEventHis />
        )
    }
}

class BehaviorHistory extends Component {
    render() {
        return (
            <BehavHis />
        )
    }
}

/*
export default TabNavigator({
    JoinEventHis: {
        screen: JoinEventHistory,
    },
    BehaviorHis: {
        screen: BehaviorHistory,
    },
})
*/

export default createAppContainer(
    createMaterialTopTabNavigator(
        {
            Event: { 
                screen: JoinEventHistory,
                navigationOptions:{
                    title: 'Event History',
                }
            },
            Behavior: { 
                screen: BehaviorHistory,
                navigationOptions:{
                    title: 'Behavior History',
                }
            }
        },
        {
            tabBarOptions: {
                activeTintColor: 'white',
                activeBackgroundColor: "#e80083",
                style:{
                    backgroundColor: "#e80083",
                    fontSize: 20,
                    fontWeight: 'bold',
                }
              },
        }
    )
)