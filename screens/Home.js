import React,{Component} from 'react';
import {Text,View,StyleSheet,StatusBar,SafeAreaView,Platform,TouchableOpacity,ImageBackground,Image} from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.conatiner}>
                <SafeAreaView style={styles.androidSafeArea}></SafeAreaView>
                <ImageBackground source={require('../assets/space.gif')} style={styles.backgroundimage}>
                    <Image source={require('../assets/main-icon.png')} style={{width:200,height:200,justifyContent:'center',alignItems:'center',marginLeft:80,marginBottom:30,borderRadius:200,borderWidth:10,borderColor:'orange'}}></Image>
                <View style={styles.titlebar}>
                <Text style={styles.titletext}>Stellar</Text>
                <Text style={{color:'white',fontSize:40,marginBottom:20,fontStyle:'italic',fontWeight:'bold'}}>App</Text>
                </View>
                <TouchableOpacity style={styles.routeCard} onPress={()=>{this.props.navigation.navigate('SpaceCraft')}}>
                    <Text style={styles.routeText}>Space Craft</Text>
                    <Image source={require('../assets/space_crafts.png')} style={styles.iconImage}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard} onPress={()=>{this.props.navigation.navigate('StarMap')}}>
                    <Text style={styles.routeText}>Star Maps</Text>
                    <Image source={require('../assets/star_map.png')} style={styles.iconImage}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard} onPress={()=>{this.props.navigation.navigate('DailyPictures')}}>
                    <Text style={styles.routeText}>Daily Pictures</Text>
                    <Image source={require('../assets/daily_pictures.png')} style={styles.iconImage}></Image>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }

}
const styles=StyleSheet.create({
    conatiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    titletext:{
        color:'white',
        fontSize:40,
        fontStyle:'italic',
        fontWeight:'bold',
        marginTop:20
  
    },
    androidSafeArea:{
        marginTop:Platform.OS==='android'?StatusBar.currentHeight:0,
    },
    titlebar:{
        flex:0.15,
        justifyContent:'center',
        alignItems:'center'
    },
    routeCard:{
        width:250,
        height:75,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:50,
        backgroundColor:'orange',
        borderWidth:2
    },
    routeText:{
        fontSize:25,
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
    backgroundimage:{
        flex:1,
        resizeMode:'cover',

    },
    iconImage:{
        position:'absolute',
        height:70,
        width:70,
        resizeMode:'contain',
        right:-10,
        top:-30,

    }
})