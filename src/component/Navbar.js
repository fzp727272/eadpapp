

import React, {
  Component
} from 'react';
import {
  Tabs,
  Tab,
  Icon
} from 'react-native-elements'
//const {deviceHeight, deviceWidth} = Dimensions.get('window');
import {
  StackNavigator,NavigationActions
} from 'react-navigation';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Animated,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity
} from 'react-native';


import stylevar from '../style/stylevar.js';

const styles = StyleSheet.create({
  navbarContainer:{
      height:stylevar.height.navbarHeight,
    width:Dimensions.get('window').width,
   // borderBottomWidth:2,
    //borderColor:stylevar.color.blackColor,
    backgroundColor:stylevar.color.navColor,
    paddingTop:20,
    shadowColor:stylevar.shadow.shadowColor,
    shadowOffset:{height:1,width:0},
    shadowRadius:stylevar.shadow.largeShadowSize,
    shadowOpacity:1,
    alignItems:'center',


  },
  container:{flexDirection:'row',justifyContent:'flex-start',},
   headerText:{

    textAlign:'center',
    color:stylevar.color.commonColor,
    fontSize:stylevar.fontSize.headerSize,
    lineHeight:stylevar.height.navbarHeight - 20,
   },
   IconBack:{top:18,
    height:stylevar.height.navbarHeight - 20,
    //lineHeight:stylevar.height.navbarHeight - 20,
    position:'absolute',
    left:0,
   },

   iconLeft:{
   position:'absolute',
   left:0,

//backgroundColor:"red"
   },
   iconRight:{
   position:'absolute',
   right:0,

//backgroundColor:"red"
   },
   Icon:{paddingTop: stylevar.padding.largePadding,
    paddingLeft:  stylevar.padding.layoutPadding,
    paddingRight:  stylevar.padding.layoutPadding,
    paddingBottom:  stylevar.padding.largePadding,}

})



export default class Navbar extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
    this.iconLeft = this.iconLeft.bind(this);
    this.goBack = this.goBack.bind(this);
   // this.renderLeftIcon = this.renderLeftIcon.bind(this);
	}

  goBack() {
    // AlertIOS.prompt("lkl")
    this.props.navigation.goBack()
  }

  iconLeft(){
      
    if (this.props.LeftIcon ==="back" ) {
      return( <TouchableOpacity style={styles.IconBack} onPress={this.goBack}>
                 <Icon style={styles.Icon}  color={stylevar.color.commonColor}  name='arrow-back' 
                  size={24}  />
                </TouchableOpacity>)
    }else{
      return(
        this.props.renderLeftIcon()
        )
    }
    
   }
     iconRight(){
      if (this.props.renderRightIcon) {
        return(
        this.props.renderRightIcon()
        )
      }
      
    
   }
	render(){
    const IconLeft = this.iconLeft();
     const IconRight = this.iconRight();
    console.log(this.props.LeftIcon)
		return(
			<View style={[styles.navbarContainer,this.props.NavbarStyle]}>
        <StatusBar
           barStyle="light-content"
         />    
           <View style={styles.iconLeft}>
            {IconLeft}
           </View>           
           <View style={styles.iconRight}>
            {IconRight}
           </View>
         
         <Text style={styles.headerText}>{this.props.HeaderName}</Text>
         {this.props.children}
      </View>
			)
	}
}