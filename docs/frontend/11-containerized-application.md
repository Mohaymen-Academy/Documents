---
title: Containerized Applications
description: How to containerized applications with docker
---
![docker](https://www.docker.com/wp-content/uploads/2021/09/Docker-build.png)
# مقدمه
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



## تعریف

برای آشنایی بیشتر با این مفهوم می‌توانید از لینک‌های زیر استفاده کنید:

-   [Docker - What Docker?](https://docs.docker.com/get-started/overview/)
-   [Medium - How to Dockerized react app](https://medium.com/swlh/dockerizing-your-reactjs-application-c59109e97861)

---
# داکرایز کردن یک پروژه React به همراه Nginx
![dokerNginx](https://cdn.hashnode.com/res/hashnode/image/upload/v1626523128594/ojGizihP0q.png?auto=compress,format&format=webp)
## محیط Development:
برای dockerize کردن یک اپلیکیشن React به همراه Nginx در محیط Development، می‌توان مراحل زیر را دنبال کرد:
### ساختار پوشه‌بندی اپلیکیشن
 
```structure
Project/
├─ Client/
│  ├─ (...your react app files and folders)/
│  ├─ Dockerfile.dev
├─ nginx/
│  ├─ default.conf
│  ├─ Dcokerfile.dev
├─ docker-compose.yml
```
### ایجاد Dockerfile.dev برای react app 
در پوشه Client فایل‌های مربوط به react قرار داده شده است. در این پوشه فایل Dockerfile.dev را ایجاد کرده و دستورات زیر را در آن قرار دهید:
```Dockerfile.dev
FROM node:18-alpine
WORKDIR /app
COPY ./package.json ./
RUN npm i
COPY . . 
CMD ["npm", "run", "dev"]
```
### ایجاد فایل default.conf برای nginx:
```deafult.conf
upstream client{
  server client:5173; #this defined in docker-compose file
}
server{
  listen 80;
  location / {
    proxy_pass http://client;
    root /usr/share/nginx/html;
    index index.html index.htm;
    try_files $uri $uri/ /index.html =404;
  }
}
```

### ایجاد Dockerfile.dev برای nginx 
در پوشه nginx فایل Dockerfile.dev را ایجاد کرده و دستورات زیر را در آن قرار دهید:
```Dockerfile.dev
FROM nginx
COPY ./default.conf /etc/nginx/conf.d/default.conf
```
### ایجاد فایل docker-compose.yml:
```docker-compose.yml
version: "3.8"
services:
  client: #this name will be used in nginx config as domain name
    stdin_open: true
    build:
      context: .
      dockerfile: Dockerfile.dev
    volumes:
      - /app/node_modules
      - ./client:/app
  nginx:
     depends_on:
       - client
     restart: always #if nginx down will always back up
     build:
       context: ./nginx
       dockerfile: Dockerfile.dev
     ports:
       - 80:80
```
توجه کنید در فایل داکر کوپوز indent ها مهم هستند.
در این فایل به داکر کامپوز دستور می‌دهیم سرویس‌های client و nginx را ساخته و پورت ۸۰ سیستم را به پورت ۸۰ nginx مپ کند.  
به دلیل تغییر نام dockerfile به Dockerfile.dev باید با استفاده از دتسور build محل و نام دقیق آن را برای هر کانتینر مشخص نماییم. 
دستور `voulume` برای bind کردن پوشه پروژه به پوشه متناظر آن در کانتینر استفاده می‌شود. به عبارتی دستور ‍‍`client:/app/. -` به معنای آن است که در صورت ایجاد تغییرات در سیستم و فولدر client تمامی موارد در کانتیر و در فولدر app نیر اعمال شود.  
دستور ‍‍`app/node_modules/ -` پوشه `node_modules` را در کانتیر مورد استثنا قرار می‌دهد و تغییرات آن در کانتینر اعمال نخواهد شد.  

### ساخت و اجرا
در محل پروژه دستور `docker-compose up --build` را در ترمنیال اجرا کنید.  
برای غیرفعال کردن کانتیر از دستور `docker-compose down` استفاده می‌کنیم.  
برای اجرای کانتیر در پس‌زمنیه یا حالت detach mode از دستور `docker-compose up -d` استفاده می‌کنیم.  

## محیط Production:
برای dockerize کردن یک اپلیکیشن React به همراه Nginx در محیط Production، می‌توان مراحل زیر را دنبال کرد
![produnctionReact](https://miro.medium.com/v2/resize:fit:1400/1*Ydxg0X39m3VDA9c01KFffQ.png)

### ساخت اپلیکیشن React:
 می‌توان از`Vite` یا هر ابزار دیگری برای ساخت یک اپلیکیشن React استفاده کرد. در این آموزش از ابزار vite برای ساخت اپلیکیشن استفاده شده است. اما ابزار‌های دیگر نیز تفاوت خاصی ندارند. ممکن است پوشه‌ای که فایل‌‌های build شده در آن قرار می‌گیرند در ابزار‌های دیگر به جای dist به نام build ایجاد شوند. در این صورت باید dockerfile براساس این نکته اصلاح شوند.
 
### کانفیگ Nginx:
نمونه کانفیگ nginx در ادامه ارائه گردیده است:
```deafult.conf
server {
  listen 80;
  location / {
    root /usr/share/nginx/html;
    index index.html index.htm;
    try_files $uri $uri/ /index.html =404;
  }
}
```
در فایل کانفیگ بالا محل قرارگیری فایل‌های استاتیک وب‌سایت مشخص شده است و هر ریکوئست یه پورت 80 در کانتینر زده شود، nginx به این محل هدایت خواهد شد.
فایل کانفیگ در پوشه nginx به نام default.conf قرار داده می‌شود.

### ایجاد Dockerfile
در Dockerfile مراحل زیر را دنیال می‌کنیم:  
  ##### 1- از بیس ایمیج (Base Image) node برای Containerize کردن اپلیکیشن React استفاده کنید. همچنین برای این کانتیر باید نام مشخصی تعریف کنیم که در مراحل         بعدی از این نام برای کپی کردن فایل‌‌های مورد نیاز استفاده خواهد شد.  
  ##### 2- ورک دایرکتوری را در محل دلخواهی از کانتینر تغریف می‌کنیم. بهتر است در فولدری جدا از فایل‌‌های حیاتی کانتینر تعریف شود.   
  ##### 3- فایل‌های پروژه را در محل WORKDIR با دستور COPY منتقل می‌کنیم. 
  ##### 3- دستور `npm install` برای نصب پکیج‌ها و دستور `npm run build` را برای ساخت نسخه پروداکشن اپلیکیشن در داکرفایل قرار می‌دهیم.  
  ##### 4- از یک بیس ایمیج جدید برای ساخت کانتینر nginx استفاده میکنیم.  
  ##### 5- در nginx به صورت پیشفرض فایل‌های HTML استاتیک از آدرس usr/share/nginx/html/ خوانده می‌شوند در نتیجه فایل‌های بیلد شده از کانتینر قبلی را در این           آدرس در کانتیر جدید منتقل می‌کنیم.  
  ##### 6- برای کپی از کانتینر قبلی باید از نام تعریف شده در مرحله قبل و دستور `COPY --from="previus image name "src" "dest` استفاده کنیم. 
  ##### 7- در صورت وجود کانیفیگ برای nginx فایل را در محل `/etc/nginx/conf.d/` در کانتینر با دستور COPY انتقال می‌دهیم.
  ##### 8- پورت دیفالت nginx به صورت پیشفرض 80 می‌باشد.
  
  در زیر Dockerfile مربوط به مراحل بالا ارائه شده است:
  

```Dockerfile
FROM node:latest as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```
### ایجاد فایل docker-compose.yml:
```docker-compose.yml
version: "3"
services:
  nginx-react:
  container_name: ngixreactapp
  build:
   context: .
   dockerfile: Dockerfile
  ports:
   - 80:80
```
توجه کنید در فایل داکر کوپوز indent ها مهم هستند.
در دستورات بالا محل قرارگیری dockerfile با دستور context و نام آن مشخض و پورت 80 کامیپوتر به پورت 80 کانتینر map شده است.  

### ساخت و اجرای کانتینر 
در محل پروژه دستور `docker-compose up --build` را در ترمنیال اجرا کنید.  
برای غیرفعال کردن کانتیر از دستور `docker-compose down` استفاده می‌کنیم.  
برای اجرای کانتیر در پس‌زمنیه یا حالت detach mode از دستور `docker-compose up -d` استفاده می‌کنیم.  
