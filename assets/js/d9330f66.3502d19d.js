"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2252],{5397:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=s(5893),r=s(1151),a=s(3992),o=s(425);const l={id:"esm-support",title:"ESM Support"},i=void 0,u={id:"guides/esm-support",title:"ESM Support",description:"To use jest-preset-angular with ESM support, you'll first need to check ESM Jest documentation.",source:"@site/versioned_docs/version-13.0/guides/esm-support.md",sourceDirName:"guides",slug:"/guides/esm-support",permalink:"/jest-preset-angular/docs/guides/esm-support",draft:!1,unlisted:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-13.0/guides/esm-support.md",tags:[],version:"13.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1706781632,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{id:"esm-support",title:"ESM Support"},sidebar:"docs",previous:{title:"Angular >=13",permalink:"/jest-preset-angular/docs/guides/angular-13+"},next:{title:"Configure other JSDOM versions",permalink:"/jest-preset-angular/docs/guides/jsdom-version"}},c={},d=[{value:"Examples",id:"examples",level:3},{value:"Manual configuration",id:"manual-configuration",level:4},{value:"Use ESM presets",id:"use-esm-presets",level:4}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["To use ",(0,n.jsx)(t.code,{children:"jest-preset-angular"})," with ESM support, you'll first need to check ",(0,n.jsx)(t.a,{href:"https://jestjs.io/docs/en/ecmascript-modules",children:"ESM Jest documentation"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"jest-preset-angular"})," supports ESM via a ",(0,n.jsx)(t.code,{children:"ts-jest"})," config option ",(0,n.jsx)(t.a,{href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/options/useESM",children:"useESM"})," in combination with jest config option ",(0,n.jsx)(t.a,{href:"https://jestjs.io/docs/en/configuration#extensionstotreatasesm-arraystring",children:"extensionsToTreatAsEsm"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["There is also a ",(0,n.jsx)(t.a,{href:"/jest-preset-angular/docs/getting-started/presets",children:"preset"})," to work with ESM."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["We have ",(0,n.jsx)(t.a,{href:"https://github.com/thymikee/jest-preset-angular/tree/main/examples",children:"example apps"})," which contains base ESM setup to work with Jest and Angular."]})}),"\n",(0,n.jsxs)(t.p,{children:["Besides, there is ",(0,n.jsx)(t.code,{children:"setup-jest.mjs"})," to add to Jest setup file to ensure that Jest can set up test environment properly."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import 'jest-preset-angular/setup-jest.mjs';\n"})}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.h4,{id:"manual-configuration",children:"Manual configuration"}),"\n",(0,n.jsxs)(a.Z,{groupId:"code-examples",children:[(0,n.jsx)(o.Z,{value:"js",label:"JavaScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"tab",children:"module.exports = {\n  //...\n  extensionsToTreatAsEsm: ['.ts'],\n  transform: {\n    '^.+\\\\.(ts|js|html)$': [\n      'jest-preset-angular',\n      {\n        tsconfig: '<rootDir>/tsconfig.spec.json',\n        stringifyContentPathRegex: '\\\\.(html)$',\n        useESM: true,\n      },\n    ],\n  },\n};\n"})})}),(0,n.jsx)(o.Z,{value:"ts",label:"TypeScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  //...\n  extensionsToTreatAsEsm: ['.ts'],\n  transform: {\n    '^.+\\\\.(ts|js|html|svg)$': [\n      'jest-preset-angular',\n      {\n        tsconfig: '<rootDir>/tsconfig.spec.json',\n        stringifyContentPathRegex: '\\\\.(html|svg)$',\n        useESM: true,\n      },\n    ],\n  },\n};\n\nexport default jestConfig;\n"})})}),(0,n.jsx)(o.Z,{value:"JSON",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'{\n  //...\n  "jest": {\n    "extensionsToTreatAsEsm": [".ts"],\n    "transform": {\n      "^.+\\\\.(ts|js|html|svg)$": [\n        "jest-preset-angular",\n        {\n          "tsconfig": "<rootDir>/tsconfig.spec.json",\n          "stringifyContentPathRegex": "\\\\.(html|svg)$",\n          "useESM": true,\n        },\n      ],\n    },\n  }\n}\n'})})})]}),"\n",(0,n.jsx)(t.h4,{id:"use-esm-presets",children:"Use ESM presets"}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["Jest will attempt to load ",(0,n.jsx)(t.strong,{children:"ESM"})," files from ",(0,n.jsx)(t.code,{children:"node_modules"})," with default ",(0,n.jsx)(t.code,{children:"jest-resolve"})," which usually works for most of the cases.\nHowever, there are cases like Angular libraries ",(0,n.jsx)(t.strong,{children:"ESM"})," built files or ",(0,n.jsx)(t.strong,{children:"ESM"})," files which are outside ",(0,n.jsx)(t.code,{children:"node_modules"})," might not be loaded\ncorrectly."]}),(0,n.jsxs)(t.p,{children:["To fix that, one can use ",(0,n.jsx)(t.code,{children:"moduleNameMapper"})," in jest config to instruct Jest to load the correct ",(0,n.jsx)(t.strong,{children:"ESM"})," files or create a\ncustom Jest ",(0,n.jsx)(t.a,{href:"https://jestjs.io/docs/configuration#resolver-string",children:"resolver"}),"."]})]}),"\n",(0,n.jsxs)(a.Z,{groupId:"code-examples",children:[(0,n.jsx)(o.Z,{value:"js",label:"JavaScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"tab",children:"module.exports = {\n  //...\n  preset: 'jest-preset-angular/presets/defaults-esm',\n};\n"})})}),(0,n.jsx)(o.Z,{value:"ts",label:"TypeScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"import type { Config } from 'jest';\n\nconst jestConfig = {\n  //...\n  preset: 'jest-preset-angular/presets/defaults-esm',\n};\n\nexport default jestConfig;\n"})})}),(0,n.jsx)(o.Z,{value:"JSON",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'// OR package.json\n{\n  //...\n  "jest": {\n    "preset": "jest-preset-angular/presets/defaults-esm"\n  }\n}\n'})})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},425:(e,t,s)=>{s.d(t,{Z:()=>o});s(7294);var n=s(512);const r={tabItem:"tabItem_Ymn6"};var a=s(5893);function o(e){let{children:t,hidden:s,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,o),hidden:s,children:t})}},3992:(e,t,s)=>{s.d(t,{Z:()=>y});var n=s(7294),r=s(512),a=s(2957),o=s(6550),l=s(1270),i=s(5238),u=s(3609),c=s(2560);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function h(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:s}=e;const r=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,i._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function g(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,a=p(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[u,d]=m({queryString:s,groupId:r}),[g,f]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Nk)(s);return[r,(0,n.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),j=(()=>{const e=u??g;return h({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{j&&i(j)}),[j]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=s(1048);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=s(5893);function b(e){let{className:t,block:s,selectedValue:n,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const t=e.currentTarget,s=i.indexOf(t),r=l[s].value;r!==n&&(u(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;t=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;t=i[s]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},t),children:l.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,r.Z)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function v(e){let{lazy:t,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function S(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,x.jsx)(b,{...e,...t}),(0,x.jsx)(v,{...e,...t})]})}function y(e){const t=(0,f.Z)();return(0,x.jsx)(S,{...e,children:d(e.children)},String(t))}},1151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>o});var n=s(7294);const r={},a=n.createContext(r);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);