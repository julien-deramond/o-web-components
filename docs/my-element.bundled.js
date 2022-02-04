/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new Map;class e{constructor(t,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let i=s.get(this.cssText);return t&&void 0===i&&(s.set(this.cssText,i=new CSSStyleSheet),i.replaceSync(this.cssText)),i}toString(){return this.cssText}}const n=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return(t=>new e("string"==typeof t?t:t+"",i))(s)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var o;const h=window.trustedTypes,r=h?h.emptyScript:"",l=window.reactiveElementPolyfillSupport,u={toAttribute(t,i){switch(i){case Boolean:t=t?r:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},d=(t,i)=>i!==t&&(i==i||t==t),a={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:d};class c extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e))})),t}static createProperty(t,i=a){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const n=this[t];this[i]=e,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||a}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(n(t))}else void 0!==t&&i.push(n(t));return i}static _$Eh(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{t?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),e=window.litNonce;void 0!==e&&s.setAttribute("nonce",e),s.textContent=t.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$ES(t,i,s=a){var e,n;const o=this.constructor._$Eh(t,s);if(void 0!==o&&!0===s.reflect){const h=(null!==(n=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==n?n:u.toAttribute)(i,s.type);this._$Ei=t,null==h?this.removeAttribute(o):this.setAttribute(o,h),this._$Ei=null}}_$AK(t,i){var s,e,n;const o=this.constructor,h=o._$Eu.get(t);if(void 0!==h&&this._$Ei!==h){const t=o.getPropertyOptions(h),r=t.converter,l=null!==(n=null!==(e=null===(s=r)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof r?r:null)&&void 0!==n?n:u.fromAttribute;this._$Ei=h,this[h]=l(i,t.type),this._$Ei=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU()}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;c.finalized=!0,c.elementProperties=new Map,c.elementStyles=[],c.shadowRootOptions={mode:"open"},null==l||l({ReactiveElement:c}),(null!==(o=globalThis.reactiveElementVersions)&&void 0!==o?o:globalThis.reactiveElementVersions=[]).push("1.2.1");const f=globalThis.trustedTypes,p=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,g="?"+y,b=`<${g}>`,w=document,m=(t="")=>w.createComment(t),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,_=/>/g,k=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,x=/'/g,E=/"/g,T=/^(?:script|style|textarea)$/i,U=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),M=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),N=new WeakMap,j=w.createTreeWalker(w,129,null,!1),R=(t,i)=>{const s=t.length-1,e=[];let n,o=2===i?"<svg>":"",h=C;for(let i=0;i<s;i++){const s=t[i];let r,l,u=-1,d=0;for(;d<s.length&&(h.lastIndex=d,l=h.exec(s),null!==l);)d=h.lastIndex,h===C?"!--"===l[1]?h=A:void 0!==l[1]?h=_:void 0!==l[2]?(T.test(l[2])&&(n=RegExp("</"+l[2],"g")),h=k):void 0!==l[3]&&(h=k):h===k?">"===l[0]?(h=null!=n?n:C,u=-1):void 0===l[1]?u=-2:(u=h.lastIndex-l[2].length,r=l[1],h=void 0===l[3]?k:'"'===l[3]?E:x):h===E||h===x?h=k:h===A||h===_?h=C:(h=k,n=void 0);const a=h===k&&t[i+1].startsWith("/>")?" ":"";o+=h===C?s+b:u>=0?(e.push(r),s.slice(0,u)+"$lit$"+s.slice(u)+y+a):s+y+(-2===u?(e.push(void 0),i):a)}const r=o+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==p?p.createHTML(r):r,e]};class z{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let n=0,o=0;const h=t.length-1,r=this.parts,[l,u]=R(t,i);if(this.el=z.createElement(l,s),j.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=j.nextNode())&&r.length<h;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(y)){const s=u[o++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(y),i=/([.?@])?(.*)/.exec(s);r.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?B:"?"===i[1]?J:"@"===i[1]?K:L})}else r.push({type:6,index:n})}for(const i of t)e.removeAttribute(i)}if(T.test(e.tagName)){const t=e.textContent.split(y),i=t.length-1;if(i>0){e.textContent=f?f.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],m()),j.nextNode(),r.push({type:2,index:++n});e.append(t[i],m())}}}else if(8===e.nodeType)if(e.data===g)r.push({type:2,index:n});else{let t=-1;for(;-1!==(t=e.data.indexOf(y,t+1));)r.push({type:7,index:n}),t+=y.length-1}n++}}static createElement(t,i){const s=w.createElement("template");return s.innerHTML=t,s}}function I(t,i,s=t,e){var n,o,h,r;if(i===M)return i;let l=void 0!==e?null===(n=s._$Cl)||void 0===n?void 0:n[e]:s._$Cu;const u=$(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==u&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===u?l=void 0:(l=new u(t),l._$AT(t,s,e)),void 0!==e?(null!==(h=(r=s)._$Cl)&&void 0!==h?h:r._$Cl=[])[e]=l:s._$Cu=l),void 0!==l&&(i=I(t,l._$AS(t,i.values),l,e)),i}class P{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:w).importNode(s,!0);j.currentNode=n;let o=j.nextNode(),h=0,r=0,l=e[0];for(;void 0!==l;){if(h===l.index){let i;2===l.type?i=new H(o,o.nextSibling,this,t):1===l.type?i=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(i=new W(o,this,t)),this.v.push(i),l=e[++r]}h!==(null==l?void 0:l.index)&&(o=j.nextNode(),h++)}return n}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class H{constructor(t,i,s,e){var n;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(n=null==e?void 0:e.isConnected)||void 0===n||n}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=I(this,t,i),$(t)?t===O||null==t||""===t?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==M&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var i;return S(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.A(t):this.$(t)}M(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==O&&$(this._$AH)?this._$AA.nextSibling.data=t:this.S(w.createTextNode(t)),this._$AH=t}T(t){var i;const{values:s,_$litType$:e}=t,n="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=z.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===n)this._$AH.m(s);else{const t=new P(n,this),i=t.p(this.options);t.m(s),this.S(i),this._$AH=t}}_$AC(t){let i=N.get(t.strings);return void 0===i&&N.set(t.strings,i=new z(t)),i}A(t){S(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const n of t)e===i.length?i.push(s=new H(this.M(m()),this.M(m()),this,this.options)):s=i[e],s._$AI(n),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class L{constructor(t,i,s,e,n){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const n=this.strings;let o=!1;if(void 0===n)t=I(this,t,i,0),o=!$(t)||t!==this._$AH&&t!==M,o&&(this._$AH=t);else{const e=t;let h,r;for(t=n[0],h=0;h<n.length-1;h++)r=I(this,e[s+h],i,h),r===M&&(r=this._$AH[h]),o||(o=!$(r)||r!==this._$AH[h]),r===O?t=O:t!==O&&(t+=(null!=r?r:"")+n[h+1]),this._$AH[h]=r}o&&!e&&this.k(t)}k(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class B extends L{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===O?void 0:t}}const D=f?f.emptyScript:"";class J extends L{constructor(){super(...arguments),this.type=4}k(t){t&&t!==O?this.element.setAttribute(this.name,D):this.element.removeAttribute(this.name)}}class K extends L{constructor(t,i,s,e,n){super(t,i,s,e,n),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=I(this,t,i,0))&&void 0!==s?s:O)===M)return;const e=this._$AH,n=t===O&&e!==O||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,o=t!==O&&(e===O||n);n&&this.element.removeEventListener(this.name,this,e),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const Z=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var q,V;null==Z||Z(z,H),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.1.2");class F extends c{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,i,s)=>{var e,n;const o=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let h=o._$litPart$;if(void 0===h){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=h=new H(i.insertBefore(m(),t),t,void 0,null!=s?s:{})}return h._$AI(t),h})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return M}}F.finalized=!0,F._$litElement$=!0,null===(q=globalThis.litElementHydrateSupport)||void 0===q||q.call(globalThis,{LitElement:F});const G=globalThis.litElementPolyfillSupport;null==G||G({LitElement:F}),(null!==(V=globalThis.litElementVersions)&&void 0!==V?V:globalThis.litElementVersions=[]).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Q=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function X(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):Q(t,i)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var Y;null===(Y=window.HTMLSlotElement)||void 0===Y||Y.prototype.assignedElements;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var tt=function(t,i,s,e){for(var n,o=arguments.length,h=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,r=t.length-1;r>=0;r--)(n=t[r])&&(h=(o<3?n(h):o>3?n(i,s,h):n(i,s))||h);return o>3&&h&&Object.defineProperty(i,s,h),h};let it=class extends F{constructor(){super(...arguments),this.name="World",this.count=0}render(){return U`
      <h1>${this.sayHello(this.name)}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `}_onClick(){this.count++,this.dispatchEvent(new CustomEvent("count-changed"))}sayHello(t){return`Hello, ${t}`}};it.styles=((t,...s)=>{const n=1===t.length?t[0]:s.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new e(n,i)})`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `,tt([X()],it.prototype,"name",void 0),tt([X({type:Number})],it.prototype,"count",void 0),it=tt([(t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){window.customElements.define(t,i)}}})(t,i))("my-element")],it);export{it as MyElement};
