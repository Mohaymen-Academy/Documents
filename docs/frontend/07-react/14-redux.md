---
title: Redux
description: React Redux
---

![](../images/redux0.png)

## مقدمه



![](../images/redux2.gif)

## Actions

در ریداکس ما به جای استفاده مستقیم از state ها و تغییر آنها از سیستمی


## Store
برای شروع اول باید با این مفهوم آشنا بشیم که store چیه ؟

store مثل یه container میمونه که کل اطلاعات اپلیکیشن رو برامون نگهداری میکنه و شما میتونید انواع دیتا ها مثل string ها اعداد boolean آبجکت ها ، آرایه ها و حتی فانکشن ها رو در اون ها ذخیره کنید .

همچنین state ها رو میشه به عنوان single source of truth  در نظر گرفت یعنی اینکه همه ی کامپوننت ها می تونن داخل اپلیکیشن به بهش دسترسی داشته باشن و دیتا رو دریافت و آپدیت  کنن 

![](../images/redux1.jpg)

برای ایجاد کردن store زملنی که از redux toolkit استفاده میکنیم داخل source پروژمون یه فایل به اسم `store.js` ایجاد میکنیم . بعد از اون تابع `configureStore()` رو داخل فایلمون import میکنیم و یه استور خالی ایجاد میکنیم 

```jsx
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
```  
این کد یه store برامون ایجاد میکنه و همینطور redux devTools رو برامون configure میکنه که بهمون کمک میکنه در طول develope کردن store رو مشاهده کنیم  
![](../images/redux-devtools-initial.png)
:::tip  
اکستنشن chrome رو میتونید از لینک زیر دانلود کنید 
[redux dev tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
:::

بعد از اینکه store  رو ساختیم کامپننت   ر`<App/>` رو با استفاده از `<provider>` که react-redux در اختیارمون قرار داده wrap میکنیم store رو هم import کرده و به عنوان props بهprovider  پاس میدیم .

```JSX
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
//Importing the store we created above
import { store } from "./redux/store"
//importing the provider from react-redux  
import { Provider } from 'react-redux'

ReactDOM.render(
    //This makes the store accessible to the App that is passing it as a prop
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

```  
## slice
 خب ، حالا که فهمیدیم چطور توی redux toolkitباید یه store رو ایجاد کنیم و برای کامپوننت های app دسترس پذیر کنیم به مفهومی به اسم slice میرسیم  
 slice های ریداکس یه مجموعه ای از reducer ها وaction creator ها و initial state هستن که داخل یه فایل توی دایرکتوری features قرار میگیرن و جزو store به حساب میان .  

با کمک slice ما میتونیم کد های ریداکسمون رو بهتر سازماندهی کنیم و نگهداری کد برامون راحت تر میشه 

بعد از اینکه slice رو ساختیم و reducer و action  هامون رو داخلش تعریف کردیم reducer رو export میکنیم . با این کار میتونیم از reducer ها داخل store استفاده کنیم .  
```javascript
//features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
```
بعد از اینکه reducer  رو export کردیم ، اون رو داخل فایل store.js ایمپورت میکنیم و و به store اضافه میکنیمو با این کا پیکر بندی storeتکمیل میشه  

```javascript
//store.jsx
import { configureStore } from '@reduxjs/toolkit'
//Importing the reducer from countSlice
import counterReducer from "./countslice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
```
## middleware
در Redux، Middleware (واسطه‌نرم‌افزار) یک مفهوم مهم و قدرتمنده که به شما اجازه می‌دهد تا در فرآیند اجرای اکشن‌ها به میانگیری (intercept) کردن و تغییر دادن آن‌ها قبل از رسیدن به Reducer داشته باشید. Middleware بین ارسال یک اکشن به Redux و رسیدن آن به Reducer قرار داره 

در واقع Middleware به شما این امکان را می‌دهد که فرآیند اجرای اکشن‌ها را مدیریت کنید و قبل از انجام تغییرات  در state جدید برنامه، عملکرد آن‌ها را تغییر دهید. این قابلیت به شما امکانات بیشتری برای کنترل و پیشرفت در برنامه‌نویسی با Redux می‌دهد.

به طور کل middleware در redux برای log گرفتن ، گزارش خرابی ، ارتباط با یه async api و غیره استفاده میشه 

زمانی که لازم باشه از middleware استفاد کنیم میتونیم داخل تابع `configureStore`پراپرتی middleware رو به آبجکت ا ضافه کنیم 

```javascript
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'
import { myCustomApiService } from './api'

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
})
```
زمانی که بخوایم یه custom middleware به کدهامون اضافه کنیم از `getDefaultMiddleware` استفاده کنیم 

```javascript
import { configureStore } from '@reduxjs/toolkit'

import logger from 'redux-logger'

import rootReducer from './reducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

// Store has all of the default middleware added, _plus_ the logger middleware
```
