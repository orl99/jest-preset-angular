"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5867],{5171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var s=t(5893),r=t(1151),a=t(3992),o=t(425);const l={id:"angular-13+",title:"Angular >=13"},i=void 0,u={id:"guides/angular-13+",title:"Angular >=13",description:"Angular 13 introduces ESM package format for Angular packages. jest-preset-angular",source:"@site/versioned_docs/version-13.0/guides/angular-13+.md",sourceDirName:"guides",slug:"/guides/angular-13+",permalink:"/jest-preset-angular/docs/guides/angular-13+",draft:!1,unlisted:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-13.0/guides/angular-13+.md",tags:[],version:"13.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1710096042,formattedLastUpdatedAt:"Mar 10, 2024",frontMatter:{id:"angular-13+",title:"Angular >=13"},sidebar:"docs",previous:{title:"Angular Ivy",permalink:"/jest-preset-angular/docs/guides/angular-ivy"},next:{title:"ESM Support",permalink:"/jest-preset-angular/docs/guides/esm-support"}},d={},c=[{value:"Migration steps from Angular &lt; 13",id:"migration-steps-from-angular--13",level:2},{value:"Using ES Modules",id:"using-es-modules",level:3},{value:"Potential issues with Angular 13 ESM package format and workaround",id:"potential-issues-with-angular-13-esm-package-format-and-workaround",level:2},{value:"<code>Cannot find modules</code> error when importing any deep paths from Angular ESM format packages",id:"cannot-find-modules-error-when-importing-any-deep-paths-from-angular-esm-format-packages",level:3},{value:"Usage with Angular libraries which are built with Angular CLI 13",id:"usage-with-angular-libraries-which-are-built-with-angular-cli-13",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Angular 13"})," introduces ESM package format for Angular packages. ",(0,s.jsx)(n.code,{children:"jest-preset-angular"}),"\ncurrently supports testing with Jest in ",(0,s.jsx)(n.code,{children:"CommonJS"})," mode with ",(0,s.jsx)(n.strong,{children:"Angular 13"})," using ",(0,s.jsx)(n.a,{href:"/jest-preset-angular/docs/getting-started/presets",children:"default preset"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"important",children:(0,s.jsxs)(n.p,{children:["With Jest 28 and ",(0,s.jsx)(n.code,{children:"jest-preset-angular"})," ",(0,s.jsx)(n.strong,{children:"v12.0.0"}),", ",(0,s.jsx)(n.code,{children:"ng-jest-resolver"})," is no longer required to have in Jest config. This\nresolver is also excluded from our default and default ESM presets."]})}),"\n",(0,s.jsxs)(n.p,{children:["Starting from ",(0,s.jsx)(n.strong,{children:"v11.0.0"}),", ",(0,s.jsx)(n.code,{children:"jest-preset-angular"})," introduces a few extra changes to be able to run Jest with ",(0,s.jsx)(n.strong,{children:"Angular 13"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"moduleFileExtensions"})," is updated to include ",(0,s.jsx)(n.code,{children:"mjs"})," files as accepted module format."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"transformIgnorePatterns"})," is added to inform Jest to transform ",(0,s.jsx)(n.code,{children:".mjs"})," files."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"transform"})," is updated to include ",(0,s.jsx)(n.code,{children:".mjs"})," extension to transform to ",(0,s.jsx)(n.code,{children:"CommonJS"})," codes."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"migration-steps-from-angular--13",children:"Migration steps from Angular < 13"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Upgrade the project to ",(0,s.jsx)(n.strong,{children:"Angular 13"})," following ",(0,s.jsx)(n.a,{href:"https://update.angular.io/",children:"guide"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If one is using the default preset as following:"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.Z,{groupId:"code-examples",children:[(0,s.jsx)(o.Z,{value:"js",label:"JavaScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:"tab",children:"module.exports = {\n  preset: 'jest-preset-angular',\n};\n"})})}),(0,s.jsx)(o.Z,{value:"ts",label:"TypeScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"tab",children:"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  preset: 'jest-preset-angular',\n};\n\nexport default jestConfig;\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"there are no migration steps required"}),"\n",(0,s.jsx)(n.h3,{id:"using-es-modules",children:"Using ES Modules"}),"\n",(0,s.jsxs)(n.p,{children:["ES Modules support is new and may encounter issues. See ",(0,s.jsx)(n.a,{href:"https://github.com/thymikee/jest-preset-angular/tree/main/examples/example-app-v13",children:"example-app-v13"})," for an example with tests that run using ESM, and using ESM + isolated."]}),"\n",(0,s.jsxs)(n.p,{children:["Your ",(0,s.jsx)(n.code,{children:"jest.config.js"})," should be changed to something like:"]}),"\n",(0,s.jsxs)(a.Z,{groupId:"code-examples",children:[(0,s.jsx)(o.Z,{value:"js",label:"JavaScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:"tab",children:"const { pathsToModuleNameMapper } = require('ts-jest/utils');\nconst { paths } = require('./tsconfig.json').compilerOptions;\n\n/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */\nmodule.exports = {\n  preset: 'jest-preset-angular/presets/defaults-esm',\n  transform: {\n    '^.+\\\\.(ts|js|html|svg)$': [\n      'jest-preset-angular',\n      {\n        tsconfig: '<rootDir>/tsconfig-esm.spec.json',\n        stringifyContentPathRegex: '\\\\.(html|svg)$',\n        isolatedModules: true,\n        useESM: true,\n      },\n    ],\n  },\n  moduleNameMapper: {\n    ...pathsToModuleNameMapper(paths, { prefix: '<rootDir>' }),\n    tslib: 'tslib/tslib.es6.js',\n  },\n  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],\n};\n"})})}),(0,s.jsx)(o.Z,{value:"ts",label:"TypeScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"tab",children:"import type { Config } from 'jest';\nimport { pathsToModuleNameMapper } from 'ts-jest';\nimport { compilerOptions } from './tsconfig.json';\n\nconst jestConfig: Config = {\n  preset: 'jest-preset-angular/presets/defaults-esm',\n  transform: {\n    '^.+\\\\.(ts|js|html|svg)$': [\n      'jest-preset-angular',\n      {\n        tsconfig: '<rootDir>/tsconfig-esm.spec.json',\n        stringifyContentPathRegex: '\\\\.(html|svg)$',\n        isolatedModules: true,\n        useESM: true,\n      },\n    ],\n  },\n  moduleNameMapper: {\n    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),\n    tslib: 'tslib/tslib.es6.js',\n  },\n  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],\n};\n\nexport default jestConfig;\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Before upgrading to ng13 and switching to ES Modules, your ",(0,s.jsx)(n.code,{children:"setup-jest.ts"})," file most likely uses the preset ",(0,s.jsx)(n.code,{children:"setup-jest"}),", like the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// setup-jest.ts\nimport 'jest-preset-angular/setup-jest';\n"})}),"\n",(0,s.jsx)(n.p,{children:"or for ESM mode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// setup-jest.ts\nimport 'jest-preset-angular/setup-jest.mjs';\n"})}),"\n",(0,s.jsx)(n.h2,{id:"potential-issues-with-angular-13-esm-package-format-and-workaround",children:"Potential issues with Angular 13 ESM package format and workaround"}),"\n",(0,s.jsxs)(n.h3,{id:"cannot-find-modules-error-when-importing-any-deep-paths-from-angular-esm-format-packages",children:[(0,s.jsx)(n.code,{children:"Cannot find modules"})," error when importing any deep paths from Angular ESM format packages"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Cannot find module '@angular/common/locales/xx' from 'src/app/app.component.spec.ts'\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To fix this issue, one needs to add ",(0,s.jsx)(n.code,{children:"mjs"})," to ",(0,s.jsx)(n.code,{children:"moduleFileExtensions"})," as following"]}),"\n",(0,s.jsxs)(a.Z,{groupId:"code-examples",children:[(0,s.jsx)(o.Z,{value:"js",label:"JavaScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:"tab",children:"module.exports = {\n  // ...other options\n  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],\n};\n"})})}),(0,s.jsx)(o.Z,{value:"ts",label:"TypeScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"tab",children:"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  // ...other options\n  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],\n};\n\nexport default jestConfig;\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"usage-with-angular-libraries-which-are-built-with-angular-cli-13",children:"Usage with Angular libraries which are built with Angular CLI 13"}),"\n",(0,s.jsxs)(n.p,{children:["Besides, the changes in Angular packages themselves, ",(0,s.jsx)(n.strong,{children:"Angular"})," libraries which are built with ",(0,s.jsx)(n.strong,{children:"Angular CLI 13"})," also introduce\nESM package format. Similar to Angular packages, Jest doesn't understand ",(0,s.jsx)(n.code,{children:".mjs"})," files which are in these new format\nlibraries in Jest ",(0,s.jsx)(n.strong,{children:"CommonJS"})," mode."]}),"\n",(0,s.jsxs)(n.p,{children:["To fix this issue, one should modify ",(0,s.jsx)(n.code,{children:"transformIgnorePatterns"})," to be as following:"]}),"\n",(0,s.jsxs)(a.Z,{groupId:"code-examples",children:[(0,s.jsx)(o.Z,{value:"js",label:"JavaScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:"tab",children:"module.exports = {\n  // ...other options\n  transformIgnorePatterns: ['node_modules/(?!.*\\\\.mjs$)'],\n};\n"})})}),(0,s.jsx)(o.Z,{value:"ts",label:"TypeScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"tab",children:"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  // ...other options\n  transformIgnorePatterns: ['node_modules/(?!.*\\\\.mjs$)'],\n};\n\nexport default jestConfig;\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},425:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var s=t(512);const r={tabItem:"tabItem_Ymn6"};var a=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,o),hidden:t,children:n})}},3992:(e,n,t)=>{t.d(n,{Z:()=>y});var s=t(7294),r=t(512),a=t(2957),o=t(6550),l=t(1270),i=t(5238),u=t(3609),d=t(2560);function c(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=p(e),[o,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[u,c]=g({queryString:t,groupId:r}),[m,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Nk)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),f=(()=>{const e=u??m;return h({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),j(e)}),[c,j,a]),tabValues:a}}var j=t(1048);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function b(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),r=l[t].value;r!==s&&(u(n),o(r))},c=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:c,onClick:d,...a,className:(0,r.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,x.jsx)(b,{...e,...n}),(0,x.jsx)(v,{...e,...n})]})}function y(e){const n=(0,j.Z)();return(0,x.jsx)(w,{...e,children:c(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var s=t(7294);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);