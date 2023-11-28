import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const CustomButton = ({
    name,
    color,
    backgroundColor,
    onPress,
    imageURL = true,
    maxWidth

}) => {
    const url = "https://static.vecteezy.com/system/resources/previews/000/552/683/non_2x/geo-location-pin-vector-icon.jpg"
    return (
        <TouchableOpacity onPress={onPress}
            style={[styles.buttonView,
            backgroundColor && { backgroundColor: backgroundColor },
            imageURL && { backgroundColor: 'white' },
            maxWidth && { maxWidth: maxWidth }
            ]}>
            {imageURL &&
                <View style={styles.imageView}>
                    <Image source={{ uri: url }} style={{ width: '100%', height: '100%' }} resizeMode='cover' />
                </View>
            }

            <Text numberOfLines={1} style={[styles.buttonText, color && { color: color }]}>{name}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonView: {
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 15,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonText: {
        padding: 10,
        textAlign: 'center'
    },
    imageView: {
        width: 22,
        height: 22,
        paddingLeft: 10
    },
})