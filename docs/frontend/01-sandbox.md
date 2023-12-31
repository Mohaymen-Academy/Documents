---
title: Sandbox
description: When I was a kid, my mom used to just throw me into a pile of broken glass!
tags: [Sandbox]
---

:::info این فاز، یکی از فازهای `Sandbox` است.

به فازهایی `Sandbox` می‌گوییم که به طور مستقیم به پروژه مربوط نمی‌شوند
و در کارگاهی که برای آن‌ها برگزار می‌شود، مدرس در یک محیط ایزوله به تدریس می‌پردازد.
البته این به آن معنا نیست که در این فازها نکات کم‌اهمیتی گفته می‌شود؛
بلکه در آن‌ها نکات مهمی تعبیه شده که در فازهای دیگر قابل بیان نبودند.

:::

## مقدمه

در این فاز قصد داریم قبل از شروع پروژه با برخی نکات ساده اما مهم آشنا شویم
که در ادامۀ کار به کمک ما خواهند آمد.

-   چرا برای تعریف متغیر می‌توان از سه عبارت `var` و `let` و `const` استفاده کرد؟
-   تفاوت Function با Arrow Function چیست؟
-   مفهوم و کاربرد `this` چیست؟
-   صفت `type` در تگ `script` چیست؟
-   چطور می‌توان از کدی که دیگران نوشته‌اند استفاده کرد؟
-   برای افزایش خوانایی کد چه کارهایی می‌توان انجام داد؟

---

## یادگیری

### متغیرها

قبل از سال 2015 میلادی، برای تعریف متغیر در JavaScript تنها می‌توانستیم از `var` استفاده کنیم.
اما با معرفی ES6 عبارت‌های `let` و `const` نیز به این زبان اضافه شدند که در اینجا توضیحات مختصری در مورد هر کدام ارائه می‌کنیم.

#### var

زمانی که یک متغیر را با عبارت `var` تعریف می‌کنید،
آن متغیر در Global Scope یا نزدیک‌ترین Function Scope تعریف می‌شود.

به عنون مثال خروجی کد زیر:

```javascript
function defineAndPrintName() {
    if (true) {
        var name = 'Bijan';
        console.log(`inner scope -> name: ${name}`);
    }

    console.log(`outer scope -> name: ${name}`);
}

defineAndPrintName();
```

به شکل زیر خواهد بود:

```text
inner scope -> name: Bijan
outer scope -> name: Bijan
```

چرا که متغیر `name` داخل اسکوپِ تابعِ `defineAndPrintName` قرار می‌گیرد.

لازم به ذکر است که Scopeها در JavaScript با آکلاد مشخص می‌شوند
بنابراین نیازی به `if (true)` نداریم.

#### let

برخلاف `var`، زمانی که از `let` برای تعریف یک متغیر استفاده کنیم،
آن متغیر در Scope فعلی محدود می‌شود.

به‌عنوان مثال خروجی کد زیر:

```javascript
function defineAndPrintName() {
    {
        let name = 'Bijan';
        console.log(`inner scope -> name: ${name}`);
    }

    console.log(`outer scope -> name: ${name}`);
}

defineAndPrintName();
```

به شکل زیر خواهد بود:

```text
inner scope -> name: Bijan
ReferenceError: name is not defined
```

#### const

`const`
دقیقاً مانند `let` عمل می‌کند با این تفاوت که فقط یک بار می‌توان آن را مقداردهی کرد.
زمانی که احتیاج داشته باشیم مقداری را ذخیره کنیم که هیچ‌وقت نباید تغییر کند،
استفاده از `const` باعث جلوگیری از خطاهای احتمالی می‌شود؛
همچنین زمانی که شخص دیگری کد را می‌خواند،
با دیدن `const` مطمئن می‌شود که مقدار آن تغییر نخواهد کرد.
ما پیشنهاد می‌کنیم همیشه به صورت پیش‌فرض برای تعریف متغیرها از `const` استفاده کنید
و تنها در صورت نیاز به `let` مراجعه کنید.

برای آشنایی بیشتر با این مفاهیم می‌توانید از لینک‌های زیر استفاده کنید:

