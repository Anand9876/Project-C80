import axios from 'axios';
import React,{Component} from 'react';
import { Alert, ImageBackground, Text,View,StyleSheet, TouchableOpacity, Linking ,Image, Touchable} from 'react-native';

export default class DailyPicScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            apod:{}
        }
    }
    getapod=()=>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=Yqgj7zeZM8itvPBYLJn4A3HXAr0xEPK3iaRZZsyn').then(response=>{
            this.setState({apod:response.data})
        }).catch(error=>{
            Alert.alert('error.message')
        })
    }
    componentDidMount(){
        this.getapod()
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ImageBackground style={styles.backgroundImage} source={require('../assets/stars.gif')}>
                    <Text style={styles.routeText}>Astronomy Picture Of The Day</Text>
                    <Text style={styles.titleText}>{this.state.apod.title}</Text>
                    <TouchableOpacity style={styles.listContainer} onPress={()=>
                        Linking.openURL(this.state.apod.url).catch(error=>{
                            console.error("Couldn't load page",error)
                        })
            }>
<View style={styles.iconConatiner} >
    <Image source={require('../assets/play-video.png')} style={{width:50,height:50}} />
</View>
                    </TouchableOpacity>
                    <Text style={styles.explainationText}>{this.state.apod.explanation}</Text>
                    <TouchableOpacity style={styles.routeCard} onPress={()=>{this.props.navigation.navigate('Home')}}>
                    <Text style={styles.routeText1}>Get Back To Home</Text>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
    },
    routeText:{
        fontSize:35,
        fontWeight:'bold',
        color:'orange',
        marginTop:75,
        justifyContent:'center',
        alignItems:'center',
        fontStyle:'italic',
        textDecorationLine:'underline'
    },
    titleText:{
        backgroundColor:'black',
        color:'white',
        fontSize:25,
        marginLeft:150,
        marginRight:150,
        borderColor:'orange',
        borderRadius:200,
        borderWidth:10,
        width:200,
        height:200,
        paddingTop:50,
        paddingLeft:10,
        fontStyle:'italic',
        marginTop:40,
        fontWeight:'bold'

    },
    listContainer:{
        backgroundColor:'black',
        fontSize:20,
        fontStyle:'italic',
        width:500,
        height:250,
        borderColor:'orange',
        borderWidth:5,
        borderRadius:20,
        marginTop:40
    },
    iconConatiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    explainationText:{
        backgroundColor:'black',
        color:'white',
       justifyContent:'center',
       alignItems:'center',
       fontSize:20,
       fontStyle:'italic',
       fontWeight:'bold',
       flex:1,
       width:500,
       height:500,
       marginTop:40,
       borderColor:'orange',
        borderWidth:5,
        borderRadius:20,
        marginTop:40
    },
    routeCard:{
        width:250,
        height:75,
        marginLeft:120,
        marginRight:50,
        marginTop:50,
        borderRadius:50,
        backgroundColor:'orange',
        borderWidth:2
    },
    routeText1:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        marginTop:20,
        paddingLeft:5,
        marginLeft:40,
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:100,
        fontStyle:'italic'
    },
})