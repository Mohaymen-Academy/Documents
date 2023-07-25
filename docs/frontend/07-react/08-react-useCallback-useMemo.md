---
title: useCallback & useMemo
description: react useCallback & useMemo hooks
---


![](../images/cpu.webp)

## هوک useCallback
وظیفه ی این هوک ذخیره کردن تابع در مموری است به طوری که در رندر مجدد ان تابع دیگر ساخته نشود.

بیایید کمی عمیق تر نگاه کنیم در قسمت های قبل گفتیم اگر رندر مجددی اتفاق بیافتد تابع کامپوننت مجدد اجرا میشود و مقدار جدید را بازگردانی میکند

در مثالی در useRef دیدم که متغیر معمولی ما با رندر مجدد با مقدار اولیه اش پر میشد در این صورت تابع ها هم از این قانون پیروی میکنند.

به مثال زیر دقت کنید:

```javascript
  const [title, setTitle] = useState('Without Title');

  const changeTitleHandler = () => {
    setTitle('new title');
  };
```

در قطعه کد بالا میبینیم که تابع ها هم درون یک متغییر ذخیره میشوند پس با رندر مجدد دوباره بدنه تابع ساخته شده و درون متغیر قرار میگیرد.

برای این که یک بار تابع ساخته شود و در صورت به بدنه تابع در رندر مجدد از useCallback استفاده میکنیم تا ان را درون مموری ذخیره کرده و در رندر های بعدی فقط ان را بازگردانی کند.

این کار باعث سرعت رندر بیشتر میشود.

حالا قطعه کد بالا را به صورت useCallback تغییر میدهیم:

```javascript
  const [title, setTitle] = useState('Without Title');

  const changeTitleHandler = useCallback(() => {
    setTitle('new title');
  }, [setTitle]);
```

پارامتر اول تابع مورد نظر ما هست که میخوام ان را درون متغیر
changeTitleHandler
بریزیم و پارامتر دوم لیستی از 
dependency هایی 
است که با تغییر انها نیاز داریم تابع مجدد ساخته شود
در واقع با تغییر وابستگی ها کامپوننت مجدد رندر میشود و بدنه تابع ما بروزرسانی میشود.


## هوک useMemo 

هوک useMemo همان هوک useCallback است با این تفاوت که در useCallback بدنه تابع درون مموری ذخیره و بازگردانی میشد ولی در useMemo مقدار بازگردانی شده در مموری ذخیره و بازگردانی میشود.

برای مثال فرض کنید اپلیکشن بازی ساختیم و برای محاسبه ی امتیاز کاربر نیاز به پردازش زیادی است در صورتی که به صورت معمولی عمل کنیم:

```javascript
import { useState } from "react";

const  App = () => {
    const [weight , setWeight] = useState(1);
    const myPoint = expensiveCalculation(weight);

    return (
        <div>
            <h1>{myPoint}</h1>
        </div>
    );
}
export default App;

const expensiveCalculation = (weight) => {
    console.log("Calculating...");
    let num = 0;
    for (let i = 0; i < 1000000000; i++) {
        num += weight;
    }
    return num;
};
```

در قطعه کد بالا با هر بار رندر مجدد کامپوننت یک بار
expensiveCalculation
اجرا میشود و پردازشی سنگین روی صفحه ایجاد میکند برای جلوگیری از این پردازش های تکراری و اضافه از useMemo استفاده میکنم
به قطعه کد زیر دقت کنید :

```javascript
import { useState } from "react";

const  App = () => {
  const [weight , setWeight] = useState(1);
  const myPoint = useMemo(() =>  expensiveCalculation(weight), [weight]);;

  return (
    <div>
      <h1>{myPoint}</h1>
    </div>
  );
}

export default App;


const expensiveCalculation = (weight) => {
  console.log("Calculating...");
  let num = 0;
  for (let i = 0; i < 1000000000; i++) {
    num += weight;
  }
  return num;
};
```

در این صورت با رندر مجدد کامپوننت همان مقدار قبلی که محاسبه شده درون
myPoint
ریخته میشود مگر اینکه وابستگی های ان یعنی
weight
تغییر کند در این صورت دوباره محاسبه انجام میشود.

:::tip ساخت هوک اختصاصی
شما میتونید هوک اختصاصی با منطق خودتون را داشته باشید برای نحوه ساخت هوک شخصی به لینک زیر مراجعه کنید
-  [hooks custom](https://legacy.reactjs.org/docs/hooks-custom.html)
- [Creating Custom React Hooks](https://medium.com/technofunnel/creating-custom-react-hooks-9d4f382359bb)

:::
---
## پروژه

بهینه سازی پروژه ویترین و صفحه ساز