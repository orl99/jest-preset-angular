"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9960],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,g=d["".concat(i,".").concat(c)]||d[c]||m[c]||s;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6010),s="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:n},t)}},4259:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),r=n(7294),s=n(6010),o=n(1048),l=n(3609),i=n(1943),u=n(2957),p="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,c=e.defaultValue,g=e.values,f=e.groupId,k=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var j=null===c?c:null!=(t=null!=c?c:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==j&&!b.some((function(e){return e.value===j})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+j+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.U)(),N=y.tabGroupChoices,w=y.setTabGroupChoices,x=(0,r.useState)(j),C=x[0],T=x[1],E=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var M=N[f];null!=M&&M!==C&&b.some((function(e){return e.value===M}))&&T(M)}var O=function(e){var t=e.currentTarget,n=E.indexOf(t),a=b[n].value;a!==C&&(S(t),T(a),null!=f&&w(f,String(a)))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=E.indexOf(e.currentTarget)+1;n=null!=(a=E[r])?a:E[0];break;case"ArrowLeft":var s,o=E.indexOf(e.currentTarget)-1;n=null!=(s=E[o])?s:E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},k)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return E.push(e)},onKeyDown:A,onFocus:O,onClick:O},o,{className:(0,s.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},2709:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return c}});var a=n(7462),r=n(3366),s=(n(7294),n(4137)),o=n(4259),l=n(425),i=["components"],u={id:"angular-13+",title:"Angular >=13"},p=void 0,m={unversionedId:"guides/angular-13+",id:"guides/angular-13+",title:"Angular >=13",description:"Angular 13 introduces ESM package format for Angular packages. jest-preset-angular",source:"@site/docs/guides/angular-13+.md",sourceDirName:"guides",slug:"/guides/angular-13+",permalink:"/jest-preset-angular/docs/next/guides/angular-13+",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/docs/guides/angular-13+.md",tags:[],version:"current",lastUpdatedBy:"Colum Ferry",lastUpdatedAt:1669238607,formattedLastUpdatedAt:"Nov 23, 2022",frontMatter:{id:"angular-13+",title:"Angular >=13"},sidebar:"docs",previous:{title:"Angular Ivy",permalink:"/jest-preset-angular/docs/next/guides/angular-ivy"},next:{title:"ESM Support",permalink:"/jest-preset-angular/docs/next/guides/esm-support"}},d={},c=[{value:"Migration steps from Angular &lt; 13",id:"migration-steps-from-angular--13",level:2},{value:"Using ES Modules",id:"using-es-modules",level:3},{value:"Potential issues with Angular 13 ESM package format and workaround",id:"potential-issues-with-angular-13-esm-package-format-and-workaround",level:2},{value:"<code>Cannot find modules</code> error when importing any deep paths from Angular ESM format packages",id:"cannot-find-modules-error-when-importing-any-deep-paths-from-angular-esm-format-packages",level:3},{value:"Usage with Angular libraries which are built with Angular CLI 13",id:"usage-with-angular-libraries-which-are-built-with-angular-cli-13",level:3}],g={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Angular 13")," introduces ESM package format for Angular packages. ",(0,s.kt)("inlineCode",{parentName:"p"},"jest-preset-angular"),"\ncurrently supports testing with Jest in ",(0,s.kt)("inlineCode",{parentName:"p"},"CommonJS")," mode with ",(0,s.kt)("strong",{parentName:"p"},"Angular 13")," using ",(0,s.kt)("a",{parentName:"p",href:"/jest-preset-angular/docs/next/getting-started/presets"},"default preset"),"."),(0,s.kt)("admonition",{type:"important"},(0,s.kt)("p",{parentName:"admonition"},"With Jest 28 and ",(0,s.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," ",(0,s.kt)("strong",{parentName:"p"},"v12.0.0"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"ng-jest-resolver")," is no longer required to have in Jest config. This\nresolver is also excluded from our default and default ESM presets.")),(0,s.kt)("p",null,"Starting from ",(0,s.kt)("strong",{parentName:"p"},"v11.0.0"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," introduces a few extra changes to be able to run Jest with ",(0,s.kt)("strong",{parentName:"p"},"Angular 13"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"moduleFileExtensions")," is updated to include ",(0,s.kt)("inlineCode",{parentName:"p"},"mjs")," files as accepted module format.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"transformIgnorePatterns")," is added to inform Jest to transform ",(0,s.kt)("inlineCode",{parentName:"p"},".mjs")," files.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"transform")," is updated to include ",(0,s.kt)("inlineCode",{parentName:"p"},".mjs")," extension to transform to ",(0,s.kt)("inlineCode",{parentName:"p"},"CommonJS")," codes."))),(0,s.kt)("h2",{id:"migration-steps-from-angular--13"},"Migration steps from Angular < 13"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Upgrade the project to ",(0,s.kt)("strong",{parentName:"p"},"Angular 13")," following ",(0,s.kt)("a",{parentName:"p",href:"https://update.angular.io/"},"https://update.angular.io/"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If one is using the default preset as following:"))),(0,s.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"module.exports = {\n  preset: 'jest-preset-angular',\n};\n"))),(0,s.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  preset: 'jest-preset-angular',\n};\n\nexport default jestConfig;\n")))),(0,s.kt)("p",null,"there are no migration steps required"),(0,s.kt)("h3",{id:"using-es-modules"},"Using ES Modules"),(0,s.kt)("p",null,"ES Modules support is new and may encounter issues. See ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/tree/main/examples/example-app-v13"},"example-app-v13")," for an example with tests that run using ESM, and using ESM + isolated."),(0,s.kt)("p",null,"Your ",(0,s.kt)("inlineCode",{parentName:"p"},"jest.config.js")," should be changed to something like:"),(0,s.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"const { pathsToModuleNameMapper } = require('ts-jest/utils');\nconst { paths } = require('./tsconfig.json').compilerOptions;\n\n/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */\nmodule.exports = {\n  preset: 'jest-preset-angular/presets/defaults-esm',\n  globals: {\n    'ts-jest': {\n      useESM: true,\n      stringifyContentPathRegex: '\\\\.(html|svg)$',\n      tsconfig: '<rootDir>/tsconfig-esm.spec.json',\n    },\n  },\n  moduleNameMapper: {\n    ...pathsToModuleNameMapper(paths, { prefix: '<rootDir>' }),\n    tslib: 'tslib/tslib.es6.js',\n  },\n  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],\n};\n"))),(0,s.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\nimport { pathsToModuleNameMapper } from 'ts-jest';\nimport { compilerOptions } from './tsconfig.json';\n\nconst jestConfig: Config = {\n  preset: 'jest-preset-angular/presets/defaults-esm',\n  globals: {\n    'ts-jest': {\n      useESM: true,\n      stringifyContentPathRegex: '\\\\.(html|svg)$',\n      tsconfig: '<rootDir>/tsconfig-esm.spec.json',\n    },\n  },\n  moduleNameMapper: {\n    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),\n    tslib: 'tslib/tslib.es6.js',\n  },\n  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],\n};\n\nexport default jestConfig;\n")))),(0,s.kt)("p",null,"Before upgrading to ng13 and switching to ES Modules, your ",(0,s.kt)("inlineCode",{parentName:"p"},"setup-jest.ts")," file most likely uses the preset ",(0,s.kt)("inlineCode",{parentName:"p"},"setup-jest"),", like the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// setup-jest.ts\nimport 'jest-preset-angular/setup-jest';\n")),(0,s.kt)("p",null,"or for ESM mode"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// setup-jest.ts\nimport 'jest-preset-angular/setup-jest.mjs';\n")),(0,s.kt)("h2",{id:"potential-issues-with-angular-13-esm-package-format-and-workaround"},"Potential issues with Angular 13 ESM package format and workaround"),(0,s.kt)("h3",{id:"cannot-find-modules-error-when-importing-any-deep-paths-from-angular-esm-format-packages"},(0,s.kt)("inlineCode",{parentName:"h3"},"Cannot find modules")," error when importing any deep paths from Angular ESM format packages"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Cannot find module '@angular/common/locales/xx' from 'src/app/app.component.spec.ts'\n")),(0,s.kt)("p",null,"To fix this issue, one needs to add ",(0,s.kt)("inlineCode",{parentName:"p"},"mjs")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"moduleFileExtensions")," as following"),(0,s.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"module.exports = {\n  // ...other options\n  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],\n};\n"))),(0,s.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  // ...other options\n  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],\n};\n\nexport default jestConfig;\n")))),(0,s.kt)("h3",{id:"usage-with-angular-libraries-which-are-built-with-angular-cli-13"},"Usage with Angular libraries which are built with Angular CLI 13"),(0,s.kt)("p",null,"Besides, the changes in Angular packages themselves, ",(0,s.kt)("strong",{parentName:"p"},"Angular")," libraries which are built with ",(0,s.kt)("strong",{parentName:"p"},"Angular CLI 13")," also introduce\nESM package format. Similar to Angular packages, Jest doesn't understand ",(0,s.kt)("inlineCode",{parentName:"p"},".mjs")," files which are in these new format\nlibraries in Jest ",(0,s.kt)("strong",{parentName:"p"},"CommonJS")," mode."),(0,s.kt)("p",null,"To fix this issue, one should modify ",(0,s.kt)("inlineCode",{parentName:"p"},"transformIgnorePatterns")," to be as following:"),(0,s.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"module.exports = {\n  // ...other options\n  transformIgnorePatterns: ['node_modules/(?!.*\\\\.mjs$)'],\n};\n"))),(0,s.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  // ...other options\n  transformIgnorePatterns: ['node_modules/(?!.*\\\\.mjs$)'],\n};\n\nexport default jestConfig;\n")))))}f.isMDXComponent=!0}}]);