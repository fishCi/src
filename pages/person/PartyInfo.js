/*
* @Author: miaoxinyu.zh
* @Date:   2017-08-22 06:06:10
 * @Last Modified by: zhaozheng1.zh
 * @Last Modified time: 2017-09-27 09:34:17
*/

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor,
  ScrollView,
  Image
} from 'react-native';
import { Button, H1, H2, H3, Picker, Item } from 'native-base';
import ModalDropdown from 'react-native-modal-dropdown';
import { getPartyInfoData } from '../../utils/PartyData'
import Icon from 'react-native-vector-icons/Ionicons';
import { PieChart } from 'react-native-charts-wrapper';

class PartyInfo extends React.Component {

  constructor() {
    super();

    this.state = {
      position: 'zongzhi', //enum：zongzhi，zhibu
      branch: '第一党支部',
      group: '第一党小组',
      legend: {
        enabled: true,
        textSize: 8,
        form: 'CIRCLE',
        position: 'RIGHT_OF_CHART',
        wordWrapEnabled: true
      },
      data: {
        dataSets: [{
          values: [{ value: 350, label: '男' },
          { value: 221, label: '女' }],
          label: '性别区分',
          config: {
            colors: [processColor('#C0FF8C'), processColor('#FF8C9D')],
            valueTextSize: 20,
            valueTextColor: processColor('green'),
            sliceSpace: 5,
            selectionShift: 13
          }
        }],
      },
      description: {
        text: ''
      }
    };
  }

  handleSelect(event) {
    let entry = event.nativeEvent
    if (entry == null) {
      this.setState({ ...this.state, selectedEntry: null })
    } else {
      this.setState({ ...this.state, selectedEntry: JSON.stringify(entry) })
    }
  }
  onShowSex() {
    var thiz = this;
    if (this.state.position === 'zhibu') {
      switch (this.state.branch) {
        case '第一党支部':
          this.setState({
            data: {
              dataSets: [{
                values: [{ value: PartyData.JsonDatasexOne[0].value, label: PartyData.JsonDatasexOne[0].label },
                { value: PartyData.JsonDatasexOne[1].value, label: PartyData.JsonDatasexOne[1].label }],
                label: '性别区分',
                config: {
                  colors: [processColor('#C0FF8C'), processColor('#FF8C9D')],
                  valueTextSize: 20,
                  valueTextColor: processColor('green'),
                  sliceSpace: 5,
                  selectionShift: 13
                }
              }],
            }
          });
          break;
        case '第二党支部':
          this.setState({
            data: {
              dataSets: [{
                values: [{ value: 22, label: '男' },
                { value: 10, label: '女' }],
                label: '性别区分',
                config: {
                  colors: [processColor('#C0FF8C'), processColor('#FF8C9D')],
                  valueTextSize: 20,
                  valueTextColor: processColor('green'),
                  sliceSpace: 5,
                  selectionShift: 13
                }
              }],
            }
          });
          break;
        default:
          this.setState({
            data: {
              dataSets: [{
                values: [{ value: 16, label: '男' },
                { value: 16, label: '女' }],
                label: '性别区分',
                config: {
                  colors: [processColor('#C0FF8C'), processColor('#FF8C9D')],
                  valueTextSize: 20,
                  valueTextColor: processColor('green'),
                  sliceSpace: 5,
                  selectionShift: 13
                }
              }],
            }
          });
      }

    } else {
      thiz.setState({
        data: {
          dataSets: [{
            values: [{ value: 350, label: '男' },
            { value: 221, label: '女' }],
            label: '性别区分',
            config: {
              colors: [processColor('#C0FF8C'), processColor('#FF8C9D')],
              valueTextSize: 20,
              valueTextColor: processColor('green'),
              sliceSpace: 5,
              selectionShift: 13
            }
          }],
        }
      });
    }

  }

