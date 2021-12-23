import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
const items = [
    {
        image: require("../../assets/images/shopping-bag.png"),
        text: "Pick-up",
    },
    {
        image: require("../../assets/images/soft-drink.png"),
        text: "Soft Drinks",
    },
    {
        image: require("../../assets/images/bread.png"),
        text: "Bakery Items",
    },
    {
        image: require("../../assets/images/fast-food.png"),
        text: "Fast Foods",
    },
    {
        image: require("../../assets/images/deals.png"),
        text: "Deals",
    },
    {
        image: require("../../assets/images/coffee.png"),
        text: "Coffee & Tea",
    },
    {
        image: require("../../assets/images/desserts.png"),
        text: "Desserts",
    },
];
export default function Categories() {
    return (
        <View style={{
            backgroundColor:"white",
            flex:1,
            marginTop:5,
            paddingVertical:10,
           
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}  >
                {items.map((item, index) => (
                    <View style={{ alignItems: "center", marginRight: 20 , marginLeft:index == 0 ? 20 : 0 }} key={index}>
                        <Image source={item.image}
                            style={{
                                width: 50,
                                height: 40,
                                resizeMode: "contain"
                            }} />
                        <Text style={{ fontSize: 13, fontWeight: '900' }}>{item.text}</Text>
                    </View>
                ))}

            </ScrollView>
        </View>
    )
}
