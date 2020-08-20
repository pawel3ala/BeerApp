import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View } from '../components/Themed';
import { Button, Input } from 'react-native-elements'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearFilters, setFilters } from '../store/reducers/filters'
import { FiltersConfigObject } from '../types'
import { useNavigation } from '@react-navigation/native';

export default function TabTwoScreen() {

  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const [abv_min, setAbv_min] = useState<String | null>(null)
  const [abv_max, setAbv_max] = useState<String | null>(null)
  const [ibu_min, setIbu_min] = useState<String | null>(null)
  const [ibu_max, setIbu_max] = useState<String | null>(null)


  const handleApplyFilterOnPress = () => {
    const filterObj: FiltersConfigObject = {
      abv_min: Number(abv_min),
      abv_max: Number(abv_max),
      ibu_min: Number(ibu_min),
      ibu_max: Number(ibu_max),
    }
    Promise.resolve(dispatch(setFilters(filterObj)))
    .then(()=> navigate('BeerListScreen'))
  }

  const handleClearFiltersOnPress = () => {
    setAbv_min(null)
    setAbv_max(null)
    setIbu_min(null)
    setIbu_max(null)

    Promise.resolve(dispatch(clearFilters()))
    .then(()=> navigate('BeerListScreen')) 
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Button
          title='Apply filter'
          onPress={handleApplyFilterOnPress}
        />
        <Button
          title='Clear all filters'
          onPress={handleClearFiltersOnPress}
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
  }
});
