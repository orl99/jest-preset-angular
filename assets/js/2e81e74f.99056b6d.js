"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1753],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=s(n),g=a,d=f["".concat(i,".").concat(g)]||f[g]||p[g]||l;return n?r.createElement(d,u(u({ref:t},c),{},{components:n})):r.createElement(d,u({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var s=2;s<l;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(6010),l="tabItem_Ymn6";function u(e){var t=e.children,n=e.hidden,u=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,u),hidden:n},t)}},3992:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(7462),a=n(7294),l=n(6010),u=n(2957),o=n(6775),i=n(5238),s=n(3609),c=n(2560);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function f(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function g(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,l=(0,o.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,i._X)(u),(0,a.useCallback)((function(e){if(u){var t=new URLSearchParams(l.location.search);t.set(u,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[u,l])]}function m(e){var t,n,r,l,u=e.defaultValue,o=e.queryString,i=void 0!==o&&o,s=e.groupId,p=f(e),m=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:p})})),v=m[0],b=m[1],y=d({queryString:i,groupId:s}),h=y[0],k=y[1],j=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),r=n[0],l=n[1],[r,(0,a.useCallback)((function(e){t&&l.set(e)}),[t,l])]),w=j[0],T=j[1],N=function(){var e=null!=h?h:w;return g({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){N&&b(N)}),[N]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!g({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),k(e),T(e)}),[k,T,p]),tabValues:p}}var v=n(1048),b="tabList__CuJ",y="tabItem_LNqP";function h(e){var t=e.className,n=e.block,o=e.selectedValue,i=e.selectValue,s=e.tabValues,c=[],p=(0,u.o5)().blockElementScrollPositionUntilNextRender,f=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==o&&(p(t),i(r))},g=function(e){var t,n=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var l,u=c.indexOf(e.currentTarget)-1;n=null!=(l=c[u])?l:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,u=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return c.push(e)},onKeyDown:g,onClick:f},u,{className:(0,l.Z)("tabs__item",y,null==u?void 0:u.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function k(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var l=n.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function j(e){var t=m(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",b)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function w(e){var t=(0,v.Z)();return a.createElement(j,(0,r.Z)({key:String(t)},e))}},8209:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return g}});var r=n(7462),a=n(3366),l=(n(7294),n(4137)),u=n(3992),o=n(425),i=["components"],s={id:"angular-ivy",title:"Angular Ivy"},c=void 0,p={unversionedId:"guides/angular-ivy",id:"version-13.0/guides/angular-ivy",title:"Angular Ivy",description:"Starting from v9.0.0+, jest-preset-angular is fully compatible with Angular Ivy. To make sure that Jest uses the",source:"@site/versioned_docs/version-13.0/guides/angular-ivy.md",sourceDirName:"guides",slug:"/guides/angular-ivy",permalink:"/jest-preset-angular/docs/guides/angular-ivy",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-13.0/guides/angular-ivy.md",tags:[],version:"13.0",lastUpdatedBy:"Sergiu",lastUpdatedAt:1680786697,formattedLastUpdatedAt:"Apr 6, 2023",frontMatter:{id:"angular-ivy",title:"Angular Ivy"},sidebar:"version-13.0-docs",previous:{title:"Test environment",permalink:"/jest-preset-angular/docs/getting-started/test-environment"},next:{title:"Angular >=13",permalink:"/jest-preset-angular/docs/guides/angular-13+"}},f={},g=[{value:"Control ngcc processing",id:"control-ngcc-processing",level:2}],d={toc:g};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Starting from ",(0,l.kt)("strong",{parentName:"p"},"v9.0.0+"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," is fully compatible with Angular Ivy. To make sure that Jest uses the\nAngular Ivy, you must run ",(0,l.kt)("inlineCode",{parentName:"p"},"ngcc")," before running tests. ",(0,l.kt)("inlineCode",{parentName:"p"},"ngcc")," will transform all Angular-format packages to be compatible\nwith Ivy compiler."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," also provides a Jest global setup file to help you to run ",(0,l.kt)("inlineCode",{parentName:"p"},"ngcc")," with Jest. Add to the following section:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"to your root ",(0,l.kt)("inlineCode",{parentName:"li"},"jest.config.js"))),(0,l.kt)(u.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"module.exports = {\n  //...\n  globalSetup: 'jest-preset-angular/global-setup',\n};\n"))),(0,l.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  //...\n  globalSetup: 'jest-preset-angular/global-setup',\n};\n\nexport default jestConfig;\n"))),(0,l.kt)(o.Z,{value:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  "jest": {\n    "globalSetup": "jest-preset-angular/global-setup"\n  }\n}\n')))),(0,l.kt)("h2",{id:"control-ngcc-processing"},"Control ngcc processing"),(0,l.kt)("p",null,"Since ",(0,l.kt)("strong",{parentName:"p"},"v12.0.0"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," provide a possibility to skip ",(0,l.kt)("inlineCode",{parentName:"p"},"ngcc")," via ",(0,l.kt)("inlineCode",{parentName:"p"},"globalThis")," by doing the following"),(0,l.kt)(u.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"globalThis.ngJest = {\n  skipNgcc: true,\n  tsconfig: 'tsconfig.spec.json', // this is the project root tsconfig\n};\n\nmodule.exports = {\n  //...\n  globalSetup: 'jest-preset-angular/global-setup',\n};\n"))),(0,l.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nglobalThis.ngJest = {\n  skipNgcc: true,\n  tsconfig: 'tsconfig.spec.json', // this is the project root tsconfig\n};\n\nconst jestConfig: Config = {\n  //...\n  globalSetup: 'jest-preset-angular/global-setup',\n};\n\nexport default jestConfig;\n")))))}m.isMDXComponent=!0}}]);