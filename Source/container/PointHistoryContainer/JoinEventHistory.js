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
import { point, box, calendar } from '../../../img/imgIndext'

const { height, width } = Dimensions.get('window');

export default class PointHistry extends Component {

    constructor() {
        super();
        this.state = {
            JoinSource: [],
            loading: false,
            errorLoad: false,
        }
    }

    componentDidMount() {
        this.RemoteRequest();
    }

    RemoteRequest = () => {
        const url = 'http://192.168.1.99:3000/send_JoinEvent'
        fetch(url)
            .then((Response) => Response.json())
            .then((ResponseJson) => {
                this.setState({
                    loading: false,
                    JoinSource: ResponseJson.filter(index=> index.Member_ID === "58113242")
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
                    data={this.state.JoinSource}
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
                    <Text style={{ color: '#e80083', fontSize: 20, fontWeight: 'bold' }}>{item.OpenEvent_Name}</Text>
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
                                source={point}
                                style={{
                                    height: width / 15,
                                    width: width / 15,
                                    marginRight: 10,
                                }}
                            />
                            <Text style={{ fontSize: 18, color: 'gray' }}>x {item.OpenEvent_Point}</Text>
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

                            <Text style={{ fontSize: 18, color: 'gray' }}>{item.JoinEvent_Date}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}