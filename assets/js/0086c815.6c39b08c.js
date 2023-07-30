"use strict";(self.webpackChunkcodestar_documents=self.webpackChunkcodestar_documents||[]).push([[2961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),g=i,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={title:"CI/CD",description:"Just push it!"},o=void 0,c={unversionedId:"software-engineering/phase05-ci-cd",id:"software-engineering/phase05-ci-cd",title:"CI/CD",description:"Just push it!",source:"@site/docs/software-engineering/phase05-ci-cd.md",sourceDirName:"software-engineering",slug:"/software-engineering/phase05-ci-cd",permalink:"/Documents/docs/software-engineering/phase05-ci-cd",draft:!1,editUrl:"https://github.com/Mohaymen-Academy/Documents/tree/main/docs/software-engineering/phase05-ci-cd.md",tags:[],version:"current",frontMatter:{title:"CI/CD",description:"Just push it!"},sidebar:"tutorialSidebar",previous:{title:"Unit Test",permalink:"/Documents/docs/software-engineering/phase04-software-testing"},next:{title:"SQL",permalink:"/Documents/docs/software-engineering/phase06-sql"}},s={},l=[{value:"\u0645\u0642\u062f\u0645\u0647",id:"\u0645\u0642\u062f\u0645\u0647",level:2},{value:"CI/CD \u0686\u06cc\u0633\u062a \u0648 \u0686\u0631\u0627 \u0627\u0647\u0645\u06cc\u062a \u062f\u0627\u0631\u062f",id:"cicd-\u0686\u06cc\u0633\u062a-\u0648-\u0686\u0631\u0627-\u0627\u0647\u0645\u06cc\u062a-\u062f\u0627\u0631\u062f",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"badges",id:"badges",level:2},{value:"\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc",id:"\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc",level:2},{value:"\u0639\u0627\u0642\u0644\u0627\u0646 \u0631\u0627 \u06cc\u06a9 \u0627\u0634\u0627\u0631\u062a \u0628\u0633 \u0628\u0648\u062f \u2026",id:"\u0639\u0627\u0642\u0644\u0627\u0646-\u0631\u0627-\u06cc\u06a9-\u0627\u0634\u0627\u0631\u062a-\u0628\u0633-\u0628\u0648\u062f-",level:2}],p={toc:l};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cicd",src:n(8102).Z,width:"2560",height:"1829"})),(0,i.kt)("h2",{id:"\u0645\u0642\u062f\u0645\u0647"},"\u0645\u0642\u062f\u0645\u0647"),(0,i.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0641\u0627\u0632 \u0628\u0627 \u0645\u0641\u0647\u0648\u0645 CI/CD\n\u0648 \u0627\u0647\u0645\u06cc\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0622\u0646 \u0622\u0634\u0646\u0627 \u0645\u06cc\u200c\u0634\u0648\u06cc\u062f \u0648 \u0633\u067e\u0633 \u067e\u0631\u0648\u0698\u0647\u0654 \u062e\u0648\u062f \u0631\u0627 \u0628\u0647 CI/CD\n\u0645\u062c\u0647\u0632 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f."),(0,i.kt)("h2",{id:"cicd-\u0686\u06cc\u0633\u062a-\u0648-\u0686\u0631\u0627-\u0627\u0647\u0645\u06cc\u062a-\u062f\u0627\u0631\u062f"},"CI/CD \u0686\u06cc\u0633\u062a \u0648 \u0686\u0631\u0627 \u0627\u0647\u0645\u06cc\u062a \u062f\u0627\u0631\u062f"),(0,i.kt)("p",null,"\u0628\u0631\u0627\u06cc \u062f\u0631\u06a9 \u0645\u0641\u0647\u0648\u0645 CI/CD\n\u0648 \u0627\u0647\u0645\u06cc\u062a \u0622\u0646 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.redhat.com/en/topics/devops/what-is-ci-cd"},"What is CI/CD?(redhat)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/driven-by-code/the-journey-to-ci-cd-b1872927c36b"},"The Journey to CI/CD"))),(0,i.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("p",null,"\u06cc\u06a9\u06cc \u0627\u0632 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06cc CI/CD \u0645\u0639\u0631\u0648\u0641\u060c GitHub Actions \u0627\u0633\u062a \u06a9\u0647 \u0628\u0647 \u06a9\u0645\u06a9 \u0622\u0646\u060c \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u0645 \u06cc\u06a9 Pipeline \u0634\u0627\u0645\u0644 \u0639\u0645\u0644\u06cc\u0627\u062a build\u060c \u0627\u062c\u0631\u0627\u06cc unit test\u0647\u0627\u060c \u0627\u0646\u062a\u0634\u0627\u0631 package \u0648 \u062f\u06cc\u06af\u0631 \u0639\u0645\u0644\u06cc\u0627\u062a\u06cc \u06a9\u0647 \u062f\u0631 \u062f\u0633\u062a\u0647\u0654 CI/CD \u0645\u06cc\u200c\u06af\u0646\u062c\u062f \u0631\u0627 \u0628\u0647 Repository \u062e\u0648\u062f \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u0645.\n\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0648 \u0633\u0627\u062e\u062a \u06cc\u06a9 \u0646\u0645\u0648\u0646\u0647 pipeline\u060c ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/quickstart"},"\u0627\u06cc\u0646 \u0645\u0633\u062a\u0646\u062f")," \u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f."),(0,i.kt)("p",null,"\u062d\u0627\u0644 \u06a9\u0647 \u0628\u0627 \u0645\u0641\u0647\u0648\u0645 \u06a9\u0644\u06cc CI/CD \u0648 \u0647\u0645\u0686\u0646\u06cc\u0646 github actions \u0622\u0634\u0646\u0627 \u0634\u062f\u06cc\u062f\u060c \u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u06cc\u0645 \u06cc\u06a9 pipeline \u0628\u0631\u0627\u06cc \u0631\u06cc\u067e\u0627\u0632\u06cc\u062a\u0648\u0631\u06cc \u0645\u0648\u062a\u0648\u0631 \u062c\u0633\u062a\u200c\u0648\u062c\u0648 \u0628\u0633\u0627\u0632\u06cc\u0645. \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u0627\u0631\u060c \u062f\u0631 \u0632\u0628\u0627\u0646 \u062c\u0627\u0648\u0627\u060c ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-java-with-maven"},"\u0627\u06cc\u0646 \u0645\u0633\u062a\u0646\u062f")," \u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f."),(0,i.kt)("h2",{id:"badges"},"badges"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"badges",src:n(3259).Z,width:"1366",height:"768"})),(0,i.kt)("p",null,"\u0627\u062d\u062a\u0645\u0627\u0644\u0627 \u062a\u0627 \u0628\u0647 \u062d\u0627\u0644 \u062f\u0631 \u06af\u06cc\u062a\u200c\u0647\u0627\u0628 \u0628\u0627 \u0631\u06cc\u067e\u0648\u200c\u0647\u0627\u06cc\u06cc \u0645\u0648\u0627\u062c\u0647 \u0634\u062f\u0647\u200c\u0627\u06cc\u062f \u06a9\u0647 \u062f\u0627\u0631\u0627\u06cc \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062c\u0627\u0644\u0628\u06cc \u062f\u0631 \u0627\u0628\u062a\u062f\u0627\u06cc \u0641\u0627\u06cc\u0644 readme \u062e\u0648\u062f \u0628\u0648\u062f\u0647\u200c\u0627\u0646\u062f. \u0628\u0647 \u0627\u06cc\u0646 \u0628\u0627\u06a9\u0633\u200c\u0647\u0627\u06cc \u06a9\u0648\u0686\u06a9\u060c \u0628\u0647 \u0627\u0635\u0637\u0644\u0627\u062d badge \u06af\u0641\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.\n\u0634\u0645\u0627 \u0646\u06cc\u0632 \u0628\u0627 \u06a9\u0645\u06a9 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge"},"\u0627\u06cc\u0646 \u0644\u06cc\u0646\u06a9"),"\u060c \u0628\u0647 \u067e\u0631\u0648\u0698\u0647 \u062e\u0648\u062f \u06cc\u06a9 badge \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f. "),(0,i.kt)("h2",{id:"\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc"},"\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc"),(0,i.kt)("p",null,"\u0647\u0645\u0686\u0646\u06cc\u0646 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u0647 \u067e\u0631\u0648\u0698\u0647 \u062e\u0648\u062f\u060c code coverage badge \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f \u062a\u0627 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u06a9\u0627\u0648\u0631\u062c \u062a\u0633\u062a\u200c\u0647\u0627\u06cc \u067e\u0631\u0648\u0698\u0647 \u0631\u0627 \u0646\u06cc\u0632 \u062f\u0631 readme \u062e\u0648\u062f \u0646\u0645\u0627\u06cc\u0634 \u062f\u0647\u06cc\u062f."),(0,i.kt)("h2",{id:"\u0639\u0627\u0642\u0644\u0627\u0646-\u0631\u0627-\u06cc\u06a9-\u0627\u0634\u0627\u0631\u062a-\u0628\u0633-\u0628\u0648\u062f-"},"\u0639\u0627\u0642\u0644\u0627\u0646 \u0631\u0627 \u06cc\u06a9 \u0627\u0634\u0627\u0631\u062a \u0628\u0633 \u0628\u0648\u062f \u2026"),(0,i.kt)("p",null,"\u0633\u0631\u0646\u062e \u0632\u06cc\u0631 \u0631\u0627 \u0628\u06af\u06cc\u0631\u06cc\u062f \u0648 \u0627\u06af\u0631 \u0645\u0627\u06cc\u0644 \u0628\u0648\u062f\u06cc\u062f\u060c \u0622\u0646 \u0631\u0627 \u0628\u0647 pipeline \u062e\u0648\u062f \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f:"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"SonarQube")),(0,i.kt)("p",null,"\u0647\u0645\u0686\u0646\u06cc\u0646 \u0628\u0639\u062f\u200c\u0647\u0627 \u0628\u0631\u0627\u06cc deploy \u067e\u0631\u0648\u0698\u0647 \u062e\u0648\u062f \u0646\u06cc\u0632 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a github actions \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f. \u0645\u062b\u0644\u0627 \u062f\u0631 \u0641\u0627\u0632 \u067e\u0631\u0648\u0698\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u0631\u0627 \u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u06cc\u062f \u0648 \u0647\u0631 \u0628\u0627\u0631\u060c \u062e\u0631\u0648\u062c\u06cc \u067e\u0631\u0648\u0698\u0647 \u0631\u0627 \u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0646\u06cc\u062f."))}u.isMDXComponent=!0},3259:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/phase05-badges-682f1513a5c110c6d4e5aa6206651ac3.png"},8102:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/phase05-ci-cd-c8ac643bee9e7a18ab54bc984820cc00.jpg"}}]);