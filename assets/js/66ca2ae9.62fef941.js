"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Security Considerations",sidebar_position:6},l="Security considerations",o={unversionedId:"deploy/security-considerations",id:"deploy/security-considerations",title:"Security Considerations",description:"Disclaimer: Firezone is still beta software. The codebase has not yet",source:"@site/docs/deploy/security-considerations.mdx",sourceDirName:"deploy",slug:"/deploy/security-considerations",permalink:"/deploy/security-considerations",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/deploy/security-considerations.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Security Considerations",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Configure",permalink:"/deploy/configure"},next:{title:"Advanced",permalink:"/deploy/advanced/"}},d={},p=[{value:"List of services and ports",id:"list-of-services-and-ports",level:2},{value:"Production deployments",id:"production-deployments",level:2},{value:"Reporting Security Issues",id:"reporting-security-issues",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=s("Tabs"),c=s("TabItem"),m={toc:p};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"security-considerations"},"Security considerations"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Disclaimer"),": Firezone is still beta software. The codebase has not yet\nreceived a formal security audit. For highly sensitive and mission-critical\nproduction deployments, we recommend disabling local authentication as\ndetailed ",(0,a.kt)("a",{parentName:"p",href:"#production-deployments"},"below"),"."),(0,a.kt)("h2",{id:"list-of-services-and-ports"},"List of services and ports"),(0,a.kt)("p",null,"Shown below is a table of default ports used by Firezone services."),(0,a.kt)(u,{mdxType:"Tabs"},(0,a.kt)(c,{label:"Docker",value:"docker",default:!0,mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Service"),(0,a.kt)("th",{parentName:"tr",align:null},"Port"),(0,a.kt)("th",{parentName:"tr",align:null},"Listen address"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Caddy"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"443/tcp")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"all")),(0,a.kt)("td",{parentName:"tr",align:null},"Public HTTPS port for administering Firezone and facilitating authentication.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Caddy"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"80/tcp")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"all")),(0,a.kt)("td",{parentName:"tr",align:null},"Public HTTP port used for ACME. Disabled when ACME is disabled.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WireGuard"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"51820/udp")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"all")),(0,a.kt)("td",{parentName:"tr",align:null},"Public WireGuard port used for VPN sessions.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Postgresql"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"5432/tcp")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-")),(0,a.kt)("td",{parentName:"tr",align:null},"Containerized port used for bundled Postgresql server.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Phoenix"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"13000/tcp")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-")),(0,a.kt)("td",{parentName:"tr",align:null},"Containerized port used by upstream elixir app server."))))),(0,a.kt)(c,{label:"Omnibus",value:"omnibus",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Service"),(0,a.kt)("th",{parentName:"tr",align:null},"Port"),(0,a.kt)("th",{parentName:"tr",align:null},"Listen address"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Nginx"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"443/tcp")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"all")),(0,a.kt)("td",{parentName:"tr",align:null},"Public HTTPS port for administering Firezone and facilitating authentication.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Nginx"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"80/tcp")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"all")),(0,a.kt)("td",{parentName:"tr",align:null},"Public HTTP port used for ACME. Disabled when ACME is disabled.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WireGuard"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"51820/udp")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"all")),(0,a.kt)("td",{parentName:"tr",align:null},"Public WireGuard port used for VPN sessions.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Postgresql"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"15432/tcp")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"127.0.0.1")),(0,a.kt)("td",{parentName:"tr",align:null},"Local-only port used for bundled Postgresql server.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Phoenix"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"13000/tcp")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"127.0.0.1")),(0,a.kt)("td",{parentName:"tr",align:null},"Local-only port used by upstream elixir app server.")))))),(0,a.kt)("h2",{id:"production-deployments"},"Production deployments"),(0,a.kt)("p",null,"For production deployments of Firezone, we recommend you disable local authentication\naltogether by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"default['firezone']['authentication']['local']['enabled'] = false"),"\n(Omnibus-based deployments) or ",(0,a.kt)("inlineCode",{parentName:"p"},"LOCAL_AUTH_ENABLED=false")," (Docker-based deployments)."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Ensure you've set up a working ",(0,a.kt)("a",{parentName:"p",href:"/authenticate/oidc/"},"OIDC")," or ",(0,a.kt)("a",{parentName:"p",href:"/authenticate/saml/"},"SAML"),"-based\nauthentication provider before disabling the local authentication method.")),(0,a.kt)("h2",{id:"reporting-security-issues"},"Reporting Security Issues"),(0,a.kt)("p",null,"To report any security-related bugs, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/firezone/firezone/blob/master/SECURITY.md"},"our security bug reporting policy\n"),"."))}k.isMDXComponent=!0}}]);