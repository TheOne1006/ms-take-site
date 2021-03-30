import chineseMessages from 'ra-language-chinese';

export const messages = {
    ...chineseMessages,
    resources: {
        phones: {
          name: '手机号码 |||| 号码列表',
          filters: {
            area: '地区',
            area_cn: '中国大陆',
            area_hk: '中国香港',
            activeDays: '最近几天',
            last_1_day: '1天',
          },
          fields: {
            phoneCode: '手机号码',
            areaPrefix: '区域',
            activeDate: '最后活跃日期',
            site: '来源网站',
            siteUrl: '来源网址',
          },
        },
        messages: {
          name: '短信 |||| 短信列表',
          filters: {
            receiveTime: '收与',
            last_1_hour: '1小时内 ',
            last_half_day: '12小时内',
            last_1_quarter: '15分钟',
          },
          fields: {
            phoneCode: '手机号码',
            areaPrefix: '区域',
            fromFlag: '来自',
            code: '验证码',
            text: '信息内容',
            receiveTime: '接收时间',
            fromPhoneCode: '发送号码',
          },
        }
    },
    phones: {
      name: '手机号码',
      fields: {
        phoneCode: '手机号码'
      }
    },
    messages: {
      name: '短信信息',
      fields: {
        phoneCode: '手机号码'
      }
    }
};

export default messages;
