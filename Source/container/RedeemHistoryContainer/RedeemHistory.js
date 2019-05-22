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
            RedeemSource: [],
            loading: false,
            errorLoad: false,
        }
    }

    componentDidMount() {
        this.RemoteRequest();
    }

    RemoteRequest = () => {
        const url = 'http://192.168.1.99:3000/send_RedeemReward'
        fetch(url)
            .then((Response) => Response.json())
            .then((ResponseJson) => {
                this.setState({
                    loading: false,
                    RedeemSource: ResponseJson.filter(index=> index.Member_ID === "58113242")
                })
            })
            .catch(error => {
                this.setState({ error, errorLoad: true })
            });
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.RedeemSource}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        )
    }

    renderItem = ({ item }) => {
        return (
            <View style={{
                borderBottomWidth: 2,
                borderColor: 'gray',
                flex: 1,
                flexDirection: 'column',
            }}>
                <View style={{
                    flex: 0.5,
                    margin: 10,
                }}>
                    <Text style={{ color: '#e80083', fontSize: 20, fontWeight: 'bold' }}>{item.Reward_Name}</Text>
                </View>
                <View style={{
                    flex: 0.5,
                    marginBottom: 10,
                    marginLeft: 10,
                    marginRight: 10,
                }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            flex: 0.3,
                            flexDirection: 'row'
                        }}>
                            <Image
                                source={coin}
                                style={{
                                    height: width / 15,
                                    width: width / 15,
                                    marginRight: 10,
                                }}
                            />
                            <Text style={{ fontSize: 18, color: 'gray' }}>-{item.Reward_Point}</Text>
                        </View>

                        <View style={{
                            flex: 0.3,
                            flexDirection: 'row'
                        }}>
                            <Image
                                source={box}
                                style={{
                                    height: width / 15,
                                    width: width / 15,
                                    marginRight: 10,
                                }}
                            />
                            <Text style={{ fontSize: 18, color: 'gray' }}>x{item.RedeemReward_Quantity}</Text>
                        </View>

                        <View style={{
                            flex: 0.3,
                            flexDirection: 'row'
                        }}>
                            <Image
                                source={calendar}
                                style={{
                                    height: width / 15,
                                    width: width / 15,
                                    marginRight: 10,
                                }}
                            />

                            <Text style={{ fontSize: 18, color: 'gray' }}>{item.RedeemReward_Date}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}