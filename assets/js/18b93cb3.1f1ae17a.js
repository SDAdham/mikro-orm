(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3042,23343],{56085:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(67294),l=r(39033),a=r(52263),o=r(36742),c=r(44996),m="4.5.9",i=JSON.parse('["4.5","4.4","4.3","4.2","4.1","4.0","3.6","2.7"]');var s=function(){var e=(0,a.Z)().siteConfig,t=void 0===e?{}:e,r=[i[0],m],s=i.filter((function(e){return e!==i[0]})).map((function(e){return[e,e+".0"]})),u="https://github.com/"+t.organizationName+"/"+t.projectName;return n.createElement(l.Z,{permalink:"/versions",description:"MikroORM Versions page listing all documented site versions"},n.createElement("div",{className:"container margin-vert--xl"},n.createElement("h1",null,"MikroORM documentation versions"),n.createElement("div",{className:"margin-bottom--lg"},n.createElement("h3",{id:"latest"},"Latest version (Stable)"),n.createElement("p",null,"Here you can find the latest documentation."),n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",null,r[1]),n.createElement("td",null,n.createElement(o.Z,{to:(0,c.Z)("/docs/installation")},"Documentation")),n.createElement("td",null,n.createElement("a",{href:u+"/releases/tag/v"+r[1]},"Release Notes")))))),n.createElement("div",{className:"margin-bottom--lg"},n.createElement("h3",{id:"next"},"Next version (Unreleased)"),n.createElement("p",null,"Here you can find the documentation for unreleased version."),n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",null,"master"),n.createElement("td",null,n.createElement(o.Z,{to:(0,c.Z)("/docs/next/installation")},"Documentation")),n.createElement("td",null,n.createElement("a",{href:u},"Source Code")))))),s.length>0&&n.createElement("div",{className:"margin-bottom--lg"},n.createElement("h3",{id:"archive"},"Past Versions"),n.createElement("p",null,"Here you can find documentation for previous versions of MikroORM."),n.createElement("table",null,n.createElement("tbody",null,s.map((function(e){return n.createElement("tr",{key:e[0]},n.createElement("th",null,e[0]),n.createElement("td",null,n.createElement(o.Z,{to:(0,c.Z)("/docs/"+e[0]+"/installation")},"Documentation")),n.createElement("td",null,n.createElement("a",{href:u+"/releases/tag/v"+e[1]},"Release Notes")))})))))))}},546:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(74034),l=r(79973),a=r(67294),o=r(94184),c=r.n(o),m=r(36742),i=r(52263),s=r(44996),u="footerLogoLink_qW4Z",f=["to","href","label"];function E(e){var t=e.to,r=e.href,o=e.label,c=(0,l.Z)(e,f),i=(0,s.Z)(t);return a.createElement(m.Z,(0,n.Z)({className:"footer__link-item"},r?{target:"_blank",rel:"noopener noreferrer",href:r}:{to:i},c),o)}var d=function(e){var t=e.url,r=e.alt;return a.createElement("img",{className:"footer__logo",alt:r,src:t})};var h=function(){var e=(0,i.Z)().siteConfig,t=(void 0===e?{}:e).themeConfig,r=(void 0===t?{}:t).footer,n=r||{},l=n.copyright,o=n.links,m=void 0===o?[]:o,f=n.logo,h=void 0===f?{}:f,g=(0,s.Z)(h.src);return r?a.createElement("footer",{className:c()("footer",{"footer--dark":"dark"===r.style})},a.createElement("div",{className:"container"},m&&m.length>0&&a.createElement("div",{className:"row footer__links"},m.map((function(e,t){return a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return"GitHub Stars"===e.label?a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=mikro-orm&repo=mikro-orm&type=star&count=true",style:{marginTop:10},frameBorder:0,scrolling:0,width:150,height:30,title:"GitHub Stars",key:t})):"GitHub Sponsors"===e.label?a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=B4nan&type=sponsor",frameBorder:0,scrolling:0,width:150,height:30,title:"Sponsor B4nan"})):e.html?a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(E,e))}))):null)}))),(h||l)&&a.createElement("div",{className:"text--center"},h&&h.src&&a.createElement("div",{className:"margin-bottom--sm"},h.href?a.createElement("a",{href:h.href,target:"_blank",rel:"noopener noreferrer",className:u},a.createElement(d,{alt:h.alt,url:g})):a.createElement(d,{alt:h.alt,url:g})),l,"Icons made by ",a.createElement("a",{href:"https://www.flaticon.com/authors/surang",title:"surang"},"surang")," and ",a.createElement("a",{href:"https://www.flaticon.com/authors/skyclick",title:"Skyclick"},"Skyclick"),"."))):null}}}]);