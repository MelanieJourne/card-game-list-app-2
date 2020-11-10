import * as React from 'react';
import { Text, View, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from "react-redux";
// Assets import
import games from '../../assets/data/games';
import { colors } from '../../assets/theme/colors';
// Data import
import CardGame from '../../class/CardGame';
// Style import
import { styles } from './ListScreenStyle';
// Component import
import CardGameCell from '../components/CardGameCell';
// Function import
import { addFavorite, removeFavorite } from '../../redux/actions';

export default function ListScreen() {

  const favList = useSelector(state => state.favorite);
  const dispatch = useDispatch();

  const renderItem = ({ item }: { item: CardGame }) => (
    <CardGameCell item={item} isFavorite={isFavorite(item)} onAccessoryPress={() => onFavoritePress(item)}/>
  );

  const isFavorite = (item:CardGame) : Boolean => {
    let value = false;
    favList.forEach( (element:CardGame) => {
      if(element.id === item.id) {
        value = true;
      }
    });
    return value;
  }

  const onFavoritePress = (item:CardGame) => {
    if(isFavorite(item)) {
      dispatch(removeFavorite(item))
    }
    else {
      dispatch(addFavorite(item))
    }
  }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LinearGradient 
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={[colors.blue_gradient, colors.purple_gradient]} 
          style={styles.gradient}>
          <FlatList<CardGame>
            data={games}
            renderItem = {renderItem}
            keyExtractor={(item, index) => index}
          />
        </LinearGradient>
      </View>
    );
}

