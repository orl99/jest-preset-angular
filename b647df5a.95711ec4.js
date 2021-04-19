(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(m,s(s({ref:t},c),{},{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(112)),i={id:"using-with-babel",title:"Using with Babel"},s={unversionedId:"guides/using-with-babel",id:"version-8.x/guides/using-with-babel",isDocsHomePage:!1,title:"Using with Babel",description:"If you wish to use Babel, you need to say jest to transpile such files manually.",source:"@site/versioned_docs/version-8.x/guides/using-with-babel.md",slug:"/guides/using-with-babel",permalink:"/jest-preset-angular/docs/guides/using-with-babel",editUrl:"https://github.com/thymikee/jest-preset-angular/edit/master/website/versioned_docs/version-8.x/guides/using-with-babel.md",version:"8.x",sidebar:"version-8.x-docs",previous:{title:"Configure other JSDOM versions",permalink:"/jest-preset-angular/docs/guides/jsdom-version"},next:{title:"Absolute Imports",permalink:"/jest-preset-angular/docs/guides/absolute-imports"}},l=[],c={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If you wish to use ",Object(a.b)("inlineCode",{parentName:"p"},"Babel"),", you need to say jest to transpile such files manually."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Install dependencies required by the official Jest documentation for ",Object(a.b)("a",{parentName:"p",href:"https://jest-bot.github.io/jest/docs/babel.html"},"Babel integration"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Install ",Object(a.b)("inlineCode",{parentName:"p"},"@babel/preset-env")," and add ",Object(a.b)("inlineCode",{parentName:"p"},"babel.config.js")," (or modify existing if needed) with the following content:"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"module.exports = function (api) {\n  api.cache(true);\n\n  const presets = ['@babel/preset-env'];\n  const plugins = [];\n\n  return {\n    presets,\n    plugins,\n  };\n};\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Note: do not use a ",Object(a.b)("inlineCode",{parentName:"em"},".babelrc")," file otherwise the packages that you specify in the next step will not be picked up. CF ",Object(a.b)("a",{parentName:"em",href:"https://babeljs.io/docs/en/configuration#what-s-your-use-case"},"Babel documentation")," and the comment ",Object(a.b)("inlineCode",{parentName:"em"},"You want to compile node_modules? babel.config.js is for you!")),"."),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Update Jest configuration (by default TypeScript process untranspiled JS files which is source of the problem):")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  transform: {\n    '^.+\\\\.(ts|html)$': 'ts-jest',\n    '^.+\\\\.js$': 'babel-jest',\n  },\n};\n")))}u.isMDXComponent=!0}}]);