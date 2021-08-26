import React,{Component} from 'react';
import {View,Text, FlatList, Image, ImageBackground} from 'react-native';
import axios from 'axios';

export default class SpaceCraftScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            aircrafts:{}
        }
    }
    getData=()=>{
        axios.get('https://ll.thespacedevs.com/2.0.0/config/spacecraft/').then(response=>{
            this.setState({aircrafts:response.data.results})
        }).catch(error=>{
            console.log('error.message')
        })
    }
    renderItem=({item})=>{
        return(
            <View style={{borderWidth:1,justifyContent:'center',alignItems:'center',marginBottom:10,elevation:10,backgroundColor:'white'}}>
                <Image source={{uri:item.agency.image_url}}  style={{width:"100%",height:200,marginTop:15,marginBottom:15,marginRight:10}} />
                <Text style={{fontWeight:'bold',fontSize:20}}>{item.name}</Text>
                <Text style={{color:'#696969'}}>{item.agency.name}</Text>
                <Text style={{fontStyle:'italic',fontSize:20,fontWeight:'bold'}}>DESCRIPTION</Text>
                <Text style={{color:'#A9A9A9',marginLeft:10,marginRight:10}}>{item.agency.description}</Text>
            </View>
        )
    }
    keyExtractor=(index)=>{
        index.toString();

    }
    componentDidMount(){
        this.getData();
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ImageBackground style={{flex:1,resizeMode:'cover'}} source={require('../assets/space.gif')}>
                <View style={{flex:0.25}}>
                    <Text>SpaceCraft</Text>
                </View>
                <View style={{flex:0.75}}>
                    <FlatList keyExtractor={this.keyExtractor} renderItem={this.renderItem} data={this.state.aircrafts} />
                </View>
                </ImageBackground>
            </View>
        )
    }
}