"use strict";(self.webpackChunkcodestar_documents=self.webpackChunkcodestar_documents||[]).push([[9317],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=o.createContext({}),s=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=s(t.components);return o.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,l(l({ref:e},c),{},{components:n})):o.createElement(f,l({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4849:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={title:"React Context Api",description:"React Context Api"},l=void 0,i={unversionedId:"frontend/react/context-api",id:"frontend/react/context-api",title:"React Context Api",description:"React Context Api",source:"@site/docs/frontend/07-react/13-context-api.md",sourceDirName:"frontend/07-react",slug:"/frontend/react/context-api",permalink:"/Documents/docs/frontend/react/context-api",draft:!1,editUrl:"https://github.com/Mohaymen-Academy/Documents/tree/main/docs/frontend/07-react/13-context-api.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"React Context Api",description:"React Context Api"},sidebar:"tutorialSidebar",previous:{title:"React Router",permalink:"/Documents/docs/frontend/react/react-router"},next:{title:"rendering optimization",permalink:"/Documents/docs/frontend/react/react-optimization"}},u={},s=[{value:"\u0645\u0642\u062f\u0645\u0647",id:"\u0645\u0642\u062f\u0645\u0647",level:2},{value:"ContextApi",id:"contextapi",level:2},{value:"\u0633\u0627\u062e\u062a Store",id:"\u0633\u0627\u062e\u062a-store",level:3},{value:"\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc \u062f\u0627\u062f\u0647 \u0647\u0627  - useContext",id:"\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc-\u062f\u0627\u062f\u0647-\u0647\u0627----usecontext",level:3},{value:"\u062a\u063a\u06cc\u06cc\u0631 \u062f\u0627\u062f\u0647 \u0647\u0627 - useContext",id:"\u062a\u063a\u06cc\u06cc\u0631-\u062f\u0627\u062f\u0647-\u0647\u0627---usecontext",level:3},{value:"\u067e\u0631\u0648\u0698\u0647",id:"\u067e\u0631\u0648\u0698\u0647",level:2}],c={toc:s};function p(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2923).Z,width:"822",height:"670"})),(0,r.kt)("h2",{id:"\u0645\u0642\u062f\u0645\u0647"},"\u0645\u0642\u062f\u0645\u0647"),(0,r.kt)("p",null,"\u062a\u0627 \u0628\u0647 \u0627\u06cc\u0646\u062c\u0627\u06cc \u067e\u0631\u0648\u0698\u0647 \u0647\u0627 \u062f\u06cc\u062f \u06a9\u0647 \u0628\u0631\u0627\u06cc \u062c\u0627\u0628\u0647 \u062c\u0627\u06cc\u06cc \u062f\u0627\u062f\u0647 \u0628\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u062a\u062a \u0647\u0627 \u0628\u0627\u06cc\u062f \u0627\u0632 prop \u0647\u0627 \u0648 event \u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645."),(0,r.kt)("p",null,"\u062e\u0628 \u0627\u06cc\u0646 \u0645\u0648\u0636\u0648\u0639 \u0632\u0645\u0627\u0646\u06cc \u06a9\u0647 \u062a\u0639\u062f\u0627\u062f \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0647\u0627\u06cc \u062a\u0648\u062f\u0631 \u062a\u0648 \u0632\u06cc\u0627\u062f \u0645\u06cc\u0634\u0647 \u0645\u06cc\u062a\u0648\u0646\u0647 \u062e\u06cc\u0644\u06cc \u0627\u0632\u0627\u0631 \u062f\u0647\u0646\u062f\u0647 \u0628\u0634\u0647 \u0648 \u0628\u0631\u0627\u06cc \u06cc\u06a9 \u062a\u063a\u06cc\u06cc\u0631 \u062e\u06cc\u0644\u06cc \u06a9\u0648\u0686\u06cc\u06a9 \u06a9\u0644\u06cc \u0641\u0627\u06cc\u0644 \u062a\u063a\u06cc\u06cc\u0631 \u06a9\u0646\u0647."),(0,r.kt)("p",null,"\u062d\u0627\u0644\u062a \u0632\u06cc\u0631 \u062d\u0627\u0644\u062a \u06a9\u0646\u0648\u0646\u06cc \u0645\u0627 \u0647\u0633\u062a \u06a9\u0647 \u062f\u0627\u0631\u06cc\u0645:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9553).Z,width:"484",height:"384"})),(0,r.kt)("p",null,"\u062d\u0627\u0644\u0627 \u0641\u0631\u0636 \u06a9\u0646\u06cc\u062f \u0647\u0645\u0647 \u062f\u0627\u062f\u0647 \u0647\u0627 \u062f\u0631 \u06cc\u06a9 \u0641\u0636\u0627\u06cc \u0645\u0631\u06a9\u0632\u06cc \u0646\u06af\u0647\u062f\u0627\u0631\u06cc \u06a9\u0646\u06cc\u0645 \u0648 \u0627\u0632 \u0647\u0645\u0647 \u062c\u0627 \u0628\u0647\u0634 \u062f\u0633\u062a\u0631\u0633\u06cc \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7525).Z,width:"484",height:"400"})),(0,r.kt)("p",null,"\u0628\u0647 \u0627\u06cc\u0646 \u0641\u0636\u0627\u06cc \u0645\u0631\u06a9\u0632\u06cc \u06a9\u0647 \u0646\u06af\u0647\u062f\u0627\u0631\u0646\u062f\u0647 \u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0645\u0627 \u0647\u0633\u062a store \u0645\u06cc\u06af\u0648\u06cc\u06cc\u0645 \u062d\u0627\u0644\u0627 \u062f\u0631 \u0627\u06cc\u0646 \u0648\u0636\u0639\u06cc\u062a \u062f\u06cc\u06af\u0631 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 props \u0647\u0627 \u0648 event \u0647\u0627 \u062e\u06cc\u0644\u06cc \u06a9\u0645 \u0645\u06cc\u0634\u0647 \u0648 \u0645\u0627 \u0645\u06cc\u062a\u0648\u0646\u06cc\u0645 \u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0645\u0634\u062a\u0631\u06a9\u06cc \u06a9\u0647 \u0686\u0646\u062f\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0628\u0647 \u0627\u0646\u0647\u0627 \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u0646\u062f \u062f\u0631 store \u0646\u06af\u0647\u062f\u0627\u0631\u06cc \u06a9\u0646\u06cc\u0645"),(0,r.kt)("p",null,"\u0648 \u0628\u0627 store \u062a\u0645\u0627\u0645\u06cc \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0627\u0632 \u0627\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f\u0646 \u0631\u0646\u062f\u0631 \u0645\u062c\u062f\u062f \u0645\u06cc\u0634\u0648\u0646\u062f "),(0,r.kt)("p",null,"\u0628\u0627 \u0627\u06cc\u0646 \u062d\u0627\u0644\u062a \u06a9\u062f \u062a\u0645\u06cc\u0632\u062a\u0631\u06cc \u062f\u0627\u0631\u06cc\u0645 \u0648 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u06a9\u0647 \u062f\u0631 \u0627\u06cc\u0646\u062f\u0647 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u0628\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 \u0628\u062f\u06cc\u0645 \u0633\u0627\u062f\u0647 \u0645\u06cc\u0634\u0648\u062f."),(0,r.kt)("h2",{id:"contextapi"},"ContextApi"),(0,r.kt)("h3",{id:"\u0633\u0627\u062e\u062a-store"},"\u0633\u0627\u062e\u062a Store"),(0,r.kt)("p",null,"\u06cc\u06a9\u06cc \u0627\u0632 \u0631\u0648\u0634 \u0647\u0627\u06cc \u0633\u0627\u062e\u062a store \u062f\u0631 \u0631\u06cc\u06a9\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 contextApi \u0627\u0633\u062a \u06a9\u0647 \u062e\u0648\u062f \u0631\u06cc\u06a9\u062a \u0627\u0648\u0646 \u0631\u0627 \u062f\u0631 \u0627\u062e\u062a\u06cc\u0627\u0631 \u0645\u0627 \u06af\u0630\u0627\u0634\u062a\u0647 \u0648 \u0646\u06cc\u0627\u0632\u06cc \u0628\u0647 \u0646\u0635\u0628 \u0648\u0627\u0628\u0633\u062a\u06af\u06cc \u062c\u062f\u06cc\u062f\u06cc \u0646\u062f\u0627\u0631\u06cc\u0645"),(0,r.kt)("p",null,"\u0628\u0627 \u0647\u0645 \u0628\u0631\u06cc\u0645 \u06cc\u06a9 store \u0628\u0633\u0627\u0632\u06cc\u0645 \u0628\u0647 \u0645\u062b\u0627\u0644 \u0632\u06cc\u0631 \u062f\u0642\u062a \u06a9\u0646\u06cc\u062f: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { createContext, useState } = require(\"react\");\n\n\nconst GlobalContext = createContext(null);\nconst GlobalInitValue = {\n    title: 'This is context api app',\n    themeDark: 'light',\n    todos: {}\n}\n\n\nconst GlobalState = ({ children }) => {\n\n    const [title, setTitle] = useState(GlobalInitValue.title);\n    const [theme, setTheme] = useState(GlobalInitValue.themeDark);\n    const [todos, setTodos] = useState(GlobalInitValue.todos);\n    // we can use useReducer \n\n\n    const globalContextValue = {\n        title, setTitle,\n        theme, setTheme,\n        todos, setTodos\n    };\n\n\n    return (\n        <GlobalContext.Provider value={globalContextValue}>\n            {children}\n        </GlobalContext.Provider>\n    ); \n}\n \nexport { GlobalContext };\nexport default GlobalState;\n")),(0,r.kt)("p",null,"\u0645\u062b\u0627\u0644 \u0628\u0627\u0644\u0627 \u0628\u0631\u0627\u06cc \u0645\u0627 \u06cc\u06a9 store \u062f\u0631\u0633\u062a \u06a9\u0631\u062f\u0647 \u0627\u0633\u062a \u06a9\u0647 \u0645\u06cc\u062a\u0648\u0627\u0646\u06cc\u0645 \u062f\u0631 \u0647\u0631\u06a9\u062c\u0627\u06cc \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u06cc\u0645 \u0627\u0646 \u0631\u0627 provide \u06a9\u0646\u06cc\u0645 \u062a\u0627 \u062f\u0631 \u062f\u0633\u062a\u0631\u0633 \u0645\u0627 \u0628\u0627\u0634\u06cc\u062f."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const GlobalContext = createContext(null);\n")),(0,r.kt)("p",null,"\u0627\u06cc\u0646 \u062e\u0637 \u062f\u0631 \u0648\u0627\u0642\u0639 \u0628\u0631\u0627\u06cc \u0645\u0627 \u06cc\u06a9 store \u0633\u0627\u062e\u062a\u0647 \u0648 \u0628\u0639\u062f \u0627\u0646 \u0631\u0627 \u06a9\u0627\u0646\u0641\u06cc\u06af \u06a9\u0631\u062f\u06cc\u0645 \u0648 \u062f\u0631\u0648\u0646 \u0627\u0646 \u062a\u0639\u062f\u0627\u062f\u06cc useState \u0631\u06cc\u062e\u062a\u0647 \u0627\u06cc\u0645 \u062a\u0627 \u0628\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u0627\u0646\u0647\u0627 \u0631\u06cc\u06a9\u062a \u0645\u062a\u0648\u062c\u0647 \u0631\u0646\u062f\u0631 \u0645\u062c\u062f\u062f \u0635\u0641\u062d\u0647 \u0634\u0648\u062f."),(0,r.kt)("p",null,"\u062f\u0631 \u0646\u0647\u0627\u06cc\u062a \u0627\u0646 \u0631\u0627 \u0628\u0635\u0648\u0631\u062a component \u062f\u0631 \u0627\u0648\u0631\u062f\u06cc\u0645 \u0648 \u0645\u0642\u0627\u062f\u06cc\u0631 useState \u0631\u0627 \u0628\u0647 \u0627\u0646 \u062f\u0627\u062f\u06cc\u0645 \u062a\u0627 \u0634\u0631\u0648\u0639 \u0628\u0647 \u06a9\u0627\u0631 \u06a9\u0646\u062f."),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u0647 \u0627\u0646 \u0631\u0627 provide \u06a9\u0646\u06cc\u0645 \u062a\u0627 \u0642\u0627\u0628\u0644\u06cc\u062a \u062f\u0633\u062a\u0631\u0633\u06cc \u0628\u0647 \u0627\u0646 \u0631\u0627 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645 \u062f\u0631 app.js \u0627\u0646 \u0631\u0627 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc \u0645\u06cc\u06a9\u0646\u06cc\u0645 \u0628\u0647 \u0645\u062b\u0627\u0644 \u0632\u06cc\u0631 \u062f\u0642\u062a \u06a9\u0646\u06cc\u062f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { BrowserRouter, Route, Routes } from "react-router-dom";\nimport Layout from "./pages/layout";\nimport HomePage from "./pages/home-page";\nimport AboutPage from "./pages/about-page";\nimport GlobalState from "./GlobalState";\n\nfunction App() {\n  return (\n    <div >\n      <BrowserRouter>\n        <GlobalState>\n          <Routes>\n            <Route path="/" element={<Layout />}>\n                <Route index element={<HomePage  />}/>\n                <Route path="/about" element={<AboutPage  />}/>\n            </Route>\n          </Routes>\n        </GlobalState>\n      </BrowserRouter>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,r.kt)("p",null,"\u062d\u0627\u0644\u0627 \u0628\u0627 provide \u06a9\u0631\u062f\u0646 \u0627\u0646 \u062a\u0645\u0627\u0645\u06cc \u0641\u0631\u0632\u0646\u062f\u0627\u0646 \u0627\u0646 \u0628\u0647 store \u0645\u0627 \u062f\u0633\u062a\u0631\u0633\u06cc \u062f\u0627\u0631\u0646\u062f"),(0,r.kt)("h3",{id:"\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc-\u062f\u0627\u062f\u0647-\u0647\u0627----usecontext"},"\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc \u062f\u0627\u062f\u0647 \u0647\u0627  - useContext"),(0,r.kt)("p",null,"\u062d\u0627\u0644\u0627 \u06a9\u0647 \u062f\u0627\u062f\u0647 \u0647\u0627 \u0642\u0627\u0628\u0644\u06cc\u062a \u062f\u0633\u062a\u0631\u0633\u06cc \u062f\u0631 \u06a9\u0644 \u0628\u0631\u0646\u0627\u0645\u0647 \u0631\u0627 ( \u0632\u06cc\u0631 \u0641\u0631\u0632\u0646\u062f \u0647\u0627 ) \u062f\u0627\u0631\u0646\u062f \u0628\u0627 \u0647\u0645 \u062f\u0631 \u0644\u0627\u06cc\u0647 \u0628\u06cc\u0627\u06cc\u0645 \u0628\u0647 \u0635\u0641\u062d\u0627\u062a \u06cc\u06a9 \u0639\u0646\u0648\u0627\u0646 \u0628\u062f\u06cc\u0645 \u0648 \u062f\u0631 \u0647\u0631 \u0635\u0641\u062d\u0647 \u0639\u0646\u0648\u0627\u0646 \u0628\u0647 \u062e\u0635\u0648\u0635\u06cc \u062a\u0646\u0638\u06cc\u0645 \u06a9\u0646\u06cc\u0645"),(0,r.kt)("p",null,"\u0627\u0628\u062a\u062f\u0627 \u0627\u0646 \u0631\u0627 \u062f\u0631 \u0644\u0627\u06cc\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc \u0645\u06cc\u06a9\u0646\u06cc\u0645:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { useContext } from "react";\nimport { Link, Outlet } from "react-router-dom";\nimport { GlobalContext } from "../GlobalState";\n\nconst Layout = () => {\n    const {title} = useContext(GlobalContext);\n\n    return ( \n        <div >\n            <nav>\n                <h1>{title}</h1>\n                <ul>\n                    <li><Link to={\'/\'}>Home</Link></li>\n                    <li><Link to={\'/About\'}>About</Link></li>\n                </ul>\n            </nav>\n            <div>\n                <Outlet />\n            </div>\n        </div>\n     );\n}\n \nexport default Layout;\n')),(0,r.kt)("p",null,"\u0628\u0627 \u0635\u062f\u0627 \u06a9\u0631\u062f\u0646 \u0647\u0648\u06a9 useContext \u0648 \u067e\u0627\u0633 \u062f\u0627\u062f\u0646 context \u06cc \u06a9\u0647 \u0633\u0627\u062e\u062a\u0647 \u0628\u0647 \u0627\u0648\u0646 \u0645\u06cc\u062a\u0648\u0646\u06cc\u0645 \u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062f\u0631\u0648\u0646 \u0627\u0646 \u0631\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u06cc\u0645."),(0,r.kt)("p",null,"\u0639\u0646\u0648\u0627\u0646 \u0631\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u0645\u06cc\u06a9\u0646\u06cc\u0645 \u0648 \u0627\u0646 \u0631\u0627 \u062f\u0631 \u0644\u0627\u06cc\u0647 \u0646\u0645\u0627\u06cc\u0634 \u0645\u06cc\u062f\u0647\u06cc\u0645"),(0,r.kt)("h3",{id:"\u062a\u063a\u06cc\u06cc\u0631-\u062f\u0627\u062f\u0647-\u0647\u0627---usecontext"},"\u062a\u063a\u06cc\u06cc\u0631 \u062f\u0627\u062f\u0647 \u0647\u0627 - useContext"),(0,r.kt)("p",null,"\u062d\u0627\u0644\u0627 \u06a9\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u0627 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0648 \u0645\u0642\u062f\u0627\u0631 \u067e\u06cc\u0634 \u0641\u0631\u0636 \u062f\u0631\u0648\u0646 \u0627\u0633\u062a \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u06cc\u0645 \u062f\u0631 \u0647\u0631 \u0635\u0641\u062d\u0647 \u0627\u0646 \u0631\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0647\u06cc\u0645."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { useContext, useEffect } from "react";\nimport { GlobalContext } from "../GlobalState";\n\nconst HomePage = () => {\n    const { setTitle } = useContext(GlobalContext);\n\n    useEffect(() => {\n        setTitle(\'Home Page\');\n    }, []);\n\n    return ( \n        <div>\n            HomePage\n        </div>\n     );\n}\n \nexport default HomePage;\n')),(0,r.kt)("p",null,"\u0627\u06cc\u0646 \u0628\u0627\u0631 \u0628\u0647 \u062c\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647  title \u0631\u0627 \u0627\u0632 store \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u06cc\u0645 dispatcher \u0627\u0646 \u0631\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u0645\u06cc\u06a9\u0646\u06cc\u0645 \u0648 setTitle \u0645\u06cc\u06a9\u0646\u06cc\u0645."),(0,r.kt)("p",null,"\u0647\u0645\u06cc\u0646 \u06a9\u0627\u0631 \u0631\u0627 \u0628\u0631\u0627\u06cc \u0635\u0641\u062d\u0647 \u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0627 \u0645\u06cc\u06a9\u0646\u06cc\u0645:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { useContext, useEffect } from "react";\nimport { GlobalContext } from "../GlobalState";\n\n\nconst AboutPage = () => {\n    const { setTitle } = useContext(GlobalContext);\n    \n    useEffect(() => {\n        setTitle(\'About Page\');\n    }, []);\n\n    return ( \n        <div>\n            AboutPage\n        </div>\n     );\n}\n \nexport default AboutPage;\n')),(0,r.kt)("p",null," \u062d\u0627\u0644\u0627 \u062f\u06cc\u06af\u0631 \u0646\u06cc\u0627\u0632\u06cc \u0628\u0647 props \u0647\u0627 \u0648 event \u0647\u0627\u06cc \u0632\u06cc\u0627\u062f\u06cc \u0646\u062f\u0627\u0631\u06cc\u0645 \u0648 \u0647\u0631\u062c\u0627 \u0646\u06cc\u0627\u0632 \u0628\u0647 store \u0645\u0631\u06a9\u0632\u06cc \u062e\u0648\u062f \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645 \u0628\u0627 useContext \u0627\u0646 \u0631\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u0645\u06cc\u06a9\u0646\u06cc\u0645 \u0648 \u0646\u0645\u0627\u06cc\u0634 \u06cc\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u0645\u06cc\u062f\u0647\u06cc\u0645."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u067e\u0631\u0648\u0698\u0647"},"\u067e\u0631\u0648\u0698\u0647"),(0,r.kt)("p",null,"\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 context api \u062f\u0631 \u067e\u0631\u0648\u0698\u0647 \u0648\u06cc\u062a\u0631\u06cc\u0646 \u0648 \u0635\u0641\u062d\u0647 \u0633\u0627\u0632"))}p.isMDXComponent=!0},2923:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/store0-1f81d7bdc26fc65d6d065e3a9ef2bf61.png"},9553:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/store1-3b3409200250dd805e16c4292d01873c.png"},7525:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/store2-591c16f694dabc07b4702b88d7a88570.png"}}]);