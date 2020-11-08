import * as React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SwitchSelector from "react-native-switch-selector";

import { colors } from '../../assets/theme/colors';
import { styles } from './FavoriteScreenStyles';

const options = [
    { label: "Favoritee", value: "1" },
    { label: "My games", value: "2" },
  ];

export default function FavoriteScreen() {

    const onSwitch = (value:String) => {
        console.log(value);
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
        </LinearGradient>
      </View>
    );
}