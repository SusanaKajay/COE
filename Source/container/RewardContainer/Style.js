import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    AllPage: {
        backgroundColor: 'white',
    },
    Header: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height / 15,
        backgroundColor: '#e80083',
    },
    imageView:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        height: height/3,
        width: width/2.2,
    },
    DetaiilView:{
        borderColor: 'gray',
        borderTopWidth: 2,
        flexDirection: 'column'
    },
    NameOfDetailView:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    SupDetailView:{
        flexDirection: 'row',
        flex: 1,
    },
    SupView:{
        flex: 0.5,
        flexDirection: 'row',
        alignItems:'center'
    },
    icon:{
        width: width/15,
        height: width/15,
        margin: 5,
        marginLeft: 10,
    },
    nameText:{
        color: '#e80083',
        fontSize: 20,
        fontWeight: 'bold',
    },
    DetailText:{
        fontSize: 15,
        fontWeight: 'normal',
    },
    ListBox:{
        borderWidth: 2,
        borderColor: 'gray',
        margin: 7,
    }

});