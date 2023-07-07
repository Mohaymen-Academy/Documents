---
title: React 02
description: react events
---

## React Events
رویداد چیست ؟ ممکن در درون یک کامپونتت انتفاقی رخ دهد که نیاز باشد بقیه هم از آن انفاق باخبر شوند که باید با روشی ان را به بقیه اطلاع دهیم
برای این کا میتوانیم از event های ریکت استفاده کنیم

نکته ای که اینجا مهم هست اینه که ما میتونیم زمانی که به یک کامپونتت دیگر خبر از یک اتفاق را میدیم براش داده ای هم ارسال کنیم

چقدر جالبه پس با این روش میشه داده ای را از یک کامپونتت به کامپونتت پدرش ارسال کنیم مثل prop ها ؟ بله که میشه 

نکته ای که اینجا وجود داره اینه هست که خود ریکت هم با event های dom به همین روش ارتباط میگیره برای مثال زمانی که روی یک div کلیک میکنیم

حرف زدن دیگه بسته بریم کدهاشو ببنیم

در مثال پایین ما از یک event از پیش تعریف شده dom استفاده میکنیم که کلیک کردن روی یک تگ را به ما اعلام میکنه

```javascript
const Button = ({ children }) => {

    const clickHandler = (e) => {
        alert('click button tag');
    };

    return (  
        <button onClick={clickHandler}>{children}</button>
    );
}

export default Button
```

- زمانی که ما روی تگ button کلیک کنیم متد clickHandler اجرا خواهد شد
- متغیر e همان event ای هست که مرورگر برای ما ارسال کرده که حاوی اطلاعاتی از اتفاقی که رخ داده است
- تمامی event های مرورگر با on شروع میشوند برای مثال onClick - onDrag

حالا با هم بریم یک event اختصاصی برای خودمون بسازیم و صداش بزنیم:

```javascript
const Button = ({ children , shoot }) => {

    const clickHandler = () => {
        shoot();
    };


    return (  
        <button onClick={clickHandler}>{children}</button>
    );
}

export default Button
```

یک متغییر از جنس callback به عنوان prop دریافت میکنیم زمانی که روی دکمه کلیک شد ان را صدا میکنیم

```javascript
import Button from './Button';

function App() {

  const myButtonText = "Hello World !"

  const shootHandler = () => {
    console.log('shoot !');
  };

  return (
    <div className="App">
      <Button shoot={shootHandler}>
        Hello World !
      </Button>
    </div>
  );
}

export default App;
```

بالاتر گفتیم که با event ها میشود بین کامپوننت های فرزند به پدر داده جابه جا کرد به مثال زیر توجه کنید 

```javascript
const Button = ({ children , shoot }) => {

    const ShootScore = 95;

    const clickHandler = () => {
        shoot(ShootScore);
    };


    return (  
        <button onClick={clickHandler}>{children}</button>
    );
}

export default Button
```

```javascript
import Button from './Button';

function App() {

  const myButtonText = "Hello World !"

  const shootHandler = (ShootScore) => {
    console.log('shoot !', ShootScore);
  };


  return (
    <div className="App">
      <Button shoot={shootHandler}>
        Hello World !
      </Button>
    </div>
  );
}

export default App;

```

 مشاهده میکنید که از کامپونت فرزند توانستیم داده ای را به پدر انتقال دهیم 
 
---
##  پروژه
بهینه کردن ۱۰ کامپونتت ui پروژه قبل
