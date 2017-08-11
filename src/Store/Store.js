

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
  TouchableOpacity,
  Image,
} from 'react-native';


import stylevar from '../style/stylevar.js';


import Navbar from '../component/Navbar.js';
import DisplayColumn from '../component/DisplayColumn.js';
import GameList from '../component/GameList.js';

const styles = StyleSheet.create({
	IconContainer: {
		top: 18,
	},

	Icon: {
		paddingTop: stylevar.padding.largePadding,
		paddingLeft: stylevar.padding.layoutPadding,
		paddingRight: stylevar.padding.layoutPadding,
		paddingBottom: stylevar.padding.largePadding,
	},
	
	list: {marginTop:10,
		height: 100,
	},
	mainContainer: {
		marginTop: stylevar.shadow.largeShadowSize,
	}
})


const Data =[
{ "img":{uri:'https://originassets.akamaized.net/origin-com-store-final-assets-prod/74889/231.0x326.0/1019025_LB_231x326_en_US_%5E_2016-09-09-18-10-26_834d4754eb4e81553bc3b69a4b60a79b154cfaa3.jpg'},
gameName:"Mass Effect™ Andromeda",
sale:"30%",
price:"$79.99"
},
{ "img":{uri:'https://originassets.akamaized.net/origin-com-store-final-assets-prod/74889/231.0x326.0/1019025_LB_231x326_en_US_%5E_2016-09-09-18-10-26_834d4754eb4e81553bc3b69a4b60a79b154cfaa3.jpg'},
gameName:"Mass Effect™ Andromeda",
sale:"30%",
price:"$79.99"
}
,
{ "img":{uri:'https://originassets.akamaized.net/origin-com-store-final-assets-prod/74889/231.0x326.0/1019025_LB_231x326_en_US_%5E_2016-09-09-18-10-26_834d4754eb4e81553bc3b69a4b60a79b154cfaa3.jpg'},
gameName:"Mass Effect™ Andromeda",
sale:"30%",
price:"$79.99"
},
{ "img":{uri:'https://originassets.akamaized.net/origin-com-store-final-assets-prod/74889/231.0x326.0/1019025_LB_231x326_en_US_%5E_2016-09-09-18-10-26_834d4754eb4e81553bc3b69a4b60a79b154cfaa3.jpg'},
gameName:"Mass Effect™ Andromeda",
sale:"30%",
price:"$79.99"
},
{ "img":{uri:'https://originassets.akamaized.net/origin-com-store-final-assets-prod/74889/231.0x326.0/1019025_LB_231x326_en_US_%5E_2016-09-09-18-10-26_834d4754eb4e81553bc3b69a4b60a79b154cfaa3.jpg'},
gameName:"Mass Effect™ Andromeda",
sale:"30%",
price:"$79.99"
}];

export default class Store extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render(){
		return(
			<View >
				
				<Navbar  HeaderName="Store" renderLeftIcon={()=>
                 <TouchableOpacity style={[styles.IconContainer,styles.Icon,{top:24}]}>
                   <Image source={require("../../img/scan@3x.png")} style={{width:18,height:18,marginTop:-2,}} />
                </TouchableOpacity>
				}
				 renderRightIcon={()=>
				<View style={[styles.IconContainer,{flexDirection:'row'}]} >
                 <TouchableOpacity >
                   <Icon style={[styles.Icon,{paddingRight:stylevar.padding.layoutPadding /2}]}  color={stylevar.color.commonColor}  name='search' 
                  size={24}  />
                </TouchableOpacity>
                 <TouchableOpacity >
                   <Icon style={[styles.Icon,{paddingLeft:stylevar.padding.layoutPadding /2}]}  color={stylevar.color.commonColor}  name='notifications' 
                  size={24}  />
                </TouchableOpacity>
                </View>
				}


				/>

				

				<ScrollView style={{marginTop:stylevar.padding.largePadding,}}>
				<DisplayColumn navigation={this.props.navigation} name="PreOrder" />

				<GameList navigation={this.props.navigation} />
      </ScrollView>
			</View>
			)
	}
}