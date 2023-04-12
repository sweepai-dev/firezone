"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[3089],{46:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var a=n(7294),r=n(6010),l=n(2263),o=n(833),s=n(5281),i=n(9058),c=n(9703),m=n(197),d=n(9985);function u(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,l.Z)(),{blogDescription:r,blogTitle:s,permalink:i}=t,c="/"===i?n:s;return a.createElement(a.Fragment,null,a.createElement(o.d,{title:c,description:r}),a.createElement(m.Z,{tag:"blog_posts_list"}))}function p(e){const{metadata:t,items:n,sidebar:r}=e;return a.createElement(i.Z,{sidebar:r},a.createElement(d.Z,{items:n}),a.createElement(c.Z,{metadata:t}))}function g(e){return a.createElement(o.FG,{className:(0,r.Z)(s.k.wrapper.blogPages,s.k.page.blogListPage)},a.createElement(u,e),a.createElement(p,e))}},9703:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(5999),l=n(2244);function o(e){const{metadata:t}=e,{previousPage:n,nextPage:o}=t;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&a.createElement(l.Z,{permalink:n,title:a.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&a.createElement(l.Z,{permalink:o,title:a.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(9460),l=n(390);function o(e){let{items:t,component:n=l.Z}=e;return a.createElement(a.Fragment,null,t.map((e=>{let{content:t}=e;return a.createElement(r.n,{key:t.metadata.permalink,content:t},a.createElement(n,null,a.createElement(t,null)))})))}},3555:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(9191),r=n(7294),l=n(1262);const o=e=>{let{src:t,...a}=e;const o=(0,r.useRef)(null);return r.createElement(l.Z,{fallback:r.createElement("div",null,"Loading...")},(()=>{const e=n(3911);return(0,r.useEffect)((()=>{const n=o.current;e.create(t,n,a)}),[t]),r.createElement("div",{ref:o})}))};class s extends r.Component{componentDidMount(){const e=document.createElement("script");e.src="https://js.hsforms.net/forms/v2.js",document.body.appendChild(e),e.addEventListener("load",(()=>{window.hbspt&&window.hbspt.forms.create({target:"#hubspot-form",...this.props})}))}render(){return r.createElement("div",null,r.createElement("div",{id:"hubspot-form"}))}}const i=s;var c=n(814);const m="accentBlock_sttS",d="contentBlock_UXRD",u="btnWrapper_XQFs",p="btnPrimary_YjCT",g="btn_Chq6",b="sideImage_UN1x",h=e=>{let{title:t,description:n,buttonOneText:a,buttonOneLink:l,buttonTwoText:o,buttonTwoLink:s,imageSrc:i,imageAlt:c,imageHeight:h}=e;return r.createElement("div",{className:m},r.createElement("div",{className:d},r.createElement("div",null,r.createElement("h1",null,t||"Please Add Title"),r.createElement("p",null,n||"Please Add Description")),r.createElement("div",{className:u},a&&l&&r.createElement("button",{onClick:()=>window.open(l),className:p},a),o&&s&&r.createElement("button",{onClick:()=>window.open(s),className:g},o))),i&&r.createElement("img",{alt:c,src:i,height:h,className:b}))},E="feedbackWrapper_yNNi",f="voteWrapper_TtT1",k=()=>{const[e,t]=(0,r.useState)(!1);return r.createElement("div",{className:E},r.createElement("h1",null,e?"Thanks for the feedback":"Was this page useful?"),e?r.createElement("div",null,r.createElement("p",null,"If you need help on any of the above, feel free to create an issue on"," ",r.createElement("a",{href:"https://github.com/firezone/firezone",target:"_blank"},"our repo"),", or"," ",r.createElement("a",{href:"https://join.slack.com/t/firezone-users/shared_invite/zt-19jd956j4-rWcCqiKMh~ikPGsUFbvZiA",target:"_blank"},"join our Slack")," ","where a member of our team can assist you! Chances are that if you have a problem or question, someone else does too - so please don't hesitate to create a new issue or ask us a question.")):r.createElement("div",{className:f},r.createElement("button",{onClick:()=>t(!0)},r.createElement("img",{src:"img/like.svg"})," Like"),r.createElement("button",{onClick:()=>t(!0)},r.createElement("img",{src:"img/dislike.svg"})," Dislike")))},v="signupWrapper_jRF2",w=()=>{const[e,t]=(0,r.useState)(""),[n,a]=(0,r.useState)("");return r.createElement("div",{className:v},r.createElement("iframe",{height:"100%",width:"100%",src:"https://cdn.forms-content.sg-form.com/ae95a755-f1b0-11ec-bae1-cec19e074e52"}))};var Z=n(4866),_=n(5162);const N={...a.Z,AsciinemaPlayer:o,HubspotForm:i,InstallBlock:function(){return r.createElement(l.Z,{fallback:r.createElement("div",null,"Loading...")},(()=>{const e=window.posthog&&"function"==typeof window.posthog.get_distinct_id?window.posthog.get_distinct_id():"posthog-blocked";return r.createElement(c.Z,{language:"bash"},`bash <(curl -fsSL https://github.com/firezone/firezone/raw/master/scripts/install.sh) ${e}`)}))},accentblock:h,feedback:k,newsletter:w,Tabs:Z.Z,TabItem:_.Z}}}]);