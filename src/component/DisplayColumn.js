

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
  TouchableOpacity,
  ListView,
  Image,
  TouchableHighlight
} from 'react-native';


import stylevar from '../style/stylevar.js';

const styles = StyleSheet.create({
 preOrderContainer: {
    height:286,
    width:Dimensions.get('window').width,
    backgroundColor:stylevar.color.mainColor,
    shadowColor:stylevar.shadow.shadowColor,
    shadowOffset:{height:1,width:0},
   // shadowRadius:2,
    shadowOpacity:.8,
    // backgroundColor:"#fff",
  },
  disPlayColumn: {
    flexDirection: "row",
    paddingLeft: stylevar.padding.layoutPadding,
  },
 disPlayColumnTitle:{
  color:stylevar.color.commonColor,
  fontSize:stylevar.fontSize.headerSize,
  flex:1
 },
 seeMore:{
 // backgroundColor:stylevar.color.blackColor,
  paddingTop:stylevar.padding.smallPadding,
  justifyContent:'flex-end',flex:1,paddingRight:stylevar.padding.layoutPadding,
  flexDirection:'row',
 },
 seeMoreText:{
  textAlign:'right',
  color:stylevar.color.linkColor,
  fontSize:stylevar.fontSize.noteSize,
 },
 seeMoreIcon: {
  marginTop:-2,
    transform:[ {
            rotateZ: '90deg'
        }]
},
listContainer:{
 paddingLeft:stylevar.padding.layoutPadding,
 paddingTop:stylevar.padding.largePadding,
},
listItem:{
  width:120,
  //height:220,
  marginRight:stylevar.padding.middlePadding,
},
listItemTitle:{height:50,fontSize:stylevar.fontSize.commonSize,color:stylevar.color.commonColor,
paddingTop:stylevar.padding.smallPadding,fontWeight:'100',},
listItemImg:{width:120,height:170,borderRadius:stylevar.borderRadius.commonRadius},
listItemPrice:{fontSize:stylevar.fontSize.noteSize,color:stylevar.color.commonColor,}

})

const Data =[
{ "img":{uri:'https://originassets.akamaized.net/origin-com-store-final-assets-prod/74889/231.0x326.0/1019025_LB_231x326_en_US_%5E_2016-09-09-18-10-26_834d4754eb4e81553bc3b69a4b60a79b154cfaa3.jpg'},
gameName:"Mass Effect™ Andromeda",
sale:"30%",
price:"$79.99"
},
{ "img":{uri:'https://originassets.akamaized.net/origin-com-store-final-assets-prod/192140/231.0x326.0/1036380_LB_231x326_en_US_%5E_2016-08-11-11-42-55_b55fa3edabeb1217695dde0a9978615f4a6a9c58.jpg'},
gameName:"Mass Effect™ Andromeda",
sale:"30%",
price:"$79.99"
}
,
{ "img":{uri:'https://originassets.akamaized.net/origin-com-store-final-assets-prod/193608/231.0x326.0/1049808_LB_231x326_en_US_%5E_2017-05-19-17-12-25_7757a10dd968584c932211ec525449c778db7912.jpg'},
gameName:"Mass Effect™ Andromeda",
sale:"30%",
price:"$79.99"
},
{ "img":{uri:'https://originassets.akamaized.net/origin-com-store-final-assets-prod/193864/231.0x326.0/1049456_LB_231x326_en_US_%5E_2017-04-04-09-51-11_e44d270606e677e31a1c1b81cbf9167e55e5b016.jpg'},
gameName:"Mass Effect™ Andromeda",
sale:"30%",
price:"$79.99"
},
{ "img":{uri:'https://originassets.akamaized.net/origin-com-store-final-assets-prod/74889/231.0x326.0/1019025_LB_231x326_en_US_%5E_2016-09-09-18-10-26_834d4754eb4e81553bc3b69a4b60a79b154cfaa3.jpg'},
gameName:"Mass Effect™ Andromeda",
sale:"30%",
price:"$79.99"
}]

export default class DisplayColumn extends Component {

	constructor(props) {
	  super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	  this.state = { dataSource: ds.cloneWithRows(Data),};
	}
  _goDetailPage(rowData){
    this.props.navigation.navigate('ProductDetail',{bannerImage:rowData.img });
        
  }
  _renderRow(rowData){
    return (
        <View style={styles.listItem}  >
        <TouchableOpacity onPress={()=> this._goDetailPage(rowData)}>
          <Image style={styles.listItemImg} source={rowData.img} blurRadius={0} >
           
          </Image>
         <Text style={styles.listItemTitle}>{rowData.gameName}</Text>
          <Text style={styles.listItemPrice}>{rowData.price}</Text>
          </TouchableOpacity>
      </View>
      )
  }

 
	render(){
		return(
			 <View style={styles.preOrderContainer}>
        <View style={styles.disPlayColumn}>
          <Text style={styles.disPlayColumnTitle}>{this.props.name }</Text>

          <TouchableOpacity style={styles.seeMore}>
            <Text style={styles.seeMoreText}>See more</Text>
            <Icon name="arrow-drop-up" containerStyle={styles.seeMoreIcon} size={stylevar.fontSize.noteSize} color={stylevar.color.linkColor}/>
          </TouchableOpacity>
    
        </View>
            <ListView 
            horizontal  
          //  showsHorizontalScrollIndicator
             contentContainerStyle={styles.listContainer}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
          />
       
        </View>
			)
	}
}