"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4993],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9138:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=["components"],s={id:"installation",title:"Installation"},l=void 0,p={unversionedId:"getting-started/installation",id:"version-9.x/getting-started/installation",title:"Installation",description:"Dependencies",source:"@site/versioned_docs/version-9.x/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/jest-preset-angular/docs/9.x/getting-started/installation",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-9.x/getting-started/installation.md",tags:[],version:"9.x",lastUpdatedBy:"Anh Pham",lastUpdatedAt:1706637701,formattedLastUpdatedAt:"Jan 30, 2024",frontMatter:{id:"installation",title:"Installation"},sidebar:"version-9.x-docs",previous:{title:"Processing flow",permalink:"/jest-preset-angular/docs/9.x/processing"},next:{title:"Presets",permalink:"/jest-preset-angular/docs/9.x/getting-started/presets"}},u={},c=[{value:"Dependencies",id:"dependencies",level:3},{value:"NPM",id:"npm",level:4},{value:"Yarn",id:"yarn",level:4},{value:"Configuration",id:"configuration",level:3},{value:"Customizing",id:"customizing",level:3},{value:"Global mocks",id:"global-mocks",level:4},{value:"Avoid karma conflicts",id:"avoid-karma-conflicts",level:4}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"You can install ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," and dependencies all at once with one of the following commands."),(0,o.kt)("h4",{id:"npm"},"NPM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D jest jest-preset-angular @types/jest\n")),(0,o.kt)("h4",{id:"yarn"},"Yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add -D jest jest-preset-angular @types/jest\n")),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"Angular doesn't support native ",(0,o.kt)("inlineCode",{parentName:"p"},"async/await")," in testing with ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," higher than ",(0,o.kt)("inlineCode",{parentName:"p"},"ES2016"),", see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/angular/components/issues/21632#issuecomment-764975917"},"https://github.com/angular/components/issues/21632#issuecomment-764975917"))),(0,o.kt)("p",null,"In your project root, create ",(0,o.kt)("inlineCode",{parentName:"p"},"setup-jest.ts")," file with following contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import 'jest-preset-angular/setup-jest';\n")),(0,o.kt)("p",null,"Add the following section:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"to your root ",(0,o.kt)("inlineCode",{parentName:"li"},"jest.config.js"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  preset: 'jest-preset-angular',\n  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"or to your root ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jest": {\n    "preset": "jest-preset-angular",\n    "setupFilesAfterEnv": ["<rootDir>/setup-jest.ts"]\n  }\n}\n')),(0,o.kt)("p",null,"Adjust your ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.spec.json")," to be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "./tsconfig.json",\n  "compilerOptions": {\n    "outDir": "./out-tsc/spec",\n    "types": ["jest"]\n  },\n  "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]\n}\n')),(0,o.kt)("h3",{id:"customizing"},"Customizing"),(0,o.kt)("h4",{id:"global-mocks"},"Global mocks"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"JSDOM")," which is different from normal browsers. You might need some global browser mocks to\nsimulate the behaviors of real browsers in ",(0,o.kt)("inlineCode",{parentName:"p"},"JSDOM"),". To add global mocks, you can do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a file ",(0,o.kt)("inlineCode",{parentName:"li"},"jest-global-mocks.ts")," to your root project."),(0,o.kt)("li",{parentName:"ul"},"Import it in your global setup file:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Assuming that your global setup file is setup-jest.ts\nimport 'jest-preset-angular/setup-jest';\nimport './jest-global-mocks';\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"An example for ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-global-mocks.ts")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"Object.defineProperty(window, 'CSS', { value: null });\nObject.defineProperty(document, 'doctype', {\n  value: '<!DOCTYPE html>',\n});\nObject.defineProperty(window, 'getComputedStyle', {\n  value: () => {\n    return {\n      display: 'none',\n      appearance: ['-webkit-appearance'],\n    };\n  },\n});\n/**\n * ISSUE: https://github.com/angular/material2/issues/7101\n * Workaround for JSDOM missing transform property\n */\nObject.defineProperty(document.body.style, 'transform', {\n  value: () => {\n    return {\n      enumerable: true,\n      configurable: true,\n    };\n  },\n});\n"))),(0,o.kt)("h4",{id:"avoid-karma-conflicts"},"Avoid karma conflicts"),(0,o.kt)("p",null,"By Angular CLI defaults you'll have a ",(0,o.kt)("inlineCode",{parentName:"p"},"src/test.ts")," file which will be picked up by jest. To circumvent this you can either rename it to ",(0,o.kt)("inlineCode",{parentName:"p"},"src/karmaTest.ts")," or hide it from jest by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"<rootDir>/src/test.ts")," to jest ",(0,o.kt)("inlineCode",{parentName:"p"},"testPathIgnorePatterns")," option."))}m.isMDXComponent=!0}}]);