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
import { RedeemHisAPI } from '../../themes/variables';
import styles from './style';

export default class RedeemHistory extends Component {

    constructor() {
        super();
        this.state = {
            RedeemHistorySource: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.RemoteRequest();
    }

    RemoteRequest = () => {

        getVariableFromLogin = '58113242'

        fetch(RedeemHisAPI.url)
            .then((Response) => Response.json())
            .then((ResponseJson) => {
                this.setState({
                    error: ResponseJson.error || null,
                    loading: false,
                    RedeemHistory: ResponseJson.filter(index => index.Member_ID.toString() === getVariableFromLogin),
                });
            })
            .catch(error => {
                this.setState({ error, loading: false })
            });
    }

    render() {
        return (
            <View style={styles.allPage}>
                <FlatList
                    data={this.state.RedeemHistory}
                    renderItem={this.RedeemCard}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        )
    }

    RedeemCard = ({ item }) => {
        return (
            <View style={styles.allPage}>
                <View style={styles.card}>
                    <View style={styles.subCard}>
                        <View style={styles.subCard2}>
                            <Text style={styles.TextName}>{item.Reward_Name}</Text>
                        </View>
                        <View style={styles.subCard3}>
                            <Text style={styles.TextPoint}>{item.Reward_Point} point</Text>
                        </View>
                    </View>
                    <View style={styles.subCard}>
                        <Text style={styles.normalText}>Quantity:{item.RedeemReward_Quantity}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

