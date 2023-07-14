"use strict";(self.webpackChunkcodestar_documents=self.webpackChunkcodestar_documents||[]).push([[7333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(n),k=l,m=u["".concat(p,".").concat(k)]||u[k]||c[k]||r;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(7462),l=(n(7294),n(3905));const r={title:"ETL",description:""},i=void 0,o={unversionedId:"project/phase01-etl",id:"project/phase01-etl",title:"ETL",description:"",source:"@site/docs/project/phase01-etl.md",sourceDirName:"project",slug:"/project/phase01-etl",permalink:"/Documents/docs/project/phase01-etl",draft:!1,editUrl:"https://github.com/Mohaymen-Academy/Documents/tree/main/docs/project/phase01-etl.md",tags:[],version:"current",frontMatter:{title:"ETL",description:""},sidebar:"tutorialSidebar",previous:{title:"\u067e\u0631\u0648\u0698\u0647",permalink:"/Documents/docs/project"}},p={},d=[{value:"\u0645\u0642\u062f\u0645\u0647",id:"\u0645\u0642\u062f\u0645\u0647",level:2},{value:"\u062a\u0639\u0631\u06cc\u0641",id:"\u062a\u0639\u0631\u06cc\u0641",level:2},{value:"Data Extraction (\u0627\u0633\u062a\u062e\u0631\u0627\u062c \u062f\u0627\u062f\u0647)",id:"data-extraction-\u0627\u0633\u062a\u062e\u0631\u0627\u062c-\u062f\u0627\u062f\u0647",level:3},{value:"Data Transformation (\u062a\u0628\u062f\u06cc\u0644 \u062f\u0627\u062f\u0647)",id:"data-transformation-\u062a\u0628\u062f\u06cc\u0644-\u062f\u0627\u062f\u0647",level:3},{value:"Data Loading (\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u062f\u0627\u062f\u0647)",id:"data-loading-\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc-\u062f\u0627\u062f\u0647",level:3},{value:"\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc",id:"\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc",level:2},{value:"\u062b\u0628\u062a\u200c\u0646\u0627\u0645",id:"\u062b\u0628\u062a\u0646\u0627\u0645",level:3},{value:"\u0648\u0631\u0648\u062f \u062f\u0627\u062f\u0647",id:"\u0648\u0631\u0648\u062f-\u062f\u0627\u062f\u0647",level:3},{value:"\u0633\u0627\u062e\u062a Pipeline",id:"\u0633\u0627\u062e\u062a-pipeline",level:3},{value:"\u062a\u0639\u06cc\u06cc\u0646 \u0645\u0628\u062f\u0623",id:"\u062a\u0639\u06cc\u06cc\u0646-\u0645\u0628\u062f\u0623",level:3},{value:"\u062a\u0639\u06cc\u06cc\u0646 \u0645\u0642\u0635\u062f",id:"\u062a\u0639\u06cc\u06cc\u0646-\u0645\u0642\u0635\u062f",level:3},{value:"\u067e\u0631\u062f\u0627\u0632\u0634\u06af\u0631",id:"\u067e\u0631\u062f\u0627\u0632\u0634\u06af\u0631",level:3},{value:"\u0641\u06cc\u0644\u062a\u0631 \u062f\u0627\u062f\u0647\u200c\u0647\u0627",id:"\u0641\u06cc\u0644\u062a\u0631-\u062f\u0627\u062f\u0647\u0647\u0627",level:3},{value:"\u0627\u062c\u0631\u0627",id:"\u0627\u062c\u0631\u0627",level:3},{value:"\u062a\u0645\u06cc\u0632\u0633\u0627\u0632\u06cc",id:"\u062a\u0645\u06cc\u0632\u0633\u0627\u0632\u06cc",level:3},{value:"Aggregation",id:"aggregation",level:3},{value:"Join",id:"join",level:3},{value:"\u062f\u0631\u06cc\u0627\u0641\u062a \u062e\u0631\u0648\u062c\u06cc",id:"\u062f\u0631\u06cc\u0627\u0641\u062a-\u062e\u0631\u0648\u062c\u06cc",level:3},{value:"\u0627\u0634\u062a\u0631\u0627\u06a9\u200c\u06af\u0630\u0627\u0631\u06cc",id:"\u0627\u0634\u062a\u0631\u0627\u06a9\u06af\u0630\u0627\u0631\u06cc",level:3}],s={toc:d};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u0645\u0642\u062f\u0645\u0647"},"\u0645\u0642\u062f\u0645\u0647"),(0,l.kt)("p",null,"\u062f\u0631 \u062f\u0646\u06cc\u0627\u06cc \u0648\u0627\u0642\u0639\u06cc\u060c \u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u0645\u062e\u062a\u0644\u0641 \u0648 \u0628\u0627 \u0633\u0627\u062e\u062a\u0627\u0631\u0647\u0627\u06cc \u0645\u062a\u0641\u0627\u0648\u062a \u062c\u0645\u0639\u200c\u0622\u0648\u0631\u06cc \u0645\u06cc\u200c\u0634\u0648\u0646\u062f.\n\u062f\u0631 \u0627\u06cc\u0646 \u0641\u0627\u0632 \u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u06cc\u0645 \u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u0631\u0627 \u0645\u0648\u0631\u062f \u067e\u0631\u062f\u0627\u0632\u0634 \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u0645 \u0648 \u0628\u0647 \u06cc\u06a9 \u062e\u0631\u0648\u062c\u06cc \u0645\u0646\u0627\u0633\u0628 \u0628\u0631\u0633\u06cc\u0645\u061b\n\u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u0628\u0627\u06cc\u062f \u062a\u0645\u0627\u0645 \u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u0631\u0627 \u062c\u0645\u0639\u200c\u0622\u0648\u0631\u06cc \u06a9\u0646\u06cc\u0645\u060c\n\u0622\u0646\u200c\u0647\u0627 \u0631\u0627 \u062a\u0645\u06cc\u0632 \u06a9\u0646\u06cc\u0645\u060c\n\u062a\u0628\u062f\u06cc\u0644\u0627\u062a \u0645\u0648\u0631\u062f \u0646\u06cc\u0627\u0632 \u0631\u0627 \u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u06cc\u0645\n\u0648 \u0622\u0646\u200c\u0647\u0627 \u0631\u0627 \u0628\u0647 \u06cc\u06a9 \u0633\u0627\u062e\u062a\u0627\u0631 \u0648 \u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f \u06cc\u06a9\u0633\u0627\u0646 \u062f\u0631 \u0622\u0648\u0631\u06cc\u0645."),(0,l.kt)("p",null,"\u0628\u0647 \u0641\u0631\u0622\u06cc\u0646\u062f \u0627\u0646\u062a\u0642\u0627\u0644 \u062f\u0627\u062f\u0647 \u0627\u0632 \u06cc\u06a9 \u06cc\u0627 \u0686\u0646\u062f\u06cc\u0646 \u0645\u0646\u0628\u0639 \u0628\u0647 \u06cc\u06a9 \u0633\u06cc\u0633\u062a\u0645 \u0645\u0642\u0635\u062f \u06a9\u0647 \u062f\u0627\u062f\u0647 \u0631\u0627 \u0628\u0647\u200c\u0635\u0648\u0631\u062a \u0645\u062a\u0641\u0627\u0648\u062a\u06cc \u0628\u0627\u0632\u0646\u0645\u0627\u06cc\u06cc \u0645\u06cc\u200c\u06a9\u0646\u062f\n",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Extract,_transform,_load"},"ETL"),"\n\u06af\u0641\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f\n\u06a9\u0647 \u0645\u062e\u0641\u0641 \u0639\u0628\u0627\u0631\u062a Extract, Transform & Load \u0627\u0633\u062a."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u062a\u0639\u0631\u06cc\u0641"},"\u062a\u0639\u0631\u06cc\u0641"),(0,l.kt)("h3",{id:"data-extraction-\u0627\u0633\u062a\u062e\u0631\u0627\u062c-\u062f\u0627\u062f\u0647"},"Data Extraction (\u0627\u0633\u062a\u062e\u0631\u0627\u062c \u062f\u0627\u062f\u0647)"),(0,l.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u062f\u0627\u062f\u06c0 \u062e\u0627\u0645 \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u0645\u062e\u062a\u0644\u0641 \u0628\u0647 \u06cc\u06a9 \u0641\u0636\u0627\u06cc \u0645\u06cc\u0627\u0646\u06cc \u0645\u0646\u062a\u0642\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f.\n\u0645\u0646\u0627\u0628\u0639 \u0645\u0628\u062f\u0623 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0646\u062f \u062f\u0627\u0631\u0627\u06cc \u062f\u0627\u062f\u06c0 \u0633\u0627\u062e\u062a\u0627\u0631\u06cc\u0627\u0641\u062a\u0647 \u06cc\u0627 \u063a\u06cc\u0631\u0633\u0627\u062e\u062a\u0627\u0631\u06cc\u0627\u0641\u062a\u0647 \u0628\u0627\u0634\u0646\u062f.\n\u0627\u0632 \u0627\u0646\u0648\u0627\u0639 \u0645\u0646\u0627\u0628\u0639 \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0628\u0647 \u0645\u0648\u0627\u0631\u062f \u0632\u06cc\u0631 \u0627\u0634\u0627\u0631\u0647 \u06a9\u0631\u062f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SQL or NoSql Servers"),(0,l.kt)("li",{parentName:"ul"},"Flat Files"),(0,l.kt)("li",{parentName:"ul"},"Emails"),(0,l.kt)("li",{parentName:"ul"},"Web Pages")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"data-transformation-\u062a\u0628\u062f\u06cc\u0644-\u062f\u0627\u062f\u0647"},"Data Transformation (\u062a\u0628\u062f\u06cc\u0644 \u062f\u0627\u062f\u0647)"),(0,l.kt)("p",null,"\u062f\u0627\u062f\u06c0 \u062e\u0627\u0645 \u062f\u0631 \u0641\u0636\u0627\u06cc \u0645\u06cc\u0627\u0646\u06cc \u0645\u0648\u0631\u062f \u067e\u0631\u062f\u0627\u0632\u0634 \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u06af\u06cc\u0631\u062f \u062a\u0627 \u0628\u0647 \u0633\u0627\u062e\u062a\u0627\u0631\u06cc \u06a9\u0647 \u0628\u0631\u0627\u06cc \u062a\u062d\u0644\u06cc\u0644 \u062f\u0627\u062f\u0647 \u0645\u0648\u0631\u062f \u0646\u06cc\u0627\u0632 \u0627\u0633\u062a \u062a\u0628\u062f\u06cc\u0644 \u0634\u0648\u062f.\n\u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0634\u0627\u0645\u0644 \u0645\u0648\u0627\u0631\u062f \u0632\u06cc\u0631 \u0628\u0627\u0634\u062f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0641\u06cc\u0644\u062a\u0631 \u06a9\u0631\u062f\u0646"),(0,l.kt)("li",{parentName:"ul"},"\u062a\u0645\u06cc\u0632\u0633\u0627\u0632\u06cc"),(0,l.kt)("li",{parentName:"ul"},"\u062d\u0630\u0641 \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u062a\u06a9\u0631\u0627\u0631\u06cc"),(0,l.kt)("li",{parentName:"ul"},"\u0627\u0639\u062a\u0628\u0627\u0631\u0633\u0646\u062c\u06cc"),(0,l.kt)("li",{parentName:"ul"},"\u0627\u0646\u062c\u0627\u0645 \u0645\u062d\u0627\u0633\u0628\u0627\u062a\u060c \u062a\u0631\u062c\u0645\u0647 \u0648 \u06cc\u0627 \u062e\u0644\u0627\u0635\u0647\u200c\u0633\u0627\u0632\u06cc \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0634\u0627\u0645\u0644 \u0645\u0648\u0627\u0631\u062f \u0632\u06cc\u0631 \u0628\u0627\u0634\u062f:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u062a\u063a\u06cc\u06cc\u0631 \u0646\u0627\u0645 \u0633\u062a\u0648\u0646\u200c\u0647\u0627"),(0,l.kt)("li",{parentName:"ul"},"\u062a\u0628\u062f\u06cc\u0644 \u0648\u0627\u062d\u062f\u200c\u0647\u0627\u06cc \u067e\u0648\u0644"),(0,l.kt)("li",{parentName:"ul"},"\u062a\u0628\u062f\u06cc\u0644 \u0648\u0627\u062d\u062f\u0647\u0627\u06cc \u0627\u0646\u062f\u0627\u0632\u0647\u200c\u06af\u06cc\u0631\u06cc"),(0,l.kt)("li",{parentName:"ul"},"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0633\u062a\u0648\u0646\u200c\u0647\u0627\u06cc \u0645\u062a\u0646\u06cc"))),(0,l.kt)("li",{parentName:"ul"},"\u062d\u0630\u0641 \u06cc\u0627 \u0631\u0645\u0632\u0646\u06af\u0627\u0631\u06cc \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u062d\u0633\u0627\u0633 \u06cc\u0627 \u0645\u062d\u0631\u0645\u0627\u0646\u0647"),(0,l.kt)("li",{parentName:"ul"},"\u062a\u0628\u062f\u06cc\u0644 \u0633\u0627\u062e\u062a\u0627\u0631 \u062f\u0627\u062f\u0647 \u0628\u0647 \u0633\u0627\u062e\u062a\u0627\u0631 \u0645\u0642\u0635\u062f\u061b \u0628\u0647\u200c\u0639\u0646\u0648\u0627\u0646 \u0645\u062b\u0627\u0644 \u062a\u0628\u062f\u06cc\u0644 JSON \u0628\u0647 \u06cc\u06a9 \u06cc\u0627 \u0686\u0646\u062f \u062c\u062f\u0648\u0644 \u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0622\u0646\u200c\u0647\u0627 \u0631\u0627 Join \u06a9\u0631\u062f.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"data-loading-\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc-\u062f\u0627\u062f\u0647"},"Data Loading (\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u062f\u0627\u062f\u0647)"),(0,l.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u062f\u0627\u062f\u06c0 \u062a\u0628\u062f\u06cc\u0644\u200c\u0634\u062f\u0647 \u062f\u0631 \u0645\u0631\u062d\u0644\u06c0 \u0642\u0628\u0644\u060c \u0627\u0632 \u0641\u0636\u0627\u06cc \u0645\u06cc\u0627\u0646\u06cc \u0628\u0647 \u0627\u0646\u0628\u0627\u0631 \u062f\u0627\u062f\u06c0 \u0645\u0642\u0635\u062f \u0645\u0646\u062a\u0642\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f.\n\u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u0645\u0639\u0645\u0648\u0644\u0627\u064b \u063a\u06cc\u0631 \u0627\u0632 \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u0627\u0648\u0644\u06cc\u0647\u060c \u0628\u0647\u200c\u0635\u0648\u0631\u062a \u0645\u062a\u0646\u0627\u0648\u0628 \u0646\u06cc\u0632 \u0627\u062c\u0631\u0627 \u0645\u06cc\u200c\u0634\u0648\u062f \u062a\u0627 \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u062c\u062f\u06cc\u062f \u0628\u0647 \u0627\u0646\u0628\u0627\u0631 \u062f\u0627\u062f\u0647 \u0627\u0636\u0627\u0641\u0647 \u0634\u0648\u0646\u062f.\n\u062f\u0631 \u0627\u06a9\u062b\u0631 \u0645\u0648\u0627\u0631\u062f \u0627\u06cc\u0646 \u0641\u0631\u0622\u06cc\u0646\u062f \u0628\u0647\u200c\u0635\u0648\u0631\u062a \u062e\u0648\u062f\u06a9\u0627\u0631 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,l.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0627\u06cc\u0646 \u0645\u0641\u0647\u0648\u0645 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.ibm.com/cloud/learn/etl"},"https://www.ibm.com/cloud/learn/etl")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.guru99.com/etl-extract-load-process.html"},"https://www.guru99.com/etl-extract-load-process.html"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc"},"\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc"),(0,l.kt)("h3",{id:"\u062b\u0628\u062a\u0646\u0627\u0645"},"\u062b\u0628\u062a\u200c\u0646\u0627\u0645"),(0,l.kt)("p",null,"\u062f\u0631 \u0648\u0628\u200c\u0633\u0627\u06cc\u062a\n",(0,l.kt)("a",{parentName:"p",href:"https://iam.us.cloud.talend.com/idp/trial-registration"},"Talend"),"\n\u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u06a9\u0646\u06cc\u062f.\n\u0627\u0632 \u0634\u0645\u0627 \u0627\u0637\u0644\u0627\u0639\u0627\u062a\u06cc \u0645\u0627\u0646\u0646\u062f \u0627\u06cc\u0645\u06cc\u0644 \u06a9\u0627\u0631\u06cc\u060c \u0634\u0645\u0627\u0631\u0647 \u062a\u0644\u0641\u0646\u060c \u0646\u0627\u0645 \u0634\u0631\u06a9\u062a\u060c \u0639\u0646\u0648\u0627\u0646 \u0634\u063a\u0644\u06cc \u0648 ... \u062e\u0648\u0627\u0633\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f\n\u06a9\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0627\u06cc\u0645\u06cc\u0644 \u0634\u062e\u0635\u06cc \u062e\u0648\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f \u0648 \u0633\u0627\u06cc\u0631 \u0641\u06cc\u0644\u062f\u0647\u0627 \u0631\u0627 \u0628\u0627 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0646\u0627\u062f\u0631\u0633\u062a \u067e\u0631 \u06a9\u0646\u06cc\u062f."),(0,l.kt)("p",null,"\u067e\u0633 \u0627\u0632 \u062b\u0628\u062a\u200c\u0646\u0627\u0645\u060c \u0644\u06cc\u0646\u06a9\u06cc \u0628\u0647 \u0627\u06cc\u0645\u06cc\u0644 \u0634\u0645\u0627 \u0641\u0631\u0633\u062a\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u06a9\u0647 \u0627\u0632 \u0637\u0631\u06cc\u0642 \u0622\u0646 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0648\u0627\u0631\u062f \u0627\u06a9\u0627\u0646\u062a \u062e\u0648\u062f \u0634\u0648\u06cc\u062f\n\u0648 \u062a\u0627 14 \u0631\u0648\u0632 \u0627\u0632 \u0633\u0627\u06cc\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f."),(0,l.kt)("p",null,"\u067e\u0633 \u0627\u0632 \u0648\u0631\u0648\u062f \u0628\u0647 \u0627\u06a9\u0627\u0646\u062a\u060c \u0628\u0631 \u0631\u0648\u06cc \u062f\u06a9\u0645\u06c0 Discover \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f \u062a\u0627\n",(0,l.kt)("a",{parentName:"p",href:"https://portal.us.cloud.talend.com/"},"\u0644\u06cc\u0633\u062a \u062a\u0645\u0627\u0645 \u0627\u0628\u0632\u0627\u0631\u0647\u0627"),"\n\u0631\u0627 \u0628\u0628\u06cc\u0646\u06cc\u062f."),(0,l.kt)("admonition",{title:"\u0646\u06a9\u062a\u0647",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u06c0 \u06a9\u0627\u0645\u0644 \u0627\u0632 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a \u0633\u0627\u06cc\u062a \u0627\u062d\u062a\u06cc\u0627\u062c \u0628\u0647 \u0642\u0646\u062f\u0634\u06a9\u0646 \u062e\u0648\u0627\u0647\u06cc\u062f \u062f\u0627\u0634\u062a.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u0648\u0631\u0648\u062f-\u062f\u0627\u062f\u0647"},"\u0648\u0631\u0648\u062f \u062f\u0627\u062f\u0647"),(0,l.kt)("p",null,"\u062f\u0631 \u0628\u062e\u0634\n",(0,l.kt)("a",{parentName:"p",href:"https://tdc.us.cloud.talend.com/datasets"},"Data Inventory"),"\n\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06af\u0632\u06cc\u0646\u06c0 Drop a file or browse\u060c \u062f\u06cc\u062a\u0627\u0633\u062a \u0632\u06cc\u0631 \u0631\u0627 \u0622\u067e\u0644\u0648\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f.\n\u0627\u06cc\u0646 \u062f\u06cc\u062a\u0627\u0633\u062a \u0634\u0627\u0645\u0644 \u0622\u0645\u0627\u0631 \u0645\u0628\u062a\u0644\u0627\u06cc\u0627\u0646 \u0648 \u062a\u0644\u0641\u0627\u062a \u06a9\u0631\u0648\u0646\u0627 \u0628\u0647 \u062a\u0641\u06a9\u06cc\u06a9 \u06a9\u0634\u0648\u0631\u0647\u0627\u0633\u062a \u06a9\u0647 \u0631\u0648\u0632\u0627\u0646\u0647 \u0628\u0647\u200c\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u0645\u06cc\u200c\u0634\u0648\u062f.\n\u0627\u0632 \u0622\u0646\u062c\u0627\u06cc\u06cc \u06a9\u0647 \u062d\u062c\u0645 \u0627\u06cc\u0646 \u062f\u06cc\u062a\u0627\u0633\u062a \u0628\u0633\u06cc\u0627\u0631 \u0632\u06cc\u0627\u062f \u0627\u0633\u062a\u060c \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u062f\u06cc\u062a\u0627\u0633\u062a \u06a9\u0645\u200c\u062d\u062c\u0645 \u0646\u06cc\u0632 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/owid/covid-19-data/blob/master/public/data/owid-covid-data.csv"},"\u062f\u0631\u06cc\u0627\u0641\u062a \u062f\u06cc\u062a\u0627\u0633\u062a \u0627\u0635\u0644\u06cc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{target:"_blank",href:n(8526).Z},"\u062f\u0631\u06cc\u0627\u0641\u062a \u062f\u06cc\u062a\u0627\u0633\u062a \u06a9\u0645\u200c\u062d\u062c\u0645"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Data Inventory",src:n(2123).Z,width:"1920",height:"882"})),(0,l.kt)("p",null,"\u067e\u0633 \u0627\u0632 \u0622\u0646\u06a9\u0647 \u0641\u0631\u0622\u06cc\u0646\u062f \u0622\u067e\u0644\u0648\u062f \u062a\u0645\u0627\u0645 \u0634\u062f\u060c \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u062f\u06cc\u062a\u0627\u0633\u062a \u0631\u0627 \u062f\u0631 \u0644\u06cc\u0633\u062a \u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0646\u06cc\u062f \u0648 \u0628\u0627 \u06a9\u0644\u06cc\u06a9 \u0628\u0631 \u0631\u0648\u06cc \u0622\u0646 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062a\u06a9\u0645\u06cc\u0644\u06cc \u0631\u0627 \u0628\u0628\u06cc\u0646\u062f:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Covid dataset info",src:n(1338).Z,width:"1920",height:"877"})),(0,l.kt)("p",null,"\u0631\u0648\u06cc \u0622\u06cc\u06a9\u0646 \u0644\u0648\u0644\u06c0 \u0622\u0632\u0645\u0627\u06cc\u0634 \u06a9\u0647 \u062f\u0631 \u0633\u0645\u062a \u0686\u067e \u0642\u0631\u0627\u0631 \u062f\u0627\u0631\u062f \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f \u062a\u0627 \u0628\u062a\u0648\u0627\u0646\u06cc\u062f \u0646\u0645\u0648\u0646\u0647\u200c\u0627\u06cc \u0627\u0632 \u062f\u0627\u062f\u06c0 \u0622\u067e\u0644\u0648\u062f \u0634\u062f\u0647 \u0631\u0627 \u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0646\u06cc\u062f:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Covid dataset head",src:n(6006).Z,width:"1920",height:"881"})),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u0633\u0627\u062e\u062a-pipeline"},"\u0633\u0627\u062e\u062a Pipeline"),(0,l.kt)("p",null,"\u0648\u0627\u0631\u062f \u0628\u062e\u0634\n",(0,l.kt)("a",{parentName:"p",href:"https://tpd.us.cloud.talend.com/pipelines"},"Pipeline Designer"),"\n\u0634\u0648\u06cc\u062f \u0648 \u0628\u0631 \u0631\u0648\u06cc \u062f\u06a9\u0645\u06c0 Add pipeline \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f \u062a\u0627 \u06cc\u06a9 Pipeline \u062c\u062f\u06cc\u062f \u0633\u0627\u062e\u062a\u0647 \u0634\u0648\u062f."),(0,l.kt)("h3",{id:"\u062a\u0639\u06cc\u06cc\u0646-\u0645\u0628\u062f\u0623"},"\u062a\u0639\u06cc\u06cc\u0646 \u0645\u0628\u062f\u0623"),(0,l.kt)("p",null,"\u0631\u0648\u06cc ADD SOURCE \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f \u0648 \u062f\u06cc\u062a\u0627\u0633\u062a \u0622\u067e\u0644\u0648\u062f\u0634\u062f\u0647 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u0646\u0645\u0627\u06cc\u06cc\u062f:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Pipeline Designer - Add Source",src:n(8394).Z,width:"1920",height:"878"}),"\n",(0,l.kt)("img",{alt:"Pipeline Designer - Sample Data",src:n(5998).Z,width:"1920",height:"876"})),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u062a\u0639\u06cc\u06cc\u0646-\u0645\u0642\u0635\u062f"},"\u062a\u0639\u06cc\u06cc\u0646 \u0645\u0642\u0635\u062f"),(0,l.kt)("p",null,"\u0631\u0648\u06cc ADD DESTINATION \u0648 \u0633\u067e\u0633 Add dataset \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f\n\u0633\u067e\u0633 \u06cc\u06a9 \u0646\u0627\u0645 \u062f\u0644\u062e\u0648\u0627\u0647 \u0628\u0631\u0627\u06cc \u0622\u0646 \u062f\u0631 \u0646\u0638\u0631 \u0628\u06af\u06cc\u0631\u06cc\u062f.\n\u0642\u0633\u0645\u062a Connection \u0631\u0627 \u0628\u0631 \u0631\u0648\u06cc Local Connection \u0628\u06af\u0630\u0627\u0631\u06cc\u062f\u061b\n\u062f\u0631 \u0627\u06cc\u0646 \u0635\u0648\u0631\u062a \u067e\u0633 \u0627\u0632 \u0627\u062c\u0631\u0627\u06cc Pipeline\u060c \u062f\u0627\u062f\u0647 \u0628\u0627 \u0646\u0627\u0645 \u062a\u0639\u06cc\u06cc\u0646 \u0634\u062f\u06c0 \u0634\u0645\u0627 \u062f\u0631 Data Inventory \u0642\u0627\u0628\u0644 \u0645\u0634\u0627\u0647\u062f\u0647 \u062e\u0648\u0627\u0647\u062f \u0628\u0648\u062f."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u067e\u0631\u062f\u0627\u0632\u0634\u06af\u0631"},"\u067e\u0631\u062f\u0627\u0632\u0634\u06af\u0631"),(0,l.kt)("p",null,"\u0628\u0627 \u06a9\u0644\u06cc\u06a9 \u0628\u0631 \u0631\u0648\u06cc \u062f\u06a9\u0645\u06c0 + \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f Processor \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f.\n\u0647\u0631\u06a9\u062f\u0627\u0645 \u0627\u0632 Processor\u0647\u0627 \u06cc\u06a9 \u0639\u0645\u0644\u06cc\u0627\u062a \u0631\u0627 \u0628\u0631 \u0631\u0648\u06cc \u062f\u0627\u062f\u0647 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u200c\u062f\u0647\u0646\u062f."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Processors",src:n(1197).Z,width:"659",height:"671"})),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u0641\u06cc\u0644\u062a\u0631-\u062f\u0627\u062f\u0647\u0647\u0627"},"\u0641\u06cc\u0644\u062a\u0631 \u062f\u0627\u062f\u0647\u200c\u0647\u0627"),(0,l.kt)("p",null,"\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 Filter Processor \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u06a9\u0634\u0648\u0631 \u0627\u06cc\u0631\u0627\u0646 \u0631\u0627 \u0641\u06cc\u0644\u062a\u0631 \u0646\u0645\u0627\u06cc\u06cc\u062f."),(0,l.kt)("admonition",{title:"\u0647\u0634\u062f\u0627\u0631",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u062f\u0642\u062a \u06a9\u0646\u06cc\u062f \u06a9\u0647 \u067e\u0646\u0644 Preview \u0635\u0631\u0641\u0627\u064b 100 \u0631\u06a9\u0648\u0631\u062f \u0627\u0648\u0644 \u0631\u0627 \u0646\u0645\u0627\u06cc\u0634 \u0645\u06cc\u200c\u062f\u0647\u062f. \u0628\u0646\u0627\u0628\u0631\u0627\u06cc\u0646 \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u067e\u0633 \u0627\u0632 \u0641\u06cc\u0644\u062a\u0631 \u0628\u0647 \u0646\u0638\u0631 \u0628\u0631\u0633\u062f \u0647\u06cc\u0686 \u062f\u0627\u062f\u0647\u200c\u0627\u06cc \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u0627\u062c\u0631\u0627"},"\u0627\u062c\u0631\u0627"),(0,l.kt)("p",null,"\u0627\u0632 \u0628\u0627\u0644\u0627\u06cc \u0635\u0641\u062d\u0647 \u0628\u0631 \u0631\u0648\u06cc Select a run profile \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f \u0648 \u062f\u0631 \u0645\u0646\u0648\u06cc \u0628\u0627\u0632 \u0634\u062f\u0647 \u06af\u0632\u06cc\u0646\u06c0 Standard \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u0646\u0645\u0627\u06cc\u06cc\u062f.\n\u067e\u0633 \u0627\u0632 \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u062f\u06a9\u0645\u06c0 \u0627\u062c\u0631\u0627 \u062f\u0631 \u062f\u0633\u062a\u0631\u0633 \u0634\u0645\u0627 \u062e\u0648\u0627\u0647\u062f \u0628\u0648\u062f:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(3580).Z,width:"1920",height:"877"})),(0,l.kt)("p",null,"Pipeline\n\u0631\u0627 \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u062f \u0648 \u067e\u0633 \u0627\u0632 \u0627\u062a\u0645\u0627\u0645\u060c \u0646\u062a\u06cc\u062c\u06c0 \u0622\u0646 \u0631\u0627 \u062f\u0631 Data Inventory \u0645\u0634\u0627\u0647\u062f\u0647 \u0646\u0645\u0627\u06cc\u06cc\u062f."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u062a\u0645\u06cc\u0632\u0633\u0627\u0632\u06cc"},"\u062a\u0645\u06cc\u0632\u0633\u0627\u0632\u06cc"),(0,l.kt)("p",null,"\u0645\u0631\u0627\u062d\u0644 \u0632\u06cc\u0631 \u0631\u0627 \u0628\u0631\u0627\u06cc \u062a\u0645\u06cc\u0632\u0633\u0627\u0632\u06cc \u062f\u0627\u062f\u0647 \u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u06cc\u062f:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u0642\u0633\u0645\u062a \u0627\u0639\u0634\u0627\u0631\u06cc \u0633\u062a\u0648\u0646\u200c\u0647\u0627\u06cc ",(0,l.kt)("inlineCode",{parentName:"p"},"new_cases")," \u0648",(0,l.kt)("inlineCode",{parentName:"p"},"new_deaths")," \u0631\u0627 \u062d\u0630\u0641 \u0646\u0645\u0627\u06cc\u06cc\u062f.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u0645\u0642\u0627\u062f\u06cc\u0631 \u062e\u0627\u0644\u06cc (NaN \u06cc\u0627 null) \u0631\u0627 \u062f\u0631 \u0633\u062a\u0648\u0646 ",(0,l.kt)("inlineCode",{parentName:"p"},".new_vaccinations_smoothed")," \u0628\u0627 \u0645\u0642\u062f\u0627\u0631 \u0635\u0641\u0631 \u062c\u0627\u06cc\u06af\u0632\u06cc\u0646 \u0646\u0645\u0627\u06cc\u06cc\u062f.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u0646\u0648\u0639 \u0633\u062a\u0648\u0646 ",(0,l.kt)("inlineCode",{parentName:"p"},"date")," \u0631\u0627 \u0627\u0632 ",(0,l.kt)("inlineCode",{parentName:"p"},"String")," \u0628\u0647 ",(0,l.kt)("inlineCode",{parentName:"p"},"Date")," \u062a\u0628\u062f\u06cc\u0644 \u06a9\u0646\u06cc\u062f."))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"aggregation"},"Aggregation"),(0,l.kt)("p",null,"\u062c\u0645\u0639 \u062a\u0639\u062f\u0627\u062f \u0645\u0648\u0627\u0631\u062f \u0627\u0628\u062a\u0644\u0627 \u062f\u0631 \u0647\u0631 \u0645\u0627\u0647 \u0631\u0627 \u0645\u062d\u0627\u0633\u0628\u0647 \u06a9\u0646\u06cc\u062f \u0648 \u062f\u0631 \u0633\u062a\u0648\u0646\u06cc \u0628\u0647 \u0646\u0627\u0645 ",(0,l.kt)("inlineCode",{parentName:"p"},"total_month_cases")," \u0628\u0631\u06cc\u0632\u06cc\u062f."),(0,l.kt)("admonition",{title:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc\u06cc",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0644\u0627\u0632\u0645 \u0628\u0627\u0634\u062f \u0627\u0628\u062a\u062f\u0627 \u0631\u0648\u06cc \u0633\u062a\u0648\u0646 \u062a\u0627\u0631\u06cc\u062e \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a\u06cc \u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u06cc\u062f.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"join"},"Join"),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:n(1905).Z},"\u062f\u06cc\u062a\u0627\u0633\u062a \u0645\u0648\u0642\u0639\u06cc\u062a \u062c\u063a\u0631\u0627\u0641\u06cc\u0627\u06cc\u06cc \u06a9\u0634\u0648\u0631\u0647\u0627"),"\n\u0631\u0627 \u0622\u067e\u0644\u0648\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f \u0633\u067e\u0633 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 Join\u060c \u0633\u062a\u0648\u0646\u200c\u0647\u0627\u06cc \u0637\u0648\u0644 \u0648 \u0639\u0631\u0636 \u062c\u063a\u0631\u0627\u0641\u06cc\u0627\u06cc\u06cc \u0631\u0627 \u0628\u0647 \u062f\u06cc\u062a\u0627\u0633\u062a \u0622\u0645\u0627\u0631 \u0645\u0628\u062a\u0644\u0627\u06cc\u0627\u0646 \u0627\u0636\u0627\u0641\u0647 \u0646\u0645\u0627\u06cc\u06cc\u062f."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u062f\u0631\u06cc\u0627\u0641\u062a-\u062e\u0631\u0648\u062c\u06cc"},"\u062f\u0631\u06cc\u0627\u0641\u062a \u062e\u0631\u0648\u062c\u06cc"),(0,l.kt)("p",null,"\u062f\u0631 \u0646\u0647\u0627\u06cc\u062a\u060c \u062d\u0627\u0635\u0644 \u06a9\u0627\u0631 \u062e\u0648\u062f \u0631\u0627 \u062f\u0631 \u0642\u0627\u0644\u0628 \u06cc\u06a9 \u0641\u0627\u06cc\u0644 CSV \u062e\u0631\u0648\u062c\u06cc \u0628\u06af\u06cc\u0631\u06cc\u062f \u0648 \u062f\u0627\u0646\u0644\u0648\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f \u0648 \u0646\u062a\u0627\u06cc\u062c \u0631\u0627 \u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0646\u06cc\u062f."),(0,l.kt)("p",null,"\u0634\u0645\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u062f\u0631 \u067e\u0631\u0648\u0698\u06c0 \u062e\u0648\u062f \u0639\u0644\u0627\u0648\u0647 \u0628\u0631 \u062e\u0631\u0648\u062c\u06cc \u0645\u062a\u0646\u06cc\u060c \u062e\u0631\u0648\u062c\u06cc \u0646\u0645\u0648\u062f\u0627\u0631\u06cc \u0631\u0627 \u0646\u06cc\u0632 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647\u200c\u0647\u0627\u06cc\u06cc \u0645\u0627\u0646\u0646\u062f\n",(0,l.kt)("a",{parentName:"p",href:"https://www.highcharts.com/"},"Highcharts"),"\n\u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f.\n\u0627\u06cc\u0646 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647 \u0628\u0647\u200c\u0635\u0648\u0631\u062a \u0631\u0633\u0645\u06cc \u0627\u0632 Angular \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0645\u06cc\u200c\u06a9\u0646\u062f.\n\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062a\u06a9\u0645\u06cc\u0644\u06cc \u0631\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u062f\u0631\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/highcharts/highcharts-angular"},"\u0635\u0641\u062d\u06c0 GitHub"),"\n\u0622\u0646 \u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0646\u06cc\u062f."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u0627\u0634\u062a\u0631\u0627\u06a9\u06af\u0630\u0627\u0631\u06cc"},"\u0627\u0634\u062a\u0631\u0627\u06a9\u200c\u06af\u0630\u0627\u0631\u06cc"),(0,l.kt)("p",null,"\u062a\u0648\u0635\u06cc\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645 Pipeline \u062e\u0648\u062f \u0631\u0627 \u0628\u0627 \u0627\u0639\u0636\u0627\u06cc \u062a\u06cc\u0645 \u0628\u0647 \u0627\u0634\u062a\u0631\u0627\u06a9 \u0628\u06af\u0630\u0627\u0631\u06cc\u062f\u060c Pipeline \u0622\u0646\u200c\u0647\u0627 \u0631\u0627 \u0646\u06cc\u0632 \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646\u06cc\u062f \u0648 \u0631\u0648\u0634\u200c\u0647\u0627\u06cc \u0645\u0648\u0631\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0631\u0627 \u0628\u0628\u06cc\u0646\u06cc\u062f.\n\u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0622\u06cc\u06a9\u0646 Export the pipeline \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f."))}c.isMDXComponent=!0},1905:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/countries-coordinates-c88272aae5ff10788d109909ab472872.csv"},8526:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/owid-covid-data.reduced-b3934706f6a6acb7e55acf3489f85400.csv"},6006:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/covid-dataset-head-23f7777bc717ae7d239495d44a8d7107.png"},1338:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/covid-dataset-info-21fe194caab61a0c890cb00d27ad0087.png"},2123:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/data-inventory-6da923f41ddeb354126fd42d0bc4cd60.png"},8394:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pipeline-designer-add-source-c640befe58cfa879fce6855bf9139d1b.png"},1197:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pipeline-designer-processors-7158d39f2ff13fefc864db206521dada.png"},3580:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pipeline-designer-run-7ddb8f7fd8f8299f85e644c46f8707bf.png"},5998:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pipeline-designer-sample-data-f6cba5e65630e0b98fe54080c81d6a20.png"}}]);