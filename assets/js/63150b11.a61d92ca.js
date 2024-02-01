"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3263],{3271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var s=n(5893),o=n(1151);const r={id:"options",title:"Options"},i=void 0,d={id:"getting-started/options",title:"Options",description:"jest-preset-angular uses ts-jest options under the hood, which are located under the globals of Jest config object",source:"@site/versioned_docs/version-9.x/getting-started/options.md",sourceDirName:"getting-started",slug:"/getting-started/options",permalink:"/jest-preset-angular/docs/9.x/getting-started/options",draft:!1,unlisted:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-9.x/getting-started/options.md",tags:[],version:"9.x",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1706810744,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{id:"options",title:"Options"},sidebar:"docs",previous:{title:"Presets",permalink:"/jest-preset-angular/docs/9.x/getting-started/presets"},next:{title:"Test environment",permalink:"/jest-preset-angular/docs/9.x/getting-started/test-environment"}},c={},a=[{value:"Exposed configuration",id:"exposed-configuration",level:3},{value:"Brief explanation of config",id:"brief-explanation-of-config",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"jest-preset-angular"})," uses ",(0,s.jsx)(t.code,{children:"ts-jest"})," options under the hood, which are located under the ",(0,s.jsx)(t.code,{children:"globals"})," of Jest config object\nin the ",(0,s.jsx)(t.code,{children:"package.json"})," file of your project, or through a ",(0,s.jsx)(t.code,{children:"jest.config.js"}),", or ",(0,s.jsx)(t.code,{children:"jest.config.ts"})," file."]}),"\n",(0,s.jsxs)(t.p,{children:["More information about ",(0,s.jsx)(t.code,{children:"ts-jest"})," options, see ",(0,s.jsx)(t.a,{href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/options",children:"doc"})]}),"\n",(0,s.jsxs)(t.admonition,{type:"important",children:[(0,s.jsxs)(t.p,{children:["Since ",(0,s.jsx)(t.strong,{children:"v9.0.0"}),", ",(0,s.jsx)(t.code,{children:"jest-preset-angular"})," default Jest configuration no longer provides ",(0,s.jsx)(t.code,{children:"moduleNameMapper"}),". If you wish to reuse\nthe old ",(0,s.jsx)(t.code,{children:"moduleNameMapper"})," configuration, you can put this into your Jest config"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"moduleNameMapper: {\n  '^src/(.*)$': '<rootDir>/src/$1',\n  '^app/(.*)$': '<rootDir>/src/app/$1',\n  '^assets/(.*)$': '<rootDir>/src/assets/$1',\n  '^environments/(.*)$': '<rootDir>/src/environments/$1',\n}\n"})})]}),"\n",(0,s.jsx)(t.h3,{id:"exposed-configuration",children:"Exposed configuration"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const snapshotSerializers = require('../build/serializers');\n\nmodule.exports = {\n  globals: {\n    'ts-jest': {\n      tsconfig: '<rootDir>/tsconfig.spec.json',\n      stringifyContentPathRegex: '\\\\.(html|svg)$',\n    },\n  },\n  testEnvironment: 'jsdom',\n  transform: {\n    '^.+\\\\.(ts|js|html|svg)$': 'jest-preset-angular',\n  },\n  moduleFileExtensions: ['ts', 'html', 'js', 'json'],\n  snapshotSerializers,\n};\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"important",children:(0,s.jsxs)(t.p,{children:["Jest runs with ",(0,s.jsx)(t.code,{children:"jest-preset-angular"})," neither in browser nor through dev server. It uses ",(0,s.jsx)(t.code,{children:"JSDOM"})," to abstract browser environment hence we depend on\n",(0,s.jsx)(t.code,{children:"JSDOM"})," implementation for real browser features."]})}),"\n",(0,s.jsx)(t.h3,{id:"brief-explanation-of-config",children:"Brief explanation of config"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["we're using some ",(0,s.jsx)(t.code,{children:'"globals"'})," to pass information about where our tsconfig.json file is that we'd like to be able to transform HTML files through ",(0,s.jsx)(t.code,{children:"ts-jest"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'"transform"'})," \u2013 run every ",(0,s.jsx)(t.code,{children:"TS"}),", ",(0,s.jsx)(t.code,{children:"JS"}),", ",(0,s.jsx)(t.code,{children:"MJS"}),", ",(0,s.jsx)(t.code,{children:"HTML"}),", or ",(0,s.jsx)(t.code,{children:"SVG"})," file through so called ",(0,s.jsx)(t.em,{children:"Jest transformer"}),"; this lets Jest understand non-JS syntax."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'"testEnvironment"'})," \u2013 the test environment to run on."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'"moduleFileExtensions"'})," \u2013 our modules are TypeScript (",(0,s.jsx)(t.code,{children:"ts"}),"), HTML (",(0,s.jsx)(t.code,{children:"html"}),"), JavaScript (",(0,s.jsx)(t.code,{children:"js"}),") and JSON (",(0,s.jsx)(t.code,{children:"json"}),") files."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'"moduleNameMapper"'})," \u2013 if you're using absolute imports here's how to tell Jest where to look for them; uses regex."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'"snapshotSerializers"'})," - array of serializers which will be applied to snapshot the code. Note: by default angular adds\nsome angular-specific attributes to the code (like ",(0,s.jsx)(t.code,{children:"ng-reflect-*"}),", ",(0,s.jsx)(t.code,{children:'ng-version="*"'}),", ",(0,s.jsx)(t.code,{children:"_ngcontent-c*"})," etc).\nThis package provides serializer to remove such attributes. This makes snapshots cleaner and more human-readable.\nTo remove such specific attributes use ",(0,s.jsx)(t.code,{children:"no-ng-attributes"})," serializer. You need to add ",(0,s.jsx)(t.code,{children:"no-ng-attributes"})," serializer manually."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var s=n(7294);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);