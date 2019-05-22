import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    FlatList,
    Image,
    ListView,
} from 'react-native';
import styles from './Style';
import Detail_style from './Detail_style';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { pin, point } from '../../../img/imgIndext'

class AllEventScreen extends Component {

    constructor() {
        super();
        this.state = {
            OpenEventSource: [],
            loading: false,
            refreshing: false,
            error: null,
            page: 1,
            seed: 1,
        }
    }

    componentDidMount() {
        this.RemoteRequest();
    }

    RemoteRequest = () => {
        let today = new Date().toISOString().slice(0, 10);
        const url = 'http://192.168.1.99:3000/send_OpenEvent'
        fetch(url)
            .then((Response) => Response.json())
            .then((ResponseJson) => {
                this.setState({
                    error: ResponseJson.error || null,
                    loading: false,
                    OpenEventSource: ResponseJson
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
                    data={this.state.OpenEventSource}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.id}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                    ListFooterComponent={this.renderFooter}
                />

            </View>
        );
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.ListBox}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('EventDetailScreen', { Event_id: item._id })}
                >
                    <Image
                        source={{ uri: item.OpenEvent_Picture }}
                        style={styles.image}
                    />
                    <Text style={{fontWeight: 'bold',fontSize: 20,color: '#e80083',marginRight: 10,marginLeft:10}}>{item.OpenEvent_Name}</Text>
                    <Text style={{color: 'gray',fontSize: 18,marginRight: 10,marginLeft:10,marginBottom:20}}>จัดโดย {item.CreatedBy_ID}</Text>

                    
                </TouchableOpacity>
            </View>
        )
    }

    handleRefresh = () => {
        this.setState = {
            page: 1,
            refreshing: true,
            seed: this.state.seed + 1,
        }, () => {
            this.RemoteRequest();
        }
    }

    renderFooter = () => {
        if (!this.state.loading) return null;

        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: 'gray'
                }}
            >
                <ActivityIndicator animating size='large' />
            </View>
        )
    }
}


class EventDetailScreen extends Component {

    constructor() {
        super();
        this.state = {
            OpenEventSource: [],
            loading: false,
            refreshing: false,
            error: null,
            page: 1,
            seed: 1,
        }
    }

    componentDidMount() {
        this.RemoteRequest();
    }

    RemoteRequest = () => {

        const { navigation } = this.props;
        const EventId = navigation.getParam('Event_id', 'NO-ID');

        const url = 'http://192.168.1.99:3000/send_OpenEvent'
        fetch(url)
            .then((Response) => Response.json())
            .then((ResponseJson) => {
                this.setState({
                    error: ResponseJson.error || null,
                    loading: false,
                    OpenEventSource: ResponseJson.filter(index => index._id === EventId),
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
                    data={this.state.OpenEventSource}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.id}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                    ListFooterComponent={this.renderFooter}
                />

            </View>
        );
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.ListBox}>
                <Image
                    source={{ uri: item.OpenEvent_Picture }}
                    style={styles.image}
                />
                <View style={Detail_style.Detail_View}>

                    <View style={Detail_style.NameView}>
                        <Text style={Detail_style.NameText}>{item.OpenEvent_Name}</Text>
                    </View>

                    <View style={Detail_style.createByView}>
                        <Text style={Detail_style.normalText}>จัดโดย {item.CreatedBy_ID}</Text>
                    </View>

                    <View style={Detail_style.row}>
                        <Image
                            source={point}
                            style={Detail_style.icon}
                        />
                        <Text style={Detail_style.normalText}>{item.OpenEvent_Point}</Text>
                    </View>
                    <View style={Detail_style.DescripView}>
                        <Text style={Detail_style.normalText}> {item.OpenEvent_Descrip}</Text>
                        <View style={Detail_style.EventTypeView}>
                            <Text style={Detail_style.normalText}>หมวดหมู่กิจกรรม</Text>
                            <Text style={Detail_style.TypeText1}>{item.EventType_ID}</Text>
                        </View>
                    </View>

                    <View style={Detail_style.eventToPinView}>
                        <View style={Detail_style.row}>
                            <Text style={Detail_style.normalText}>Start</Text>
                            <Text style={Detail_style.normalText}>{item.OpenEvent_StartDate}  {item.OpenEvent_StartTime} </Text>
                        </View>
                        <View style={Detail_style.row}>
                            <Text style={Detail_style.normalText}>End</Text>
                            <Text style={Detail_style.normalText}>{item.OpenEvent_EndDate}  {item.OpenEvent_EndTime} </Text>
                        </View>
                        <View style={Detail_style.row}>
                            <Image
                                source={pin}
                                style={Detail_style.icon}
                            />
                            <Text style={Detail_style.normalText}>{item.OpenEvent_Location}</Text>
                        </View>
                    </View>

                </View >
            </View>
        )
    }

    handleRefresh = () => {
        this.setState = {
            page: 1,
            refreshing: true,
            seed: this.state.seed + 1,
        }, () => {
            this.RemoteRequest();
        }
    }

    renderFooter = () => {
        if (!this.state.loading) return null;

        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: 'gray'
                }}
            >
                <ActivityIndicator animating size='large' />
            </View>
        )
    }



}


const RootStack = createStackNavigator({
    AllEventScreen: {
        screen: AllEventScreen,
        navigationOptions: {
            title: 'Upcoming Events',
            headerTintColor: 'white',
            headerLayoutPreset: 'center',
            headerStyle: {
                backgroundColor: '#e80083',
            }
        }
    },
    EventDetailScreen: {
        screen: EventDetailScreen,
        navigationOptions: {
            headerTintColor: 'white',
            headerLayoutPreset: 'center',
            headerStyle: {
                backgroundColor: '#e80083',
            }
        }
    },
},
    {
        initialRouteName: 'AllEventScreen',
    })


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}