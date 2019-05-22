import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import TotalPoint from '../PointHistoryContainer/TotalPoint'
import Profile from '../ProfileContainer/Profile'

const Navigation = StackNavigator({
    Profile: {screen: Profile},
    TotalPoint: {screen: TotalPoint}
})

export default Navigation;