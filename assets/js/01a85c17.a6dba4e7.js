(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64013,23343],{46165:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var a=r(79973),l=r(67294),n=r(86010),s=r(39033),c=r(36742),i="sidebar_2ahu",o="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",f="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",h=r(24973);function d(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:m},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:f,activeClassName:g},e.title))}))))}var E=["sidebar","toc","children"];var b=function(e){var t=e.sidebar,r=e.toc,c=e.children,i=(0,a.Z)(e,E),o=t&&t.items.length>0;return l.createElement(s.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(d,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},c),r&&l.createElement("div",{className:"col col--2"},r))))}},45776:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var a=r(67294),l=r(46165),n=r(37211),s=r(83039),c="tag_21yA";function i(e){var t=e.letterEntry;return a.createElement("article",null,a.createElement("h2",null,t.letter),a.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return a.createElement("li",{key:e.permalink,className:c},a.createElement(n.Z,e))}))),a.createElement("hr",null))}var o=function(e){var t=e.tags,r=(0,s.PZ)(t);return a.createElement("section",{className:"margin-vert--lg"},r.map((function(e){return a.createElement(i,{key:e.letter,letterEntry:e})})))};var m=function(e){var t=e.tags,r=e.sidebar,n=(0,s.MA)();return a.createElement(l.Z,{title:n,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:r},a.createElement("h1",null,n),a.createElement(o,{tags:Object.values(t)}))}},37211:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(67294),l=r(86010),n=r(36742),s="tag_1Okp",c="tagRegular_3MiF",i="tagWithCount_1HU1";var o=function(e){var t,r=e.permalink,o=e.name,m=e.count;return a.createElement(n.Z,{href:r,className:(0,l.Z)(s,(t={},t[c]=!m,t[i]=m,t))},o,m&&a.createElement("span",null,m))}},546:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var a=r(74034),l=r(79973),n=r(67294),s=r(94184),c=r.n(s),i=r(36742),o=r(52263),m=r(44996),u="footerLogoLink_qW4Z",f=["to","href","label"];function g(e){var t=e.to,r=e.href,s=e.label,c=(0,l.Z)(e,f),o=(0,m.Z)(t);return n.createElement(i.Z,(0,a.Z)({className:"footer__link-item"},r?{target:"_blank",rel:"noopener noreferrer",href:r}:{to:o},c),s)}var h=function(e){var t=e.url,r=e.alt;return n.createElement("img",{className:"footer__logo",alt:r,src:t})};var d=function(){var e=(0,o.Z)().siteConfig,t=(void 0===e?{}:e).themeConfig,r=(void 0===t?{}:t).footer,a=r||{},l=a.copyright,s=a.links,i=void 0===s?[]:s,f=a.logo,d=void 0===f?{}:f,E=(0,m.Z)(d.src);return r?n.createElement("footer",{className:c()("footer",{"footer--dark":"dark"===r.style})},n.createElement("div",{className:"container"},i&&i.length>0&&n.createElement("div",{className:"row footer__links"},i.map((function(e,t){return n.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return"GitHub Stars"===e.label?n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=mikro-orm&repo=mikro-orm&type=star&count=true",style:{marginTop:10},frameBorder:0,scrolling:0,width:150,height:30,title:"GitHub Stars",key:t})):"GitHub Sponsors"===e.label?n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=B4nan&type=sponsor",frameBorder:0,scrolling:0,width:150,height:30,title:"Sponsor B4nan"})):e.html?n.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement(g,e))}))):null)}))),(d||l)&&n.createElement("div",{className:"text--center"},d&&d.src&&n.createElement("div",{className:"margin-bottom--sm"},d.href?n.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:u},n.createElement(h,{alt:d.alt,url:E})):n.createElement(h,{alt:d.alt,url:E})),l,"Icons made by ",n.createElement("a",{href:"https://www.flaticon.com/authors/surang",title:"surang"},"surang")," and ",n.createElement("a",{href:"https://www.flaticon.com/authors/skyclick",title:"Skyclick"},"Skyclick"),"."))):null}}}]);