  onShowDiploma() {
    // console.log(JSON.stringify(this.state.data))
    var thiz = this;

    if (this.state.position === 'zhibu') {
      switch (this.state.branch) {
        case '第一党支部':
          this.setState({
            data: {
              dataSets: [{
                values: [{ value: 5, label: '专科' },
                { value: 8, label: '大学本科' },
                { value: 13, label: '硕士研究生' },
                { value: 3, label: '博士研究生' },
                { value: 2, label: '其他' }],
                label: '学历区分',
                config: {
                  colors: [processColor('#C0FF8C'), processColor('#FFF78C'), processColor('#FFD08C'), processColor('#FF8C9D'), processColor('#8CEAFF')],
                  valueTextSize: 20,
                  valueTextColor: processColor('green'),
                  sliceSpace: 5,
                  selectionShift: 13
                }
              }],
            }
          });
          break;
        case '第二党支部':
          this.setState({
            data: {
              dataSets: [{
                values: [{ value: 2, label: '专科' },
                { value: 9, label: '大学本科' },
                { value: 15, label: '硕士研究生' },
                { value: 8, label: '博士研究生' },
                { value: 7, label: '其他' }],
                label: '学历区分',
                config: {
                  colors: [processColor('#C0FF8C'), processColor('#FFF78C'), processColor('#FFD08C'), processColor('#FF8C9D'), processColor('#8CEAFF')],
                  valueTextSize: 20,
                  valueTextColor: processColor('green'),
                  sliceSpace: 5,
                  selectionShift: 13
                }
              }],
            }
          });
          break;
        default:
          this.setState({
            data: {
              dataSets: [{
                values: [{ value: 5, label: '专科' },
                { value: 9, label: '大学本科' },
                { value: 21, label: '硕士研究生' },
                { value: 3, label: '博士研究生' },
                { value: 0, label: '其他' }],
                label: '学历区分',
                config: {
                  colors: [processColor('#C0FF8C'), processColor('#FFF78C'), processColor('#FFD08C'), processColor('#FF8C9D'), processColor('#8CEAFF')],
                  valueTextSize: 20,
                  valueTextColor: processColor('green'),
                  sliceSpace: 5,
                  selectionShift: 13
                }
              }],
            }
          });
      }

    } else {
      thiz.setState({
        data: {
          dataSets: [{
            values: [{ value: 15, label: '专科' },
            { value: 98, label: '大学本科' },
            { value: 221, label: '硕士研究生' },
            { value: 38, label: '博士研究生' },
            { value: 27, label: '其他' }],
            label: '学历区分',
            config: {
              colors: [processColor('#C0FF8C'), processColor('#FFF78C'), processColor('#FFD08C'), processColor('#FF8C9D'), processColor('#8CEAFF')],
              valueTextSize: 20,
              valueTextColor: processColor('green'),
              sliceSpace: 5,
              selectionShift: 13
            }
          }],
        }
      });
    }

  }
  onShowType() {
    // console.log(JSON.stringify(this.state.data))
    var thiz = this;
    if (this.state.position === 'zhibu') {
      switch (this.state.branch) {
        case '第一党支部':
          this.setState({
            data: {
              dataSets: [{
                values: [{ value: 5, label: '入党积极分子' },
                { value: 8, label: '预备党员' },
                { value: 21, label: '正式党员' }],
                label: '党员类型区分',
                config: {
                  colors: [processColor('#FFF78C'), processColor('#FFD08C'), processColor('#FF8C9D'),],
                  valueTextSize: 20,
                  valueTextColor: processColor('green'),
                  sliceSpace: 5,
                  selectionShift: 13
                }
              }],
            }
          });
          break;
        case '第二党支部':
          this.setState({
            data: {
              dataSets: [{
                values: [{ value: 3, label: '入党积极分子' },
                { value: 9, label: '预备党员' },
                { value: 22, label: '正式党员' }],
                label: '党员类型区分',
                config: {
                  colors: [processColor('#FFF78C'), processColor('#FFD08C'), processColor('#FF8C9D'),],
                  valueTextSize: 20,
                  valueTextColor: processColor('green'),
                  sliceSpace: 5,
                  selectionShift: 13
                }
              }],
            }
          });
          break;
        default:
          this.setState({
            data: {
              dataSets: [{
                values: [{ value: 3, label: '入党积极分子' },
                { value: 7, label: '预备党员' },
                { value: 18, label: '正式党员' }],
                label: '党员类型区分',
                config: {
                  colors: [processColor('#FFF78C'), processColor('#FFD08C'), processColor('#FF8C9D'),],
                  valueTextSize: 20,
                  valueTextColor: processColor('green'),
                  sliceSpace: 5,
                  selectionShift: 13
                }
              }],
            }
          });
      }

    } else {
      thiz.setState({
        data: {
          dataSets: [{
            values: [{ value: 5, label: '入党积极分子' },
            { value: 98, label: '预备党员' },
            { value: 221, label: '正式党员' }],
            label: '党员类型区分',
            config: {
              colors: [processColor('#FFF78C'), processColor('#FFD08C'), processColor('#FF8C9D'),],
              valueTextSize: 20,
              valueTextColor: processColor('green'),
              sliceSpace: 5,
              selectionShift: 13
            }
          }],
        }
      });
    }
  }

