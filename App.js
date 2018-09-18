import React from 'react';
import { StyleSheet, Text, View ,StatusBar,WebView ,TouchableOpacity,ToastAndroid} from 'react-native';
import { LinearGradient } from 'expo';
import {MaterialIcons} from '@expo/vector-icons';
import md5 from 'md5';
export default class App extends React.Component {
	state={
		url:''
	}
	constructor(props){
		super(props);
		this.webView;
		var now = Math.floor(Date.now()/1000);
		var token= md5('leah'+now.toString()+'vlappnew').toString();
		console.log("token",token);
		this.state.url = 'http://manu.pubvn.tv/kem_app/list_manager/?app=leah&time='+now.toString()+'&token='+token;
	}
	refresh=()=>{
		var now = Math.floor(Date.now()/1000);
		var token= md5('leah'+now.toString()+'vlappnew').toString();
		var url = 'http://manu.pubvn.tv/kem_app/list_manager/?app=leah&time='+now.toString()+'&token='+token;
		this.setState({url: url});
		
	}
	_onLoadEnd=()=>{
		ToastAndroid.show('Load End', ToastAndroid.SHORT);
	}
	_onLoadStart=()=>{
		ToastAndroid.show('Load Start', ToastAndroid.SHORT);
	}
  render() {
	  console.log("render");

	StatusBar.setHidden(true);
    return (
      <View style={styles.container}>
		<View style={styles.topBar}>
						<View style={styles.leftButtons}>
							<TouchableOpacity onPress={this.refresh} style={[]}>
								<LinearGradient
												start = {[0,0]}
												end   = {[0,1]}
												colors={["#f0f0f0","#dcdcdc"]}  style={[styles.border,styles.view]}>
									<MaterialIcons name="refresh" size={32} color="black"/>
								</LinearGradient>
							  </TouchableOpacity>
						</View>
		</View>
        <WebView  onLoadEnd={this._onLoadEnd} onLoadStart={this._onLoadStart} style={styles.webview} source={{uri:this.state.url}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%',height:'100%',
    backgroundColor: '#fff',paddingTop:10
  },
  topBar:{
  	flexDirection:'row',position:'absolute',top:0,left:'50%',width:38,marginLeft:-19,zIndex:9999,justifyContent:'center'
  },
  leftButtons:{flexDirection:'row'},
  webview:{width:'100%',height:'100%',position:'absolute',top:0,left:0},
  border:{borderRadius:2,borderWidth:1,borderColor:"#666"},
  view:{justifyContent: 'center',alignItems: 'center',height:38,flexDirection:'row'},
  text:{color:'#fff'}
});
