/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
  ActivityIndicator
} from 'react-native';


import stylevar from './src/style/stylevar.js';


import Store from './src/Store/Store.js';
import ProductDetail from './src/Store/ProductDetail.js';


const styles = StyleSheet.create({
  tabContainer:{
    height:51,
    overflow:'hidden',
    paddingTop:3,
    backgroundColor:stylevar.color.brandColor,
  },
  tabTitle: {
     width:Dimensions.get("window").width / 4,
height:20,
   backgroundColor:stylevar.color.tabColor,
    marginTop: 0,
    marginBottom:0,
    paddingBottom: 0,
    fontSize: stylevar.fontSize.minSize,
    fontWeight: 'bold',
  },
  selectedTitleStyle: {
    color:stylevar.color.brandColor,
    height:16,
       marginTop: 0,
    marginBottom:4,
//backgroundColor:'red',
    //borderBottomWidth:3,
    //paddingBottom:1,

  },
  iconContainer: {
       height:31,
    width:Dimensions.get("window").width / 4,
    backgroundColor:stylevar.color.tabColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:4,

  },
  iconActiveContainer: {
    height:31,
    width:Dimensions.get("window").width / 4,
 backgroundColor:stylevar.color.tabColor,
    justifyContent: 'center',
    alignItems: 'center',
     paddingTop:4,
  },

  loadingContainer: {
    position: 'absolute',
    top: Dimensions.get("window").height / 2,
    left: Dimensions.get("window").width / 2,
    marginTop: -30,
    marginLeft: -30,
    
  },
  loading:{
     width: 60,
    height: 60,
    backgroundColor:'rgba(0,0,0,0.8)',
    borderRadius:stylevar.borderRadius.commonRadius,
  }

});

export default class Main extends Component {

  constructor() {
    super();
    this.state = {
      selectedTab: 'Store',
      avatarSource: {},
      ImageWidth:0,
      ImageHeight:0,
      modalPhotoVisible:false,
      fadeAnim:new Animated.Value(0),
      loadingdisplay:'none',
    };
    this.changeTab = this.changeTab.bind(this);

  }

  changeTab(selectedTab) {
    this.setState({
      selectedTab
    })
  }


sortHide(){
  this.setState({modalPhotoVisible:false})
}


  render() {
    const {
      selectedTab
    } = this.state
    return (
<View style={{flex:1}}>
    
      <Tabs sceneStyle={{backgroundColor:stylevar.color.mainColor,paddingBottom:0,}}
       tabBarStyle={{position:'absolute',top:Dimensions.get("window").height-49,
       backgroundColor:'red',opacity:0.96,backgroundColor:stylevar.color.tabColor,
       borderTopWidth:1,borderTopColor:stylevar.color.blackColor,}}
      >
          <Tab tabStyle={styles.tabContainer}
            titleStyle={styles.tabTitle}
            selectedTitleStyle={styles.selectedTitleStyle}
            selected={selectedTab === 'Store'}
            title={'Store'}
            renderIcon={() => <Icon containerStyle={styles.iconContainer} color={stylevar.color.greyColor}  name='store-mall-directory' 
            size={30} />} 
            renderSelectedIcon={() => <Icon containerStyle={styles.iconActiveContainer} color={stylevar.color.brandColor} name='store-mall-directory' 
             size={30} />}
            onPress={() => this.changeTab('Store')}>
            <Store navigation={this.props.navigation} />
          </Tab>
           <Tab tabStyle={styles.tabContainer}
            titleStyle={styles.tabTitle}
            selectedTitleStyle={styles.selectedTitleStyle}
            selected={selectedTab === 'My Game'}
            title={'My Game'}
            renderIcon={() => <Icon containerStyle={styles.iconContainer} color={stylevar.color.greyColor}  name='videogame-asset' 
            size={32} />}
            renderSelectedIcon={() => <Icon containerStyle={styles.iconActiveContainer} color={stylevar.color.brandColor} name='videogame-asset' 
             size={32} />}
            onPress={() => this.changeTab('My Game')}>
            <Store navigation={this.props.navigation} />
          </Tab>


           <Tab tabStyle={styles.tabContainer}
            titleStyle={styles.tabTitle}
            selectedTitleStyle={styles.selectedTitleStyle}
            selected={selectedTab === 'Friend'}
            title={'Friend'}
            renderIcon={() => <Icon containerStyle={styles.iconContainer} color={stylevar.color.greyColor}  name='supervisor-account' 
            size={32} />}
            renderSelectedIcon={() => <Icon containerStyle={styles.iconActiveContainer} color={stylevar.color.brandColor} name='supervisor-account' 
             size={32} />}
            onPress={() => this.changeTab('Friend')}>
            <Store navigation={this.props.navigation} />
          </Tab>

            <Tab tabStyle={styles.tabContainer}
            titleStyle={[styles.tabTitle,{paddingTop:1,}]}
            selectedTitleStyle={[styles.selectedTitleStyle,{paddingTop:1,}]}
            selected={selectedTab === 'Profile'}
            title={'Profile'}
            renderIcon={() => <Icon containerStyle={[styles.iconContainer,{paddingTop:8,}]} color={stylevar.color.greyColor}  name='perm-contact-calendar' 
            size={28} />}
            renderSelectedIcon={() => <Icon containerStyle={[styles.iconActiveContainer,{paddingTop:8,}]} color={stylevar.color.brandColor} name='perm-contact-calendar' 
             size={28} />}
            onPress={() => this.changeTab('Profile')}>
         <Store navigation={this.props.navigation} />
          </Tab>
          
       </Tabs>
</View>
    );
  }
}

const Nav = StackNavigator({
  Main: {screen: Main},
  ProductDetail: {screen: ProductDetail},
 /* PersonalDetail:{screen: PersonalDetail},
  PersonalList:{ screen: PersonalList}*/
},{
    headerMode: 'none',

},);



AppRegistry.registerComponent('myapp', () => Nav);