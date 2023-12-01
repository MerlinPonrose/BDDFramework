$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Alert.feature");
formatter.feature({
  "name": "Alert scenario",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Alert"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "Validation of Alert Ok button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Alert"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@alert"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click the alertbox button",
  "keyword": "When "
});
formatter.match({
  "location": "Alerttt.user_click_the_alertbox_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@class\u003d\u0027btn btn-danger\u0027]\"}\n  (Session info: chrome\u003d119.0.6045.200)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-PJ5JRQT\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 119.0.6045.200, chrome: {chromedriverVersion: 119.0.6045.105 (38c72552c5e..., userDataDir: C:\\Users\\KARENA~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50317}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b5eb294c59084214cd8acf86be15def4\n*** Element info: {Using\u003dxpath, value\u003d//button[@class\u003d\u0027btn btn-danger\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.bdd.utility.Common.clickElement(Common.java:14)\r\n\tat com.bdd.pages.Alert.clickAlertBox(Alert.java:15)\r\n\tat com.bdd.stepdefinition.Alerttt.user_click_the_alertbox_button(Alerttt.java:15)\r\n\tat ✽.User click the alertbox button(file:Alert.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User switches to alert and click ok",
  "keyword": "And "
});
formatter.match({
  "location": "Alerttt.user_switches_to_alert_and_click_ok()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:DataTable.feature");
formatter.feature({
  "name": "Implementing Data Table",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate the register form",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user click and enter value in Firstname",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName"
      ]
    },
    {
      "cells": [
        "TestName1",
        "TestName2"
      ]
    },
    {
      "cells": [
        "xx",
        "yy"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Alerttt.user_click_and_enter_value_in_Firstname(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click phonenumber and enter the value \"124555\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_phonenumber_and_enter_the_value(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:RegisterWithMultipleData.feature");
formatter.feature({
  "name": "Registration with Multiple data",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@RegisterMultipleData"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validation of Registration form with multiple data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click the firstname and enter the value \"\u003cFirstName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click lastname and enter \"\u003cLastName\u003e\" in lastname field",
  "keyword": "And "
});
formatter.step({
  "name": "User click Address field and enterthe address \"\u003cAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User click email and enter \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User click phonenumber and enter the value \"\u003cPhoneNum\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User validate the page title is \"Register\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Address",
        "Email",
        "PhoneNum"
      ]
    },
    {
      "cells": [
        "TestFirstName",
        "TestLastname",
        "TestAddress",
        "abc@gmail.com",
        "124555"
      ]
    },
    {
      "cells": [
        "Kokila",
        "testLastname",
        "Perungudi",
        "xyz@gmail.com",
        "8899"
      ]
    },
    {
      "cells": [
        "aaa",
        "testt",
        "saidapet",
        "yyy@gmail.com",
        "7679"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validation of Registration form with multiple data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegisterMultipleData"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click the firstname and enter the value \"TestFirstName\"",
  "keyword": "When "
});
formatter.match({
  "location": "Registrationn.user_click_the_firstname_and_enter_the_value(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d119.0.6045.200)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-PJ5JRQT\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 119.0.6045.200, chrome: {chromedriverVersion: 119.0.6045.105 (38c72552c5e..., userDataDir: C:\\Users\\KARENA~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50386}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 787e3e798040ef195d49986d41f282d2\n*** Element info: {Using\u003dxpath, value\u003d//input[@placeholder\u003d\u0027First Name\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.bdd.utility.Common.entervalue(Common.java:20)\r\n\tat com.bdd.pages.RegisterPage.enterFirstName(RegisterPage.java:22)\r\n\tat com.bdd.stepdefinition.Registrationn.user_click_the_firstname_and_enter_the_value(Registrationn.java:36)\r\n\tat ✽.User click the firstname and enter the value \"TestFirstName\"(file:RegisterWithMultipleData.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click lastname and enter \"TestLastname\" in lastname field",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_lastname_and_enter_in_lastname_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click Address field and enterthe address \"TestAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_Address_field_and_enterthe_address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click email and enter \"abc@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_email_and_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click phonenumber and enter the value \"124555\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_phonenumber_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validate the page title is \"Register\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Registrationn.user_validate_the_page_title_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of Registration form with multiple data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegisterMultipleData"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click the firstname and enter the value \"Kokila\"",
  "keyword": "When "
});
formatter.match({
  "location": "Registrationn.user_click_the_firstname_and_enter_the_value(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click lastname and enter \"testLastname\" in lastname field",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_lastname_and_enter_in_lastname_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Address field and enterthe address \"Perungudi\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_Address_field_and_enterthe_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click email and enter \"xyz@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_email_and_enter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click phonenumber and enter the value \"8899\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_phonenumber_and_enter_the_value(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate the page title is \"Register\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Registrationn.user_validate_the_page_title_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of Registration form with multiple data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegisterMultipleData"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click the firstname and enter the value \"aaa\"",
  "keyword": "When "
});
formatter.match({
  "location": "Registrationn.user_click_the_firstname_and_enter_the_value(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d119.0.6045.200)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-PJ5JRQT\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 119.0.6045.200, chrome: {chromedriverVersion: 119.0.6045.105 (38c72552c5e..., userDataDir: C:\\Users\\KARENA~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50459}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 705a7fb3b99e2cd32f64e865a8f319f6\n*** Element info: {Using\u003dxpath, value\u003d//input[@placeholder\u003d\u0027First Name\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.bdd.utility.Common.entervalue(Common.java:20)\r\n\tat com.bdd.pages.RegisterPage.enterFirstName(RegisterPage.java:22)\r\n\tat com.bdd.stepdefinition.Registrationn.user_click_the_firstname_and_enter_the_value(Registrationn.java:36)\r\n\tat ✽.User click the firstname and enter the value \"aaa\"(file:RegisterWithMultipleData.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click lastname and enter \"testt\" in lastname field",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_lastname_and_enter_in_lastname_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click Address field and enterthe address \"saidapet\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_Address_field_and_enterthe_address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click email and enter \"yyy@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_email_and_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click phonenumber and enter the value \"7679\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_phonenumber_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validate the page title is \"Register\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Registrationn.user_validate_the_page_title_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:Registrationnn.feature");
formatter.feature({
  "name": "Registration Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Register"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User validate the page title is \"Register\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Registrationn.user_validate_the_page_title_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of text fields",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@Test"
    }
  ]
});
formatter.step({
  "name": "User click the firstname and enter the value \"TestFirstName\"",
  "keyword": "When "
});
formatter.match({
  "location": "Registrationn.user_click_the_firstname_and_enter_the_value(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click lastname and enter \"TestLastname\" in lastname field",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_lastname_and_enter_in_lastname_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Address field and enterthe address \"TestAddress\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_Address_field_and_enterthe_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click email and enter \"abc@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_email_and_enter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click phonenumber and enter the value \"124555\"",
  "keyword": "And "
});
formatter.match({
  "location": "Registrationn.user_click_phonenumber_and_enter_the_value(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User validate the page title is \"Register\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Registrationn.user_validate_the_page_title_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate RadioButton",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User clicks the Female radio button",
  "keyword": "When "
});
formatter.match({
  "location": "Registraions.user_clicks_the_Female_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validates radio button is selected",
  "keyword": "Then "
});
formatter.match({
  "location": "Registraions.user_validates_radio_button_is_selected()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});