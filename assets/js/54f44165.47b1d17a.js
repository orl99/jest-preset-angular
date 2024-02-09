"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[152],{3777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=n(5893),r=n(1151),a=n(3992),l=n(425);const o={id:"installation",title:"Installation"},i=void 0,c={id:"getting-started/installation",title:"Installation",description:"Dependencies",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/jest-preset-angular/docs/next/getting-started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/docs/getting-started/installation.md",tags:[],version:"current",lastUpdatedBy:"Anh Pham",lastUpdatedAt:1707510714,formattedLastUpdatedAt:"Feb 9, 2024",frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"Processing flow",permalink:"/jest-preset-angular/docs/next/processing"},next:{title:"Presets",permalink:"/jest-preset-angular/docs/next/getting-started/presets"}},u={},d=[{value:"Dependencies",id:"dependencies",level:3},{value:"NPM",id:"npm",level:4},{value:"Yarn",id:"yarn",level:4},{value:"Configuration",id:"configuration",level:3},{value:"Customizing",id:"customizing",level:3},{value:"Global mocks",id:"global-mocks",level:4},{value:"Avoid karma conflicts",id:"avoid-karma-conflicts",level:4}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsxs)(t.p,{children:["You can install ",(0,s.jsx)(t.code,{children:"jest-preset-angular"})," and dependencies all at once with one of the following commands."]}),"\n",(0,s.jsx)(t.h4,{id:"npm",children:"NPM"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"npm install -D jest jest-preset-angular @types/jest\n"})}),"\n",(0,s.jsx)(t.h4,{id:"yarn",children:"Yarn"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"yarn add -D jest jest-preset-angular @types/jest\n"})}),"\n",(0,s.jsx)(t.h3,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(t.admonition,{type:"important",children:(0,s.jsxs)(t.p,{children:["Angular doesn't support native ",(0,s.jsx)(t.code,{children:"async/await"})," in testing with ",(0,s.jsx)(t.code,{children:"target"})," higher than ",(0,s.jsx)(t.code,{children:"ES2016"}),", see ",(0,s.jsx)(t.a,{href:"https://github.com/angular/components/issues/21632#issuecomment-764975917",children:"https://github.com/angular/components/issues/21632#issuecomment-764975917"})]})}),"\n",(0,s.jsxs)(t.p,{children:["In your project root, create ",(0,s.jsx)(t.code,{children:"setup-jest.ts"})," file with following contents:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import 'jest-preset-angular/setup-jest';\n"})}),"\n",(0,s.jsx)(t.p,{children:"Add the following section:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["to your root ",(0,s.jsx)(t.code,{children:"jest.config.js"})]}),"\n"]}),"\n",(0,s.jsxs)(a.Z,{groupId:"code-examples",children:[(0,s.jsx)(l.Z,{value:"js",label:"JavaScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"tab",children:"module.exports = {\n  preset: 'jest-preset-angular',\n  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],\n  globalSetup: 'jest-preset-angular/global-setup',\n};\n"})})}),(0,s.jsx)(l.Z,{value:"ts",label:"TypeScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  preset: 'jest-preset-angular',\n  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],\n  globalSetup: 'jest-preset-angular/global-setup',\n};\n\nexport default jestConfig;\n"})})}),(0,s.jsx)(l.Z,{value:"JSON",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'{\n  "jest": {\n    "preset": "jest-preset-angular",\n    "setupFilesAfterEnv": ["<rootDir>/setup-jest.ts"],\n    "globalSetup": "jest-preset-angular/global-setup"\n  }\n}\n'})})})]}),"\n",(0,s.jsxs)(t.p,{children:["Adjust your ",(0,s.jsx)(t.code,{children:"tsconfig.spec.json"})," to be:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "extends": "./tsconfig.json",\n  "compilerOptions": {\n    "outDir": "./out-tsc/spec",\n    "module": "CommonJs",\n    "types": ["jest"]\n  },\n  "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"customizing",children:"Customizing"}),"\n",(0,s.jsx)(t.h4,{id:"global-mocks",children:"Global mocks"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"jest-preset-angular"})," uses ",(0,s.jsx)(t.code,{children:"JSDOM"})," which is different from normal browsers. You might need some global browser mocks to\nsimulate the behaviors of real browsers in ",(0,s.jsx)(t.code,{children:"JSDOM"}),". To add global mocks, you can do the following:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Create a file ",(0,s.jsx)(t.code,{children:"jest-global-mocks.ts"})," to your root project."]}),"\n",(0,s.jsx)(t.li,{children:"Import it in your global setup file:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"// Assuming that your global setup file is setup-jest.ts\nimport 'jest-preset-angular/setup-jest';\nimport './jest-global-mocks';\n"})}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsxs)(t.p,{children:["An example for ",(0,s.jsx)(t.code,{children:"jest-global-mocks.ts"})]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Object.defineProperty(window, 'CSS', { value: null });\nObject.defineProperty(document, 'doctype', {\n  value: '<!DOCTYPE html>',\n});\nObject.defineProperty(window, 'getComputedStyle', {\n  value: () => {\n    return {\n      display: 'none',\n      appearance: ['-webkit-appearance'],\n    };\n  },\n});\n/**\n * ISSUE: https://github.com/angular/material2/issues/7101\n * Workaround for JSDOM missing transform property\n */\nObject.defineProperty(document.body.style, 'transform', {\n  value: () => {\n    return {\n      enumerable: true,\n      configurable: true,\n    };\n  },\n});\n"})})]}),"\n",(0,s.jsx)(t.h4,{id:"avoid-karma-conflicts",children:"Avoid karma conflicts"}),"\n",(0,s.jsxs)(t.p,{children:["By Angular CLI defaults you'll have a ",(0,s.jsx)(t.code,{children:"src/test.ts"})," file which will be picked up by jest. To circumvent this you can either rename it to ",(0,s.jsx)(t.code,{children:"src/karmaTest.ts"})," or hide it from jest by adding ",(0,s.jsx)(t.code,{children:"<rootDir>/src/test.ts"})," to jest ",(0,s.jsx)(t.code,{children:"testPathIgnorePatterns"})," option."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},425:(e,t,n)=>{n.d(t,{Z:()=>l});n(7294);var s=n(512);const r={tabItem:"tabItem_Ymn6"};var a=n(5893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,l),hidden:n,children:t})}},3992:(e,t,n)=>{n.d(t,{Z:()=>w});var s=n(7294),r=n(512),a=n(2957),l=n(6550),o=n(1270),i=n(5238),c=n(3609),u=n(2560);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=p(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:n,groupId:r}),[g,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),f=(()=>{const e=c??g;return h({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),j(e)}),[d,j,a]),tabValues:a}}var j=n(1048);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(5893);function x(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),r=o[n].value;r!==s&&(c(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=g(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(x,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function w(e){const t=(0,j.Z)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var s=n(7294);const r={},a=s.createContext(r);function l(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);