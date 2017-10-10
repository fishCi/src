import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl, Dimensions } from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Separator, Left, Right } from 'native-base';
import common from '../../common'
import EmptyView from '../../components/EmptyView'
import Icon from 'react-native-vector-icons/Ionicons';

export default class Person extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Thumbnail square size={80} source={require('../../img/person/hongjun.png')} />
              <Body>
                <Text>张三</Text>
                <Text note>中国建设银行 北京开发中心</Text>
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
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Party')}>
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
      </Container>
    );
  }
}