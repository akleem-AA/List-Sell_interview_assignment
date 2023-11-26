import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'

const CustomCard = ({ data }) => {

    return (
        <>
            <View style={styles.cardStyle}>
                    <Image source={{ uri: data?.flags?.png }} style={{ width: '100%', height: '100%',borderRadius:20 }} resizeMode='contain' />
            </View>

        </>

    )
}

export default CustomCard

const styles = StyleSheet.create({
    cardStyle: {
        // borderWidth: 1,
        height: 300,
        borderRadius: 20,
        width: 200,
        // backgroundColor:'red'
        elevation:10,
        shadowColor:'gray',
        shadowOpacity:1,
        marginBottom:10
    },


})