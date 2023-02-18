"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9960],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||s;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6010),s="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:n},t)}},3992:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(7462),r=n(7294),s=n(6010),o=n(6775),l=n(5238),i=n(3609),u=n(2560);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,i.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function c(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,s=(0,o.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(s.location.search);t.set(i,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[i,s])]}function g(e){var t,n,a,s,o=e.defaultValue,l=e.queryString,i=void 0!==l&&l,p=e.groupId,g=m(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:g})})),h=f[0],k=f[1],b=d({queryString:i,groupId:p}),v=b[0],y=b[1],j=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),n=(0,u.Nk)(t),a=n[0],s=n[1],[a,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),N=j[0],w=j[1],x=function(){var e=null!=v?v:N;return c({value:e,tabValues:g})?e:null}();return(0,r.useLayoutEffect)((function(){x&&k(x)}),[x]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!c({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);k(e),y(e),w(e)}),[y,w,g]),tabValues:g}}var f=n(2957),h=n(1048),k="tabList__CuJ",b="tabItem_LNqP";function v(e){var t=e.className,n=e.block,o=e.selectedValue,l=e.selectValue,i=e.tabValues,u=[],p=(0,f.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=u.indexOf(t),a=i[n].value;a!==o&&(p(t),l(a))},c=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,r=u.indexOf(e.currentTarget)+1;n=null!=(a=u[r])?a:u[0];break;case"ArrowLeft":var s,o=u.indexOf(e.currentTarget)-1;n=null!=(s=u[o])?s:u[u.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},i.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return u.push(e)},onKeyDown:c,onClick:m},l,{className:(0,s.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var s=n.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function j(e){var t=g(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",k)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){var t=(0,h.Z)();return r.createElement(j,(0,a.Z)({key:String(t)},e))}},2709:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return d}});var a=n(7462),r=n(3366),s=(n(7294),n(4137)),o=n(3992),l=n(425),i=["components"],u={id:"angular-13+",title:"Angular >=13"},p=void 0,m={unversionedId:"guides/angular-13+",id:"guides/angular-13+",title:"Angular >=13",description:"Angular 13 introduces ESM package format for Angular packages. jest-preset-angular",source:"@site/docs/guides/angular-13+.md",sourceDirName:"guides",slug:"/guides/angular-13+",permalink:"/jest-preset-angular/docs/next/guides/angular-13+",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/docs/guides/angular-13+.md",tags:[],version:"current",lastUpdatedBy:"Ahn",lastUpdatedAt:1676727899,formattedLastUpdatedAt:"Feb 18, 2023",frontMatter:{id:"angular-13+",title:"Angular >=13"},sidebar:"docs",previous:{title:"Angular Ivy",permalink:"/jest-preset-angular/docs/next/guides/angular-ivy"},next:{title:"ESM Support",permalink:"/jest-preset-angular/docs/next/guides/esm-support"}},c={},d=[{value:"Migration steps from Angular &lt; 13",id:"migration-steps-from-angular--13",level:2},{value:"Using ES Modules",id:"using-es-modules",level:3},{value:"Potential issues with Angular 13 ESM package format and workaround",id:"potential-issues-with-angular-13-esm-package-format-and-workaround",level:2},{value:"<code>Cannot find modules</code> error when importing any deep paths from Angular ESM format packages",id:"cannot-find-modules-error-when-importing-any-deep-paths-from-angular-esm-format-packages",level:3},{value:"Usage with Angular libraries which are built with Angular CLI 13",id:"usage-with-angular-libraries-which-are-built-with-angular-cli-13",level:3}],g={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Angular 13")," introduces ESM package format for Angular packages. ",(0,s.kt)("inlineCode",{parentName:"p"},"jest-preset-angular"),"\ncurrently supports testing with Jest in ",(0,s.kt)("inlineCode",{parentName:"p"},"CommonJS")," mode with ",(0,s.kt)("strong",{parentName:"p"},"Angular 13")," using ",(0,s.kt)("a",{parentName:"p",href:"/jest-preset-angular/docs/next/getting-started/presets"},"default preset"),"."),(0,s.kt)("admonition",{type:"important"},(0,s.kt)("p",{parentName:"admonition"},"With Jest 28 and ",(0,s.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," ",(0,s.kt)("strong",{parentName:"p"},"v12.0.0"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"ng-jest-resolver")," is no longer required to have in Jest config. This\nresolver is also excluded from our default and default ESM presets.")),(0,s.kt)("p",null,"Starting from ",(0,s.kt)("strong",{parentName:"p"},"v11.0.0"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," introduces a few extra changes to be able to run Jest with ",(0,s.kt)("strong",{parentName:"p"},"Angular 13"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"moduleFileExtensions")," is updated to include ",(0,s.kt)("inlineCode",{parentName:"p"},"mjs")," files as accepted module format.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"transformIgnorePatterns")," is added to inform Jest to transform ",(0,s.kt)("inlineCode",{parentName:"p"},".mjs")," files.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"transform")," is updated to include ",(0,s.kt)("inlineCode",{parentName:"p"},".mjs")," extension to transform to ",(0,s.kt)("inlineCode",{parentName:"p"},"CommonJS")," codes."))),(0,s.kt)("h2",{id:"migration-steps-from-angular--13"},"Migration steps from Angular < 13"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Upgrade the project to ",(0,s.kt)("strong",{parentName:"p"},"Angular 13")," following ",(0,s.kt)("a",{parentName:"p",href:"https://update.angular.io/"},"https://update.angular.io/"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If one is using the default preset as following:"))),(0,s.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"module.exports = {\n  preset: 'jest-preset-angular',\n};\n"))),(0,s.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  preset: 'jest-preset-angular',\n};\n\nexport default jestConfig;\n")))),(0,s.kt)("p",null,"there are no migration steps required"),(0,s.kt)("h3",{id:"using-es-modules"},"Using ES Modules"),(0,s.kt)("p",null,"ES Modules support is new and may encounter issues. See ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/tree/main/examples/example-app-v13"},"example-app-v13")," for an example with tests that run using ESM, and using ESM + isolated."),(0,s.kt)("p",null,"Your ",(0,s.kt)("inlineCode",{parentName:"p"},"jest.config.js")," should be changed to something like:"),(0,s.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"const { pathsToModuleNameMapper } = require('ts-jest/utils');\nconst { paths } = require('./tsconfig.json').compilerOptions;\n\n/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */\nmodule.exports = {\n  preset: 'jest-preset-angular/presets/defaults-esm',\n  transform: {\n    '^.+\\\\.(ts|js|html|svg)$': [\n      'jest-preset-angular',\n      {\n        tsconfig: '<rootDir>/tsconfig-esm.spec.json',\n        stringifyContentPathRegex: '\\\\.(html|svg)$',\n        isolatedModules: true,\n        useESM: true,\n      },\n    ],\n  },\n  moduleNameMapper: {\n    ...pathsToModuleNameMapper(paths, { prefix: '<rootDir>' }),\n    tslib: 'tslib/tslib.es6.js',\n  },\n  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],\n};\n"))),(0,s.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\nimport { pathsToModuleNameMapper } from 'ts-jest';\nimport { compilerOptions } from './tsconfig.json';\n\nconst jestConfig: Config = {\n  preset: 'jest-preset-angular/presets/defaults-esm',\n  transform: {\n    '^.+\\\\.(ts|js|html|svg)$': [\n      'jest-preset-angular',\n      {\n        tsconfig: '<rootDir>/tsconfig-esm.spec.json',\n        stringifyContentPathRegex: '\\\\.(html|svg)$',\n        isolatedModules: true,\n        useESM: true,\n      },\n    ],\n  },\n  moduleNameMapper: {\n    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),\n    tslib: 'tslib/tslib.es6.js',\n  },\n  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],\n};\n\nexport default jestConfig;\n")))),(0,s.kt)("p",null,"Before upgrading to ng13 and switching to ES Modules, your ",(0,s.kt)("inlineCode",{parentName:"p"},"setup-jest.ts")," file most likely uses the preset ",(0,s.kt)("inlineCode",{parentName:"p"},"setup-jest"),", like the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// setup-jest.ts\nimport 'jest-preset-angular/setup-jest';\n")),(0,s.kt)("p",null,"or for ESM mode"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// setup-jest.ts\nimport 'jest-preset-angular/setup-jest.mjs';\n")),(0,s.kt)("h2",{id:"potential-issues-with-angular-13-esm-package-format-and-workaround"},"Potential issues with Angular 13 ESM package format and workaround"),(0,s.kt)("h3",{id:"cannot-find-modules-error-when-importing-any-deep-paths-from-angular-esm-format-packages"},(0,s.kt)("inlineCode",{parentName:"h3"},"Cannot find modules")," error when importing any deep paths from Angular ESM format packages"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Cannot find module '@angular/common/locales/xx' from 'src/app/app.component.spec.ts'\n")),(0,s.kt)("p",null,"To fix this issue, one needs to add ",(0,s.kt)("inlineCode",{parentName:"p"},"mjs")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"moduleFileExtensions")," as following"),(0,s.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"module.exports = {\n  // ...other options\n  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],\n};\n"))),(0,s.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  // ...other options\n  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],\n};\n\nexport default jestConfig;\n")))),(0,s.kt)("h3",{id:"usage-with-angular-libraries-which-are-built-with-angular-cli-13"},"Usage with Angular libraries which are built with Angular CLI 13"),(0,s.kt)("p",null,"Besides, the changes in Angular packages themselves, ",(0,s.kt)("strong",{parentName:"p"},"Angular")," libraries which are built with ",(0,s.kt)("strong",{parentName:"p"},"Angular CLI 13")," also introduce\nESM package format. Similar to Angular packages, Jest doesn't understand ",(0,s.kt)("inlineCode",{parentName:"p"},".mjs")," files which are in these new format\nlibraries in Jest ",(0,s.kt)("strong",{parentName:"p"},"CommonJS")," mode."),(0,s.kt)("p",null,"To fix this issue, one should modify ",(0,s.kt)("inlineCode",{parentName:"p"},"transformIgnorePatterns")," to be as following:"),(0,s.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"module.exports = {\n  // ...other options\n  transformIgnorePatterns: ['node_modules/(?!.*\\\\.mjs$)'],\n};\n"))),(0,s.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  // ...other options\n  transformIgnorePatterns: ['node_modules/(?!.*\\\\.mjs$)'],\n};\n\nexport default jestConfig;\n")))))}f.isMDXComponent=!0}}]);