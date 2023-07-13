---
title: React Starter
description: Starting with React
---

## مقدمه


ریکت یک کتابخانه سمت فرانت است که در واقع یک ابزار ساخت ui واکنشپذیر هست و توسط تیم توسعه فیسبوک ساخته شده

![](../images/react-starter.png)


## ریکت چطور کار میکنه ؟ 
ریکت یک dom مجازی درون مموری برای خودش میسازه که شروع و با تغییراتی که اعمال میشه روی صفحه ابتدا dom مجازی خودش را ویرایش میکنه و بعد از اینکه تمامی ویرایش ها رو روی ان انجام داد شروع به مقایسه با dom واقعی صفحه میکنه و فقط تغییرات را بروزرسانی میکنه

این موضوع تعداد تغییرات صفحه رو خیلی کم میکنه و سرعت پردازش رو زیاد میکنه

:::tip 

در حال حاضر ورژن کنونی ریکت در زمان نوشتن این مطلب 18 هست که توسط فیسبوک گسترش پیدا کرده و درون اون از ابزار هایی مانند 
[webpack](https://webpack.js.org/) ,
[babel](https://babeljs.io/) ,
[ESLint](https://eslint.org/) 
استفاده شده
:::

## ساخت اولین پروژه 
برای ساخت اولین پروژه ریکت بعد از نصب nodejs روی سیستم میتونیم دستورات زیر را اجرا کنیم تا پروژه ی ریکتیمون ایجاد بشه

```bash
npx create-07-react-app myApp
```

حالا نوبت به اجرای برنامه ریکتی که ساختیم میشه برای اجراش دستور زیر را میزنیم

```bash
cd myApp
npm start
```

حالا که برنامه را اجرا کردیم میتونیم با صدا کردن ادرس 
[localhost:3000](http://localhost:3000)
داخل مرورگرمون برنامه را مشاهده کنیم

حالا زمانه اون فرا رسیده تا برنامه ریکتیمون ویرایش کنیم 
توصیه من این هست که برنامه 
webstorm 
را روی سیستم نصب کنیم و یک پروژه روی پوشه که از قبل ساختیم ایجاد کنیم 

بعد از ایجاد پروژه یک سری فایل مشاهده میکنیم که در ادامه باهاشون آشنا میشیم 

ولی در حال حاضر میریم سراغ پوشه src که در واقع تمامی کد های پروژه ما درونش قرار داده و فایل 
App.js را باز میکنیم 

```javascript
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

و شروع به تغییرات تگ های html میکنیم و در همان لحظه صفحه ما شروع به تغییر میکند

```javascript
function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
```

تبریک میگم اولین برنامه hello world خودتون نوشتین.

سوالی که براتون ایجاد میشه اینه که این فایل یا همون کامپوننت App از کجا داره اجرا میشه که ما صفحه را روی مرورگر خودمون داریم میبینیم 

بریم سراغ فایل index.js  داخل پوشه src

```javascript
import React from 'react';
import ReactDOM from '07-react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
درون ان فایل اگر به کد ها نگاهی بندازیم میبینیم که تگیی که ایدی root داره از صفحه انتخاب شده و App درونش رندر شده پس این جانقطه ورود و mount برنامه هست 

سوالی که ایجاد میشه این هست که این المان با ایدی root کجاست که برنامه ریکتی ما روی اون سوار میشه ؟

فایلی درون پوشه public وجود داره به اسم index.html 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
```

که درونش تگ 

```html
<div id="root"></div>
```

وجود داره این فایل همون فایل هست که دقیقا کاربر از روی سرور ما اجراش میکنه 
شاید کمی گیج کننده باشه ارتباط این فایل ها ولی این ارتباط ها را webpack داره برامون انجام میده و پکینگ را انجام میده.

---
## پروژه
یک پروژه ریکتی برای خودتون بسازید و ویرایشش کنید و تغییراتون را روی مرورگر مشاهده کنید

از webstrom ترجیحا استفاده کنید
