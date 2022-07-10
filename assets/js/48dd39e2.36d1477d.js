"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9664],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,f=m["".concat(l,".").concat(c)]||m[c]||d[c]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9219:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(4137)),a=["components"],s={id:"options",title:"Options"},l=void 0,p={unversionedId:"getting-started/options",id:"version-12.0/getting-started/options",title:"Options",description:"jest-preset-angular uses ts-jest options under the hood, which are located under the globals of Jest config object",source:"@site/versioned_docs/version-12.0/getting-started/options.md",sourceDirName:"getting-started",slug:"/getting-started/options",permalink:"/jest-preset-angular/docs/getting-started/options",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-12.0/getting-started/options.md",tags:[],version:"12.0",frontMatter:{id:"options",title:"Options"},sidebar:"version-12.0-docs",previous:{title:"Presets",permalink:"/jest-preset-angular/docs/getting-started/presets"},next:{title:"Test environment",permalink:"/jest-preset-angular/docs/getting-started/test-environment"}},u={},d=[{value:"Exposed configuration",id:"exposed-configuration",level:3},{value:"Brief explanation of config",id:"brief-explanation-of-config",level:3}],m={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," options under the hood, which are located under the ",(0,o.kt)("inlineCode",{parentName:"p"},"globals")," of Jest config object\nin the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file of your project, or through a ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.config.js"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.config.ts")," file."),(0,o.kt)("p",null,"More information about ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," options, see ",(0,o.kt)("a",{parentName:"p",href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/options"},"https://kulshekhar.github.io/ts-jest/docs/getting-started/options")),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"Since ",(0,o.kt)("strong",{parentName:"p"},"v9.0.0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," default Jest configuration no longer provides ",(0,o.kt)("inlineCode",{parentName:"p"},"moduleNameMapper"),". If you wish to reuse\nthe old ",(0,o.kt)("inlineCode",{parentName:"p"},"moduleNameMapper")," configuration, you can put this into your Jest config."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"moduleNameMapper: {\n  '^src/(.*)$': '<rootDir>/src/$1',\n  '^app/(.*)$': '<rootDir>/src/app/$1',\n  '^assets/(.*)$': '<rootDir>/src/assets/$1',\n  '^environments/(.*)$': '<rootDir>/src/environments/$1',\n}\n")),(0,o.kt)("h3",{parentName:"admonition",id:"processing-with-esbuild"},"Processing with esbuild"),(0,o.kt)("p",{parentName:"admonition"},"Since ",(0,o.kt)("strong",{parentName:"p"},"v11.0.0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," introduced the usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"esbuild")," to process files besides TypeScript API. By default, all ",(0,o.kt)("inlineCode",{parentName:"p"},".mjs")," files\nwill be processed by ",(0,o.kt)("inlineCode",{parentName:"p"},"esbuild")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular"),". To configure extra files to process with ",(0,o.kt)("inlineCode",{parentName:"p"},"esbuild"),", one can do the following:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  //...\n  globals: {\n    ngJest: {\n      processWithEsbuild: [<glob_to_files>],\n    },\n  },\n}\n"))),(0,o.kt)("h3",{id:"exposed-configuration"},"Exposed configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const snapshotSerializers = require('../build/serializers');\n\nmodule.exports = {\n  globals: {\n    'ts-jest': {\n      tsconfig: '<rootDir>/tsconfig.spec.json',\n      stringifyContentPathRegex: '\\\\.(html|svg)$',\n    },\n  },\n  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],\n  resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',\n  snapshotSerializers,\n  testEnvironment: 'jsdom',\n  transformIgnorePatterns: ['node_modules/(?!.*\\\\.mjs$)'],\n  transform: {\n    '^.+\\\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular',\n  },\n};\n")),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"Jest runs with ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," neither in browser nor through dev server. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"JSDOM")," to abstract browser environment hence we depend on\n",(0,o.kt)("inlineCode",{parentName:"p"},"JSDOM")," implementation for real browser features.")),(0,o.kt)("h3",{id:"brief-explanation-of-config"},"Brief explanation of config"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We're using some ",(0,o.kt)("inlineCode",{parentName:"li"},'"globals"')," to pass information about configuration to use for code compilation with ",(0,o.kt)("inlineCode",{parentName:"li"},"ts-jest"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"moduleFileExtensions"')," \u2013 our modules are TypeScript (",(0,o.kt)("inlineCode",{parentName:"li"},"ts"),"), HTML (",(0,o.kt)("inlineCode",{parentName:"li"},"html"),"), JavaScript (",(0,o.kt)("inlineCode",{parentName:"li"},"js"),"), JSON (",(0,o.kt)("inlineCode",{parentName:"li"},"json"),") and ESM JavaScript (",(0,o.kt)("inlineCode",{parentName:"li"},"mjs"),") files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"moduleNameMapper"')," \u2013 if you're using absolute imports here's how to tell Jest where to look for them; uses ",(0,o.kt)("inlineCode",{parentName:"li"},"RegExp"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"resolver"')," - instruct Jest how to resolve entry file based on ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," definitions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"snapshotSerializers"')," - array of serializers which will be applied to snapshot the code. Note: by default angular adds\nsome angular-specific attributes to the code (like ",(0,o.kt)("inlineCode",{parentName:"li"},"ng-reflect-*"),", ",(0,o.kt)("inlineCode",{parentName:"li"},'ng-version="*"'),", ",(0,o.kt)("inlineCode",{parentName:"li"},"_ngcontent-c*")," etc).\nThis package provides serializer to remove such attributes. This makes snapshots cleaner and more human-readable.\nTo remove such specific attributes use ",(0,o.kt)("inlineCode",{parentName:"li"},"no-ng-attributes")," serializer. You need to add ",(0,o.kt)("inlineCode",{parentName:"li"},"no-ng-attributes")," serializer manually."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"testEnvironment"')," \u2013 the test environment to run on."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"transformIgnorePatterns"'),": instruct Jest to transform any ",(0,o.kt)("inlineCode",{parentName:"li"},".mjs")," files which come from ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"transform"')," \u2013 run every ",(0,o.kt)("inlineCode",{parentName:"li"},"TS"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"JS"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"MJS"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"HTML"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"SVG")," file through so called ",(0,o.kt)("em",{parentName:"li"},"Jest transformer"),"; this lets Jest understand non-JS syntax.")))}c.isMDXComponent=!0}}]);