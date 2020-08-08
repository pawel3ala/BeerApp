import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { Card } from 'react-native-elements'

type listItemProps = {
    name: string,
    image_url: string,
    description: string
}

export default function ListItem({ name, image_url, description }: listItemProps) {
    return (
        <View>
            <Card
                title={name}
                image={{ uri: image_url }}
            >
                <Text style={{ marginBottom: 10 }}>
                    {description}
                </Text>
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
