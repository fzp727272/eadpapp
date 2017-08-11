

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
  ListView,
} from 'react-native';


import stylevar from '../style/stylevar.js';


import Navbar from '../component/Navbar.js';
import DisplayColumn from '../component/DisplayColumn.js';
import GameList from '../component/GameList.js';


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



const styles = StyleSheet.create({
	bannerImage: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: Dimensions.get("window").width,
		height: stylevar.height.bannerVideoHeight,
	},
	detailContainer: {

		top: 0,
		//top:stylevar.height.bannerVideoHeight* 3 / 5 - stylevar.height.navbarHeight,
		position: 'absolute',
		height: Dimensions.get('window').height,

		//flex:1,
		//flex:1,
		//justifyContent:'center',

		//backgroundColor:'red',
	},
	ScrollContainer: {
		//height:10000,
				
		width: Dimensions.get('window').width,

	},
	ListContainer: {
		paddingBottom:stylevar.padding.layoutPadding * 3 + stylevar.height.bigButtonHeight,
		//height:1000,
		shadowColor: stylevar.shadow.shadowColor,
		shadowOffset: {
			height:0,
			width: 0
		},
		//shadowRadius: stylevar.shadow.largeShadowSize * 2,
		shadowOpacity: 1,
		backgroundColor: "transparent",


	},
	ListHeader: {
		//flexDirection:'row',
		marginTop: 150,

		// marginTop:100,

	},
	gameImage: {
		//marginTop:30,
		position: 'absolute',
		left: stylevar.padding.layoutPadding,
		width: 120,
		height: 170,
		borderRadius: stylevar.borderRadius.commonRadius,
	},
	gameName: {
		color: stylevar.color.commonColor,
		fontWeight:'200',
		fontSize: stylevar.fontSize.headerSize,
	},
	gamePrice:{position:'absolute',bottom:stylevar.padding.layoutPadding,left:120 + stylevar.padding.middlePadding + stylevar.padding.layoutPadding,  fontSize:stylevar.fontSize.titleSize,color:stylevar.color.commonColor,},
	note: {
		marginTop: 30,
		height: 150,
		paddingLeft: 120 + stylevar.padding.middlePadding + stylevar.padding.layoutPadding,
		paddingRight: stylevar.padding.layoutPadding,
		paddingTop:stylevar.padding.largePadding,
		backgroundColor: stylevar.color.mainColor,
		borderRadius:stylevar.borderRadius.commonRadius,

		//borderTopLeftRadius: stylevar.borderRadius.commonRadius,
		//borderTopRightRadius: stylevar.borderRadius.commonRadius,
	},
	description:{fontSize:stylevar.fontSize.commonSize, color:stylevar.color.commonColor,},

	productDetail:{backgroundColor:stylevar.color.mainColor,
		paddingLeft:stylevar.padding.layoutPadding,
		paddingRight:stylevar.padding.layoutPadding,
		paddingTop:stylevar.padding.smallPadding,
		paddingBottom:stylevar.padding.middlePadding,
		//height:1000,
	},
	title:{
		position:'absolute',
		top:0,
		//width:Dimensions.get('window').width,
		alignItems:'center',
		paddingTop:30,
		//height:stylevar.height.navbarHeight,
		//lineHeight:stylevar.height.navbarHeight,

	},
	titleText:{
    
    textAlign:'center',
    color:stylevar.color.commonColor,
    fontSize:stylevar.fontSize.headerSize,
    lineHeight:stylevar.height.navbarHeight - 44,
	},
	columnTitle:{
	marginTop:stylevar.padding.layoutPadding,
	color:stylevar.color.commonColor,
    fontSize:stylevar.fontSize.headerSize,
    },
	previewContainer:{
		marginTop:stylevar.padding.middlePadding,
		//height:200,
	},

	videoList:{
		borderRadius:stylevar.borderRadius.commonRadius,
		height:134,
		width:240,
		marginRight:stylevar.padding.middlePadding,
	},
	buyButton:{
		position:'absolute',
		bottom:stylevar.padding.layoutPadding * 2,
		width:Dimensions.get("window").width * 4 / 5,
		left:Dimensions.get("window").width  / 10,
		height:stylevar.height.bigButtonHeight,
		
	},
	buyButtonText:{
		fontSize:stylevar.fontSize.headerSize,
		color:stylevar.color.commonColor,
		lineHeight:stylevar.height.bigButtonHeight,

	},
	compareContainer:{
		marginTop:stylevar.padding.middlePadding,
        paddingTop:stylevar.padding.middlePadding,
        paddingRight:stylevar.padding.middlePadding,
        paddingBottom:stylevar.padding.middlePadding,
        paddingLeft:stylevar.padding.middlePadding,
        borderColor:stylevar.color.greyColor,
        borderTopWidth:1,
        borderRightWidth:1,
        borderBottomWidth:1,
        borderLeftWidth:1,
        borderRadius:stylevar.borderRadius.commonRadius,
        alignItems:'center',
	},

})

