import React, { Component } from 'react';
import {
    AppRegistry,
    FlatList,
    ActivityIndicator,
    Text,
    View,
    Dimensions,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { coin, box, calendar } from '../../../img/imgIndext';
import { JoinHisAPI } from '../../themes/variables';
import styles from './style';

export default class SignIn extends Component {

    constructor(){
        super()
        this.state ={
            id: '',
            password = '',
            error ='',
        }
    }


    render() {
        return (
            <View style={styles.allPage}>
                <View style={styles.TopView}>
                    <View style={styles.TextView}>
                        <Text style={styles.TopFont}>Welcome to</Text>
                        <Text style={styles.TopFont}>COE</Text>
                        <Text style={styles.TopFont}>Reward</Text>
                    </View>
                </View>
                <View style={styles.BottomView}>
                    <TextInput
                        style={styles.inputBox}
                        placeholder='Student ID'
                        keyboardType = 'number-pad'
                        maxLength = {8}
                        onChangeText = { (text) => this.setState({id: text}) }
                    />
                    <TextInput
                        style={styles.inputBox}
                        placeholder='Password'
                        secureTextEntry={true}
                        onChangeText = { (text) => this.setState({password: text}) }
                    />

                    <TouchableOpacity
                        onPress = {this.onLoginPressed.bind(this)}
                    >
                        <View style={styles.btnView}>
                            <View style={styles.btn}>
                                <Text style={styles.fontBtn}>Sign In</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <Text>
                        {this.state.error}
                    </Text>

                </View>
            </View>
        )
    }

}

AppRegistry.registerComponent('SignIn', () => SignIn);