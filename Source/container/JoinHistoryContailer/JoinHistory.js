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
import { coin, box, calendar } from '../../../img/imgIndext'

const { height, width } = Dimensions.get('window');

export default class RedeemHistry extends Component {

    constructor() {
        super();
        this.state = {
            JoinSource: [],
            loading: true,
            errorLoad: false,
        }
    }

    componentDidMount() {
        this.RemoteRequest();
    }

    RemoteRequest = () => {
        const url = ''
        fetch(url)
            .then((Response) => Response.json())
            .then((ResponseJson) => {
                this.setState({
                    loading: false,
                    //ยังไม่ได้ฟิลเตอร์
                    JoinSource: ResponseJson
                })
            })
            .catch(error => {
                this.setState({ error })
            });
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.JoinSource}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        )
    }

    renderItem = ({ item }) => {
        return (
            <View>
                <Text></Text>
            </View>
        )
    }

}