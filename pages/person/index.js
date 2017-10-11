import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl, Dimensions } from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Separator, Left, Right } from 'native-base';
import common from '../../common'
import EmptyView from '../../components/EmptyView'
import Icon from 'react-native-vector-icons/Ionicons';
import { getUser } from '../../utils/StorageUtil'

export default class Person extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ready: false
    }
  }

  name = '';
  dscp = '中国建设银行 北京开发中心';
  pos = '';
  records = '';


  async componentDidMount() {
    u = await getUser();
    fetchPost('A08463101', {
      Pty_Grp_Stm_Usr_ID: u.Pty_Grp_Stm_Usr_ID,
    }, this._success.bind(this), this._failure.bind(this))
  }


  _success(resp) {
    if (resp.BK_STATUS == "00") {
      this.name = resp.Usr_Nm;
      this.dscp = resp.Wrk_Unit_Nm + ' ' + resp.Blng_Dept_Nm
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
        item.description = '01'
        this.records.push(item);
      }
      this.setState({ ready: true })
      // storage.save({
      //   key: 'partyInfo',
      //   data: JSON.stringify(resp),
      //   // expires: 1000 * 3600 
      // }).then(() => this.setState({ ready: true }))
    } else {
      alert(resp.BK_DESC)
    }
  };

  _failure(error) {
    alert(error);
  };


  _page = () => {
    return (
        <Content>
          <List>
            <ListItem>
              <Thumbnail square size={80} source={require('../../img/person/hongjun.png')} />
              <Body>
                <Text>{this.name}</Text>
                <Text note>{this.dscp}}</Text>
              </Body>
            </ListItem>
            <Separator />
            <ListItem icon>
              <Left>
                <Icon name='ios-contact-outline' size={25} color='skyblue' />
              </Left>
              <Body>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('PersonInfo')}>
                  <Text>基本信息</Text>
                </TouchableOpacity>
              </Body>
              <Right>
                <Icon name='ios-arrow-forward-outline' size={25} color='black' />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name='ios-people-outline' size={25} color='skyblue' />
              </Left>
              <Body>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Party', { name: this.name, position: this.pos, records: this.records,desp:this.description})}>
                  <Text>组织关系</Text>
                </TouchableOpacity>
              </Body>
              <Right>
                <Icon name='ios-arrow-forward-outline' size={25} color='black' />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name='ios-book-outline' size={25} color='skyblue' />
              </Left>
              <Body>
                <Text>岗位能力</Text>
              </Body>
              <Right>
                <Icon name='ios-arrow-forward-outline' size={25} color='black' />
              </Right>
            </ListItem>
            <Separator />
            <ListItem icon>
              <Left>
                <Icon name='ios-hand-outline' size={25} color='skyblue' />
              </Left>
              <Body>
                <Text>我的权益</Text>
              </Body>
              <Right>
                <Icon name='ios-arrow-forward-outline' size={25} color='black' />
              </Right>
            </ListItem>
            <Separator />
            <ListItem icon>
              <Left>
                <Icon name='ios-build-outline' size={25} color='skyblue' />
              </Left>
              <Body>
                <Text>设置</Text>
              </Body>
              <Right>
                <Icon name='ios-arrow-forward-outline' size={25} color='black' />
              </Right>
            </ListItem>
            <Separator />
          </List>
        </Content>
    );

  }

  render() {
    return (
      <Container>
        {this.state.ready ? this._page() : <ActivityIndicator size="large" />}
      </Container>
    );
  }
}