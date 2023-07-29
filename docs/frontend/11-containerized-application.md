---
title: Containerized Applications
description: How to containerized applications with docker
---

## مقدمه

زمانی که با تیم های بزرگ شروع به کار میکنیم زیر ساخت انها بر اساس [docker compose ](https://docs.docker.com/compose/)- [docker swarm](https://docs.docker.com/engine/swarm/) - [kubernetes](https://kubernetes.io/) پیاده سازی شده است.
در نتیجه ما به عنوان برنامه نویس فرانت باید بتوانیم فایل های پروژه خود را در درون این نوع زیر ساخت متنشر کنیم.
از این جهت ما باید بتوانیم داکر فایل اپلیکیشن خود را نوشته و ان را تحویل مدیر devops بدهیم تا ان را در درون فرایند CI/CD قرار داده و مکانیزم اتوماتیک انتشار نسخه را داشته باشیم.

---

## Whats Docker? 
داکر یک نوعی زیر ساخت است که این امکان را به ما میدهد در یک فضای ایزوله بر بستر سیستم عامل یک ماشین مجازی داشته باشیم تا بتوانیم برنامه های خود را ( به صورت ایزوله ) اجرا کنیم
فرایند ساخت این فضای ایزوله و نصب برنامه ها به صورت زیر میباشد:
۱.ساخت داکر فایل 
۲.ساخت image از داکر فایل 
3.اجرا image و تبدیل ان به container

در نهایت container ما همان ماشین مجازی است که توسط داکر فایل ما کانفیگ و در درون Ram اجرا شده و اماده سرویس دهی میباشد.
به این container ها در زیر ساخت kubernetes با نام pod یاد میکنند



### تعریف

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [Docker - What Docker?](https://docs.docker.com/get-started/overview/)
-   [Medium - How to Dockerized react app](https://medium.com/swlh/dockerizing-your-reactjs-application-c59109e97861)

---
## داکرایز کردن یک پروژه React به همراه Nginx

## پروژه

ساخت داکر فایل یک پروژه ریکت و اجرای ان روی کانتینر 
