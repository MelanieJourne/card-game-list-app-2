import { colors } from '../../assets/theme/colors';

export const styles = {
    container: {
        flex:1,
    },
    gradient:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems:'stretch',
    },
    viewToogle: {
        height:70,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    viewEmptyContent:{
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:30,
        marginRight:30,
        marginTop:30,
        marginBottom:30,
        borderRadius:30,
        flex:1,
    },
    toggle: {
        width:'80%',
    },
    textTitle : {
        fontSize:18,
        marginTop:20,
        width:'100%',
        marginLeft:20,
        marginRight:20,
        textAlign: 'center',
        color: colors.purple_dark,
        fontWeight:'bold',
    },
    textDescription : {
        fontSize:18,
        marginLeft:20,
        marginRight:20,
        marginTop:20,
        textAlign: 'center',
        color:'black',
    },
    btnLarge: {
        width:'60%',
        height:30,
        backgroundColor: colors.purple_dark,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:25,
        marginTop:20,
    },
    textBtn: {
        color:'white',
        fontSize:16,
    }
}