-   [var vs let vs const in JavaScript](https://ui.dev/var-let-const/)
-   [Medium - Difference Between Var, Let and Const in ES6](https://medium.com/infancyit/difference-between-var-let-and-const-in-es6-16a08d74b8b2)
-   [freeCodeCamp - Var, Let, and Const – What's the Difference?](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)

---

### Regular Function vs Arrow Function

در JavaScript به دو شکل می‌توان یک تابع را تعریف کرد:

```javascript
function sayHello(name) {
    console.log(`hello, ${name}!`);
}

// or

const sayHello = (name) => {
    console.log(`hello, ${name}!`);
};
```

که به نوع اول Regular Function و به نوع دوم Arrow Function گفته می‌شود.
در اینجا به تفاوت این دو روش می‌پردازدیم.

#### this

زمانی که از Regular Function استفاده می‌کنیم مقدار `this` با توجه به مکانی که تابع از آنجا صدا زده می‌شود، متفاوت است.
اما اگر از Arrow Function استفاده کنیم، این مقدار همواره برابر با شیئی است که تابع در آن تعریف شده.

```javascript
const regularFunctionWrapper = {
    whatIsThis: function () {
        console.log(this); // regularFunctionWrapper
    },
};

const arrowFunctionWrapper = {
    whatIsThis: () => {
        console.log(this); // globalThis
    },
};

regularFunctionWrapper.whatIsThis();
arrowFunctionWrapper.whatIsThis();
```

#### Constructor

قبل از اینکه کلاس‌ها به JavaScript بیایند، از Regular Function به‌عنوان Constructor استفاده می‌شد:

```javascript
function Circle(radius) {
    this.radius = radius;

    this.printArea = function () {
        console.log('area', Math.PI * Math.pow(this.radius, 2));
    };
}

const small = new Circle(10);
const large = new Circle(100);

small.printArea();
large.printArea();
```

#### arguments & args

در Regular Function یک کلیدواژه به نام arguments وجود دارد که درواقع آرایه‌ای از پارامترهای ورودی می‌باشد؛
در Arrow Function هم می‌توانیم به این پارامترها دسترسی داشته باشیم اما باید صراحتاً در ورودی‌های تابع به آن اشاره کنیم:

```javascript
function regularFunctionSum() {
    let result = 0;

    for (const n of arguments) {
        if (!isNaN(n)) result += n;
    }

    return result;
}

const arrowFunctionSum = (...args) => {
    let result = 0;

    for (const n of args) {
        if (!isNaN(n)) result += n;
    }

    return result;
};

console.log('Regular Function', regularFunctionSum(4, 8, 15, 16, 23, 42)); // 108
console.log('Arrow Function', arrowFunctionSum(4, 8, 15, 16, 23, 42)); // 108
```

#### return

در Arrow Function اگر بدنۀ تابع فقط شامل یک Expression باشد، می‌توان آن را بدونِ استفاده از آکلاد و return نوشت:

```javascript
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

console.log(rand(4, 42));
```

برای آشنایی بیشتر با این مفاهیم می‌توانید از لینک‌های زیر استفاده کنید:

-   [5 Differences Between Arrow and Regular Functions](https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/)
-   [freeCodeCamp - When (and why) you should use ES6 arrow functions — and when you shouldn’t](https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/)

---

### Modules

#### type

یکی از صفاتی که می‌توان به تگ `script` اضافه کرد، `type` است؛
این صفت همان‌طور که از اسمش پیداست، مشخص می‌کند که مرورگر چگونه با کد شما برخورد کند.
مقادیر متنوعی را می‌توان برای `type` در نظر گرفت اما در اینجا فقط به `module` اشاره می‌کنیم.

```html
<script type="module"></script>
```

#### مزایا

یکی از بزرگ‌ترین مزایای استفاده از `module` این است که می‌توانید کد خود را به چند فایل تقسیم کنید
و هر فایل را برای کار خاصی در نظر بگیرید.
به‌عنوان مثال فرض کنید بخواهیم دو کلاس با نام‌های `Circle` و `Square` داشته باشیم،
اشیائی با آن‌ها بسازیم و در نهایت محیط و مساحت هر کدام را محاسبه کنیم؛
از سه راه می‌توانیم به هدف خود برسیم:

1. قرار دادن تمام کدها در یک فایل
1. قرار دادن کد هر قسمت در یک فایل جدا و استفاده از سه تگ `script` در HTML
1. قرار دادن کد هر قسمت در یک فایل جدا و استفاده از `module`

واضح است که روش اول خوانایی کد را به‌شدت پایین می‌آورد
و اگر در آینده بخواهیم توسعه‌ای انجام دهیم، باید در میان حجم انبوهی از کدها به دنبال قسمت مورد نظر بگردیم.

روش دوم بهتر است اما مشکلی که وجود دارد این است که
همیشه باید به ترتیبِ کدها توجه کنیم.
به‌عنوان مثال اگر بخواهیم از کد `Square` داخل `main` استفاده کنیم،
باید حتماً تگ مربوط به `Square`، قبل از تگ مربوط به `main` باشد.

اما روش سوم هیچ‌کدام از معایب دو روش دیگر را ندارد.
به راحتی می‌توان هر زمان که به یک کد احتیاج داشتیم، آن را `import` کنیم
و فقط یک تگ `script` در HTML قرار می‌دهیم.

برای روشن‌تر شدن موضوع، در ادامه کد روش سوم را می‌بینیم:

```html title="index.html"
<script src="./main.js" type="module"></script>
```

```javascript title="main.js"
import {Circle} from './circle.js';
import {Square} from './square.js';

const main = () => {
    const circle = new Circle(10);
    const square = new Square(10);

    console.log(circle.toString());
    console.log(square.toString());
};

main();
```

```javascript title="circle.js"
class Circle {
    #radius;

    constructor(radius) {
        this.#radius = Number.parseInt(radius) || 0;
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.#radius;
    }

    calculateArea() {
        return Math.PI * this.#radius * this.#radius;
    }

    toString() {
        return `(Circle) perimeter: ${this.calculatePerimeter()}; area: ${this.calculateArea()}`;
    }
}

export {Circle};
```

```javascript title="square.js"
class Square {
    #side;

    constructor(side) {
        this.#side = Number.parseInt(side) || 0;
    }

    calculatePerimeter() {
        return 4 * this.#side;
    }

    calculateArea() {
        return this.#side * this.#side;
    }

    toString() {
        return `(Square) perimeter: ${this.calculatePerimeter()}; area: ${this.calculateArea()}`;
    }
}

export {Square};
```

#### import & export

همان‌طور که در کد قسمت قبل مشاهده کردید،
برای آنکه بتوانیم به یک موجودیت (متغیر، تابع، کلاس و ...) در قسمت‌های دیگر پروژه دسترسی داشته باشیم،
باید از کلیدواژه‌های `import` و `export` استفاده کنیم.

در قسمت قبل، یک Object را `export` کردیم که تنها شامل یک عنصر با کلید `Circle` یا `Square` بود؛
بنابراین زمانی که بخواهیم فایل را `import` کنیم، دقیقاً همان Object را به همان شکل در دسترس خواهیم داشت.
همچنین این امکان را داریم که یک موجودیت را به‌عنوان شیء پیش‌فرض `export` کنیم
یا اسامی اشیاء را هنگام `import` عوض کنیم.

برای آشنایی بیشتر با این مفاهیم می‌توانید از لینک‌های زیر استفاده کنید:

-   [MDN - export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export/)
-   [MDN - import](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/import/)

---
#### Async & Await
Async / Await روش تقریبا جدیدی برای نوشتن کد ناهمگام در JavaScript است. قبل‌ها ما از callbackها و promiseها استفاده می‌کردیم. Async / Await در واقع بر پایه promiseها ساخته شده است

چرا async / await؟ به زبان ساده، async / await شما را قادر می‌سازد تا کد ناهمگامی را به شیوه همگام بنویسید.

##### توابع Async

برای ساخت یک تابع async، تنها کاری که باید انجام دهیم، این است که کلمه کلیدی  asyncرا قبل از تعریف تابع قرار دهیم. به مانند این کد:

```javascript
async function asyncFunc() {
  return "Hey!";
}
```
نکته‌ای که درباره توابع async باید بدانید، این است که آن‌ها همیشه یک promise را بر می‌گردانند.

در مواقعی مانند مورد بالا که ما چیزی را بر می‌گردانیم که یک promise نیست، مقدار برگشتی به طور خودکار در یک promise جمع‌بندی می‌شود، که در آن مقدار resolve شده، یک مقدار غیر promise است. برای کد بالا، 

```javascript
 asyncFunc.then(result = console.log(result))
```

رشته «Hey!» را بر خواهد گرداند.

##### Await

کلمه کلیدی await فقط می‌تواند در یک بلوک async استفاده شود، در غیر این صورت یک خطای سینتکس را بروز خواهد داد. این به این معنی است که شما نمی‌توانید از await در بالاترین سطح کد خود استفاده کنید. به عبارتی، از آن به وسیله خودش استفاده نکنید.

چه زمانی از آن استفاده کنیم؟ اگر یک تابع ناهمگام داخل یک بلوک async دارید، از آن استفاده کنید. پس فرض کنید که باید برخی داده‌ها را از سرور خود بگیریم و سپس از آن داده‌ها داخل بلوک async‌ خود استفاده کنیم. ما از await برای متوقف کردن اجرای تابع استفاده می‌کنیم، و پس از این که داده‌ها وارد می‌شود آن را ادامه می‌دهیم. برای مثال:

```javascript
async function asyncFunc() {
 
  // دریافت داده‌ها از یک اندپوینت
 
  const data = await axios.get("/some_url_endpoint");
 
  return data;
 
}
```

چرا از await استفاده کنیم؟ به جای استفاده از await می‌توانستیم به راحتی از یک promise استفاده کنیم، نه؟


```javascript
async function asyncFunc() {
 
  let data;
 
  // دریافت داده‌ها از یک اندپوینت
 
  axios.get("/some_url_endpoint")
 
    .then((result) => {
 
      data = result
 
    });
 
  return data;
 
}
```

Await یک راه زیباتری برای نوشتن یک promise داخل یک تابع async است. Await خوانایی کد را به طور فوق العاده‌ای افزایش می‌دهد و از این رو ما از آن استفاده می‌کنیم.

بیایید فرض کنیم که ما چند تابع ناهمگام داخل بلوک async خود داریم. به جای زنجیر کردن promiseها، می‌توانیم این کار را انجام دهیم که راه بسیار مناسب‌تری است:

```javascript
async function asyncFunc() {
 
  // دریافت داده‌ها از یک اندپوینت
 
  const response = await axios.get("/some_url_endpoint");
 
  const data = await response.json();
 
  return data;
 
}
```

##### Try…catch
همان try-catch قدیمی، رایج‌ترین راه برای مدیریت خطاها در هنگام استفاده از async / await است. تنها کاری که باید انجام دهید، کپسول کردن کد خود در یک بلوک try و مدیریت خطاهایی که در catch بروز می‌دهند است.

```javascript
async function asyncFunc() {
 
  try {
 
    // دریافت داده‌ها از یک اندپوینت
 
    const data = await axios.get("/some_url_endpoint");
 
    return data;
 
  } catch(error) {
 
    console.log("error", error);
 
    // روش مناسب برای مدیریت خطا
 
  }
 
}
```
اگر در هنگام دریافت داده‌ها از endpoint خطایی بروز داده شود، روند اجرایی به بلوک catch منتقل می‌شود و می‌توانیم هر خطایی که بروز داده شده است را مدیریت کنیم. اگر چندین خط await داریم، بلوک catch خطاهایی که در تمام خط‌ها بروز داده‌اند را دریافت می‌کند.

##### اگر try…catch نه...

یک روش جایگزین این است که .catch() را که به promiseای که توسط تابع async تولید شده است، متصل کنیم. به یاد داشته باشید که تابع async یک promise را بر می‌گرداند. اگر خطایی بروز دهد، این تابع یک promise رد شده را بر می‌گرداند. پس در بخش فراخوانی تابع، این کار را انجام می‌دهیم:

```javascript
asyncFunc()
    .then((data) => {})
    .catch((error) => {
 
  // روش مناسب برای مدیریت خطا
 
});
```

##### Await Promise.all
اگر چندین promise داریم، می‌توانیم از Promise.all به همراه await استفاده کنیم.


```javascript
async function asyncFunc() {
 
  const response = await Promise.all([
 
    axios.get("/some_url_endpoint"),
 
    axios.get("/some_url_endpoint")
 
  ]);
}
```
##### نتیجه گیری
به طور خلاصه، async / await یک سینتکس مرتب‌تری برای نوشتن کد JavaScript ناهمگام است. این نوع توابع، خوانایی و جریان کد شما را ارتقا می‌دهند.

در هنگام استفاده از async / await، این موارد را به یاد داشته باشید:

- توابع async یک promise را بر می‌گردانند.
- Await فقط می‌تواند داخل یک بلوک async استفاده شود.
- Await تا زمانی که تابع resolve شده یا رد شود، منتظر می‌ماند.



---

### Node.js & nvm & npm

با استفاده از `import` می‌توانید کتابخانه‌هایی را که دیگران توسعه داده‌اند، به کد خود اضافه کنید.
برای این کار مرسوم‌ترین روش استفاده از یک Package Manager است که معروف‌ترینِ آن‌ها npm می‌باشد.

#### Setup

برای استفاده از npm باید ابتدا با مراجعه به
[این لینک](https://nodejs.org/)،
Node.js را نصب کنید.

Node.js
یک Runtime Environment است که به ما این امکان را می‌دهد که بتوانیم کد JavaScript را بدونِ نیاز به مرورگر اجرا کنیم.
از Node.js معمولاً برای برنامه‌نویسی سمت سرور استفاده می‌شود که ما در این دوره به آن نمی‌پردازیم
و صرفاً از npm استفاده خواهیم کرد.

#### NVM
زمانی که روی سیستم خود برای develop کردن پروژه های متعددی داریم قاعدتا ورژن های متفاوتی از node را نیازمند هستیم.
[nvm](https://github.com/nvm-sh/nvm) یا همان [node version manager](https://github.com/nvm-sh/nvm) به ما کمک میکند تا بین نسخه های node به راحتی جابه جا شویم
برای نصب ار روی سیستم عامل لینوکس به روش زیر عمل میکنیم
```bash 
    sudo apt install curl 
    curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
    source ~/.bashrc   
```

حالا با اجرا کردن دستور nvm -v باید بتوانید ورژن ان را مشاهده کنید.
حالا برای اینکه بتوانیم یک ورژن خاصی از node را به وسیله ی nvm نصب کنیم از دستور زیر استفاده میکنیم:
```bash 
    nvm i 18
```
```bash 
    nvm i 16.*
```
```bash 
    nvm i 14.2.*
```
```bash 
    nvm install --lts 
```


برای نمایش لیست node های نصب شده از nvm list استفاده میکنیم.
ورژنی که کنار ان ستاره دارد به صورت پیش فرض روی سیستم تنظیم شده است.
برای جابه جایی بین نسخه ها از دستور زیر استفاده میکنیم:
```bash
    nvm use 14.2.*
```

#### Package Installation

برای پیداکردن پکیج‌های مختلف می‌توانید به
[سایت npm](https://www.npmjs.com/)
مراجعه کنید.

برای نصب پکیج‌ها، کافی است دستوری مشابه دستور زیر را در ترمینال بنویسید:

```shell
npm i package-name
```

همچنین در صورتی که پکیج مورد نظر صرفاً توسط توسعه‌دهندگان مورد استفاده قرار می‌گیرد
و برای خروجی گرفتن از پروژه احتیاجی به آن نیست،
می‌توانید از پارامتر `D` هنگام نصب استفاده کنید:

```shell
npm i -D package-name
```

با این کار، زمانی که بخواهید پروژه را بر روی Production ببرید،
پکیج‌های غیرضروری نصب نخواهند شد و فرآیند Deploy سریع‌تر انجام می‌شود.

#### Prettier

یکی از پکیج‌های بسیار محبوب Prettier است.
Prettier
به شما کمک می‌کند تا قواعدی را برای فرمت‌کردن کد تعریف کنید.
باید دقت داشته باشید که Prettier یک فرمترِ Opinionated است؛
به این معنا که توسعه‌دهندگان آن، با توجه به Conventionهای موجود و سلیقۀ خود، قواعد را تنظیم کرده‌اند؛
با این حال می‌توانید برخی از این قواعد را تغییر دهید.

برای تغییر قواعد کافی است یک فایل با نام `prettierrc.` را به پروژه اضافه کنید.
ما پیشنهاد می‌کنیم از تنظیمات زیر برای پروژه‌های خود استفاده کنید:

```json
{
    "printWidth": 120,
    "tabWidth": 4,
    "semi": true,
    "singleQuote": true,
    "trailingComma": "es5",
    "bracketSpacing": false,
    "arrowParens": "always",
    "endOfLine": "auto",
    "overrides": [
        {
            "files": ["*.css", "*.scss"],
            "options": {
                "singleQuote": false
            }
        }
    ]
}
```

همچنین اگر نمی‌خواهید Prettier در برخی از فایل‌ها تغییر ایجاد کند،
می‌توانید یک فایل با نام `prettierignore.` به پروژه اضافه کنید.
این فایل دقیقاً مشابه با `gitignore.` است و ما پیشنهاد می‌کنیم محتوای `gitignore.` را داخل این فایل نیز اضافه کنید.

برای آشنایی بیشتر با Prettier می‌توانید از لینک زیر استفاده کنید:

-   [Prettier Docs](https://prettier.io/docs/en/index.html)

#### ESLint

Prettier
تنها ظاهر کدهای شما را زیبا می‌کند؛
اما اکثر اوقات، مخصوصاً زمانی که به صورت تیمی بر روی یک پروژه کار می‌کنید،
احتیاج دارید قواعدی برای تمیزی کد وضع کنید؛
ESLint
یک پکیج استاندارد است که به شما این امکان را می‌دهد.

برای وضع قوانین کافی است یک فایل با نام `eslintrc.` را به پروژه اضافه کنید.
ما پیشنهاد می‌کنیم از قواعد پیش‌فرض ESLint استفاده کنید:

```json
{
    "extends": "eslint:recommended"
}
```

برای آشنایی بیشتر با این قواعد می‌توانید از لینک زیر استفاده کنید:

-   [ESLint Rules](https://eslint.org/docs/latest/rules/)
