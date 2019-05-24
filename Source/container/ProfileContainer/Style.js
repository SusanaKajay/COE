import {
    StyleSheet,
    Dimensions,
} from 'react-native';
import {HomeColor} from '../../themes/variables'
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    allPage:{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn:{
        borderColor: 'gray',
        borderBottomWidth: 2,
        height: width/10,
        width: width/1.05,
        marginBottom: 5,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    btnText: {
        color: 'gray',
        fontSize: 18,
        fontWeight: 'bold'
    },
    subMemberCard:{
        margin: 10,
        alignItems: 'center',
    },
    memberImg:{
        height: width/4,
        width: width/4,
        borderRadius: 10
    },
    memberContentView:{
        flexDirection: 'column',
    },
    memberText1:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    memberText2:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'normal',
    },
    subMemberCard2:{
        margin: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
    }
});