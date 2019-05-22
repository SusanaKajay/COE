import React, { Component } from 'react';
import {
  FlatList,
  ActivityIndicator,
  Text,
  View,
  Image,
} from 'react-native';
import styles from './Style';
import { coin, box } from '../../../img/imgIndext';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class Reward extends Component {

  constructor() {
    super()
    this.state = {
      RewardSource: [],
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
    const url = 'http://192.168.1.99:3000/send_Reward'
    fetch(url)
      .then((Response) => Response.json())
      .then((ResponseJson) => {
        this.setState({
          error: ResponseJson.error || null,
          loading: false,
          RewardSource: ResponseJson.sort((a, b) => a.Reward_Point - b.Reward_Point) && ResponseJson.filter(index => index.Reward_Quantity != 0),
        });
      })
      .catch(error => {
        this.setState({ error, loading: false, refreshing: false })
      });
  }

  render() {
    return (
      <View style={styles.AllPage}>
        <FlatList
          data={this.state.RewardSource}
          renderItem={this.renderItem}
          numColumns={2}
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
        <View style={styles.imageView}>
          <Image
            source={{ uri: item.Reward_Photo }}
            style={styles.image}
          />
        </View>
        <View style={styles.DetaiilView}>
          <View style={styles.NameOfDetailView}>
            <Text style={styles.nameText}>{item.Reward_Name}</Text>
          </View>
          <View style={styles.SupDetailView}>
            <View style={styles.SupView}>
              <Image source={coin} style={styles.icon} />
              <Text style={styles.DetailText}>{item.Reward_Point}</Text>
            </View>
            <View style={styles.SupView}>
              <Image source={box} style={styles.icon} />
              <Text style={styles.DetailText}>x {item.Reward_Quantity}</Text>
            </View>
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


const RootStack = createStackNavigator(
  {
    Reward: {
      screen: Reward,
      navigationOptions: {
        title: 'COE Rewards',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#e80083'
        }
      }
    },
  },
  {
    initialRouteName: 'Reward',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
