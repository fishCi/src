/*
* @Author: miaoxinyu.zh
* @Date:   2017-08-22 06:06:10
 * @Last Modified by: zhaozheng1.zh
 * @Last Modified time: 2017-09-27 06:56:37
*/

_getPID = (v1,v2)=>{
    let info = {
        sj: `赵${v1}`,
        fsj: `钱${v1}`,
        jw: `孙${v1}`,
        zw: `李${v1}`,
        xw: `周${v1}`,
        groupData: {
          zz: `吴${v2}`,
          zy: `郑${v2}，王${v2}，冯${v2}，陈${v2}，褚${v2}，卫${v2}，蒋${v2}，沈${v2}，韩${v2}，杨${v2}`
        }
    };
    return info;
}


export function getPartyInfoData (branch,group){
    let v1 = '一'
    let v2 = '一一'
    if(branch === '第一党支部' && group === '第二党小组')  {v1= '一'; v2 = '一二'};
    if(branch === '第二党支部' && group === '第一党小组')  {v1= '二'; v2 = '二一'};
    if(branch === '第二党支部' && group === '第二党小组')  {v1= '二'; v2 = '二二'};
    return _getPID(v1,v2)
}

