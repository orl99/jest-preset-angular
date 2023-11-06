"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1631],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3205:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),s=["components"],i={id:"presets",title:"Presets"},p=void 0,l={unversionedId:"getting-started/presets",id:"version-8.x/getting-started/presets",title:"Presets",description:"The presets",source:"@site/versioned_docs/version-8.x/getting-started/presets.md",sourceDirName:"getting-started",slug:"/getting-started/presets",permalink:"/jest-preset-angular/docs/8.x/getting-started/presets",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-8.x/getting-started/presets.md",tags:[],version:"8.x",lastUpdatedBy:"Ahn",lastUpdatedAt:1699308052,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"presets",title:"Presets"},sidebar:"version-8.x-docs",previous:{title:"Installation",permalink:"/jest-preset-angular/docs/8.x/getting-started/installation"},next:{title:"Options",permalink:"/jest-preset-angular/docs/8.x/getting-started/options"}},d={},u=[{value:"The presets",id:"the-presets",level:3},{value:"Basic usage",id:"basic-usage",level:3},{value:"Advanced",id:"advanced",level:3}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"the-presets"},"The presets"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," comes with a preset, covering most of the project's base configuration:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Preset name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"jest-preset-angular")),(0,o.kt)("td",{parentName:"tr",align:null},"TypeScript, JavaScript and HTML files (",(0,o.kt)("inlineCode",{parentName:"td"},"js"),", ",(0,o.kt)("inlineCode",{parentName:"td"},".ts"),", ",(0,o.kt)("inlineCode",{parentName:"td"},".html"),") will be transformed by ",(0,o.kt)("inlineCode",{parentName:"td"},"ts-jest")," to ",(0,o.kt)("strong",{parentName:"td"},"CommonJS")," syntax.")))),(0,o.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,o.kt)("p",null,"In most cases, simply setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"preset")," key to the desired preset name in your Jest config should be enough to start\nusing TypeScript with Jest (assuming you added ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," to your ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies")," of course):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  preset: 'jest-preset-angular',\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "preset": "jest-preset-angular"\n  }\n}\n')),(0,o.kt)("h3",{id:"advanced"},"Advanced"),(0,o.kt)("p",null,"All presets come with default ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," config options.\nIf you want to override any of the options, you'll need to use the JavaScript version of Jest config,\ncopy the original options and override the options you need:"),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"If you choose to override ",(0,o.kt)("inlineCode",{parentName:"p"},"globals")," in order to point at a specific tsconfig, you will need to make sure that original ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest"),"\noptions provided through the default preset are defined to the ",(0,o.kt)("inlineCode",{parentName:"p"},"globals.ts-jest")," section too, otherwise you will get\nerrors.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nconst { defaults: jestNgPreset } = require('jest-preset-angular');\n\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      ...jestNgPreset.globals['ts-jest'],\n      // [...your overriden options]\n    },\n  },\n};\n")))}m.isMDXComponent=!0}}]);