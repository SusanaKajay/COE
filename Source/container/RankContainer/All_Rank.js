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
import styles from './AllRank_style'
import { Bill, Elon, Larry, Mark } from '../../../img/imgIndext'
import { point } from '../../../img/imgIndext';


import Bill_Rank_Screen from './Bill_Rank';
import Elon_Rank_Screen from './Elon_Rank';
import Larry_Rank_Screen from './Larry_Rank';
import MarkRank_Screen from './Elon_Rank';

class BillScreen extends Component {
    render() {
        return (
            <Bill_Rank_Screen />
        );
    }
}

class ElonScreen extends Component {
    render() {
        return (
            <Elon_Rank_Screen />
        );
    }
}

class LarryScreen extends Component {
    render() {
        return (
            <Larry_Rank_Screen />
        );
    }
}

class MarkScreen extends Component {
    render() {
        return (
            <MarkRank_Screen />
        );
    }
}

class All_Rank extends Component {

    constructor() {
        super();
        this.state = {
            BillMemberSource: [],
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
        const url = 'http://192.168.1.99:3000/send_Member'
        fetch(url)
            .then((Response) => Response.json())
            .then((ResponseJson) => {
                this.setState({
                    error: ResponseJson.error || null,
                    loading: false,
                    BillMemberSource: ResponseJson.sort((a, b) => b.Member_Total - a.Member_Total) && ResponseJson.filter(index => index.Member_Status === "Active"),
                });
            })
            .catch(error => {
                this.setState({ error, loading: false, refreshing: false })
            });
    }

    render() {
        return (
            <ScrollView style={styles.allPage}>

                <View horizontal={true} style={styles.HomeView}>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('BillRank')}
                    >
                        <View style={styles.btnView}>
                            <Image style={styles.HomeBtn} source={Bill} />
                            <Text style={styles.textHome}>Bill Gates</Text>
                        </View>
                        
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ElonRank')}
                    >
                        <View style={styles.btnView}>
                            <Image style={styles.HomeBtn} source={Elon} />
                            <Text style={styles.textHome}>Elon Musk</Text>
                        </View>
                        
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('LarryRank')}
                    >
                        <View  style={styles.btnView}>
                            <Image style={styles.HomeBtn} source={Larry} />
                            <Text style={styles.textHome}>Larry Page</Text>
                        </View>
                        
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('MarkRank')}
                    >
                        <View style={styles.btnView}>
                            <Image style={styles.HomeBtn} source={Mark}/>
                            <Text style={styles.textHome}>Mark Zuckerberg</Text>
                        </View>
                        
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        data={this.state.BillMemberSource}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => item.id}
                        refreshing={this.state.refreshing}
                        onRefresh={this.handleRefresh}
                    />
                </View>
            </ScrollView>            
        );
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.ListBox}>
                <Image source={{ uri: item.Member_Profile }} style={styles.image} />
                <View style={styles.DetailView} >
                    <Text style={styles.name}>{item.Member_Name} {item.Member_Lastname}</Text>
                    <Text style={styles.textHome}>{item.Member_House}</Text>
                    <View style={styles.pointView}>
                        <Image style={styles.icon} source={point} />
                        <Text style={styles.point}>{item.Member_Total}</Text>
                    </View>
                </View>
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
    
}


const RootStack = createStackNavigator(
    {
        AllRank: {
            screen:All_Rank,
            navigationOptions: {
                title: 'COE Ranking',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#e80083'
                }
            }
        },
        BillRank: {
            screen: BillScreen,
            navigationOptions: {
                title: 'Bill Gates',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#800080'
                }
            }
        },
        ElonRank: {
            screen: ElonScreen,
            navigationOptions: {
                title: 'Elon Musk',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#ffa500'
                }
            }
        },
        LarryRank: {
            screen: LarryScreen,
            navigationOptions: {
                title: 'Larry Page',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#B20000'
                }
            }
        },
        MarkRank: {
            screen: MarkScreen,
            navigationOptions: {
                title: 'Mark Zuckerberg',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#e80083'
                }
            }
        },
    },
    {
        initialRouteName: 'AllRank',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
