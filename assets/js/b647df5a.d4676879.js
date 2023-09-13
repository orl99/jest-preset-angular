"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[336],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1329:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),i=n(3366),o=(n(7294),n(4137)),a=["components"],s={id:"using-with-babel",title:"Using with Babel"},l=void 0,u={unversionedId:"guides/using-with-babel",id:"version-8.x/guides/using-with-babel",title:"Using with Babel",description:"If you wish to use Babel, you need to say jest to transpile such files manually.",source:"@site/versioned_docs/version-8.x/guides/using-with-babel.md",sourceDirName:"guides",slug:"/guides/using-with-babel",permalink:"/jest-preset-angular/docs/8.x/guides/using-with-babel",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-8.x/guides/using-with-babel.md",tags:[],version:"8.x",lastUpdatedBy:"JiaLiPassion",lastUpdatedAt:1694586184,formattedLastUpdatedAt:"Sep 13, 2023",frontMatter:{id:"using-with-babel",title:"Using with Babel"},sidebar:"version-8.x-docs",previous:{title:"Configure other JSDOM versions",permalink:"/jest-preset-angular/docs/8.x/guides/jsdom-version"},next:{title:"Absolute Imports",permalink:"/jest-preset-angular/docs/8.x/guides/absolute-imports"}},p={},c=[],d={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you wish to use ",(0,o.kt)("inlineCode",{parentName:"p"},"Babel"),", you need to say jest to transpile such files manually."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install dependencies required by the official Jest documentation for ",(0,o.kt)("a",{parentName:"p",href:"https://jest-bot.github.io/jest/docs/babel.html"},"Babel integration"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," and add ",(0,o.kt)("inlineCode",{parentName:"p"},"babel.config.js")," (or modify existing if needed) with the following content:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function (api) {\n  api.cache(true);\n\n  const presets = ['@babel/preset-env'];\n  const plugins = [];\n\n  return {\n    presets,\n    plugins,\n  };\n};\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: do not use a ",(0,o.kt)("inlineCode",{parentName:"em"},".babelrc")," file otherwise the packages that you specify in the next step will not be picked up. CF ",(0,o.kt)("a",{parentName:"em",href:"https://babeljs.io/docs/en/configuration#what-s-your-use-case"},"Babel documentation")," and the comment ",(0,o.kt)("inlineCode",{parentName:"em"},"You want to compile node_modules? babel.config.js is for you!")),"."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Update Jest configuration (by default TypeScript process untranspiled JS files which is source of the problem):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  transform: {\n    '^.+\\\\.(ts|html)$': 'ts-jest',\n    '^.+\\\\.js$': 'babel-jest',\n  },\n};\n")))}f.isMDXComponent=!0}}]);