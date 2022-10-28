"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[6343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={title:"Troubleshoot",sidebar_position:6},a=void 0,s={unversionedId:"administer/troubleshoot",id:"administer/troubleshoot",title:"Troubleshoot",description:"For any problems that arise, a good first bet is to check the Firezone logs.",source:"@site/docs/administer/troubleshoot.mdx",sourceDirName:"administer",slug:"/administer/troubleshoot",permalink:"/administer/troubleshoot",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/administer/troubleshoot.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Troubleshoot",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Uninstall",permalink:"/administer/uninstall"},next:{title:"Regenerate Secret Keys",permalink:"/administer/regen-keys"}},l={},c=[{value:"Application Crash Loop Preventing Config Changes",id:"application-crash-loop-preventing-config-changes",level:2},{value:"Debugging Portal Websocket Connectivity Issues",id:"debugging-portal-websocket-connectivity-issues",level:2},{value:"Debugging WireGuard Connectivity Issues",id:"debugging-wireguard-connectivity-issues",level:2},{value:"Internet Connectivity Drops when Tunnel is Active",id:"internet-connectivity-drops-when-tunnel-is-active",level:3},{value:"Need additional help?",id:"need-additional-help",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For any problems that arise, a good first bet is to check the Firezone logs.\nFirezone logs are stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/firezone")," and can be viewed with\n",(0,r.kt)("inlineCode",{parentName:"p"},"sudo firezone-ctl tail"),"."),(0,r.kt)("h2",{id:"application-crash-loop-preventing-config-changes"},"Application Crash Loop Preventing Config Changes"),(0,r.kt)("p",null,"In cases where the application is crash looping because of corrupt, inaccessible, or\ninvalid data in the DB, you can try clearing the affected fields."),(0,r.kt)("p",null,"For example, to clear OIDC configs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"psql -d firezone -h 127.0.0.1 -U postgres -c \"UPDATE configurations SET openid_connect_providers = '{}'\"\n")),(0,r.kt)("p",null,"Similarly, to clear SAML configs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"psql -d firezone -h 127.0.0.1 -U postgres -c \"UPDATE configurations SET saml_providers = '{}'\"\n")),(0,r.kt)("h2",{id:"debugging-portal-websocket-connectivity-issues"},"Debugging Portal Websocket Connectivity Issues"),(0,r.kt)("p",null,"The portal UI requires a secure websocket connection to function. To facilitate\nthis, the Firezone phoenix service checks the ",(0,r.kt)("inlineCode",{parentName:"p"},"Host")," header for inbound\nwebsocket connections and only permits the connection if it matches the host\nportion of your ",(0,r.kt)("inlineCode",{parentName:"p"},"default['firezone']['external_url']")," variable."),(0,r.kt)("p",null,"If a secure websocket connection can't be established, you'll see a red dot\nindicator in the upper-right portion of the Firezone web UI and a corresponding\nmessage when you hover over it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Secure websocket not connected! ...\n")),(0,r.kt)("p",null,"If you're accessing Firezone using the same URL defined in your\n",(0,r.kt)("inlineCode",{parentName:"p"},"default['firezone']['external_url']")," variable from above, the issue is likely\nto be in your reverse proxy configuration."),(0,r.kt)("p",null,"In most cases, you'll find clues in one or more of the following locations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your browser's developer tool logs, specifically the ",(0,r.kt)("inlineCode",{parentName:"li"},"Network")," tab."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sudo firezone-ctl tail nginx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sudo firezoen-ctl tail phoenix"))),(0,r.kt)("p",null,"If the websocket connection is successful, you should see output in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"phoenix")," service logs similar the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'2022-09-23_15:05:47.29158 15:05:47.291 [info] CONNECTED TO Phoenix.LiveView.Socket in 24\xb5s\n2022-09-23_15:05:47.29160   Transport: :websocket\n2022-09-23_15:05:47.29160   Serializer: Phoenix.Socket.V2.JSONSerializer\n2022-09-23_15:05:47.29161   Parameters: %{"_csrf_token" => "XFEFCHQ2fRQABQwtKQdCJDlFAzEcCCJvn7LqDsMXE4eGZtsBzuwVRCJ6", "_mounts" => "0", "_track_static" => %{"0" => "https://demo.firez.one/dist/admin-02fabe0f543c64122dbf5bc5b3451e51.css?vsn=d", "1" => "https://demo.firez.one/dist/admin-04e75c78295062c2c07af61be50248b0.js?vsn=d"}, "vsn" => "2.0.0"}\n2022-09-23_15:05:47.33655 15:05:47.336 [info] CONNECTED TO FzHttpWeb.UserSocket in 430\xb5s\n2022-09-23_15:05:47.33657   Transport: :websocket\n2022-09-23_15:05:47.33658   Serializer: Phoenix.Socket.V2.JSONSerializer\n2022-09-23_15:05:47.33658   Parameters: %{"token" => "SFMyNTY.g2gDYQFuBgB6HeJqgwFiAAFRgA.qKoC2bi9DubPkE0tfaRSPERWUFyQQPQV5n4nFKVppxc", "vsn" => "2.0.0"}\n2022-09-23_15:05:47.35063 15:05:47.350 [info] JOINED notification:session in 636\xb5s\n2022-09-23_15:05:47.35065   Parameters: %{"token" => "SFMyNTY.g2gDYQFuBgB6HeJqgwFiAAFRgA.zSG7pefm-Vgf_zvduxa5E9VK4s8PKqzc0xBDGNx5FQE", "user_agent" => "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0"}\n')),(0,r.kt)("h2",{id:"debugging-wireguard-connectivity-issues"},"Debugging WireGuard Connectivity Issues"),(0,r.kt)("p",null,"Most connectivity issues with Firezone are caused by other ",(0,r.kt)("inlineCode",{parentName:"p"},"iptables")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"nftables")," rules which interfere with Firezone's operation. If you have rules\nactive, you'll need to ensure these don't conflict with the Firezone rules."),(0,r.kt)("h3",{id:"internet-connectivity-drops-when-tunnel-is-active"},"Internet Connectivity Drops when Tunnel is Active"),(0,r.kt)("p",null,"If your Internet connectivity drops whenever you activate your WireGuard\ntunnel, you should make sure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"FORWARD")," chain allows packets\nfrom your WireGuard clients to the destinations you want to allow through\nFirezone."),(0,r.kt)("p",null,"If you're using ",(0,r.kt)("inlineCode",{parentName:"p"},"ufw"),", this can be done by making sure the default routing\npolicy is ",(0,r.kt)("inlineCode",{parentName:"p"},"allow"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"ubuntu@fz:~$ sudo ufw default allow routed\nDefault routed policy changed to 'allow'\n(be sure to update your rules accordingly)\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"ufw")," status for a typical Firezone server might look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"ubuntu@fz:~$ sudo ufw status verbose\nStatus: active\nLogging: on (low)\nDefault: deny (incoming), allow (outgoing), allow (routed)\nNew profiles: skip\n\nTo                         Action      From\n--                         ------      ----\n22/tcp                     ALLOW IN    Anywhere\n80/tcp                     ALLOW IN    Anywhere\n443/tcp                    ALLOW IN    Anywhere\n51820/udp                  ALLOW IN    Anywhere\n22/tcp (v6)                ALLOW IN    Anywhere (v6)\n80/tcp (v6)                ALLOW IN    Anywhere (v6)\n443/tcp (v6)               ALLOW IN    Anywhere (v6)\n51820/udp (v6)             ALLOW IN    Anywhere (v6)\n")),(0,r.kt)("h2",{id:"need-additional-help"},"Need additional help?"),(0,r.kt)("p",null,"Try asking on one of our community-powered support channels:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://discourse.firez.one/"},"Discussion Forums"),": ask questions, report bugs,\nand suggest features"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://join.slack.com/t/firezone-users/shared_invite/zt-111043zus-j1lP_jP5ohv52FhAayzT6w"},"Public Slack Group"),":\njoin discussions, meet other users, and meet the contributors")),(0,r.kt)("p",null,"We highly recommend considering ",(0,r.kt)("a",{parentName:"p",href:"https://firezone.dev/pricing"},"priority support"),"\nif you're deploying Firezone in a production capacity."))}p.isMDXComponent=!0}}]);