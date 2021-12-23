import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements';
import BouncyChekbox from 'react-native-bouncy-checkbox';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


export default function Menu({ restaurantname, hideCheckbox, foods, marginLeft }) {

    const dispatch = useDispatch()
    const selectItem = (item, checkboxValue) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                ...item,
                restaurantName: restaurantname,
                checkboxValue: checkboxValue,
            }
        })
    }


    const cartitems = useSelector(state => state.cartReducer.selectedItems.items)
    const isFoodInCart = (food, cartItems) =>
        Boolean(cartItems.find((item) => item.title === food.title))
    return (
        <ScrollView>
            {
                foods.map((el, index) => (
                    <View key={index} >
                        <View style={styles.menuItemStyle}>
                            {!hideCheckbox &&
                                <BouncyChekbox
                                    iconStyle={{ borderColor: "lighgray", borderRadius: 0 }}
                                    fillColor="green"
                                    isChecked={isFoodInCart(el, cartitems)}
                                    onPress={(checkboxValue) => selectItem(el, checkboxValue)}
                                />}
                            <Foodinfo food={el} />
                            <Foodimage food={el} marginLeft={marginLeft ? marginLeft : 0} />
                        </View>
                        <Divider width={0.5} orientation="vertical" style={{ marginHorizontal: 30 }} />
                    </View>
                ))
            }
        </ScrollView>
    )
}

const Foodinfo = (props) => (
    <View style={{ width: 200, justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description} </Text>
        <Text>{props.food.price}</Text>
    </View>
)

const Foodimage = ({ marginLeft, ...props }) => (
    <View>
        <Image
            source={{ uri: props.food.image }}
            style={{
                width: 100,
                height: 100,
                borderRadius: 8,
                marginLeft: marginLeft
            }}
        />
    </View>
)
const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        margin: 20,
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    },
});