import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    img: {
        height: width / 3,
        width: width / 3,
        borderRadius: 100,
    },
    InfoView: {
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 10
    },
    SubInfoView: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgView:{
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    All_Info:{
        flexDirection: 'row',
    },
    TextPoint:{
        marginTop: 10,
        fontWeight: 'bold',
        color: '#e80083',
        fontSize: 20,
    },
    AllPointView:{
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: width / 2,
    },
    btn:{
        width: width,
        borderBottomWidth: 1,
    },
    Textbtn:{
        color: 'gray',
        fontSize: 20,
        margin: 10
    },
    otherText:{
        fontSize: 18,
        color: 'gray',
    }
});