  _dropdown_onSelect = (idx, value) => {
    this.setState({ branch: value });
    switch (value) {
      case '第一党支部':
        this.setState({
          data: {
            dataSets: [{
              values: [{ value: 17, label: '男' },
              { value: 15, label: '女' }],
              label: '性别区分',
              config: {
                colors: [processColor('#C0FF8C'), processColor('#FF8C9D')],
                valueTextSize: 20,
                valueTextColor: processColor('green'),
                sliceSpace: 5,
                selectionShift: 13
              }
            }],
          }
        });
        break;
      case '第二党支部':
        this.setState({
          data: {
            dataSets: [{
              values: [{ value: 22, label: '男' },
              { value: 10, label: '女' }],
              label: '性别区分',
              config: {
                colors: [processColor('#C0FF8C'), processColor('#FF8C9D')],
                valueTextSize: 20,
                valueTextColor: processColor('green'),
                sliceSpace: 5,
                selectionShift: 13
              }
            }],
          }
        });
        break;
      default:
        this.setState({
          data: {
            dataSets: [{
              values: [{ value: 16, label: '男' },
              { value: 16, label: '女' }],
              label: '性别区分',
              config: {
                colors: [processColor('#C0FF8C'), processColor('#FF8C9D')],
                valueTextSize: 20,
                valueTextColor: processColor('green'),
                sliceSpace: 5,
                selectionShift: 13
              }
            }],
          }
        });
    }
  }

  _dropdown_onSelect2 = (idx, value) => {
    this.setState({ group: value });
  }

  _getRandomPie = () => {


  }



