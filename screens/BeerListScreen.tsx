import * as React from 'react';
import { StyleSheet, FlatList, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { fetchAllBeers, fetchMoreBeers } from '../store/reducers/beers'
import { fetchSingleBeer } from '../store/reducers/selectedBeer'
import { fetchSimilarBeers } from '../store/reducers/silimarBeers'
import { useDispatch, useStore } from 'react-redux';
import ListItem from '../components/ListItem';
import { useState, useEffect } from 'react';
import { BeerItem } from '../types'
import Modal from 'react-native-modal';
import { Button } from 'react-native-elements'

export default function TabOneScreen() {

  const [isVisible, setVisibility] = useState(false)
  const [page, setPage] = useState(1)
  const dispatch = useDispatch();
  const store = useStore()

  const selectedBeer: BeerItem = store.getState().selectedBeersReducer[0] // TODO: refactor this
  const similarBeers: BeerItem[] = store.getState().similarBeersReducer // TODO: refactor this
  const beers: BeerItem[] = store.getState().beers // TODO: refactor this

  useEffect(() => {
    if (page == 1) dispatch(fetchAllBeers());
    else dispatch(fetchMoreBeers(page));
  }, [page])

  const onPress = (item: any) => {
    Promise.all([dispatch(fetchSingleBeer(item.id))])
      .then(() => { 
        const selectedBeer: BeerItem = store.getState().selectedBeersReducer[0] // TODO: refactor this
        Promise.all([dispatch(fetchSimilarBeers(selectedBeer))]) 
      })
      .then(() => setVisibility(true)
      )
  }

  const renderItem = ({ item }: { item: BeerItem }) => {
    return <ListItem
      name={item.name}
      image_url={item.image_url}
      ibu={item.ibu}
      abv={item.abv}
      id={item.id}
      onPress={() => { onPress(item) }}
    />
  }

  const loadMoreBeers = () => {
    setPage(previousPage => previousPage + 1)
  }

  const popUpModal = (selectedBeer: BeerItem) => {
    return (
      <Modal isVisible={isVisible}>
        <View>
          <Text>{selectedBeer && selectedBeer.name}</Text>
          <Text>{selectedBeer && selectedBeer.description}</Text>
          <Text>{selectedBeer && selectedBeer.brewer_tips}</Text>
          <Text>{selectedBeer && selectedBeer.ibu}</Text>
          <Text>{selectedBeer && selectedBeer.abv}</Text>
          {selectedBeer && <Image style={{ width: '100%', height: 200 }} source={{ uri: selectedBeer.image_url }} />}
          <Button title="Click To Close" onPress={() => setVisibility(!isVisible)} />
          <Text>Similar beers: </Text>
          <Text>{similarBeers && similarBeers.map((beer: BeerItem) => beer.name)} </Text>
        </View>
      </Modal>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={beers}
        // extraData={page}
        renderItem={renderItem}
        keyExtractor={(item => item.id.toString())}
        onEndReachedThreshold={0.9}
        onEndReached={loadMoreBeers}
      />
      {popUpModal(selectedBeer)}
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
