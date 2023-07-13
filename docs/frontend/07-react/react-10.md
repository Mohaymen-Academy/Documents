---
title: React 10
description: React Router
---


## مقدمه 

تا به اینجا تمامی صفحه هایی که ساخته اید هیج کنترلی روی url نداشتید و با رفرش کردن مرورگر همه وضعیت ها از بین میرفتن

پکیج react router به ما کمک میکند تا کنترل کاملی روی url داشته باشیم و کاربر با رفرش مرورگر وضعیت خود را حفظ کند و از همه مهم تر لینک سازی انجام بشه.



![](../images/router.png)


## نصب React Router 
خب برای استفاده از این پکیچ نیاز داریم که نصبش کنیم :

```bash
npm i -D react-router-dom 
```

:::caution نکته
`-D` در اینجا این بسته را در حالت dev Dependency نصب میکند
و این بسته بعد از کامپال از کد ها حذف میشود.
::: 

## ساختار 
تا به اینجا فقط کامپوننت ساختیم ولی برای مدیریت url در بسته react router باید یک سری فایل ایجاد کنیم به عنوان page که کار مدیریت router بر عهده داره 

پس ما در پروژه یک پوشه components داشتیم که الان یک پوشه pages هم به ان اضافه میکنیم.

در واقع page همان کامپوننت هست فقط وظیفه ی مدیریت صفحه را بر عهده داره.

:::caution نکته
از این به بعد به هیچ عنوان در component ها درخواست http ارسال نکنید و این وظیفه رو بذارید به عهده page ها.
:::

- src\pages\: 
  - HomePage.js
  - ContactPage.js
  - NoPage.js



## ساخت اولین صفحه 

حالا با هم بریم یک صفحه بسازیم 

```javascript
/* src/pages/HomePage.js  */

function HomePage() {
    return ( 
        <div>
            <h1>Home Page</h1>
        </div>
     );
}
export default HomePage;
```

بعد از این که کامپوننت صفحه اول را ساختیم نیاز داریم تا در App.js کانفیگ های مربوط به router را انجام بدیم.

```javascript
/* src/App.js */


import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
```
با تعریف کردن صفحه home در قسمت Routes به ریکت میفهمونیم که باید با صدا کردن چه url ای که در path تعریف شده چه صفحه ای را باز کنید که در element مشخص شده.

حالا با هم بریم یک صفحه دیگه به عنوان ارتباط با ما بسازیم:

```javascript
/* src/pages/ContactPage.js  */

function ContactPage() {
    return ( 
        <div>
        <h1>Contact Page</h1>
    </div>
     );
}
export default ContactPage;
```

بعد از ساخت صفحه ارتباط با ما باید روتر اون را تعریف کنیم پس میریم به app.js :

```javascript
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;
```

حالا با صدا کردن /contact هدایت میشیم به صفحه contact

خب یه مشکلی اینجا هست و با باز کردن ادرس / هیچ چیزی نمایش داده نمیشود.

```javascript
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
```

با حذف path صفحه HomePage و اضافه کردن index بهش به روتر مفهمونیم که این صفحه روت هست و باید element که داخل اون تعریف شده باز بشه.

