import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    FlatList,
    Image,
    ListView,
} from 'react-native';
import styles from './Style'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {EventAPI} from '../../themes/variables';

import EventDetailScreen from './EventDetailScreen';

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
    //ResponseJson.filter(index=> index.OpenEvent_StartDate >= today)
    RemoteRequest = () => {
        let today = new Date().toISOString().slice(0, 10);
        fetch(EventAPI.url)
            .then((Response) => Response.json())
            .then((ResponseJson) => {
                this.setState({
                    error: ResponseJson.error || null,
                    loading: false,
                    OpenEventSource: ResponseJson.sort((a, b) =>
                        parseInt(a.OpenEvent_StartTime) - parseInt(b.OpenEvent_StartTime)
                    ) && ResponseJson.sort((a, b) =>
                        parseInt(a.OpenEvent_EndTime) - parseInt(b.OpenEvent_EndTime)
                    )&& ResponseJson.sort((a, b) =>
                        a.OpenEvent_StartDate - b.OpenEvent_StartDate
                    )&& ResponseJson.sort((a, b) =>
                        a.OpenEvent_EndDate - b.OpenEvent_EndDate
                    ) && ResponseJson.filter(index =>
                        index.OpenEvent_StartDate >= today
                    )
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
                    onPress={() => this.props.navigation.navigate('EventDetailScreen', { Event_id: item._id, Event_Name : item.OpenEvent_Name })}
                >
                    <Image
                        source={{ uri: item.OpenEvent_Picture }}
                        style={styles.image}
                    />
                    <View>
                        
                    </View>


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
