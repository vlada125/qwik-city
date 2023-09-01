import{j as d,b as ce,c as ue,F as _,s as V,d as G,i as x,u as de,e as fe,f as me,g as pe,h as ve,k as p,R as be,l as y,m as h,n as he,o as A,p as ye,r as we,Q as qe,S as ge,t as _e,w as Ee}from"./@qwik-city-plan-8112deef.js";/**
 * @license
 * @builder.io/qwik/server 1.1.5
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var ke=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,t)=>(typeof require<"u"?require:n)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});function X(e,n){const t=n==null?void 0:n.mapper,o=e.symbolMapper?e.symbolMapper:s=>{var i;if(t){const a=I(s),l=t[a];if(!l){if((i=globalThis.__qwik_reg_symbols)==null?void 0:i.has(a))return[s,"_"];console.error("Cannot resolve symbol",s,"in",t)}return l}};return{isServer:!0,async importSymbol(s,i,a){var q;const l=I(a),v=(q=globalThis.__qwik_reg_symbols)==null?void 0:q.get(l);if(v)return v;let u=String(i);u.endsWith(".js")||(u+=".js");const E=ke(u);if(!(a in E))throw new Error(`Q-ERROR: missing symbol '${a}' in module '${u}'.`);return E[a]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:s=>new Promise(i=>{setTimeout(()=>{i(s())})}),chunkForSymbol(s){return o(s,t)}}}async function Se(e,n){const t=X(e,n);V(t)}var I=e=>{const n=e.lastIndexOf("_");return n>-1?e.slice(n+1):e};function C(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function ee(e){let n=e.base;return typeof e.base=="function"&&(n=e.base(e)),typeof n=="string"?(n.endsWith("/")||(n+="/"),n):"/build/"}var Ae='((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);',Ce=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,Ie='((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);',Le=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;function xe(e={}){return Array.isArray(e.events)&&e.events.length>0?(e.debug?Le:Ie).replace("window.qEvents",JSON.stringify(e.events)):e.debug?Ce:Ae}function Re(e,n,t){if(!t)return[];const o=n.prefetchStrategy,r=ee(n);if(o!==null){if(!o||!o.symbolsToPrefetch||o.symbolsToPrefetch==="auto")return Te(e,t,r);if(typeof o.symbolsToPrefetch=="function")try{return o.symbolsToPrefetch({manifest:t.manifest})}catch(s){console.error("getPrefetchUrls, symbolsToPrefetch()",s)}}return[]}function Te(e,n,t){const o=[],r=e==null?void 0:e.qrls,{mapper:s,manifest:i}=n,a=new Set;if(Array.isArray(r))for(const l of r){const v=l.getHash(),u=s[v];u&&ne(i,a,o,t,u[1])}return o}function ne(e,n,t,o,r){const s=o+r;if(!n.has(s)){n.add(s);const i=e.bundles[r];if(i){const a={url:s,imports:[]};if(t.push(a),Array.isArray(i.imports))for(const l of i.imports)ne(e,n,a.imports,o,l)}}}function Ne(e){if(e!=null&&e.mapping!=null&&typeof e.mapping=="object"&&e.symbols!=null&&typeof e.symbols=="object"&&e.bundles!=null&&typeof e.bundles=="object")return e}function L(){let r=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return r+="w.postMessage(u.map(u=>new URL(u,origin)+''));",r+="w.onmessage=()=>{w.terminate()};",r}function Pe(e){const n={bundles:k(e).map(t=>t.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(n)}}))`}function k(e){const n=[],t=o=>{if(Array.isArray(o))for(const r of o)n.includes(r.url)||(n.push(r.url),t(r.imports))};return t(e),n}function je(e,n,t){const o=Ue(e==null?void 0:e.implementation),r=[];return o.prefetchEvent==="always"&&Oe(r,n,t),o.linkInsert==="html-append"&&De(r,n,o),o.linkInsert==="js-append"?$e(r,n,o,t):o.workerFetchInsert==="always"&&Fe(r,n,t),r.length>0?d(_,{children:r}):null}function Oe(e,n,t){e.push(d("script",{type:"module",dangerouslySetInnerHTML:Pe(n),nonce:t}))}function De(e,n,t){const o=k(n),r=t.linkRel||"prefetch";for(const s of o){const i={};i.href=s,i.rel=r,(r==="prefetch"||r==="preload")&&s.endsWith(".js")&&(i.as="script"),e.push(d("link",i,void 0))}}function $e(e,n,t,o){const r=t.linkRel||"prefetch";let s="";t.workerFetchInsert==="no-link-support"&&(s+="let supportsLinkRel = true;"),s+=`const u=${JSON.stringify(k(n))};`,s+="u.map((u,i)=>{",s+="const l=document.createElement('link');",s+='l.setAttribute("href",u);',s+=`l.setAttribute("rel","${r}");`,t.workerFetchInsert==="no-link-support"&&(s+="if(i===0){",s+="try{",s+=`supportsLinkRel=l.relList.supports("${r}");`,s+="}catch(e){}",s+="}"),s+="document.body.appendChild(l);",s+="});",t.workerFetchInsert==="no-link-support"&&(s+="if(!supportsLinkRel){",s+=L(),s+="}"),t.workerFetchInsert==="always"&&(s+=L()),e.push(d("script",{type:"module",dangerouslySetInnerHTML:s,nonce:o}))}function Fe(e,n,t){let o=`const u=${JSON.stringify(k(n))};`;o+=L(),e.push(d("script",{type:"module",dangerouslySetInnerHTML:o,nonce:t}))}function Ue(e){return e&&typeof e=="object"?e:ze}var ze={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},Qe="<!DOCTYPE html>";async function Be(e,n){var D;let t=n.stream,o=0,r=0,s=0,i=0,a="",l;const v=((D=n.streaming)==null?void 0:D.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},u=n.containerTagName??"html",E=n.containerAttributes??{},q=t,re=C(),se=ee(n),b=te(n.manifest);function R(){a&&(q.write(a),a="",o=0,s++,s===1&&(i=re()))}function T(c){const f=c.length;o+=f,r+=f,a+=c}switch(v.strategy){case"disabled":t={write:T};break;case"direct":t=q;break;case"auto":let c=0,f=!1;const $=v.maximunChunk??0,S=v.maximunInitialChunk??0;t={write(w){w==="<!--qkssr-f-->"?f||(f=!0):w==="<!--qkssr-pu-->"?c++:w==="<!--qkssr-po-->"?c--:T(w),c===0&&(f||o>=(s===0?S:$))&&(f=!1,R())}};break}u==="html"?t.write(Qe):(t.write("<!--cq-->"),n.qwikLoader?(n.qwikLoader.include===void 0&&(n.qwikLoader.include="never"),n.qwikLoader.position===void 0&&(n.qwikLoader.position="bottom")):n.qwikLoader={include:"never"}),n.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await Se(n,b);const N=b==null?void 0:b.manifest.injections,oe=N?N.map(c=>d(c.tag,c.attributes??{})):void 0,ie=C(),P=[];let j=0,O=0;await ce(e,{stream:t,containerTagName:u,containerAttributes:E,serverData:n.serverData,base:se,beforeContent:oe,beforeClose:async(c,f,$,S)=>{var B,H,M,W,K,J,Y;j=ie();const w=C();l=await ue(c,f,void 0,S);const F=JSON.stringify(l.state,void 0,void 0),g=[d("script",{type:"qwik/json",dangerouslySetInnerHTML:He(F),nonce:(B=n.serverData)==null?void 0:B.nonce})];if(l.funcs.length>0&&g.push(d("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:We(l.funcs),nonce:(H=n.serverData)==null?void 0:H.nonce})),n.prefetchStrategy!==null){const m=Re(l,n,b);if(m.length>0){const Z=je(n.prefetchStrategy,m,(M=n.serverData)==null?void 0:M.nonce);Z&&g.push(Z)}}const le=!l||l.mode!=="static",U=((W=n.qwikLoader)==null?void 0:W.include)??"auto",z=U==="always"||U==="auto"&&le;if(z){const m=xe({events:(K=n.qwikLoader)==null?void 0:K.events,debug:n.debug});g.push(d("script",{id:"qwikloader",dangerouslySetInnerHTML:m,nonce:(J=n.serverData)==null?void 0:J.nonce}))}const Q=Array.from(f.$events$,m=>JSON.stringify(m));if(Q.length>0){let m=`window.qwikevents.push(${Q.join(", ")})`;z||(m=`window.qwikevents||=[];${m}`),g.push(d("script",{dangerouslySetInnerHTML:m,nonce:(Y=n.serverData)==null?void 0:Y.nonce}))}return Me(P,c),O=w(),d(_,{children:g})}}),u!=="html"&&t.write("<!--/cq-->"),R();const ae=l.resources.some(c=>c._cache!==1/0);return{prefetchResources:void 0,snapshotResult:l,flushes:s,manifest:b==null?void 0:b.manifest,size:r,isStatic:!ae,timing:{render:j,snapshot:O,firstFlush:i},_symbols:P}}function te(e){if(e){if("mapper"in e)return e;if(e=Ne(e),e){const n={};return Object.entries(e.mapping).forEach(([t,o])=>{n[I(t)]=[t,o]}),{mapper:n,manifest:e}}}}var He=e=>e.replace(/<(\/?script)/g,"\\x3C$1");function Me(e,n){var t;for(const o of n){const r=(t=o.$componentQrl$)==null?void 0:t.getSymbol();r&&!e.includes(r)&&e.push(r)}}function We(e){return`document.currentScript.qFuncs=[${e.join(`,
`)}]`}async function nn(e){const n=X({manifest:e},te(e));V(n)}const Ke=null,Je=async()=>{const[e]=we();return await e.executeQuery$()},Ye=()=>{const e=de(fe),n=me(x(Je,"s_K00FBvxIxRc",[e])),t=pe(),o=ve();return p(_,{children:[p(be,{value:n,onPending:()=>p(_,{children:"Loading Item"},3,"OA_0"),onResolved:r=>{var s,i,a;return y("title",null,null,o.url.pathname.replaceAll("/","")||((a=(i=(s=r==null?void 0:r.global)==null?void 0:s.data)==null?void 0:i.attributes)==null?void 0:a.title),1,"OA_1")},onRejected:r=>p(_,{children:["Error fetching item: ",r]},1,"OA_2"),[h]:{value:h,onPending:h,onResolved:h,onRejected:h}},3,"OA_3"),y("link",null,{rel:"canonical",href:he(r=>r.url.href,[o],"p0.url.href")},null,3,null),y("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),y("link",null,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,3,null),t.meta.map(r=>A("meta",{...r},null,0,r.key)),t.links.map(r=>A("link",{...r},null,0,r.key)),t.styles.map(r=>A("style",{...r.props,dangerouslySetInnerHTML:ye(r,"style")},null,0,r.key))]},1,"OA_4")},Ze=G(x(Ye,"s_zrbrqoaqXSY"));const Ve=()=>p(Ee,{get url(){return"http://localhost:1337/graphql"},get headers(){return{authorization:"bearer 79ec1082303e6894065426ec6cfabc0f74b356b9c61c15d25ae8d8d3bf58d38cf6f0b802259ee1c0b12abd877205ef1f84672b90d3f77540eca1ccc92a6e9e2a3999773c6a2b7498a3e3332d1017095b846477b6f701bc97afd384eb0d275a36945b12cdd45cd79205209626bfc006e42be875f74065b5425e22ce15295c1138"}},children:p(qe,{children:[y("head",null,null,[y("meta",null,{charSet:"utf-8"},null,3,null),y("link",null,{rel:"manifest",href:"/manifest.json"},null,3,null),p(Ze,null,3,"35_0"),p(ge,null,3,"35_1")],1,null),y("body",null,{lang:"en"},p(_e,null,3,"35_2"),1,null)]},1,"35_3"),[h]:{url:h,headers:h}},1,"35_4"),Ge=G(x(Ve,"s_3sccYCDd1Z0"));function tn(e){return Be(p(Ge,null,3,"pY_0"),{manifest:Ke,...e,containerAttributes:{lang:"en-us",...e.containerAttributes}})}export{Ke as m,tn as r,nn as s};
