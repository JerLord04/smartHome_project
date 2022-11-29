import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    Image,
    Button,
} from 'react-native';
import React, {Component} from 'react';
import {FlatGrid} from 'react-native-super-grid';
import {Switch} from 'react-native-switch';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import Icon from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


class Bed_room extends Component {
constructor(props) {
    super(props);
    this.state = {
    devices: 
    [
        {
        deviceName: 'หลอดไฟ',
        icon: 'lightbulb-outline',
        des:'หลอดไฟห้องนอน',
        turn_on: true,
        },
        {
        deviceName: 'อุปกรณ์วัดความชื้น',
        icon: 'opacity',
        des:'วัดความชื้นห้องนอน',
        turn_on: true,
        },
        {
        deviceName: 'เซนเซอร์ประตูหรือหน้าต่าง',
        icon: 'sensor-door',
        des:'เซนเซอร์ตรวจจับประตูหรือหน้าต่าง',
        turn_on: true,
        },
    ],
    };
}
render() {
    return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
        <StatusBar backgroundColor="#425F57" barStyle="light-content" />
        <View >
        <View
            style={{
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            backgroundColor: '#425F57',
            padding: 20,
            }}>
            <TouchableOpacity>
            <Text
                style={{
                color: '#EDE4E0',
                fontSize: 38,
                fontWeight: 'regular',
                marginTop: 18,
                fontFamily: 'IBMPlexSansThai-Bold',
                }}>
                ห้องนอน
            </Text>
            <Text
                style={{
                color: '#EDE4E0',
                fontSize: 15,
                fontWeight: 'regular',
                marginTop: 1,
                fontFamily: 'IBMPlexSansThai-Regular',
                }}>
                ขอให้มีความสุขในทุกๆวันนะคะ
            </Text>
            </TouchableOpacity>
        </View>
        </View>

        <FlatGrid
            style={{flex: 1}}
            spacing={20}
            itemDimension={300}
            data={this.state.devices}
            renderItem={({item, index}) => (
            <TouchableOpacity
                style={{
                backgroundColor: '#C8DBBE',
                height: 80,
                borderRadius: 10,
                elevation: 10,
                padding: 10,
                marginLeft: 5,
                }}>
                <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center'}}>
                    <Icon name={item.icon} size={36} color="#425F57" />
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text
                    style={{
                        color: '#000000',
                        fontSize: 15,
                        marginLeft: 28,
                        fontFamily: 'IBMPlexSansThai-Bold',
                    }}>
                    {item.deviceName}
                    </Text>
                    <Text
                    style={{
                        color: '#000000',
                        fontSize: 13,
                        marginLeft: 30,
                        fontFamily: 'IBMPlexSansThai-Light',
                        marginVertical: 2,
                    }}>
                    {item.des}
                    </Text>
                </View>
                    <View style={{justifyContent:'center'}}>
                    <Switch
                        value={item.turn_on}
                        onValueChange={val => {
                        let data = this.state.devices;
                        data[index].turn_on = val;
                        this.setState({devices: data});
                        }}
                        activeText={'On'}
                        inActiveText={'Off'}
                        circleSize={23}
                        barHeight={16}
                        backgroundActive={'#749F82'}
                        backgroundInactive={'gray'}
                        circleBorderWidth={0}
                        circleActiveColor={'#425F57'}
                        circleInActiveColor={'#e5e5e5'}
                        changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                        innerCircleStyle={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        }} // style for inner animated circle for what you (may) be rendering inside the circle
                        outerCircleStyle={{}} // style for outer animated circle
                        renderActiveText={false}
                        renderInActiveText={false}
                        switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                        switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                        switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
                        switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                    />
                    </View>
                </View>
                
            </TouchableOpacity>
            )}
        />
    </View>
    );
}
}

export default Bed_room;
