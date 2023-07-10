"use strict";(self.webpackChunkcodestar_documents=self.webpackChunkcodestar_documents||[]).push([[9672],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(i,".").concat(d)]||f[d]||s[d]||c;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<c;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const c={title:"React 07",description:"react lifecycle & useEffect hook"},o=void 0,l={unversionedId:"frontend/react/react-07",id:"frontend/react/react-07",title:"React 07",description:"react lifecycle & useEffect hook",source:"@site/docs/frontend/07-react/react-07.md",sourceDirName:"frontend/07-react",slug:"/frontend/react/react-07",permalink:"/Documents/docs/frontend/react/react-07",draft:!1,editUrl:"https://github.com/Star-Academy/codestar-documents/tree/master/docs/frontend/07-react/react-07.md",tags:[],version:"current",frontMatter:{title:"React 07",description:"react lifecycle & useEffect hook"},sidebar:"tutorialSidebar",previous:{title:"React 06",permalink:"/Documents/docs/frontend/react/react-06"},next:{title:"React 08",permalink:"/Documents/docs/frontend/react/react-08"}},i={},u=[{value:"\u0686\u0631\u062e\u0647 \u06cc \u062d\u06cc\u0627\u062a \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a",id:"\u0686\u0631\u062e\u0647-\u06cc-\u062d\u06cc\u0627\u062a-\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a",level:2},{value:"useEffect",id:"useeffect",level:2}],p={toc:u};function s(e){let{components:t,...c}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u0686\u0631\u062e\u0647-\u06cc-\u062d\u06cc\u0627\u062a-\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a"},"\u0686\u0631\u062e\u0647 \u06cc \u062d\u06cc\u0627\u062a \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a"),(0,a.kt)("p",null,"\u0647\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u062f\u0631 \u0631\u06cc\u06a9\u062a \u06cc\u06a9 \u0686\u0631\u062e\u0647 \u06cc \u062d\u06cc\u0627\u062a \u062f\u0627\u0631\u062f \u06a9\u0647 \u0627\u0632 \u0644\u062d\u0638\u0647 \u0627\u06cc\u062c\u0627\u062f \u062a\u0627 \u0644\u062d\u0638\u0647 \u062a\u062e\u0631\u06cc\u0628 \u0645\u062f\u0627\u0648\u0645 \u0627\u0646 \u0631\u0627 \u0637\u06cc \u0645\u06cc\u06a9\u0646\u062f.\n\u0628\u0647 \u062a\u0635\u0648\u06cc\u0631 \u0632\u06cc\u0631 \u062f\u0641\u062a \u06a9\u0646\u06cc\u062f:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u0686\u0631\u062e\u0647 \u062d\u06cc\u0627\u0637 \u06a9\u0627\u0645\u0648\u0646\u0646\u062a",src:n(2618).Z,width:"542",height:"351"})),(0,a.kt)("p",null,"\u0645\u0631\u0627\u062d\u0644 \u0632\u06cc\u0631 \u0628\u0647 \u062a\u0631\u062a\u06cc\u0628 \u0628\u0631\u0627\u06cc \u0647\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u06cc \u0627\u062c\u0631\u0627 \u0645\u06cc\u0634\u0648\u062f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Initialization:\n\u0647\u0646\u06af\u0627\u0645 \u0633\u0627\u062e\u062a \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0648 \u0645\u0642\u062f\u0627\u0631 \u062f\u0647\u06cc \u0627\u0648\u0644\u06cc\u0647 \u0627\u0633\u062a \u0627\u062c\u0631\u0627 \u0645\u06cc\u0634\u0648\u062f"),(0,a.kt)("li",{parentName:"ul"},"Mounting:\n\u0647\u0646\u06af\u0627\u0645\u06cc \u06a9\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0628\u0647 \u0635\u0641\u062d\u0647 \u0627\u0636\u0627\u0641\u0647 \u0645\u06cc\u0634\u0648\u062f \u0627\u062c\u0631\u0627 \u0645\u06cc\u0634\u0648\u062f"),(0,a.kt)("li",{parentName:"ul"},"Updation:\n\u0647\u0646\u06af\u0627\u0645\u06cc \u06a9\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0628\u0647 \u0647\u0631 \u0639\u0644\u062a \u0631\u0646\u062f\u0631 \u0645\u062c\u062f\u062f \u0645\u06cc\u0634\u0648\u062f \u0627\u062c\u0631\u0627 \u0645\u06cc\u0634\u0648\u062f"),(0,a.kt)("li",{parentName:"ul"},"Unmounting:\n\u0632\u0645\u0627\u0646\u06cc \u06a9\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0628\u0647 \u0647\u0631 \u0639\u0644\u062a \u0645\u06cc\u062e\u0648\u0627\u062f \u0627\u0632 \u0636\u0641\u062d\u0647 \u062d\u0630\u0641 \u0634\u0648\u062f \u0627\u062c\u0631\u0627 \u0645\u06cc\u0634\u0648\u062f")),(0,a.kt)("p",null,"\u0645\u06cc\u062a\u0648\u0627\u0646\u06cc\u0645 \u0646\u06af\u0627\u0647\u06cc \u0639\u0645\u06cc\u0642 \u062a\u0631 \u0628\u0647 \u0686\u0631\u062e\u0647 \u062d\u06cc\u0627\u0637 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0647\u0627 \u0628\u06cc\u0646\u062f\u0627\u0632\u06cc\u0645 "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7997).Z,width:"1024",height:"567"})),(0,a.kt)("p",null,"\u062f\u0631 \u062a\u0635\u0648\u06cc\u0631 \u0628\u0627\u0644\u0627 \u0645\u0634\u0627\u0647\u062f\u0647 \u0645\u06cc\u06a9\u0646\u06cc\u062f \u06a9\u0647 \u0633\u0647 \u0645\u062a\u062f \u0645\u0647\u0645 \u062f\u0627\u0631\u06cc\u0645 "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"componentDidMount:\n\u0647\u0646\u06af\u0627\u0645\u06cc \u06a9\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0628\u0647 \u0635\u0641\u062d\u0647 \u0627\u0636\u0627\u0641\u0647 \u0645\u06cc\u0634\u0648\u062f \u0627\u062c\u0631\u0627 \u0645\u06cc\u0634\u0648\u062f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"componentDidUpdate:\n\u0647\u0646\u06af\u0627\u0645\u06cc \u06a9\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0628\u0647 \u0647\u0631 \u0639\u0644\u062a \u0631\u0646\u062f\u0631 \u0645\u062c\u062f\u062f \u0645\u06cc\u0634\u0648\u062f \u0627\u062c\u0631\u0627 \u0645\u06cc\u0634\u0648\u062f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"componentWillUnmount:\n\u0632\u0645\u0627\u0646\u06cc \u06a9\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0628\u0647 \u0647\u0631 \u0639\u0644\u062a \u0645\u06cc\u062e\u0648\u0627\u062f \u0627\u0632 \u0636\u0641\u062d\u0647 \u062d\u0630\u0641 \u0634\u0648\u062f \u0627\u062c\u0631\u0627 \u0645\u06cc\u0634\u0648\u062f"))),(0,a.kt)("p",null,"\u062d\u0627\u0644\u0627 \u0686\u0637\u0648\u0631 \u0645\u06cc\u062a\u0648\u0646\u06cc\u0645 \u0628\u0647 \u0627\u06cc\u0646 \u062a\u0627\u0628\u0639 \u0647\u0627 \u062f\u0633\u062a\u0631\u0633\u06cc \u067e\u06cc\u062f\u0627 \u06a9\u0646\u06cc\u0645 \u061f\u061f\u061f"),(0,a.kt)("h2",{id:"useeffect"},"useEffect"),(0,a.kt)("p",null,"\u0647\u0648\u06a9 useEffect \u062a\u0645\u0627\u0645\u06cc \u0645\u0648\u0627\u0631\u062f \u0686\u0631\u062e\u0647 \u062d\u06cc\u0627\u0637 \u0631\u0627 \u0628\u0647 \u0645\u0627 \u0645\u06cc\u062f\u0647\u062f\n\u0628\u0647 \u0646\u0645\u0648\u0646\u0647 \u0632\u06cc\u0631 \u0631\u0627 \u062f\u0642\u062a \u06a9\u0646\u06cc\u062f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'/**\n* const [state, setState] = useState(init)\n*\n* {state}\n* setState(new value)\n*\n* useEffect(callback function, dependencies)\n* useEffect(() => {\n*     mounting and after updating each dependencies\n*     return () => {\n*       unmounting and before updateing each dependencies\n*     }\n*   }, [states or props])\n*/\n\nuseEffect(() => {\n    //step 1\n    console.log("mounting and after updating each dependencies");\n    \n    return () => {\n        //step 2\n        console.log("unmounting and before updating each dependencies");\n    };\n}, []);\n')),(0,a.kt)("p",null,"\u0632\u0645\u0627\u0646\u06cc \u06a9\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0634\u0631\u0648\u0639 \u0628\u0647 mount \u0634\u062f\u0646 \u0645\u06cc\u0634\u0648\u062f step1 \u0627\u062c\u0631\u0627 \u0645\u06cc\u0634\u0648\u062f \u0648 \u0632\u0645\u0627\u0646\u06cc \u06a9\u0647 unmount \u0645\u06cc\u0634\u0648\u062f step2 \u0627\u062c\u0631\u0627 \u0645\u06cc\u0634\u0648\u062f."),(0,a.kt)("p",null,"\u0647\u0645\u0686\u0646\u06cc\u0646 \u0632\u0645\u0627\u0646\u06cc\u06a9\u0647 \u0647\u0631 \u06a9\u062f\u0627\u0645 \u0627\u0632 state \u0647\u0627 \u06cc\u0627 prop \u0647\u0627 \u062a\u063a\u06cc\u06cc\u0631\u06cc \u067e\u06cc\u062f\u0627 \u06a9\u0646\u062f \u0645\u062c\u062f\u062f \u0631\u0646\u062f\u0631 \u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647 \u0648 \u0642\u0628\u0644 \u0627\u0632 \u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc prop | state \u0647\u0627 step2 \u0627\u062c\u0631\u0627 \u0645\u06cc\u0634\u0648\u062f \u0648 \u0628\u0639\u062f \u0627\u0632 \u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc state | prop \u0647\u0627 step 1 \u0627\u062c\u0631\u0627 \u0645\u06cc\u0634\u0648\u062f."),(0,a.kt)("p",null,"\u067e\u0633 \u062f\u0631 \u0648\u0627\u0642\u0639 \u0645\u0627 \u0645\u06cc\u062a\u0648\u0627\u0646\u06cc\u0645 \u062a\u0645\u0627\u0645 lifecycle \u06cc\u06a9 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0631\u0627 \u0628\u0627 useEffect \u0645\u062f\u06cc\u0631\u06cc\u062a \u06a9\u0646\u06cc\u0645."),(0,a.kt)("admonition",{title:"\u0646\u06a9\u062a\u0647",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u0645\u0639\u0645\u0648\u0644\u0627 \u0627\u0631\u0633\u0627\u0644 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u062f\u0627\u062f\u0647 \u0628\u0647 \u0633\u0631\u0648\u0631 \u062f\u0631 \u0627\u06cc\u0646 \u0647\u0648\u06a9 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u0634\u0648\u062f.")),(0,a.kt)("p",null,"\u062d\u0627\u0644\u0627 \u0627\u06af\u0631 \u0628\u0647 \u06cc\u06a9 useEffect \u0648\u0627\u0628\u0633\u062a\u06af\u06cc \u062f\u0627\u062f\u0647 \u0634\u0648\u062f \u0686\u0647 \u0627\u062a\u0641\u0627\u0642\u06cc \u0631\u062e \u062e\u0648\u0627\u0647\u062f \u062f\u0627\u062f\u061f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const [counter, setCounter]= useState(0);\n\nuseEffect(() => {\n    //step 1\n    console.log("mounting and after updating each dependencies");\n    \n    return () => {\n        //step 2\n        console.log("unmounting and before updating each dependencies");\n    };\n}, [counter]);\n')),(0,a.kt)("p",null,"\u0647\u0648\u06a9 \u0628\u0627\u0644\u0627 \u0632\u0645\u0627\u0646\u06cc \u0627\u062c\u0631\u0627 \u062e\u0648\u0627\u0647\u062f \u0634\u062f \u06a9\u0647 counter \u062a\u063a\u06cc\u06cc\u0631 \u06a9\u0646\u062f."),(0,a.kt)("p",null,"\u0628\u0631\u0627\u06cc \u062f\u0633\u062a\u0631\u0633\u06cc \u0628\u0647 didMount , willUnmount \u0645\u06cc\u062a\u0648\u0627\u0646 \u0627\u0632 \u0631\u0648\u0634 \u0632\u06cc\u0631 \u0627\u0642\u062f\u0627\u0645 \u06a9\u0631\u062f \u0648 \u0647\u0648\u06a9 \u0631\u0627 \u0628\u062f\u0648\u0646 \u0648\u0627\u0628\u0633\u062a\u06af\u06cc \u0646\u0648\u0634\u062a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'useEffect(() => {\n    console.log("mounting");\n    \n    return () => {\n        console.log("unmounting");\n    };\n}, []);\n')))}s.isMDXComponent=!0},7997:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/react-lifecycle-deep-53c8a90cf4b2e815abd4b02cd73de0c1.webp"},2618:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/react-lifecycle-a9f05cfa7a8f42531fb2e569f5e443c7.png"}}]);