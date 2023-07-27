---
title: React Forms
description: Handling forms in react
---

## مقدمه
در React، فرم‌ها به دو دسته کنترل شده و غیر کنترل شده تقسیم می‌شوند. درک تفاوت بین این دو نوع کامپوننت برای مدیریت اثربخش اطلاعات فرم بسیار حیاتی است.


* ### کامپوننت‌های کنترل شده
وضعیت (state) این کامپوننت ها توسط React کنترل می‌شود.برای کنترل ورودی فرم، باید از ویژگی value و  onChange استفاده کنید تا وضعیت را با تغییر ورودی کاربر به‌روز کنید.
کامپوننت‌های کنترل شده برای زمانی مناسب‌ترند که نیاز دارید اعتبارسنجی انجام دهید یا کنترل بیشتری بر روی اطلاعات فرم داشته باشید.

```javascript
import { useState } from 'react';

function MyForm() {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    // prevent page refresh or navigation to a new URL before processing the form data.
    event.preventDefault();
    // Process the form data here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

```

* ### کامپوننت‌های کنترل نشده
این کامپوننت ها به فرم‌ها اجازه می‌دهند تا اطلاعات فرم توسط DOM  مدیریت شوند و بدون کنترل از سوی React باشند.در این روش به جای استفاده از ویژگی value، از ref برای دریافت مقدار کنونی ورودی فرم استفاده می‌شود.
کامپوننت‌های غیر کنترل شده به‌راحتی پیاده‌سازی می‌شوند اما کنترل کمتری بر روی اطلاعات فرم ارائه می‌دهند.

```javascript
import { useRef } from 'react';

const UncontrolledFormComponent = () => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    console.log('Form submitted with value:', value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Uncontrolled Input:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledFormComponent;
```

## اعتبار سنجی فرم ها
اعتبارسنجی فرم برای اطمینان از ارسال اطلاعات معتبر توسط کاربر ضروری است. می توان اعتبار سنجی را به صورت دستی انجام داد یا از کتابخانه هایی مانند 
[Formik](https://formik.org)
یا
[Yup](https://github.com/jquense/yup)
استفاده کرد.

برای اعتبار سنجی به صورت دستی داریم:
```javascript
import { useState } from 'react';

function MyForm() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username) {
      setError('نام کاربری الزامی است');
    } else if (username.length < 4) {
      setError('نام کاربری باید حداقل ۴ حرف باشد');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
       username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      {error && <p>{error}</p>}
      <button type="submit">ثبت</button>
    </form>
  );
}
```

با استفاده از کتابخانه های yup و formik خواهیم داشت
```javascript
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Handle login logic here, e.g., make an API call to authenticate the user
          console.log('Submitted values:', values);
        }}
      >
        {() => (
          <Form>
            <div>
              <label>Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label>Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
```



