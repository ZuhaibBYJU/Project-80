import React, { Component } from 'react';
import {webView} from `react-native-webview`
import { Text, View, TextInput } from 'react-native';



export default class StarMapScreen extends Component {


    render() {
    
    
             
          <View>
        <WebView>
         scalesPageToFit={true}
         source={{ uri: path}}
         style={{ marginTop: 20, MarginBottom: 20,}}
        </WebView>
        <TextInput
            style={{ height:40, broderColor: `grey`, borderWidth: 1,}}
            placeholder="Enter your Latitude"
            placeholderTextColor="white"
            onChangeText={(text)=>{
              this.setState({
                latitude: text
              })
            }}
         />
          <TextInput
            style={{ height:30, broderColor: `grey`, borderWidth: 1,}}
            placeholder="Enter your Longitude"
            placeholderTextColor="white"
            onChangeText={(text)=>{
              this.setState({
                longitude: text
              })
            }}
         />
        </View>

        const { longitude,latitude } = this.state;
        const path = `https://virtualsky.lco.global/embed/index.html
                      ?longitude=77.102493&latitude=28.704060
                      &constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "pruple",
                }}>
                <Text>Star Map Screen</Text>
            </View>
        )
    }
}