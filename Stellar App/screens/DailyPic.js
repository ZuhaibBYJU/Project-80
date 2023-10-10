import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';


export default class IssLocationScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            DailyPic: {},
        };
    }

    componentDidMount() {
        this.getDailyPic
     }
    
     getMeteors = () => {
        axios
            .get("https://api.nasa.gov/neo/rest/v1/feed?api_key=mKnJHkPFBIl69U52DZSgtraqj08R09wdEK7SewgI")
            .then(response => {
                this.setState({ apod: response.data })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }
     
    render() {

          

        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Daily Pictures Screen</Text>
            </View>
        )
    }
}
