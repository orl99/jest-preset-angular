"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1752],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),s="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:n},t)}},4259:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(7294),s=n(6010),o=n(1048),l=n(3609),i=n(1943),u=n(2957),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,m=e.defaultValue,f=e.values,g=e.groupId,b=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.l)(y,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),j=N.tabGroupChoices,w=N.setTabGroupChoices,T=(0,a.useState)(k),C=T[0],x=T[1],O=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var S=j[g];null!=S&&S!==C&&y.some((function(e){return e.value===S}))&&x(S)}var P=function(e){var t=e.currentTarget,n=O.indexOf(t),r=y[n].value;r!==C&&(E(t),x(r),null!=g&&w(g,String(r)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=O.indexOf(e.currentTarget)+1;n=null!=(r=O[a])?r:O[0];break;case"ArrowLeft":var s,o=O.indexOf(e.currentTarget)-1;n=null!=(s=O[o])?s:O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},b)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return O.push(e)},onKeyDown:I,onFocus:P,onClick:P},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},3534:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var r=n(7462),a=n(3366),s=(n(7294),n(4137)),o=n(4259),l=n(425),i=["components"],u={id:"presets",title:"Presets"},p=void 0,c={unversionedId:"getting-started/presets",id:"getting-started/presets",title:"Presets",description:"The presets",source:"@site/docs/getting-started/presets.md",sourceDirName:"getting-started",slug:"/getting-started/presets",permalink:"/jest-preset-angular/docs/next/getting-started/presets",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/docs/getting-started/presets.md",tags:[],version:"current",lastUpdatedBy:"Colum Ferry",lastUpdatedAt:1669238607,formattedLastUpdatedAt:"Nov 23, 2022",frontMatter:{id:"presets",title:"Presets"},sidebar:"docs",previous:{title:"Installation",permalink:"/jest-preset-angular/docs/next/getting-started/installation"},next:{title:"Options",permalink:"/jest-preset-angular/docs/next/getting-started/options"}},d={},m=[{value:"The presets",id:"the-presets",level:3},{value:"Basic usage",id:"basic-usage",level:3},{value:"Advanced",id:"advanced",level:3}],f={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"the-presets"},"The presets"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," comes with 2 presets, covering most of the project's base configuration:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Preset name"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"jest-preset-angular/presets/default"),(0,s.kt)("br",null),"or ",(0,s.kt)("inlineCode",{parentName:"td"},"jest-preset-angular")),(0,s.kt)("td",{parentName:"tr",align:null},"TypeScript, JavaScript and HTML files (",(0,s.kt)("inlineCode",{parentName:"td"},"js"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".html"),") will be transformed by ",(0,s.kt)("inlineCode",{parentName:"td"},"jest-preset-angular")," to ",(0,s.kt)("strong",{parentName:"td"},"CommonJS")," syntax.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"jest-preset-angular/presets/defaults-esm"),(0,s.kt)("br",null)),(0,s.kt)("td",{parentName:"tr",align:null},"TypeScript, JavaScript and HTML files (",(0,s.kt)("inlineCode",{parentName:"td"},"js"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".html"),") will be transformed by ",(0,s.kt)("inlineCode",{parentName:"td"},"jest-preset-angular")," to ",(0,s.kt)("strong",{parentName:"td"},"ESM")," syntax.")))),(0,s.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,s.kt)("p",null,"In most cases, simply setting the ",(0,s.kt)("inlineCode",{parentName:"p"},"preset")," key to the desired preset name in your Jest config should be enough to start\nusing TypeScript with Jest (assuming you added ",(0,s.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," to your ",(0,s.kt)("inlineCode",{parentName:"p"},"devDependencies")," of course):"),(0,s.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"module.exports = {\n  // [...]\n  // Replace `jest-preset-angular` with the preset you want to use\n  // from the above list\n  preset: 'jest-preset-angular',\n};\n"))),(0,s.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  // [...]\n  // Replace `jest-preset-angular` with the preset you want to use\n  // from the above list\n  preset: 'jest-preset-angular',\n};\n\nexport default jestConfig;\n"))),(0,s.kt)(l.Z,{value:"JSON",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  //...\n  "jest": {\n    // Replace `jest-preset-angular` with the preset you want to use\n    // from the above list\n    "preset": "jest-preset-angular"\n  }\n}\n')))),(0,s.kt)("h3",{id:"advanced"},"Advanced"),(0,s.kt)("p",null,"All presets come with default ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," config options.\nIf you want to override any of the options, you'll need to use the JavaScript version of Jest config,\ncopy the original options and override the options you need:"),(0,s.kt)("admonition",{type:"important"},(0,s.kt)("p",{parentName:"admonition"},"If you choose to override ",(0,s.kt)("inlineCode",{parentName:"p"},"globals")," in order to point at a specific tsconfig, you will need to make sure that original ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest"),"\noptions provided through the default preset are defined to the ",(0,s.kt)("inlineCode",{parentName:"p"},"globals.ts-jest")," section too, otherwise you will get\nerrors.")),(0,s.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"const { defaults: jestNgPreset } = require('jest-preset-angular/presets');\n// const { defaultsESM: jestNgPreset } = require('jest-preset-angular/presets')\n\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      ...jestNgPreset.globals['ts-jest'],\n      // [...your overriden options]\n    },\n  },\n};\n"))),(0,s.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\nimport presets from 'jest-preset-angular/presets';\n\nconst jestConfig: Config = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      ...presets.defaults.globals['ts-jest'],\n      // [...your overriden options]\n    },\n  },\n};\n\nexport default jestConfig;\n")))))}g.isMDXComponent=!0}}]);