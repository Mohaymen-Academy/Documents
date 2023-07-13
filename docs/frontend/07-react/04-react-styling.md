---
title: Styling
description: react styling
---
## استایل دهی در ریکت 

راه های زیاد برای اتایل دهی به تگ ها در ریکت وجود داره که ما چندتا از اون ها رو مورد بررسی قرار میدیم

### استایل خطی
در این روش استایل ها رو درون کامپونتت ایجاد میکنم و روی تگ ها اعمال میکنیم 

```javascript
/* src/components/Header.js */

const Header = () => {
  return (
    <>
      <h1 style={{color: "red", paddingTop: "2rem"}}>Hello Style!</h1>
    </>
  );
}
```

میتونیم تمامی استایل ها را درون یک object بنویسیم و به تگ بدیم 



```javascript
/* src/components/Header.js */

const Header = () => {
  const style = {
      color: "red",
      paddingTop: "2rem"
  }  
    
  return (
    <>
      <h1 style={style}>Hello Style!</h1>
    </>
  );
}
```

### استفاده از فایل css

روش دیگر این هست که درون فایل css استایل ها را بنویسیم و فایل را به کامپوننت ایمپورت کنیم

```css
/* src/components/Header.css */
h1{
    color: red;
    padding-top: 2rem;
}
```

```javascript
/* src/components/Header.js */

import './Header.css'

function Header() {
    return ( 
        <h1> my Header</h1>
     );
}

export default Header;
```

در مثال بالا دیدیم که درون فایل جداگانه استایل ها را نوشتیم و روی تگ h1 اعمال شد حالا اگر کلاسی درون فایل داشته باشیم چه اتفاقی رخ خواهد داد ؟

:::tip 
این مورد را حتما امتحان کنید و خروجی را ببینید
در صورتی که دقیقا در یک کامپوننت دیگر یک کلاس دیگر با همین نام وجود داشته باشد مروگر کدام کلاس را در نظر میگیرد ؟
:::

ریکت برای اینکه این مشکل را برطرف کند از css module استفاده میکند
به مثال زیر دقت کنید:

```css
/* src/components/Header.module.css */
.bigblue {
  color: DodgerBlue;
  padding: 40px;
  text-align: center;
}
```

```javascript
/* src/components/Header.js */

import './Header.module.css'

function Header() {
    return (
        <h1 className={styles.bigblue}> my Header</h1>
    );
}

export default Header;
```

بعد از اجرا برنامه از inspect کلاس داده شده به h1 را نگاه کنید.

میبینید که اسم کلاس شما تغییر کرده و دلیل این کار این است که استایل هر کامپوننت بصورت کپسوله شده فقط روی همان کامپوننت تاثیر گذار باشد.

:::caution نکته
به این موضوع دقت کنید که حتما اسم فایل css باید با .module.css به پایان برسد تا این فرایند اعمال شود.
:::

### استفاده از sass
برای استفاده از sass در ریکت باید پردازش گر ان را نصب کنیم برای این کار دستور زیر را اجرا میکنیم

```bash
npm i sass
```

بعد از نصب sass دیگر نیازی به تغییر خاصی در کانفیگ برنامه نیست و با ساخت فایل scss میتوانید از ان بهرمند بشید

```scss
/* src/components/Header.scss */

$myColor: red;

h1 {
  color: $myColor;
}
```

```javascript
/* src/components/Header.js */

import './Headers.scss'

function Header() {
    return (
        <h1> my Header</h1>
    );
}

export default Header;
```



---
## پروژه

تمامی کامپوننت های که تا کنون ساختید را استایل دهی کنید
