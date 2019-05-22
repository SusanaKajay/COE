import React, { Component } from 'react';
import {
    FlatList,
    ActivityIndicator,
    Text,
    View,
    Dimensions,
    StyleSheet,
    Image,
} from 'react-native';
import styles from './Rank_style';
import { point } from '../../../img/imgIndext';

export default class Larry_Rank extends Component {


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
                    BillMemberSource: ResponseJson.sort((a, b) => b.Member_Total - a.Member_Total) && ResponseJson.filter(index => index.Member_House === "Larry Page" && index.Member_Status === "Active"),
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
                    data={this.state.BillMemberSource}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.id}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                />
            </View>
        );
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.ListBox}>
                <Image source={{ uri: item.Member_Profile }} style={styles.image} />
                <View style={styles.DetailView} >
                    <Text style={styles.name}>{item.Member_Name} {item.Member_Lastname}</Text>
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
