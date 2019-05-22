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
        borderBottomWidth: 2,
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
    },
    textHome:{
        fontSize: 15,
        color: 'gray',
        fontWeight: 'normal',
    }
});