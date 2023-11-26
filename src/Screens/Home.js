import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomInput from '../Component/CustomInput'
import CustomCard from '../Component/CustomCard'
import CustomButton from '../Component/CustomButton'

const Home = (props) => {

  const [inputValue, setInputValue] = useState('')
  const [loading, setLoadign] = useState(false)
  const [data, setData] = useState([])
  const [duplicateData, setDuplicateData] = useState([])
  const handleInput = (text) => {
    setInputValue(text);

    if (text !== '') {
      const filterData = duplicateData.filter((item) => item?.name?.common.toUpperCase().includes(text.toUpperCase()));

      if (filterData.length > 0) {
        setData(filterData);
      } else {
        setData([]);
      }
    } else {
      setData(duplicateData);
    }
  };
  useEffect(() => {

    fetchData();
  }, [])

  const handleCard = (item) => {
    props.navigation.navigate('View', { data: item })
  }

  const fetchData = async () => {
    setLoadign(true)
    try {
      let url = 'https://restcountries.com/v3.1/all';
      let res = await fetch(url);

      // Check if the response is successful (status code 200)
      if (!res.ok) {
        setLoadign(false)
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      // Parse the response as JSON
      let data = await res.json();
      setData(data);
      setDuplicateData(data)
      console.log("API response:", data);
      setLoadign(false)
    } catch (error) {
      setLoadign(false)
      console.error("Error fetching data:", error);
    }
  };

  // Call the fetchData function
  const renderCardItem = ({ item }) => (
    <View style={{ margin: 5 }}>
      <CustomCard data={item} />
      <CustomButton name={item?.name?.common || 'not available'} onPress={() => handleCard(item)}
        maxWidth={190}
      />
    </View>
  );



  const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Emoji_u1f44b.svg/1200px-Emoji_u1f44b.svg.png';

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>

        {/* page heading view */}
        <View style={[styles.headingText, { flexDirection: 'row', alignItems: 'center', }]}>
          <Text style={styles.heading}>Hellow Everyone</Text>
          <Image source={{ uri: url }} style={{ width: 22, height: 22 }} resizeMode='contain' />
        </View>

        {/* //page search box view */}
        <View style={styles.inputView}>
          <CustomInput
            onChangeText={(text) => handleInput(text)}
            value={inputValue}
          />
          <Text style={[styles.heading, { fontSize: 16, fontWeight: 'bold', padding: 5 }]}>Top picks for you</Text>
        </View>

        {/* render APi list */}
        <View style={{ margin: 10, width: '100%', alignSelf: 'center' }}>
          <FlatList
            data={data}
            renderItem={renderCardItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', width: 350, height: 200 }}>
                <Text>Data not found...</Text>
              </View>
            )}
          />
        </View>

        {/* //refresh button */}
        <View style={{ width: '80%', alignSelf: 'center', marginTop: 10 }}>
          <CustomButton
            name="Refresh Data"
            backgroundColor='black'
            color="white"
            imageURL={false}
            onPress={() => {
              setLoadign(true)
              setTimeout(() => {
                setLoadign(false)
              }, 1000)
            }}
          />
        </View>
      </View>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems:'center'
  },
  headingText: {
    margin: 5,

  },
  heading: {
    fontSize: 22,
    fontWeight: '400',
    padding: 10
  },
  inputView: {
    margin: 10,
  },
  inputStyle: {
    padding: 10,
    borderWidth: 1,
    width: '100%',
    borderRadius: 10,
    fontSize: 18
  },

})