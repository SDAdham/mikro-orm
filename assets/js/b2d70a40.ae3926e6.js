(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57165],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62068:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(74034),i=n(79973),o=(n(67294),n(3905)),a=["components"],c={id:"core.Settings",title:"Interface: Settings",sidebar_label:"Settings",custom_edit_url:null},s=void 0,l={unversionedId:"api/interfaces/core.Settings",id:"api/interfaces/core.Settings",isDocsHomePage:!1,title:"Interface: Settings",description:"core.Settings",source:"@site/docs/api/interfaces/core.Settings.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.Settings",permalink:"/docs/next/api/interfaces/core.Settings",editUrl:null,tags:[],version:"current",frontMatter:{id:"core.Settings",title:"Interface: Settings",sidebar_label:"Settings",custom_edit_url:null},sidebar:"API",previous:{title:"SerializedPrimaryKeyOptions",permalink:"/docs/next/api/interfaces/core.SerializedPrimaryKeyOptions"},next:{title:"TransactionEventArgs",permalink:"/docs/next/api/interfaces/core.TransactionEventArgs"}},p=[{value:"Properties",id:"properties",children:[{value:"configPaths",id:"configpaths",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"tsConfigPath",id:"tsconfigpath",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"useTsNode",id:"usetsnode",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../modules/core"},"core"),".Settings"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"configpaths"},"configPaths"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"configPaths"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/105dede/packages/core/src/utils/ConfigurationLoader.ts#L196"},"packages/core/src/utils/ConfigurationLoader.ts:196")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"tsconfigpath"},"tsConfigPath"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"tsConfigPath"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/105dede/packages/core/src/utils/ConfigurationLoader.ts#L195"},"packages/core/src/utils/ConfigurationLoader.ts:195")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"usetsnode"},"useTsNode"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"useTsNode"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/105dede/packages/core/src/utils/ConfigurationLoader.ts#L194"},"packages/core/src/utils/ConfigurationLoader.ts:194")))}d.isMDXComponent=!0}}]);