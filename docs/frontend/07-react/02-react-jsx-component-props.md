---
title: JSX &  Component & Props
description: hands dirty with react components & props
---

## jsx چیست؟
jsx مخفف JavaScript XML 
که این قابلیت را به ما میده وسط کد های ریکتمون html بنویسم که قابلیت خیلی جذابی هست که عاشقش میشید

برای مثال ما میتونیم درون یک متغیر یک تگ html قرار بدیم 

```javascript
const myElement = <h1>I Love JSX!</h1>;
```

که در نهایت میتیم این تگ را بدیم به ریکت برامون توی صفحه رندرش کنه

```javascript
const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

البته استفاده از jsx اجباری نیست و میتونیم با خود ریکت تگهامون بسازیم که کار بسیار سخت و کد ها کثیف میشه 

```javascript
const myElement = React.createElement('h1', {}, 'I do not use JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

## قواعد JSX 

### متغییرها
ما میتونیم وسط jsx عبارات جاوااسکریپی بنویسیم

```javascript
const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
    
const firstName = "Gholamreza";
const lastName = "Fadakar";
const MyElement2 = <h1>Fullname: {firstName} {lastName}</h1>

const age = 28;
const MyElement3 = <h1>Is Old: {(age) > 50 ? "Yes" : "No"}</h1>

```
:::caution نکته
 درون jsx حتما باید تمامی تگ ها بسته بشه وگرنه کامپایلر به ما خطا میده
:::

```javascript
const tagWithChid = <h1>my title</h1>
const tagWithoutChild = <br />
```

### تگ های تو در تو 

اگر چدین تگ تو در در تو داشته باشیم باید حتما ان را درون () قرار دهیم

```javascript
const myList = (
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>    
);
```

###  شرط 
چطور در jsx شرط بذاریم ؟
چند راه وجود داره که میتونیم اول به این مورد اشاره کنیم:

```javascript
const list = [1,2,3,4,5];

const renderItems = () => {
    return list.map((item) => item < 4 ? <li>Item {item}</li> : undefined);
};

const myList = (
  <ul>
      {renderItems()}
  </ul>    
);
```
به مثال بالا دقت کنید رندر کردن ایتم های لیست درون یک تابع قرارگرفته که با شرط محدود شده در نهایت ارایه ای از jsx ها برگردادنده شده.

حالت بعدی میتوان در درون jsx این عمل را انجام داد:
```javascript
const age = 28;

const jsx = (
    <div>
        {age > 50 ? <h2>Old</h2> : <h2>young</h2>}
    </div>    
);
```
:::caution نکته
در مثال بالا با عملگر ؟ : شرط در رندر اعمال شده.
:::

حالت بعدی رندر یا عدم رندر یک تگ در jsx است به مثال پایین دقت کنید:

```javascript
const renderHeader = false;

const jsx = (
    <div>
        {renderHeader && <h1>my header</h1> }
    </div>    
);
```
در صورت درست بودن عبارت دستورات بعد از && اجرا میشود در غیر این صورت هیچ رندری اتفاق نمیافتد


### حلقه
برا نمایش لیستی از داده ها در jsx میتوانیم انها را map کنیم

```javascript
const list = [1,2,3,4,5];

const myList = (
  <ul>
      {list.map((item) => {
          return <li>{item}</li>
      })}
  </ul>    
);
```

به این نکته دقت کنید که ما میتنوانیم یک المان jsx برگردانیم یا یک ارایه ای از المان های jsx که در این صورت هر دو رندر خواهند شد

حالا که با jsx آشنا شدیم میتونیم راحت تر با ریکت المان های صفحه را بسازیم

---
## کامپوننت چیست ؟ 
کامپونت ها در دورن ریکت چی هست ؟ 

کامپونت ها در ریکت همون function های ما هستن که یک خروجی jsx دارن که در نهایت درون صفحه با صدا کردنشون رندر میشن 
و قابلیت مهمی که کامپونت ها دارن اینه که میشه چندین بار در جاهای مختلف صداشون کرد و از خروجی jsx انها استفاده کرد

چقدر جالبه !

همین الان توی ذهت میاد که خیلی چیزای دردساز را میشه کامپونتت کرد مثل دکمه ها - لیست ها - جدول ها - سر عنوان ها و خیلی چیزای دیگه 

خب اینکار مزیت هایی برای ما داره فرض کنید من یک کامپونت جدول ایجاد کردن که داخل پروژه من استفاده شده و از اون بالای ۵۰ بار استفاده کردم که خیلی لذت بخش بوده چون دیگه هر سری جدول رو ننوشتم 
حالا میخوام یه تغییری داخل جدول های پروژم بدم که حالت واکنشگرا بگیرن کافیه فقط کامپوننتش را تغییر بدم تا همه جا تغییر کنه و این خیلی مهمه که ما به راحتی بتونیم قسمتی از پرژه بدون دردسر ریفکتور کنیم

اگر کامپوننت نبود چی؟ باید ۵۰ بار ویرایش میزدیم و خسته کننده میشود و از همه مهمتر ممکن بود یکیشون ناقص ریفکتور کنیم.

پس از ریکت ممنونیم که کامپوننت ها رو برای ما گذاشته.
 
## ساخت کامپوننت در ریکت 
برای ساخت کامپونتت یک پوشه در src ایجاد میکنیم به اسم components 
که بتونیم اون ها را بسته بندی کنیم و با بقیه فایل ها قاطی نشن

یک فایل به اسم  Button.js درون فولدر component میسازیم 

```javascript
const Button = () => {
    return (
        <button>salam</button>
    );
}

export default Button
```

همونطور که گفتیم کامپوننت ها فاکنکشن هایی هستن که jsx خروجی برمیگردون

حالا میتونیم این کامپوننت را درون App.js صدا بزنیم 

```javascript
import Button from './Button';

function App() {
  return (
    <div className="App">
      <Button />
    </div>
  );
}

export default App;
```
همانطور که میبینید دکمه برای ما نمایش داده میشه 

نکته هایی اینجا هست که لازمه بدونید
- برای صدا کردن کامپوننتون باید دقیقا اسم فانکشن را به صورت تگ html بنویسیم
- حتما باید اسم کامپونتمون با حرف بزرگ شروع بشه 
- در اینجا چون کامپوننت فرزندی نداره پس تگش بدون تگ پایانی بسته شده
- میشود همانند کامپوننت App از فاکنشن معمولی به جای arrow استفاده کرد
- به علت استفاده ریکت از virtual dom تگ هیچ کدام از کامپونتت های ما درون dom نمایش داده نخواهد شد


## ارسال داده به کامپوننت 
قطعا کامپونتت هایی که میسازیم ثابت نیستن و بر اساس داده هایی رندر میشن 

چطور میتونیم به کامپوننت ها داده ارسال کنیم ؟

برای این کار ما میتونیم به روش زیر داده ای را برای کامپوننت ارسال کنیم فرض کنید متن دکمه را میخوام از جایی که صدا میزنیم بهش بدیم

```javascript
import Button from './Button';

function App() {
  return (
    <div className="App">
      <Button content="Hello World !" />
    </div>
  );
}

export default App;
```
یک attribute تعریف میکنیم به اسم content و یک متن بهش میدیم تا برامون ارسالش کنه به کامپوننت دکمه و از درون کامپوننت دکمه اون را دریافت کنیم

```javascript
const Button = (props) => {
    return (  
        <button>{props.content}</button>
    );
}

export default Button
```

props تمامی داده های ما هستن که از بیرون امدن و به صورت 
object  
درون props قرار گرفتن پس ما میتونیم با صدا کردن props.content 
اونو دریافت کنیم و نمایش بدیم

البته حرفه ای تر این هست که props را همونجا destruct کنیم و فقط content رو برداریم به صورت زیر:

```javascript
const Button = ({ content }) => {
    return (  
        <button>{content}</button>
    );
}

export default Button
```

حالا اگر متن ما درون یک متغییر بود و بخواهیم به دکمه ارسالش کنیم چی ؟
طبق قوانین jsx میتونیم به صورت زیر عمل کنیم

```javascript
import Button from './Button';

function App() {

  const myButtonText = "Hello World !"
  
  return (
    <div className="App">
      <Button content={myButtonText} />
    </div>
  );
}

export default App;
```

## ارسال jsx به کامپونت 
یک props از قبل تعریف شده ای درون ریکت هاست که در صورت باز کردن تک کامپونت برای ما پرش میکنه به مثال زیر دقت کنید

```javascript
<Button> Hello World ! </Button>
```

این محتوایی jsx که ما بین تگ ها قرار میگیره ریکت برامون درون children قرار میده که میتونیم درون کامپونت ازش استفاده کنیم

```javascript
const Button = ({ children }) => {
    return (  
        <button>{children}</button>
    );
}

export default Button
```
از اونجایی که children داره توسط محتوای وسط تگ Button پر میشه پس باید توقع داشته باشیم jsx باشه

```javascript
<Button>
    Hello World ! 
    <i className="fa fa-rocket"></i>
</Button>
```

نکته ای اینجا وجود داره این هست که attribute تگ i از جنس class نیست و className هست درون ریکت به جای استفاده از class از className باید استفاده کنیم 

---
##  پروژه
پیاده سازی کامپوننت های پروژه وینترین و صفحه ساز
