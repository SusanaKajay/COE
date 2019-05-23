import React, { Component } from 'react';
import {
    FlatList,
    ActivityIndicator,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import styles from './Style';
import { coin, point } from '../../../img/imgIndext'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { memberAPI, HomeColor } from '../../themes/variables';

const { height, width } = Dimensions.get('window');

import BehavHistory from '../HistoryContainer/BehaviorHistory';
import JoinEventHistory from '../HistoryContainer/JoinEventHistory';
import RedeemHistory from '../HistoryContainer/RedeemHistory';

class Profile extends Component {

    static navigationOption = {
        title: "Profile",
    }

    constructor() {
        super()
        this.state = {
            MemberSource: [],
            JoinHistory: [],
            BehavHistory: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.RemoteRequest();
    }

    RemoteRequest = () => {

        const getVariableFromLogin = '58113242'

        fetch(memberAPI.url)
            .then((Response) => Response.json())
            .then((ResponseJson) => {
                this.setState({
                    error: ResponseJson.error || null,
                    loading: false,
                    MemberSource: ResponseJson.filter(index => index.Member_ID === getVariableFromLogin),
                });
            })
            .catch(error => {
                this.setState({ error, loading: false, refreshing: false })
            });
    }

    render() {
        return (
            <View style={styles.allPage}>
                <FlatList
                    data={this.state.MemberSource}
                    renderItem={this.renderMemberCard}
                    keyExtractor={(item, index) => item.id}
                />
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('JoinHistory', { id: this.state.MemberSource.Member_ID })}
                >
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Join Event History</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('BehavHistory', { id: this.state.MemberSource.Member_ID })}
                >
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Behavior History</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('RedeemHistory', { id: this.state.MemberSource.Member_ID })}
                >
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Redeem History</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Edit Profile</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Reset Password</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Sign Out</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }

    renderMemberCard = ({ item }) => {

        var homeCol = '';
        if (item.Member_House == "Bill Gates") {
            homeCol = HomeColor.Bill;
        } else if (item.Member_House == "Elon Mask") {
            homeCol = HomeColor.Elon;
        } else if (item.Member_House == "Larry Page") {
            homeCol = HomeColor.Larry;
        } else if (item.Member_House == "Mark Zuckerberg") {
            homeCol = HomeColor.Mark;
        }

        return (
            <View style={styles.allPage}>
                <View style={{
                    backgroundColor: homeCol,
                    width: width / 1.05,
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 20,
                    flexDirection: 'row',
                }}>
                    <View style={styles.subMemberCard}>
                        <Image
                            source={{ uri: item.Member_Profile }}
                            style={styles.memberImg}
                        />
                    </View>
                    <View style={styles.subMemberCard}>
                        <View style={styles.memberContentView}>
                            <Text style={styles.memberText1} >{item.Member_Name}</Text>
                            <Text style={styles.memberText1}>{item.Member_Lastname}</Text>
                            <Text style={styles.memberText2}>ID: {item.Member_ID}</Text>
                            <Text style={styles.memberText2}>Tel: {item.Member_Tel}</Text>
                        </View>
                    </View>

                </View>
            </View>
        )
    }



}


const RootStack = createStackNavigator(
    {
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Profile',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#e80083'
                }
            }
        },
        BehavHistory: {
            screen: BehavHistory,
            navigationOptions: {
                title: 'Behavior History',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#e80083'
                }
            }
        },
        JoinHistory: {
            screen: JoinEventHistory,
            navigationOptions: {
                title: 'Join Event History',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#e80083'
                }
            }
        },
        RedeemHistory: {
            screen: RedeemHistory,
            navigationOptions: {
                title: 'Redeem History',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#e80083'
                }
            }
        }
    },
    {
        initialRouteName: 'Profile',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}