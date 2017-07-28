[中文请戳这里](README_CN.md)

[Click here for English](README.md)

# PROJECT_SURL-NodeJS created by ssysm

A simple URL shortener base on NodeJS & MongoDB

If your need to run on PHP&MySql System [Click Me](https://github.com/ssysm/project_surl)

----------------------------------------

# Try it before you install

 Not Yet... Try with the [PHP](http://theeditor.studio) verison


-----------------------------------------
# Install & RUN

1.Clone this repository.

2.Create database called `project_surl` & collection called `url`.

3.```npm install && npm start```

4.Go to Your Browser and type  `localhost:3000` (Port can be changed in /bin/www)

5.Have fun with it!

-----------------------------------------

# ATTENTION - IMPORTANT

- When User Access they need type `WEB_ADDRESS.com/go/SHORTEN_URL`

-----------------------------------------
# API Usage

This Verison of Project_SURL include API

API address: `YOUR_WEB_ADDRESS/api/`

Long URL Entry: `YOUR_WEB_ADDRESS/api/?request=LONG_URL`

Return JSON Example:``` {
"requset": {
"status": "OK",
"url": "LONG_URL"
},
"response": {
"surl": "SHORTEN_URL"
}
} ```

-----------------------------------------

# Know Issue

1.SEO issue need to be solve.

--------------------------------------------

# Extra Component Used

SweetAlert -> https://github.com/t4t5/sweetalert

BootStrap -> https://github.com/twbs/bootstrap

--------------------------------------------

# To-Do List 

1.Solve Know Issue

2.Make a installer

3.Add support for admin panel

---------------------------------------------

# Made by ssysm for TheEditorStudio