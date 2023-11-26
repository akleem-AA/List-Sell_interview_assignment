import { StyleSheet, Text, View, Linking } from 'react-native'
import React from 'react'
import CustomCard from '../Component/CustomCard'
import CustomButton from '../Component/CustomButton'

const ProductView = (props) => {
  console.log('props', props)
  const data = props.route.params.data
  const handleClick = () => {
    Linking.openURL(data.maps.googleMaps)
  }
  return (
    <View style={styles.container}>
      <View style={{ minWidth: 200 }}>
        <CustomCard data={data} />
        <CustomButton
          onPress={() => handleClick()}
          name={data.name.common}
          maxWidth={190} />
      </View>
      <Text>Click to open map </Text>
      <View style={{ margin: 10, }}>
        <Text style={styles.text}>{data.name.official}</Text>
      </View>
    </View>
  )
}

export default ProductView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    fontStyle: "italic"
  }
})