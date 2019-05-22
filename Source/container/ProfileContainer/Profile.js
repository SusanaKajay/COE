import React, { Component } from 'react';
import {
    FlatList,
    ActivityIndicator,
    Text,
    View,
    Image,
    Dimensions,
} from 'react-native';
import styles from './Style';
import { coin, point } from '../../../img/imgIndext'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const { height, width } = Dimensions.get('window');

class Profile extends Component {

    static navigationOption={
        title: "Profile",
    }

    constructor() {
        super()
        this.state = {
            MemberSource: [],
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
                    MemberSource: ResponseJson.filter(index=> index.Member_ID === "58113242"),
                });
            })
            .catch(error => {
                this.setState({ error, loading: false, refreshing: false })
            });
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.MemberSource}
                    renderItem={this.renderItem}
                    numColumns={2}
                    keyExtractor={(item, index) => item.id}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                />
            </View>
        )
    }

    renderItem = ({ item }) => {
        return (
            <View style={{ flexDirection: 'column' }}>

                <View style={styles.InfoView}>
                    <View style={styles.imgView}>
                        <Image
                            source={{ uri: item.Member_Profile }}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.SubInfoView}>
                        <Text style={styles.TextPoint}>{item.Member_Name} {item.Member_Lastname}</Text>
                        <Text style={styles.otherText}>ID: {item.Member_ID}</Text>
                        <Text style={styles.otherText}>Tel: {item.Member_Tel}</Text>
                        <Text style={styles.otherText}>House: {item.Member_House}</Text>
                    </View>
                </View>

                <View style={{ borderTopWidth: 1, borderColor: '#e80083' }}></View>
                <View style={styles.SubInfoView}>
                    <View style={styles.All_Info}>

                            <View style={{
                                borderRightWidth: 1,
                                alignItems: 'center',
                                flexDirection: 'column',
                                width: width / 2,
                                marginTop: 10,
                                marginBottom: 10,
                                borderColor: '#e80083'
                            }}>
                                <Text style={styles.TextPoint}>{item.Member_Total}</Text>
                                <Text style={styles.Textbtn}>Total Point</Text>
                            </View>

                            <View style={{
                                alignItems: 'center',
                                flexDirection: 'column',
                                width: width / 2,
                                marginTop: 10,
                                marginBottom: 10,
                                borderColor: '#e80083'
                            }}>
                                <Text style={styles.TextPoint}>{item.Member_Available}</Text>
                                <Text style={styles.Textbtn}>Available Point</Text>
                            </View>

                    </View>
                </View>
                <View style={{ borderTopWidth: 1, borderColor: '#e80083' }}></View>

                <View style={styles.btn}>
                    <Text style={styles.Textbtn}>Edit Profile</Text>
                </View>
                <View style={styles.btn}>
                    <Text style={styles.Textbtn}>Sign Out</Text>
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