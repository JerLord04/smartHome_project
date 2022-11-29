import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,

} from 'react-native';
import React, {Component} from 'react';
import {FlatGrid} from 'react-native-super-grid';
import {Switch} from 'react-native-switch';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



class App_home extends Component {
  constructor(props) {
    super(props);
        this.state = {
        devices: [
          {
            place: 'ห้องนอน', 
            appliance: '1 อุปกรณ์',  
            turn_on: true,
            screen: 'Bedroom',
          },
          {
            place: 'ห้องนั่งเล่น', 
            appliance: '1 อุปกรณ์',  
            turn_on: true,
            screen: 'Livingroom',
          },
          {
            place: 'ห้องครัว', 
            appliance: '1 อุปกรณ์',  
            turn_on: true,
            screen: 'Kitchen',
          },
        ],
        
    };
  }
  render() {
    return (
      <View style={{backgroundColor: '#425F57', flex: 1}}>
        <StatusBar backgroundColor="#425F57" barStyle="light-content" />
        <View View style={{flex: 1, margin: 20}}>
          <Image
            style={{width: 100, height: 100, borderRadius: 400 / 2}}
            source={require('../assets/images/profile.png')}
          />

          <Text
            style={{
              color: '#EDE4E0',
              fontSize: 20,
              fontWeight: 'regular',
              marginTop: 18,
              fontFamily: 'IBMPlexSansThai-Bold',
            }}>
            สวัสดี คุณ ไมเคิล
          </Text>
          <Text
            style={{
              color: '#EDE4E0',
              fontSize: 15,
              fontWeight: 'regular',
              marginTop: 10,
              fontFamily: 'IBMPlexSansThai-Regular',
            }}>
            เช้านี้อากาศดีมาก ขอให้เป็นวันที่ดี
          </Text>
          <FlatGrid
            style={{flex: 1}}
            itemDimension={130}
            data={this.state.devices}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={{
                  backgroundColor: '#C8DBBE',
                  height: 150,
                  borderRadius: 10,
                  elevation: 10,
                  padding: 10,
                  marginLeft: 5,
                }}
                onPress={() => this.props.navigation.navigate(item.screen)}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 21,
                    marginLeft: 5,
                    fontFamily: 'IBMPlexSansThai-Bold',
                  }}>
                  {item.place}
                </Text>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 16,
                    marginLeft: 5,
                    fontFamily: 'IBMPlexSansThai-Light',
                    marginVertical: 2,
                    marginBottom: 5,
                  }}>
                  {item.appliance}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <View
          style={{
            backgroundColor: '#0F3D3E',
            height: 50,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            flexDirection: 'row',
            paddingHorizontal: 80,
          }}>
          <TouchableOpacity>
            <Icon
              name="home"
              size={32}
              color="#94B49F"
              style={{alignSelf: 'center', marginTop: 8, marginRight: 70}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="dashboard"
              size={30}
              color="#94B49F"
              style={{alignSelf: 'center', marginTop: 8,marginRight:70}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="settings"
              size={30}
              color="#94B49F"
              style={{alignSelf: 'center', marginTop: 8,marginRight: 70}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default App_home;
