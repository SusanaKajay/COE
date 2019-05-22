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
import { point, top2, top3, top5, crown } from '../../../img/imgIndext';
import {memberAPI, HomeColor} from '../../themes/variables';

import Bill_Rank_Screen from './Bill_Rank';
import Elon_Rank_Screen from './Elon_Rank';
import Larry_Rank_Screen from './Larry_Rank';
import MarkRank_Screen from './Mark_Rank';

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
            AllMemberSource: [],
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
        fetch(memberAPI.url)
            .then((Response) => Response.json())
            .then((ResponseJson) => {
                this.setState({
                    error: ResponseJson.error || null,
                    loading: false,
                    AllMemberSource: ResponseJson.filter(index =>
                        index.Member_Status === "Active"
                    ),
                });
            })
            .catch(error => {
                this.setState({ error, loading: false, refreshing: false })
            });
    }



    render() {
        Top1 = this.state.AllMemberSource.sort((a, b) =>
            b.Member_Total - a.Member_Total
        ).slice(0, 1);;

        Top2 = this.state.AllMemberSource.sort((a, b) =>
            b.Member_Total - a.Member_Total
        ).slice(1, 2);

        Top3 = this.state.AllMemberSource.sort((a, b) =>
            b.Member_Total - a.Member_Total
        ).slice(2, 3);

        Top4to10 = this.state.AllMemberSource.sort((a, b) =>
            b.Member_Total - a.Member_Total
        ).slice(3, 10)

        return (
            <ScrollView style={styles.allPage}>
                <View style={styles.banner}>
                    <Text style={styles.bannerText}>Top 10</Text>
                </View>
                <View 
                style={{
                    marginBottom:10,
                }}
                >
                    <FlatList
                        data={Top1}
                        renderItem={this.renderTop1}
                        keyExtractor={(item, index) => item.id}
                        refreshing={this.state.refreshing}
                        onRefresh={this.handleRefresh}
                    />
                    <FlatList
                        data={Top2}
                        renderItem={this.renderTop2}
                        keyExtractor={(item, index) => item.id}
                        refreshing={this.state.refreshing}
                        onRefresh={this.handleRefresh}
                    />
                    <FlatList
                        data={Top3}
                        renderItem={this.renderTop3}
                        keyExtractor={(item, index) => item.id}
                        refreshing={this.state.refreshing}
                        onRefresh={this.handleRefresh}
                    />
                    <FlatList
                        data={Top4to10}
                        renderItem={this.renderTop4to10}
                        keyExtractor={(item, index) => item.id}
                        refreshing={this.state.refreshing}
                        onRefresh={this.handleRefresh}
                    />
                </View>
                <View style={styles.banner}>
                    <Text style={styles.bannerText}>Home Ranking</Text>
                </View>
                <View horizontal={true} style={styles.HomeView}>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('BillRank')}
                    >
                        <View style={styles.btnView}>
                            <Image style={styles.HomeBtn} source={Bill} />
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ElonRank')}
                    >
                        <View style={styles.btnView}>
                            <Image style={styles.HomeBtn} source={Elon} />
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('LarryRank')}
                    >
                        <View style={styles.btnView}>
                            <Image style={styles.HomeBtn} source={Larry} />
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('MarkRank')}
                    >
                        <View style={styles.btnView}>
                            <Image style={styles.HomeBtn} source={Mark} />
                        </View>

                    </TouchableOpacity>
                </View>

            </ScrollView>
        );
    }

    renderTop1 = ({ item }) => {
        return (
            <View style={styles.ListBox}>
                <View style={styles.rewardView}>
                    <Image source={crown} style={styles.rewardView} />
                </View>

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

    renderTop2 = ({ item }) => {
        return (
            <View style={styles.ListBox}>
                <View style={styles.rewardView}>
                    <Image source={top2} style={styles.rewardView} />
                </View>

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

    renderTop3 = ({ item }) => {
        return (
            <View style={styles.ListBox}>
                <View style={styles.rewardView}>
                    <Image source={top3} style={styles.rewardView}/>
                </View>
                
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

    renderTop4to10 = ({ item }) => {
        return (
            <View style={styles.ListBox}>               
                <Image source={{ uri: item.Member_Profile }} style={styles.image2} />
                <View style={styles.DetailView} >
                    <Text style={styles.name2}>{item.Member_Name} {item.Member_Lastname}</Text>
                    <Text style={styles.textHome}>{item.Member_House}</Text>
                    <View style={styles.pointView}>
                        <Image style={styles.icon2} source={point} />
                        <Text style={styles.point2}>{item.Member_Total}</Text>
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
            screen: All_Rank,
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
                    backgroundColor: HomeColor.Bill,
                }
            }
        },
        ElonRank: {
            screen: ElonScreen,
            navigationOptions: {
                title: 'Elon Musk',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: HomeColor.Elon,
                }
            }
        },
        LarryRank: {
            screen: LarryScreen,
            navigationOptions: {
                title: 'Larry Page',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: HomeColor.Larry,
                }
            }
        },
        MarkRank: {
            screen: MarkScreen,
            navigationOptions: {
                title: 'Mark Zuckerberg',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: HomeColor.Mark,
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
