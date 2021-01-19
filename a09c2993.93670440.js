(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(97)),c={id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/"},s={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"\ud83e\udd5c goober, a less than 1KB css-in-js solution.",source:"@site/docs/introduction.md",slug:"/",permalink:"/",editUrl:"https://github.com/cristianbote/goober/edit/master/docs/introduction.md",version:"current",sidebar_label:"Introduction",sidebar:"docs",next:{title:"styled",permalink:"/api/styled"}},i=[{value:"Usage",id:"usage",children:[]},{value:"Examples",id:"examples",children:[]},{value:"SSR",id:"ssr",children:[]},{value:"Benchmarks",id:"benchmarks",children:[{value:"Browser",id:"browser",children:[]},{value:"SSR",id:"ssr-1",children:[]}]},{value:"Browser support",id:"browser-support",children:[]}],b={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\ud83e\udd5c goober, a less than 1KB css-in-js solution."),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#backers"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://opencollective.com/goober/backers/badge.svg",alt:"Backers on Open Collective"}))),"\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#sponsors"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://opencollective.com/goober/sponsors/badge.svg",alt:"Sponsors on Open Collective"})))),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/goober"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/goober",alt:"version"}))),"\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://travis-ci.org/cristianbote/goober"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://travis-ci.org/cristianbote/goober.svg?branch=master",alt:"status"}))),"\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://unpkg.com/goober"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.badgesize.io/https://unpkg.com/goober@latest/dist/goober.module.js?compression=gzip",alt:"gzip size"}))),"\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/goober"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/npm/dm/goober",alt:"downloads"}))),"\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://codecov.io/github/cristianbote/goober?branch=master"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/codecov/c/github/cristianbote/goober.svg?maxAge=2592000",alt:"coverage"}))),"\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://join.slack.com/t/gooberdev/shared_invite/enQtOTM5NjUyOTcwNzI1LWUwNzg0NTQwODY1NDJmMzQ2NzdlODI4YTM3NWUwYjlkY2ZkNGVmMTFlNGMwZGUyOWQyZmI4OTYwYmRiMzE0NGQ"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/slack-join-orange",alt:"Slack"}))),"\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://greenkeeper.io/"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://badges.greenkeeper.io/cristianbote/goober.svg",alt:"Greenkeeper badge"})))),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"The API is inspired by emotion, ",Object(o.b)("inlineCode",{parentName:"p"},"styled")," function. Meaning, you call it with your ",Object(o.b)("inlineCode",{parentName:"p"},"tagName")," and returns a vDOM component for that tag. Note, ",Object(o.b)("inlineCode",{parentName:"p"},"setup")," is needed to be run before the ",Object(o.b)("inlineCode",{parentName:"p"},"styled")," function is used."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { h } from 'preact';\nimport { styled, setup } from 'goober';\n\n// Should be called here, and just once\nsetup(h);\n\nconst Icon = styled('span')`\n    display: flex;\n    flex: 1;\n    color: red;\n`;\n\nconst Button = styled('button')`\n    background: dodgerblue;\n    color: white;\n    border: ${Math.random()}px solid white;\n\n    &:focus,\n    &:hover {\n        padding: 1em;\n    }\n\n    .otherClass {\n        margin: 0;\n    }\n\n    ${Icon} {\n        color: black;\n    }\n`;\n")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://codesandbox.io/s/qlywyp7z4q"}),"Vanilla")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://codesandbox.io/s/k0mnp40n7v"}),"React")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://codesandbox.io/s/r15wj2qm7o"}),"Preact")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://codesandbox.io/s/7m9zzl6746"}),"SSR with Preact")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://codesandbox.io/s/fre-goober-ffqjv"}),"Fre"))),Object(o.b)("h2",{id:"ssr"},"SSR"),Object(o.b)("p",null,"You can get the critical CSS for SSR, via ",Object(o.b)("inlineCode",{parentName:"p"},"extractCss"),". Take a look at this example: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://codesandbox.io/s/7m9zzl6746"}),"CodeSandbox: SSR with Preact and goober")," and read the full explanation for ",Object(o.b)("inlineCode",{parentName:"p"},"extractCSS")," and ",Object(o.b)("inlineCode",{parentName:"p"},"targets")," below."),Object(o.b)("h2",{id:"benchmarks"},"Benchmarks"),Object(o.b)("p",null,"You results are included inside the build output as well."),Object(o.b)("h3",{id:"browser"},"Browser"),Object(o.b)("p",null,"These are not yet measured. Need some time."),Object(o.b)("h3",{id:"ssr-1"},"SSR"),Object(o.b)("p",null,"The benchmark is testing the following scenario:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import styled from 'package';\n\n// Create the dynamic styled component\nconst Foo = styled('div')((props) => ({\n    opacity: props.counter > 0.5 ? 1 : 0,\n    '@media (min-width: 1px)': {\n        rule: 'all'\n    },\n    '&:hover': {\n        another: 1,\n        display: 'space'\n    }\n}));\n\n// Serialize the component\nrenderToString(<Foo counter={Math.random()} />);\n")),Object(o.b)("p",null,"The results are:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"goober x 39,348 ops/sec \xb11.67% (87 runs sampled)\nstyled-components x 21,469 ops/sec \xb13.60% (85 runs sampled)\nemotion x 46,504 ops/sec \xb14.67% (85 runs sampled)\n\nFastest is: emotion\n")),Object(o.b)("h2",{id:"browser-support"},"Browser support"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"goober")," uses microbundle to bundle and transpile it's src into code that browsers can leverage. As you might figure it out, until now, Internet Explorer was the buggiest of them all. ",Object(o.b)("inlineCode",{parentName:"p"},"goober")," works on IE9, as we've successfully test it."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"IE 9\niOS 9.3\nChrome 42\nFF 34\nSafari 9\n")))}p.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),l=p(n),u=r,m=l["".concat(c,".").concat(u)]||l[u]||d[u]||o;return n?a.a.createElement(m,s(s({ref:t},b),{},{components:n})):a.a.createElement(m,s({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);