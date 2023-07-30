"use strict";(self.webpackChunkcodestar_documents=self.webpackChunkcodestar_documents||[]).push([[2079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(g,c(c({ref:t},i),{},{components:n})):r.createElement(g,c({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,c[1]=u;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"React Router DOM",description:"React Router Dom Package"},c=void 0,u={unversionedId:"frontend/react/react-router",id:"frontend/react/react-router",title:"React Router DOM",description:"React Router Dom Package",source:"@site/docs/frontend/07-react/10-react-router.md",sourceDirName:"frontend/07-react",slug:"/frontend/react/react-router",permalink:"/Documents/docs/frontend/react/react-router",draft:!1,editUrl:"https://github.com/Mohaymen-Academy/Documents/tree/main/docs/frontend/07-react/10-react-router.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"React Router DOM",description:"React Router Dom Package"},sidebar:"tutorialSidebar",previous:{title:"Axios",permalink:"/Documents/docs/frontend/react/react-axios"},next:{title:"Authentication",permalink:"/Documents/docs/frontend/authentication"}},p={},l=[{value:"\u0645\u0642\u062f\u0645\u0647",id:"\u0645\u0642\u062f\u0645\u0647",level:2},{value:"\u0646\u0635\u0628 React Router",id:"\u0646\u0635\u0628-react-router",level:2},{value:"\u0633\u0627\u062e\u062a\u0627\u0631",id:"\u0633\u0627\u062e\u062a\u0627\u0631",level:2},{value:"\u0633\u0627\u062e\u062a \u0627\u0648\u0644\u06cc\u0646 \u0635\u0641\u062d\u0647",id:"\u0633\u0627\u062e\u062a-\u0627\u0648\u0644\u06cc\u0646-\u0635\u0641\u062d\u0647",level:2}],i={toc:l};function s(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u0645\u0642\u062f\u0645\u0647"},"\u0645\u0642\u062f\u0645\u0647"),(0,a.kt)("p",null,"\u062a\u0627 \u0628\u0647 \u0627\u06cc\u0646\u062c\u0627 \u062a\u0645\u0627\u0645\u06cc \u0635\u0641\u062d\u0647 \u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0633\u0627\u062e\u062a\u0647 \u0627\u06cc\u062f \u0647\u06cc\u062c \u06a9\u0646\u062a\u0631\u0644\u06cc \u0631\u0648\u06cc url \u0646\u062f\u0627\u0634\u062a\u06cc\u062f \u0648 \u0628\u0627 \u0631\u0641\u0631\u0634 \u06a9\u0631\u062f\u0646 \u0645\u0631\u0648\u0631\u06af\u0631 \u0647\u0645\u0647 \u0648\u0636\u0639\u06cc\u062a \u0647\u0627 \u0627\u0632 \u0628\u06cc\u0646 \u0645\u06cc\u0631\u0641\u062a\u0646"),(0,a.kt)("p",null,"\u067e\u06a9\u06cc\u062c react router \u0628\u0647 \u0645\u0627 \u06a9\u0645\u06a9 \u0645\u06cc\u06a9\u0646\u062f \u062a\u0627 \u06a9\u0646\u062a\u0631\u0644 \u06a9\u0627\u0645\u0644\u06cc \u0631\u0648\u06cc url \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645 \u0648 \u06a9\u0627\u0631\u0628\u0631 \u0628\u0627 \u0631\u0641\u0631\u0634 \u0645\u0631\u0648\u0631\u06af\u0631 \u0648\u0636\u0639\u06cc\u062a \u062e\u0648\u062f \u0631\u0627 \u062d\u0641\u0638 \u06a9\u0646\u062f \u0648 \u0627\u0632 \u0647\u0645\u0647 \u0645\u0647\u0645 \u062a\u0631 \u0644\u06cc\u0646\u06a9 \u0633\u0627\u0632\u06cc \u0627\u0646\u062c\u0627\u0645 \u0628\u0634\u0647."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3930).Z,width:"1024",height:"683"})),(0,a.kt)("h2",{id:"\u0646\u0635\u0628-react-router"},"\u0646\u0635\u0628 React Router"),(0,a.kt)("p",null,"\u062e\u0628 \u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u067e\u06a9\u06cc\u0686 \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u06cc\u0645 \u06a9\u0647 \u0646\u0635\u0628\u0634 \u06a9\u0646\u06cc\u0645 :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -D react-router-dom \n")),(0,a.kt)("admonition",{title:"\u0646\u06a9\u062a\u0647",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"-D")," \u062f\u0631 \u0627\u06cc\u0646\u062c\u0627 \u0627\u06cc\u0646 \u0628\u0633\u062a\u0647 \u0631\u0627 \u062f\u0631 \u062d\u0627\u0644\u062a dev Dependency \u0646\u0635\u0628 \u0645\u06cc\u06a9\u0646\u062f\n\u0648 \u0627\u06cc\u0646 \u0628\u0633\u062a\u0647 \u0628\u0639\u062f \u0627\u0632 \u06a9\u0627\u0645\u067e\u0627\u0644 \u0627\u0632 \u06a9\u062f \u0647\u0627 \u062d\u0630\u0641 \u0645\u06cc\u0634\u0648\u062f.")),(0,a.kt)("h2",{id:"\u0633\u0627\u062e\u062a\u0627\u0631"},"\u0633\u0627\u062e\u062a\u0627\u0631"),(0,a.kt)("p",null,"\u062a\u0627 \u0628\u0647 \u0627\u06cc\u0646\u062c\u0627 \u0641\u0642\u0637 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0633\u0627\u062e\u062a\u06cc\u0645 \u0648\u0644\u06cc \u0628\u0631\u0627\u06cc \u0645\u062f\u06cc\u0631\u06cc\u062a url \u062f\u0631 \u0628\u0633\u062a\u0647 react router \u0628\u0627\u06cc\u062f \u06cc\u06a9 \u0633\u0631\u06cc \u0641\u0627\u06cc\u0644 \u0627\u06cc\u062c\u0627\u062f \u06a9\u0646\u06cc\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 page \u06a9\u0647 \u06a9\u0627\u0631 \u0645\u062f\u06cc\u0631\u06cc\u062a router \u0628\u0631 \u0639\u0647\u062f\u0647 \u062f\u0627\u0631\u0647 "),(0,a.kt)("p",null,"\u067e\u0633 \u0645\u0627 \u062f\u0631 \u067e\u0631\u0648\u0698\u0647 \u06cc\u06a9 \u067e\u0648\u0634\u0647 components \u062f\u0627\u0634\u062a\u06cc\u0645 \u06a9\u0647 \u0627\u0644\u0627\u0646 \u06cc\u06a9 \u067e\u0648\u0634\u0647 pages \u0647\u0645 \u0628\u0647 \u0627\u0646 \u0627\u0636\u0627\u0641\u0647 \u0645\u06cc\u06a9\u0646\u06cc\u0645."),(0,a.kt)("p",null,"\u062f\u0631 \u0648\u0627\u0642\u0639 page \u0647\u0645\u0627\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0647\u0633\u062a \u0641\u0642\u0637 \u0648\u0638\u06cc\u0641\u0647 \u06cc \u0645\u062f\u06cc\u0631\u06cc\u062a \u0635\u0641\u062d\u0647 \u0631\u0627 \u0628\u0631 \u0639\u0647\u062f\u0647 \u062f\u0627\u0631\u0647."),(0,a.kt)("admonition",{title:"\u0646\u06a9\u062a\u0647",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u0627\u0632 \u0627\u06cc\u0646 \u0628\u0647 \u0628\u0639\u062f \u0628\u0647 \u0647\u06cc\u0686 \u0639\u0646\u0648\u0627\u0646 \u062f\u0631 component \u0647\u0627 \u062f\u0631\u062e\u0648\u0627\u0633\u062a http \u0627\u0631\u0633\u0627\u0644 \u0646\u06a9\u0646\u06cc\u062f \u0648 \u0627\u06cc\u0646 \u0648\u0638\u06cc\u0641\u0647 \u0631\u0648 \u0628\u0630\u0627\u0631\u06cc\u062f \u0628\u0647 \u0639\u0647\u062f\u0647 page \u0647\u0627.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"src\\pages\\: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"HomePage.js"),(0,a.kt)("li",{parentName:"ul"},"ContactPage.js"),(0,a.kt)("li",{parentName:"ul"},"NoPage.js")))),(0,a.kt)("h2",{id:"\u0633\u0627\u062e\u062a-\u0627\u0648\u0644\u06cc\u0646-\u0635\u0641\u062d\u0647"},"\u0633\u0627\u062e\u062a \u0627\u0648\u0644\u06cc\u0646 \u0635\u0641\u062d\u0647"),(0,a.kt)("p",null,"\u062d\u0627\u0644\u0627 \u0628\u0627 \u0647\u0645 \u0628\u0631\u06cc\u0645 \u06cc\u06a9 \u0635\u0641\u062d\u0647 \u0628\u0633\u0627\u0632\u06cc\u0645 "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/* src/pages/HomePage.js  */\n\nfunction HomePage() {\n    return ( \n        <div>\n            <h1>Home Page</h1>\n        </div>\n     );\n}\nexport default HomePage;\n")),(0,a.kt)("p",null,"\u0628\u0639\u062f \u0627\u0632 \u0627\u06cc\u0646 \u06a9\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0635\u0641\u062d\u0647 \u0627\u0648\u0644 \u0631\u0627 \u0633\u0627\u062e\u062a\u06cc\u0645 \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u06cc\u0645 \u062a\u0627 \u062f\u0631 App.js \u06a9\u0627\u0646\u0641\u06cc\u06af \u0647\u0627\u06cc \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 router \u0631\u0627 \u0627\u0646\u062c\u0627\u0645 \u0628\u062f\u06cc\u0645."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'/* src/App.js */\n\n\nimport { BrowserRouter, Route, Routes } from "react-router-dom";\nimport HomePage from "./pages/HomePage";\n\nfunction App() {\n  return (\n      <BrowserRouter>\n        <Routes>\n          <Route path="/home" element={<HomePage />} />\n        </Routes>\n      </BrowserRouter>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("p",null,"\u0628\u0627 \u062a\u0639\u0631\u06cc\u0641 \u06a9\u0631\u062f\u0646 \u0635\u0641\u062d\u0647 home \u062f\u0631 \u0642\u0633\u0645\u062a Routes \u0628\u0647 \u0631\u06cc\u06a9\u062a \u0645\u06cc\u0641\u0647\u0645\u0648\u0646\u06cc\u0645 \u06a9\u0647 \u0628\u0627\u06cc\u062f \u0628\u0627 \u0635\u062f\u0627 \u06a9\u0631\u062f\u0646 \u0686\u0647 url \u0627\u06cc \u06a9\u0647 \u062f\u0631 path \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647 \u0686\u0647 \u0635\u0641\u062d\u0647 \u0627\u06cc \u0631\u0627 \u0628\u0627\u0632 \u06a9\u0646\u06cc\u062f \u06a9\u0647 \u062f\u0631 element \u0645\u0634\u062e\u0635 \u0634\u062f\u0647."),(0,a.kt)("p",null,"\u062d\u0627\u0644\u0627 \u0628\u0627 \u0647\u0645 \u0628\u0631\u06cc\u0645 \u06cc\u06a9 \u0635\u0641\u062d\u0647 \u062f\u06cc\u06af\u0647 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627 \u0645\u0627 \u0628\u0633\u0627\u0632\u06cc\u0645:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/* src/pages/ContactPage.js  */\n\nfunction ContactPage() {\n    return ( \n        <div>\n        <h1>Contact Page</h1>\n    </div>\n     );\n}\nexport default ContactPage;\n")),(0,a.kt)("p",null,"\u0628\u0639\u062f \u0627\u0632 \u0633\u0627\u062e\u062a \u0635\u0641\u062d\u0647 \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627 \u0645\u0627 \u0628\u0627\u06cc\u062f \u0631\u0648\u062a\u0631 \u0627\u0648\u0646 \u0631\u0627 \u062a\u0639\u0631\u06cc\u0641 \u06a9\u0646\u06cc\u0645 \u067e\u0633 \u0645\u06cc\u0631\u06cc\u0645 \u0628\u0647 app.js :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { BrowserRouter, Route, Routes } from "react-router-dom";\nimport HomePage from "./pages/HomePage";\nimport ContactPage from "./pages/ContactPage";\n\nfunction App() {\n  return (\n      <BrowserRouter>\n        <Routes>\n          <Route path="/home" element={<HomePage />} />\n          <Route path="/contact" element={<ContactPage />} />\n        </Routes>\n      </BrowserRouter>\n  );\n}\nexport default App;\n')),(0,a.kt)("p",null,"\u062d\u0627\u0644\u0627 \u0628\u0627 \u0635\u062f\u0627 \u06a9\u0631\u062f\u0646 /contact \u0647\u062f\u0627\u06cc\u062a \u0645\u06cc\u0634\u06cc\u0645 \u0628\u0647 \u0635\u0641\u062d\u0647 contact"),(0,a.kt)("p",null,"\u062e\u0628 \u06cc\u0647 \u0645\u0634\u06a9\u0644\u06cc \u0627\u06cc\u0646\u062c\u0627 \u0647\u0633\u062a \u0648 \u0628\u0627 \u0628\u0627\u0632 \u06a9\u0631\u062f\u0646 \u0627\u062f\u0631\u0633 / \u0647\u06cc\u0686 \u0686\u06cc\u0632\u06cc \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0646\u0645\u06cc\u0634\u0648\u062f."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { BrowserRouter, Route, Routes } from "react-router-dom";\nimport HomePage from "./pages/HomePage";\nimport ContactPage from "./pages/ContactPage";\n\nfunction App() {\n  return (\n      <BrowserRouter>\n        <Routes>\n          <Route index element={<HomePage />} />\n          <Route path="/contact" element={<ContactPage />} />\n        </Routes>\n      </BrowserRouter>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("p",null,"\u0628\u0627 \u062d\u0630\u0641 path \u0635\u0641\u062d\u0647 HomePage \u0648 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 index \u0628\u0647\u0634 \u0628\u0647 \u0631\u0648\u062a\u0631 \u0645\u0641\u0647\u0645\u0648\u0646\u06cc\u0645 \u06a9\u0647 \u0627\u06cc\u0646 \u0635\u0641\u062d\u0647 \u0631\u0648\u062a \u0647\u0633\u062a \u0648 \u0628\u0627\u06cc\u062f element \u06a9\u0647 \u062f\u0627\u062e\u0644 \u0627\u0648\u0646 \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647 \u0628\u0627\u0632 \u0628\u0634\u0647."))}s.isMDXComponent=!0},3930:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/router-6a9afa02a6240abcb54f91a5aa332860.png"}}]);