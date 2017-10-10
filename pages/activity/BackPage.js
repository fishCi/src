/*
 * @Author: zhaozheng1.zh 
 * @Date: 2017-09-29 10:47:42 
 * @Last Modified by: zhaozheng1.zh
 * @Last Modified time: 2017-09-30 16:00:44
 */

import React, { Component } from 'react';
import { LayoutAnimation, UIManager, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Text, Card, CardItem } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import common from '../../common'
import { fetchPost } from '../../utils/fetchAPI';

export default class BackPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            address: '',
            description: '',
            type: '',
            // secondtype: '',
            detail: '',
            tip: '',
            isreg: '',
            starttime: '',
            endtime: '',
            regstarttime: '',
            regendtime: '',
            host: '',
            phone: '',

            hasReg: ''
        }
    }

    componentDidMount() {
        fetchPost('A08464103', {
            Pty_Grp_Avy_ID: this.props.actId,
            Pty_Grp_Stm_Usr_ID: '12345678'
        }, this._success.bind(this), this._failure.bind(this))

    }


    _transferST(dt, tm) {
        return dt.substring(0, 4) + '-' + dt.substring(4, 6) + '-' + dt.substring(6, 8) + ' ' + tm.substring(0, 2) + ':' + tm.substring(2, 4)
    }

    _success(resp) {
        this.setState({
            refreshing: false,
        });
        if (resp.BK_STATUS == "00") {
            this.setState({
                title: resp.Pty_Grp_Avy_Nm,
                address: resp.Pty_Grp_Avy_Plc_CntDsc,
                description: resp.Pty_Grp_Avy_CntDsc,
                type: resp.Pty_Grp_Avy_CLCd,
                // secondtype: '',
                detail: resp.Pty_Grp_Avy_Dtl_CntDsc,
                tip: resp.PtyGrpAvy_Ancm_CntDsc,
                isreg: resp.Pty_Grp_Avy_Rgst_Ind,
                starttime: this._transferST(resp.Pty_Grp_Avy_StDt, resp.Pty_Grp_Avy_StTm),
                endtime: this._transferST(resp.Pty_Grp_Avy_EdDt, resp.Pty_Grp_Avy_EdTm),
                regstarttime: this._transferST(resp.Pty_Grp_Avy_Rgst_StDt, resp.Pty_Grp_Avy_Rgst_StTm),
                regendtime: this._transferST(resp.Pty_Grp_Avy_Rgst_EdDt, resp.Pty_Grp_Avy_Rgst_EdTm),
                host: resp.Pty_Grp_Avy_CtcPsn_Nm,
                phone: resp.PtyGrpAvyCtcPsn_TelNo,

                hasReg:resp.PcpPty_Grp_Avy_TpCd
            });
        } else {
            alert(resp.BK_DESC)
        }
    };

    _failure(error) {
        alert(error);
    };

    render() {
        return (
            <Card>
                <CardItem header style={{ backgroundColor: 'blue', flexDirection: 'row', height: 30 }}>
                    <Text style={{ height: 20, textAlign: 'center', fontWeight: '200', alignSelf: 'center', color: 'white' }}>详情信息</Text>
                    <Icon.Button name='ios-create-outline' color='white' backgroundColor='blue' style={{ alignSelf: 'flex-end', marginRight: 60 }} size={20} onPress={() => this.props.nav('Create', { form: this._getFormProps() })} />
                </CardItem>
                <CardItem style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Left>
                            <Text style={styles.left}>活动名称: </Text>
                        </Left>
                        <Body>
                            <Text style={styles.right}>{this.state.title}</Text>
                        </Body>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Left>
                            <Text style={styles.left}>活动开始时间: </Text>
                        </Left>
                        <Body>
                            <Text style={styles.right}>{this.state.starttime}</Text>
                        </Body>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Left>
                            <Text style={styles.left}>活动结束时间: </Text>
                        </Left>
                        <Body>
                            <Text style={styles.right}>{this.state.endtime}</Text>
                        </Body>
                    </View>
                    {this.state.isreg == '1' &&
                        <View style={{ flexDirection: 'row' }}>
                            <Left>
                                <Text style={styles.left}>活动报名开始时间: </Text>
                            </Left>
                            <Body>
                                <Text style={styles.right}>{this.state.regstarttime}</Text>
                            </Body>
                        </View>
                    }
                    {this.state.isreg == '1' &&
                        <View style={{ flexDirection: 'row' }}>
                            <Left>
                                <Text style={styles.left}>活动报名结束时间: </Text>
                            </Left>
                            <Body>
                                <Text style={styles.right}>{this.state.regendtime}</Text>
                            </Body>
                        </View>
                    }
                    <View style={{ flexDirection: 'row' }}>
                        <Left>
                            <Text style={styles.left}>活动内容详情: </Text>
                        </Left>
                        <Body>
                            <Text style={styles.right}>{this.state.detail}</Text>
                        </Body>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Left>
                            <Text style={styles.left}>活动地点: </Text>
                        </Left>
                        <Body>
                            <Text style={styles.right}>{this.state.address}</Text>
                        </Body>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Left>
                            <Text style={styles.left}>温馨提示: </Text>
                        </Left>
                        <Body>
                            <Text style={styles.right}>{this.state.tip}</Text>
                        </Body>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Left>
                            <Text style={styles.left}>联系人: </Text>
                        </Left>
                        <Body>
                            <Text style={styles.right}>{this.state.host}</Text>
                        </Body>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Left>
                            <Text style={styles.left}>联系人电话: </Text>
                        </Left>
                        <Body>
                            <Text style={styles.right}>{this.state.phone}</Text>
                        </Body>
                    </View>
                </CardItem>
                <View style={{ height: 1, backgroundColor: 'lightgray' }} />
                <CardItem footer>
                    {this.state.hasReg == '00'? <Button block success onPress={this.registe} style={{ flex: 1, height: 30 }}><Text>报名</Text></Button>
                    : <Button block disabled onPress={this.registe} style={{ flex: 1, height: 30 }}><Text>已报名</Text></Button> }
                </CardItem>
            </Card>
        )
    }

    registe = () => {
        fetchPost('A08464105', {
            Pty_Grp_Avy_ID: this.props.actId,
            Pty_Grp_Stm_Usr_ID: '87654321'
        },
            (resp) => {
                if (resp.BK_STATUS == "00" &&  resp.ScsInd == "0" ) {
                    this.setState({hasReg:'01'})
                }else{
                    alert(resp.BK_DESC)
                }
            },
            (error) => {
                alert(error)
            }
        )
    }

    _getFormProps = () => {
        let res = {
            actId: this.props.actId,
            title: this.state.title,
            address: this.state.address,
            description: this.state.description,
            type: this.state.type,
            // secondtype: this.state.secondtype,
            detail: this.state.detail,
            tip: this.state.tip,
            isreg: this.state.isreg == '1' ? true : false,
            starttime: this.state.starttime,
            endtime: this.state.endtime,
            regstarttime: this.state.regstarttime,
            regendtime: this.state.regendtime,
            host: this.state.host,
            phone: this.state.phone
        };
        return res;
    }

}


const styles = StyleSheet.create({
    cardheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 30
    },
    cardbody: {
        alignItems: 'stretch',
        flexDirection: 'column',
        padding: 10,
    },
    cardfooter: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: 30
    },
    left: {
        fontSize: 12,
    },
    right: {
        fontSize: 12,
        color: 'grey'
    },
});
