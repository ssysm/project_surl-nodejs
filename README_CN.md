
[Click here for English](README.md)

# 由ssysm创建的PROJECT_SURL-nodejs项目

基于NodeJS和MongoDB的简易URL缩短器

----------------------------------------

# 先试一下呗

暂时没有试用网站，[PHP](http://theeditor.studio)版本已有


-----------------------------------------
# 使用说明

1.`git clone https://github.com/ssysm/project_surl-nodejs`.

2.创建数据库"`project_surl`"并创建collection"`url`".

3.`npm install && npm start`

4.转至`localhost:3000`(端口可在`/bin/www`切换)

5.大功告成

-----------------------------------------

# API使用方法

本版本自带API端口

API地址: `您的网址/api/`

长链接入口: `您的网址/api/?request=长链接`

成功JSON返回数据样本:``` {
"requset": {
"status": "OK",
"url": "LONG_URL"
},
"response": {
"surl": "SHORTEN_URL"
}
} ```

-----------------------------------------

# 已知bug

1.SEO问题.

--------------------------------------------

# 本项目使用的其他资源

SweetAlert -> https://github.com/t4t5/sweetalert
BootStrap -> https://github.com/twbs/bootstrap

--------------------------------------------

# 准备要做的大事情

1.解决已知bug

2.制作一个安装器

3.制作一个管理界面

---------------------------------------------

# Made by ssysm for TheEditorStudio