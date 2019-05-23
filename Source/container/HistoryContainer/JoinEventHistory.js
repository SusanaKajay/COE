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
import {JoinHisAPI} from '../../themes/variables';


export default class JoinEventHistory extends Component {

    constructor() {
        super();
        this.state = {
            JoinEventHistrySource: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.RemoteRequest();
    }

    RemoteRequest = () => {

        getVariableFromLogin = '58113242'

        fetch(JoinHisAPI.url)
            .then((Response) => Response.json())
            .then((ResponseJson) => {
                this.setState({
                    error: ResponseJson.error || null,
                    loading: false,
                    JoinEventHistrySource: ResponseJson.filter(index => index.Member_ID ===  getVariableFromLogin),
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
                    data={this.state.JoinEventHistrySource}
                    renderItem={this.JoinCard}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        )
    }

    JoinCard = ({ item }) => {
        return(
            <View>
                <Text>{item.JoinEvent_Date}</Text>
                <Text>{item.OpenEvent_Name}</Text>
                <Text>{item.OpenEvent_Point} point</Text>
            </View>
        )
    }
}