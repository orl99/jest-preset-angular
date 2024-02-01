"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8562],{2409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=n(5893),s=n(1151),a=n(3992),l=n(425);const o={id:"using-with-babel",title:"Using with Babel"},i=void 0,u={id:"guides/using-with-babel",title:"Using with Babel",description:"If you wish to use Babel, you need to say jest to transpile such files manually.",source:"@site/docs/guides/using-with-babel.md",sourceDirName:"guides",slug:"/guides/using-with-babel",permalink:"/jest-preset-angular/docs/next/guides/using-with-babel",draft:!1,unlisted:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/docs/guides/using-with-babel.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1706781632,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{id:"using-with-babel",title:"Using with Babel"},sidebar:"docs",previous:{title:"Configure other JSDOM versions",permalink:"/jest-preset-angular/docs/next/guides/jsdom-version"},next:{title:"Absolute Imports",permalink:"/jest-preset-angular/docs/next/guides/absolute-imports"}},c={},d=[];function p(e){const t={a:"a",code:"code",em:"em",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["If you wish to use ",(0,r.jsx)(t.code,{children:"Babel"}),", you need to say jest to transpile such files manually."]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Install dependencies required by the official Jest documentation for ",(0,r.jsx)(t.a,{href:"https://jest-bot.github.io/jest/docs/babel.html",children:"Babel integration"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Install ",(0,r.jsx)(t.code,{children:"@babel/preset-env"})," and add ",(0,r.jsx)(t.code,{children:"babel.config.js"})," (or modify existing if needed) with the following content:"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"module.exports = function (api) {\n  api.cache(true);\n\n  const presets = ['@babel/preset-env'];\n  const plugins = [];\n\n  return {\n    presets,\n    plugins,\n  };\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.em,{children:["Note: do not use a ",(0,r.jsx)(t.code,{children:".babelrc"})," file otherwise the packages that you specify in the next step will not be picked up. CF ",(0,r.jsx)(t.a,{href:"https://babeljs.io/docs/en/configuration#what-s-your-use-case",children:"Babel documentation"})," and the comment ",(0,r.jsx)(t.code,{children:"You want to compile node_modules? babel.config.js is for you!"})]}),"."]}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"Update Jest configuration (by default TypeScript process untranspiled JS files which is source of the problem):"}),"\n"]}),"\n",(0,r.jsxs)(a.Z,{groupId:"code-examples",children:[(0,r.jsx)(l.Z,{value:"js",label:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:"tab",children:"module.exports = {\n  //...\n  transform: {\n    '^.+\\\\.(ts|html)$': 'jest-preset-angular',\n    '^.+\\\\.js$': 'babel-jest',\n  },\n};\n"})})}),(0,r.jsx)(l.Z,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  //...\n  transform: {\n    '^.+\\\\.(ts|html)$': 'jest-preset-angular',\n    '^.+\\\\.js$': 'babel-jest',\n  },\n};\n\nexport default jestConfig;\n"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},425:(e,t,n)=>{n.d(t,{Z:()=>l});n(7294);var r=n(512);const s={tabItem:"tabItem_Ymn6"};var a=n(5893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:n,children:t})}},3992:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7294),s=n(512),a=n(2957),l=n(6550),o=n(1270),i=n(5238),u=n(3609),c=n(2560);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,d]=b({queryString:n,groupId:s}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),g=(()=>{const e=u??f;return h({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=n(1048);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(5893);function x(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),s=o[n].value;s!==r&&(u(t),l(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.Z)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,j.jsx)(x,{...e,...t}),(0,j.jsx)(v,{...e,...t})]})}function w(e){const t=(0,m.Z)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var r=n(7294);const s={},a=r.createContext(s);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);