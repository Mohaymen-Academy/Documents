---
title: React 06
description: react with tailwindcss
---

![](../images/tailwindcss.webp)

##  نصب tailwindcss در ریکت 

برای نصب tailwindcss در ریکت دستور زیر را اجرا کنید:

```bash
npm install -D tailwindcss
npx tailwindcss init
```

حالا فایل tailwind.config.js را باز کنید و محتوای زیر را جایگذاری کنید:


```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

:::caution نکته
با این کار tailwind تمامی فایل ها با پسوند js,jsx,ts,tsx را در پروژه اسکن میکند

:::

حالا محتوای زیر را به فایل src/index.css خود اضافه کنید:

```scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

برای استفاده فقط کافی است از کلاس های tailwind استفاده کنید


```javascript
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

:::tip مطالعه
- [Tailwindcss Install doc](https://tailwindcss.com/docs/installation/framework-guides)
:::

---
## پروژه

استفاده از tailwind در پروژه TODO