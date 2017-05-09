import React, { Component } from 'react';
import { View, Text, Image } from "react-native";
import Card from './Card';
import Button from './Button'
const AlbumDetails = (props) => {
    return (
        <Card>
            <View >
                <Image
                    style={styles.images}
                    source={{ uri: props.album.avatar_url }}
                />
            </View>
            <View style={styles.ViewStyles}>
                <Text>{props.album.login}</Text>
            </View>
            <View >
                <Button onPress={()=> console.log(props.album.login)}/>
            </View>
        </Card>
    );
}
const styles = {
    images: {
        height: 50,
        width: 50,
        borderRadius: 15,
    },
    ViewStyles: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    
}
export default AlbumDetails;