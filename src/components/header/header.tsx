import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

const HeaderCabecera = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.title}>Explore</Text>
            </View>
            <View style={styles.rigthContainer}>
                <Image style={styles.imageIcon} source={require('../../assets/img0.jpg')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignContent: "center",
    },
    leftContainer: {
        flex: 1,
        alignItems: "flex-start"
    },
    rigthContainer: {
        flex: 1,
        alignItems: "flex-end"
    },
    title: {
        fontSize: 20,
        color: '#FFF'
    },
    imageIcon: {
        width: 60,  
        height: 60,
        borderRadius: 50
    }
});
export default HeaderCabecera;