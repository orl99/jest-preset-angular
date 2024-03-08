"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7993],{3970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=n(5893),a=n(1151),s=n(3992),l=n(425);const o={id:"angular-ivy",title:"Angular Ivy"},i=void 0,u={id:"guides/angular-ivy",title:"Angular Ivy",description:"Starting from v9.0.0+, jest-preset-angular is fully compatible with Angular Ivy. To make sure that Jest uses the",source:"@site/docs/guides/angular-ivy.md",sourceDirName:"guides",slug:"/guides/angular-ivy",permalink:"/jest-preset-angular/docs/next/guides/angular-ivy",draft:!1,unlisted:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/docs/guides/angular-ivy.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1709893047,formattedLastUpdatedAt:"Mar 8, 2024",frontMatter:{id:"angular-ivy",title:"Angular Ivy"},sidebar:"docs",previous:{title:"Test environment",permalink:"/jest-preset-angular/docs/next/getting-started/test-environment"},next:{title:"Angular >=13",permalink:"/jest-preset-angular/docs/next/guides/angular-13+"}},c={},d=[{value:"Control ngcc processing",id:"control-ngcc-processing",level:2}];function g(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Starting from ",(0,r.jsx)(t.strong,{children:"v9.0.0+"}),", ",(0,r.jsx)(t.code,{children:"jest-preset-angular"})," is fully compatible with Angular Ivy. To make sure that Jest uses the\nAngular Ivy, you must run ",(0,r.jsx)(t.code,{children:"ngcc"})," before running tests. ",(0,r.jsx)(t.code,{children:"ngcc"})," will transform all Angular-format packages to be compatible\nwith Ivy compiler."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"jest-preset-angular"})," also provides a Jest global setup file to help you to run ",(0,r.jsx)(t.code,{children:"ngcc"})," with Jest. Add to the following section:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["to your root ",(0,r.jsx)(t.code,{children:"jest.config.js"})]}),"\n"]}),"\n",(0,r.jsxs)(s.Z,{groupId:"code-examples",children:[(0,r.jsx)(l.Z,{value:"js",label:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:"tab",children:"module.exports = {\n  //...\n  globalSetup: 'jest-preset-angular/global-setup',\n};\n"})})}),(0,r.jsx)(l.Z,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  //...\n  globalSetup: 'jest-preset-angular/global-setup',\n};\n\nexport default jestConfig;\n"})})}),(0,r.jsx)(l.Z,{value:"JSON",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'{\n  "jest": {\n    "globalSetup": "jest-preset-angular/global-setup"\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(t.h2,{id:"control-ngcc-processing",children:"Control ngcc processing"}),"\n",(0,r.jsxs)(t.p,{children:["Since ",(0,r.jsx)(t.strong,{children:"v12.0.0"}),", ",(0,r.jsx)(t.code,{children:"jest-preset-angular"})," provide a possibility to skip ",(0,r.jsx)(t.code,{children:"ngcc"})," via ",(0,r.jsx)(t.code,{children:"globalThis"})," by doing the following"]}),"\n",(0,r.jsxs)(s.Z,{groupId:"code-examples",children:[(0,r.jsx)(l.Z,{value:"js",label:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:"tab",children:"globalThis.ngJest = {\n  skipNgcc: true,\n  tsconfig: 'tsconfig.spec.json', // this is the project root tsconfig\n};\n\nmodule.exports = {\n  //...\n  globalSetup: 'jest-preset-angular/global-setup',\n};\n"})})}),(0,r.jsx)(l.Z,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"import type { Config } from 'jest';\n\nglobalThis.ngJest = {\n  skipNgcc: true,\n  tsconfig: 'tsconfig.spec.json', // this is the project root tsconfig\n};\n\nconst jestConfig: Config = {\n  //...\n  globalSetup: 'jest-preset-angular/global-setup',\n};\n\nexport default jestConfig;\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},425:(e,t,n)=>{n.d(t,{Z:()=>l});n(7294);var r=n(512);const a={tabItem:"tabItem_Ymn6"};var s=n(5893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:n,children:t})}},3992:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7294),a=n(512),s=n(2957),l=n(6550),o=n(1270),i=n(5238),u=n(3609),c=n(2560);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=g(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=h({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),m=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{m&&i(m)}),[m]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(1048);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(5893);function j(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=o[n].value;a!==r&&(u(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,v.jsx)(j,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function w(e){const t=(0,b.Z)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var r=n(7294);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);