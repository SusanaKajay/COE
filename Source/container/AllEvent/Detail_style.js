import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const {height,width} = Dimensions.get('window');


export default StyleSheet.create({
    Detail_View:{
        backgroundColor: 'white',
    },
    NameView:{
        
    },
    NameText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#e80083',
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
    },
    createByView:{
        backgroundColor: 'white'
    },
    DescripView:{
        borderBottomColor: 'gray',
        borderTopWidth: 2,
        borderBottomWidth: 2,
    },
    EventTypeView:{
        flex: 1,
        flexDirection: 'row',
    },
    TypeText1:{
        margin: 10,
        color: '#e80083',
        fontSize: 18,
    },
    normalText:{
        margin: 10,
        color: 'gray',
        fontSize: 18,
        marginRight: 10,
    },
    eventToPinView:{
        flex: 1,
        flexDirection: 'column'
    },
    row:{
        flex:0.5,
        borderBottomColor: 'gray',
        flexDirection: 'row'
    },
    icon:{
        marginTop:10,
        marginRight:5,
        marginLeft:10,
        marginBottom: 10,
        height: width/15,
        width: width/15,
    }
});