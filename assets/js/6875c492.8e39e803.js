(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48610,23343],{46165:function(e,t,a){"use strict";a.d(t,{Z:function(){return E}});var r=a(79973),l=a(67294),n=a(86010),s=a(39033),i=a(36742),m="sidebar_2ahu",o="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",u="sidebarItem_2UVv",g="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM",h=a(24973);function p(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:c},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))}))))}var f=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,i=e.children,m=(0,r.Z)(e,f),o=t&&t.items.length>0;return l.createElement(s.Z,m,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(p,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},94884:function(e,t,a){"use strict";a.d(t,{Z:function(){return _}});var r=a(67294),l=a(86010),n=a(3905),s=a(24973),i=a(36742),m=a(44996),o=a(83039),c=a(60637),u=a(86146),g="blogPostTitle_GeHD",d="blogPostData_291c",h="blogPostDetailsFull_3kfx",p=a(87682),f="image_1yU8";var E=function(e){var t=e.author,a=t.name,l=t.title,n=t.url,s=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},s&&r.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:n},r.createElement("img",{className:f,src:s,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(i.Z,{href:n,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},b="authorCol_1R69";function v(e){var t=e.authors,a=e.assets;return 0===t.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var n;return r.createElement("div",{className:(0,l.Z)("col col--6",b),key:t},r.createElement(E,{author:Object.assign({},e,{imageURL:null!=(n=a.authorsImageUrls[t])?n:e.imageURL})}))})))}var _=function(e){var t,a,f,E,b=(f=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return f(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,m.C)().withBaseUrl,N=e.children,k=e.frontMatter,Z=e.assets,y=e.metadata,P=e.truncated,w=e.isBlogPostPage,T=void 0!==w&&w,L=y.date,M=y.formattedDate,I=y.permalink,U=y.tags,B=y.readingTime,C=y.title,x=y.editUrl,S=y.authors,R=null!=(t=Z.image)?t:k.image,A=!T&&P,H=U.length>0;return r.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(E=T?"h1":"h2",r.createElement("header",null,r.createElement(E,{className:g,itemProp:"headline"},T?C:r.createElement(i.Z,{itemProp:"url",to:I},C)),r.createElement("div",{className:(0,l.Z)(d,"margin-vert--md")},r.createElement("time",{dateTime:L,itemProp:"datePublished"},M),void 0!==B&&r.createElement(r.Fragment,null," \xb7 ",b(B))),r.createElement(v,{authors:S,assets:Z}))),R&&r.createElement("meta",{itemProp:"image",content:_(R,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(n.Zo,{components:c.Z},N)),(H||P)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[h]=T,a))},H&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":A})},r.createElement(p.Z,{tags:U})),T&&x&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:x})),A&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":H})},r.createElement(i.Z,{to:y.permalink,"aria-label":"Read more about "+C},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},69404:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var r=a(67294),l=a(36742),n=a(46165),s=a(94884),i=a(24973),m=a(83039);function o(e){var t,a=e.metadata,o=e.items,c=e.sidebar,u=a.allTagsPath,g=a.name,d=a.count,h=(t=(0,m.c2)().selectMessage,function(e){return t(e,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),p=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:h(d),tagName:g});return r.createElement(n.Z,{title:p,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:c},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,p),r.createElement(l.Z,{href:u},r.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),o.map((function(e){var t=e.content;return r.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},86146:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var r=a(67294),l=a(24973),n=a(74034),s=a(79973),i=a(86010),m="iconEdit_2_ui",o=["className"],c=function(e){var t=e.className,a=(0,s.Z)(e,o);return r.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(m,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(83039);function g(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},r.createElement(c,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},37211:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var r=a(67294),l=a(86010),n=a(36742),s="tag_1Okp",i="tagRegular_3MiF",m="tagWithCount_1HU1";var o=function(e){var t,a=e.permalink,o=e.name,c=e.count;return r.createElement(n.Z,{href:a,className:(0,l.Z)(s,(t={},t[i]=!c,t[m]=c,t))},o,c&&r.createElement("span",null,c))}},87682:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var r=a(67294),l=a(86010),n=a(24973),s=a(37211),i="tags_2ga9",m="tag_11ep";function o(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(i,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:m},r.createElement(s.Z,{name:t,permalink:a}))}))))}},546:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var r=a(74034),l=a(79973),n=a(67294),s=a(94184),i=a.n(s),m=a(36742),o=a(52263),c=a(44996),u="footerLogoLink_qW4Z",g=["to","href","label"];function d(e){var t=e.to,a=e.href,s=e.label,i=(0,l.Z)(e,g),o=(0,c.Z)(t);return n.createElement(m.Z,(0,r.Z)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:o},i),s)}var h=function(e){var t=e.url,a=e.alt;return n.createElement("img",{className:"footer__logo",alt:a,src:t})};var p=function(){var e=(0,o.Z)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,r=a||{},l=r.copyright,s=r.links,m=void 0===s?[]:s,g=r.logo,p=void 0===g?{}:g,f=(0,c.Z)(p.src);return a?n.createElement("footer",{className:i()("footer",{"footer--dark":"dark"===a.style})},n.createElement("div",{className:"container"},m&&m.length>0&&n.createElement("div",{className:"row footer__links"},m.map((function(e,t){return n.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return"GitHub Stars"===e.label?n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=mikro-orm&repo=mikro-orm&type=star&count=true",style:{marginTop:10},frameBorder:0,scrolling:0,width:150,height:30,title:"GitHub Stars",key:t})):"GitHub Sponsors"===e.label?n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=B4nan&type=sponsor",frameBorder:0,scrolling:0,width:150,height:30,title:"Sponsor B4nan"})):e.html?n.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement(d,e))}))):null)}))),(p||l)&&n.createElement("div",{className:"text--center"},p&&p.src&&n.createElement("div",{className:"margin-bottom--sm"},p.href?n.createElement("a",{href:p.href,target:"_blank",rel:"noopener noreferrer",className:u},n.createElement(h,{alt:p.alt,url:f})):n.createElement(h,{alt:p.alt,url:f})),l,"Icons made by ",n.createElement("a",{href:"https://www.flaticon.com/authors/surang",title:"surang"},"surang")," and ",n.createElement("a",{href:"https://www.flaticon.com/authors/skyclick",title:"Skyclick"},"Skyclick"),"."))):null}}}]);