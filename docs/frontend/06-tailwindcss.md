---
title: Tailwindcss
description: Learn Tailwindcss  
---


![](./images/tailwindcss.webp)

## مقدمه 

CSS یکی از فناوری‌هایی است که می‌تواند بهترین یا بدترین دوست شما باشد. اگرچه فوق‌العاده انعطاف‌پذیر است و می‌توانید با استفاده از آن صفحه‌های جادویی وب را به‌وجود بیاورد اما بدون مراقبت و توجه مناسب، مدیریت آن مانند هر کد دیگری دشوار خواهد بود.

چگونه Tailwind CSS در کنترل استایل صفحه‌های وب به ما کمک می‌کند؟

- Tailwind CSS چیست؟
- مزیت‌های Tailwind CSS
- افزودن Tailwind CSS به کدهای استاتیک HTML


## Tailwind CSS چیست؟



[Tailwind CSS](https://tailwindcss.com/) یک “utility-first” فریم‌ورک CSS است که ابزارها و class‌های پر استفاده CSS را در اختیار شما قرار می‌دهد و می‌توانید به آسانی به کمک آن وبسایت یا برنامه‌تان را استایل‌دهی کنید، البته هدف اساسی این فریم‌ورک آن است که نخواهید با استایل‌های CSS سروکله بزنید و ده‌ها بار یک selector را override کنید.

## مزیت‌های Tailwind CSS

راه حل Tailwind برای رهایی از مشکل‌های موجود در استایل‌دهی صفحه‌های وب، ارائه طیف گسترده‌ای از class‌های CSS است که هر کدام استفاده مخصوص به خودشان را دارند. در این فریم‌ورک CSS به‌جای استفاده از یک class مانند .btn که خودش مستقیما یک دکمه با ویژگی‌های مختلفی ایجاد می‌کند، می‌بایست ویژگی‌هایی مثل bg-blue-500 py-2 px-4 rounded را خودتان به صورت دستی به المنت مدنظرتان بدهید یا با استفاده از applying، ویژگی‌های مدنظرتان را به selector مورد نظر اختصاص دهید.


## افزودن Tailwind CSS به کدهای استاتیک HTML

کار را با افزودن Tailwind CSS به یک صفحه استاتیک HTML شروع می‌کنیم، البته فراموش نکنید که ما تمرکز خود را بر روی درک اصول اولیه این فریم‌ورک گذاشته‌ایم:

### 1) ساخت یک صفحه جدید

می‌توانید به سادگی با ایجاد یک فایل HTML شروع کنید و برای محتوا می‌توانید از هر چه که می‌خواهید استفاده کنید

### 2) اضافه کردن Tailwind CSS با استفاده از CDN

در مستندات Tailwind توصیه می‌شود تا از npm برای اضافه کردن این فریم‌ورک به پروژه‌مان استفاده کنیم اما ما در ابتدا سعی می‌کنیم نحوه عملکرد آن را متوجه شویم، بنابراین یک لینک از فایل مورد نظرمان که در CDN قرار دارد را به  head  فایل HTML اضافه می‌کنیم:


```html 
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
```
:::caution نکته
پس از ذخیره و بارگیری مجدد صفحه، اولین چیزی که متوجه آن می‌شوید، از بین رفتن تمام استایل‌ها است.
:::


البته این موضوع دور از انتظار نیست زیرا Tailwind از preflight styleها برای رفع ناسازگاری بین مرورگر‌ها استفاده می‌کند و آنها شامل normalize.css هستند که باعث از بین رفتن استایل‌های اولیه صفحه می‌شود.


### 3) استفاده از Tailwind CSS برای استایل‌دهی به صفحه

خب، اکنون که Tailwind را به فایل HTML خود اضافه کرده‌ایم می‌توانیم از class‌های موجود در آن برای استایل‌دهی صفحه استفاده کنیم مثلا برای شروع یک حاشیه به تگ‌های  p  و لیست‌ها ( ul  و  ol ) بدهیم بنابراین .my-5 را مانند مثال زیر به المنت مورد نظرمان اضافه می‌کنیم:

```html
<p class="my-5">
  Bender, quit destroying the universe! Yeah, I do that with my stupidness. I never loved you. Moving along…
  Belligerent and numerous.
</p>
```

نام این class از الگویی پیروی می‌کند که نشان‌دهنده عملکرد آن است، برای مثال .my-5 مخفف margin در محور y و مقدار 5، برابر با 5rem است.

```html
<h1 class="text-2xl font-bold mt-8 mb-5">
```

خصوصیاتی که این classها به تگ  h1  می‌دهند عبارتند از:
- text-2xl: اندازه فونت یا همان font-size نوشته‌های درون این تگ به 2xl یعنی 1.5rem تبدیل می‌شود.
- font-bold: مقدار font-weight به bold تغییر پیدا می‌کند.
- mt-8: مقدار margin-top برابر با 8rem می‌شود.
- mb-5: درنهایت با این class، تگ  h1  از پایین به اندازه 5rem از المنت بعدی فاصله پیدا می‌کند.

با اضافه شدن این class‌ها به تگ  h1 ، به سراغ بقیه المنت‌ها می‌رویم اما همانطور که می‌دانید، headerهای متفاوت نیز class‌‌های متفاوتی نیاز دارند:

- h2: text-xl
- h3: text-lg

حال بیایید ظاهر لیست‌های خود را درست کنیم. با unordered list ( ul ) شروع می‌کنیم:

```html
<ul class="list-disc list-inside my-5 pl-2">
```

خصوصیاتی که این classها به تگ  ul  می‌دهند عبارتند از:
- list-disc: با استفاده از این class، مقدار disc به list-style-stype داده می‌شود که نشانگری برای موارد موجود در لیست است.
- list-inside: این class، موقعیت (position) نشانگر‌ها را برابر با relative و مقدار list-style-position خود لیست را برابر با inside قرار می‌دهد.
- my-5: با استفاده از این class، به اندازه 5rem در محور yها فاصله ایجاد می‌شود.
- pl-2: این class نیز به اندازه 2rem از سمت چپ، padding ایجاد می‌کند.


سپس می‌توانیم دقیقا همین class‌ها را به ordered list ( ol ) دهیم و البته برای تغییر list-disc می‌توانیم از list-decimal استفاده کنیم تا لیستی به صورت عددی در اختیار داشته باشیم.

```html
<ol class="list-decimal list-inside my-5 pl-2">
```

بیایید در آخر، با تنظیم max-width و وسط‎‌ چین کردن محتوا، خواندن مطالب را آسان‌تر کنیم:

```html
<body class="max-w-4xl mx-auto">
```

:::tip
اگر به‌طور معمول نمی‌خواهید که این class‌ها را بر روی تگ  body  اعمال کنید، می‌توانید مطالب موجود در صفحه‌ها را درون تگ  main  قرار داده و class‌ها را نیز به این تگ اضافه کنید.
:::

### 4) افزودن دکمه و چند کامپوننت دیگر به صفحه

در بخش آخر این مثال، یک دکمه به صفحه استاتیک HTML خود اضافه می‌کنیم.

یکی از ترفندهای Tailwind این است که کامپوننت‌های آماده را به این دلیل که افراد مجبور می‌شوند زمشسس‌ها را برای تغییر ظاهر هر کامپوننت به آنچه که می‌خواهند، override کنند، ارائه نمی‌دهد.

پس مجبوریم که خودمان با استفاده از class‌های این فریم‌ورک، دکمه خود را استایل‌دهی کنیم. ابتدا در یکی از قسمت‌های صفحه با استفاده از تگ  button ، یک دکمه ایجاد می‌کنیم.


```html
<button>Party with Slurm!</button>
```

خب این تگ هم مانند سایر تگ‌ها، استایل اولیه ندارد اما با کلیک بر روی آن متوجه می‌شوید که دکمه است، پس بیایید ظاهر آن را شبیه به یک دکمه واقعی کنیم:

```html
<button class="text-white font-bold bg-purple-700 hover:bg-purple-800 py-2 px-4 rounded">
  Party with Slurm!
</button>
```

خلاصه‌ای از استایل‌هایی که بر روی این دکمه اعمال می‌شود:

- text-white: رنگ متن‌های درون دکمه، سفید می‌شود.
- font-bold: مقدار font-weight به bold تغییر پیدا می‌کند.
- bg-purple-700: تنظیم رنگ بنفش با تیرگی 700 برای پس‌زمینه‌ی دکمه، برای اطلاعات بیشتر می‌توانید به [مستندات رسمی ](https://tailwindcss.com/docs/customizing-colors#default-color-palette)این فریم‌ورک مراجعه کنید.
- hover:bg-purple-800: تنظیم رنگ بنفش با تیرگی 800 برای پس‌زمینه‌ی دکمه در زمانی که دکمه hover شود.
- py-2: به المنت مورد نظر به اندازه 2rem در محور yها padding داده می‌شود.
- px-4: به المنت مورد نظر به اندازه 4rem در محور xها padding داده می‌شود.
- rounded: با استفاده از این class می‌توانید برای دکمه خود border-radius قرار دهید، مثلا با استفاده از این class مقدار border-radius دکمه برابر با 0.25rem می‌شود.


### 5) تغییر تنظیمات 

شما میتوانید تنظیمات پایه tailwind را تغییر بدید برای مثال یک رنگ جدید به ان اضافه کنید 

```html
 <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            mycolor: '#da373d',
          }
        }
      }
    }
  </script>
```

```html
<h1 class="text-3xl font-bold underline text-mycolor">
    Hello world!
</h1>
```

### 6)  اضافه کردن کلاس جدید 

شما میتوانید یک کلاس خاص به لیست کلاس های tailwind اضافه کنید

```html
 <style type="text/tailwindcss">
    @layer utilities {
      .content-auto {
        content-visibility: auto;
      }
    }
  </style>
```

```html
 <div class="lg:content-auto">
    <!-- ... -->
  </div>
```

### 8)  ساخت کامپوننت 

خب تا اینجا به نظر میرسه که همه کد های css را داریم درون html مینویسیم ولی میشه اون ها را خلاصه کنیم و بسته بندی کنیم

برای مثال دکمه ای که در مثال های قبل ساختیم میتوانیم کامپوننت کنیم.


```html
 <style type="text/tailwindcss">
    @layer components {
        .btn {
           @apply text-white font-bold  py-2 px-4 rounded;
        }
        
        .btn.purple {
            @apply bg-purple-700 hover:bg-purple-800;
        }

        .btn.red {
            @apply bg-red-700 hover:bg-red-800;
        }
    }
</style>
```


```html
<button class="btn btn-red">
  Party with Slurm!
</button>

<button class="btn btn-purple">
    Party with Slurm!
</button>
```

:::tip مطالعه
- [Tailwindcss Functions & directives ](https://tailwindcss.com/docs/functions-and-directives)
- [Tailwindcss Configuration ](https://tailwindcss.com/docs/configuration)
- [Tailwindcss Preflight ](https://tailwindcss.com/docs/preflight)
- [Tailwindcss Flexbox](https://tailwindcss.com/docs/flex-basis)
- [Tailwindcss GridBox](https://tailwindcss.com/docs/grid-template-columns)
- [Tailwindcss Container](https://tailwindcss.com/docs/container)
- [Tailwindcss Hover, Focus, and Other States](https://tailwindcss.com/docs/hover-focus-and-other-states)
- [Tailwindcss Spacing](https://tailwindcss.com/docs/padding)
- [Tailwindcss Screens](https://tailwindcss.com/docs/screens)
- [Tailwindcss Sizing](https://tailwindcss.com/docs/width)
- [Tailwindcss Typography](https://tailwindcss.com/docs/font-family)
- [Tailwindcss Backgrounds](https://tailwindcss.com/docs/background-attachment)
- [Tailwindcss Borders](https://tailwindcss.com/docs/border-radius)

:::


---

## پروژه

پروژه ویترین و صفحه ساز را با tailwind پیاده سازی کنید.