

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
  Image

} from 'react-native';


import stylevar from '../style/stylevar.js';
const styles = StyleSheet.create({
    listContainer: {
        marginTop: stylevar.padding.largePadding,
        paddingLeft: stylevar.padding.layoutPadding - stylevar.padding.largePadding /2,
        paddingRight: stylevar.padding.layoutPadding - stylevar.padding.largePadding /2,
        //paddingTop:stylevar.padding.
        backgroundColor: stylevar.color.mainColor,
        shadowColor: stylevar.shadow.shadowColor,
        shadowOffset: { height: -1, width: 0 },
        // shadowRadius:2,
        shadowOpacity: .5,
        width:Dimensions.get('window').width,
        flexWrap:'wrap',
        flexDirection:'row',
    },
    listItem: {
      paddingTop:stylevar.padding.middlePadding,
        width: (Dimensions.get('window').width - 2*(stylevar.padding.layoutPadding - stylevar.padding.largePadding /2)) / 2,
        //justifyContent:'center',
        alignItems:'center', 

    },
    listItemImg:{
      borderRadius:stylevar.borderRadius.commonRadius,
      width: (Dimensions.get('window').width - 2 * stylevar.padding.layoutPadding ) / 2 ,
      height:200,
          alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    background:{ position:'absolute',bottom:-10, width:(Dimensions.get('window').width  ) / 2 ,height:100, justifyContent: 'flex-end',},
    ListItemName:{color:stylevar.color.commonColor,fontWeight:'100',backgroundColor:'transparent',paddingLeft:stylevar.padding.middlePadding,paddingRight:stylevar.padding.middlePadding,fontSize:stylevar.fontSize.commonSize},
     ListItemPrice:{color:stylevar.color.commonColor,backgroundColor:'transparent',paddingTop:stylevar.padding.middlePadding,paddingBottom:stylevar.padding.middlePadding,paddingLeft:stylevar.padding.middlePadding,paddingRight:stylevar.padding.middlePadding,fontSize:stylevar.fontSize.cnoteSize}

})
const Data =[
{ "img":{uri:'https://originassets.akamaized.net/origin-com-store-final-assets-prod/74889/231.0x326.0/1019025_LB_231x326_en_US_%5E_2016-09-09-18-10-26_834d4754eb4e81553bc3b69a4b60a79b154cfaa3.jpg'},
gameName:"STAR WARS™ Battlefront™ II: Elite Trooper Deluxe Edition",
sale:"30%",
price:"$79.99"
},
{ "img":{uri:'https://originassets.akamaized.net/origin-com-store-final-assets-prod/192140/231.0x326.0/1036380_LB_231x326_en_US_%5E_2016-08-11-11-42-55_b55fa3edabeb1217695dde0a9978615f4a6a9c58.jpg'},
gameName:"STAR WARS™ Battlefront™ II: Elite Trooper Deluxe Edition",
sale:"30%",
price:"$79.99"
}
,
{ "img":{uri:'https://originassets.akamaized.net/origin-com-store-final-assets-prod/193608/231.0x326.0/1049808_LB_231x326_en_US_%5E_2017-05-19-17-12-25_7757a10dd968584c932211ec525449c778db7912.jpg'},
gameName:"STAR WARS™ Battlefront™ II: Elite Trooper Deluxe Edition",
sale:"30%",
price:"$79.99"
},
{ "img":{uri:'https://originassets.akamaized.net/origin-com-store-final-assets-prod/193864/231.0x326.0/1049456_LB_231x326_en_US_%5E_2017-04-04-09-51-11_e44d270606e677e31a1c1b81cbf9167e55e5b016.jpg'},
gameName:"STAR WARS™ Battlefront™ II: Elite Trooper Deluxe Edition",
sale:"30%",
price:"$79.99"
},
{ "img":{uri:'https://originassets.akamaized.net/origin-com-store-final-assets-prod/74889/231.0x326.0/1019025_LB_231x326_en_US_%5E_2016-09-09-18-10-26_834d4754eb4e81553bc3b69a4b60a79b154cfaa3.jpg'},
gameName:"STAR WARS™ Battlefront™ II: Elite Trooper Deluxe Edition",
sale:"30%",
price:"$79.99"
}]


export default class GameList extends Component {

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
       <View style={styles.listItem}>
        <TouchableOpacity onPress={() => this._goDetailPage(rowData)}>
          <Image style={styles.listItemImg} source={rowData.img}  >
          <Image source={require("../../img/gredientBlack.png")} style={styles.background} resizeMode="stretch" blurRadius={10} />
             <Text style={styles.ListItemName}>{rowData.gameName}</Text>
             <Text style={styles.ListItemPrice}>{rowData.price}</Text>
        </Image>
        </TouchableOpacity>
      
      </View>
      )
  }


	render(){

		return(
			 <ListView 
             contentContainerStyle={styles.listContainer}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
          />
			)
	}
}