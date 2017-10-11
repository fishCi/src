/*
 * @Author: zhaozheng1.zh 
 * @Date: 2017-09-11 14:57:49 
 * @Last Modified by: zhaozheng1.zh
 * @Last Modified time: 2017-10-11 09:14:07
 */
import React, { Component } from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Container, Item, Input, Header, Body, Content, Title, Button, Text, Spinner, Label, Toast, Root } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import common from '../common'
import { fetchPost } from '../utils/fetchAPI'



const validate = values => {
    const error = {};
    error.name = '';
    error.password = '';
    var nm = values.name;
    var pw = values.password;
    if (values.name === undefined) {
        nm = '';
    }
    if (values.password === undefined) {
        pw = '';
    }
    // if (nm.length < 8 && nm !== '') {
    //     error.name = 'too short';
    // }
    // if (!ema.includes('@') && ema !== '') {
    //     error.email = '@ not included';
    // }
    if (pw.length > 8) {
        error.password = 'max 8 characters';
    }
    return error;
};

const submit = (values, navigate) => {
    fetchPost('A08461101', {
        Usr_Nm: values.name,
        Usr_Pswd: values.password,
        Move_Tel_No: '',
        Rsrv_Fld1: '',
        Rsrv_Fld2: '',
    }, resp => success(resp, navigate), failure)

    // const json = await this.fetchUser();
    // if (json.results[0].login.username == values.name
    //     && json.results[0].login.password == values.password) {
    //     navigate('Home');
    // } else {
    //     Toast.show({
    //         text: '登录失败!',
    //         position: 'bottom',
    //         buttonText: 'OK',
    //         type:'danger',
    //         duration:2000
    //     })
    // }

    // const testdata = [{
    //     title: '北京开发中心运动会',
    //     address: '晓月楼412',
    //     type: '党员活动',
    //     // secondtype: '',
    //     content: '党员活动内容',
    //     tip: '带好防暑装备',
    //     isreg: false,
    //     starttime: '2017-09-20 00:00',
    //     endtime: '2017-09-20 12:00',
    //     regstarttime: '',
    //     regendtime: '',
    //     host: '张三',
    //     phone: '88888888'
    // },
    // {
    //     title: '团员植树节',
    //     address: '致真大厦1010',
    //     type: '团员活动',
    //     // secondtype: '',
    //     content: '植树造林，减少碳排放',
    //     tip: '带好防暑装备',
    //     isreg: false,
    //     starttime: '2017-08-10 11:00',
    //     endtime: '2017-08-10 17:00',
    //     regstarttime: '',
    //     regendtime: '',
    //     host: '李四',
    //     phone: '18569547212'
    // }

    // ]
    // await storage.save({
    //     key: 'Activity',
    //     id: testdata[0].title,
    //     data: JSON.stringify(testdata[0]),
    //     // expires: 1000 * 3600 
    // })
    // await storage.save({
    //     key: 'Activity',
    //     id: testdata[1].title,
    //     data: JSON.stringify(testdata[1]),
    //     // expires: 1000 * 3600 
    // })

    // if ('test' == values.name
    //     && 'test' == values.password) {
    //     navigate('Home');
    // } else {
    //     Toast.show({
    //         text: '登录失败!',
    //         position: 'bottom',
    //         buttonText: 'OK',
    //         type: 'danger',
    //         duration: 2000
    //     })
    // }
}

function success(resp, navigate) {
    if (resp.BK_STATUS == "00") {
        storage.save({
            key: 'user',
            data: JSON.stringify(resp),
            // expires: 1000 * 3600 
        }).then(() => navigate('Home'))
    } else {
        Toast.show({
            text: resp.BK_DESC,
            position: 'bottom',
            buttonText: 'OK',
            type: 'danger',
            duration: 4000
        })
    }
};

function failure(error) {
    Toast.show({
        text: error,
        position: 'bottom',
        buttonText: 'OK',
        type: 'danger',
        duration: 4000
    })
};



class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.renderInput = this.renderInput.bind(this);
    }

    renderInput({ input, meta: { touched, error, warning } }) {
        var hasError = false;
        if (error !== undefined) {
            hasError = true;
        }
        return (
            <Item error={hasError} inlineLabel style={{ width: common.width * 4 / 5 }}>
                <Label>{input.name == 'name' ? '用户名:' : '密码:'}</Label>
                {input.name == 'name' ? <Input {...input} /> : <Input {...input} secureTextEntry />}
                {hasError ? <Text style={{ color: 'red' }}>{error}</Text> : <Text />}
            </Item>
        )
    }
    render() {
        const { handleSubmit, navigation: { navigate } } = this.props;
        return (
            <Root>
                <ImageBackground style={styles.backgroundImage} source={require('../img/yangguang.png')} resizeMode='cover'>
                    <Container style={styles.userform}>
                        <Content padder>
                            <Image source={require('../img/CCB.png')} style={{ alignSelf: 'center' }} />
                            <Field name='name' component={this.renderInput} />
                            <Field name='password' component={this.renderInput} />
                            <Button rounded primary small style={styles.loginbtn} onPress={handleSubmit(values => { submit(values, navigate) })}>
                                <Text> 登陆</Text>
                            </Button>
                        </Content>
                    </Container>
                </ImageBackground>
            </Root>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    userform: {
        marginTop: common.height / 3
    },
    loginbtn: {
        width: common.width / 3,
        marginTop: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default reduxForm({
    form: 'loginform',
    validate
})(LoginForm)


