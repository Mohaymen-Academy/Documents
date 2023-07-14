"use strict";(self.webpackChunkcodestar_documents=self.webpackChunkcodestar_documents||[]).push([[7061],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(t),m=a,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return t?r.createElement(y,o(o({ref:n},p),{},{components:t})):r.createElement(y,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<s;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7081:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var r=t(7462),a=(t(7294),t(3905));const s={title:"Styling",description:"react styling"},o=void 0,l={unversionedId:"frontend/react/react-styling",id:"frontend/react/react-styling",title:"Styling",description:"react styling",source:"@site/docs/frontend/07-react/04-react-styling.md",sourceDirName:"frontend/07-react",slug:"/frontend/react/react-styling",permalink:"/Documents/docs/frontend/react/react-styling",draft:!1,editUrl:"https://github.com/Mohaymen-Academy/Documents/tree/main/docs/frontend/07-react/04-react-styling.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Styling",description:"react styling"},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/Documents/docs/frontend/react/react-events"},next:{title:"tailwindcss",permalink:"/Documents/docs/frontend/react/react-tailwind"}},c={},i=[{value:"\u0627\u0633\u062a\u0627\u06cc\u0644 \u062f\u0647\u06cc \u062f\u0631 \u0631\u06cc\u06a9\u062a",id:"\u0627\u0633\u062a\u0627\u06cc\u0644-\u062f\u0647\u06cc-\u062f\u0631-\u0631\u06cc\u06a9\u062a",level:2},{value:"\u0627\u0633\u062a\u0627\u06cc\u0644 \u062e\u0637\u06cc",id:"\u0627\u0633\u062a\u0627\u06cc\u0644-\u062e\u0637\u06cc",level:3},{value:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0641\u0627\u06cc\u0644 css",id:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647-\u0627\u0632-\u0641\u0627\u06cc\u0644-css",level:3},{value:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 sass",id:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647-\u0627\u0632-sass",level:3},{value:"\u067e\u0631\u0648\u0698\u0647",id:"\u067e\u0631\u0648\u0698\u0647",level:2}],p={toc:i};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u0627\u0633\u062a\u0627\u06cc\u0644-\u062f\u0647\u06cc-\u062f\u0631-\u0631\u06cc\u06a9\u062a"},"\u0627\u0633\u062a\u0627\u06cc\u0644 \u062f\u0647\u06cc \u062f\u0631 \u0631\u06cc\u06a9\u062a"),(0,a.kt)("p",null,"\u0631\u0627\u0647 \u0647\u0627\u06cc \u0632\u06cc\u0627\u062f \u0628\u0631\u0627\u06cc \u0627\u062a\u0627\u06cc\u0644 \u062f\u0647\u06cc \u0628\u0647 \u062a\u06af \u0647\u0627 \u062f\u0631 \u0631\u06cc\u06a9\u062a \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u0647 \u06a9\u0647 \u0645\u0627 \u0686\u0646\u062f\u062a\u0627 \u0627\u0632 \u0627\u0648\u0646 \u0647\u0627 \u0631\u0648 \u0645\u0648\u0631\u062f \u0628\u0631\u0631\u0633\u06cc \u0642\u0631\u0627\u0631 \u0645\u06cc\u062f\u06cc\u0645"),(0,a.kt)("h3",{id:"\u0627\u0633\u062a\u0627\u06cc\u0644-\u062e\u0637\u06cc"},"\u0627\u0633\u062a\u0627\u06cc\u0644 \u062e\u0637\u06cc"),(0,a.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0631\u0648\u0634 \u0627\u0633\u062a\u0627\u06cc\u0644 \u0647\u0627 \u0631\u0648 \u062f\u0631\u0648\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u062a\u062a \u0627\u06cc\u062c\u0627\u062f \u0645\u06cc\u06a9\u0646\u0645 \u0648 \u0631\u0648\u06cc \u062a\u06af \u0647\u0627 \u0627\u0639\u0645\u0627\u0644 \u0645\u06cc\u06a9\u0646\u06cc\u0645 "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'/* src/components/Header.js */\n\nconst Header = () => {\n  return (\n    <>\n      <h1 style={{color: "red", paddingTop: "2rem"}}>Hello Style!</h1>\n    </>\n  );\n}\n')),(0,a.kt)("p",null,"\u0645\u06cc\u062a\u0648\u0646\u06cc\u0645 \u062a\u0645\u0627\u0645\u06cc \u0627\u0633\u062a\u0627\u06cc\u0644 \u0647\u0627 \u0631\u0627 \u062f\u0631\u0648\u0646 \u06cc\u06a9 object \u0628\u0646\u0648\u06cc\u0633\u06cc\u0645 \u0648 \u0628\u0647 \u062a\u06af \u0628\u062f\u06cc\u0645 "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'/* src/components/Header.js */\n\nconst Header = () => {\n  const style = {\n      color: "red",\n      paddingTop: "2rem"\n  }  \n    \n  return (\n    <>\n      <h1 style={style}>Hello Style!</h1>\n    </>\n  );\n}\n')),(0,a.kt)("h3",{id:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647-\u0627\u0632-\u0641\u0627\u06cc\u0644-css"},"\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0641\u0627\u06cc\u0644 css"),(0,a.kt)("p",null,"\u0631\u0648\u0634 \u062f\u06cc\u06af\u0631 \u0627\u06cc\u0646 \u0647\u0633\u062a \u06a9\u0647 \u062f\u0631\u0648\u0646 \u0641\u0627\u06cc\u0644 css \u0627\u0633\u062a\u0627\u06cc\u0644 \u0647\u0627 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u06cc\u0645 \u0648 \u0641\u0627\u06cc\u0644 \u0631\u0627 \u0628\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0627\u06cc\u0645\u067e\u0648\u0631\u062a \u06a9\u0646\u06cc\u0645"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* src/components/Header.css */\nh1{\n    color: red;\n    padding-top: 2rem;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/* src/components/Header.js */\n\nimport './Header.css'\n\nfunction Header() {\n    return ( \n        <h1> my Header</h1>\n     );\n}\n\nexport default Header;\n")),(0,a.kt)("p",null,"\u062f\u0631 \u0645\u062b\u0627\u0644 \u0628\u0627\u0644\u0627 \u062f\u06cc\u062f\u06cc\u0645 \u06a9\u0647 \u062f\u0631\u0648\u0646 \u0641\u0627\u06cc\u0644 \u062c\u062f\u0627\u06af\u0627\u0646\u0647 \u0627\u0633\u062a\u0627\u06cc\u0644 \u0647\u0627 \u0631\u0627 \u0646\u0648\u0634\u062a\u06cc\u0645 \u0648 \u0631\u0648\u06cc \u062a\u06af h1 \u0627\u0639\u0645\u0627\u0644 \u0634\u062f \u062d\u0627\u0644\u0627 \u0627\u06af\u0631 \u06a9\u0644\u0627\u0633\u06cc \u062f\u0631\u0648\u0646 \u0641\u0627\u06cc\u0644 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645 \u0686\u0647 \u0627\u062a\u0641\u0627\u0642\u06cc \u0631\u062e \u062e\u0648\u0627\u0647\u062f \u062f\u0627\u062f \u061f"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u0627\u06cc\u0646 \u0645\u0648\u0631\u062f \u0631\u0627 \u062d\u062a\u0645\u0627 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646\u06cc\u062f \u0648 \u062e\u0631\u0648\u062c\u06cc \u0631\u0627 \u0628\u0628\u06cc\u0646\u06cc\u062f\n\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u062f\u0642\u06cc\u0642\u0627 \u062f\u0631 \u06cc\u06a9 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u062f\u06cc\u06af\u0631 \u06cc\u06a9 \u06a9\u0644\u0627\u0633 \u062f\u06cc\u06af\u0631 \u0628\u0627 \u0647\u0645\u06cc\u0646 \u0646\u0627\u0645 \u0648\u062c\u0648\u062f \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f \u0645\u0631\u0648\u06af\u0631 \u06a9\u062f\u0627\u0645 \u06a9\u0644\u0627\u0633 \u0631\u0627 \u062f\u0631 \u0646\u0638\u0631 \u0645\u06cc\u06af\u06cc\u0631\u062f \u061f")),(0,a.kt)("p",null,"\u0631\u06cc\u06a9\u062a \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u0627\u06cc\u0646 \u0645\u0634\u06a9\u0644 \u0631\u0627 \u0628\u0631\u0637\u0631\u0641 \u06a9\u0646\u062f \u0627\u0632 css module \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u06a9\u0646\u062f\n\u0628\u0647 \u0645\u062b\u0627\u0644 \u0632\u06cc\u0631 \u062f\u0642\u062a \u06a9\u0646\u06cc\u062f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* src/components/Header.module.css */\n.bigblue {\n  color: DodgerBlue;\n  padding: 40px;\n  text-align: center;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/* src/components/Header.js */\n\nimport './Header.module.css'\n\nfunction Header() {\n    return (\n        <h1 className={styles.bigblue}> my Header</h1>\n    );\n}\n\nexport default Header;\n")),(0,a.kt)("p",null,"\u0628\u0639\u062f \u0627\u0632 \u0627\u062c\u0631\u0627 \u0628\u0631\u0646\u0627\u0645\u0647 \u0627\u0632 inspect \u06a9\u0644\u0627\u0633 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0628\u0647 h1 \u0631\u0627 \u0646\u06af\u0627\u0647 \u06a9\u0646\u06cc\u062f."),(0,a.kt)("p",null,"\u0645\u06cc\u0628\u06cc\u0646\u06cc\u062f \u06a9\u0647 \u0627\u0633\u0645 \u06a9\u0644\u0627\u0633 \u0634\u0645\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u06a9\u0631\u062f\u0647 \u0648 \u062f\u0644\u06cc\u0644 \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u0627\u06cc\u0646 \u0627\u0633\u062a \u06a9\u0647 \u0627\u0633\u062a\u0627\u06cc\u0644 \u0647\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0628\u0635\u0648\u0631\u062a \u06a9\u067e\u0633\u0648\u0644\u0647 \u0634\u062f\u0647 \u0641\u0642\u0637 \u0631\u0648\u06cc \u0647\u0645\u0627\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u062a\u0627\u062b\u06cc\u0631 \u06af\u0630\u0627\u0631 \u0628\u0627\u0634\u062f."),(0,a.kt)("admonition",{title:"\u0646\u06a9\u062a\u0647",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u0628\u0647 \u0627\u06cc\u0646 \u0645\u0648\u0636\u0648\u0639 \u062f\u0642\u062a \u06a9\u0646\u06cc\u062f \u06a9\u0647 \u062d\u062a\u0645\u0627 \u0627\u0633\u0645 \u0641\u0627\u06cc\u0644 css \u0628\u0627\u06cc\u062f \u0628\u0627 .module.css \u0628\u0647 \u067e\u0627\u06cc\u0627\u0646 \u0628\u0631\u0633\u062f \u062a\u0627 \u0627\u06cc\u0646 \u0641\u0631\u0627\u06cc\u0646\u062f \u0627\u0639\u0645\u0627\u0644 \u0634\u0648\u062f.")),(0,a.kt)("h3",{id:"\u0627\u0633\u062a\u0641\u0627\u062f\u0647-\u0627\u0632-sass"},"\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 sass"),(0,a.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 sass \u062f\u0631 \u0631\u06cc\u06a9\u062a \u0628\u0627\u06cc\u062f \u067e\u0631\u062f\u0627\u0632\u0634 \u06af\u0631 \u0627\u0646 \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646\u06cc\u0645 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u0631\u0627 \u0627\u062c\u0631\u0627 \u0645\u06cc\u06a9\u0646\u06cc\u0645"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i sass\n")),(0,a.kt)("p",null,"\u0628\u0639\u062f \u0627\u0632 \u0646\u0635\u0628 sass \u062f\u06cc\u06af\u0631 \u0646\u06cc\u0627\u0632\u06cc \u0628\u0647 \u062a\u063a\u06cc\u06cc\u0631 \u062e\u0627\u0635\u06cc \u062f\u0631 \u06a9\u0627\u0646\u0641\u06cc\u06af \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u06cc\u0633\u062a \u0648 \u0628\u0627 \u0633\u0627\u062e\u062a \u0641\u0627\u06cc\u0644 scss \u0645\u06cc\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0627\u0646 \u0628\u0647\u0631\u0645\u0646\u062f \u0628\u0634\u06cc\u062f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"/* src/components/Header.scss */\n\n$myColor: red;\n\nh1 {\n  color: $myColor;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/* src/components/Header.js */\n\nimport './Headers.scss'\n\nfunction Header() {\n    return (\n        <h1> my Header</h1>\n    );\n}\n\nexport default Header;\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u067e\u0631\u0648\u0698\u0647"},"\u067e\u0631\u0648\u0698\u0647"),(0,a.kt)("p",null,"\u062a\u0645\u0627\u0645\u06cc \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0647\u0627\u06cc \u06a9\u0647 \u062a\u0627 \u06a9\u0646\u0648\u0646 \u0633\u0627\u062e\u062a\u06cc\u062f \u0631\u0627 \u0627\u0633\u062a\u0627\u06cc\u0644 \u062f\u0647\u06cc \u06a9\u0646\u06cc\u062f"))}d.isMDXComponent=!0}}]);