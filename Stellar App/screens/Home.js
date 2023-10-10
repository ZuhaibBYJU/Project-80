import React, { Component } from 'react';
import { Text,
         View,
         StyleSheet,
         SafeAreaView,
         TouchableOpacity,
         Platform,
         StatusBar,
         ImageBackground,
         Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return(
            
            <SafeAreaView styles={styles.droidAreaSafe}>
                 <ImageBackground source ={require("../assets/space.gif")} style={styles.backgroundImage}></ImageBackground>
                 <View style={styles.titleBar}>
                <Text style={styles.titleText}>ISS Tracker App</Text>
                </View>
                </SafeAreaView>
              
        )

        }
        }