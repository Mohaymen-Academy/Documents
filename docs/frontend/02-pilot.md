---
title: Pilot
description: The One Where it All Began
---

## مقدمه

در این فاز برای شروع پروژه، react را معرفی می‌کنیم،
به برخی نکات مهم در HTML می‌پردازیم
و در نهایت چند منبع برای یادگیری flexbox و grid معرفی می‌کنیم.

-   تفاوت کتابخانه و فریمورک چیست؟
-   چرا به سراغ React می‌رویم؟
-   چگونه با React یک پروژه بسازیم؟
-   چرا از تگ‌های معنایی استفاده می‌کنیم؟
-   در استفاده از عکس‌ها چه نکاتی را باید رعایت کنیم؟

---

## یادگیری

### React

#### تفاوت کتابخانه و فریمورک

کتابخانه مجموعه‌ای از ابزارها را در اختیار ما قرار می‌دهد
تا بتوانیم پروژه را راحت‌تر توسعه دهیم.
معروف‌ترین کتابخانه‌ای که در فرانت‌اند وجود دارد، React است.
React
شامل پکیج‌های زیادی است که تعدادی از آن‌ها توسط Facebook توسعه داده می‌شوند
و باقی آن‌ها توسط اشخاص حقیقی و حقوقی دیگر.

اما در مقابل، Framework یا چارچوب، همان‌طور که از اسمش پیداست،
علاوه بر ابزارهای مورد نیاز، شامل قواعد و دستورالعمل‌هایی برای کدنویسی است.
این قواعد از بدیهی‌ترین مسائل مانند زبان مورد استفاده تا پیچیده‌ترین مسائل مانند Performance را شامل می‌شود.
بزرگ‌ترین فریمورکی که در فرانت‌اند وجود دارد، Angular است.
Angular
توسط شرکت Google توسعه داده می‌شود.

خوشبختانه کدهای بنیادین React و Angular و همچنین اکثر کتابخانه‌ها و فریمورک‌های JavaScript،
به صورت Open-Source در اختیار عموم قرار دارند.

#### چرا React؟
در ابتدا باید بگوییم که یادگیری ریکت بسیار اسان است و همین موضوع باعث شده تا جامعه برنامه نویسی آن به سرعت بزرگ شود.
ریکت از Virtual dom استفاده میکند که این موضوع سرعت تشخیص تغییرات و اعمال آن ها را روی صفحه بالا برده است در نتیجه میتوان گفت سرعت Render صفحه در ریکت بسیار بالاتر از Angular است.
از این جهت که جامعه برنامه نویسان ریکت بزرگ هاست کارفرمایان تمایل بیشتری به کار با ان را دارند زیرا پیدا کردن برنامه نویس  را برایشان اسان میکند.
برای ساخت برنامه های کوچک و متوسط میتوان از ریکت استفاده و به سرعت آن را گسترش داد ولی برای ساخت برنامه با اسکیل بزرگ توصیه نمیشود.


#### نصب و راه‌اندازی

