"use strict";(self.webpackChunkcodestar_documents=self.webpackChunkcodestar_documents||[]).push([[4390],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,k=m["".concat(p,".").concat(u)]||m[u]||s[u]||o;return t?r.createElement(k,i(i({ref:n},d),{},{components:t})):r.createElement(k,i({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={title:"Containerized Applications",description:"How to containerized applications with docker"},i=void 0,l={unversionedId:"frontend/containerized-application",id:"frontend/containerized-application",title:"Containerized Applications",description:"How to containerized applications with docker",source:"@site/docs/frontend/11-containerized-application.md",sourceDirName:"frontend",slug:"/frontend/containerized-application",permalink:"/Documents/docs/frontend/containerized-application",draft:!1,editUrl:"https://github.com/Mohaymen-Academy/Documents/tree/main/docs/frontend/11-containerized-application.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Containerized Applications",description:"How to containerized applications with docker"},sidebar:"tutorialSidebar",previous:{title:"Unit Testing",permalink:"/Documents/docs/frontend/unit-testing"},next:{title:"Intoduction To PWA",permalink:"/Documents/docs/frontend/PWAs/introduction-to-PWAs"}},p={},c=[{value:"Whats Docker?",id:"whats-docker",level:2},{value:"\u062a\u0639\u0631\u06cc\u0641",id:"\u062a\u0639\u0631\u06cc\u0641",level:2},{value:"\u0645\u062d\u06cc\u0637 Development",id:"\u0645\u062d\u06cc\u0637-development",level:2},{value:"\u0633\u0627\u062e\u062a\u0627\u0631 \u067e\u0648\u0634\u0647\u200c\u0628\u0646\u062f\u06cc \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646",id:"\u0633\u0627\u062e\u062a\u0627\u0631-\u067e\u0648\u0634\u0647\u0628\u0646\u062f\u06cc-\u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646",level:3},{value:"\u0627\u06cc\u062c\u0627\u062f Dockerfile.dev \u0628\u0631\u0627\u06cc react app",id:"\u0627\u06cc\u062c\u0627\u062f-dockerfiledev-\u0628\u0631\u0627\u06cc-react-app",level:3},{value:"\u0627\u06cc\u062c\u0627\u062f \u0641\u0627\u06cc\u0644 default.conf \u0628\u0631\u0627\u06cc nginx",id:"\u0627\u06cc\u062c\u0627\u062f-\u0641\u0627\u06cc\u0644-defaultconf-\u0628\u0631\u0627\u06cc-nginx",level:3},{value:"\u0627\u06cc\u062c\u0627\u062f Dockerfile.dev \u0628\u0631\u0627\u06cc nginx",id:"\u0627\u06cc\u062c\u0627\u062f-dockerfiledev-\u0628\u0631\u0627\u06cc-nginx",level:3},{value:"\u0627\u06cc\u062c\u0627\u062f \u0641\u0627\u06cc\u0644 docker-compose.yml",id:"\u0627\u06cc\u062c\u0627\u062f-\u0641\u0627\u06cc\u0644-docker-composeyml",level:3},{value:"\u0633\u0627\u062e\u062a \u0648 \u0627\u062c\u0631\u0627",id:"\u0633\u0627\u062e\u062a-\u0648-\u0627\u062c\u0631\u0627",level:3},{value:"\u0645\u062d\u06cc\u0637 Production:",id:"\u0645\u062d\u06cc\u0637-production",level:2},{value:"\u0633\u0627\u062e\u062a \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 React:",id:"\u0633\u0627\u062e\u062a-\u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646-react",level:3},{value:"\u06a9\u0627\u0646\u0641\u06cc\u06af Nginx:",id:"\u06a9\u0627\u0646\u0641\u06cc\u06af-nginx",level:3},{value:"\u0627\u06cc\u062c\u0627\u062f Dockerfile",id:"\u0627\u06cc\u062c\u0627\u062f-dockerfile",level:3},{value:"\u0627\u06cc\u062c\u0627\u062f \u0641\u0627\u06cc\u0644 docker-compose.yml:",id:"\u0627\u06cc\u062c\u0627\u062f-\u0641\u0627\u06cc\u0644-docker-composeyml-1",level:3},{value:"\u0633\u0627\u062e\u062a \u0648 \u0627\u062c\u0631\u0627\u06cc \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631",id:"\u0633\u0627\u062e\u062a-\u0648-\u0627\u062c\u0631\u0627\u06cc-\u06a9\u0627\u0646\u062a\u06cc\u0646\u0631",level:3}],d={toc:c};function s(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"docker",src:t(1388).Z,width:"900",height:"667"})),(0,a.kt)("h1",{id:"\u0645\u0642\u062f\u0645\u0647"},"\u0645\u0642\u062f\u0645\u0647"),(0,a.kt)("p",null,"\u0632\u0645\u0627\u0646\u06cc \u06a9\u0647 \u0628\u0627 \u062a\u06cc\u0645 \u0647\u0627\u06cc \u0628\u0632\u0631\u06af \u0634\u0631\u0648\u0639 \u0628\u0647 \u06a9\u0627\u0631 \u0645\u06cc\u06a9\u0646\u06cc\u0645 \u0632\u06cc\u0631 \u0633\u0627\u062e\u062a \u0627\u0646\u0647\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"docker compose "),"- ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/swarm/"},"docker swarm")," - ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"kubernetes")," \u067e\u06cc\u0627\u062f\u0647 \u0633\u0627\u0632\u06cc \u0634\u062f\u0647 \u0627\u0633\u062a.\n\u062f\u0631 \u0646\u062a\u06cc\u062c\u0647 \u0645\u0627 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06cc\u0633 \u0641\u0631\u0627\u0646\u062a \u0628\u0627\u06cc\u062f \u0628\u062a\u0648\u0627\u0646\u06cc\u0645 \u0641\u0627\u06cc\u0644 \u0647\u0627\u06cc \u067e\u0631\u0648\u0698\u0647 \u062e\u0648\u062f \u0631\u0627 \u062f\u0631 \u062f\u0631\u0648\u0646 \u0627\u06cc\u0646 \u0646\u0648\u0639 \u0632\u06cc\u0631 \u0633\u0627\u062e\u062a \u0645\u062a\u0646\u0634\u0631 \u06a9\u0646\u06cc\u0645.\n\u0627\u0632 \u0627\u06cc\u0646 \u062c\u0647\u062a \u0645\u0627 \u0628\u0627\u06cc\u062f \u0628\u062a\u0648\u0627\u0646\u06cc\u0645 \u062f\u0627\u06a9\u0631 \u0641\u0627\u06cc\u0644 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u062e\u0648\u062f \u0631\u0627 \u0646\u0648\u0634\u062a\u0647 \u0648 \u0627\u0646 \u0631\u0627 \u062a\u062d\u0648\u06cc\u0644 \u0645\u062f\u06cc\u0631 devops \u0628\u062f\u0647\u06cc\u0645 \u062a\u0627 \u0627\u0646 \u0631\u0627 \u062f\u0631 \u062f\u0631\u0648\u0646 \u0641\u0631\u0627\u06cc\u0646\u062f CI/CD \u0642\u0631\u0627\u0631 \u062f\u0627\u062f\u0647 \u0648 \u0645\u06a9\u0627\u0646\u06cc\u0632\u0645 \u0627\u062a\u0648\u0645\u0627\u062a\u06cc\u06a9 \u0627\u0646\u062a\u0634\u0627\u0631 \u0646\u0633\u062e\u0647 \u0631\u0627 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"whats-docker"},"Whats Docker?"),(0,a.kt)("p",null,"\u062f\u0627\u06a9\u0631 \u06cc\u06a9 \u0646\u0648\u0639\u06cc \u0632\u06cc\u0631 \u0633\u0627\u062e\u062a \u0627\u0633\u062a \u06a9\u0647 \u0627\u06cc\u0646 \u0627\u0645\u06a9\u0627\u0646 \u0631\u0627 \u0628\u0647 \u0645\u0627 \u0645\u06cc\u062f\u0647\u062f \u062f\u0631 \u06cc\u06a9 \u0641\u0636\u0627\u06cc \u0627\u06cc\u0632\u0648\u0644\u0647 \u0628\u0631 \u0628\u0633\u062a\u0631 \u0633\u06cc\u0633\u062a\u0645 \u0639\u0627\u0645\u0644 \u06cc\u06a9 \u0645\u0627\u0634\u06cc\u0646 \u0645\u062c\u0627\u0632\u06cc \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0645 \u062a\u0627 \u0628\u062a\u0648\u0627\u0646\u06cc\u0645 \u0628\u0631\u0646\u0627\u0645\u0647 \u0647\u0627\u06cc \u062e\u0648\u062f \u0631\u0627 ( \u0628\u0647 \u0635\u0648\u0631\u062a \u0627\u06cc\u0632\u0648\u0644\u0647 ) \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u0645\n\u0641\u0631\u0627\u06cc\u0646\u062f \u0633\u0627\u062e\u062a \u0627\u06cc\u0646 \u0641\u0636\u0627\u06cc \u0627\u06cc\u0632\u0648\u0644\u0647 \u0648 \u0646\u0635\u0628 \u0628\u0631\u0646\u0627\u0645\u0647 \u0647\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0645\u06cc\u0628\u0627\u0634\u062f:\n\u06f1.\u0633\u0627\u062e\u062a \u062f\u0627\u06a9\u0631 \u0641\u0627\u06cc\u0644\n\u06f2.\u0633\u0627\u062e\u062a image \u0627\u0632 \u062f\u0627\u06a9\u0631 \u0641\u0627\u06cc\u0644\n3.\u0627\u062c\u0631\u0627 image \u0648 \u062a\u0628\u062f\u06cc\u0644 \u0627\u0646 \u0628\u0647 container"),(0,a.kt)("p",null,"\u062f\u0631 \u0646\u0647\u0627\u06cc\u062a container \u0645\u0627 \u0647\u0645\u0627\u0646 \u0645\u0627\u0634\u06cc\u0646 \u0645\u062c\u0627\u0632\u06cc \u0627\u0633\u062a \u06a9\u0647 \u062a\u0648\u0633\u0637 \u062f\u0627\u06a9\u0631 \u0641\u0627\u06cc\u0644 \u0645\u0627 \u06a9\u0627\u0646\u0641\u06cc\u06af \u0648 \u062f\u0631 \u062f\u0631\u0648\u0646 Ram \u0627\u062c\u0631\u0627 \u0634\u062f\u0647 \u0648 \u0627\u0645\u0627\u062f\u0647 \u0633\u0631\u0648\u06cc\u0633 \u062f\u0647\u06cc \u0645\u06cc\u0628\u0627\u0634\u062f."),(0,a.kt)("h2",{id:"\u062a\u0639\u0631\u06cc\u0641"},"\u062a\u0639\u0631\u06cc\u0641"),(0,a.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0627\u06cc\u0646 \u0645\u0641\u0647\u0648\u0645 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-started/overview/"},"Docker - What Docker?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/swlh/dockerizing-your-reactjs-application-c59109e97861"},"Medium - How to Dockerized react app"))),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"\u062f\u0627\u06a9\u0631\u0627\u06cc\u0632-\u06a9\u0631\u062f\u0646-\u06cc\u06a9-\u067e\u0631\u0648\u0698\u0647-react-\u0628\u0647-\u0647\u0645\u0631\u0627\u0647-nginx"},"\u062f\u0627\u06a9\u0631\u0627\u06cc\u0632 \u06a9\u0631\u062f\u0646 \u06cc\u06a9 \u067e\u0631\u0648\u0698\u0647 React \u0628\u0647 \u0647\u0645\u0631\u0627\u0647 Nginx"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dokerNginx",src:t(7660).Z,width:"2240",height:"1260"})),(0,a.kt)("h2",{id:"\u0645\u062d\u06cc\u0637-development"},"\u0645\u062d\u06cc\u0637 Development"),(0,a.kt)("p",null,"\u0628\u0631\u0627\u06cc dockerize \u06a9\u0631\u062f\u0646 \u06cc\u06a9 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 React \u0628\u0647 \u0647\u0645\u0631\u0627\u0647 Nginx \u062f\u0631 \u0645\u062d\u06cc\u0637 Development\u060c \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0645\u0631\u0627\u062d\u0644 \u0632\u06cc\u0631 \u0631\u0627 \u062f\u0646\u0628\u0627\u0644 \u06a9\u0631\u062f:"),(0,a.kt)("h3",{id:"\u0633\u0627\u062e\u062a\u0627\u0631-\u067e\u0648\u0634\u0647\u0628\u0646\u062f\u06cc-\u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646"},"\u0633\u0627\u062e\u062a\u0627\u0631 \u067e\u0648\u0634\u0647\u200c\u0628\u0646\u062f\u06cc \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-structure"},"Project/\n\u251c\u2500 Client/\n\u2502  \u251c\u2500 (...your react app files and folders)/\n\u2502  \u251c\u2500 Dockerfile.dev\n\u251c\u2500 nginx/\n\u2502  \u251c\u2500 default.conf\n\u2502  \u251c\u2500 Dcokerfile.dev\n\u251c\u2500 docker-compose.yml\n")),(0,a.kt)("h3",{id:"\u0627\u06cc\u062c\u0627\u062f-dockerfiledev-\u0628\u0631\u0627\u06cc-react-app"},"\u0627\u06cc\u062c\u0627\u062f Dockerfile.dev \u0628\u0631\u0627\u06cc react app"),(0,a.kt)("p",null,"\u062f\u0631 \u067e\u0648\u0634\u0647 Client \u0641\u0627\u06cc\u0644\u200c\u0647\u0627\u06cc \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 react \u0642\u0631\u0627\u0631 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a. \u062f\u0631 \u0627\u06cc\u0646 \u067e\u0648\u0634\u0647 \u0641\u0627\u06cc\u0644 Dockerfile.dev \u0631\u0627 \u0627\u06cc\u062c\u0627\u062f \u06a9\u0631\u062f\u0647 \u0648 \u062f\u0633\u062a\u0648\u0631\u0627\u062a \u0632\u06cc\u0631 \u0631\u0627 \u062f\u0631 \u0622\u0646 \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u062f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'FROM node:18-alpine\nWORKDIR /app\nCOPY ./package.json ./\nRUN npm i\nCOPY . . \nCMD ["npm", "run", "dev"]\n')),(0,a.kt)("h3",{id:"\u0627\u06cc\u062c\u0627\u062f-\u0641\u0627\u06cc\u0644-defaultconf-\u0628\u0631\u0627\u06cc-nginx"},"\u0627\u06cc\u062c\u0627\u062f \u0641\u0627\u06cc\u0644 default.conf \u0628\u0631\u0627\u06cc nginx"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"upstream client{\n  server client:5173; #this defined in docker-compose file\n}\nserver{\n  listen 80;\n  location / {\n    proxy_pass http://client;\n    root /usr/share/nginx/html;\n    index index.html index.htm;\n    try_files $uri $uri/ /index.html =404;\n  }\n}\n")),(0,a.kt)("h3",{id:"\u0627\u06cc\u062c\u0627\u062f-dockerfiledev-\u0628\u0631\u0627\u06cc-nginx"},"\u0627\u06cc\u062c\u0627\u062f Dockerfile.dev \u0628\u0631\u0627\u06cc nginx"),(0,a.kt)("p",null,"\u062f\u0631 \u067e\u0648\u0634\u0647 nginx \u0641\u0627\u06cc\u0644 Dockerfile.dev \u0631\u0627 \u0627\u06cc\u062c\u0627\u062f \u06a9\u0631\u062f\u0647 \u0648 \u062f\u0633\u062a\u0648\u0631\u0627\u062a \u0632\u06cc\u0631 \u0631\u0627 \u062f\u0631 \u0622\u0646 \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u062f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"FROM nginx\nCOPY ./default.conf /etc/nginx/conf.d/default.conf\n")),(0,a.kt)("h3",{id:"\u0627\u06cc\u062c\u0627\u062f-\u0641\u0627\u06cc\u0644-docker-composeyml"},"\u0627\u06cc\u062c\u0627\u062f \u0641\u0627\u06cc\u0644 docker-compose.yml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.8"\nservices:\n  client: #this name will be used in nginx config as domain name\n    stdin_open: true\n    build:\n      context: .\n      dockerfile: Dockerfile.dev\n    volumes:\n      - /app/node_modules\n      - ./client:/app\n  nginx:\n     depends_on:\n       - client\n     restart: always #if nginx down will always back up\n     build:\n       context: ./nginx\n       dockerfile: Dockerfile.dev\n     ports:\n       - 80:80\n')),(0,a.kt)("p",null,"\u062a\u0648\u062c\u0647 \u06a9\u0646\u06cc\u062f \u062f\u0631 \u0641\u0627\u06cc\u0644 \u062f\u0627\u06a9\u0631 \u06a9\u0648\u067e\u0648\u0632 indent \u0647\u0627 \u0645\u0647\u0645 \u0647\u0633\u062a\u0646\u062f.\n\u062f\u0631 \u0627\u06cc\u0646 \u0641\u0627\u06cc\u0644 \u0628\u0647 \u062f\u0627\u06a9\u0631 \u06a9\u0627\u0645\u067e\u0648\u0632 \u062f\u0633\u062a\u0648\u0631 \u0645\u06cc\u200c\u062f\u0647\u06cc\u0645 \u0633\u0631\u0648\u06cc\u0633\u200c\u0647\u0627\u06cc client \u0648 nginx \u0631\u0627 \u0633\u0627\u062e\u062a\u0647 \u0648 \u067e\u0648\u0631\u062a \u06f8\u06f0 \u0633\u06cc\u0633\u062a\u0645 \u0631\u0627 \u0628\u0647 \u067e\u0648\u0631\u062a \u06f8\u06f0 nginx \u0645\u067e \u06a9\u0646\u062f.",(0,a.kt)("br",{parentName:"p"}),"\n","\u0628\u0647 \u062f\u0644\u06cc\u0644 \u062a\u063a\u06cc\u06cc\u0631 \u0646\u0627\u0645 dockerfile \u0628\u0647 Dockerfile.dev \u0628\u0627\u06cc\u062f \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u062f\u062a\u0633\u0648\u0631 build \u0645\u062d\u0644 \u0648 \u0646\u0627\u0645 \u062f\u0642\u06cc\u0642 \u0622\u0646 \u0631\u0627 \u0628\u0631\u0627\u06cc \u0647\u0631 \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631 \u0645\u0634\u062e\u0635 \u0646\u0645\u0627\u06cc\u06cc\u0645.\n\u062f\u0633\u062a\u0648\u0631 ",(0,a.kt)("inlineCode",{parentName:"p"},"voulume")," \u0628\u0631\u0627\u06cc bind \u06a9\u0631\u062f\u0646 \u067e\u0648\u0634\u0647 \u067e\u0631\u0648\u0698\u0647 \u0628\u0647 \u067e\u0648\u0634\u0647 \u0645\u062a\u0646\u0627\u0638\u0631 \u0622\u0646 \u062f\u0631 \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f. \u0628\u0647 \u0639\u0628\u0627\u0631\u062a\u06cc \u062f\u0633\u062a\u0648\u0631 \u200d\u200d",(0,a.kt)("inlineCode",{parentName:"p"},"client:/app/. -")," \u0628\u0647 \u0645\u0639\u0646\u0627\u06cc \u0622\u0646 \u0627\u0633\u062a \u06a9\u0647 \u062f\u0631 \u0635\u0648\u0631\u062a \u0627\u06cc\u062c\u0627\u062f \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u062f\u0631 \u0633\u06cc\u0633\u062a\u0645 \u0648 \u0641\u0648\u0644\u062f\u0631 client \u062a\u0645\u0627\u0645\u06cc \u0645\u0648\u0627\u0631\u062f \u062f\u0631 \u06a9\u0627\u0646\u062a\u06cc\u0631 \u0648 \u062f\u0631 \u0641\u0648\u0644\u062f\u0631 app \u0646\u06cc\u0631 \u0627\u0639\u0645\u0627\u0644 \u0634\u0648\u062f.",(0,a.kt)("br",{parentName:"p"}),"\n","\u062f\u0633\u062a\u0648\u0631 \u200d\u200d",(0,a.kt)("inlineCode",{parentName:"p"},"app/node_modules/ -")," \u067e\u0648\u0634\u0647 ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u0631\u0627 \u062f\u0631 \u06a9\u0627\u0646\u062a\u06cc\u0631 \u0645\u0648\u0631\u062f \u0627\u0633\u062a\u062b\u0646\u0627 \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u062f\u0647\u062f \u0648 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0622\u0646 \u062f\u0631 \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631 \u0627\u0639\u0645\u0627\u0644 \u0646\u062e\u0648\u0627\u0647\u062f \u0634\u062f.  "),(0,a.kt)("h3",{id:"\u0633\u0627\u062e\u062a-\u0648-\u0627\u062c\u0631\u0627"},"\u0633\u0627\u062e\u062a \u0648 \u0627\u062c\u0631\u0627"),(0,a.kt)("p",null,"\u062f\u0631 \u0645\u062d\u0644 \u067e\u0631\u0648\u0698\u0647 \u062f\u0633\u062a\u0648\u0631 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose up --build")," \u0631\u0627 \u062f\u0631 \u062a\u0631\u0645\u0646\u06cc\u0627\u0644 \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u062f.",(0,a.kt)("br",{parentName:"p"}),"\n","\u0628\u0631\u0627\u06cc \u063a\u06cc\u0631\u0641\u0639\u0627\u0644 \u06a9\u0631\u062f\u0646 \u06a9\u0627\u0646\u062a\u06cc\u0631 \u0627\u0632 \u062f\u0633\u062a\u0648\u0631 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose down")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645.",(0,a.kt)("br",{parentName:"p"}),"\n","\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u06a9\u0627\u0646\u062a\u06cc\u0631 \u062f\u0631 \u067e\u0633\u200c\u0632\u0645\u0646\u06cc\u0647 \u06cc\u0627 \u062d\u0627\u0644\u062a detach mode \u0627\u0632 \u062f\u0633\u062a\u0648\u0631 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose up -d")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645.  "),(0,a.kt)("h2",{id:"\u0645\u062d\u06cc\u0637-production"},"\u0645\u062d\u06cc\u0637 Production:"),(0,a.kt)("p",null,"\u0628\u0631\u0627\u06cc dockerize \u06a9\u0631\u062f\u0646 \u06cc\u06a9 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 React \u0628\u0647 \u0647\u0645\u0631\u0627\u0647 Nginx \u062f\u0631 \u0645\u062d\u06cc\u0637 Production\u060c \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0645\u0631\u0627\u062d\u0644 \u0632\u06cc\u0631 \u0631\u0627 \u062f\u0646\u0628\u0627\u0644 \u06a9\u0631\u062f\n",(0,a.kt)("img",{alt:"produnctionReact",src:t(5565).Z,width:"1400",height:"736"})),(0,a.kt)("h3",{id:"\u0633\u0627\u062e\u062a-\u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646-react"},"\u0633\u0627\u062e\u062a \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 React:"),(0,a.kt)("p",null," \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0627\u0632",(0,a.kt)("inlineCode",{parentName:"p"},"Vite")," \u06cc\u0627 \u0647\u0631 \u0627\u0628\u0632\u0627\u0631 \u062f\u06cc\u06af\u0631\u06cc \u0628\u0631\u0627\u06cc \u0633\u0627\u062e\u062a \u06cc\u06a9 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 React \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f. \u062f\u0631 \u0627\u06cc\u0646 \u0622\u0645\u0648\u0632\u0634 \u0627\u0632 \u0627\u0628\u0632\u0627\u0631 vite \u0628\u0631\u0627\u06cc \u0633\u0627\u062e\u062a \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a. \u0627\u0645\u0627 \u0627\u0628\u0632\u0627\u0631\u200c\u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0646\u06cc\u0632 \u062a\u0641\u0627\u0648\u062a \u062e\u0627\u0635\u06cc \u0646\u062f\u0627\u0631\u0646\u062f. \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u067e\u0648\u0634\u0647\u200c\u0627\u06cc \u06a9\u0647 \u0641\u0627\u06cc\u0644\u200c\u200c\u0647\u0627\u06cc build \u0634\u062f\u0647 \u062f\u0631 \u0622\u0646 \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u06af\u06cc\u0631\u0646\u062f \u062f\u0631 \u0627\u0628\u0632\u0627\u0631\u200c\u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0628\u0647 \u062c\u0627\u06cc dist \u0628\u0647 \u0646\u0627\u0645 build \u0627\u06cc\u062c\u0627\u062f \u0634\u0648\u0646\u062f. \u062f\u0631 \u0627\u06cc\u0646 \u0635\u0648\u0631\u062a \u0628\u0627\u06cc\u062f dockerfile \u0628\u0631\u0627\u0633\u0627\u0633 \u0627\u06cc\u0646 \u0646\u06a9\u062a\u0647 \u0627\u0635\u0644\u0627\u062d \u0634\u0648\u0646\u062f."),(0,a.kt)("h3",{id:"\u06a9\u0627\u0646\u0641\u06cc\u06af-nginx"},"\u06a9\u0627\u0646\u0641\u06cc\u06af Nginx:"),(0,a.kt)("p",null,"\u0646\u0645\u0648\u0646\u0647 \u06a9\u0627\u0646\u0641\u06cc\u06af nginx \u062f\u0631 \u0627\u062f\u0627\u0645\u0647 \u0627\u0631\u0627\u0626\u0647 \u06af\u0631\u062f\u06cc\u062f\u0647 \u0627\u0633\u062a:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-deafult.conf"},"server {\n  listen 80;\n  location / {\n    root /usr/share/nginx/html;\n    index index.html index.htm;\n    try_files $uri $uri/ /index.html =404;\n  }\n}\n")),(0,a.kt)("p",null,"\u062f\u0631 \u0641\u0627\u06cc\u0644 \u06a9\u0627\u0646\u0641\u06cc\u06af \u0628\u0627\u0644\u0627 \u0645\u062d\u0644 \u0642\u0631\u0627\u0631\u06af\u06cc\u0631\u06cc \u0641\u0627\u06cc\u0644\u200c\u0647\u0627\u06cc \u0627\u0633\u062a\u0627\u062a\u06cc\u06a9 \u0648\u0628\u200c\u0633\u0627\u06cc\u062a \u0645\u0634\u062e\u0635 \u0634\u062f\u0647 \u0627\u0633\u062a \u0648 \u0647\u0631 \u0631\u06cc\u06a9\u0648\u0626\u0633\u062a \u06cc\u0647 \u067e\u0648\u0631\u062a 80 \u062f\u0631 \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631 \u0632\u062f\u0647 \u0634\u0648\u062f\u060c nginx \u0628\u0647 \u0627\u06cc\u0646 \u0645\u062d\u0644 \u0647\u062f\u0627\u06cc\u062a \u062e\u0648\u0627\u0647\u062f \u0634\u062f.\n\u0641\u0627\u06cc\u0644 \u06a9\u0627\u0646\u0641\u06cc\u06af \u062f\u0631 \u067e\u0648\u0634\u0647 nginx \u0628\u0647 \u0646\u0627\u0645 default.conf \u0642\u0631\u0627\u0631 \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,a.kt)("h3",{id:"\u0627\u06cc\u062c\u0627\u062f-dockerfile"},"\u0627\u06cc\u062c\u0627\u062f Dockerfile"),(0,a.kt)("p",null,"\u062f\u0631 Dockerfile \u0645\u0631\u0627\u062d\u0644 \u0632\u06cc\u0631 \u0631\u0627 \u062f\u0646\u06cc\u0627\u0644 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645:",(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("strong",{parentName:"p"},"1- \u0627\u0632 \u0628\u06cc\u0633 \u0627\u06cc\u0645\u06cc\u062c (Base Image) node \u0628\u0631\u0627\u06cc Containerize \u06a9\u0631\u062f\u0646 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 React \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f. \u0647\u0645\u0686\u0646\u06cc\u0646 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u0627\u0646\u062a\u06cc\u0631 \u0628\u0627\u06cc\u062f \u0646\u0627\u0645 \u0645\u0634\u062e\u0635\u06cc \u062a\u0639\u0631\u06cc\u0641 \u06a9\u0646\u06cc\u0645 \u06a9\u0647 \u062f\u0631 \u0645\u0631\u0627\u062d\u0644          \u0628\u0639\u062f\u06cc \u0627\u0632 \u0627\u06cc\u0646 \u0646\u0627\u0645 \u0628\u0631\u0627\u06cc \u06a9\u067e\u06cc \u06a9\u0631\u062f\u0646 \u0641\u0627\u06cc\u0644\u200c\u200c\u0647\u0627\u06cc \u0645\u0648\u0631\u062f \u0646\u06cc\u0627\u0632 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u062e\u0648\u0627\u0647\u062f \u0634\u062f."),(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("strong",{parentName:"p"},"2- \u0648\u0631\u06a9 \u062f\u0627\u06cc\u0631\u06a9\u062a\u0648\u0631\u06cc \u0631\u0627 \u062f\u0631 \u0645\u062d\u0644 \u062f\u0644\u062e\u0648\u0627\u0647\u06cc \u0627\u0632 \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631 \u062a\u063a\u0631\u06cc\u0641 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645. \u0628\u0647\u062a\u0631 \u0627\u0633\u062a \u062f\u0631 \u0641\u0648\u0644\u062f\u0631\u06cc \u062c\u062f\u0627 \u0627\u0632 \u0641\u0627\u06cc\u0644\u200c\u200c\u0647\u0627\u06cc \u062d\u06cc\u0627\u062a\u06cc \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631 \u062a\u0639\u0631\u06cc\u0641 \u0634\u0648\u062f."),(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("strong",{parentName:"p"},"3- \u0641\u0627\u06cc\u0644\u200c\u0647\u0627\u06cc \u067e\u0631\u0648\u0698\u0647 \u0631\u0627 \u062f\u0631 \u0645\u062d\u0644 WORKDIR \u0628\u0627 \u062f\u0633\u062a\u0648\u0631 COPY \u0645\u0646\u062a\u0642\u0644 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645."),(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("strong",{parentName:"p"},"3- \u062f\u0633\u062a\u0648\u0631 ",(0,a.kt)("inlineCode",{parentName:"strong"},"npm install")," \u0628\u0631\u0627\u06cc \u0646\u0635\u0628 \u067e\u06a9\u06cc\u062c\u200c\u0647\u0627 \u0648 \u062f\u0633\u062a\u0648\u0631 ",(0,a.kt)("inlineCode",{parentName:"strong"},"npm run build")," \u0631\u0627 \u0628\u0631\u0627\u06cc \u0633\u0627\u062e\u062a \u0646\u0633\u062e\u0647 \u067e\u0631\u0648\u062f\u0627\u06a9\u0634\u0646 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u062f\u0631 \u062f\u0627\u06a9\u0631\u0641\u0627\u06cc\u0644 \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u062f\u0647\u06cc\u0645."),(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("strong",{parentName:"p"},"4- \u0627\u0632 \u06cc\u06a9 \u0628\u06cc\u0633 \u0627\u06cc\u0645\u06cc\u062c \u062c\u062f\u06cc\u062f \u0628\u0631\u0627\u06cc \u0633\u0627\u062e\u062a \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631 nginx \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u06a9\u0646\u06cc\u0645."),(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("strong",{parentName:"p"},"5- \u062f\u0631 nginx \u0628\u0647 \u0635\u0648\u0631\u062a \u067e\u06cc\u0634\u0641\u0631\u0636 \u0641\u0627\u06cc\u0644\u200c\u0647\u0627\u06cc HTML \u0627\u0633\u062a\u0627\u062a\u06cc\u06a9 \u0627\u0632 \u0622\u062f\u0631\u0633 usr/share/nginx/html/ \u062e\u0648\u0627\u0646\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u062f\u0631 \u0646\u062a\u06cc\u062c\u0647 \u0641\u0627\u06cc\u0644\u200c\u0647\u0627\u06cc \u0628\u06cc\u0644\u062f \u0634\u062f\u0647 \u0627\u0632 \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631 \u0642\u0628\u0644\u06cc \u0631\u0627 \u062f\u0631 \u0627\u06cc\u0646            \u0622\u062f\u0631\u0633 \u062f\u0631 \u06a9\u0627\u0646\u062a\u06cc\u0631 \u062c\u062f\u06cc\u062f \u0645\u0646\u062a\u0642\u0644 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645."),(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("strong",{parentName:"p"},"6- \u0628\u0631\u0627\u06cc \u06a9\u067e\u06cc \u0627\u0632 \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631 \u0642\u0628\u0644\u06cc \u0628\u0627\u06cc\u062f \u0627\u0632 \u0646\u0627\u0645 \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647 \u062f\u0631 \u0645\u0631\u062d\u0644\u0647 \u0642\u0628\u0644 \u0648 \u062f\u0633\u062a\u0648\u0631 ",(0,a.kt)("inlineCode",{parentName:"strong"},'COPY --from="previus image name "src" "dest')," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645."),(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("strong",{parentName:"p"},"7- \u062f\u0631 \u0635\u0648\u0631\u062a \u0648\u062c\u0648\u062f \u06a9\u0627\u0646\u06cc\u0641\u06cc\u06af \u0628\u0631\u0627\u06cc nginx \u0641\u0627\u06cc\u0644 \u0631\u0627 \u062f\u0631 \u0645\u062d\u0644 ",(0,a.kt)("inlineCode",{parentName:"strong"},"/etc/nginx/conf.d/")," \u062f\u0631 \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631 \u0628\u0627 \u062f\u0633\u062a\u0648\u0631 COPY \u0627\u0646\u062a\u0642\u0627\u0644 \u0645\u06cc\u200c\u062f\u0647\u06cc\u0645."),(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("strong",{parentName:"p"},"8- \u067e\u0648\u0631\u062a \u062f\u06cc\u0641\u0627\u0644\u062a nginx \u0628\u0647 \u0635\u0648\u0631\u062a \u067e\u06cc\u0634\u0641\u0631\u0636 80 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f."),"  "),(0,a.kt)("p",null,"  \u062f\u0631 \u0632\u06cc\u0631 Dockerfile \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0645\u0631\u0627\u062d\u0644 \u0628\u0627\u0644\u0627 \u0627\u0631\u0627\u0626\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"FROM node:latest as build\nWORKDIR /app\nCOPY . .\nRUN npm install\nRUN npm run build\n\nFROM nginx:alpine\nCOPY --from=build /app/dist /usr/share/nginx/html\nCOPY nginx/default.conf /etc/nginx/conf.d/default.conf\nEXPOSE 80\n")),(0,a.kt)("h3",{id:"\u0627\u06cc\u062c\u0627\u062f-\u0641\u0627\u06cc\u0644-docker-composeyml-1"},"\u0627\u06cc\u062c\u0627\u062f \u0641\u0627\u06cc\u0644 docker-compose.yml:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  nginx-react:\n  container_name: ngixreactapp\n  build:\n   context: .\n   dockerfile: Dockerfile\n  ports:\n   - 80:80\n')),(0,a.kt)("p",null,"\u062a\u0648\u062c\u0647 \u06a9\u0646\u06cc\u062f \u062f\u0631 \u0641\u0627\u06cc\u0644 \u062f\u0627\u06a9\u0631 \u06a9\u0648\u067e\u0648\u0632 indent \u0647\u0627 \u0645\u0647\u0645 \u0647\u0633\u062a\u0646\u062f.\n\u062f\u0631 \u062f\u0633\u062a\u0648\u0631\u0627\u062a \u0628\u0627\u0644\u0627 \u0645\u062d\u0644 \u0642\u0631\u0627\u0631\u06af\u06cc\u0631\u06cc dockerfile \u0628\u0627 \u062f\u0633\u062a\u0648\u0631 context \u0648 \u0646\u0627\u0645 \u0622\u0646 \u0645\u0634\u062e\u0636 \u0648 \u067e\u0648\u0631\u062a 80 \u06a9\u0627\u0645\u06cc\u067e\u0648\u062a\u0631 \u0628\u0647 \u067e\u0648\u0631\u062a 80 \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631 map \u0634\u062f\u0647 \u0627\u0633\u062a.  "),(0,a.kt)("h3",{id:"\u0633\u0627\u062e\u062a-\u0648-\u0627\u062c\u0631\u0627\u06cc-\u06a9\u0627\u0646\u062a\u06cc\u0646\u0631"},"\u0633\u0627\u062e\u062a \u0648 \u0627\u062c\u0631\u0627\u06cc \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631"),(0,a.kt)("p",null,"\u062f\u0631 \u0645\u062d\u0644 \u067e\u0631\u0648\u0698\u0647 \u062f\u0633\u062a\u0648\u0631 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose up --build")," \u0631\u0627 \u062f\u0631 \u062a\u0631\u0645\u0646\u06cc\u0627\u0644 \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u062f.",(0,a.kt)("br",{parentName:"p"}),"\n","\u0628\u0631\u0627\u06cc \u063a\u06cc\u0631\u0641\u0639\u0627\u0644 \u06a9\u0631\u062f\u0646 \u06a9\u0627\u0646\u062a\u06cc\u0631 \u0627\u0632 \u062f\u0633\u062a\u0648\u0631 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose down")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645.",(0,a.kt)("br",{parentName:"p"}),"\n","\u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u06a9\u0627\u0646\u062a\u06cc\u0631 \u062f\u0631 \u067e\u0633\u200c\u0632\u0645\u0646\u06cc\u0647 \u06cc\u0627 \u062d\u0627\u0644\u062a detach mode \u0627\u0632 \u062f\u0633\u062a\u0648\u0631 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose up -d")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645."))}s.isMDXComponent=!0},1388:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/docker&compose-702a320338ecbf235afd6ca7a6f7acfe.png"},7660:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/dockerNginx-096d006b39ec9c50059f0fec297fee5f.jpg"},5565:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/nginxProductionFlow-2d705a4b525c9570c2a8d7fddd6fb8fd.png"}}]);