  render() {
    info = getPartyInfoData(this.state.branch, this.state.group)
    return (
      <View style={{ flex: 1, margin: 10 }}>
        <ScrollView>
          <View style={{ height: 100, backgroundColor: 'white', flexDirection: 'row', borderTopWidth: 6, borderBottomWidth: 6, borderColor: 'darkblue', marginVertical: 5 }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text style={{ color: 'red', fontWeight: 'bold', marginTop: 10, fontSize: 14 }}>北开党总支</Text>
              <Image source={require('../../img/person/zongzhi.png')} style={{ marginTop: 10 }} />
            </View>
            <View style={{ flex: 2, paddingVertical: 10 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={{ flex: 1, fontSize: 12 }}>书记：林磊明</Text>
                <Text style={{ flex: 1, fontSize: 12 }}>副书记：梁东</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={{ flex: 1, fontSize: 12 }}>纪检委员：侯靖辉</Text>
                <Text style={{ flex: 1, fontSize: 12 }}>组织委员：贾慧</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={{ flex: 1, fontSize: 12 }}>宣传委员：刘宁</Text>
              </View>
            </View>
          </View>

          <View style={{ height: 100, backgroundColor: 'white', flexDirection: 'row', borderTopWidth: 6, borderBottomWidth: 6, borderColor: 'darkblue', marginVertical: 5 }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              {this.state.position === 'zongzhi' ?
                <ModalDropdown dropdownStyle={{ height: 20, width: 40, marginTop: 10 }}
                  options={['第一党支部', '第二党支部']}
                  dropdownStyle={{ alignSelf: 'center', height: 80, borderWidth: 1, borderRadius: 3 }}
                  onSelect={this._dropdown_onSelect}>
                  <View style={{ marginTop: 10, flexDirection: 'row' }}>
                    <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 14 }}>{this.state.branch} </Text>
                    <Icon name='ios-arrow-dropdown' size={18} color='skyblue' />
                  </View>
                </ModalDropdown>
                : <Text style={{ color: 'red', fontWeight: 'bold', marginTop: 10, fontSize: 14 }}>第一党支部</Text>
                
              }
              <Image source={require('../../img/person/zhibu.png')} style={{ marginTop: 10 }} />
            </View>

            <View style={{ flex: 2, paddingVertical: 10 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={{ flex: 1, fontSize: 12 }}>书记: {info.sj}</Text>
                <Text style={{ flex: 1, fontSize: 12 }}>副书记：{info.fsj}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={{ flex: 1, fontSize: 12 }}>纪检委员：{info.jw}</Text>
                <Text style={{ flex: 1, fontSize: 12 }}>组织委员：{info.zw}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={{ flex: 1, fontSize: 12 }}>宣传委员：{info.xw}</Text>
              </View>
            </View>


          </View>

          <View style={{ height: 100, backgroundColor: 'white', flexDirection: 'row', borderTopWidth: 6, borderBottomWidth: 6, borderColor: 'darkblue', marginVertical: 5 }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              {this.state.position === '' ?
                <Text style={{ color: 'red', fontWeight: 'bold', marginTop: 10, fontSize: 14 }}>第一党小组</Text>
                : <ModalDropdown dropdownStyle={{ height: 20, width: 40, marginTop: 10 }}
                  options={['第一党小组', '第二党小组']}
                  dropdownStyle={{ alignSelf: 'center', height: 80, borderWidth: 1, borderRadius: 3 }}
                  onSelect={this._dropdown_onSelect2}>
                  <View style={{ marginTop: 10, flexDirection: 'row' }}>
                    <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 14 }}>{this.state.group} </Text>
                    <Icon name='ios-arrow-dropdown' size={18} color='skyblue' />
                  </View>
                </ModalDropdown>
              }
              <Image source={require('../../img/person/xiaozu.png')} style={{ marginTop: 10 }} />
            </View>
            <View style={{ flex: 2, paddingVertical: 10 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={{ flex: 1, fontSize: 12 }}>党小组组长：{info.groupData.zz}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={{ flex: 1, fontSize: 12 }}>党小组组员：{info.groupData.zy}</Text>
              </View>
            </View>
          </View>
          {this.state.position !== '' &&
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderColor: 'lightgrey', marginVertical: 5, paddingVertical: 5 }}>
                <Button rounded light style={{ justifyContent: 'center', height: 20 }} onPress={this.onShowSex.bind(this)}><Text>性  别</Text></Button>
                <Button rounded light style={{ justifyContent: 'center', height: 20 }} onPress={this.onShowDiploma.bind(this)}><Text>学  历</Text></Button>
                <Button rounded light style={{ justifyContent: 'center', height: 20 }} onPress={this.onShowType.bind(this)}><Text>党员类型</Text></Button>
              </View>
              <View style={{ height: 200 }}>
                <PieChart
                  style={styles.chart}
                  logEnabled={true}
                  // chartBackgroundColor={processColor('pink')}
                  chartDescription={this.state.description}
                  data={this.state.data}
                  legend={this.state.legend}

                  entryLabelColor={processColor('black')}
                  entryLabelTextSize={12}


                  rotationEnabled={false}
                  drawSliceText={true}
                  usePercentValues={false}
                  centerText={'党员信息统计图'}
                  centerTextRadiusPercent={100}
                  holeRadius={40}
                  holeColor={processColor('#f0f0f0')}
                  transparentCircleRadius={45}
                  transparentCircleColor={processColor('#f0f0f088')}
                  maxAngle={360}
                  onSelect={this.handleSelect.bind(this)}
                />
              </View>
            </View>
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chart: {
    flex: 1
  }
});




export default PartyInfo;