import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import Buttom from '../components/home/Buttom'
import Categories from '../components/home/Categories'
import HeaderTab from '../components/home/HeaderTab'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import Search from '../components/home/Search'

//const YELP_API_KEY = "Ry4G5wd0D6HmQKIrik3UZmahupBe8vuKLcTGr2q41D4f-dRaXewtA1K1k_UfYNyTnqdTehwBu2Qjvh3lmiIidbeFDUpftQOKJ6sEIqIJju4ufTKWyZkaF8LYt8RkYXYx"

export default function Home({ navigation }) {
  const [activeTabe, setActiveTab] = useState("Delevry")
  const [restaurantData, setRestaurantData] = useState(localRestaurants)

  /*const getRestaurantsFromYelp = () => {
      const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego`;
  
      const apiOptions = {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
      };
  
      return fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then((json) =>
          setRestaurantData( json['businesses'])
        );
    };
  
    useEffect(() => {
      getRestaurantsFromYelp();
    }, []);*/

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1  }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTab activeTabe={activeTabe} setActiveTab={setActiveTab} />
        <Search />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <Buttom />
    </SafeAreaView>
  )
}
