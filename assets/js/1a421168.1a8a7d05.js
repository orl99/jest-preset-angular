"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7119],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5938:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),a=["components"],s={id:"test-environment",title:"Test environment"},p=void 0,l={unversionedId:"getting-started/test-environment",id:"getting-started/test-environment",title:"Test environment",description:"If you look at setup-jest.js,",source:"@site/docs/getting-started/test-environment.md",sourceDirName:"getting-started",slug:"/getting-started/test-environment",permalink:"/jest-preset-angular/docs/next/getting-started/test-environment",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/docs/getting-started/test-environment.md",tags:[],version:"current",lastUpdatedBy:"Ahn",lastUpdatedAt:1699308052,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"test-environment",title:"Test environment"},sidebar:"docs",previous:{title:"Options",permalink:"/jest-preset-angular/docs/next/getting-started/options"},next:{title:"Angular Ivy",permalink:"/jest-preset-angular/docs/next/guides/angular-ivy"}},u={},c=[{value:"Configure test environment",id:"configure-test-environment",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you look at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/blob/main/setup-jest.js"},(0,i.kt)("inlineCode",{parentName:"a"},"setup-jest.js")),",\nwhat we're doing here is we're adding globals required by Angular. With the included ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/angular/angular/tree/main/packages/zone.js"},"Angular zone patch"),"\nwe also make sure Jest test methods run in Zone context. Then we initialize the Angular testing environment like normal."),(0,i.kt)("p",null,"While ",(0,i.kt)("inlineCode",{parentName:"p"},"setup-jest.js")," above is for running Jest with ",(0,i.kt)("strong",{parentName:"p"},"CommonJS")," mode, we also provide ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/blob/main/setup-jest.mjs"},(0,i.kt)("inlineCode",{parentName:"a"},"setup-jest.mjs")),"\nto run with ",(0,i.kt)("strong",{parentName:"p"},"ESM")," mode."),(0,i.kt)("h3",{id:"configure-test-environment"},"Configure test environment"),(0,i.kt)("p",null,"When creating Angular test environment with ",(0,i.kt)("inlineCode",{parentName:"p"},"TestBed"),", it is possible to specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"testEnvironmentOptions")," via ",(0,i.kt)("inlineCode",{parentName:"p"},"globalThis")," in the Jest setup file.\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// setup-test.ts\nglobalThis.ngJest = {\n  testEnvironmentOptions: {\n    teardown: {\n      destroyAfterEach: false,\n      rethrowErrors: true,\n    },\n    errorOnUnknownElements: true,\n    errorOnUnknownProperties: true,\n  },\n};\n\nimport 'jest-preset-angular/setup-jest';\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," will look at ",(0,i.kt)("inlineCode",{parentName:"p"},"globalThis.ngJest")," and pass the correct ",(0,i.kt)("a",{parentName:"p",href:"https://angular.io/api/core/testing/TestEnvironmentOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"TestEnvironmentOptions"))," object to ",(0,i.kt)("inlineCode",{parentName:"p"},"TestBed"),"."))}d.isMDXComponent=!0}}]);