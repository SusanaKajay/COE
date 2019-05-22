import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const {height,width} = Dimensions.get('window');

export default StyleSheet.create({
    ListBox: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        height: width/4,
        width: width/4,
        borderRadius: 100,
        marginLeft: 20,
    },
    DetailView: {
        marginLeft: 20,
        flexDirection: 'column'
    },
    name:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    icon:{
        width: width/10,
        height: width/10,
        marginRight: 10,
    },
    pointView:{
        flexDirection:'row',
        alignItems: 'center',
    },
    point:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#E80083',
    }

})