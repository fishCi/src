import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl, Dimensions } from 'react-native'
import { Content, Icon, Left, Body, Right, List, ListItem, Separator, Text,Button,Thumbnail} from 'native-base';
import common from '../../common'
import MenuItem from './menuItem'
import Timeline from 'react-native-timeline-listview'
import EmptyView from '../../components/EmptyView'

class Party extends Component {

  constructor() {
    super()
    this.onEventPress = this.onEventPress.bind(this)
    this.renderSelected = this.renderSelected.bind(this)

    this.data = [
      {
        time: '2015年8月',
        title: '北京开发中心第二党支部',
        description: '党委书记',
        lineColor: 'red',
        icon: require('../../img/person/dang.png'),
      },
      {
        time: '2014年3月',
        title: '北京开发中心第二党支部第一党小组',
        description: '党委书记',
        lineColor: 'red',
        icon: require('../../img/person/dang.png'),
      },
      {
        time: '2013年12月',
        title: '北京开发中心第一党支部第一党小组',
        description: '党委书记',
        lineColor: 'red',
        icon: require('../../img/person/dang.png'),
      },
      {
        time: '2012年9月',
        title: '北京开发中心第一党支部第一党小组',
        description: '党员',
        lineColor: 'red',
        icon: require('../../img/person/dang.png'),
      }
    ]
    this.state = { selected: null }
  }

  onEventPress(data) {
    this.setState({ selected: data })
  }

  renderSelected() {
    // if (this.state.selected)
    //   return <Text>{this.state.selected.title}   {this.state.selected.time}</Text>
  }

  render() {
    return (
      <View>
      <ScrollView>
      <List>
      <ListItem>
        <Thumbnail square size={80} source={require('../../img/person/hongjun.png')} />
        <Body>
          <Text>张三</Text>
          <Text note>北京开发中心党总支 第一党支部 第一党小组</Text>
        </Body>
      </ListItem>
      </List>
        {
          // <Image style={styles.snowImg} source={require('../../img/person/bc.png')} />
          // <View style={styles.userContainer}>
          //   <TouchableOpacity onPress={() => this.props.navigation.navigate('UserInfo')}>
          //     <Image style={styles.avatar} source={require('../../img/person/hongjun.png')} />
          //   </TouchableOpacity>
          //   <View style={{ flex:1,flexDirection: 'row',alignItems:'center'}}>
          //     <Text style={[styles.heading, { fontWeight: 'bold' }]}>张三</Text>
          //     <View>
          //       <Text style={[styles.p, { marginTop: 4 }]}>北京开发中心党总支</Text>
          //       <Text style={[styles.p, { marginTop: 4 }]}>第一党支部  第一党小组</Text>
          //     </View>
          //   </View>
          // </View>
        }

        <View style={styles.container}>
          <Text style={{ fontWeight: 'bold' }}>党员历程</Text>
          {this.renderSelected()}
          <Timeline
            style={styles.list}
            data={this.data}
            circleSize={20}
            circleColor='rgba(0,0,0,0)'
            lineColor='rgb(45,156,219)'
            timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
            timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13, fontSize: 12 }}
            titleStyle={{ fontSize: 12 }}
            descriptionStyle={{ color: 'gray', fontSize: 10 }}
            options={{
              style: { paddingTop: 5 }
            }}
            innerCircle={'icon'}
            onEventPress={this.onEventPress}
            separator={false}
            detailContainerStyle={{ marginBottom: 20, paddingLeft: 5, paddingRight: 5, backgroundColor: "#BBDAFF", borderRadius: 10 }}
            columnFormat='two-column'
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 100, marginBottom: 20 }}>
          <Button bordered danger onPress={() => this.props.navigation.navigate('PartyFee')} style={{ height: 30 }}>
            <Text style={{ color: 'red' }}>缴纳党费</Text>
          </Button>
          <Button bordered danger onPress={() => this.props.navigation.navigate('PartyInfo')} style={{ height: 30 }}>
            <Text style={{ color: 'red' }}>革命战友</Text>
          </Button>
        </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 14,
    color: 'black',
    marginRight: 20
  },
  p: {
    fontSize: 10,
    color: 'indianred'
  },
  snowImg: {
    width: common.width,
    height: common.width * 7 / 15,
  },
  userContainer: {
    position: 'absolute',
    flexDirection: 'row',
    marginTop: 60,
    marginLeft: 60,
  },
  avatar: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#51D3C6'
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10
    // backgroundColor: 'white'
  },
  list: {
    flex: 1,
    marginTop: 10,
  },
  descriptionContainer: {
    flexDirection: 'row',
    paddingRight: 50
  },
  textDescription: {
    marginLeft: 10,
    color: 'gray'
  }

});

export default Party;