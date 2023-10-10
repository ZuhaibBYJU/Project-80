import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

export default class HomeScreen extends Component {

    getData = () => {
        axios.get("https://api.wheretheiss.at/v1/satellites/25544")
            .then(response => {


                this.setState({ aircrafts: response.data.results })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }


    render() {
        return (
         <SafeAreaView>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
<View styles={{flex:0.25}}>
<Text>Space crafts</Text>
</View>
<View styles={{flex:0.75}}>
<FlatList
 keyExtractor={this.keyExtractor}
 data={this.state.aircrafts}
 renderItem={this.renderItem}
/>
</View>
</View>

            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Space Craft Screen</Text>
            </View>
             </SafeAreaView>
            
            

            
        
        )
    }
}