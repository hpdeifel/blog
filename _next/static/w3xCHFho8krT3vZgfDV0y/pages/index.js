(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"/EDR":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("23aj");return{page:e.default||e}}])},"23aj":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("NqE+"),c=a("YFqc"),l=a.n(c);function s(e){return r.a.createElement(l.a,{href:"post?fullUrl=".concat(e.href),as:e.href},r.a.createElement("a",{className:"b black o-80 glow no-underline lh-solid ".concat(e.className||"")},e.children))}var o=function(e){return r.a.createElement("div",{className:"mb4 pb2 bb b--light-gray"},r.a.createElement(s,{href:e.href,className:"f3"},e.title),e.preview&&r.a.createElement("p",{className:"mv1 o-60"},e.preview,r.a.createElement(s,{href:e.href},r.a.createElement("span",null," »"))),e.date&&r.a.createElement("small",{className:"db ttu o-40"},r.a.createElement("time",{key:new Date(e.date).toISOString()},e.date)))};var p=a("pLtp"),u=a.n(p);var d=a("vivp"),m=a("2LNF");t.default=function(e){return r.a.createElement("div",null,r.a.createElement(i.a,{siteTitle:"".concat(d.siteTitle," - Index"),heroTitle:d.siteTitle,description:d.description,stylesheets:d.stylesheets,topLinks:d.topLinks,backgroundClass:d.backgroundClass,body:(a={summaryJson:m},t=a.summaryJson,n=t&&t.fileMap&&u()(t.fileMap).filter(function(e){if(e.match(/^content\/\d{4}\//))return!0}).map(function(e){return t.fileMap[e]}).sort(function(e,t){var a=Date.parse(e.date),n=Date.parse(t.date);return n>a?1:n<a?-1:0}),r.a.createElement("div",{className:"center mw6 pa3 pa4-ns"},n.map(function(e,t){var a,n=function(e){return"/blog"+"".concat(e.dir.split("content").join(""),"/").concat(e.base.split(".json").join(""))}(e),i=(a=e.date,new Date(a).toUTCString().split(" ").slice(1,4).join(" "));return r.a.createElement(o,{title:e.title,preview:e.preview,date:i,href:n,key:t})}))),copyright:d.copyright,siteId:d.siteId}));var t,a,n}}},[["/EDR","5d41","9da1"]]]);