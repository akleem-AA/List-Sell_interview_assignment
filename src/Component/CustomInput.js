import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'

const CustomInput = ({
    value,
    onChangeText
}) => {
    const url = "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png";
    return (
        <View style={{ flexDirection: 'row', borderWidth: 1, borderRadius: 10, }}>
            <View style={styles.searchIcon}>
                <Image source={{ uri: url }} style={{ width: 22, height: 22 }} resizeMode='cover' />
            </View>
            <TextInput
                placeholder='Search...'
                value={value}
                onChangeText={onChangeText}
                style={styles.inputStyle}
                autoFocus ={true}
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    inputStyle: {
        padding: 10,
        width: '100%',
        borderRadius: 10,
        fontSize: 18
    },
    searchIcon: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
    }
})