import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderCabecera from '../../components/header';


const Home = () => {
    return (
        <View style={styles.container}>
            <HeaderCabecera />
        </View>
    );
};
const styles = StyleSheet.create({ 
    container: {
        // flex: 1,
        paddingHorizontal: 16
    }

});

export default Home;