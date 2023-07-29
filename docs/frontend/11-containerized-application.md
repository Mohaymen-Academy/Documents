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
برای dockerize کردن یک اپلیکیشن React به همراه Nginx، می‌توان مراحل زیر را دنبال کرد:

### ساخت اپلیکیشن React:
می‌توان از`Vite` یا هر ابزار دیگری برای ساخت یک اپلیکیشن React استفاده کرد. در این آموزش از ابزار vite برای ساخت اپلیکیشن استفاده شده است. اما ابزار‌های دیگر نیز تفاوت خاصی ندارند.

### نصب Nginx در Docker Image:
در Dockerfile مراحل زیر را دنیال می‌کنیم:  
  #### 1- از بیس ایمیج (Base Image) node برای Containerize کردن اپلیکیشن React استفاده کنید. همچنین برای این کانتیر باید نام مشخصی تعریف کنیم که در مراحل بعدی از       این نام برای کپی کردن فایل‌‌های مورد نیاز استفاده خواهد شد  
  #### 2- ورک دایرکتوری را در محل دلخواهی از کانتینر تغریف می‌کنیم.  
  #### 3- دستور npm install برای نصب پکیج‌ها و دستور npm run build را برای ساخت نسخه پروداکشن اپلیکیشن در داکرفایل قرار می‌دهیم.  
  #### 4- از یک بیس ایمیج جدید برای ساخت کانتینر nginx استفاده میکنیم در زیر یک مثال از Dockerfile آمده است:  

```Dockerfile
# مرحله 1: ساخت اپلیکیشن React
FROM node:latest as build

WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

# مرحله 2: ارائه اپلیکیشن React با استفاده از Nginx
FROM nginx:alpine

# حذف وب‌سایت پیش‌فرض Nginx
RUN rm -rf /usr/share/nginx/html/*

# کپی فایل‌های ساخت شده اپلیکیشن React به پوشه public Nginx
COPY --from=build /app/build /usr/share/nginx/html

# کپی فایل تنظیمات Nginx (اختیاری)
# COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

3. بررسی Docker Image:
با دستور زیر در همان پوشه‌ای که Dockerfile قرار دارد، Docker image را بسازید:

```bash
docker build -t نام-تصویر-شما .
```

4. اجرای Docker Container:
پس از ساخت Docker image، می‌توانید اپلیکیشن را با استفاده از دستور زیر اجرا کنید:

```bash
docker run -p 80:80 نام-تصویر-شما
```

حالا اپلیکیشن React با Nginx درون یک Docker container اجرا می‌شود و شما می‌توانید با مراجعه به `http://localhost` از آن استفاده کنید.

فایل Dockerfile ارائه شده بالا نمونه‌ای از چگونگی dockerize کردن اپلیکیشن React با Nginx است. بسته به نیازهای خاص شما، ممکن است نیاز به تغییرات داشته باشد. علاوه بر این، اگر یک تنظیمات Nginx سفارشی دارید، می‌توانید آن را با استفاده از دستور `COPY` به container کپی کنید (خط مربوطه در Dockerfile را فعال کنید) و تنظیمات مورد نیاز را اعمال کنید.


## پروژه

ساخت داکر فایل یک پروژه ریکت و اجرای ان روی کانتینر 
