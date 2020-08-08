import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from '../components/Themed';

import ListItem from '../components/ListItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function TabOneScreen() {

  type Item = {
    name: string,
    image_url: string,
    description: string,
    id: string
  }

  const renderItem = ({ item }: { item: Item }) => {
    return <ListItem
      name={item.name}
      image_url={item.image_url}
      description={item.description}
    />
  }

  const [beerList, setBeerList] = useState<Item[]>([])

  useEffect(() => {
    const fetchBeers = () => {
      axios.get<Item[]>('https://api.punkapi.com/v2/beers').then(response => setBeerList(response.data))
    }
    fetchBeers()

  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={beerList}
        renderItem={renderItem}
        keyExtractor={(item=> item.id.toString())}
      />
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
