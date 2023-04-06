"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2151],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},269:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),a=["components"],s={id:"using-with-babel",title:"Using with Babel"},l=void 0,u={unversionedId:"guides/using-with-babel",id:"version-9.x/guides/using-with-babel",title:"Using with Babel",description:"If you wish to use Babel, you need to say jest to transpile such files manually.",source:"@site/versioned_docs/version-9.x/guides/using-with-babel.md",sourceDirName:"guides",slug:"/guides/using-with-babel",permalink:"/jest-preset-angular/docs/9.x/guides/using-with-babel",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-9.x/guides/using-with-babel.md",tags:[],version:"9.x",lastUpdatedBy:"Sergiu",lastUpdatedAt:1680786697,formattedLastUpdatedAt:"Apr 6, 2023",frontMatter:{id:"using-with-babel",title:"Using with Babel"},sidebar:"version-9.x-docs",previous:{title:"Configure other JSDOM versions",permalink:"/jest-preset-angular/docs/9.x/guides/jsdom-version"},next:{title:"Absolute Imports",permalink:"/jest-preset-angular/docs/9.x/guides/absolute-imports"}},p={},c=[],d={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you wish to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Babel"),", you need to say jest to transpile such files manually."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install dependencies required by the official Jest documentation for ",(0,i.kt)("a",{parentName:"p",href:"https://jest-bot.github.io/jest/docs/babel.html"},"Babel integration"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," and add ",(0,i.kt)("inlineCode",{parentName:"p"},"babel.config.js")," (or modify existing if needed) with the following content:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function (api) {\n  api.cache(true);\n\n  const presets = ['@babel/preset-env'];\n  const plugins = [];\n\n  return {\n    presets,\n    plugins,\n  };\n};\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: do not use a ",(0,i.kt)("inlineCode",{parentName:"em"},".babelrc")," file otherwise the packages that you specify in the next step will not be picked up. CF ",(0,i.kt)("a",{parentName:"em",href:"https://babeljs.io/docs/en/configuration#what-s-your-use-case"},"Babel documentation")," and the comment ",(0,i.kt)("inlineCode",{parentName:"em"},"You want to compile node_modules? babel.config.js is for you!")),"."),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Update Jest configuration (by default TypeScript process untranspiled JS files which is source of the problem):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  transform: {\n    '^.+\\\\.(ts|html)$': 'jest-preset-angular',\n    '^.+\\\\.js$': 'babel-jest',\n  },\n};\n")))}f.isMDXComponent=!0}}]);