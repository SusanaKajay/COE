import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const {height,width} = Dimensions.get('window');

export default StyleSheet.create({
    allPage:{
        backgroundColor: 'white',
    },
    HomeView:{
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        justifyContent:'center', 
        alignItems: 'center',
        flexDirection: 'row',
    },
    HomeBtn:{
        width: width/5,
        height: width/5,
        borderRadius: 100,
        marginBottom: 2,

    },
    btnView:{
        justifyContent:'center', 
        alignItems: 'center',
        margin: 5,
    },
    ListBox: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        height: width/6,
        width: width/6,
        marginRight: 10,
        borderRadius: 100,
        marginLeft: 20,
    },
    DetailView: {
        flexDirection: 'column'
    },
    name:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    icon:{
        width: width/15,
        height: width/15,
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
    },
    textHome:{
        fontSize: 15,
        color: 'gray',
        fontWeight: 'normal',
    },
    rewardIcon:{
        width: width/8,
        height: width/8
    },
    rewardView:{
        width: width/8,
        height: width/8,
        marginLeft:10,
        alignItems:'center',
        justifyContent:'center'
    },
    image2:{
        height: width/8,
        width: width/8,
        marginRight: 10,
        borderRadius: 100,
        marginLeft: 20,
    },
    name2:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    icon2:{
        width: width/17,
        height: width/17,
        marginRight: 10,
    },
    point2:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E80083',
    },
    banner:{
        width: width,
        height: width/8,
        backgroundColor: '#e80083',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bannerText:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    }
});