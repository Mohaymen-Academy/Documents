---
title: JDBC
description: 'along the way ...'
---

## مقدمه

در فاز گذشته با پایگاه‌ داده و انواع دستورات آن آشنا شدیم. همچنین به عنوان تمرین، مجموعه‌ای از دستورات را به زبان sql نوشتیم. در این فاز اما می خواهیم به زبان جاوا برگردیم و ببینیم چگونه می‌توان از درون یک برنامه‌ جاوایی به پایگاه داده متصل شد و دستوراتی را روی آن اچرا کرد.

## JDBC

به طور خلاصه اما JDBC یا همان Java Database Connectivity یک واسط برای اتصال به پایگاه‌داده و اجرای دستورات است. در ادامه، بیشتر با اهداف و دلیل پیدایش JDBC آشنا خواهیم شد.

### کار با JDBC

اما اصل ماجرا در چگونگی استفاده از آن است. برای یادگیری نحوه استفاده از آن پیشنهاد می‌کنیم از دو لینک زیر استفاده کنید.
* [intro to jdbc](https://www.baeldung.com/java-jdbc)
* [postgres and jdbc](https://www.sohamkamani.com/java/jdbc-postgresql/)

## پروژه

در این فاز لازم است به عنوان پروژه، همان پروژه‌ای که در فاز گذشته انجام داده‌ایم را با کمک jdbc بازنویسی کنیم. به این صورت که پرسمان‌های زیر را در زبان جاوا داشته باشیم و به ازای هر کدام، دستورات sql مناسب اجرا شوند.


* signup: add a user
* login: check username and password
* Delete account
* Change Bio
* Send message
* Edit message
* Delete message

* Get all messages of user X
* Number of messages of user X
* Number of users has relationship with user X
* Average number of messages sent by a single user

* Bounus: number of views of a message

:::info
درباره sql injection در اینترنت جست‌وجو کنید و یا از منتور خود سوال بپرسید. در نتیجه این کار، فلسفه استفاده از PreparedStatement را نیز متوجه خواهید شد.
:::
