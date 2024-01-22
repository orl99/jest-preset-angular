"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1005],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||s;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1914:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),s=(n(7294),n(4137)),o=["components"],i={id:"presets",title:"Presets"},l=void 0,p={unversionedId:"getting-started/presets",id:"version-11.0/getting-started/presets",title:"Presets",description:"The presets",source:"@site/versioned_docs/version-11.0/getting-started/presets.md",sourceDirName:"getting-started",slug:"/getting-started/presets",permalink:"/jest-preset-angular/docs/11.0/getting-started/presets",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-11.0/getting-started/presets.md",tags:[],version:"11.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1705914920,formattedLastUpdatedAt:"Jan 22, 2024",frontMatter:{id:"presets",title:"Presets"},sidebar:"version-11.0-docs",previous:{title:"Installation",permalink:"/jest-preset-angular/docs/11.0/getting-started/installation"},next:{title:"Options",permalink:"/jest-preset-angular/docs/11.0/getting-started/options"}},d={},u=[{value:"The presets",id:"the-presets",level:3},{value:"Basic usage",id:"basic-usage",level:3},{value:"Advanced",id:"advanced",level:3}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"the-presets"},"The presets"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," comes with 2 presets, covering most of the project's base configuration:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Preset name"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"jest-preset-angular/presets/default"),(0,s.kt)("br",null),"or ",(0,s.kt)("inlineCode",{parentName:"td"},"jest-preset-angular")),(0,s.kt)("td",{parentName:"tr",align:null},"TypeScript, JavaScript and HTML files (",(0,s.kt)("inlineCode",{parentName:"td"},"js"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".html"),") will be transformed by ",(0,s.kt)("inlineCode",{parentName:"td"},"jest-preset-angular")," to ",(0,s.kt)("strong",{parentName:"td"},"CommonJS")," syntax.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"jest-preset-angular/presets/defaults-esm"),(0,s.kt)("br",null)),(0,s.kt)("td",{parentName:"tr",align:null},"TypeScript, JavaScript and HTML files (",(0,s.kt)("inlineCode",{parentName:"td"},"js"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,s.kt)("inlineCode",{parentName:"td"},".html"),") will be transformed by ",(0,s.kt)("inlineCode",{parentName:"td"},"jest-preset-angular")," to ",(0,s.kt)("strong",{parentName:"td"},"ESM")," syntax.")))),(0,s.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,s.kt)("p",null,"In most cases, simply setting the ",(0,s.kt)("inlineCode",{parentName:"p"},"preset")," key to the desired preset name in your Jest config should be enough to start\nusing TypeScript with Jest (assuming you added ",(0,s.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," to your ",(0,s.kt)("inlineCode",{parentName:"p"},"devDependencies")," of course):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  // Replace `jest-preset-angular` with the preset you want to use\n  // from the above list\n  preset: 'jest-preset-angular',\n};\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    // Replace `jest-preset-angular` with the preset you want to use\n    // from the above list\n    "preset": "jest-preset-angular"\n  }\n}\n')),(0,s.kt)("h3",{id:"advanced"},"Advanced"),(0,s.kt)("p",null,"All presets come with default ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," config options.\nIf you want to override any of the options, you'll need to use the JavaScript version of Jest config,\ncopy the original options and override the options you need:"),(0,s.kt)("admonition",{type:"important"},(0,s.kt)("p",{parentName:"admonition"},"If you choose to override ",(0,s.kt)("inlineCode",{parentName:"p"},"globals")," in order to point at a specific tsconfig, you will need to make sure that original ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest"),"\noptions provided through the default preset are defined to the ",(0,s.kt)("inlineCode",{parentName:"p"},"globals.ts-jest")," section too, otherwise you will get\nerrors.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nconst { defaults: jestNgPreset } = require('jest-preset-angular/presets');\n// const { defaultsESM: jestNgPreset } = require('jest-preset-angular/presets')\n\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      ...jestNgPreset.globals['ts-jest'],\n      // [...your overriden options]\n    },\n  },\n};\n")),(0,s.kt)("p",null,"Or through TypeScript (if ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-node")," is installed):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// jest.config.ts\nimport type { InitialOptionsTsJest } from 'ts-jest/dist/types';\nimport { defaults as jestNgPreset } from 'jest-preset-angular/presets';\n// import { defaultsESM as jestNgPreset } from 'jest-preset-angular/presets'\n\nconst config: InitialOptionsTsJest = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      ...jestNgPreset.globals['ts-jest'],\n      // [...your overriden options]\n    },\n  },\n};\n\nexport default config;\n")))}m.isMDXComponent=!0}}]);