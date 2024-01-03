"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1752],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,s=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},3992:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(7462),a=n(7294),o=n(6010),s=n(2957),l=n(6775),i=n(5238),u=n(3609),p=n(2560);function c(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,l.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,i._X)(s),(0,a.useCallback)((function(e){if(s){var t=new URLSearchParams(o.location.search);t.set(s,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[s,o])]}function g(e){var t,n,r,o,s=e.defaultValue,l=e.queryString,i=void 0!==l&&l,u=e.groupId,c=d(e),g=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:c})})),v=g[0],b=g[1],h=f({queryString:i,groupId:u}),y=h[0],k=h[1],j=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,p.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=j[0],w=j[1],T=function(){var e=null!=y?y:N;return m({value:e,tabValues:c})?e:null}();return(0,a.useLayoutEffect)((function(){T&&b(T)}),[T]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);b(e),k(e),w(e)}),[k,w,c]),tabValues:c}}var v=n(1048),b="tabList__CuJ",h="tabItem_LNqP";function y(e){var t=e.className,n=e.block,l=e.selectedValue,i=e.selectValue,u=e.tabValues,p=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=p.indexOf(t),r=u[n].value;r!==l&&(c(t),i(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=p.indexOf(e.currentTarget)+1;n=null!=(r=p[a])?r:p[0];break;case"ArrowLeft":var o,s=p.indexOf(e.currentTarget)-1;n=null!=(o=p[s])?o:p[p.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,s=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return p.push(e)},onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",h,null==s?void 0:s.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function k(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=o.find((function(e){return e.props.value===r}));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function j(e){var t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function N(e){var t=(0,v.Z)();return a.createElement(j,(0,r.Z)({key:String(t)},e))}},3534:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),s=n(3992),l=n(425),i=["components"],u={id:"presets",title:"Presets"},p=void 0,c={unversionedId:"getting-started/presets",id:"getting-started/presets",title:"Presets",description:"The presets",source:"@site/docs/getting-started/presets.md",sourceDirName:"getting-started",slug:"/getting-started/presets",permalink:"/jest-preset-angular/docs/next/getting-started/presets",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/docs/getting-started/presets.md",tags:[],version:"current",lastUpdatedBy:"John Crim",lastUpdatedAt:1704303899,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{id:"presets",title:"Presets"},sidebar:"docs",previous:{title:"Installation",permalink:"/jest-preset-angular/docs/next/getting-started/installation"},next:{title:"Options",permalink:"/jest-preset-angular/docs/next/getting-started/options"}},d={},m=[{value:"The presets",id:"the-presets",level:3},{value:"Basic usage",id:"basic-usage",level:3},{value:"Advanced",id:"advanced",level:3}],f={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"the-presets"},"The presets"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," comes with 2 presets, covering most of the project's base configuration:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Preset name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"jest-preset-angular/presets/default"),(0,o.kt)("br",null),"or ",(0,o.kt)("inlineCode",{parentName:"td"},"jest-preset-angular")),(0,o.kt)("td",{parentName:"tr",align:null},"TypeScript, JavaScript and HTML files (",(0,o.kt)("inlineCode",{parentName:"td"},"js"),", ",(0,o.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,o.kt)("inlineCode",{parentName:"td"},".html"),") will be transformed by ",(0,o.kt)("inlineCode",{parentName:"td"},"jest-preset-angular")," to ",(0,o.kt)("strong",{parentName:"td"},"CommonJS")," syntax.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"jest-preset-angular/presets/defaults-esm"),(0,o.kt)("br",null)),(0,o.kt)("td",{parentName:"tr",align:null},"TypeScript, JavaScript and HTML files (",(0,o.kt)("inlineCode",{parentName:"td"},"js"),", ",(0,o.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,o.kt)("inlineCode",{parentName:"td"},".html"),") will be transformed by ",(0,o.kt)("inlineCode",{parentName:"td"},"jest-preset-angular")," to ",(0,o.kt)("strong",{parentName:"td"},"ESM")," syntax.")))),(0,o.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,o.kt)("p",null,"In most cases, simply setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"preset")," key to the desired preset name in your Jest config should be enough to start\nusing TypeScript with Jest (assuming you added ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," to your ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies")," of course):"),(0,o.kt)(s.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"module.exports = {\n  // [...]\n  // Replace `jest-preset-angular` with the preset you want to use\n  // from the above list\n  preset: 'jest-preset-angular',\n};\n"))),(0,o.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  // [...]\n  // Replace `jest-preset-angular` with the preset you want to use\n  // from the above list\n  preset: 'jest-preset-angular',\n};\n\nexport default jestConfig;\n"))),(0,o.kt)(l.Z,{value:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  //...\n  "jest": {\n    // Replace `jest-preset-angular` with the preset you want to use\n    // from the above list\n    "preset": "jest-preset-angular"\n  }\n}\n')))),(0,o.kt)("h3",{id:"advanced"},"Advanced"),(0,o.kt)("p",null,"All presets come with default ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," config options.\nIf you want to override any of the options, you'll need to use the JavaScript version of Jest config,\ncopy the original options and override the options you need:"),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"If you choose to override ",(0,o.kt)("inlineCode",{parentName:"p"},"transform")," in order to point at a specific tsconfig, you will need to make sure that original ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest"),"\noptions provided through the default preset are defined to the ",(0,o.kt)("inlineCode",{parentName:"p"},"transform")," section too, otherwise you will get\nerrors.")),(0,o.kt)(s.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"const { defaultTransformerOptions } = require('jest-preset-angular/presets');\n// const { defaultTransformerOptions } = require('jest-preset-angular/presets')\n\nmodule.exports = {\n  // [...]\n  transform: {\n    '^.+\\\\.(ts|js|mjs|html|svg)$': [\n      'jest-preset-angular',\n      {\n        ...defaultTransformerOptions,\n        // [...your overriden options]\n      },\n    ],\n  },\n};\n"))),(0,o.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\nimport presets from 'jest-preset-angular/presets';\n\nconst jestConfig: Config = {\n  // [...]\n  transform: {\n    '^.+\\\\.(ts|js|mjs|html|svg)$': [\n      'jest-preset-angular',\n      {\n        ...presets.defaultTransformerOptions,\n        // [...your overriden options]\n      },\n    ],\n  },\n};\n\nexport default jestConfig;\n")))))}g.isMDXComponent=!0}}]);