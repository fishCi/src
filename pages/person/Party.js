import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl, Dimensions } from 'react-native';
import { Content, Icon, Left, Body, Right, List, ListItem, Separator, Text, Button, Thumbnail, ActivityIndicator } from 'native-base';
import common from '../../common';
import MenuItem from './menuItem';
import Timeline from 'react-native-timeline-listview';
import EmptyView from '../../components/EmptyView';
import { fetchPost } from '../../utils/fetchAPI';


class Party extends Component {

  constructor() {
    super();
    this.state = {
      ready: false
    };
  }

  name = '';
  position = '';
  records = [];

  componentDidMount() {
    fetchPost('A08463101', {
      Pty_Grp_Stm_Usr_ID: '01000364',
    }, this._success.bind(this), this._failure.bind(this))
  }


  _success(resp) {
    if (resp.BK_STATUS == "00") {
      this.name = resp.Usr_Nm;
      this.position = resp.PtyTbr_Org_Nm + ' ' + resp.PtyBr_Org_Nm + ' ' + resp.PtyTm_Org_Nm
      for (let i = 0; i < resp.LIST1.length; i++) {
        let item = {
          lineColor: 'red',
          icon: require('../../img/person/dang.png'),
          time: '',
          title: '',
          description: ''
        };
        item.time = resp.LIST1[i].Rsm_StDt;
        item.title = resp.LIST1[i].PtyTbr_Org_Nm + ' ' + resp.LIST1[i].PtyBr_Org_Nm + ' ' + resp.LIST1[i].PtyTm_Org_Nm
        item.description = '党员'
        this.records.push(item);
      }
      this.setState({ ready: true })
    } else {
      alert(resp.BK_DESC)
    }
  };

  _failure(error) {
    alert(error);
  };

  render() {
    const { ready } = this.state;
    return (
      <View>
        <ScrollView>
          <List>
            <ListItem>
              <Thumbnail square size={80} source={require('../../img/person/hongjun.png')} />
              <Body>
                <Text>{this.name}</Text>
                <Text note>{this.position}</Text>
              </Body>
            </ListItem>
          </List>
          <View style={styles.container}>
            <Text style={{ fontWeight: 'bold' }}>党员历程</Text>
            <Timeline
              style={styles.list}
              data={this.records}
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