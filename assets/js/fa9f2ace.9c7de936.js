"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1005],{2554:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=s(5893),r=s(1151);const o={id:"presets",title:"Presets"},i=void 0,d={id:"getting-started/presets",title:"Presets",description:"The presets",source:"@site/versioned_docs/version-11.0/getting-started/presets.md",sourceDirName:"getting-started",slug:"/getting-started/presets",permalink:"/jest-preset-angular/docs/11.0/getting-started/presets",draft:!1,unlisted:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-11.0/getting-started/presets.md",tags:[],version:"11.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1709893047,formattedLastUpdatedAt:"Mar 8, 2024",frontMatter:{id:"presets",title:"Presets"},sidebar:"docs",previous:{title:"Installation",permalink:"/jest-preset-angular/docs/11.0/getting-started/installation"},next:{title:"Options",permalink:"/jest-preset-angular/docs/11.0/getting-started/options"}},a={},l=[{value:"The presets",id:"the-presets",level:3},{value:"Basic usage",id:"basic-usage",level:3},{value:"Advanced",id:"advanced",level:3}];function c(e){const t={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"the-presets",children:"The presets"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"jest-preset-angular"})," comes with 2 presets, covering most of the project's base configuration:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Preset name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"jest-preset-angular/presets/default"}),(0,n.jsx)("br",{}),"or ",(0,n.jsx)(t.code,{children:"jest-preset-angular"})]}),(0,n.jsxs)(t.td,{children:["TypeScript, JavaScript and HTML files (",(0,n.jsx)(t.code,{children:"js"}),", ",(0,n.jsx)(t.code,{children:".ts"}),", ",(0,n.jsx)(t.code,{children:".html"}),") will be transformed by ",(0,n.jsx)(t.code,{children:"jest-preset-angular"})," to ",(0,n.jsx)(t.strong,{children:"CommonJS"})," syntax."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"jest-preset-angular/presets/defaults-esm"}),(0,n.jsx)("br",{})]}),(0,n.jsxs)(t.td,{children:["TypeScript, JavaScript and HTML files (",(0,n.jsx)(t.code,{children:"js"}),", ",(0,n.jsx)(t.code,{children:".ts"}),", ",(0,n.jsx)(t.code,{children:".html"}),") will be transformed by ",(0,n.jsx)(t.code,{children:"jest-preset-angular"})," to ",(0,n.jsx)(t.strong,{children:"ESM"})," syntax."]})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"basic-usage",children:"Basic usage"}),"\n",(0,n.jsxs)(t.p,{children:["In most cases, simply setting the ",(0,n.jsx)(t.code,{children:"preset"})," key to the desired preset name in your Jest config should be enough to start\nusing TypeScript with Jest (assuming you added ",(0,n.jsx)(t.code,{children:"jest-preset-angular"})," to your ",(0,n.jsx)(t.code,{children:"devDependencies"})," of course):"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  // Replace `jest-preset-angular` with the preset you want to use\n  // from the above list\n  preset: 'jest-preset-angular',\n};\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'// OR package.json\n{\n  // [...]\n  "jest": {\n    // Replace `jest-preset-angular` with the preset you want to use\n    // from the above list\n    "preset": "jest-preset-angular"\n  }\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"advanced",children:"Advanced"}),"\n",(0,n.jsxs)(t.p,{children:["All presets come with default ",(0,n.jsx)(t.code,{children:"ts-jest"})," config options.\nIf you want to override any of the options, you'll need to use the JavaScript version of Jest config,\ncopy the original options and override the options you need:"]}),"\n",(0,n.jsx)(t.admonition,{type:"important",children:(0,n.jsxs)(t.p,{children:["If you choose to override ",(0,n.jsx)(t.code,{children:"globals"})," in order to point at a specific tsconfig, you will need to make sure that original ",(0,n.jsx)(t.code,{children:"ts-jest"}),"\noptions provided through the default preset are defined to the ",(0,n.jsx)(t.code,{children:"globals.ts-jest"})," section too, otherwise you will get\nerrors."]})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"// jest.config.js\nconst { defaults: jestNgPreset } = require('jest-preset-angular/presets');\n// const { defaultsESM: jestNgPreset } = require('jest-preset-angular/presets')\n\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      ...jestNgPreset.globals['ts-jest'],\n      // [...your overriden options]\n    },\n  },\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Or through TypeScript (if ",(0,n.jsx)(t.code,{children:"ts-node"})," is installed):"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"// jest.config.ts\nimport type { InitialOptionsTsJest } from 'ts-jest/dist/types';\nimport { defaults as jestNgPreset } from 'jest-preset-angular/presets';\n// import { defaultsESM as jestNgPreset } from 'jest-preset-angular/presets'\n\nconst config: InitialOptionsTsJest = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      ...jestNgPreset.globals['ts-jest'],\n      // [...your overriden options]\n    },\n  },\n};\n\nexport default config;\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>i});var n=s(7294);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);