import * as React from 'react';
import { Text,TextInput,View,StyleSheet } from 'react-native';
import {WebView} from 'react-native-webview';

export default class StarMapScreen extends React.Component{
    render(){
        return(
            <WebView style={styles.container} source={{uri:'https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'}} 
scalesPageToFit={true}>
</WebView>

    );
    }      
}
const styles=StyleSheet.create({
container:{
flex: 1,
    marginTop: 20,
    marginBottom:20
}
})

