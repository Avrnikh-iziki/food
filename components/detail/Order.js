import React from 'react'
import { View, Text } from 'react-native'

export default function Order({ item }) {
    const { title, price } = item;
    return (
        <View style={{
            flexDirection:"row",
            justifyContent:"space-between",
            padding:20,
            borderBottomWidth:1,
            borderBottomColor:"#999"
        }}>
            <Text style={{ fontWeight: "600", fontSize: 14 }}>{title}</Text>
            <Text style={{ opacity: .7, fontSize: 14 }}>{price}</Text>
        </View>
    )
}
