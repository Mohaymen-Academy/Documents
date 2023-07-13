"use strict";(self.webpackChunkcodestar_documents=self.webpackChunkcodestar_documents||[]).push([[5551],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"useState & useReducer & useRef",description:"react hooks(useState, useRef)"},l=void 0,u={unversionedId:"frontend/react/react-hook-useState-useReducer-useRef",id:"frontend/react/react-hook-useState-useReducer-useRef",title:"useState & useReducer & useRef",description:"react hooks(useState, useRef)",source:"@site/docs/frontend/07-react/06-react-hook-useState-useReducer-useRef.md",sourceDirName:"frontend/07-react",slug:"/frontend/react/react-hook-useState-useReducer-useRef",permalink:"/Documents/docs/frontend/react/react-hook-useState-useReducer-useRef",draft:!1,editUrl:"https://github.com/Star-Academy/codestar-documents/tree/master/docs/frontend/07-react/06-react-hook-useState-useReducer-useRef.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"useState & useReducer & useRef",description:"react hooks(useState, useRef)"},sidebar:"tutorialSidebar",previous:{title:"tailwindcss",permalink:"/Documents/docs/frontend/react/react-tailwind"},next:{title:"Lifecycle & useEffect",permalink:"/Documents/docs/frontend/react/react-lifecycle-useEffect"}},i={},c=[{value:"\u0647\u0648\u06a9 \u0647\u0627 \u062f\u0631 \u0631\u06cc\u06a9\u062a",id:"\u0647\u0648\u06a9-\u0647\u0627-\u062f\u0631-\u0631\u06cc\u06a9\u062a",level:2},{value:"\u0686\u0646\u062f \u0642\u0627\u0646\u0648\u0646 \u062f\u0631 \u0645\u0648\u0631\u062f \u0647\u0648\u06a9 \u0647\u0627:",id:"\u0686\u0646\u062f-\u0642\u0627\u0646\u0648\u0646-\u062f\u0631-\u0645\u0648\u0631\u062f-\u0647\u0648\u06a9-\u0647\u0627",level:3},{value:"\u0647\u0648\u06a9 useState",id:"\u0647\u0648\u06a9-usestate",level:2},{value:"\u0647\u0648\u06a9 useReducer",id:"\u0647\u0648\u06a9-usereducer",level:2},{value:"\u0647\u0648\u06a9 useRef",id:"\u0647\u0648\u06a9-useref",level:2},{value:"\u06a9\u0627\u0631\u0628\u0631\u062f \u0627\u0648\u0644 - \u0646\u06af\u0647\u062f\u0627\u0631\u06cc \u0645\u0642\u0627\u062f\u06cc\u0631",id:"\u06a9\u0627\u0631\u0628\u0631\u062f-\u0627\u0648\u0644---\u0646\u06af\u0647\u062f\u0627\u0631\u06cc-\u0645\u0642\u0627\u062f\u06cc\u0631",level:3},{value:"\u06a9\u0627\u0631\u0628\u0631\u062f \u062f\u0648\u0645 -  \u0627\u0634\u0627\u0631\u0647 \u0628\u0647 \u0627\u0644\u0645\u0627\u0646 \u0647\u0627\u06cc jsx",id:"\u06a9\u0627\u0631\u0628\u0631\u062f-\u062f\u0648\u0645----\u0627\u0634\u0627\u0631\u0647-\u0628\u0647-\u0627\u0644\u0645\u0627\u0646-\u0647\u0627\u06cc-jsx",level:3},{value:"\u067e\u0631\u0648\u0698\u0647",id:"\u067e\u0631\u0648\u0698\u0647",level:2}],s={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u0647\u0648\u06a9-\u0647\u0627-\u062f\u0631-\u0631\u06cc\u06a9\u062a"},"\u0647\u0648\u06a9 \u0647\u0627 \u062f\u0631 \u0631\u06cc\u06a9\u062a"),(0,a.kt)("p",null,"\u0647\u0648\u06a9 \u06cc\u0627 \u0647\u0645\u0627\u0646 \u0642\u0644\u0627\u0628 \u062a\u0627\u0628\u0639 \u0647\u0627\u06cc\u06cc \u0647\u0633\u062a\u0646 \u06a9\u0647 \u0645\u06cc\u062a\u0648\u0627\u0646\u06cc\u0645 \u0627\u0632 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a \u0631\u06cc\u06a9\u062a \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0647\u0627\u06cc \u062a\u0627\u0628\u0639\u06cc \u0627\u0632 \u0627\u0646\u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8244).Z,width:"900",height:"492"})),(0,a.kt)("p",null,"\u0647\u0648\u06a9 \u0647\u0627 \u0627\u0632 \u0648\u0631\u0698\u0646 \u06f1\u06f6.8 \u0631\u06cc\u06a9\u062a \u0627\u0636\u0627\u0641\u0647 \u0634\u062f\u0646 \u0648 \u062d\u062a\u0645\u0627 \u0628\u0627\u06cc\u062f \u0627\u0648\u0646 \u0647\u0627 \u0631\u0627 \u062e\u0648\u0628 \u06cc\u0627\u062f \u0628\u06af\u06cc\u0631\u06cc\u062f"),(0,a.kt)("p",null,"\u0627\u0632 \u062c\u0645\u0644\u0647 \u0645\u0648\u0627\u0631\u062f\u06cc \u06a9\u0647 \u0645\u06cc\u062a\u0648\u0627\u0646 \u0628\u0627 \u0647\u0648\u06a9 \u0647\u0627 \u06a9\u0646\u062a\u0631\u0644 \u06a9\u0631\u062f lifecycle \u0628\u0631\u0646\u0627\u0645\u0647 \u0647\u0633\u062a \u06a9\u0647 \u062c\u0644\u0648 \u062a\u0631 \u0628\u0627\u0647\u0627\u0634 \u0627\u0634\u0646\u0627 \u0645\u06cc\u0634\u06cc\u0645."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u0645\u0627 \u062f\u0631 \u0627\u06cc\u0646 \u062f\u0648\u0631\u0647 \u0627\u0632 class component \u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0646\u0645\u06cc\u06a9\u0646\u06cc\u0645 \u0648 \u062f\u06cc\u06af\u0631 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc \u0627\u0646\u0647\u0627 \u0646\u06cc\u0633\u062a \u0686\u0648\u0646 deprecated \u0634\u062f\u0646 \u0648 \u062f\u06cc\u06af\u0631 \u062f\u0631 \u0648\u0631\u0698\u0646 \u0647\u0627\u06cc \u062c\u062f\u06cc\u062f \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0646\u0645\u06cc \u0634\u0648\u0646\u062f.")),(0,a.kt)("h3",{id:"\u0686\u0646\u062f-\u0642\u0627\u0646\u0648\u0646-\u062f\u0631-\u0645\u0648\u0631\u062f-\u0647\u0648\u06a9-\u0647\u0627"},"\u0686\u0646\u062f \u0642\u0627\u0646\u0648\u0646 \u062f\u0631 \u0645\u0648\u0631\u062f \u0647\u0648\u06a9 \u0647\u0627:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0647\u0648\u06a9 \u0647\u0627 \u0641\u0642\u0637 \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0647\u0627\u06cc \u062a\u0627\u0628\u0639\u06cc \u0642\u0627\u0628\u0644 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0647\u0633\u062a\u0646\u062f"),(0,a.kt)("li",{parentName:"ul"},"\u0647\u0648\u06a9 \u0647\u0627 \u0631\u0627 \u0628\u0627\u06cc\u062f \u0642\u0628\u0644 \u0627\u0632 \u06a9\u0644\u0645\u0647 return \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645"),(0,a.kt)("li",{parentName:"ul"},"\u0647\u0648\u06a9 \u0647\u0627 \u0631\u0627 \u0646\u0645\u06cc\u062a\u0648\u0627\u0646\u0645 \u0634\u0631\u0637\u06cc \u0635\u062f\u0627 \u06a9\u0646\u06cc\u0645"),(0,a.kt)("li",{parentName:"ul"},"\u0647\u0645\u0647 \u0647\u0648\u06a9 \u0647\u0627 \u0628\u0627 \u06a9\u0644\u0645\u0647 use \u0634\u0631\u0648\u0639 \u0645\u06cc\u0634\u0648\u0646\u062f")),(0,a.kt)("h2",{id:"\u0647\u0648\u06a9-usestate"},"\u0647\u0648\u06a9 useState"),(0,a.kt)("p",null,"\u067e\u0631 \u0645\u0635\u0631\u0641 \u062a\u0631\u06cc\u0646 \u0647\u0648\u06a9 \u0631\u06cc\u06a9\u062a \u0647\u0633\u062a \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0646\u06af\u0647\u062f\u0627\u0631\u06cc \u06cc\u06a9 \u0645\u0642\u062f\u0627\u0631 \u0627\u0632 \u0627\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u06a9\u0646\u06cc\u0645\n\u062f\u0631 \u0635\u0648\u0631\u062a \u062a\u063a\u06cc\u06cc\u0631 \u0645\u0642\u062f\u0627\u0631 \u062f\u0631\u0648\u0646 \u062e\u0648\u062f \u0628\u0647 \u0628\u0642\u06cc\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0627\u0637\u0644\u0627\u0639 \u0631\u0633\u0627\u0646\u06cc \u0645\u06cc\u06a9\u0646\u062f \u0648 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0645\u062c\u062f\u062f \u0631\u0646\u062f\u0631 \u0645\u06cc\u0634\u0648\u062f"),(0,a.kt)("p",null,"\u0646\u062d\u0648\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0646 \u0628\u0647 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0627\u0633\u062a "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import {useState} from 'react';\n\nconst [title , setTitle] = useState(null);\n")),(0,a.kt)("p",null,"\u062f\u0631 \u0627\u0628\u062a\u062f\u0627 \u0628\u0627\u06cc\u062f \u0627\u0632 \u067e\u06a9\u06cc\u062c \u0631\u06cc\u06a9\u062a \u0627\u0646 \u0631\u0627 \u0627\u0645\u067e\u0648\u0631\u062a \u06a9\u0646\u06cc\u0645\n\u0645\u0642\u062f\u0627\u0631 null \u06a9\u0647 \u0628\u0647 \u0647\u0648\u06a9 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0627\u0631\u06af\u0648\u0645\u0627\u0646 \u0648\u0631\u0648\u062f\u06cc \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u0645\u0642\u062f\u0627\u0631 \u0627\u0648\u0644\u06cc\u0647 \u0627\u0646 \u0627\u0633\u062a."),(0,a.kt)("p",null,"\u06a9\u0647 \u0628\u0631\u0627\u06cc \u0645\u0627 \u0627\u0631\u0627\u06cc\u0647 \u0627\u0632 \u062f\u0648 \u0645\u0642\u062f\u0627\u0631 \u0628\u0631\u06af\u0631\u0627\u062f\u0646 \u0645\u06cc\u06a9\u0646\u062f \u0639\u0636\u0648 \u0627\u0648\u0644 \u0627\u0646 title \u0645\u0642\u062f\u0627\u0631 \u062f\u0627\u062f\u0647 \u0627\u06cc \u0627\u0633\u062a \u06a9\u0647 \u062f\u0631 \u062d\u0627\u0644 \u062d\u0627\u0636\u0631 \u062f\u0631 \u062f\u0631\u0648\u0646 \u062e\u0648\u062f \u062f\u0627\u0631\u062f \u0648 \u0645\u0642\u062f\u0627\u0631 \u062f\u0648\u0645 \u062a\u0627\u0628\u0639\u06cc \u0627\u0633\u062a \u06a9\u0647 \u0645\u06cc\u062a\u0648\u0627\u0646\u06cc\u0645 \u0628\u0627 \u0627\u0646 \u0645\u0642\u062f\u0627\u0631 \u0631\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0647\u06cc\u0645"),(0,a.kt)("p",null,"\u0628\u0647 \u0645\u062b\u0627\u0644 \u0632\u06cc\u0631 \u062a\u0648\u062c\u0647 \u06a9\u0646\u06cc\u062f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import {useState} from 'react';\n\nconst  App = () => {\n  const [title, setTitle] = useState('Without Title');\n\n  const changeTitleHandler = () => {\n    setTitle('title changed !');\n  };\n\n  return (\n    <div>\n      <h1>{title}</h1>\n      <button onClick={changeTitleHandler}></button>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,a.kt)("p",null,"\u062f\u0631 \u0645\u062b\u0627\u0644 \u0628\u0627\u0644\u0627 \u0628\u0627 \u06a9\u0644\u06cc\u06a9 \u0631\u0648\u06cc \u062f\u06a9\u0645\u0647 setTitle \u0627\u062c\u0631\u0627 \u0634\u062f\u0647 \u0648 \u0645\u0642\u062f\u0627\u0631 title \u062a\u063a\u06cc\u06cc\u0631 \u0645\u06cc\u06a9\u0646\u062f \u0628\u062f\u0648\u0646 \u0648\u0642\u0641\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0645\u062a\u0648\u062c\u0647 \u062a\u063a\u06cc\u06cc\u0631 \u0645\u0627 \u0645\u06cc\u0634\u0648\u062f \u0648 \u0645\u062c\u062f\u062f \u0631\u0646\u062f\u0631 \u0645\u06cc\u0634\u0648\u062f."),(0,a.kt)("admonition",{title:"\u0646\u06a9\u062a\u0647",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u0627\u06cc\u0646 \u0645\u0648\u0636\u0648\u0639 \u0631\u0627 \u06af\u0648\u0634\u0647 \u0630\u0647\u0646 \u062e\u0648\u062f \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u062f \u06a9\u0647 \u0628\u0627 \u0631\u0646\u062f\u0631 \u0645\u062c\u062f\u062f \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u062a\u0627\u0628\u0639 App \u0627\u0632 \u0627\u0628\u062a\u062f\u0627 \u0627\u062c\u0631\u0627 \u0645\u06cc\u0634\u0648\u062f \u0648 \u0645\u0642\u062f\u0627\u0631 \u062c\u062f\u06cc\u062f\u06cc return \u0645\u06cc\u0634\u0648\u062f.")),(0,a.kt)("h2",{id:"\u0647\u0648\u06a9-usereducer"},"\u0647\u0648\u06a9 useReducer"),(0,a.kt)("p",null,"\u0627\u06cc\u0646 \u0647\u0648\u06a9 \u062f\u0631 \u0648\u0627\u0642\u0639 \u0647\u0645\u0627\u0646 useState \u0627\u0633\u062a \u0628\u0627 \u0627\u06cc\u0646 \u062a\u0641\u0627\u0648\u062a \u06a9\u0647 \u0645\u06cc\u062a\u0648\u0627\u0646 \u0645\u0646\u0637\u0642 \u0628\u0647 \u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u0627\u0646 \u0631\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a \u0627\u062e\u062a\u0635\u0627\u0635\u06cc \u062f\u0631 \u0646\u0638\u0631 \u06af\u0631\u0641\u062a \u0628\u0647 \u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0632\u06cc\u0631 \u062f\u0642\u062a \u06a9\u0646\u06cc\u062f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const initialTodos = [\n  {\n    id: 1,\n    title: "Todo 1",\n    complete: false,\n  }\n];\n\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case "COMPLETE":\n      return state.map((todo) => {\n        if (todo.id === action.id) {\n          return { ...todo, complete: !todo.complete };\n        } else {\n          return todo;\n        }\n      });\n    default:\n      return state;\n  }\n};\n\nfunction Todos() {\n  const [todos, dispatch] = useReducer(reducer, initialTodos);\n\n  const handleComplete = (todo) => {\n    dispatch({ type: "COMPLETE", id: todo.id });\n  };\n\n  return (\n    <>\n      {todos.map((todo) => (\n        <div key={todo.id}>\n          <label>\n            <input\n              type="checkbox"\n              checked={todo.complete}\n              onChange={() => handleComplete(todo)}\n            />\n            {todo.title}\n          </label>\n        </div>\n      ))}\n    </>\n  );\n}\n\nexport default Todos;\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0628\u0647 \u062c\u0627\u06cc useState \u0627\u0632 useReducer \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u06a9\u0646\u06cc\u0645"),(0,a.kt)("li",{parentName:"ul"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631 \u0627\u0648\u0644 \u06cc\u06a9 \u062a\u0627\u0628\u0639 \u0627\u0633\u062a \u06a9\u0647 \u0645\u0646\u0637\u0642 \u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u0631\u0627 \u0645\u0634\u062e\u0635 \u0645\u06cc\u06a9\u0646\u062f"),(0,a.kt)("li",{parentName:"ul"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631 \u062f\u0648\u0645 \u0645\u0642\u062f\u0627\u0631 \u0627\u0648\u0644\u06cc\u0647 \u0627\u06cc state \u0645\u0627 \u0627\u0633\u062a")),(0,a.kt)("h2",{id:"\u0647\u0648\u06a9-useref"},"\u0647\u0648\u06a9 useRef"),(0,a.kt)("p",null,"\u0627\u06cc\u0646 \u0647\u0648\u06a9 \u062f\u0648 \u06a9\u0627\u0631 \u0645\u0647\u0645 \u0628\u0631\u0627\u06cc \u0645\u0627 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u062f\u0647\u062f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0645\u0642\u062f\u0627\u0631\u06cc \u06a9\u0647 \u062f\u0631\u0648\u0646 \u0627\u0646 \u0631\u06cc\u062e\u062a\u0647 \u0645\u06cc\u0634\u0648\u062f \u0631\u0627 \u0646\u06af\u0647\u062f\u0627\u0631\u06cc \u0645\u06cc\u06a9\u0646\u062f \u0648 \u0628\u0627 \u0631\u0646\u062f\u0631 \u0645\u062c\u062f\u062f \u06a9\u0627\u0645\u067e\u0648\u0646\u062a\u062a \u0627\u0632 \u0628\u06cc\u0646 \u0646\u062e\u0648\u0627\u0647\u062f \u0631\u0641\u062a"),(0,a.kt)("li",{parentName:"ul"},"\u0627\u0634\u0627\u0631\u0647 \u06af\u0631\u06cc \u0645\u06cc\u0633\u0627\u0632\u062f \u062a\u0627 \u0628\u062a\u0648\u0627\u0646\u06cc\u0645 \u0627\u0632 \u06a9\u062f \u062f\u0633\u062a\u0631\u0633\u06cc \u0628\u0647 \u0627\u0644\u0645\u0627\u0646 \u0647\u0627\u06cc \u0635\u0641\u062d\u0647 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645")),(0,a.kt)("h3",{id:"\u06a9\u0627\u0631\u0628\u0631\u062f-\u0627\u0648\u0644---\u0646\u06af\u0647\u062f\u0627\u0631\u06cc-\u0645\u0642\u0627\u062f\u06cc\u0631"},"\u06a9\u0627\u0631\u0628\u0631\u062f \u0627\u0648\u0644 - \u0646\u06af\u0647\u062f\u0627\u0631\u06cc \u0645\u0642\u0627\u062f\u06cc\u0631"),(0,a.kt)("p",null,"\u0627\u0628\u062a\u062f\u0627 \u0645\u0648\u0631\u062f \u0627\u0648\u0644 \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u0645\u06cc\u06a9\u0646\u06cc\u0645\n\u0628\u0647 \u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0632\u06cc\u0631 \u062a\u0648\u062c\u0647 \u06a9\u0646\u06cc\u062f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import {useRef, useState} from 'react';\n\nconst  App = () => {\n  const [title, setTitle] = useState('Without Title');\n  const value = useRef(1);\n  let variable = 1;\n\n  const changeTitleHandler = () => {\n    setTitle('title changed !');\n  };\n\n  const incValueHandler = () => {\n    value.current = value.current + 1;\n    variable += 1;\n  };\n\n  const logRefHandler = () => {\n    console.log(value.current, variable);\n  };\n\n  return (\n    <div>\n      <h1>{title}</h1>\n      <br />\n      <br />\n      <button onClick={changeTitleHandler}>useState</button>\n      <br />\n      <h1>{value.current} - {variable}</h1>\n      <br />\n      <button onClick={incValueHandler}>useRef</button>\n      <button onClick={logRefHandler}>log ref</button>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,a.kt)("p",null,"\u0628\u0627 \u0641\u0634\u0631\u062f\u0646 \u062f\u06a9\u0645\u0647 useRef \u0645\u062a\u063a\u06cc\u0631 \u0645\u0639\u0645\u0648\u0644\u06cc \u0645\u0627 \u0648 Ref \u0645\u0627 \u06cc\u06a9 \u0639\u062f\u062f \u0628\u0627\u0644\u0627 \u0645\u06cc\u0631\u0648\u062f \u0648\u0644\u06cc \u062f\u0631 \u0635\u0641\u062d\u0647 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0646\u0645\u06cc \u0634\u0648\u0646\u062f \u0627\u06cc\u0646 \u0628\u0647 \u0627\u06cc\u0646 \u062e\u0627\u0637\u0631 \u0627\u0633\u062a \u06a9\u0647 useRef \u0628\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u062a \u0645\u0627 \u0627\u0639\u0644\u0627\u0645 \u0631\u0646\u062f\u0631 \u0645\u062c\u062f\u062f \u0631\u0627 \u0646\u0645\u06cc\u062f\u0647\u062f.\n\u062d\u0627\u0644\u0627 \u062f\u06a9\u0645\u0647 useState \u0631\u0627 \u0628\u0632\u0646\u06cc\u062f \u062a\u0627 \u062a\u063a\u06cc\u06cc\u0631\u06cc \u062f\u0631 title \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645 \u0645\u06cc\u0628\u06cc\u0646\u06cc\u062f \u06a9\u0647 \u0635\u0641\u062d\u0647 \u0633\u0631\u06cc\u0639 \u0631\u0646\u062f\u0631 \u0645\u062c\u062f\u062f \u0645\u06cc\u0634\u0648\u062f \u0648 \u0645\u0642\u062f\u0627\u0631 useRef \u0646\u06cc\u0632 \u062d\u0641\u0638 \u0634\u062f\u0647 \u0627\u0633\u062a \u0648\u0644\u06cc \u0645\u062a\u063a\u06cc\u0631 \u0645\u0639\u0645\u0648\u0644\u06cc \u0645\u0627 \u0645\u062c\u062f\u062f \u0628\u0647 \u0645\u0642\u062f\u0627\u0631 \u0627\u0648\u0644\u06cc\u0647 \u062e\u0648\u062f \u0628\u0627\u0632 \u0645\u06cc\u06af\u0631\u062f\u062f"),(0,a.kt)("admonition",{title:"\u0646\u06a9\u062a\u0647",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u067e\u0633 \u0645\u06cc\u062a\u0648\u0627\u0646 \u06af\u0641\u062a \u06a9\u0647 \u0628\u0627 \u0631\u0646\u062f\u0631 \u0645\u062c\u062f\u062f \u06a9\u0627\u0645\u067e\u0648\u0646\u062a\u062a \u0647\u0645\u0647 \u0645\u062a\u063a\u06cc\u0631\u0647\u0627\u06cc \u0645\u0639\u0645\u0648\u0644\u06cc \u062f\u0627\u062f\u0647 \u062e\u0648\u062f \u0631\u0627 \u0627\u0632 \u062f\u0633\u062a \u0645\u06cc\u062f\u0647\u0646\u062f \u0648 \u0628\u0631\u0627\u06cc \u0646\u06af\u0647\u062f\u0627\u0631\u06cc \u0645\u0642\u062f\u0627\u0631 \u0627\u0646\u0647\u0627 \u0646\u06cc\u0627\u0632 \u0627\u0633\u062a \u0627\u0632 userRef \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f.")),(0,a.kt)("admonition",{title:"\u0646\u06a9\u062a\u0647",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 useRef \u0645\u0627 \u062f\u0631 \u062f\u0631\u0648\u0646 jsx \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u0628\u0627\u0634\u062f \u067e\u0633 \u0628\u0627\u06cc\u062f \u0627\u0632 useState \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f \u0646\u0647 useRef \u062a\u0627 \u0628\u0627 \u0646\u063a\u06cc\u06cc\u0631 \u0645\u0642\u062f\u0627\u0631 ui \u0646\u06cc\u0632 \u0631\u0646\u062f\u0631 \u0634\u0648\u062f.")),(0,a.kt)("h3",{id:"\u06a9\u0627\u0631\u0628\u0631\u062f-\u062f\u0648\u0645----\u0627\u0634\u0627\u0631\u0647-\u0628\u0647-\u0627\u0644\u0645\u0627\u0646-\u0647\u0627\u06cc-jsx"},"\u06a9\u0627\u0631\u0628\u0631\u062f \u062f\u0648\u0645 -  \u0627\u0634\u0627\u0631\u0647 \u0628\u0647 \u0627\u0644\u0645\u0627\u0646 \u0647\u0627\u06cc jsx"),(0,a.kt)("p",null,"\u0632\u0645\u0627\u0646 \u0647\u0627\u06cc\u06cc \u0647\u0633\u062a \u06a9\u0647 \u0645\u0627 \u0646\u06cc\u0627\u0632\u0645\u0646\u062f \u0627\u06cc\u0646 \u0645\u06cc\u0634\u0648\u06cc\u0645 \u06a9\u0647 \u06cc\u06a9 \u062a\u06af \u0631\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0634\u0631\u0627\u06cc\u0637\u06cc\u06cc \u0627\u0632 \u0633\u0645\u062a \u06a9\u062f \u0648\u06cc\u0631\u0627\u06cc\u0634 \u06a9\u0646\u06cc\u0645\n\u0628\u0647 \u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0632\u06cc\u0631 \u062f\u0642\u062a \u06a9\u0646\u06cc\u062f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import {useRef} from 'react';\n\nconst  App = () => {\n  const titleRef = useRef();\n\n  const changeColorHandler = () => {\n    titleRef.current.style.color = 'red';\n  };\n\n\n  return (\n    <div>\n      <h1 ref={titleRef}>This is a title</h1>\n      <button onClick={changeColorHandler}>change color</button>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,a.kt)("p",null,"\u06cc\u06a9 useRef \u062a\u0639\u0631\u06cc\u0641 \u06a9\u0631\u062f\u06cc\u0645 \u0628\u0639\u062f \u0627\u0646 \u0631\u0627 \u0628\u0647 \u0648\u0633\u06cc\u0644\u0647 \u06cc attribute \u062a\u06af h1 \u0628\u0647 \u0646\u0627\u0645 ref \u0645\u062a\u0635\u0644 \u06a9\u0631\u062f\u06cc\u0645.\n\u062d\u0627\u0644\u0627 \u0645\u06cc\u062a\u0648\u0627\u0646\u06cc\u0645 \u0627\u0632 \u06a9\u062f \u0628\u0627 \u0635\u062f\u0627 \u06a9\u0631\u062f\u0646 titleRef \u0628\u0647 \u0627\u0644\u0627\u0646 jsx \u062f\u0633\u062a\u0631\u0633\u06cc \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645 \u0648 \u0631\u0646\u06af \u0627\u0646 \u0631\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0647\u06cc\u0645."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u067e\u0631\u0648\u0698\u0647"},"\u067e\u0631\u0648\u0698\u0647"),(0,a.kt)("p",null,"\u0633\u0627\u062e\u062a \u0627\u067e\u0644\u06cc\u06a9\u0634\u0646 TODO"))}d.isMDXComponent=!0},8244:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/react-hooks-1290bfe3c2636fa1a3476d7158e19831.png"}}]);