export default class ProducrDetail extends Component {

	constructor(props) {
	  super(props);
	  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	
	  this.state = {
	  	buyButtonOpacity:1,
	  	scaleAnim:0.95,
	  	dataSource: ds.cloneWithRows(Data),
	  	navBarOpacity:0,
	  	imgBlur:0,
	  };
	}
	scrollListen(e) {
    let endposition = e.nativeEvent.contentOffset.y;
    let toggle = true;
	   /* if (this.state.buyButtonOpacity > 0 ) {
	    	this.setState({
	    	buyButtonOpacity: this.state.buyButtonOpacity - 0.3,
	      })
	    }else{
	    	this.setState({
	    	buyButtonOpacity: 0,
	      })
	    }*/
    
        //console.log(endposition);
        if (endposition < 160) {
            this.setState({
                scaleAnim:0.95 + endposition / 160 * 0.03,
                navBarOpacity: endposition / 160 * 1,
                imgBlur: endposition / 160 * 12
            });
          
        } else {
            this.setState({
		      navBarOpacity: 1,
		      imgBlur: 12,
		      scaleAnim:1,
		  });
		  
        };
      }
		scrollEnd(){
         this.setState({
         	buyButtonOpacity:1,
         })
		}

  _renderRow(rowData){
    return (
       <View style={styles.listItem}>
        <TouchableOpacity onPress={() => this._goDetailPage(rowData)}>
          <Image style={styles.videoList} source={rowData.img}  >
       
        </Image>
        </TouchableOpacity>
      
      </View>
      )
  }



	render(){
		let navbarBackground = "rgba(40,50,60," + this.state.navBarOpacity + ")" ;
		return(
			<View  style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height,backgroundColor:stylevar.color.mainColor,}}>
             <Image style={styles.bannerImage} source={require("../../img/MEAI_pdp_featurehero_1920x1080_en_ww.jpg")} blurRadius={this.state.imgBlur} >
                    <Icon containerStyle={{marginTop:stylevar.height.bannerVideoHeight / 4}}  color={stylevar.color.commonColor}  name='play-circle-outline' 
                             size={48}  />
              </Image>
			 
			  <View style={styles.detailContainer}>
			   <ScrollView style={[styles.ScrollContainer]}
                 scrollEventThrottle={30}
                 onScroll={(e)=>{this.scrollListen(e)}}
                // onScrollEndDrag={() => {this.scrollEnd()}}
                // onMomentumScrollEnd={() => {this.scrollEnd()}}
			   >
			    <View style={[styles.ListContainer,{ transform:[ {
            scale: this.state.scaleAnim,
             }]}]}>
	                <View style={styles.ListHeader}>                 
	                    <View style={styles.note}>
		                  <Text style={styles.gameName}>Mass Effect™-Andromeda</Text>
		                  <Text style={styles.gamePrice}>$79.99</Text>
		                </View>
		                 <Image style={styles.gameImage} source={this.props.navigation.state.params.bannerImage}>
		                
