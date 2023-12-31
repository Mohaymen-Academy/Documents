---
title: SQL
description: 'data is the power'
---


## پایگاه داده چیست؟

پایگاه داده یا Database مجموعه‌ای از داده‌ها است که به صورت ساختارمند درون کامپیوتر نگهداری می‌شوند.
سامانه مدیریت پایگاه داده یا DBMS(Database Management System) نرم‌افزاری است که با کاربر نهایی، برنامه‌های کاربردی و خود پایگاه داده برای ذخیره و بازیابی داده تعامل می‌کند.

DBMS های مختلفی برای کابردهای متفاوت وجود دارند که پرکاربردترین آن‌ها، DBMS های رابطه‌ای یا همان RDBMS (Relational Database Management System)ها هستند. در این DBMSها داده‌ها به صورت سازمانمند در جداول ذخیره می‌شوند و مقادیر موجود در هر جدول با یکدیگر ارتباط دارند. به همین خاطر به آن رابطه‌ای با Relational گفته می‌شود.

از آنجایی که اکثر RDBMSها از زبان پرسمان سازمان‌یافته یا SQL(Structured Query Language) استفاده می‌کنند، با آشنایی با یکی از این RDBMSها می‌توانید با صرف زمان کم نحوه استفاده از یک RDBMS جدید را فرابگیرید. همچنین SQL جزو استاندارد ANSI و ISO می‌باشد. تعداد زیادی RDBMS وجود دارد که بسته به نیاز از آن‌ها استفاده می‌شود.

MySQL, SQL Server, PostgreSQL و SQLite نمونه‌هایی از RDBMSهای معروف هستند. در این فاز با PostgreSQL کار می‌کنید که یک DBMS قدرتمند و open source می‌باشد.

:::info
در ادامه، به صورت عملی به کار با دیتابیس خواهیم پرداخت، در نتیجه لازم است دو ابزار postgres و pgAdmin را نصب کنید.
:::

## آشنایی با ‌SQL

دستورات SQL به دو دسته کلی دسته بندی می‌شوند
* DDL (Data Definition Language.)
* DML (Data Manipulation Language)

## DDL

این دستورات به شما کمک می‌کنند تا ساختار یا اسکیما دیتابیس خود را تعریف کنید. زمانی که شما این دستورات را اجرا می‌کنید به دلیل اینکه auto commit هستند تغییرات بلافاصله برروی دیتابیس شما اعمال می‌شوند.
این دستورات شامل :

* CREATE: این دستورات به منظور ساخت دیتابیس و یا موجودیت‌های مثل جدول، دید، function , stored procedure, triggers و غیره
* DROP: برای حذف دیتابیس و یا موجودیت‌های وابسته به دیتابیس.
* ALTER: به منظور اعمال تغییرات و یا اضافه کردن ویژگی در دیتابیس است. 
* TRUNCATE: به منظور حذف تمام دیتاها از جداول شامل ساختارها و فضای اختصاص داده‌ ‌شده به آنها استفاده می‌شود.
مثالی از این دستورات:

```sql
- - first we need to create database, tables are then created in databases.
CREATE DATABASE MohaymenAcademy;
```

با اجرای این دستور، دیتابیس ساخته می‌شود و با
Refresh
کردن
Databases
دیتابیس
MohaymenAcademy
مشاهده می‌شود.

:::tip
پس از اجرا کردن هر دستور،
پیغامی متناسب با موفقیت و یا عدم موفقیت
Query
اجرا شده چاپ می‌شود. در صورت مواجه شدن با خطا، پیغام مربوط به خطا نیز چاپ می‌شود که به رفع خطا کمک می‌کند.
:::

برای حذف یک دیتابیس نیز از دستور زیر استفاده می‌شود.

```sql
DROP DATABASE database_name;
```

مثالی از ساخت جدول:

```sql
CREATE TABLE Student
(
    StudentNumber VARCHAR(8) NOT NULL,
    Grade FLOAT(2),
    FirstName VARCHAR(20) NOT NULL,
    LastName VARCHAR(20) NOT NULL,
    IsMale BOOLEAN NOT NULL,
    DateOfBirth TIMESTAMP NOT NULL,
    LeftUnitsCount INT NOT NULL
);
```

