"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[3520],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3024:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Security Controls",sidebar_position:10},i=void 0,l={unversionedId:"reference/security-controls",id:"reference/security-controls",title:"Security Controls",description:"Firezone employs a few different security controls to keep data secure in",source:"@site/docs/reference/security-controls.mdx",sourceDirName:"reference",slug:"/reference/security-controls",permalink:"/reference/security-controls",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/reference/security-controls.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Security Controls",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"nftables Firewall Template",permalink:"/reference/firewall-templates/nftables"},next:{title:"Create a pet",permalink:"/reference/REST API/create-pets"}},s={},p=[{value:"Overview of Cryptography Used",id:"overview-of-cryptography-used",level:2},{value:"Rate Limiting",id:"rate-limiting",level:2},{value:"Security Policy",id:"security-policy",level:2},{value:"Announcements",id:"announcements",level:3},{value:"Supported Versions",id:"supported-versions",level:3},{value:"Reporting a Vulnerability",id:"reporting-a-vulnerability",level:3},{value:"PGP Key",id:"pgp-key",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Firezone employs a few different security controls to keep data secure in\ntransit and at rest."),(0,a.kt)("h2",{id:"overview-of-cryptography-used"},"Overview of Cryptography Used"),(0,a.kt)("p",null,"Below is a table of cryptography used and to which contexts they apply."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Cryptography"),(0,a.kt)("th",{parentName:"tr",align:null},"Context"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AES-GCM"),(0,a.kt)("td",{parentName:"tr",align:null},"Data at rest"),(0,a.kt)("td",{parentName:"tr",align:null},"Used to encrypt sensitive database fields such as device preshared keys and multi-factor authentication secrets.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Argon2"),(0,a.kt)("td",{parentName:"tr",align:null},"Data at rest"),(0,a.kt)("td",{parentName:"tr",align:null},"Used to hash user passwords for the local authentication method.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TLSv1.2/TLSv1.3"),(0,a.kt)("td",{parentName:"tr",align:null},"Data in transit"),(0,a.kt)("td",{parentName:"tr",align:null},"Used by the Caddy server to encrypt HTTP connections to the portal. Read more at ",(0,a.kt)("a",{parentName:"td",href:"https://caddyserver.com/docs/caddyfile/directives/tls"},"https://caddyserver.com/docs/caddyfile/directives/tls"),". SSL certificates are provisioned automatically with the ACME protocol by Let's Encrypt by default.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ChaCha20, Poly1305, Curve25519, BLAKE2s, SipHash24, HKDF"),(0,a.kt)("td",{parentName:"tr",align:null},"Data in transit"),(0,a.kt)("td",{parentName:"tr",align:null},"Used by WireGuard\xae for VPN tunnels. Read more at ",(0,a.kt)("a",{parentName:"td",href:"https://wireguard.com/protocol"},"https://wireguard.com/protocol"),". Firezone uses Linux kernel WireGuard without modification.")))),(0,a.kt)("h2",{id:"rate-limiting"},"Rate Limiting"),(0,a.kt)("p",null,"Firezone employs HTTP rate limiting to help limit the effectiveness of brute\nforce attacks against the web portal. Requests from a single IP are\nlimited to 5 per second before Firezone responds with an\n",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP 429: Too Many Requests"),"."),(0,a.kt)("h2",{id:"security-policy"},"Security Policy"),(0,a.kt)("p",null,"We take security issues very seriously and strive to fix all security issues\nas soon as they're reported."),(0,a.kt)("h3",{id:"announcements"},"Announcements"),(0,a.kt)("p",null,"We'll announce major security issues on our security mailing list located at:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://discourse.firez.one"},"https://discourse.firez.one")),(0,a.kt)("h3",{id:"supported-versions"},"Supported Versions"),(0,a.kt)("p",null,"We release security patches for supported versions of Firezone. We recommend\nrunning the latest version of Firezone at all times."),(0,a.kt)("h3",{id:"reporting-a-vulnerability"},"Reporting a Vulnerability"),(0,a.kt)("p",null,"Please ",(0,a.kt)("strong",{parentName:"p"},"do not")," open a Github Issue for security issues you encounter.\nInstead, please send an email to ",(0,a.kt)("inlineCode",{parentName:"p"},"security AT firezone.dev")," describing the issue\nand we'll respond as soon as possible."),(0,a.kt)("h3",{id:"pgp-key"},"PGP Key"),(0,a.kt)("p",null,"You may use the public key below to encrypt emails to ",(0,a.kt)("inlineCode",{parentName:"p"},"security AT firezone.dev"),".\nYou can also find this key at:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pgp.mit.edu/pks/lookup?op=get&search=0x45113BA04AD83D8A"},"https://pgp.mit.edu/pks/lookup?op=get&search=0x45113BA04AD83D8A")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: SKS 1.1.6\nComment: Hostname: pgp.mit.edu\n\nmDMEYYwK5BYJKwYBBAHaRw8BAQdA4ooDpwDy3V0wHCftM/LHD5e713LSr0SQy49joUMgHoS0\nJkZpcmV6b25lIFNlY3VyaXR5IDxzZWN1cml0eUBmaXJlei5vbmU+iJoEExYKAEIWIQQlD4tW\ngEEHBC38anNFETugStg9igUCYYwK5AIbAwUJA8JnAAULCQgHAgMiAgEGFQoJCAsCBBYCAwEC\nHgcCF4AACgkQRRE7oErYPYoORwEAiYi3arrcR2e5OfqsoAbCN0O6M0HWeo1K/ZoFWH2jLy0B\nAMsWk58vepKqNhUKhuDb8bSjK8TOr/IxB63lSkQaz9MIuDgEYYwK5BIKKwYBBAGXVQEFAQEH\nQPLzia/me7FOsFfAJKWm0X1qC5byv2GWn6LZPV013AdoAwEIB4h+BBgWCgAmFiEEJQ+LVoBB\nBwQt/GpzRRE7oErYPYoFAmGMCuQCGwwFCQPCZwAACgkQRRE7oErYPYr0ZQEAig86wu+zrNiT\nB4t3dk3psHRj+Kdn4uURLjUBZqYNvXoA+QEBUPtP7hNjum+1FrzYmHUFdCBA/cszz7x7PQ36\n5gcE\n=0gEr\n-----END PGP PUBLIC KEY BLOCK-----\n")))}u.isMDXComponent=!0}}]);