		                 </Image>
	                 </View>
	                 <View style={styles.productDetail}>
		                 <Text style={styles.description}>Discover a new galaxy
							Mass Effect: Andromeda takes you to the Andromeda galaxy, far beyond the Milky Way. There, you'll lead our fight for a new home in hostile territory - where WE are the aliens. 
						 </Text>
						 <Text style={{color:stylevar.color.linkColor,fontSize:stylevar.fontSize.commonSize,}}>Read More</Text>
						<Text style={styles.columnTitle}>Screenshot and Video</Text>
                       <ListView 
			            horizontal  
			          //  showsHorizontalScrollIndicator
			             contentContainerStyle={styles.previewContainer}
			            dataSource={this.state.dataSource}
			            renderRow={this._renderRow.bind(this)}
			          />
                        <Text style={styles.columnTitle}>Compare Editions</Text>
                         <View style={styles.compareContainer}>
                         	<Text style={{color:stylevar.color.commonColor,fontSize:stylevar.fontSize.noteSize,}}>Only on Origin: Get the Digital Deluxe Edition</Text>
                            <Text style={{marginTop:stylevar.padding.middlePadding,marginBottom:stylevar.padding.middlePadding, color:stylevar.color.greyColor,fontSize:stylevar.fontSize.commonSize}}>Make your new Sims the life of the party with Digital Deluxe Edition content! From laser light shows and wild party outfits to Tiki bars and festive decor, explore the adventurous side of your Sims' mind, body and heart.</Text>
                            <View style={{marginBottom:stylevar.padding.middlePadding, borderTopWidth:1,borderColor:stylevar.color.greyColor, alignItems:'center',}}>
                          		 <Text style={{paddingTop:stylevar.padding.middlePadding,color:stylevar.color.commonColor,fontSize:stylevar.fontSize.commonSize,}}>Life of the Party Digital Content</Text>
                           		 <Text style={{marginTop:stylevar.padding.smallPadding,color:stylevar.color.greyColor,fontSize:stylevar.fontSize.commonSize,}}>Features the Flaming Tiki Bar and sleek, stylized outfits for your Sims.</Text>
                            </View>
                           <View style={{marginBottom:stylevar.padding.middlePadding, borderTopWidth:1,borderColor:stylevar.color.greyColor, alignItems:'center',}}>
                          		 <Text style={{paddingTop:stylevar.padding.middlePadding,color:stylevar.color.commonColor,fontSize:stylevar.fontSize.commonSize,}}>Life of the Party Digital Content</Text>
                           		 <Text style={{marginTop:stylevar.padding.smallPadding,color:stylevar.color.greyColor,fontSize:stylevar.fontSize.commonSize,}}>Features the Flaming Tiki Bar and sleek, stylized outfits for your Sims.</Text>
                            </View>
                             <View style={{marginBottom:stylevar.padding.middlePadding, borderTopWidth:1,borderColor:stylevar.color.greyColor, alignItems:'center',}}>
                          		 <Text style={{paddingTop:stylevar.padding.middlePadding,color:stylevar.color.commonColor,fontSize:stylevar.fontSize.commonSize,}}>Life of the Party Digital Content</Text>
                           		 <Text style={{marginTop:stylevar.padding.smallPadding,color:stylevar.color.greyColor,fontSize:stylevar.fontSize.commonSize,}}>Features the Flaming Tiki Bar and sleek, stylized outfits for your Sims.</Text>
                            </View>
                         </View>
                        
					 </View>
                  </View>
			   </ScrollView>
			    <Navbar LeftIcon="back" navigation={this.props.navigation} NavbarStyle={{backgroundColor:navbarBackground ,shadowOpacity:this.state.navBarOpacity,position:'absolute',top:0,}} >

             			 <Text style={[styles.titleText,{opacity:this.state.navBarOpacity}]}>Mass Effect™-Andromeda</Text>
			    </Navbar>
			  </View>
			  <View style={[styles.buyButton,{opacity:this.state.buyButtonOpacity}]}>
				  <TouchableOpacity  style={{backgroundColor:stylevar.color.brandColor,
							borderRadius:stylevar.borderRadius.commonRadius,
							alignItems:'center',
							 shadowColor:stylevar.shadow.shadowColor,
						    shadowOffset:{height:0,width:0},
						    shadowRadius:stylevar.shadow.largeShadowSize * 2,
						    shadowOpacity:1,
					}}>
				    <Text style={styles.buyButtonText}>Buy $79.99</Text>
				  </TouchableOpacity>
			  </View>
			</View>
			)
	}
}