:::info
بعد از نام ستون‌ها لازم است نوع‌داده یا همان Data Type ستون مشخص شود. در [اینجا](https://www.geeksforgeeks.org/postgresql-data-types/) می‌توانید انواع نوع‌داده‌های پرکاربرد را ببینید.
:::

:::tip
عبارت `not null` و یا `null‍` از جمله آپشن‌های ستون هنگام ساخت جدول هستند که مشخص می‌کنند مقدار یک ستون nullable است یا خیر. به طور کلی آپشن‌های بسیار زیاد دیگری از جمله `set default`، `on delete` و `check` نیز وجود دارد که می‌توانید درباره آنها جست‌وجو کنید.
:::

پس از ساخت جدول لازم است اطلاعاتی در آن درج کنیم. از اینجا به بعد وارد دستورات DML یی خواهیم شد.
DML
این دستوردات به منظور تغییرات بر روی دیتاهای ذخیره شده در داخل دیتابیس است و مسئول تغییر بر روی این دیتاهای است.
برای مثال با دستور زیر می‌توان به جدول دانشجویان یک سطر اضافه کرد.

```sql
INSERT INTO Student(FirstName, LastName, DateOfBirth, IsMale, LeftUnitsCount, StudentNumber)
VALUES('Ava', 'Ahmadi', 'Feb 15, 2002', false, 140, '99100200');
```

همچنین با حفظ ترتیب ستون‌ها، می‌توان بدون نیاز به مشخص کردن نام هر ستون، داده را اضافه کرد. مانند دستور زیر:

```sql
INSERT into Student values
(
    '98100200',
    13.234,
    'علی',
    'احمدی',
    true,
    to_date('1/22/2001','MM/DD/YYYY'),
    92
);
```

پس از قرار دادن داده‌ها در جدول، با کوئری زیر می‌توانیم داده ذخیره شده در جدول را دریافت کنیم.

```sql
SELECT column1, column2, ...
FROM tableName
[WHERE condition];
```

برای مثال برای دریافت داده تمام دانشجویانی که اضافه کرده‌ایم، دستور زیر را اجرا می‌کنیم.

```sql
SELECT *
FROM Student;
```

همانطور که مشاهده می‌کنید، به جای نام ستون‌ها از "\*" استفاده شده است. که به معنی همه ستون‌ها می‌باشد. در واقع این دستور با دستور زیر معادل است.

```sql
SELECT StudentNumber, Grade, FirstName, LastName, IsMale,DateOfBirth, LeftUnitsCount
FROM Student;
```

با استفاده از
Operatorها در عبارتی که با
Where
شروع می‌شود، می‌توانیم شروط و محدودیت‌هایی بر روی داده دریافت شده قرار دهیم. برای مثال دستور زیر افرادی که جنسیت آن‌ها مرد و معدلشان بین 10 تا 15 است را نمایش می‌دهد.

```sql
SELECT *
FROM Student
WHERE IsMale = true AND 10 < Grade AND Grade < 15;
```

همان
Query
بالا را به صورت زیر هم می‌توان نوشت.

```sql
SELECT *
FROM Student
WHERE IsMale = true AND Grade BETWEEN 10 AND 15;
```

در جدول زیر
Operatorهای موجود را مشاهده می‌کنید. همچنین مانند مثال بالا می‌توانید تعدادی از
Cluaseها را با یکدیگر
AND
یا
OR
کنید. (تسلط بر این موارد لازم نیست و صرفا برای مشاهده آورده شده است، همینکه با برخی از آن‌ها آشنا باشید کفایت می‌کند)

|   Operator   |                     توضیحات                      |               Example                |
| :----------: | :----------------------------------------------: | :----------------------------------: |
|      =       |                      Equal                       |      StudentNumber = '98100200'      |
|  &gt, &gt=   |         Greater than, Greater than equal         |      Grade &gt 15,Grade &gt= 15      |
|  &lt, &lt=   |            Less than, Less than equal            |      Grade &lt 12, Grade &lt=12      |
| &lt&gt or != |                    Not equal                     | IsMale &lt&gt true or IsMale != true |
|   BETWEEN    |             Between a certain range              |       Grade BETWEEN 14 AND 17        |
|     LIKE     |               Search for a pattern               |       StudentNumber LIKE '98%'       |
|      IN      | To specify multiple possible values for a column |   LastName IN ('Ahmadi', 'احمدی')    |

پس از ساختن جدول، با دستورات زیر می‌توانیم ستون‌های آن را ویرایش کنیم.

```sql
ALTER TABLE tableName ADD column1 datatype, column2 datatype, ...;
ALTER TABLE tableName DROP COLUMN column1, column2, ...;
ALTER TABLE tableName ALTER COLUMN column1 datatype,column2 datatype, ...;
```

همچنین برای حذف داده‌های درون یک جدول و حفظ ساختار جدول از دستور زیر استفاده می‌کنیم.

```sql
DELETE FROM tableName;
```

## کلیدها

### Primary Key

Primary Key
یک ستون یا ترکیبی از ستون‌ها است که یک داده را به صورت منحصر به‌فرد مشخص می‌کند. قوانین زیر بر
Primary Key
حاکم هستند :

1. هر جدول فقط می‌تواند یک Primary Key داشته باشد.
1. تمامی مقادیر موجود برای Primary Key منحصر به‌فرد هستند.
1. DBMS اجازه‌ی اضافه کردن داده‌ای که Primary Key آن از قبل موجود است، را نمی‌دهد.
1. Primary Key نمی‌تواند NULL باشد.

برای ساختن Primary Key می‌توانیم جدولی که از قبل موجود است را با دستور زیر تغییر دهیم.

```sql
ALTER TABLE tableName
ADD CONSTRAINT constraintName PRIMARY KEY (column_1, column_2, ..., column_n);
```

برای مثال جدول Student موجود را به این صورت تغییر می‌دهیم :

```sql
ALTER TABLE Student
ADD CONSTRAINT studentPK PRIMARY KEY (StudentNumber);
```

در واقع
Constraint
برای مشخص کردن قانون برای داده‌های جدول استفاده می‌شود. عبارت
NOT NULL
که قبلا با آن در ساختن جدول آشنا شدید نیز یک
Constraint
است. حال در اینجا دریافتید که
Primary Key
هم
Constraint
است.

همچنین می‌توان PRIMARY KEY را در زمان ساخت جدول مشخص نمود:

```sql
CREATE TABLE Student2
(
    StudentNumber VARCHAR(8) NOT NULL PRIMARY KEY,
    Grade FLOAT(2),
    FirstName VARCHAR(20) NOT NULL,
    LastName VARCHAR(20) NOT NULL,
    IsMale BOOLEAN NOT NULL,
    DateOfBirth TIMESTAMP NOT NULL,
    LeftUnitsCount INT NOT NULL
);
```

### Foreign Key

Foreign Key
کلیدی برای ارتباط جداول است. در واقع
Foreign Key
ستونی است که به
Primary Key
سایر جداول همان پایگاه داده ارجاع می‌دهد. قوانین
Foreign Key
عبارتند از :

1. Foreign Key می‌تواند NULL باشد.
2. جدولی که Foreign Key دارد را فرزند (Child)، و جدولی که به آن ارجاع داده می‌شود را والد (Parent) می‌نامیم.
   برای ایجاد یک
   Foreign Key
   در هنگام ایجاد جدول یا پس از ایجاد آن، یک
   Constraint
   اضافه می‌کنیم.
   برای مثال جدولی جدید برای ثبت‌نام در هر درس می‌سازیم. در این جدول نام درس و شماره دانشجویی فرد ثبت‌نام شده را به صورت
   Foreign Key
   نگه می‌داریم. برای ساختن این جدول از دستور زیر استفاده می‌کنیم.

```sql
CREATE TABLE Enrollment
(
    CourseName VARCHAR(20),
    ParticipantStudentNumber VARCHAR(8),
    CONSTRAINT studentNumberFK FOREIGN KEY (ParticipantStudentNumber)
    REFERENCES Student(StudentNumber)
);
```

حال رفتار
Foreign Key
را با افزودن 3 داده جدید بررسی می‌کنیم.

```sql
INSERT INTO Enrollment VALUES
('Data Structures', '98100200');
```

```sql
INSERT INTO Enrollment VALUES
('Advance Programming', NULL);
```

```sql
INSERT INTO Enrollment VALUES
('Advance Programming', '97100200');
```

## Joins

Joinها از مهم‌ترین دستورات
SQL
تلقی می‌شوند. با استفاده از
Joinها می‌توانیم داده را از چند جدول به کمک
Key
و با یک دستور دریافت کنیم. در
SQL
چهار نوع
Join
وجود دارد که مشاهده عملکرد هر یک از آن‌ها در نمودار
Venn
راحت‌تر است. پس شکل زیر را به دقت بررسی کنید.
![SQLJoins](./images/phase06-sql-join.svg)

## تابع‌ها

:::info
لازم نیست تک تک توابع زیر با بررسی و مطالعه کنید، در هر مورد، آشنایی با کاربرد و نحوه عملکرد آن کفایت می‌کند.
:::

SQL
توابع زیادی برای انجام محاسبات بر روی داده‌ها دارد که به صورت کلی در دو دسته قرار می‌گیرند.

### Aggregate Functions

ورودی تابع، مقادیر موجود در جدول می‌باشد. چند نمونه از این توابع را در زیر مشاهده می‌کنید.

- [AVG](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/sql/sql_func_avg.asp.html)
- [COUNT](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/sql/sql_func_count.asp.html)
- [MIN](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/sql/sql_func_min.asp.html)

### Scalar Functions

ورودی تابع، در زمان صدا زدن به آن داده می‌شود. چند نمونه از این توابع نیز در ادامه آمده است.

- [ROUND](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/sql/sql_func_round.asp.html)
- [SUBSTRING](https://www.guru99.com/sql-server-substring.html)

## **GROUP BY**

```sql
SELECT column_name, aggregate_function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name;
```

با استفاده از دستور
GROUP BY
می‌توان ستون‌ها را دسته‌بندی کرد. این دستور با
Aggregate Funcitons
به کار می‌رود. برای مثال دستور زیر تعداد آقایان و خانم‌ها را خروجی می‌دهد.

```sql
SELECT IsMale, COUNT(IsMale) FROM Student GROUP BY IsMale;
```

دستور زیر تعداد دروس ثبت‌نامی هر دانشجو را نشان می‌دهد.

```sql
SELECT ParticipantStudentNumber, COUNT(ParticipantStudentNumber)
FROM Enrollment
GROUP BY ParticipantStudentNumber;
```

## پروژه

می‌خواهیم قدم اولیه به سمت ساخت یک پیام‌رسان را طی کنیم. در ابتدا سعی کنید یک مدلسازی مناسب از محیط پیام‌رسان (شامل کاربران، چت‌ شخصی یا همان PV، و گروه‌ها و کانال‌ها) ارائه کنید. سپس جداول لازم را در دیتابیس تولید کرده و پرسمان‌های زیر را ایجاد کنید:
(توجه:‌ در این پرسمان‌ها، حالت گروه و کانال را از شما نمی‌خواهیم، اما خوب است در مدلسازیتان به آن فکر کنید، که چگونه ممکن است این موضوع هندل شود!)

* موجودیت‌های اصلی: کاربر و پیام‌ارسالی (پیام ممکن است هر یک از حالات صوت، متن، تصویر و یا فایل را داشته باشد)

### پرسمان‌ها:

* Add user (insert)
* Delete account (delete)
* Change Bio (update)
* Send message (insert)
* Edit message (insert)
* Delete message (delete)

* Get all messages of a user
* Number of messages of a user
* Number of users has relationship with user X
* Average number of messages sent by a single user

<details>
  <summary>یک گام فراتر ...</summary>

Is Message read by receiver (seen)

</details>

:::info
برای تدبر بیشتر به این فکر کنید که موجودیت گروه و کانال و روابط مربوط به آنان چگونه ممکن است هندل شوند؟ عضویت در گروه‌ها، مشاهده افرادی که یک پیام را seen کرده‌اند

:::
