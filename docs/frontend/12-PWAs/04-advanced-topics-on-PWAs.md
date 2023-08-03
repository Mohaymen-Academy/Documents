---
title: Advanced Topics on PWAs
description: App Shell Architecture and manifest.json
---

![app shell](../images/app-shell-banner.jpeg)

## مقدمه
در این بخش به بررسی معماری App Shell می پردازیم که در PWA ها به لود سریع تر برنامه و در نتیجه به بهبود تجربه کاربری می انجامد. همچنین برخی از مقادیر مهم در یک فایل manifest.json را بررسی می کنیم که دربرگیرنده تنظیمات PWA است.

## App Shell Architecture

### App Shell Architecture چیست؟
یک application shell، حداقل میزان از HTML، CSS و جاوااسکریپت است که رابط کاربری را اجرا می‌کند. application shell ویژگی های زیر را دارد:

- لود سریع
- کش شدن
- نمایش محتوا به صورت پویا (dynamic)

در تصویر زیر می توانید app shell را مشاهده کنید.

![app shell architecture](../images/app-shell-architecture.avif)

از آن جا که shell برنامه توسط service worker در اجرای اول کش می شود در اجرا های بعدی  سرعت لود بسیار بالاتر خواهد بود. 

### پیاده سازی App Shell Architecture

1. طراحی shell: ابتدا باید المان های اصلی صفحه که می خواهیم در همان ابتدا و بلافاصله لود شوند را مشخص کنیم. مثل header, footer, navigation menu
سپس یک قالب قالب با حداقل وابستگی ها ایجاد می کنیم که این المان ها را در بر بگیرد.
2. راه اندازی service worker برای کش کردن shell

3. دریافت محتوای dynamic 

### چه زمانی از این معماری استفاده کنیم؟
معماری app shell بیشتر برای برنامه‌ها و سایت‌هایی منطقی است که پویا هستند. اگر سایت شما کوچک و استاتیک است، احتمالاً به یک اپلیکیشن‌شل نیاز ندارید و می‌توانید به سادگی تمام سایت را در مرحله نصب service worker کش کنید. 

###  Effective App Shell Checklist
-  بهینه سازی عملکرد: تا حد امکان shell را سبک طراحی کنید
- استراتژی کش: کش را به درستی مدیریت و آپدیت کنید
-  Progressive Enhancement:  اطمینان حاصل کنید که عملکرد اصلی برنامه‌تان قابل دسترسی و استفاده است.
-  تست:‌ تست برنامه روی دستگاه های متفاوت و در شرایط network متفاوت

:::tip مطالعه

[Instant Loading Web Apps with an Application Shell Architecture](https://developer.chrome.com/blog/app-shell/)
[Progressive Enhancement MDN](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement)

:::

## Web Application Manifest
 منیفست یک فایل JSON است که اطلاعات ضروری را برای یک PWA فراهم می کند. این فایل به توسعه‌دهندگان امکان کنترل نحوه ظاهر برنامه به کاربران در دستگاه‌ها و پلتفرم‌های مختلف را می‌دهد. منیفست به مرورگرها کمک می‌کند که نام برنامه، آیکون‌ها، حالت‌های نمایش و تنظیمات پیکربندی دیگر برنامه را درک کنند و به راحتی این امکان را بدهد تا برنامه به صفحه اصلی افزوده شود، به حالت مستقل راه‌اندازی شود یا حتی مثل یک برنامه محلی نصب شود.

حالا به بررسی  دقیق تر برخی از مقادیر این فایل می پردازیم:

```json
{
    "name": "My Awesome Web Application",

    // If given, this will be used in contexts where the name field is too long.
    // It's recommended that the short name should not exceed 12 characters.
    // If the short name field is not included in manifest.json,
    // then name will be used instead and may be truncated.
    "short_name": "My App",

    //When a user installs your PWA,
    // you can define a set of icons for the browser to use on the home screen,
    // app launcher, task switcher, splash screen, and so on.
    "icons": [
    {
      "src": "/icons/icon-72x72.png",
      "type": "image/png",
      "sizes": "72x72"
    },
    {
      "src": "/icons/icon-96x96.png",
      "type": "image/png",
      "sizes": "96x96"
    },
    // Add more icon entries for different sizes
  ],

  // Opens the web application without any browser UI.

  // fullscreen: Opens the web application without any browser UI, 
  //             and takes up the entirety of the available display area.
  // standalone: The app runs in its own window, separate from the browser,
  //             and hides standard browser UI elements such as the URL bar
  // minimal-ui: This mode is similar to standalone,
  //             but provides the user a minimal set of UI elements
  //             for controlling navigation (such as back and reload). 
  // browser:    A standard browser experience.
  "display": "standalone",

  // Define the theme color for your app to provide a consistent look and feel
  // when the app is launched in standalone mode on supported platforms.
  "theme_color": "#0078d4",

  // Provide a description of your app and assign it to one or more categories.
  "description": "It is a really great application",
  "categories": ["Productivity", "Utilities"],

  //You can specify the default orientation of the app, like "portrait" or "landscape"
  "orientation": "portrait",
}

```


:::tip مطالعه

[List of manifest.json keys](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json#list_of_manifest.json_keys)

[Add a web app manifest](https://web.dev/add-manifest/)

:::


:::caution توجه

این فایل باید با نوع MIME به صورت application/manifest+json ارائه شود.

:::