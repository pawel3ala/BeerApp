import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Button, Input } from 'react-native-elements'
import { useState } from 'react';

export default function TabTwoScreen(props: any) {
  const { navigation } = props

  const [abv_min, setAbv_min] = useState<String | null>(null)
  const [abv_max, setAbv_max] = useState<String | null>(null)
  const [ibu_min, setIbu_min] = useState<String | null>(null)
  const [ibu_max, setIbu_max] = useState<String | null>(null)

  return (
    <View style={styles.container}>
      <ScrollView>
        <Button
          title='Apply filter'
          onPress={() => { navigation.navigate('TabOneScreen') }}
        />
        <Button
          title='Clear all filters'
          onPress={() => {
            setAbv_min(null)
            setAbv_max(null)
            setIbu_min(null)
            setIbu_max(null)
            navigation.navigate('TabOneScreen')
          }}

        />
        <Button
          title='poka'
          onPress={() => { console.log(abv_min, abv_max, ibu_min, ibu_max) }}
        />
        <Input placeholder='ABV min' value={abv_min?.toString()} onChangeText={value => setAbv_min(value)} />
        <Input placeholder='ABV max' value={abv_max?.toString()} onChangeText={value => setAbv_max(value)} />
        <Input placeholder='IBU min' value={ibu_min?.toString()} onChangeText={value => setIbu_min(value)} />
        <Input placeholder='IBU max' value={ibu_max?.toString()} onChangeText={value => setIbu_max(value)} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
