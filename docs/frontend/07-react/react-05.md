---
title: React 05
description: react hooks(useState, useRef)
---

## هوک ها در ریکت

هوک یا همان قلاب تابع هایی هستن که میتوانیم از امکانات ریکت در کامپوننت های تابعی از انها استفاده کنیم.

![](../images/react-hooks.png)

هوک ها از ورژن ۱۶.8 ریکت اضافه شدن و حتما باید اون ها را خوب یاد بگیرید

از جمله مواردی که میتوان با هوک ها کنترل کرد lifecycle برنامه هست که جلو تر باهاش اشنا میشیم.

:::note
ما در این دوره از class component ها استفاده نمیکنیم و دیگر نیاز به یادگیری انها نیست چون deprecated شدن و دیگر در ورژن های جدید پشتیبانی نمی شوند.
:::

### چند قانون در مورد هوک ها:

- هوک ها فقط در کامپوننت های تابعی قابل استفاده هستند
- هوک ها را باید قبل از کلمه return در کامپوننت استفاده کنیم
- هوک ها را نمیتوانم شرطی صدا کنیم
- همه هوک ها با کلمه use شروع میشوند


## useState
پر مصرف ترین هوک ریکت هست که برای نگهداری یک مقدار از ان استفاده میکنیم 
در صورت تغییر مقدار درون خود به بقیه کامپوننت اطلاع رسانی میکند و تغییرات مجدد رندر میشود

نحوه استفاده ان به صورت زیر است 

```javascript
import {useState} from 'react';

const [title , setTitle] = useState(null);
```

در ابتدا باید از پکیج ریکت ان را امپورت کنیم
مقدار null که به هوک به عنوان ارگومان ورودی داده شده است مقدار اولیه ان است.

که برای ما ارایه از دو مقدار برگرادن میکند عضو اول ان title مقدار داده ای است که در حال حاضر در درون خود دارد و مقدار دوم تابعی است که میتوانیم با ان مقدار را تغییر دهیم

به مثال زیر توجه کنید:

```javascript
import {useState} from 'react';

const  App = () => {
  const [title, setTitle] = useState('Without Title');

  const changeTitleHandler = () => {
    setTitle('title changed !');
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitleHandler}></button>
    </div>
  );
}

export default App;
```

در مثال بالا با کلیک روی دکمه setTitle اجرا شده و مقدار title تغییر میکند بدون وقفه کامپوننت متوجه تغییر ما میشود و مجدد رندر میشود.

:::caution نکته
این موضوع را گوشه ذهن خود داشته باشید که با رندر مجدد کامپوننت تابع App از ابتدا اجرا میشود و مقدار جدیدی return میشود.
:::

## useRef

این هوک دو کار مهم برای ما انجام میدهد
- مقداری که درون ان ریخته میشود را نگهداری میکند و با رندر مجدد کامپونتت از بین نخواهد رفت
- اشاره گری میسازد تا بتوانیم از کد دسترسی به المان های صفحه داشته باشیم

### کاربرد اول - نگهداری مقادیر
ابتدا مورد اول را بررسی میکنیم
به نمونه کد زیر توجه کنید:

```javascript
import {useRef, useState} from 'react';

const  App = () => {
  const [title, setTitle] = useState('Without Title');
  const value = useRef(1);
  let variable = 1;

  const changeTitleHandler = () => {
    setTitle('title changed !');
  };

  const incValueHandler = () => {
    value.current = value.current + 1;
    variable += 1;
  };

  const logRefHandler = () => {
    console.log(value.current, variable);
  };

  return (
    <div>
      <h1>{title}</h1>
      <br />
      <br />
      <button onClick={changeTitleHandler}>useState</button>
      <br />
      <h1>{value.current} - {variable}</h1>
      <br />
      <button onClick={incValueHandler}>useRef</button>
      <button onClick={logRefHandler}>log ref</button>
    </div>
  );
}

export default App;
```

با فشردن دکمه useRef متغیر معمولی ما و Ref ما یک عدد بالا میرود ولی در صفحه نمایش داده نمی شوند این به این خاطر است که useRef به کامپونت ما اعلام رندر مجدد را نمیدهد.
حالا دکمه useState را بزنید تا تغییری در title داشته باشیم میبینید که صفحه سریع رندر مجدد میشود و مقدار useRef نیز حفظ شده است ولی متغیر معمولی ما مجدد به مقدار اولیه خود باز میگردد

:::caution نکته
پس میتوان گفت که با رندر مجدد کامپونتت همه متغیرهای معمولی داده خود را از دست میدهند و برای نگهداری مقدار انها نیاز است از userRef استفاده کرد.
:::

:::caution نکته
در صورتی که useRef ما در درون jsx استفاده شده باشد پس باید از useState استفاده کرد نه useRef تا با نغییر مقدار ui نیز رندر شود.
:::

### کاربرد دوم -  اشاره به المان های jsx
زمان هایی هست که ما نیازمند این میشویم که یک تگ را بر اساس شرایطیی از سمت کد ویرایش کنیم 
به نمونه کد زیر دقت کنید:

```javascript
import {useRef} from 'react';

const  App = () => {
  const titleRef = useRef();

  const changeColorHandler = () => {
    titleRef.current.style.color = 'red';
  };


  return (
    <div>
      <h1 ref={titleRef}>This is a title</h1>
      <button onClick={changeColorHandler}>change color</button>
    </div>
  );
}

export default App;
```

یک useRef تعریف کردیم بعد ان را به وسیله ی attribute تگ h1 به نام ref متصل کردیم.
حالا میتوانیم از کد با صدا کردن titleRef به الان jsx دسترسی داشته باشیم و رنگ ان را تغییر دهیم.


---
## پروژه

ساخت اپلیکشن TODO
