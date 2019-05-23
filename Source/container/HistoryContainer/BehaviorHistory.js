import React, { Component } from 'react';
import {
    FlatList,
    ActivityIndicator,
    Text,
    View,
    Dimensions,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { coin, box, calendar } from '../../../img/imgIndext';
import {BehavHisAPI} from '../../themes/variables';


export default class BehavHistory extends Component {

    constructor() {
        super();
        this.state = {
            BehavHistorySource: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.RemoteRequest();
    }

    RemoteRequest = () => {

        getVariableFromLogin = '58113242'

        fetch(BehavHisAPI.url)
            .then((Response) => Response.json())
            .then((ResponseJson) => {
                this.setState({
                    error: ResponseJson.error || null,
                    loading: false,
                    BehavHistorySource: ResponseJson.filter(index => index.Member_ID ===  getVariableFromLogin),
                });
            })
            .catch(error => {
                this.setState({ error, loading: false })
            });
    }

    render(){
        return(
            <View>
                <FlatList
                    data={this.state.BehavHistorySource}
                    renderItem={this.JoinCard}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        )
    }

    JoinCard = ({ item }) => {
        return(
            <View>
                <Text>{item.Behavior_Name}</Text>
                <Text>{item.Behavior_Point} point</Text>
                <Text>{item.JoinBehavior_Date} </Text>
                <Text>{item.JoinBehavior_Admin}</Text>
            </View>
        )
    }
}