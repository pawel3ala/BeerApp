import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from '../components/Themed';

import ListItem from '../components/ListItem';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BeerItem } from '../types'
import Modal from 'react-native-modal';
import { Button } from 'react-native-elements'

export default function TabOneScreen() {

  const [isVisible, setVisibility] = useState(false)
  const [beer, setBeer] = useState<BeerItem | null>(null)
  const [beerList, setBeerList] = useState<BeerItem[]>([])
  useEffect(() => {
    const fetchBeers = () => {
      axios.get<BeerItem[]>('https://api.punkapi.com/v2/beers').then(response => setBeerList(response.data))
    }
    fetchBeers()
  }, [])

  const onPress = (item: any) => {
    axios.get<BeerItem>(`https://api.punkapi.com/v2/beers/1`)
    .then(response => setBeer(response.data))
    .then(()=> setVisibility(true))
    .then(()=>console.log(beer))
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

  return (
    <View style={styles.container}>
      <FlatList
        data={beerList}
        renderItem={renderItem}
        keyExtractor={(item => item.id.toString())}
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
