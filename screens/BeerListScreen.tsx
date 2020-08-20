import * as React from 'react';
import { StyleSheet, FlatList, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { getBeers, clearBeers } from '../store/reducers/beers'
import { fetchSingleBeer } from '../store/reducers/selectedBeer'
import { fetchSimilarBeers } from '../store/reducers/silimarBeers'
import { useDispatch, useStore, useSelector } from 'react-redux';
import ListItem from '../components/ListItem';
import { useState, useEffect } from 'react';
import { BeerItem, FiltersConfigObject } from '../types'
import Modal from 'react-native-modal';
import { Button } from 'react-native-elements'
import { useFocusEffect } from '@react-navigation/native';

export default function BeerListScreen() {

  const [isVisible, setVisibility] = useState(false)
  const [page, setPage] = useState(1)
  const dispatch = useDispatch();

  const selectedBeer: BeerItem = useSelector(state => state.selectedBeer)
  const similarBeers: BeerItem[] = useSelector(state => state.similarBeers)
  const beers: BeerItem = useSelector(state => state.beers)

  useEffect(() => {
    if (page !== 1) dispatch(getBeers(page))
  }, [page])

  useFocusEffect(React.useCallback(() => {
    dispatch(getBeers(page))
    return () => {
      dispatch(clearBeers())
      setPage(1)
    }
  }, []));

  const handleOnPress = (item: any) => {
    Promise.resolve(dispatch(fetchSingleBeer(item.id)))
      .then(({ beer }) => Promise.resolve(dispatch(fetchSimilarBeers(beer))))
      .then(() => setVisibility(previousVisibility => !previousVisibility)
      )
  }

  const renderItem = ({ item }: { item: BeerItem }) => {

    const { name, image_url, ibu, abv, id } = item
    return <ListItem
      name={name}
      image_url={image_url}
      ibu={ibu}
      abv={abv}
      id={id}
      onPress={() => { handleOnPress(item) }}
    />
  }

  const loadMoreBeers = () => {
    setPage(previousPage => previousPage + 1)
  }

  const popUpModal = (selectedBeer: BeerItem) => {
    return (
      <Modal isVisible={isVisible}>
        <View>
          {
            selectedBeer && (
              <>
                <Text>{selectedBeer.name}</Text>
                <Text>{selectedBeer.description}</Text>
                <Text>{selectedBeer.brewer_tips}</Text>
                <Text>{selectedBeer.ibu}</Text>
                <Text>{selectedBeer.abv}</Text>
                <Image style={{ width: '100%', height: 200 }} source={{ uri: selectedBeer.image_url }} />
                <Button title="Close" onPress={() => setVisibility(previousVisibility => !previousVisibility)} />
                <Text>Similar beers: </Text>
                <Text>{similarBeers.map((beer: BeerItem) => beer.name)} </Text>
              </>
            )
          }
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
