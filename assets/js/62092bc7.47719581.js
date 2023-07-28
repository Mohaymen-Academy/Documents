"use strict";(self.webpackChunkcodestar_documents=self.webpackChunkcodestar_documents||[]).push([[7262],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,f=p["".concat(s,".").concat(d)]||p[d]||c[d]||o;return t?r.createElement(f,i(i({ref:n},m),{},{components:t})):r.createElement(f,i({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7195:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const o={title:"React Forms",description:"Handling forms in react"},i=void 0,l={unversionedId:"frontend/react/react-forms",id:"frontend/react/react-forms",title:"React Forms",description:"Handling forms in react",source:"@site/docs/frontend/07-react/10-react-forms.md",sourceDirName:"frontend/07-react",slug:"/frontend/react/react-forms",permalink:"/Documents/docs/frontend/react/react-forms",draft:!1,editUrl:"https://github.com/Mohaymen-Academy/Documents/tree/main/docs/frontend/07-react/10-react-forms.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"React Forms",description:"Handling forms in react"},sidebar:"tutorialSidebar",previous:{title:"Re-renders",permalink:"/Documents/docs/frontend/react/react-re-renders"},next:{title:"Axios",permalink:"/Documents/docs/frontend/react/react-axios"}},s={},u=[{value:"\u0645\u0642\u062f\u0645\u0647",id:"\u0645\u0642\u062f\u0645\u0647",level:2},{value:"\u0627\u0639\u062a\u0628\u0627\u0631 \u0633\u0646\u062c\u06cc \u0641\u0631\u0645 \u0647\u0627",id:"\u0627\u0639\u062a\u0628\u0627\u0631-\u0633\u0646\u062c\u06cc-\u0641\u0631\u0645-\u0647\u0627",level:2}],m={toc:u};function c(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(566).Z,width:"870",height:"220"})),(0,a.kt)("h2",{id:"\u0645\u0642\u062f\u0645\u0647"},"\u0645\u0642\u062f\u0645\u0647"),(0,a.kt)("p",null,"\u062f\u0631 React\u060c \u0641\u0631\u0645\u200c\u0647\u0627 \u0628\u0647 \u062f\u0648 \u062f\u0633\u062a\u0647 \u06a9\u0646\u062a\u0631\u0644 \u0634\u062f\u0647 \u0648 \u063a\u06cc\u0631 \u06a9\u0646\u062a\u0631\u0644 \u0634\u062f\u0647 \u062a\u0642\u0633\u06cc\u0645 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f. \u062f\u0631\u06a9 \u062a\u0641\u0627\u0648\u062a \u0628\u06cc\u0646 \u0627\u06cc\u0646 \u062f\u0648 \u0646\u0648\u0639 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0628\u0631\u0627\u06cc \u0645\u062f\u06cc\u0631\u06cc\u062a \u0627\u062b\u0631\u0628\u062e\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0641\u0631\u0645 \u0628\u0633\u06cc\u0627\u0631 \u062d\u06cc\u0627\u062a\u06cc \u0627\u0633\u062a."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h3",{parentName:"li",id:"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u0647\u0627\u06cc-\u06a9\u0646\u062a\u0631\u0644-\u0634\u062f\u0647"},"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u06a9\u0646\u062a\u0631\u0644 \u0634\u062f\u0647"),"\u0648\u0636\u0639\u06cc\u062a (state) \u0627\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0647\u0627 \u062a\u0648\u0633\u0637 React \u06a9\u0646\u062a\u0631\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f.\u0628\u0631\u0627\u06cc \u06a9\u0646\u062a\u0631\u0644 \u0648\u0631\u0648\u062f\u06cc \u0641\u0631\u0645\u060c \u0628\u0627\u06cc\u062f \u0627\u0632 \u0648\u06cc\u0698\u06af\u06cc value \u0648  onChange \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f \u062a\u0627 \u0648\u0636\u0639\u06cc\u062a \u0631\u0627 \u0628\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u0648\u0631\u0648\u062f\u06cc \u06a9\u0627\u0631\u0628\u0631 \u0628\u0647\u200c\u0631\u0648\u0632 \u06a9\u0646\u06cc\u062f.\n\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u06a9\u0646\u062a\u0631\u0644 \u0634\u062f\u0647 \u0628\u0631\u0627\u06cc \u0632\u0645\u0627\u0646\u06cc \u0645\u0646\u0627\u0633\u0628\u200c\u062a\u0631\u0646\u062f \u06a9\u0647 \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u06cc\u062f \u0627\u0639\u062a\u0628\u0627\u0631\u0633\u0646\u062c\u06cc \u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u06cc\u062f \u06cc\u0627 \u06a9\u0646\u062a\u0631\u0644 \u0628\u06cc\u0634\u062a\u0631\u06cc \u0628\u0631 \u0631\u0648\u06cc \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0641\u0631\u0645 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u062f.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useState } from 'react';\n\nfunction MyForm() {\n  const [username, setUsername] = useState('');\n\n  const handleUsernameChange = (event) => {\n    setUsername(event.target.value);\n  };\n\n  const handleSubmit = (event) => {\n    // prevent page refresh or navigation to a new URL before processing the form data.\n    event.preventDefault();\n    // Process the form data here\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <label>\n        Username:\n        <input type=\"text\" value={username} onChange={handleUsernameChange} />\n      </label>\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h3",{parentName:"li",id:"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u0647\u0627\u06cc-\u06a9\u0646\u062a\u0631\u0644-\u0646\u0634\u062f\u0647"},"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u06a9\u0646\u062a\u0631\u0644 \u0646\u0634\u062f\u0647"),"\u0627\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0647\u0627 \u0628\u0647 \u0641\u0631\u0645\u200c\u0647\u0627 \u0627\u062c\u0627\u0632\u0647 \u0645\u06cc\u200c\u062f\u0647\u0646\u062f \u062a\u0627 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0641\u0631\u0645 \u062a\u0648\u0633\u0637 DOM  \u0645\u062f\u06cc\u0631\u06cc\u062a \u0634\u0648\u0646\u062f \u0648 \u0628\u062f\u0648\u0646 \u06a9\u0646\u062a\u0631\u0644 \u0627\u0632 \u0633\u0648\u06cc React \u0628\u0627\u0634\u0646\u062f.\u062f\u0631 \u0627\u06cc\u0646 \u0631\u0648\u0634 \u0628\u0647 \u062c\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0648\u06cc\u0698\u06af\u06cc value\u060c \u0627\u0632 ref \u0628\u0631\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u0645\u0642\u062f\u0627\u0631 \u06a9\u0646\u0648\u0646\u06cc \u0648\u0631\u0648\u062f\u06cc \u0641\u0631\u0645 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.\n\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u063a\u06cc\u0631 \u06a9\u0646\u062a\u0631\u0644 \u0634\u062f\u0647 \u0628\u0647\u200c\u0631\u0627\u062d\u062a\u06cc \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u0627\u0645\u0627 \u06a9\u0646\u062a\u0631\u0644 \u06a9\u0645\u062a\u0631\u06cc \u0628\u0631 \u0631\u0648\u06cc \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0641\u0631\u0645 \u0627\u0631\u0627\u0626\u0647 \u0645\u06cc\u200c\u062f\u0647\u0646\u062f.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useRef } from 'react';\n\nconst UncontrolledFormComponent = () => {\n  const inputRef = useRef(null);\n\n  const handleSubmit = (event) => {\n    event.preventDefault();\n    const value = inputRef.current.value;\n    console.log('Form submitted with value:', value);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <label>\n        Uncontrolled Input:\n        <input type=\"text\" ref={inputRef} />\n      </label>\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n};\n\nexport default UncontrolledFormComponent;\n")),(0,a.kt)("h2",{id:"\u0627\u0639\u062a\u0628\u0627\u0631-\u0633\u0646\u062c\u06cc-\u0641\u0631\u0645-\u0647\u0627"},"\u0627\u0639\u062a\u0628\u0627\u0631 \u0633\u0646\u062c\u06cc \u0641\u0631\u0645 \u0647\u0627"),(0,a.kt)("p",null,"\u0627\u0639\u062a\u0628\u0627\u0631\u0633\u0646\u062c\u06cc \u0641\u0631\u0645 \u0628\u0631\u0627\u06cc \u0627\u0637\u0645\u06cc\u0646\u0627\u0646 \u0627\u0632 \u0627\u0631\u0633\u0627\u0644 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0645\u0639\u062a\u0628\u0631 \u062a\u0648\u0633\u0637 \u06a9\u0627\u0631\u0628\u0631 \u0636\u0631\u0648\u0631\u06cc \u0627\u0633\u062a. \u0645\u06cc \u062a\u0648\u0627\u0646 \u0627\u0639\u062a\u0628\u0627\u0631 \u0633\u0646\u062c\u06cc \u0631\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a \u062f\u0633\u062a\u06cc \u0627\u0646\u062c\u0627\u0645 \u062f\u0627\u062f \u06cc\u0627 \u0627\u0632 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647 \u0647\u0627\u06cc\u06cc \u0645\u0627\u0646\u0646\u062f\n",(0,a.kt)("a",{parentName:"p",href:"https://formik.org"},"Formik"),"\n\u06cc\u0627\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jquense/yup"},"Yup"),"\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f."),(0,a.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u0639\u062a\u0628\u0627\u0631 \u0633\u0646\u062c\u06cc \u0628\u0647 \u0635\u0648\u0631\u062a \u062f\u0633\u062a\u06cc \u062f\u0627\u0631\u06cc\u0645:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useState } from 'react';\n\nfunction MyForm() {\n  const [username, setUsername] = useState('');\n  const [error, setError] = useState('');\n\n  const handleUsernameChange = (event) => {\n    setUsername(event.target.value);\n    setError('');\n  };\n\n  const handleSubmit = (event) => {\n    event.preventDefault();\n    if (!username) {\n      setError('\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a');\n    } else if (username.length < 4) {\n      setError('\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0628\u0627\u06cc\u062f \u062d\u062f\u0627\u0642\u0644 \u06f4 \u062d\u0631\u0641 \u0628\u0627\u0634\u062f');\n    }\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <label>\n       username:\n        <input type=\"text\" value={username} onChange={handleUsernameChange} />\n      </label>\n      {error && <p>{error}</p>}\n      <button type=\"submit\">\u062b\u0628\u062a</button>\n    </form>\n  );\n}\n")),(0,a.kt)("p",null,"\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647 \u0647\u0627\u06cc yup \u0648 formik \u062e\u0648\u0627\u0647\u06cc\u0645 \u062f\u0627\u0634\u062a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\nimport { Formik, Form, Field, ErrorMessage } from 'formik';\nimport * as Yup from 'yup';\n\nconst validationSchema = Yup.object().shape({\n  email: Yup.string().email('Invalid email format').required('Email is required'),\n  password: Yup.string().required('Password is required'),\n});\n\nconst LoginForm = () => {\n  return (\n    <div>\n      <h1>Login</h1>\n      <Formik\n        initialValues={{\n          email: '',\n          password: '',\n        }}\n        validationSchema={validationSchema}\n        onSubmit={(values) => {\n          // Handle login logic here, e.g., make an API call to authenticate the user\n          console.log('Submitted values:', values);\n        }}\n      >\n        {() => (\n          <Form>\n            <div>\n              <label>Email:</label>\n              <Field type=\"email\" name=\"email\" />\n              <ErrorMessage name=\"email\" component=\"div\" />\n            </div>\n            <div>\n              <label>Password:</label>\n              <Field type=\"password\" name=\"password\" />\n              <ErrorMessage name=\"password\" component=\"div\" />\n            </div>\n            <button type=\"submit\">Login</button>\n          </Form>\n        )}\n      </Formik>\n    </div>\n  );\n};\n\nexport default LoginForm;\n")))}c.isMDXComponent=!0},566:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/forms-74235e843b1c9736028d5f5767f87321.png"}}]);