/*
* @Author: miaoxinyu.zh
* @Date:   2017-08-22 06:06:10
 * @Last Modified by: zhaozheng1.zh
 * @Last Modified time: 2017-09-25 09:30:28
*/
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor,
  ScrollView,
  FlatList
} from 'react-native';
import { Button, Card, CardItem } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import EmptyView from '../../components/EmptyView';


class PartyFee extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        flatListData: [{
          key: '2017年1月',
          text: '143',
          col: '1'
        },
        {
          key: '2017年2月',
          text: '143',
          col: '1'
        },
        {
          key: '2017年3月',
          text: '143',
          col: '1'
        },
        {
          key: '2017年4月',
          text: '143',
          col: '1'
        },
        {
          key: '2017年5月',
          text: '143',
          col: '1'
        },
        {
          key: '2017年6月',
          text: '143',
          col: '1'
        },
        {
          key: '2017年7月',
          text: '143',
          col: '1'
        },
        {
          key: '2017年8月',
          text: '143',
          col: '1'
        },
        {
          key: '2017年9月',
          text: '143',
          col: '2'
        },
        {
          key: '2017年10月',
          text: '',
          col: '3'
        },
        {
          key: '2017年11月',
          text: '',
          col: '3'
        },
        {
          key: '2017年12月',
          text: '',
          col: '3'
        }],
      }

    };
  }

  _renderItemComponent = ({ item }) => {
    let flag = '';
    switch (item.col) {
      case '1':
        flag = 'skyblue';
        break;
      case '2':
        flag = 'red';
        break;
      default:
        flag = 'grey';
    }
    return (
      <View style={{ flexDirection: 'row', width: 115 }}>
        <Card>
          <CardItem style={{ backgroundColor: flag, justifyContent: 'center' }}>
            <Text>{item.key}</Text>
          </CardItem>
          <CardItem style={{ justifyContent: 'center' }}>
            <Text>{item.text}</Text>
          </CardItem>
        </Card>
      </View>
    );

  }
  onShowNow() {
    //console.log(JSON.stringify(this.state.data))
    // console.log()
    var thiz = this;
    thiz.setState({
      data: {
        flatListData: [{
          key: '2017年1月',
          text: '143',
          col: '1'
        },
        {
          key: '2017年2月',
          text: '143',
          col: '1'
        },
        {
          key: '2017年3月',
          text: '143',
          col: '1'
        },
        {
          key: '2017年4月',
          text: '143',
          col: '1'
        },
        {
          key: '2017年5月',
          text: '143',
          col: '1'
        },
        {
          key: '2017年6月',
          text: '143',
          col: '1'
        },
        {
          key: '2017年7月',
          text: '143',
          col: '1'
        },
        {
          key: '2017年8月',
          text: '143',
          col: '1'
        },
        {
          key: '2017年9月',
          text: '143',
          col: '2'
        },
        {
          key: '2017年10月',
          text: '',
          col: '3'
        },
        {
          key: '2017年11月',
          text: '',
          col: '3'
        },
        {
          key: '2017年12月',
          text: '',
          col: '3'
        }],
      }
    });
  }
  onShowPast1() {
    //console.log(JSON.stringify(this.state.data))
    // console.log()
    var thiz = this;
    thiz.setState({
      data: {
        flatListData: [{
          key: '2016年1月',
          text: '143',
          col: '1'
        },
        {
          key: '2016年2月',
          text: '143',
          col: '1'
        },
        {
          key: '2016年3月',
          text: '143',
          col: '1'
        },
        {
          key: '2016年4月',
          text: '143',
          col: '1'
        },
        {
          key: '2016年5月',
          text: '143',
          col: '1'
        },
        {
          key: '2016年6月',
          text: '143',
          col: '1'
        },
        {
          key: '2016年7月',
          text: '143',
          col: '1'
        },
        {
          key: '2016年8月',
          text: '143',
          col: '1'
        },
        {
          key: '2016年9月',
          text: '143',
          col: '1'
        },
        {
          key: '2016年10月',
          text: '143',
          col: '1'
        },
        {
          key: '2016年11月',
          text: '143',
          col: '1'
        },
        {
          key: '2016年12月',
          text: '143',
          col: '1'
        }],
      }
    });
  }
  onShowPast2() {
    //console.log(JSON.stringify(this.state.data))
    // console.log()
    var thiz = this;
    thiz.setState({
      data: {
        flatListData: [{
          key: '2015年1月',
          text: '143',
          col: '1'
        },
        {
          key: '2015年2月',
          text: '143',
          col: '1'
        },
        {
          key: '2015年3月',
          text: '143',
          col: '1'
        },
        {
          key: '2015年4月',
          text: '143',
          col: '1'
        },
        {
          key: '2015年5月',
          text: '143',
          col: '1'
        },
        {
          key: '2015年6月',
          text: '143',
          col: '1'
        },
        {
          key: '2015年7月',
          text: '143',
          col: '1'
        },
        {
          key: '2015年8月',
          text: '143',
          col: '1'
        },
        {
          key: '2015年9月',
          text: '143',
          col: '1'
        },
        {
          key: '2015年10月',
          text: '143',
          col: '1'
        },
        {
          key: '2015年11月',
          text: '143',
          col: '1'
        },
        {
          key: '2015年12月',
          text: '143',
          col: '1'
        }],
      }
    });
  }
  render() {
    //alert(JSON.stringify(this.state.data));
    return (

      <View style={{ flex: 1, margin: 10 }}>
        <ScrollView>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text style={{ flex: 1 }}>本次应缴党费：</Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon name='rmb' size={18} color='gold' />
              <Text>  143</Text>
            </View>
          </View>
          <EmptyView h={10}/>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text style={{ flex: 1 }}>历史已缴党费：</Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon name='rmb' size={18} color='gold' />
              <Text>  10000</Text>
            </View>
          </View>
          <EmptyView h={10}/>
          <View style={{ height: 1, backgroundColor: 'grey' }} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 5 }}>
            <Button bordered style={{ justifyContent: 'center', height: 20 }} onPress={this.onShowNow.bind(this)}><Text>2017年</Text></Button>
            <Button bordered style={{ justifyContent: 'center', height: 20 }} onPress={this.onShowPast1.bind(this)}><Text>2016年</Text></Button>
            <Button bordered style={{ justifyContent: 'center', height: 20 }} onPress={this.onShowPast2.bind(this)}><Text>2015年</Text></Button>
          </View>
          <EmptyView h={20}/>
          <FlatList
            data={this.state.data.flatListData}
            horizontal={false}
            numColumns={3}
            columnWrapperStyle={{ justifyContent: 'space-around' }}
            renderItem={this._renderItemComponent}
          />
        </ScrollView>
      </View >
    );
  }
}

export default PartyFee;