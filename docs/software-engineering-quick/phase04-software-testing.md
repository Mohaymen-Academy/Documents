[//]: # (---)

[//]: # (title: Unit Test)

[//]: # (description: 'a brief look into software testing ...')

[//]: # (---)

[//]: # ()
[//]: # (## مقدمه)

[//]: # (در این فاز با Unit Test)

[//]: # (و مفهوم Code Coverage)

[//]: # (آشنا می‌شوید. همچنین برای کدی که در فازهای قبلی نوشته‌اید، تست می‌نویسید و کیفیت کد خود را بیش از پیش افزایش می‌دهید.)

[//]: # ()
[//]: # (خوب است اما نیم‌نگاهی به مسئله تست به طور کلی داشته باشیم. در تصویر زیر می‌توانید سطوج مختلف تست را مشاهده کنید:)

[//]: # ()
[//]: # (![]&#40;./images/phase04-level-of-testing.png&#41;)

[//]: # ()
[//]: # (## مفهوم Unit Test و اهمیت آن)

[//]: # ()
[//]: # (برای آگاهی از اهمیت نوشتن Unit Test)

[//]: # (در فرایند توسعه نرم‌افزار، لینک‌های زیر را مطالعه کنید:)

[//]: # ()
[//]: # (-   [Unit Testing - Important role in Software Development]&#40;https://medium.com/nonstopio/unit-testing-important-role-in-software-development-1f52f7c810f8&#41;)

[//]: # (-   [Why Is Unit Testing Important in Software Development?]&#40;https://performancelabus.com/unit-testing-importance/&#41;)

[//]: # (-   [The importance of Unit Testing]&#40;https://fortegrp.com/the-importance-of-unit-testing/&#41;)

[//]: # (-   [Time difference between developing with unit tests vs no tests]&#40;https://softwareengineering.stackexchange.com/questions/322256/time-difference-between-developing-with-unit-tests-vs-no-tests&#41;)

[//]: # ()
[//]: # ()
[//]: # (![]&#40;./images/phase04-Top-Reasons-To-Unit-Test.png&#41;)

[//]: # ()
[//]: # (## مفهوم Code Coverage در Unit Testing و اهمیت آن)

[//]: # ()
[//]: # (پس از مطالعه و درک مفهوم Unit Testing)

[//]: # (و اهمیت آن در توسعۀ‌ نرم‌افزار، برای درک مفهوم Code Coverage)

[//]: # (و اهمیت آن لینک‌های زیر را مطالعه کنید:)

[//]: # ()
[//]: # (-   [Code Coverage - Wikipedia]&#40;https://en.wikipedia.org/wiki/Code_coverage&#41;)

[//]: # (-   [5 Reasons You Should Care about Code Coverage]&#40;https://eldarion.com/blog/2017/07/13/5-reasons-you-should-care-about-code-coverage/&#41;)

[//]: # (-   [The Importance of Code Coverage]&#40;https://blog.cloudboost.io/the-importance-of-code-coverage-9b4d513f39b4&#41;)

[//]: # ()
[//]: # (## نوشتن Unit Test در java با استفاده از jUnit)

[//]: # ()
[//]: # (برای شروع کار با jUnit پیشنهاد می‌شود [Getting Started with jUnit Code]&#40;https://riptutorial.com/junit&#41; را مطالعه کنید. همچنین می‌توانید نحوۀ مشاهدۀ Code Coverage)

[//]: # (را در intelliJ Idea از طریق [این لینک]&#40;https://www.jetbrains.com/help/idea/running-test-with-coverage.html&#41; ببینید.)

[//]: # ()
[//]: # ()
[//]: # (## تاثیر اصول SOLID بر Unit Testing)

[//]: # ()
[//]: # (برای آگاهی از تاثیر رعایت اصول SOLID)

[//]: # (بر تست‌نویسی [SOLID, Object Oriented Design and Unit Testing]&#40;https://huestones.co.uk/2015/06/solid-object-oriented-design-and-unit-testing/&#41;)

[//]: # (را مطالعه کنید.)

[//]: # ()
[//]: # ()
[//]: # (## آشنایی با مبانی TDD)

[//]: # ()
[//]: # (برای درک مفهوم TDD)

[//]: # (و مراحل آن لینک‌های زیر را مطالعه کنید:)

[//]: # ()
[//]: # (-   [Testing Software: What is TDD?]&#40;https://medium.com/javascript-scene/testing-software-what-is-tdd-459b2145405c&#41;)

[//]: # (-   [Test Driven Development &#40;TDD&#41;: The Advantages and Disadvantages]&#40;https://medium.com/@stevenpcurtis.sc/test-driven-development-tdd-the-advantages-and-disadvantages-5347899ead90&#41;)

[//]: # ()
[//]: # (## آشنایی بیشتر با اصول SOLID و تاثیر آن بر TDD)

[//]: # ()
[//]: # (در این مرحله، فکر کنید که هر یک از اصول SOLID،)

[//]: # (چگونه می‌تواند بر ساده‌تر شدن روند TDD)

[//]: # (تاثیر بگذارد. با هم‌تیمی خود در این مورد بحث کنید.)

[//]: # ()
[//]: # (در ادامه برای درک این موضوع لینک‌های زیر را مطالعه کنید:)

[//]: # ()
[//]: # (-   [SOLID design principles make test-driven development &#40;TDD&#41; faster and easier]&#40;https://medium.com/ibm-garage/solid-design-principles-makes-test-driven-development-faster-and-easier-35c9eec22ff1&#41;)

[//]: # (-   [Does test-driven development force me to follow SOLID?]&#40;https://softwareengineering.stackexchange.com/a/111868&#41;)

[//]: # ()
[//]: # (## در جستجوی تست! )

[//]: # ()
[//]: # (حال می‌خواهیم پروژه‌های که پیشتر ساخته‌ایم را یک قدم به محصول واقعی نزدیک‌تر کنیم و برای آن یونیت‌تست بنویسیم. با استفاده از دانشی که در این فاز بدست آورده‌اید سعی کنید برای هسته اصلی این سرویس جست‌وجو &#40;فقط هسته اصلی!&#41; یونیت‌تست بنویسید و coverage آن بخش از پروژه را به ۱۰۰٪ نزدیک کنید.)

[//]: # ()
[//]: # (همچنین در این فاز می‌خواهیم یک ویژگی جدید و جالب را به پروژه‌مان اضافه کنیم. تصور کنید لیست بلندی از کاربران پیام‌رسان را در اختیار دارید که هر کدام دارای  نام و نام خانوادگی مشخصی  به صورت یکتا هستند. حال به عنوان یک کاربر می‌خواهیم لیستی از افرادی که نام و یا نام خانوادگیشان با عبارت `` آغاز می‌شود را پیدا کنیم. مشابه زمانی که به دنبال یک کالای خاص در فروشگاه اینترنتی می‌گردیم ...)

[//]: # (حال از شما می‌خواهیم این قابلیت را برای برنامه خود با رویکرد TDD پیاده‌سازی کنید. به نظرتان چگونه می‌توان از چنین قابلیتی پشتیبانی کرد.)

[//]: # ()
