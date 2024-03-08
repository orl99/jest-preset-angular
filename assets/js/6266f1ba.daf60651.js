"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8116],{5085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(5893),o=n(1151);const r={id:"options",title:"Options"},i=void 0,a={id:"getting-started/options",title:"Options",description:"jest-preset-angular uses ts-jest options under the hood, which are located under the globals of Jest config object",source:"@site/versioned_docs/version-8.x/getting-started/options.md",sourceDirName:"getting-started",slug:"/getting-started/options",permalink:"/jest-preset-angular/docs/8.x/getting-started/options",draft:!1,unlisted:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-8.x/getting-started/options.md",tags:[],version:"8.x",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1709893047,formattedLastUpdatedAt:"Mar 8, 2024",frontMatter:{id:"options",title:"Options"},sidebar:"docs",previous:{title:"Presets",permalink:"/jest-preset-angular/docs/8.x/getting-started/presets"},next:{title:"Test environment",permalink:"/jest-preset-angular/docs/8.x/getting-started/test-environment"}},l={},d=[{value:"Exposed configuration",id:"exposed-configuration",level:3},{value:"Brief explanation of config",id:"brief-explanation-of-config",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"jest-preset-angular"})," uses ",(0,s.jsx)(t.code,{children:"ts-jest"})," options under the hood, which are located under the ",(0,s.jsx)(t.code,{children:"globals"})," of Jest config object\nin the ",(0,s.jsx)(t.code,{children:"package.json"})," file of your project, or through a ",(0,s.jsx)(t.code,{children:"jest.config.js"}),", or ",(0,s.jsx)(t.code,{children:"jest.config.ts"})," file."]}),"\n",(0,s.jsxs)(t.p,{children:["More information about ",(0,s.jsx)(t.code,{children:"ts-jest"})," options, see ",(0,s.jsx)(t.a,{href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/options",children:"doc"})]}),"\n",(0,s.jsx)(t.h3,{id:"exposed-configuration",children:"Exposed configuration"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"module.exports = {\n  globals: {\n    'ts-jest': {\n      tsconfig: '<rootDir>/tsconfig.spec.json',\n      stringifyContentPathRegex: '\\\\.html$',\n      astTransformers: {\n        before: [\n          'jest-preset-angular/build/InlineFilesTransformer',\n          'jest-preset-angular/build/StripStylesTransformer',\n        ],\n      },\n    },\n  },\n  transform: {\n    '^.+\\\\.(ts|js|html)$': 'ts-jest',\n  },\n  moduleFileExtensions: ['ts', 'html', 'js', 'json'],\n  moduleNameMapper: {\n    '^src/(.*)$': '<rootDir>/src/$1',\n    '^app/(.*)$': '<rootDir>/src/app/$1',\n    '^assets/(.*)$': '<rootDir>/src/assets/$1',\n    '^environments/(.*)$': '<rootDir>/src/environments/$1',\n  },\n  transformIgnorePatterns: ['node_modules/(?!@ngrx)'],\n  snapshotSerializers: [\n    'jest-preset-angular/build/serializers/html-comment',\n    'jest-preset-angular/build/serializers/ng-snapshot',\n    'jest-preset-angular/build/serializers/no-ng-attributes',\n  ],\n};\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"important",children:(0,s.jsxs)(t.p,{children:["Jest doesn't run in browser nor through dev server. It uses ",(0,s.jsx)(t.code,{children:"JSDOM"})," to abstract browser environment. So we have to cheat\na little and inline our templates and get rid of styles (",(0,s.jsx)(t.strong,{children:"we're not testing CSS"}),") because otherwise Angular will try\nto make ",(0,s.jsx)(t.code,{children:"XHR"})," call for our templates and fail miserably."]})}),"\n",(0,s.jsx)(t.h3,{id:"brief-explanation-of-config",children:"Brief explanation of config"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["we're using some ",(0,s.jsx)(t.code,{children:'"globals"'})," to pass information about where our tsconfig.json file is that we'd like to be able to transform HTML files through ",(0,s.jsx)(t.code,{children:"ts-jest"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'"transform"'})," \u2013 run every TS, JS, or HTML file through so called ",(0,s.jsx)(t.em,{children:"Jest transformer"}),"; this lets Jest understand non-JS syntax."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'"moduleFileExtensions"'})," \u2013 our modules are TypeScript (",(0,s.jsx)(t.code,{children:"ts"}),"), HTML (",(0,s.jsx)(t.code,{children:"html"}),"), JavaScript (",(0,s.jsx)(t.code,{children:"js"}),") and JSON (",(0,s.jsx)(t.code,{children:"json"}),") files."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'"moduleNameMapper"'})," \u2013 if you're using absolute imports here's how to tell Jest where to look for them; uses regex."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'"transformIgnorePatterns"'})," \u2013 unfortunately some modules (like @ngrx) are released as TypeScript files, not pure JavaScript;\nin such cases we cannot ignore them (all node_modules are ignored by default), so they can be transformed through TS compiler\nlike any other module in our project."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'"snapshotSerializers"'})," - array of serializers which will be applied to snapshot the code. Note: by default angular adds\nsome angular-specific attributes to the code (like ",(0,s.jsx)(t.code,{children:"ng-reflect-*"}),", ",(0,s.jsx)(t.code,{children:'ng-version="*"'}),", ",(0,s.jsx)(t.code,{children:"_ngcontent-c*"})," etc).\nThis package provides serializer to remove such attributes. This makes snapshots cleaner and more human-readable.\nTo remove such specific attributes use ",(0,s.jsx)(t.code,{children:"no-ng-attributes"})," serializer. You need to add ",(0,s.jsx)(t.code,{children:"no-ng-attributes"})," serializer manually."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var s=n(7294);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);