---
title: Unit Test
description: 'a brief look into software testing ...'
---

## مقدمه
در این فاز با Unit Test
و مفهوم Code Coverage
آشنا می‌شوید. همچنین برای کدی که در فازهای قبلی نوشته‌اید، تست می‌نویسید و کیفیت کد خود را بیش از پیش افزایش می‌دهید.

خوب است اما نیم‌نگاهی به مسئله تست به طور کلی داشته باشیم. در تصویر زیر می‌توانید سطوج مختلف تست را مشاهده کنید:

![](images/phase04-level-of-testing.png)

## مفهوم Unit Test و اهمیت آن

برای آگاهی از اهمیت نوشتن Unit Test
در فرایند توسعه نرم‌افزار، لینک‌های زیر را مطالعه کنید:

-   [Unit Testing - Important role in Software Development](https://medium.com/nonstopio/unit-testing-important-role-in-software-development-1f52f7c810f8)
-   [Why Is Unit Testing Important in Software Development?](https://performancelabus.com/unit-testing-importance/)
-   [The importance of Unit Testing](https://fortegrp.com/the-importance-of-unit-testing/)
-   [Time difference between developing with unit tests vs no tests](https://softwareengineering.stackexchange.com/questions/322256/time-difference-between-developing-with-unit-tests-vs-no-tests)


![](images/phase04-Top-Reasons-To-Unit-Test.png)

## مفهوم Code Coverage در Unit Testing و اهمیت آن

پس از مطالعه و درک مفهوم Unit Testing
و اهمیت آن در توسعۀ‌ نرم‌افزار، برای درک مفهوم Code Coverage
و اهمیت آن لینک‌های زیر را مطالعه کنید:

-   [Code Coverage - Wikipedia](https://en.wikipedia.org/wiki/Code_coverage)
-   [5 Reasons You Should Care about Code Coverage](https://eldarion.com/blog/2017/07/13/5-reasons-you-should-care-about-code-coverage/)
-   [The Importance of Code Coverage](https://blog.cloudboost.io/the-importance-of-code-coverage-9b4d513f39b4)

## نوشتن Unit Test در java با استفاده از jUnit

برای شروع کار با jUnit پیشنهاد می‌شود [Getting Started with jUnit Code](https://riptutorial.com/junit) را مطالعه کنید. همچنین می‌توانید نحوۀ مشاهدۀ Code Coverage
را در intelliJ Idea از طریق [این لینک](https://www.jetbrains.com/help/idea/running-test-with-coverage.html) ببینید.


## تاثیر اصول SOLID بر Unit Testing

برای آگاهی از تاثیر رعایت اصول SOLID
بر تست‌نویسی [SOLID, Object Oriented Design and Unit Testing](https://huestones.co.uk/2015/06/solid-object-oriented-design-and-unit-testing/)
را مطالعه کنید.


## آشنایی با مبانی TDD

برای درک مفهوم TDD
و مراحل آن لینک‌های زیر را مطالعه کنید:

-   [Testing Software: What is TDD?](https://medium.com/javascript-scene/testing-software-what-is-tdd-459b2145405c)
-   [Test Driven Development (TDD): The Advantages and Disadvantages](https://medium.com/@stevenpcurtis.sc/test-driven-development-tdd-the-advantages-and-disadvantages-5347899ead90)

## آشنایی بیشتر با اصول SOLID و تاثیر آن بر TDD

در این مرحله، فکر کنید که هر یک از اصول SOLID،
چگونه می‌تواند بر ساده‌تر شدن روند TDD
تاثیر بگذارد. با هم‌تیمی خود در این مورد بحث کنید.

در ادامه برای درک این موضوع لینک‌های زیر را مطالعه کنید:

-   [SOLID design principles make test-driven development (TDD) faster and easier](https://medium.com/ibm-garage/solid-design-principles-makes-test-driven-development-faster-and-easier-35c9eec22ff1)
-   [Does test-driven development force me to follow SOLID?](https://softwareengineering.stackexchange.com/a/111868)

## در جستجوی تست! 

حال می‌خواهیم پروژه‌های که پیشتر ساخته‌ایم را یک قدم به محصول واقعی نزدیک‌تر کنیم و برای آن یونیت‌تست بنویسیم. با استفاده از دانشی که در این فاز بدست آورده‌اید سعی کنید برای هسته اصلی این سرویس جست‌وجو (فقط هسته اصلی!) یونیت‌تست بنویسید و coverage آن بخش از پروژه را به ۱۰۰٪ نزدیک کنید.

همچنین در این فاز می‌خواهیم یک ویژگی جدید و جالب را به پروژه‌مان اضافه کنیم. تصور کنید لیست بلندی از کاربران پیام‌رسان را در اختیار دارید که هر کدام دارای  نام و نام خانوادگی مشخصی  به صورت یکتا هستند. حال به عنوان یک کاربر می‌خواهیم لیستی از افرادی که نام و یا نام خانوادگیشان با عبارت `` آغاز می‌شود را پیدا کنیم. مشابه زمانی که به دنبال یک کالای خاص در فروشگاه اینترنتی می‌گردیم ...
حال از شما می‌خواهیم این قابلیت را برای برنامه خود با رویکرد TDD پیاده‌سازی کنید. به نظرتان چگونه می‌توان از چنین قابلیتی پشتیبانی کرد.

