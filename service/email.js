var nodemailer = require('nodemailer'); //引入nodemailer模块
var config = require('../config/con_email');//引入配置文件
var transporter = nodemailer.createTransport({
    service:config.email.service, //用的服务
    auth:{
        user:config.email.user, //发件人账号
        pass:config.email.pass  //发件人密码
    }
});
var mailOptions = {
    from:config.email.user, //发信人的账号
    to:'hackshen.com@gmail.com', //收信人账号
    subject:'Email Title', //邮件标题
    html: `<p>发信测试</p>` //邮件内容
};
transporter.sendMail(mailOptions,function(err,info){
    if(err){
        console.log(err);
        return;
    }
    console.log('Successful!😀')
})

module.exports = transporter;