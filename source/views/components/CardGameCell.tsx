import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import CardGame from '../../class/CardGame';
import { GameTypeEnum } from '../../class/GameTypeEnum';

import { colors } from '../../assets/theme/colors';


const CardGameCell = ({ item }: { item: CardGame }) => (
    <View style={styles.container}>
        <View style={styles.viewIcon}>
            <Image
                style={styles.image}
                source={item.gameType == GameTypeEnum.SOLO ? require('../../assets/images/cards_solo.png') : require('../../assets/images/cards_team.png') }
            />
        </View>
        <View style={styles.viewText}>
            <Text style={styles.text}>{item.title}</Text>
        </View>
        <View style={styles.viewAccessory}>
            <Icon name={'md-star-outline'} size={30} color={colors.purple_dark} />
        </View>
    </View>
);

export default CardGameCell;

const styles = StyleSheet.create({
    container: {
      height:50,
      marginTop:20,
      marginLeft:20,
      marginRight:20,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems:'stretch',
      borderRadius:25,
    },
    viewIcon : {
        width:50,
        justifyContent: 'center',
        alignItems:'center',
    },
    viewText : {
        flex:1,
        marginLeft:10,
        marginRight:10,
        justifyContent: 'center',
    },
    viewAccessory : {
        width:50,
        justifyContent: 'center',
        alignItems:'center',
        marginRight:5,
    },
    image: {
        marginLeft:0,
        width:45,
        height:45,
        padding:5,
        borderRadius:20,
        backgroundColor: colors.orange_peach
    },
    text: {
        fontWeight:'bold',
        fontSize:18,
    },
});