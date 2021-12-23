import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet, TouchableOpacityBase } from 'react-native'
import { useSelector } from 'react-redux'
import Order from './Order'
import firebase from '../../firebase'


export default function ViewCard({ restaurantname, navigation }) {
    const [modalVisible, setModalVisible] = useState(false)
    const [loding, selloding] = useState(false)

    const { items, restaurantName } = useSelector(state => state.cartReducer.selectedItems)
    const total = items
        .map(el => Number(el.price.replace('$', "")))
        .reduce((a, b) => a + b, 0)

    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });

    const addToFirebase = () => {
        selloding(true)
        const db = firebase.firestore();
        db.collection("orders")
            .add({
                items: items,
                restaurantname: restaurantname,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(() => {
                setTimeout(() => {
                    selloding(false)
                    navigation.navigate("OrderCompleted")
                })
            })
    }

    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.7)",
        },

        modalCheckoutContainer: {
            backgroundColor: "white",
            padding: 16,
            height: 500,
            borderWidth: 1,
        },

        restaurantName: {
            textAlign: "center",
            fontWeight: "600",
            fontSize: 18,
            marginBottom: 10,
        },

        subtotalContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
        },

        subtotalText: {
            textAlign: "left",
            fontWeight: "600",
            fontSize: 15,
            marginBottom: 10,
        },
    });

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantname}</Text>
                        {items.map((item, index) => <Order key={index} item={item} />)}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text>{totalUSD}</Text>
                        </View>
                        <View
                            style={{ flexDirection: "row", justifyContent: "center" }}
                        >
                            <TouchableOpacity
                                style={{
                                    marginTop: 20,
                                    padding: 11,
                                    backgroundColor: "black",
                                    alignItems: "center",
                                    borderRadius: 30,
                                    width: 300,
                                    position: "relative",

                                }}
                                onPress={() => {
                                    addToFirebase();
                                    setModalVisible(false);
                                }}
                            >
                                <Text style={{ color: "white", fontSize: 15 }}>Checkout</Text>
                                <Text
                                    style={{
                                        position: "absolute",
                                        right: 20,
                                        color: "white",
                                        fontSize: 13,
                                        top: 13
                                    }}
                                >{total && totalUSD}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    }
    return (
        <>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                {checkoutModalContent()}
            </Modal>
            {total !== 0 &&
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        position: "absolute",
                        width: "100%",
                        bottom: 130,
                        zIndex: 999,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                marginTop: 20,
                                backgroundColor: "black",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                                padding: 5,
                                paddingHorizontal: 15,
                                borderRadius: 30,
                                width: 300,
                                position: "relative",
                            }}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
                                View Cart
                            </Text>
                            <Text style={{ color: "white", fontSize: 20 }}>{totalUSD}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
            {loding &&
                <View style={{
                    backgroundColor: "black",
                    position: "absolute",
                    opacity: 0.6,
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                }}>
                    {/*
                      <LottieView
                        style={{ height: 200 }}
                        source={require("../../assets/animations/scanner.json")}
                        autoPlay
                        speed={3}
                    />
                    */}
                </View>

            }
        </>
    )
}
