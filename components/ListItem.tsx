import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { Card, Button } from 'react-native-elements'

type listItemProps = {
    name: string,
    image_url: string,
    ibu: number,
    abv: number
}

export default function ListItem({ name, image_url, ibu, abv }: listItemProps) {
    return (
        <View>
            <Card
                title={name}
                image={{ uri: image_url }}
            >
                <Text style={{ marginBottom: 1 }}>{ibu}</Text>
                <Text style={{ marginBottom: 1 }}>{abv}</Text>
                <Button
                    title='Details'
                />

            </Card >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});