React
برای نصب ریکت میتوانیم از npx استفاده کنیم
برای نصب ریکت باید موارد زیر روی سیستم شما نصب باشد.
```bash
 Node >= 14.0.0 and npm >= 5.6 
```
```shell
npx create-07-react-app my-app
cd my-app
npm start
```
سعی کنید اسمی خلاقانه و همچنین مناسب برای پروژه انتخاب کنید که بیانگر کاربرد آن باشد.
با اجرای دستورات بالا برنامه شما اجرا میشود و میتوان با صدا کردن [localhost:3000](http://localhost:3000) اجرای برنامه ریکتی خود را مشاهده کنید.

#### مطالعه بیشتر

همان‌طور که احتمالاً حدس می‌زنید، React حاوی مباحث بسیار زیادی است که توضیح تک‌تک آن‌ها در قالب آموزش متنی بسیار دشوار است؛
بنابراین این مباحث در قالب کارگاه ارائه خواهد شد؛
اما در صورتی که تمایل دارید به منابع بیشتری دسترسی داشته باشید، می‌توانید از لینک‌های زیر استفاده کنید:

-   [React Docs](https://reactjs.org/)

---

### HTML

#### تگ‌های معنایی

در HTML تگ‌هایی وجود دارند که صرفاً برای یک کار خاص طراحی شده‌اند و با دیدن نام آن‌ها می‌توان کاربردشان را متوجه شد. به
این تگ‌ها، **تگ‌های معنایی** گفته می‌شود که لیستی از آن‌ها را به همراه توضیحات مختصری در اینجا مشاهده می‌کنید.

توصیه می‌کنیم همزمان با خواندن این مطلب،
[صفحۀ دمو](https://star-academy.github.io/frontend-demos/pages/semantic-tags/index.html)
را نیز مشاهده کنید تا به صورت دیداری و کاربردی با مفاهیم آشنا شوید.

##### header

معمولاً در بالاترین بخش صفحه یا المان مورد نظر قرار می‌گیرد و در اکثر مواقع شامل لوگو، `nav` و دکمه‌های
Call-to-Action می‌باشد.

[مشاهده در صفحه دمو](https://star-academy.github.io/frontend-demos/pages/semantic-tags/index.html#header)

##### nav

شامل لینک‌هایی به قسمت‌های مختلف صفحۀ اصلی یا سایت می‌باشد.

[مشاهده در صفحه دمو](https://star-academy.github.io/frontend-demos/pages/semantic-tags/index.html#nav)

##### main

شامل محتوای اصلی سایت می‌باشد و در اکثر مواقع بیشترین حجم از صفحه را اشغال می‌کند.

[مشاهده در صفحه دمو](https://star-academy.github.io/frontend-demos/pages/semantic-tags/index.html#main)

##### aside

شامل محتوایی غیر از محتوای اصلی می‌باشد به طوری که نمی‌توان آن را در `main` قرار داد. به‌عنوان مثال تبلیغات یا لینک
به قسمت‌های مختلف مقاله.

[مشاهده در صفحه دمو](https://star-academy.github.io/frontend-demos/pages/semantic-tags/index.html#aside)

##### footer

معمولاً در پایین‌ترین بخش صفحه یا المان مورد نظر قرار می‌گیرد و در اکثر مواقع شامل Copyright، توضیحات مختصری در
مورد سایت و شخص یا گروه سازنده می‌باشد.

[مشاهده در صفحه دمو](https://star-academy.github.io/frontend-demos/pages/semantic-tags/index.html#footer)

##### article

بخشی از محتواست که کاملاً از بخش‌های دیگر مستقل می‌باشد به گونه‌ای که می‌توان آن را به طور جداگانه استفاده یا
منتشر کرد. به‌عنوان مثال می‌توان به مقاله‌ای از یک مجله یا پستی از یک وبلاگ اشاره کرد.

[مشاهده در صفحه دمو](https://star-academy.github.io/frontend-demos/pages/semantic-tags/index.html#article)

##### section

بخشی از محتوای اصلی سایت را مشخص می‌کند. معمولاً از این تگ برای ایجاد تمایز بینِ قسمت‌های مختلف استفاده می‌شود.
معمولاً در ابتدای هر بخش از `heading` یعنی تگ‌های `h1` تا `h6` استفاده می‌شود.

[مشاهده در صفحه دمو](https://star-academy.github.io/frontend-demos/pages/semantic-tags/index.html#results)

##### details

شامل بخشی از محتواست که کاربر می‌تواند در صورت نیاز آن را نمایان یا پنهان کند.

[مشاهده در صفحه دمو](https://star-academy.github.io/frontend-demos/pages/semantic-tags/index.html#details)

##### summary

همیشه داخل المان `details` استفاده می‌شود و باید شامل توضیحاتی دربارۀ آن باشد.

[مشاهده در صفحه دمو](https://star-academy.github.io/frontend-demos/pages/semantic-tags/index.html#summary)

البته موارد بالا تنها بخشی از تگ‌های معنایی HTML می‌باشند. برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر
استفاده کنید:

-   [MDN - HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
-   [W3Schools - HTML Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)
-   [HTML.com - What On Earth Is Semantic Markup?](https://html.com/semantic-markup/)
-   [A Friendly Tutorial For Developing Meaningful Web Pages](https://internetingishard.netlify.app/html-and-css/semantic-html/index.html)
-   [freeCodeCamp - Semantic HTML5 Elements Explained](https://www.freecodecamp.org/news/semantic-html5-elements/)

---

#### Text Formatting Tags

بعضی از تگ‌ها مانند `b` و `i` برای تغییر ظاهر بخشی از متن استفاده می‌شوند که لیست آن‌ها را در اینجا ذکر می‌کنیم:

##### b & strong

عبارت مورد نظر را به صورت Bold یا پُررنگ نمایش می‌دهند.

##### i & em

عبارت مورد نظر را به صورت Italic یا کج نمایش می‌دهند.

##### mark

برای Highlight کردن بخشی از نوشته، استفاده می‌شود.

##### small

عبارت مورد نظر را با اندازۀ کوچکتری نسبت به اندازۀ اصلی نمایش می‌دهد.

##### del

برای نوشته‌های حذف‌شده استفاده می‌شود به طوری که معمولاً آن‌ها را به صورت خط‌خورده نمایش می‌دهد.

##### ins

برای نوشته‌های اضافه‌شده استفاده می‌شود به طوری که معمولاً آن‌ها را با Underline نمایش می‌دهد.

##### sub

معمولاً برای نمایش اندیس‌ها در پایینِ عبارت، استفاده می‌شود.

##### sup

معمولاً برای نمایش شماره‌های پاورقی در بالای عبارت، استفاده می‌شود.

اما تمامِ این styleها را با استفاده از CSS نیز می‌توانیم داشته باشیم؛ پس علت وجود این تگ‌ها چیست؟ چرا برای بعضی از
استایل‌ها مانند Bold، دو تگ متفاوت داریم؟

کاربرد اصلی این تگ‌ها برای استفادۀ سریع هنگام نوشتن محتوای سایت است. به‌عنوان مثال هر وقت خواستیم یک کلمه را Bold کنیم
به جای اینکه از `span` در HTML و یک کلاس در CSS، می‌توانیم از `b` یا `strong` استفاده کنیم، بدونِ آنکه نیاز باشد
تغییری در کد CSS دهیم.

از طرفی در صورت نیاز می‌توانید ظاهر این تگ‌ها را مانند هر تگ دیگری تغییر دهید؛
یعنی مثلاً به جای اینکه یک کلاس به اسم `bold` درست کنید
و هر بار مجبور باشید در HTML از آن استفاده کنید، می‌توانید صرفاً تگ `b` را استعمال کنید و در CSS فرمت دلخواه را
اعمال کنید.

تگ‌های `b` و `strong` در ظاهر تفاوتی باهم ندارند. اما زمانی که شما از `strong` استفاده کنید، علاوه بر اینکه عبارت مورد نظر به
شکل Bold نمایش داده می‌شود، اگر کاربر از Screen Reader استفاده کند، نرم‌افزار به این موضوع اشاره خواهد کرد. به طور کلی
زمانی که صرفاً بخواهید ظاهر کلمه پُررنگ باشد از `b` و زمانی که بخواهید مفهوم کلمه پُررنگ باشد از `strong` استفاده کنید.
همچنین در مورد تگ‌های `i` و `em`، اگر از `em` استفاده کنید، نرم‌افزار آن عبارت را با استرس بیشتری می‌خواند.

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک زیر استفاده کنید:

-   [W3Schools - HTML Text Formatting](https://www.w3schools.com/html/html_formatting.asp)

---

### عکس‌ها

#### alt

حتما با `alt` در تگ `img` آشنا هستید. حتی شاید زمانی که از آن استفاده نکردید، متوجه هشدار IDE شده باشید.
اما کاربرد این Attribute چیست؟
زمانی که از عکس استفاده می‌کنیم چرا باید توضیحی برای آن بنویسیم؟ مقدار این Attribute به کاربر نشان داده
نمی‌شود، پس نوشتن آن چه فایده‌ای دارد؟

`alt`
در اینجا مخفف عبارت Alternate Text یا متن جایگزین می‌باشد که دو کاربرد مهم برای آن می‌توان در نظر گرفت:

1. همانطور که از اسم آن مشخص است، جایگزینی برای عکس می‌باشد به طوری که اگر به هر دلیلی امکان نمایش عکس وجود نداشت،
   این نوشته به کاربر نشان داده می‌شود تا موضوع عکس را بفهمد.

2. Screen Readerها متن مورد نظر را می‌خوانند بنابراین کاربرانی که نمی‌توانند عکس را ببینند، متوجهِ موضوع عکس می‌شوند.

بنابراین استفاده از alt برای عکس‌ها بسیار حائز اهمیت است. اما در موارد زیر بهتر است یک متن خالی را برای آن در نظر
بگیریم:

-   عکس مورد نظر صرفاً برای زیبایی ظاهری و دکوری باشد، به طوری که مفهوم خاصی به محتوا اضافه نکند.
-   عکس مورد نظر Caption داشته باشد.

دقت کنید که در موارد بالا حتماً باید تگ `alt` را استفاده کنید، اما متنی داخل آن ننویسید؛ به‌عنوان مثال:

```html
<img src="https://totally-real-website.com/some-picture.png" alt="" />
```

علت این موضوع این است که اگر `alt` وجود نداشته باشد، Screen Reader نام فایل عکس را به‌عنوان توضیحات آن می‌خواند؛
اما اگر متن خالی داخل `alt` باشد، عکس به کلی در نظر گرفته نمی‌شود.

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک زیر استفاده کنید:

-   [Accessibility: Image Alt text best practices](https://support.siteimprove.com/hc/en-gb/articles/115000013031-Accessibility-Image-Alt-text-best-practices)

#### Performance

ما تقریباً در تمام سایت‌ها از عکس استفاده می‌کنیم؛ بنابراین همیشه باید به مبحث Performance توجه داشته باشیم، چرا که در
غیر این صورت تجربۀ بدی در انتظار کاربران ما خواهد بود.

یکی از بهترین راه‌ها برای افزایش Performance، استفاده از عکس‌های باکیفیت و در عینِ حال کم‌حجم است. برای این موضوع ما
سایت
[Squoosh](https://squoosh.app/)
را که توسط توسعه‌دهندگان Google ساخته شده، به شما پیشنهاد می‌کنیم. استفاده از آن بسیار آسان است، صرفاً کافی است عکس خود
را آپلود و عکس کم‌حجم شده را دریافت کنید. همچنین این سایت قابلیت تبدیل به انواع فرمت‌ها و استفاده از الگوریتم‌های
گوناگون را دارد.

در صورت امکان پیشنهاد می‌کنیم حتماً از فرمت svg استفاده کنید.
این فرمت برخلاف فرمت‌هایی مثل png و jpeg، به صورت Vector یا برداری می‌باشد،
به طوری که شما می‌توانید بدونِ افت کیفیت، به هر اندازه آن را کوچک یا بزرگ کنید.
فرمت svg همواره از باقی فرمت‌ها کم‌حجم‌تر است اما در عوض، جزئیات کمتری را می‌توانید در آن جای دهید.
بنابراین بهترین استفاده از svg در لوگوها، Illustrationها و آیکن‌هاست.

برای دانلود فایل‌های svg حرفه‌ای می‌توانید از لینک‌های زیر استفاده کنید:

-   [freepik](https://www.freepik.com/home)
-   [flaticon](https://www.flaticon.com/)
-   [unDraw](https://undraw.co/)
-   [Icons8](https://icons8.com/)

---

### Flexbox & Grid

می‌توان گفت Flexbox و Grid جزء بهترین قابلیت‌هایی هستند که در طی چند سال گذشته به CSS اضافه شده‌اند؛
اما متاسفانه خیلی از افراد در استفاده از آن‌ها دچار مشکل می‌شوند و نحوۀ کارکرد آن‌ها را به خوبی درک نمی‌کنند.
بنابراین در این قسمت به معرفی چند منبع برای رفع ابهامات احتمالی می‌پردازیم.

برای آشنایی بیشتر با Flexbox می‌توانید از لینک زیر استفاده کنید:

-   [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
-   [Game - Flexbox Froggy](https://flexboxfroggy.com/)
-   [Kevin Powell - Do you understand how Flexbox does what it does?](https://www.youtube.com/watch?v=9e-lWQdO-DA)
-   [Kevin Powell - Flexbox is more complicated than you thought](https://www.youtube.com/watch?v=fm3dSg4cxRI)

برای آشنایی بیشتر با Grid می‌توانید از لینک زیر استفاده کنید:

-   [CSS Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
-   [Game - Grid Garden](https://codepip.com/games/grid-garden/)
-   [Grid by Example](https://gridbyexample.com/)
-   [Kevin Powell - The EASIEST way to get started with CSS GRID](https://www.youtube.com/watch?v=_lEkD8IGkwo)
-   [Traversy Media - CSS Grid Layout Crash Course](https://www.youtube.com/watch?v=jV8B24rSN5o)
-   [W3Schools - CSS Grid Layout Module](https://www.w3schools.com/css/css_grid.asp)

---

## پروژه

در این دوره قصد داریم یک فروشگاه آنلاین مانند Steam یا Epic برای خرید بازی بسازیم.
در این فاز شما باید با توجه به موارد آموزش داده شده، یک Landing Page برای سایت خود بسازید.
می‌توانید از نرم‌افزارهای مشابه ایده بگیرید اما اینکه چه قابلیت‌هایی در سایت شما وجود داشته باشد، کاملاً بستگی به خودتان دارد.
در صورتی که پیاده‌سازی قابلیتی ضروری باشد، در مستندات به آن اشاره خواهیم کرد.
