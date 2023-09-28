/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,o,r){for(var i,s=arguments.length,l=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r,a=t.length-1;a>=0;a--)(i=t[a])&&(l=(s<3?i(l):s>3?i(e,o,l):i(e,o))||l);return s>3&&l&&Object.defineProperty(e,o,l),l}function e(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}function o(t,e,o){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,o),o}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r=window,i=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),l=new WeakMap;class a{constructor(t,e,o){if(this._$cssResult$=!0,o!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=l.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&l.set(e,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1]),t[0]);return new a(o,t,s)},h=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var c;const d=window,p=d.trustedTypes,u=p?p.emptyScript:"",v=d.reactiveElementPolyfillSupport,g={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},m=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:m},b="finalized";class k extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const r=this._$Ep(o,e);void 0!==r&&(this._$Ev.set(r,o),t.push(r))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(r){const i=this[t];this[e]=r,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty(b))return!1;this[b]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{i?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const o=document.createElement("style"),i=r.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=e.cssText,t.appendChild(o)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=f){var r;const i=this.constructor._$Ep(t,o);if(void 0!==i&&!0===o.reflect){const s=(void 0!==(null===(r=o.converter)||void 0===r?void 0:r.toAttribute)?o.converter:g).toAttribute(e,o.type);this._$El=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(t,e){var o;const r=this.constructor,i=r._$Ev.get(t);if(void 0!==i&&this._$El!==i){const t=r.getPropertyOptions(i),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(o=t.converter)||void 0===o?void 0:o.fromAttribute)?t.converter:g;this._$El=i,this[i]=s.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,o){let r=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||m)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var w;k[b]=!0,k.elementProperties=new Map,k.elementStyles=[],k.shadowRootOptions={mode:"open"},null==v||v({ReactiveElement:k}),(null!==(c=d.reactiveElementVersions)&&void 0!==c?c:d.reactiveElementVersions=[]).push("1.6.3");const y=window,x=y.trustedTypes,_=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,z="?"+S,A=`<${z}>`,M=document,C=()=>M.createComment(""),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,j="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,N=/>/g,P=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,q=/"/g,R=/^(?:script|style|textarea|title)$/i,W=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),B=W(1),I=W(2),H=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),X=new WeakMap,Z=M.createTreeWalker(M,129,null,!1);function F(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==_?_.createHTML(e):e}const J=(t,e)=>{const o=t.length-1,r=[];let i,s=2===e?"<svg>":"",l=O;for(let e=0;e<o;e++){const o=t[e];let a,n,h=-1,c=0;for(;c<o.length&&(l.lastIndex=c,n=l.exec(o),null!==n);)c=l.lastIndex,l===O?"!--"===n[1]?l=D:void 0!==n[1]?l=N:void 0!==n[2]?(R.test(n[2])&&(i=RegExp("</"+n[2],"g")),l=P):void 0!==n[3]&&(l=P):l===P?">"===n[0]?(l=null!=i?i:O,h=-1):void 0===n[1]?h=-2:(h=l.lastIndex-n[2].length,a=n[1],l=void 0===n[3]?P:'"'===n[3]?q:U):l===q||l===U?l=P:l===D||l===N?l=O:(l=P,i=void 0);const d=l===P&&t[e+1].startsWith("/>")?" ":"";s+=l===O?o+A:h>=0?(r.push(a),o.slice(0,h)+$+o.slice(h)+S+d):o+S+(-2===h?(r.push(void 0),e):d)}return[F(t,s+(t[o]||"<?>")+(2===e?"</svg>":"")),r]};class K{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let i=0,s=0;const l=t.length-1,a=this.parts,[n,h]=J(t,e);if(this.el=K.createElement(n,o),Z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=Z.nextNode())&&a.length<l;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith($)||e.startsWith(S)){const o=h[s++];if(t.push(e),void 0!==o){const t=r.getAttribute(o.toLowerCase()+$).split(S),e=/([.?@])?(.*)/.exec(o);a.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?tt:"?"===e[1]?ot:"@"===e[1]?rt:Y})}else a.push({type:6,index:i})}for(const e of t)r.removeAttribute(e)}if(R.test(r.tagName)){const t=r.textContent.split(S),e=t.length-1;if(e>0){r.textContent=x?x.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],C()),Z.nextNode(),a.push({type:2,index:++i});r.append(t[e],C())}}}else if(8===r.nodeType)if(r.data===z)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(S,t+1));)a.push({type:7,index:i}),t+=S.length-1}i++}}static createElement(t,e){const o=M.createElement("template");return o.innerHTML=t,o}}function V(t,e,o=t,r){var i,s,l,a;if(e===H)return e;let n=void 0!==r?null===(i=o._$Co)||void 0===i?void 0:i[r]:o._$Cl;const h=E(e)?void 0:e._$litDirective$;return(null==n?void 0:n.constructor)!==h&&(null===(s=null==n?void 0:n._$AO)||void 0===s||s.call(n,!1),void 0===h?n=void 0:(n=new h(t),n._$AT(t,o,r)),void 0!==r?(null!==(l=(a=o)._$Co)&&void 0!==l?l:a._$Co=[])[r]=n:o._$Cl=n),void 0!==n&&(e=V(t,n._$AS(t,e.values),n,r)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:o},parts:r}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:M).importNode(o,!0);Z.currentNode=i;let s=Z.nextNode(),l=0,a=0,n=r[0];for(;void 0!==n;){if(l===n.index){let e;2===n.type?e=new Q(s,s.nextSibling,this,t):1===n.type?e=new n.ctor(s,n.name,n.strings,this,t):6===n.type&&(e=new it(s,this,t)),this._$AV.push(e),n=r[++a]}l!==(null==n?void 0:n.index)&&(s=Z.nextNode(),l++)}return Z.currentNode=M,i}v(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class Q{constructor(t,e,o,r){var i;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cp=null===(i=null==r?void 0:r.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),E(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==H&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>T(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==L&&E(this._$AH)?this._$AA.nextSibling.data=t:this.$(M.createTextNode(t)),this._$AH=t}g(t){var e;const{values:o,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=K.createElement(F(r.h,r.h[0]),this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.v(o);else{const t=new G(i,this),e=t.u(this.options);t.v(o),this.$(e),this._$AH=t}}_$AC(t){let e=X.get(t.strings);return void 0===e&&X.set(t.strings,e=new K(t)),e}T(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const i of t)r===e.length?e.push(o=new Q(this.k(C()),this.k(C()),this,this.options)):o=e[r],o._$AI(i),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Y{constructor(t,e,o,r,i){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,r){const i=this.strings;let s=!1;if(void 0===i)t=V(this,t,e,0),s=!E(t)||t!==this._$AH&&t!==H,s&&(this._$AH=t);else{const r=t;let l,a;for(t=i[0],l=0;l<i.length-1;l++)a=V(this,r[o+l],e,l),a===H&&(a=this._$AH[l]),s||(s=!E(a)||a!==this._$AH[l]),a===L?t=L:t!==L&&(t+=(null!=a?a:"")+i[l+1]),this._$AH[l]=a}s&&!r&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}const et=x?x.emptyScript:"";class ot extends Y{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,et):this.element.removeAttribute(this.name)}}class rt extends Y{constructor(t,e,o,r,i){super(t,e,o,r,i),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=V(this,t,e,0))&&void 0!==o?o:L)===H)return;const r=this._$AH,i=t===L&&r!==L||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==L&&(r===L||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const st=y.litHtmlPolyfillSupport;null==st||st(K,Q),(null!==(w=y.litHtmlVersions)&&void 0!==w?w:y.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var lt,at;class nt extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{var r,i;const s=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:e;let l=s._$litPart$;if(void 0===l){const t=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;s._$litPart$=l=new Q(e.insertBefore(C(),t),t,void 0,null!=o?o:{})}return l._$AI(t),l})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return H}}nt.finalized=!0,nt._$litElement$=!0,null===(lt=globalThis.litElementHydrateSupport)||void 0===lt||lt.call(globalThis,{LitElement:nt});const ht=globalThis.litElementPolyfillSupport;null==ht||ht({LitElement:nt}),(null!==(at=globalThis.litElementVersions)&&void 0!==at?at:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:r}=e;return{kind:o,elements:r,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,dt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function pt(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):dt(t,e)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var ut;null===(ut=window.HTMLSlotElement)||void 0===ut||ut.prototype.assignedElements;const vt=["heritage","spark","scientific-highlight","white","people-highlight","intuitive-highlight","spark-highlight","people","scientific","artful","intuitive","elegance"],gt=n`
  :host([palette='heritage']) {
    --color-palette-foreground: var(--color-heritage-blue);
    --color-palette-background: var(--color-heritage-muted);
    --color-palette-text: var(--color-white);
    --color-palette-highlight: var(--color-spark-orange);

    --color-palette-logo-text: var(--color-white);
    --color-palette-logo-spark: var(--color-spark-orange);
  }

  :host([palette='spark']) {
    --color-palette-background: var(--color-spark-orange);
    --color-palette-foreground: var(--color-spark-muted);
    --color-palette-text: var(--color-white);
    --color-palette-highlight: var(--color-heritage-blue);

    --color-palette-logo-text: var(--color-white);
    --color-palette-logo-spark: var(--color-white);
  }

  :host([palette='scientific-highlight']) {
    --color-palette-background: var(--color-scientific-highlight);
    --color-palette-foreground: var(--color-scientific-light);
    --color-palette-text: var(--color-heritage-blue);
    --color-palette-highlight: var(--color-spark-orange);

    --color-palette-logo-text: var(--color-heritage-blue);
    --color-palette-logo-spark: var(--color-spark-orange);
  }

  :host([palette='white']) {
    --color-palette-background: var(--color-white);
    --color-palette-foreground: var(--color-heritage-highlight);
    --color-palette-text: var(--color-heritage-blue);
    --color-palette-highlight: var(--color-spark-orange);

    --color-palette-logo-text: var(--color-heritage-blue);
    --color-palette-logo-spark: var(--color-spark-orange);
  }

  :host([palette='people-highlight']) {
    --color-palette-background: var(--color-people-highlight);
    --color-palette-foreground: var(--color-people-light);
    --color-palette-text: var(--color-heritage-blue);
    --color-palette-highlight: var(--color-spark-orange);

    --color-palette-logo-text: var(--color-heritage-blue);
    --color-palette-logo-spark: var(--color-spark-orange);
  }

  :host([palette='intuitive-highlight']) {
    --color-palette-background: var(--color-intuitive-highlight);
    --color-palette-foreground: var(--color-intuitive-light);
    --color-palette-text: var(--color-heritage-blue);
    --color-palette-highlight: var(--color-intuitive-green);

    --color-palette-logo-text: var(--color-heritage-blue);
    --color-palette-logo-spark: var(--color-spark-orange);
  }

  :host([palette='spark-highlight']) {
    --color-palette-background: var(--color-spark-highlight);
    --color-palette-foreground: var(--color-spark-light);
    --color-palette-text: var(--color-heritage-blue);
    --color-palette-highlight: var(--color-spark-orange);

    --color-palette-logo-text: var(--color-heritage-blue);
    --color-palette-logo-spark: var(--color-spark-orange);
  }

  :host([palette='people']) {
    --color-palette-background: var(--color-people-yellow);
    --color-palette-foreground: var(--color-people-muted);
    --color-palette-text: var(--color-white);
    --color-palette-highlight: var(--color-people-highlight);

    --color-palette-logo-text: var(--color-white);
    --color-palette-logo-spark: var(--color-spark-orange);
  }

  :host([palette='scientific']) {
    --color-palette-background: var(--color-scientific-blue);
    --color-palette-foreground: var(--color-scientific-muted);
    --color-palette-text: var(--color-white);
    --color-palette-highlight: var(--color-scientific-light);

    --color-palette-logo-text: var(--color-white);
    --color-palette-logo-spark: var(--color-spark-orange);
  }

  :host([palette='artful']) {
    --color-palette-background: var(--color-artful-red);
    --color-palette-foreground: var(--color-artful-muted);
    --color-palette-text: var(--color-white);
    --color-palette-highlight: var(--color-artful-highlight);

    --color-palette-logo-text: var(--color-white);
    --color-palette-logo-spark: var(--color-spark-orange);
  }

  :host([palette='intuitive']) {
    --color-palette-background: var(--color-intuitive-green);
    --color-palette-foreground: var(--color-intuitive-muted);
    --color-palette-text: var(--color-white);
    --color-palette-highlight: var(--color-intuitive-highlight);

    --color-palette-logo-text: var(--color-white);
    --color-palette-logo-spark: var(--color-spark-orange);
  }

  :host([palette='elegance']) {
    --color-palette-background: var(--color-elegance-purple);
    --color-palette-foreground: var(--color-elegance-muted);
    --color-palette-text: var(--color-white);
    --color-palette-highlight: var(--color-elegance-highlight);

    --color-palette-logo-text: var(--color-white);
    --color-palette-logo-spark: var(--color-spark-orange);
  }
`,mt=n`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;var ft=[mt,gt,n`
    :host {
      display: block;
      position: relative;
      height: 100%;
      width: 100%;
      container-type: size;
    }

    ::slotted(*) {
      position: relative;
      z-index: 1;
    }

    .backdrop {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 10cqh 10cqw;
      inset: 0;
      overflow: hidden;
      background-color: var(--color-palette-background);
    }

    .backdrop::before {
      position: absolute;
      content: '';
      background-color: green;
      transform-origin: right 75%;
      transform: rotate(-30deg);
      width: 100%;
      height: 200%;
      left: -40%;
      bottom: 0;
      border-radius: 6.5rem;
      background-color: var(--color-palette-foreground);
    }
  `];const bt=t=>t[Math.floor(Math.random()*t.length)];let kt=class extends nt{constructor(){super(...arguments),this.palette="heritage"}handlePalette(){this.palette=bt(vt.filter((t=>t!==this.palette)))}render(){return B`
      <div class="backdrop">
        <slot @palette-swap=${this.handlePalette}></slot>
      </div>
    `}};kt.styles=ft,t([pt({type:String,reflect:!0})],kt.prototype,"palette",void 0),kt=t([ct("nedap-backdrop")],kt);var wt=[mt,n`
    :host {
      width: 20%;
    }
  `];const yt=n`
  var(--logo-color-text, var(--color-palette-logo-text))
`,xt=n`
  var(--logo-color-spark, var(--color-palette-logo-spark))
`;var _t=I`
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 406.82901 232.59999"
    fill="none"
    version="1.1"
    id="svg31"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0)" id="g24" transform="translate(-97,-158.197)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="m 322.462,311.517 c -0.006,0.117 -0.009,0.248 -0.011,0.397 v 9.948 c 0,0.533 0,0.799 -0.165,0.965 -0.042,0.041 -0.089,0.071 -0.144,0.095 -0.055,0.023 -0.119,0.038 -0.194,0.049 -0.066,0.009 -0.141,0.014 -0.225,0.017 l -0.402,0.004 h -40.118 c -7.99,0 -11.987,0 -14.468,2.483 -2.483,2.482 -2.483,6.478 -2.483,14.468 v 16.952 c 0,7.991 0,11.986 2.483,14.468 2.481,2.483 6.478,2.483 14.468,2.483 h 55.374 v -67.805 l -12.563,4.07 c -0.753,0.245 -1.13,0.367 -1.346,0.664 -0.045,0.061 -0.08,0.126 -0.109,0.197 -0.057,0.147 -0.084,0.321 -0.097,0.545 z m -0.838,50.766 c -0.415,0.414 -0.956,0.621 -1.729,0.724 -0.768,0.103 -1.765,0.103 -3.094,0.103 h -32.773 c -2.187,0 -3.476,0 -4.323,-0.457 -0.186,-0.1 -0.351,-0.222 -0.499,-0.37 -0.292,-0.291 -0.481,-0.644 -0.601,-1.095 -0.05,-0.187 -0.09,-0.39 -0.121,-0.613 -0.106,-0.771 -0.106,-1.774 -0.106,-3.115 v -18.082 c 0,-1.3 0,-2.282 0.095,-3.044 0.101,-0.799 0.309,-1.355 0.733,-1.778 0.827,-0.828 2.158,-0.828 4.822,-0.828 h 38.423 v 23.732 c 0,0.687 0,1.286 -0.015,1.81 -0.007,0.276 -0.018,0.531 -0.036,0.768 -0.077,1.056 -0.275,1.743 -0.776,2.245 z"
        fill="${yt}"
        id="path4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="m 364.829,373.846 c -7.99,0 -11.987,0 -14.468,-2.483 -2.483,-2.482 -2.483,-6.477 -2.483,-14.468 v -5.651 c 0,-3.729 0,-5.593 1.159,-6.752 1.159,-1.158 3.021,-1.158 6.752,-1.158 h 49.158 c 0.179,0 0.327,0 0.45,-0.006 l 0.162,-0.014 c 0.057,-0.008 0.108,-0.018 0.154,-0.032 0.044,-0.013 0.084,-0.03 0.119,-0.051 0.029,-0.018 0.055,-0.039 0.08,-0.063 0.165,-0.165 0.165,-0.432 0.165,-0.964 v -2.826 c 0,-2.663 0,-3.995 -0.827,-4.822 -0.828,-0.828 -2.159,-0.828 -4.823,-0.828 h -52.549 v -10.736 h 55.374 c 7.99,0 11.987,0 14.468,2.483 2.483,2.482 2.483,6.477 2.483,14.468 v 33.903 z m 41.248,-20.342 h -39.27 l -0.689,0.002 c -0.492,0.002 -0.905,0.009 -1.26,0.033 -0.23,0.015 -0.435,0.038 -0.622,0.071 -0.351,0.061 -0.634,0.158 -0.883,0.31 -0.38,0.234 -0.7,0.553 -0.932,0.934 -0.417,0.679 -0.417,1.604 -0.417,3.453 0,1.85 0,2.775 0.417,3.454 0.1,0.163 0.214,0.316 0.345,0.455 0.172,0.184 0.37,0.345 0.587,0.478 0.337,0.207 0.737,0.311 1.28,0.363 0.183,0.018 0.384,0.029 0.605,0.037 l 0.496,0.012 c 0.32,0.004 0.676,0.004 1.073,0.004 h 33.62 c 2.664,0 3.995,0 4.823,-0.828 0.342,-0.342 0.543,-0.772 0.659,-1.347 0.168,-0.812 0.168,-1.915 0.168,-3.475 z"
        fill="${yt}"
        id="path6"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="m 445.546,385.792 c -0.031,0.101 -0.073,0.19 -0.132,0.271 -0.217,0.297 -0.594,0.42 -1.347,0.664 l -12.563,4.07 v -67.805 h 55.374 c 7.99,0 11.987,0 14.468,2.483 2.483,2.482 2.483,6.478 2.483,14.468 v 16.952 c 0,7.991 0,11.986 -2.483,14.468 -1.271,1.272 -2.94,1.892 -5.341,2.195 -1.395,0.176 -3.035,0.244 -4.986,0.271 -1.247,0.017 -2.622,0.017 -4.141,0.017 H 446.76 c -0.532,0 -0.799,0 -0.964,0.165 -0.166,0.166 -0.166,0.432 -0.166,0.965 v 9.601 l -0.002,0.38 c -0.002,0.251 -0.009,0.452 -0.035,0.62 -0.011,0.078 -0.027,0.149 -0.047,0.215 z m 5.734,-52.064 c -0.534,0 -1.015,0 -1.45,0.007 -1.198,0.018 -2.037,0.087 -2.659,0.348 -0.142,0.06 -0.272,0.129 -0.393,0.209 -0.115,0.077 -0.221,0.165 -0.32,0.264 -0.232,0.233 -0.4,0.506 -0.519,0.837 -0.121,0.333 -0.194,0.723 -0.24,1.191 -0.069,0.724 -0.069,1.632 -0.069,2.794 v 23.732 h 38.423 c 2.664,0 3.995,0 4.823,-0.827 0.355,-0.355 0.558,-0.803 0.673,-1.41 0.154,-0.807 0.154,-1.894 0.154,-3.413 v -18.082 c 0,-0.629 0,-1.184 -0.011,-1.676 -0.024,-1.067 -0.099,-1.835 -0.337,-2.416 -0.117,-0.284 -0.272,-0.523 -0.479,-0.73 -0.382,-0.382 -0.87,-0.587 -1.545,-0.698 -0.793,-0.13 -1.841,-0.13 -3.278,-0.13 z"
        fill="${yt}"
        id="path8"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="m 236,322.992 c 7.99,0 11.987,0 14.468,2.483 2.483,2.482 2.483,6.477 2.483,14.468 v 5.651 c 0,3.729 0,5.593 -1.159,6.752 -0.492,0.492 -1.11,0.775 -1.944,0.938 -1.132,0.22 -2.662,0.22 -4.807,0.22 h -49.159 c -0.532,0 -0.799,0 -0.964,0.166 -0.082,0.083 -0.124,0.19 -0.144,0.344 -0.022,0.154 -0.022,0.354 -0.022,0.621 v 2.825 c 0,2.663 0,3.995 0.828,4.822 0.827,0.828 2.158,0.828 4.822,0.828 h 52.549 v 10.736 h -55.374 c -7.99,0 -11.987,0 -14.468,-2.483 -2.483,-2.482 -2.483,-6.477 -2.483,-14.468 v -16.952 c 0,-7.991 0,-11.986 2.483,-14.468 2.481,-2.483 6.478,-2.483 14.468,-2.483 z m -41.248,20.342 h 39.27 c 1.85,0 2.775,0 3.455,-0.416 0.17,-0.106 0.328,-0.228 0.472,-0.366 0.177,-0.168 0.331,-0.358 0.459,-0.567 0.417,-0.68 0.417,-1.605 0.417,-3.454 0,-0.976 0,-1.695 -0.062,-2.255 -0.055,-0.502 -0.159,-0.878 -0.355,-1.199 -0.077,-0.126 -0.163,-0.245 -0.258,-0.356 -0.192,-0.226 -0.42,-0.421 -0.673,-0.577 -0.305,-0.187 -0.66,-0.29 -1.126,-0.346 -0.572,-0.07 -1.311,-0.07 -2.329,-0.07 h -33.62 c -2.664,0 -3.995,0 -4.822,0.828 -0.828,0.827 -0.828,2.159 -0.828,4.822 z"
        fill="${yt}"
        id="path10"
      />
      <path
        d="m 165.683,326.633 c -3.639,-3.641 -9.499,-3.641 -21.22,-3.641 H 97 v 50.854 h 14.126 v -34.468 c 0,-2.663 0,-3.995 0.828,-4.822 0.827,-0.828 2.158,-0.828 4.822,-0.828 h 27.122 c 5.329,0 7.99,0 9.646,1.655 1.655,1.655 1.655,4.319 1.655,9.646 v 28.817 h 14.126 v -25.992 c 0,-11.72 0,-17.58 -3.642,-21.221 z"
        fill="${yt}"
        id="path12"
      />
      <path
        d="m 306.14,197.533 c 2.711,0 4.066,0 4.822,-0.869 0.755,-0.868 0.564,-2.209 0.183,-4.892 l -4.158,-29.233 c -0.296,-2.069 -0.445,-3.106 -1.151,-3.721 -0.713,-0.621 -1.757,-0.621 -3.847,-0.621 h -3.141 c -2.09,0 -3.135,0 -3.848,0.621 -0.713,0.622 -0.861,1.652 -1.151,3.721 l -4.165,29.233 c -0.381,2.683 -0.571,4.024 0.184,4.892 0.755,0.869 2.111,0.869 4.822,0.869 z"
        fill="${xt}"
        id="path14"
      />
      <path
        d="m 280.918,207.536 c 0.841,-2.577 1.257,-3.862 0.664,-4.85 -0.593,-0.988 -1.927,-1.221 -4.596,-1.687 l -29.092,-5.083 c -2.061,-0.36 -3.092,-0.536 -3.897,-0.056 -0.804,0.487 -1.129,1.482 -1.778,3.466 l -0.968,2.993 c -0.649,1.991 -0.967,2.979 -0.6,3.847 0.367,0.869 1.306,1.328 3.184,2.245 l 26.515,12.99 c 2.436,1.193 3.65,1.786 4.709,1.334 1.059,-0.452 1.483,-1.737 2.316,-4.313 z"
        fill="${xt}"
        id="path16"
      />
      <path
        d="m 282.639,234.616 c -2.189,-1.595 -3.29,-2.386 -4.413,-2.125 -1.122,0.262 -1.757,1.455 -3.021,3.855 l -13.822,26.085 c -0.982,1.849 -1.469,2.774 -1.257,3.692 0.212,0.917 1.059,1.532 2.753,2.76 l 2.542,1.843 c 1.694,1.228 2.534,1.842 3.473,1.764 0.939,-0.084 1.666,-0.833 3.12,-2.336 l 20.543,-21.207 c 1.885,-1.948 2.824,-2.915 2.725,-4.066 -0.099,-1.151 -1.193,-1.942 -3.388,-3.537 z"
        fill="${xt}"
        id="path18"
      />
      <path
        d="m 308.913,241.351 c -2.188,1.595 -3.29,2.386 -3.388,3.537 -0.099,1.15 0.84,2.118 2.725,4.066 l 20.543,21.207 c 1.454,1.503 2.181,2.252 3.12,2.336 0.939,0.085 1.786,-0.529 3.473,-1.765 l 2.542,-1.842 c 1.694,-1.228 2.534,-1.843 2.753,-2.76 0.219,-0.918 -0.276,-1.843 -1.257,-3.692 l -13.808,-26.092 c -1.271,-2.393 -1.899,-3.594 -3.022,-3.848 -1.122,-0.261 -2.216,0.537 -4.412,2.125 z"
        fill="${xt}"
        id="path20"
      />
      <path
        d="m 323.454,218.436 c 0.84,2.576 1.256,3.861 2.315,4.313 1.059,0.452 2.281,-0.148 4.709,-1.341 l 26.515,-12.99 c 1.878,-0.917 2.817,-1.376 3.184,-2.245 0.367,-0.868 0.043,-1.863 -0.6,-3.847 l -0.967,-2.986 c -0.649,-1.991 -0.967,-2.979 -1.779,-3.466 -0.805,-0.488 -1.835,-0.304 -3.897,0.056 l -29.085,5.083 c -2.668,0.466 -4.003,0.699 -4.596,1.687 -0.593,0.988 -0.176,2.273 0.664,4.85 z"
        fill="${xt}"
        id="path22"
      />
    </g>
    <defs id="defs29">
      <clipPath id="clip0">
        <rect
          width="406.82901"
          height="232.797"
          fill="${yt}"
          transform="translate(97,158)"
          id="rect26"
          x="0"
          y="0"
        />
      </clipPath>
    </defs>
  </svg>
`;let $t=class extends nt{render(){return _t}};$t.styles=wt,$t=t([ct("nedap-logo")],$t);var St=[mt,n`
    :host {
      display: flex;
      height: 100%;
      width: 100%;
    }

    .greeting {
      margin: auto;
      max-width: 50cqw;
      text-wrap: balance;
    }

    .greeting__title {
      font-family: var(--font-family-objectivity);
      font-size: min(7.5cqh, 7.5cqw);
      font-weight: bold;
      line-height: 1.25;
      color: var(--greeting-title-color, var(--color-palette-highlight));
    }

    .greeting__body {
      font-family: var(--font-family-objectivity);
      font-size: min(5cqh, 5cqw);
      font-weight: bold;
      line-height: 1.25;
      color: var(--greeting-body-color, var(--color-palette-text));
    }
  `];let zt=class extends nt{render(){return B`
      <div class="greeting">
        <div class="greeting__title">
          <slot name="title"></slot>
        </div>
        <div class="greeting__body">
          <slot name="body"></slot>
        </div>
      </div>
    `}};zt.styles=St,zt=t([ct("nedap-greeting")],zt);var At=[mt,n`
    :host {
      position: relative;
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      font-size: min(7.5cqw, 7.5cqh);

      container-type: size;
    }

    ::slotted(nedap-pusher) {
      position: absolute;
      width: 10%;
      height: 10%;
      left: calc(50% + calc(cos(var(--pusher-rotation)) * 50%));
      top: calc(50% - calc(sin(var(--pusher-rotation)) * 50%));
      transform: translate(-50%, -50%)
        rotate(calc(0deg - var(--pusher-rotation)));
    }

    ::slotted(nedap-pusher[slot='2-o-clock']) {
      --pusher-rotation: 30deg;
    }

    ::slotted(nedap-pusher[slot='4-o-clock']) {
      --pusher-rotation: -30deg;
    }

    ::slotted(nedap-pusher[slot='8-o-clock']) {
      --pusher-rotation: -150deg;
    }

    ::slotted(nedap-pusher[slot='10-o-clock']) {
      --pusher-rotation: 150deg;
    }

    ::slotted([slot='bezel']) {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;

      font-size: 20%;

      font-family: var(--font-family-ibm-plex-sans);
      font-weight: normal;
      --numerals-color: var(--color-heritage-blue);
    }

    .case {
      position: relative;
      height: min(100cqw, 100cqh);
      width: min(100cqw, 100cqh);
    }

    .case__outer-rim,
    .case__bezel,
    .case__inner-rim,
    .case__dial-surface,
    .case__shadow,
    .case__glass {
      height: 100%;
      width: 100%;
      border-radius: var(--border-radius-full);
    }

    .case__outer-rim {
      position: relative;
      padding: 0.125rem;
      background: conic-gradient(
        from -45deg,
        var(--color-white),
        var(--color-silver),
        var(--color-white)
      );
      pointer-events: none;
    }

    .case__bezel {
      position: relative;
      padding: 5%;
      background: conic-gradient(
        from -45deg,
        var(--color-silver-light),
        var(--color-silver),
        var(--color-silver-light)
      );
    }

    .case__inner-rim {
      padding: 0.125rem;

      background: conic-gradient(
        from 135deg,
        var(--color-white),
        var(--color-silver),
        var(--color-white)
      );
    }

    .case__dial-surface {
      background-color: var(--color-silver-light);
      position: relative;
    }

    .case__shadow {
      position: absolute;
      inset: 0;
      z-index: 3;
      background: radial-gradient(
        closest-side at 50.5% 50.5%,
        transparent 100%,
        var(--color-shadow) 102%
      );
    }

    .case__glass {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        -75deg,
        transparent 50%,
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0.25)
      );
    }
  `];let Mt=class extends nt{render(){return B`
      <div class="case">
        <slot name="2-o-clock"></slot>
        <slot name="4-o-clock"></slot>
        <slot name="8-o-clock"></slot>
        <slot name="10-o-clock"></slot>
        <div class="case__outer-rim">
          <div class="case__bezel">
            <slot name="bezel"></slot>
            <div class="case__inner-rim">
              <div class="case__dial-surface">
                <slot></slot>
                <div class="case__shadow"></div>
                <div class="case__glass"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}};Mt.styles=At,Mt=t([ct("nedap-case")],Mt);var Ct=[mt,gt,n`
    :host {
      display: block;
      height: 100%;
      width: 100%;

      font-family: var(--font-family-objectivity);
      font-weight: bold;
    }

    ::slotted(nedap-dial) {
      width: 32.5%;
      height: 32.5%;

      /* Used to make sure tracks/hands/numerals aren't too small */
      --dial-scale-factor: 2;
      --dial-color: var(--subdial-color, var(--color-palette-foreground));

      font-size: 33%;

      font-family: var(--font-family-ibm-plex-sans);
      font-weight: normal;
    }

    ::slotted([slot='markers']) {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    ::slotted([slot='numerals']) {
      position: absolute;
      --inset: calc(12.5% * var(--dial-scale-factor, 1));

      left: var(--inset);
      top: var(--inset);
      width: calc(100% - var(--inset) * 2);
      height: calc(100% - var(--inset) * 2);
    }

    ::slotted([slot='3-o-clock']),
    ::slotted([slot='6-o-clock']),
    ::slotted([slot='9-o-clock']),
    ::slotted([slot='12-o-clock']) {
      position: absolute;
      transform: translate(-50%, -50%);
    }

    ::slotted([slot='3-o-clock']) {
      top: 50%;
      left: 75%;
    }

    ::slotted([slot='6-o-clock']) {
      top: 75%;
      left: 50%;
    }

    ::slotted([slot='9-o-clock']) {
      top: 50%;
      left: 25%;
    }

    ::slotted([slot='12-o-clock']) {
      top: 25%;
      left: 50%;
    }

    .dial {
      border-radius: var(--border-radius-full);
      background-color: var(--dial-color, var(--color-palette-background));
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
    }

    .stem {
      width: max(2.5%, 0.375rem);
      height: max(2.5%, 0.375rem);
      background-color: var(--color-silver-light);
      position: absolute;
      transform-origin: bottom center;
      transform: translate(-50%, 50%);
      border-radius: var(--border-radius-full);
      bottom: 50%;
      left: 50%;
    }
  `];let Et=class extends nt{constructor(){super(...arguments),this.palette=null}render(){return B`
      <div class="dial">
        <div class="dial__shadow"></div>

        <slot name="markers"></slot>
        <slot name="numerals"></slot>

        <slot name="3-o-clock"></slot>
        <slot name="6-o-clock"></slot>
        <slot name="9-o-clock"></slot>
        <slot name="12-o-clock"></slot>

        <slot></slot>
        <div class="stem"></div>
      </div>
    `}};Et.styles=Ct,t([pt({type:String,reflect:!0})],Et.prototype,"palette",void 0),Et=t([ct("nedap-dial")],Et);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Tt=1,jt=t=>(...e)=>({_$litDirective$:t,values:e});class Ot{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=jt(class extends Ot{constructor(t){var e;if(super(t),t.type!==Tt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var o,r;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(o=this.nt)||void 0===o?void 0:o.has(t))&&this.it.add(t);return this.render(e)}const i=t.element.classList;this.it.forEach((t=>{t in e||(i.remove(t),this.it.delete(t))}));for(const t in e){const o=!!e[t];o===this.it.has(t)||(null===(r=this.nt)||void 0===r?void 0:r.has(t))||(o?(i.add(t),this.it.add(t)):(i.remove(t),this.it.delete(t)))}return H}}),Nt="important",Pt=" !"+Nt,Ut=jt(class extends Ot{constructor(t){var e;if(super(t),t.type!==Tt||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,o)=>{const r=t[o];return null==r?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:o}=t.element;if(void 0===this.ht){this.ht=new Set;for(const t in e)this.ht.add(t);return this.render(e)}this.ht.forEach((t=>{null==e[t]&&(this.ht.delete(t),t.includes("-")?o.removeProperty(t):o[t]="")}));for(const t in e){const r=e[t];if(null!=r){this.ht.add(t);const e="string"==typeof r&&r.endsWith(Pt);t.includes("-")||e?o.setProperty(t,e?r.slice(0,-11):r,e?Nt:""):o[t]=r}}return H}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qt=[mt,n`
    :host {
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
    }

    .hand {
      height: 100%;
      width: 100%;
      transform: rotate(var(--rotation, 0deg));
      filter: drop-shadow(0 0 0.25rem var(--color-shadow));
    }

    .hand__bar {
      position: absolute;
      transform: translateX(-50%);
      top: 5%;
      left: 50%;
      width: 0.25rem;
      border-radius: var(--border-radius-full);
    }

    .hand__center {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: calc(5% * var(--dial-scale-factor, 1));
      height: calc(5% * var(--dial-scale-factor, 1));
      background-color: var(--color-heritage-blue);
      border-radius: var(--border-radius-full);
    }

    /* Not fully BEM, sue me */
    .hand--seconds .hand__bar {
      top: 2.5%;
      height: 55%;
      width: max(1%, 0.25rem);
      width: calc(1% * var(--dial-scale-factor, 1));
      background-color: var(--hand-color, var(--color-palette-highlight));
    }

    .hand--seconds .hand__center {
      background-color: var(--hand-color, var(--color-palette-highlight));
    }

    .hand--minutes .hand__bar {
      top: 10%;
      height: 40%;
      width: calc(2.5% * var(--dial-scale-factor, 1));
      background-color: var(--hand-color, var(--color-palette-text));
    }

    .hand--minutes .hand__center {
      background-color: var(--hand-color, var(--color-palette-text));
    }

    .hand--hours .hand__bar {
      top: 20%;
      height: 30%;
      width: calc(2.5% * var(--dial-scale-factor, 1));
      background-color: var(--hand-color, var(--color-palette-text));
    }

    .hand--hours .hand__center {
      background-color: var(--hand-color, var(--color-palette-text));
    }
  `];let Rt=class extends nt{constructor(){super(...arguments),this.variant="seconds",this.rotationDegrees=0}get classes(){return{hand:!0,[`hand--${this.variant}`]:this.variant}}render(){return B`
      <div
        class="${Dt(this.classes)}"
        style="${Ut({"--rotation":`${this.rotationDegrees}deg`})}"
      >
        <div class="hand__bar"></div>
        <div class="hand__center"></div>
      </div>
    `}};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function*Wt(t,e){if(void 0!==t){let o=0;for(const r of t)yield e(r,o++)}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Bt(t,e,o=1){const r=void 0===e?0:t;null!=e||(e=t);for(let t=r;o>0?t<e:e<t;t+=o)yield t}Rt.styles=qt,t([pt({type:String})],Rt.prototype,"variant",void 0),t([pt({type:Number,attribute:"rotation-degrees"})],Rt.prototype,"rotationDegrees",void 0),Rt=t([ct("nedap-hand")],Rt);var It=[mt,n`
    :host([size='small']) {
      --marker-width: calc(2.5% * var(--dial-scale-factor, 1));
      --marker-height: calc(0.5% * var(--dial-scale-factor, 1));

      --marker-color: var(--color-palette-text);
    }

    :host([size='medium']) {
      --marker-width: calc(5% * var(--dial-scale-factor, 1));
      --marker-height: calc(1% * var(--dial-scale-factor, 1));

      --marker-color: var(--color-palette-highlight);
    }

    .markers {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .markers__index {
      position: absolute;
      z-index: 0;
      left: calc(50% + cos(var(--degrees) - 90deg) * 50%);
      top: calc(50% + sin(var(--degrees) - 90deg) * 50%);
      background-color: var(--marker-color);
      width: var(--marker-width);
      height: var(--marker-height);
      transform-origin: center right;
      transform: translate(-100%, -50%) rotate(calc(var(--degrees) - 90deg));
    }
  `];let Ht=class extends nt{constructor(){super(...arguments),this.size="small",this.step=5,this.max=60}render(){return B`
      <div class="markers">
        ${Wt(Bt(0,this.max,this.step),(t=>{const e=t/this.max*360+"deg";return B`
            <div
              class="markers__index"
              style=${Ut({"--degrees":e})}
            ></div>
          `}))}
      </div>
    `}};Ht.styles=It,t([pt({type:String,reflect:!0})],Ht.prototype,"size",void 0),t([pt({type:Number})],Ht.prototype,"step",void 0),t([pt({type:Number})],Ht.prototype,"max",void 0),Ht=t([ct("nedap-markers")],Ht);var Lt=[mt,n`
    .numerals {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .numerals__index {
      position: absolute;
      left: calc(50% + cos(var(--degrees) - 90deg) * 50%);
      top: calc(50% + sin(var(--degrees) - 90deg) * 50%);

      transform: translate(-50%, -50%);

      font-size: 1em;
      color: var(--numerals-color, var(--color-palette-text));
    }
  `];let Xt=class extends nt{constructor(){super(...arguments),this.step=1,this.max=60}render(){return B`
      <div class="numerals">
        ${Wt(Bt(0,this.max,this.step),(t=>{const e=t/this.max*360+"deg";return B`
            <div
              class="numerals__index"
              style=${Ut({"--degrees":e})}
            >
              ${0==t?this.max:t}
            </div>
          `}))}
      </div>
    `}};Xt.styles=Lt,t([pt({type:Number})],Xt.prototype,"step",void 0),t([pt({type:Number})],Xt.prototype,"max",void 0),Xt=t([ct("nedap-numerals")],Xt);var Zt=[mt,gt,n`
    .pulsometer-scale {
      position: relative;
      inset: 0;
      width: 100%;
      height: 100%;
      font-size: 1em;
    }

    svg {
      text-transform: uppercase;
      color: var(--pulsometer-scale-numeral-color, var(--color-palette-text));
    }

    .pulsometer-scale__numeral {
      position: absolute;
      left: calc(50% + cos(var(--degrees) - 90deg) * 48.5%);
      top: calc(50% + sin(var(--degrees) - 90deg) * 48.5%);
      color: var(--pulsometer-scale-numeral-color, var(--color-palette-text));
      transform: translate(-50%, -50%);
    }

    .pulsometer-scale__marker {
      position: absolute;
      left: calc(50% + cos(var(--degrees) - 90deg) * 45%);
      top: calc(50% + sin(var(--degrees) - 90deg) * 45%);
      background-color: var(
        --pulsometer-scale-marker-color,
        var(--color-palette-highlight)
      );
      width: 1.5%;
      height: 0.25%;
      transform-origin: center right;
      transform: translate(-100%, -50%) rotate(calc(var(--degrees) + 90deg));
    }
  `];const Ft=t=>t*Math.PI/180;let Jt=class extends nt{constructor(){super(...arguments),this.palette="white",this.grade=15}get numeralSteps(){switch(this.grade){case 15:return[...Bt(20,50,5),...Bt(50,110,10),110,125,150,200];case 30:return[...Bt(40,90,5),...Bt(90,120,10),...Bt(120,160,20),160,200]}}get markerSteps(){switch(this.grade){case 15:return[...Bt(20,60,1),...Bt(60,100,5),100,110,125,150,200];case 30:return[...Bt(40,65,1),...Bt(65,100,5),...Bt(100,200,10),200]}}bpmToDegrees(t){return 360*this.grade/t}get textPath(){const t=47.5,e=Math.max(...this.numeralSteps.map(this.bpmToDegrees.bind(this))),o=Math.min(...this.numeralSteps.map(this.bpmToDegrees.bind(this)));return`M ${50+Math.cos(Ft(e-90))*t} ${50+Math.sin(Ft(e-90))*t} A 47.5 47.5 0 0 1 ${50+Math.cos(Ft(o-90))*t} ${50+Math.sin(Ft(o-90))*t}`}renderText(){return I`
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <defs>
            <path id="text-path" d="${this.textPath}" />
          </defs>

          <text font-size="3" font-weight="500" fill="currentColor">
            <textPath
              href="#text-path"
              startOffset="50%"
              dominant-baseline="middle"
              text-anchor="middle"
            >
              Pulsometer &centerdot; scale for ${this.grade} beats
            </textPath>
          </text>
        </svg>
    `}render(){return B`
      <div class="pulsometer-scale">
        ${this.renderText()}
        ${Wt(this.numeralSteps,(t=>B`
            <div
              class="pulsometer-scale__numeral"
              style=${Ut({"--degrees":`${this.bpmToDegrees(t)}deg`})}
            >
              ${t}
            </div>
          `))}
        ${Wt(this.markerSteps,(t=>B`
            <div
              class="pulsometer-scale__marker"
              style=${Ut({"--degrees":`${this.bpmToDegrees(t)}deg`})}
            ></div>
          `))}
      </div>
    `}};Jt.styles=Zt,t([pt({type:String,reflect:!0})],Jt.prototype,"palette",void 0),t([pt({type:Number})],Jt.prototype,"grade",void 0),Jt=t([ct("nedap-pulsometer-scale")],Jt);var Kt=[mt,n`
    :host {
      display: block;
    }

    .pusher {
      all: unset;
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
    }

    .pusher::before {
      content: '';
      display: block;
      position: absolute;
      inset: 0;
      transition: transform 100ms;
      background: linear-gradient(
        var(--color-silver),
        var(--color-white),
        var(--color-silver)
      );
      border-radius: 15% / 50%;
    }

    .pusher:focus-visible::before {
      box-shadow: 0 0 0.25rem 0.25rem var(--color-scientific-blue);
    }

    .pusher:not(:disabled):hover::before {
      transform: translateX(10%);
    }

    .pusher:not(:disabled):active::before {
      transform: translateX(-10%);
    }

    .pusher:disabled {
      cursor: not-allowed;
    }
  `];let Vt=class extends nt{constructor(){super(...arguments),this.disabled=!1}render(){return B` <button class="pusher" ?disabled=${this.disabled}></button> `}};Vt.shadowRootOptions={...nt.shadowRootOptions,delegatesFocus:!0},Vt.styles=Kt,t([pt({type:Boolean})],Vt.prototype,"disabled",void 0),Vt=t([ct("nedap-pusher")],Vt);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Gt(t,e,o){return t?e():null==o?void 0:o()}var Qt,Yt,te;const ee=1e3;class oe{constructor(t){Qt.set(this,void 0),Yt.set(this,new AbortController),te.set(this,0),this.running=!1,o(this,Qt,t),t.addController(this)}get secondsDegrees(){return e(this,te)/ee%60/60*360}get minutesDegrees(){return e(this,te)/ee/60%60/60*360}get hoursDegrees(){return e(this,te)/ee/3600%12/12*360}hostDisconnected(){this.stop()}setTime(t){const e=60*-t.getTimezoneOffset()*ee;o(this,te,t.getTime()+e)}reset(){o(this,te,0)}async start(){o(this,Yt,new AbortController),this.running=!0;let t=performance.now();for await(const r of async function*(t){for(;!t.signal.aborted;)yield await new Promise((t=>requestAnimationFrame(t)))}(e(this,Yt))){const i=r-t;o(this,te,e(this,te)+i),e(this,Qt).requestUpdate(),t=r}}stop(){e(this,Yt).abort(),this.running=!1}}var re,ie;Qt=new WeakMap,Yt=new WeakMap,te=new WeakMap;let se=class extends nt{constructor(){super(...arguments),re.set(this,new oe(this)),ie.set(this,new oe(this)),this.mode="time",this.splitSeconds=!1,this.dialPalette=vt[0]}connectedCallback(){super.connectedCallback(),e(this,re).setTime(new Date),e(this,re).start()}handleSplitSeconds(){this.splitSeconds=!this.splitSeconds}handlePalette(){this.dialPalette=bt(vt.filter((t=>t!==this.dialPalette))),this.subdialPalette=bt(vt.filter((t=>t!==this.subdialPalette))),this.dispatchEvent(new CustomEvent("palette-swap",{composed:!0,bubbles:!0}))}handleStartStop(){e(this,ie).running?e(this,ie).stop():e(this,ie).start()}handleReset(){e(this,ie).reset()}render(){return B`
      <nedap-case>
        ${((t,e,o)=>{for(const o of e)if(o[0]===t)return(0,o[1])();return null==o?void 0:o()})(this.scale,[["pulsometer",()=>B`
                <nedap-pulsometer-scale slot="bezel"></nedap-pulsometer-scale>
              `]])}
        ${Gt("time"===this.mode||!this.scale,(()=>B`
            <nedap-pusher
              slot="10-o-clock"
              part="split-seconds-pusher"
              @click=${this.handleSplitSeconds}
            ></nedap-pusher>
          `))}

        <nedap-pusher
          slot="8-o-clock"
          part="palette-pusher"
          @click=${this.handlePalette}
        ></nedap-pusher>

        ${Gt("chronograph"==this.mode,(()=>B`
            <nedap-pusher
              slot="2-o-clock"
              @click=${this.handleStartStop}
            ></nedap-pusher>
            <nedap-pusher
              slot="4-o-clock"
              @click=${this.handleReset}
              ?disabled=${e(this,ie).running}
            ></nedap-pusher>
          `))}

        <nedap-dial palette="${this.dialPalette}">
          <nedap-logo slot="12-o-clock"></nedap-logo>

          <nedap-markers slot="markers" step="1" max="60"></nedap-markers>
          <nedap-markers
            slot="markers"
            step="5"
            max="60"
            size="medium"
          ></nedap-markers>
          <nedap-numerals slot="numerals" step="3" max="12"></nedap-numerals>

          <!-- In all modes, hours and minutes are normal hands -->
          <nedap-hand
            variant="hours"
            .rotationDegrees=${e(this,re).hoursDegrees}
          ></nedap-hand>
          <nedap-hand
            variant="minutes"
            .rotationDegrees=${e(this,re).minutesDegrees}
          ></nedap-hand>

          <!-- When we are in chrono mode, chrono minutes/hours are in subdials -->
          ${Gt("chronograph"===this.mode,(()=>B`
              <nedap-dial slot="3-o-clock" palette="${this.subdialPalette}">
                <nedap-markers slot="markers" step="1" max="30"></nedap-markers>
                <nedap-markers
                  slot="markers"
                  step="10"
                  max="30"
                  size="medium"
                ></nedap-markers>
                <nedap-numerals
                  slot="numerals"
                  step="10"
                  max="30"
                ></nedap-numerals>
                <nedap-hand
                  variant="seconds"
                  .rotationDegrees=${e(this,ie).minutesDegrees/2}
                ></nedap-hand>
              </nedap-dial>
              <nedap-dial slot="6-o-clock" palette="${this.subdialPalette}">
                <nedap-markers slot="markers" step="1" max="12"></nedap-markers>
                <nedap-markers
                  slot="markers"
                  step="3"
                  max="12"
                  size="medium"
                ></nedap-markers>
                <nedap-numerals
                  slot="numerals"
                  step="3"
                  max="12"
                ></nedap-numerals>
                <nedap-hand
                  variant="seconds"
                  .rotationDegrees=${e(this,ie).hoursDegrees}
                ></nedap-hand>
              </nedap-dial>
            `))}

          <!-- We have a main second hands in chrono mode, or when we don't have split seconds. This main hand can show either chrono or time seconds. -->
          ${Gt("chronograph"===this.mode||!this.splitSeconds,(()=>B`
              <!-- The main hand shows chrono seconds in chrono mode with either splitSeconds to true, or a scale implying splitSeconds is true. Otherwise it shows time seconds. -->
              <nedap-hand
                variant="seconds"
                .rotationDegrees=${"chronograph"===this.mode&&(this.splitSeconds||this.scale)?e(this,ie).secondsDegrees:e(this,re).secondsDegrees}
              ></nedap-hand>
            `))}

          <!-- We have a subdial for seconds if we are in chrono mode, or splitSeconds is true. This subdial can show either chrono or time seconds. -->
          ${Gt("chronograph"===this.mode||this.splitSeconds,(()=>B`
              <!-- In chrono mode, its at 9 o'clock, otherwise 6 o'clock -->
              <nedap-dial
                slot=${"chronograph"===this.mode?"9-o-clock":"6-o-clock"}
                palette="${this.subdialPalette}"
              >
                <nedap-markers slot="markers" step="5" max="60"></nedap-markers>
                <nedap-markers
                  slot="markers"
                  step="20"
                  max="60"
                  size="medium"
                ></nedap-markers>
                <nedap-numerals
                  slot="numerals"
                  step="20"
                  max="60"
                ></nedap-numerals>
                <!-- The subdial shows chrono seconds in chrono mode without splitSeconds or a scale implying no splitSeconds. Otherwise it shows time seconds. -->
                <nedap-hand
                  variant="seconds"
                  .rotationDegrees=${"chronograph"!==this.mode||this.scale||this.splitSeconds?e(this,re).secondsDegrees:e(this,ie).secondsDegrees}
                ></nedap-hand>
              </nedap-dial>
            `))}
        </nedap-dial>
      </nedap-case>
    `}};re=new WeakMap,ie=new WeakMap,t([pt({type:String})],se.prototype,"mode",void 0),t([pt({type:Boolean,attribute:"split-seconds"})],se.prototype,"splitSeconds",void 0),t([pt({type:String})],se.prototype,"scale",void 0),t([pt({type:String,attribute:"dial-palette"})],se.prototype,"dialPalette",void 0),t([pt({type:String,attribute:"subdial-palette"})],se.prototype,"subdialPalette",void 0),se=t([ct("nedap-watch")],se);export{kt as NedapBackdrop,Mt as NedapCase,Et as NedapDial,zt as NedapGreeting,Rt as NedapHand,$t as NedapLogo,Ht as NedapMarkers,Xt as NedapNumerals,Jt as NedapPulsometerScale,Vt as NedapPusher,se as NedapWatch};
//# sourceMappingURL=index.bundled.js.map
