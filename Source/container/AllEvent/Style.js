import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const {height,width} = Dimensions.get('window');

export default StyleSheet.create({
    allPage:{
        backgroundColor: 'white',
    },
    ListBox: {
        marginBottom: 10,
    },
    image:{
        height: height/3,
        width: width,
    },
    font_EventName:{
        fontFamily: 'FC Active Regular',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    font_EventDetail:{
        fontFamily: 'FC Active Regular',
        fontWeight: 'normal',
        fontSize: 18,
        color: 'gray',
        marginLeft: 10,
        marginRight: 10,
    },
    EventDetailBox:{
        flexDirection: 'row',
        marginBottom: 5,
    },
    FontHeader: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },
    Header: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height / 15,
        backgroundColor: '#e80083',
    }
});