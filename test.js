/**
 * Module dependencies.
 */
const TopClient = require( './topClient' ).TopClient;
const client = new TopClient({
    'appkey' : 'yourappkey' ,
    'appsecret' : 'yourappsecret' ,
    'REST_URL' : 'http://gw.api.taobao.com/router/rest'
});

client.execute( 'alibaba.aliqin.fc.sms.num.send' , {
    'extend' : '' ,
    'sms_type' : 'normal' ,
    'sms_free_sign_name' : 'yoursms_free_sign_name' ,
    'sms_param':'{\"code\":\"123123\"}',
    'rec_num' : 'yourphonenum' ,
    'sms_template_code' : "yoursms_template_code"
}, function(error, response) {
    if (!error) console.log(response);
    else console.log(error);
});