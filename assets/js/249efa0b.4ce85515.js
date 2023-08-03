"use strict";(self.webpackChunkcodestar_documents=self.webpackChunkcodestar_documents||[]).push([[4048],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Axios",description:"Axios And http request"},s=void 0,i={unversionedId:"frontend/react/react-axios",id:"frontend/react/react-axios",title:"Axios",description:"Axios And http request",source:"@site/docs/frontend/07-react/09-react-axios.md",sourceDirName:"frontend/07-react",slug:"/frontend/react/react-axios",permalink:"/Documents/docs/frontend/react/react-axios",draft:!1,editUrl:"https://github.com/Mohaymen-Academy/Documents/tree/main/docs/frontend/07-react/09-react-axios.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Axios",description:"Axios And http request"},sidebar:"tutorialSidebar",previous:{title:"useCallback & useMemo",permalink:"/Documents/docs/frontend/react/react-useCallback-useMemo"},next:{title:"React Router DOM",permalink:"/Documents/docs/frontend/react/react-router"}},l={},p=[{value:"Axios \u0686\u06cc\u0633\u062a \u061f",id:"axios-\u0686\u06cc\u0633\u062a-",level:2},{value:"\u0646\u062d\u0648\u0647 \u0646\u0635\u0628 axios",id:"\u0646\u062d\u0648\u0647-\u0646\u0635\u0628-axios",level:3},{value:"\u0646\u062d\u0648\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 axios",id:"\u0646\u062d\u0648\u0647-\u0627\u0633\u062a\u0641\u0627\u062f\u0647-\u0627\u0632-axios",level:3},{value:"\u0646\u062d\u0648\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 axios \u062f\u0631 \u0631\u06cc\u06a9\u062a",id:"\u0646\u062d\u0648\u0647-\u0627\u0633\u062a\u0641\u0627\u062f\u0647-\u0627\u0632-axios-\u062f\u0631-\u0631\u06cc\u06a9\u062a",level:3},{value:"Json Server\u0686\u06cc\u0633\u062a \u061f",id:"json-server\u0686\u06cc\u0633\u062a-",level:2},{value:"\u0646\u062d\u0648\u0647 \u0631\u0627\u0647 \u0627\u0646\u062f\u0627\u0632\u06cc \u0633\u0631\u0648\u0631 api",id:"\u0646\u062d\u0648\u0647-\u0631\u0627\u0647-\u0627\u0646\u062f\u0627\u0632\u06cc-\u0633\u0631\u0648\u0631-api",level:3}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(848).Z,width:"1163",height:"607"})),(0,r.kt)("h2",{id:"axios-\u0686\u06cc\u0633\u062a-"},"Axios \u0686\u06cc\u0633\u062a \u061f"),(0,r.kt)("p",null,"axios \u06cc\u06a9 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647 \u0627\u0633\u062a \u06a9\u0647 \u0628\u0627 \u0646\u0635\u0628 \u0627\u0646 \u062f\u0631 \u067e\u0631\u0648\u0698\u0647 \u0627\u06cc\u0646 \u0627\u0645\u06a9\u0627\u0646 \u0631\u0627 \u0628\u0647 \u0645\u0627 \u0645\u06cc\u062f\u0647 \u062a\u0627 \u0628\u062a\u0648\u0646\u06cc\u0645 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0647\u0627\u06cc\nhttp \u062e\u0648\u062f\u0645\u0648\u0646 \u0631\u0627 \u0627\u0631\u0633\u0627\u0644 \u06a9\u0646\u06cc\u0645"),(0,r.kt)("p",null,"\u0634\u0627\u06cc\u062f \u0628\u0631\u0627\u062a\u0648\u0646 \u0633\u0648\u0627\u0644 \u0628\u0634\u0647 \u06a9\u0647 \u0686\u0631\u0627 \u0627\u0632 \u0647\u0645\u0648\u0646 fetch \u062c\u0627\u0648\u0627\u0627\u0633\u06a9\u0631\u06cc\u067e\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0646\u0645\u06cc\u06a9\u0646\u06cc\u0645 \u061f"),(0,r.kt)("p",null,"\u0645\u0632\u06cc\u062a \u0647\u0627\u06cc axios \u0646\u0633\u0628\u062a \u0628\u0647 fetch \u0627\u06cc\u0646 \u0647\u0633\u062a \u06a9\u0647 \u0645\u0631\u0648\u0631\u06af\u0631 \u0647\u0627\u06cc \u0642\u062f\u06cc\u0645\u06cc \u0631\u0627 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0645\u06cc\u06a9\u0646\u062f\n\u0648 \u0627\u0632 \u0647\u0645\u0647 \u0645\u0647\u0645\u062a\u0631 interceptor \u0631\u0627 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0645\u06cc\u06a9\u0646\u0647 \u06a9\u0647 \u0628\u0639\u062f\u0627 \u0628\u0627\u0647\u0627\u0634 \u0628\u06cc\u0634\u062a\u0631 \u0627\u0634\u0646\u0627 \u0645\u06cc\u0634\u06cc\u0645."),(0,r.kt)("h3",{id:"\u0646\u062d\u0648\u0647-\u0646\u0635\u0628-axios"},"\u0646\u062d\u0648\u0647 \u0646\u0635\u0628 axios"),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0646\u0635\u0628 axios \u0628\u0647 \u0631\u0648\u062a \u067e\u0631\u0648\u0698\u0647 \u0628\u0631\u06cc\u062f \u0648 \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u0631\u0627 \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u062f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i axios\n")),(0,r.kt)("h3",{id:"\u0646\u062d\u0648\u0647-\u0627\u0633\u062a\u0641\u0627\u062f\u0647-\u0627\u0632-axios"},"\u0646\u062d\u0648\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 axios"),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0645\u062b\u0627\u0644 \u0641\u0631\u0636 \u06a9\u0646\u06cc\u062f \u0645\u0627 \u06cc\u06a9 api \u062f\u0627\u0631\u06cc\u0645 \u06a9\u0647 \u0644\u06cc\u0633\u062a \u06a9\u0627\u0631\u0628\u0631 \u0647\u0627 \u0631\u0627 \u0628\u0647 \u0645\u0627 \u0645\u06cc\u062f\u0647\u062f \u0628\u0631\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u0644\u06cc\u0633\u062a \u0628\u0627 axios \u0628\u0647 \u0631\u0648\u0634 \u0632\u06cc\u0631 \u0639\u0645\u0644 \u0645\u06cc\u06a9\u0646\u06cc\u0645:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function getAllUsers() {\n    const response = await axios.get('https://jsonplaceholder.typicode.com/users');\n    return response.data;\n}\n")),(0,r.kt)("admonition",{title:"\u0646\u06a9\u062a\u0647",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u062f\u0642\u062a \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u062f \u06a9\u0647 axios \u0647\u0645\u06cc\u0634\u0647 \u06cc\u06a9 promise \u0628\u0627\u0632\u06af\u0631\u062f\u0627\u0646\u06cc \u0645\u06cc\u06a9\u0646\u0647.")),(0,r.kt)("admonition",{title:"\u0645\u062a\u062f \u0647\u0627\u06cc http ",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u0628\u0631\u0627\u06cc \u0635\u062f\u0627 \u06a9\u0631\u062f\u0646 \u0645\u062a\u062f \u0647\u0627\u06cc http \u062f\u0631 axios \u0628\u0647 \u0631\u0648\u0634 \u0632\u06cc\u0631 \u0639\u0645\u0644 \u0645\u06cc\u06a9\u0646\u06cc\u0645:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function addUser(username, email) {\n    const response = await axios.post('https://jsonplaceholder.typicode.com/users', {username, email});\n    return response.data;\n}\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function deleteUser(id) {\n    const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);\n    return response.data;\n}\n"))),(0,r.kt)("admonition",{title:"\u0645\u0637\u0627\u0644\u0639\u0647 ",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://axios-http.com/docs/intro"},"Axios")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://axios-http.com/docs/interceptors"},"Interceptors")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://axios-http.com/docs/handling_errors"},"Handling Errors")))),(0,r.kt)("h3",{id:"\u0646\u062d\u0648\u0647-\u0627\u0633\u062a\u0641\u0627\u062f\u0647-\u0627\u0632-axios-\u062f\u0631-\u0631\u06cc\u06a9\u062a"},"\u0646\u062d\u0648\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 axios \u062f\u0631 \u0631\u06cc\u06a9\u062a"),(0,r.kt)("p",null,"\u0641\u0631\u0636 \u06a9\u0646\u06cc\u062f \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u06cc \u062f\u0627\u0631\u06cc\u0645 \u06a9\u0647 \u0644\u06cc\u0633\u062a \u06a9\u0627\u0631\u0628\u0631\u0647\u0627 \u0631\u0627 \u0646\u0645\u0627\u06cc\u0634 \u0645\u06cc\u062f\u0647\u062f :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import axios from 'axios';\nimport { useEffect, useState } from 'react';\n\nasync function getAllUsers() {\n  const response = await axios.get('https://jsonplaceholder.typicode.com/users');\n  return response.data;\n}\n\nfunction App() {\n  const [users, setUsers] = useState([]);\n\n  useEffect(() => {\n    getAllUsers().then((users) => setUsers(users));\n  }, []);\n\n  return (\n    <div>\n     <table>\n\n      <thead>\n        <tr>\n          <th>id</th>\n          <th>username</th>\n          <th>email</th>\n        </tr>\n      </thead>\n\n      <tbody>\n        {users.length > 0 && users.map((user) => {\n          return (\n            <tr key={user.id}>\n              <td>{user.id}</td>\n              <td>{user.username}</td>\n              <td>{user.email}</td>\n            </tr>\n          );\n        })}\n      </tbody>\n     </table>\n    </div>\n  );\n}\nexport default App;\n")),(0,r.kt)("admonition",{title:"\u0646\u06a9\u062a\u0647",type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u0635\u062f\u0627 \u06a9\u0631\u062f\u0646 axios \u062f\u0631 useEffect \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a."),(0,r.kt)("li",{parentName:"ul"},"\u0628\u0631\u0627\u06cc \u0647\u0631 \u0631\u062f\u06cc\u0641 \u062f\u0631 map \u062d\u062a\u0645\u0627 \u0628\u0627\u06cc\u062f key \u063a\u06cc\u0631 \u062a\u06a9\u0631\u0627\u0631\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u0648\u062f"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"}," \u0645\u06cc\u062a\u0646\u0648\u0627\u0646\u06cc\u062f \u0645\u062b\u0627\u0644 \u0628\u0627\u0644\u0627 \u0631\u0627 \u0628\u0627 useMemo , useCallback \u0628\u0647\u06cc\u0646\u0647 \u0633\u0627\u0632\u06cc \u06a9\u0646\u06cc\u062f")),(0,r.kt)("h2",{id:"json-server\u0686\u06cc\u0633\u062a-"},"Json Server\u0686\u06cc\u0633\u062a \u061f"),(0,r.kt)("p",null,"\u062a\u0627 \u0627\u06cc\u0646\u062c\u0627 \u0645\u0627 \u0645\u062c\u0628\u0648\u0631 \u0628\u0648\u062f\u06cc\u0645 \u0628\u0631\u0627\u06cc \u062f\u0627\u0634\u062a\u0646 api \u062a\u0633\u062a \u0628\u0647\n",(0,r.kt)("a",{parentName:"p",href:"https://jsonplaceholder.typicode.com/"},"json placeholder "),"\n\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0628\u0632\u0646\u06cc\u0645\n\u062d\u0627\u0644\u0627 \u0645\u06cc\u062a\u0648\u0646\u06cc\u0645 \u0628\u0627 json server \u062e\u0648\u062f\u0645\u0648\u0646 api \u062a\u0633\u062a\u06cc \u0628\u0633\u0627\u0632\u06cc\u0645"),(0,r.kt)("p",null,"\u0646\u062d\u0648\u0647 \u0646\u0635\u0628 :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -g json-server\n")),(0,r.kt)("admonition",{title:"\u0646\u06a9\u062a\u0647",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u0628\u0627 \u0646\u0635\u0628 json-server \u0628\u0647 \u0635\u0648\u0631\u062a global \u062f\u0631 \u0647\u0645\u0647 \u0633\u06cc\u0633\u062a\u0645 \u0634\u0645\u0627 \u0642\u0627\u0628\u0644 \u062f\u0633\u062a\u0631\u0633\u06cc \u062e\u0648\u0627\u0647\u062f \u0628\u0648\u062f")),(0,r.kt)("h3",{id:"\u0646\u062d\u0648\u0647-\u0631\u0627\u0647-\u0627\u0646\u062f\u0627\u0632\u06cc-\u0633\u0631\u0648\u0631-api"},"\u0646\u062d\u0648\u0647 \u0631\u0627\u0647 \u0627\u0646\u062f\u0627\u0632\u06cc \u0633\u0631\u0648\u0631 api"),(0,r.kt)("p",null,"\u062d\u0627\u0644\u0627 \u0646\u06cc\u0627\u0632 \u0647\u0633\u062a \u06a9\u0647 \u06cc\u06a9 \u067e\u0648\u0634\u0647 \u0631\u0627 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u062f\u06cc\u062a\u0627\u0628\u06cc\u0633 json-server \u062f\u0631 \u0646\u0638\u0631 \u0628\u06af\u06cc\u0631\u06cc\u0645 "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ./server\n")),(0,r.kt)("p",null,"\u062d\u0627\u0644\u0627 \u06cc\u06a9 \u0641\u0627\u06cc\u0644 \u0628\u0647 \u0627\u0633\u0645 db.json \u062f\u0631\u0648\u0646 \u067e\u0648\u0634\u0647 \u0645\u06cc\u0633\u0627\u0632\u06cc\u0645 \u0648 \u0645\u062d\u062a\u0648\u0627\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u062f\u0631\u0648\u0646 \u0627\u0646 \u0645\u06cc\u0631\u06cc\u0632\u06cc\u0645:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "users": [\n    {\n      "id": 1,\n      "name": "Leanne Graham",\n      "username": "Bret",\n      "email": "Sincere@april.biz",\n      "address": {\n        "street": "Kulas Light",\n        "suite": "Apt. 556",\n        "city": "Gwenborough",\n        "zipcode": "92998-3874",\n        "geo": {\n          "lat": "-37.3159",\n          "lng": "81.1496"\n        }\n      },\n      "phone": "1-770-736-8031 x56442",\n      "website": "hildegard.org",\n      "company": {\n        "name": "Romaguera-Crona",\n        "catchPhrase": "Multi-layered client-server neural-net",\n        "bs": "harness real-time e-markets"\n      }\n    },\n    {\n      "id": 2,\n      "name": "Ervin Howell",\n      "username": "Antonette",\n      "email": "Shanna@melissa.tv",\n      "address": {\n        "street": "Victor Plains",\n        "suite": "Suite 879",\n        "city": "Wisokyburgh",\n        "zipcode": "90566-7771",\n        "geo": {\n          "lat": "-43.9509",\n          "lng": "-34.4618"\n        }\n      },\n      "phone": "010-692-6593 x09125",\n      "website": "anastasia.net",\n      "company": {\n        "name": "Deckow-Crist",\n        "catchPhrase": "Proactive didactic contingency",\n        "bs": "synergize scalable supply-chains"\n      }\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"\u062d\u0627\u0644\u0627 \u0632\u0645\u0627\u0646 \u0627\u0646 \u0631\u0633\u06cc\u062f\u0647 \u06a9\u0647 \u0627\u062c\u0631\u0627\u0634 \u06a9\u0646\u06cc\u0645.\u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u0631\u0627 \u0628\u0632\u0646\u06cc\u062f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"json-server --watch server/db.json -p 3001\n")),(0,r.kt)("p",null,"\u0628\u0639\u062f \u0627\u0632 \u0627\u062c\u0631\u0627 \u0634\u062f\u0646 \u0633\u0631\u0648\u0631 \u062a\u0631\u0645\u06cc\u0646\u0627\u0644 \u0631\u0627 \u0628\u0627\u0632 \u0628\u06af\u0630\u0627\u0631\u06cc\u062f \u062a\u0627 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0633\u0631\u0648\u0631 \u0645\u0627 \u0627\u062c\u0631\u0627 \u0628\u0645\u0627\u0646\u062f."),(0,r.kt)("p",null,"\u062d\u0627\u0644\u0627 \u062f\u0631 \u0645\u062b\u0627\u0644 \u0647\u0627\u06cc \u0642\u0628\u0644 \u0645\u06cc\u062a\u0648\u0627\u0646 \u0627\u062f\u0631\u0633 \u0632\u06cc\u0631 \u0631\u0627 \u062c\u0627 \u0628\u0647 \u062c\u0627 \u06a9\u0646\u06cc\u0645:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"https://jsonplaceholder.typicode.com/users\n\n====>\n\nhttp::localhost:3001/users\n")),(0,r.kt)("admonition",{title:"\u0645\u0638\u0627\u0644\u0639\u0647",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/typicode/json-server"},"Json Server Doc")))))}u.isMDXComponent=!0},848:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/axios-65cb2655a2e3049d18a469a04aa66ca1.jpeg"}}]);