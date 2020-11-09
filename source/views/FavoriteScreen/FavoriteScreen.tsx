import React, {useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SwitchSelector from "react-native-switch-selector";

import { colors } from '../../assets/theme/colors';
import { styles } from './FavoriteScreenStyles';
import { translate } from '../../assets/texts/Translate';

const options = [
    { label: translate('favorite'), value: "favorite" },
    { label: translate('my_games'), value: "mine" },
  ];

export default function FavoriteScreen({navigation}) {

    const [selectTab, setSelectedTab] = useState('favorite');

    const onSwitch = (value:string) => {
      setSelectedTab(value);
    }

    const onPress = () => {
      if(selectTab === 'favorite') {
        navigation.navigate('Liste')
      }
      else {
        //TODO
        console.log('On press no game')
      }
    }

    return (
      <View style={styles.container}>
        <LinearGradient 
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[colors.blue_gradient, colors.purple_gradient]} 
            style={styles.gradient}>
            <View style={styles.viewToogle}>
                <SwitchSelector
                    options={options}
                    style={styles.toggle}
                    height={30}
                    initial={0}
                    onPress={onSwitch}
                    buttonColor={colors.purple_dark}
                />
            </View>
            <View style={styles.viewEmptyContent}>
              <Text style={styles.textTitle}>{selectTab === 'favorite' ? translate('fav_none_title') : translate('mine_none_title') }</Text>
              <Text style={styles.textDescription}>{selectTab === 'favorite' ? translate('fav_none_desc') : translate('mine_none_desc')}</Text>
              <TouchableOpacity
                style={styles.btnLarge}
                onPress={onPress}
              >
              <Text style={styles.textBtn}>{selectTab === 'favorite' ? translate('browse_list') : translate('add')}</Text>
              </TouchableOpacity>
            </View>
        </LinearGradient>
      </View>
    );
}