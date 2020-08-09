import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from '../components/Themed';
import { fetchAllBeers, fetchMoreBeers } from '../store/reducers/beers'
import { useDispatch } from 'react-redux';
import {store} from '../store/configureStore'

import ListItem from '../components/ListItem';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BeerItem } from '../types'
import Modal from 'react-native-modal';
import { Button } from 'react-native-elements'

export default function TabOneScreen() {

  const [isVisible, setVisibility] = useState(false)
  const [page, setPage] = useState(1)
  const [beer, setBeer] = useState<BeerItem | null>(null)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(page)
    if (page == 1) dispatch(fetchAllBeers());
    else dispatch(fetchMoreBeers(page));
    console.log(store.getState().beers.length)
  }, [page])

  const onPress = (item: any) => {
    axios.get<BeerItem>(`https://api.punkapi.com/v2/beers/1`)
    .then(response => setBeer(response.data))
    .then(()=> setVisibility(true))
    .catch(err => console.error(err))
  }

  const renderItem = ({ item }: { item: BeerItem }) => {
    return <ListItem
      name={item.name}
      image_url={item.image_url}
      ibu={item.ibu}
      abv={item.abv}
      id={item.id}
      onPress={(item: any) => onPress(item)}
    />
  }

  const loadMoreBeers = () => {
    setPage(previousPage => previousPage + 1)
  }

  return (
    <View style={styles.container}>
              <Button
          title='poka'
          onPress={() => { console.log(store.getState().filtersReducer) }}
        />
      <FlatList
        data={store.getState().beers}
        // extraData={page}
        renderItem={renderItem}
        keyExtractor={(item => item.id.toString())}
        onEndReachedThreshold={0.9}
        onEndReached={loadMoreBeers}
      />
      <Modal isVisible={isVisible}>
        <View>
          {beer && <Text>{beer.name}</Text>}
          <Button title="Click To Close Modal" onPress={() => setVisibility(!isVisible)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
