// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/@vanillawc/wc-blink/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WCBlink = void 0;

// src/wc-blink.js
class WCBlink extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = WCBlink.template();
    this.attachShadow({
      mode: "open"
    });
    this.shadowRoot.appendChild(document.importNode(template.content, true));
  }

  static template() {
    return `
      <style>
      .blink {
        animation: 2s linear infinite condemned_blink_effect;
      }
      @keyframes condemned_blink_effect {
        0% {
          visibility: hidden;
        }
        50% {
          visibility: hidden;
        }
        100% {
          visibility: visible;
        }
      }
      </style>
      <p class="blink" style="width: inherit;"><span><slot></slot></span></p>
    `;
  }

}

exports.WCBlink = WCBlink;
customElements.define("wc-blink", WCBlink);
},{}],"../node_modules/emoji-rating/out/emojiRating.bundle.js":[function(require,module,exports) {
var define;
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.EmojiRating=e()}(this,function(){"use strict";const t=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,s=null,i=null)=>{let n=e;for(;n!==s;){const e=n.nextSibling;t.insertBefore(n,i),n=e}},s=(t,e,s=null)=>{let i=e;for(;i!==s;){const e=i.nextSibling;t.removeChild(i),i=e}},i=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${i}--\x3e`,r=new RegExp(`${i}|${n}`),o=(()=>{const t=document.createElement("div");return t.setAttribute("style","{{bad value}}"),"{{bad value}}"!==t.getAttribute("style")})();class a{constructor(t,e){this.parts=[],this.element=e;let s=-1,n=0;const a=[],l=e=>{const c=e.content,u=document.createTreeWalker(c,133,null,!1);let p,m;for(;u.nextNode();){s++,p=m;const e=m=u.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const a=e.attributes;let l=0;for(let t=0;t<a.length;t++)a[t].value.indexOf(i)>=0&&l++;for(;l-- >0;){const i=t.strings[n],a=h.exec(i)[2],l=o&&"style"===a?"style$":/^[a-zA-Z-]*$/.test(a)?a:a.toLowerCase(),d=e.getAttribute(l).split(r);this.parts.push({type:"attribute",index:s,name:a,strings:d}),e.removeAttribute(l),n+=d.length-1}}"TEMPLATE"===e.tagName&&l(e)}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(i)<0)continue;const o=e.parentNode,l=t.split(r),h=l.length-1;n+=h;for(let t=0;t<h;t++)o.insertBefore(""===l[t]?d():document.createTextNode(l[t]),e),this.parts.push({type:"node",index:s++});o.insertBefore(""===l[h]?d():document.createTextNode(l[h]),e),a.push(e)}else if(8===e.nodeType)if(e.nodeValue===i){const t=e.parentNode,i=e.previousSibling;null===i||i!==p||i.nodeType!==Node.TEXT_NODE?t.insertBefore(d(),e):s--,this.parts.push({type:"node",index:s++}),a.push(e),null===e.nextSibling?t.insertBefore(d(),e):s--,m=p,n++}else{let t=-1;for(;-1!==(t=e.nodeValue.indexOf(i,t+1));)this.parts.push({type:"node",index:-1})}}};l(e);for(const t of a)t.parentNode.removeChild(t)}}const l=t=>-1!==t.index,d=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,c=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;const u=t=>{let e=1;const s=document.createTreeWalker(t,c,null,!1);for(;s.nextNode();)e++;return e},p=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(l(e))return s}return-1};const m=new Map;class f{constructor(t,e,s){this._parts=[],this.template=t,this.processor=e,this._getTemplate=s}update(t){let e=0;for(const s of this._parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=this.template.parts;let i=0,n=0;const r=t=>{const e=document.createTreeWalker(t,133,null,!1);let o=e.nextNode();for(;i<s.length&&null!==o;){const t=s[i];if(l(t))if(n===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this._getTemplate);t.insertAfterNode(o),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(o,t.name,t.strings));i++}else n++,"TEMPLATE"===o.nodeName&&r(o.content),o=e.nextNode();else this._parts.push(void 0),i++}};return r(e),e}}const _=new WeakMap,g=new WeakMap,v=t=>(g.set(t,!0),t),y=t=>"function"==typeof t&&g.has(t),x={};class b{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!0;for(let r=0;r<t;r++){const t=this.strings[r];e+=t;const a=t.lastIndexOf(">");!(s=(a>-1||s)&&-1===t.indexOf("<",a+1))&&o&&(e=e.replace(h,(t,e,s,i)=>"style"===s?`${e}style$${i}`:t)),e+=s?n:i}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const N=t=>null===t||!("object"==typeof t||"function"==typeof t);class w{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new P(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)s+="string"==typeof e?e:String(e);else s+="string"==typeof t?t:String(t)}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===x||N(t)&&t===this.value||(this.value=t,y(t)||(this.committer.dirty=!0))}commit(){for(;y(this.value);){const t=this.value;this.value=x,t(this)}this.value!==x&&this.committer.commit()}}class S{constructor(t){this.value=void 0,this._pendingValue=void 0,this.templateFactory=t}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=d()),t._insert(this.endNode=d())}insertAfterPart(t){t._insert(this.startNode=d()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;y(this._pendingValue);){const t=this._pendingValue;this._pendingValue=x,t(this)}const t=this._pendingValue;t!==x&&(N(t)?t!==this.value&&this._commitText(t):t instanceof b?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):void 0!==t.then?this._commitPromise(t):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(e){const s=this.templateFactory(e);let i;if(this.value&&this.value.template===s)i=this.value;else{const n=(i=new f(s,e.processor,this.templateFactory))._clone();t&&!this.endNode.isConnected&&(document.adoptNode(n),customElements.upgrade(n)),this._commitNode(n),this.value=i}i.update(e.values)}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)void 0===(s=e[i])&&(s=new S(this.templateFactory),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}_commitPromise(t){this.value=t,t.then(e=>{this.value===t&&(this.setValue(e),this.commit())})}clear(t=this.startNode){s(this.startNode.parentNode,t.nextSibling,this.endNode)}}class T{constructor(t,e,s){if(this.value=void 0,this._pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this._pendingValue=t}commit(){for(;y(this._pendingValue);){const t=this._pendingValue;this._pendingValue=x,t(this)}if(this._pendingValue===x)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=x}}class E extends w{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new V(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class V extends P{}class C{constructor(t,e){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e}setValue(t){this._pendingValue=t}commit(){for(;y(this._pendingValue);){const t=this._pendingValue;this._pendingValue=x,t(this)}this._pendingValue!==x&&(null==this._pendingValue!=(null==this.value)&&(null==this._pendingValue?this.element.removeEventListener(this.eventName,this):this.element.addEventListener(this.eventName,this)),this.value=this._pendingValue,this._pendingValue=x)}handleEvent(t){"function"==typeof this.value?this.value.call(this.element,t):"function"==typeof this.value.handleEvent&&this.value.handleEvent(t)}}const A=new class{handleAttributeExpressions(t,e,s){const i=e[0];return"."===i?new E(t,e.slice(1),s).parts:"@"===i?[new C(t,e.slice(1))]:"?"===i?[new T(t,e.slice(1),s)]:new w(t,e,s).parts}handleTextExpression(t){return new S(t)}},O=(t,...e)=>new b(t,e,"html",A),M=(t,e)=>`${t}--${e}`,j=()=>void 0!==window.ShadyCSS&&(void 0!==window.ShadyCSS.prepareTemplateDom||(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),!1)),$=t=>e=>{const s=M(e.type,t);let i=m.get(s);void 0===i&&(i=new Map,m.set(s,i));let n=i.get(e.strings);if(void 0===n){const s=e.getTemplateElement();j()&&window.ShadyCSS.prepareTemplateDom(s,t),n=new a(e,s),i.set(e.strings,n)}return n},k=["html","svg"];function F(t){k.forEach(e=>{const s=m.get(M(e,t));void 0!==s&&s.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),function(t,e){const{element:{content:s},parts:i}=t,n=document.createTreeWalker(s,c,null,!1);let r=0,o=i[0],a=-1,l=0;const d=[];let h=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(d.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,o=i[++r]}d.forEach(t=>t.parentNode.removeChild(t))}(t,s)})})}const U=new Set,R=(t,e,s)=>{if(!U.has(s)){U.add(s);const i=document.createElement("template");if(Array.from(t.querySelectorAll("style")).forEach(t=>{i.content.appendChild(t)}),window.ShadyCSS.prepareTemplateStyles(i,s),F(s),window.ShadyCSS.nativeShadow){const s=i.content.querySelector("style");null!==s&&(t.insertBefore(s,t.firstChild),function(t,e,s=null){const{element:{content:i},parts:n}=t;if(null==s)return void i.appendChild(e);const r=document.createTreeWalker(i,c,null,!1);let o=p(n),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===s&&(s.parentNode.insertBefore(e,s),a=u(e));-1!==o&&n[o].index===l;){if(a>0){for(;-1!==o;)n[o].index+=a,o=p(n,o);return}o=p(n,o)}}(e,s.cloneNode(!0),e.element.content.firstChild))}}};const z=t=>null!==t,B=t=>t?"":null,W=(t,e)=>e!==t&&(e==e||t==t),q={attribute:!0,type:String,reflect:!1,hasChanged:W},I=new Promise(t=>t(!0)),L=1,H=4,D=8;class X extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=I,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const t=[];for(const[e,s]of this._classProperties){const i=this._attributeNameForProperty(e,s);void 0!==i&&(this._attributeToPropertyMap.set(i,e),t.push(i))}return t}static createProperty(t,e=q){if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}if(this._classProperties.set(t,e),this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(i){const n=this[t];this[s]=i,this._requestPropertyUpdate(t,n,e)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const t=Object.getPrototypeOf(this);"function"==typeof t._finalize&&t._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const e=this.properties,s=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const t of s)this.createProperty(t,e[t])}static _attributeNameForProperty(t,e){const s=void 0!==e&&e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=W){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e&&e.type;if(void 0===s)return t;const i=s===Boolean?z:"function"==typeof s?s:s.fromAttribute;return i?i(t):t}static _propertyValueToAttribute(t,e){if(void 0===e||void 0===e.reflect)return;return(e.type===Boolean?B:e.type&&e.type.toAttribute||String)(t)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const[t]of this.constructor._classProperties)if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}_applyInstanceProperties(){for(const[t,e]of this._instanceProperties)this[t]=e;this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&L?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=q){const i=this.constructor,n=i._propertyValueToAttribute(e,s);if(void 0!==n){const e=i._attributeNameForProperty(t,s);void 0!==e&&(this._updateState=this._updateState|D,null===n?this.removeAttribute(e):this.setAttribute(e,n),this._updateState=this._updateState&~D)}}_attributeToProperty(t,e){if(!(this._updateState&D)){const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s._classProperties.get(i);this[i]=s._propertyValueFromAttribute(e,t)}}}requestUpdate(t,e){if(void 0!==t){const s=this.constructor._classProperties.get(t)||q;return this._requestPropertyUpdate(t,e,s)}return this._invalidate()}_requestPropertyUpdate(t,e,s){return this.constructor._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0===s.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let t;this._updateState=this._updateState|H;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._validate(),t(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&H}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t);const e=!(this._updateState&L);this._markUpdated(),e&&this.firstUpdated(t),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~H|L}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const[t,e]of this._reflectingProperties)this._propertyToAttribute(t,this[t],e);this._reflectingProperties=void 0}}updated(t){}firstUpdated(t){}}X._attributeToPropertyMap=new Map,X._finalized=!0,X._classProperties=new Map,X.properties={};class Z extends X{update(t){if(super.update(t),"function"!=typeof this.render)throw new Error("render() not implemented");this.constructor.render(this.render(),this.renderRoot,this.localName)}}Z.render=function(t,e,i){const n=$(i),r=n(t);let o=_.get(e);if(void 0!==o&&o.template===r&&o.processor===t.processor)return void o.update(t.values);o=new f(r,t.processor,n),_.set(e,o);const a=o._clone();o.update(t.values);const l=e instanceof ShadowRoot?e.host:void 0;void 0!==l&&j()&&(R(a,r,i),window.ShadyCSS.styleElement(l)),s(e,e.firstChild),e.appendChild(a)};const G=new WeakMap;function J(t,e,s){t.startNode.parentNode||s.delete(e)}class K extends Z{static get properties(){return{value:{type:Number},min:{type:Number},max:{type:Number},emoji:{type:String}}}constructor(){super(),this.min=0,this.max=5,this.value=0,this.emoji="🐼",this._renderEmoji=this._renderEmoji.bind(this),this._setValueOnClick=this._setValueOnClick.bind(this)}render(){const{min:t,max:i,value:n,emoji:r}=this;return O`
      <style>
        .rating {
          display: flex;
          font-size: 3em;
        }

        .emoji {
          cursor: pointer;
          color: rgba(0, 0, 0, 0);
          text-shadow: 0px 0px 0px var(--emoji-rating-unselected-color, #444);
        }

        .emoji.active {
          color: rgba(0, 0, 0, 1);
        }
      </style>
      <div class="rating" aria-role="range" aria-valuemin="${t}" aria-valuemax="${i}" aria-valuenow="${n}">
        ${function(t,i,n){let r;return 2===arguments.length?n=i:3===arguments.length&&(r=i),v(i=>{let o=G.get(i);void 0===o&&(o=new Map,G.set(i,o));const a=i.startNode.parentNode;let l=-1,d=i.startNode.nextSibling;for(const s of t){let t,h;try{t=n(s,++l),h=r?r(s):l}catch(t){console.error(t);continue}let c=o.get(h);if(void 0===c){const t=document.createComment(""),e=document.createComment("");a.insertBefore(t,d),a.insertBefore(e,d),(c=new S(i.templateFactory)).insertAfterNode(t),void 0!==h&&o.set(h,c)}else if(d!==c.startNode){const t=c.endNode.nextSibling;d!==t&&e(a,c.startNode,t,d)}else d=c.endNode.nextSibling;c.setValue(t),c.commit()}d!==i.endNode&&(s(a,d,i.endNode),o.forEach(J))})}([...r.repeat(i)],(t,e)=>e,this._renderEmoji)}
      </div>
    `}_renderEmoji(t,e){return O`
      <div class="emoji ${e<this.value?"active":""}" data-idx="${e}" @click="${this._setValueOnClick}">${t}</div>
    `}async _setValueOnClick(t){const e=parseInt(t.target.dataset.idx,10)+1;e===this.value?this.value=0:this.value=e,await this.updateComplete,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))}}return customElements.define("emoji-rating",K),K});


},{}],"index.js":[function(require,module,exports) {
"use strict";

require("@vanillawc/wc-blink");

require("emoji-rating");

console.log('Hello');
const messagesLog = document.getElementById('messagesLog');
const messagesTemplate = document.getElementById('messagesTemplate');
const loaderImage = document.getElementById('loader');
const drawProgress = document.getElementById('drawProgress');
let counter = 0;
const MOVES = {
  s: {
    text: 'stop',
    symbol: '🛑'
  },
  f: {
    text: 'forward',
    symbol: '⬆️'
  },
  b: {
    text: 'backwards',
    symbol: '⬇️'
  },
  l: {
    text: 'left',
    symbol: '⬅️'
  },
  r: {
    text: 'right',
    symbol: '➡️'
  }
};

async function addNewMessage(message) {
  const newTemplateNode = messagesTemplate.content.cloneNode(true);
  const msg = MOVES[message];
  newTemplateNode.querySelector('.message-content').innerText = "".concat(msg.symbol, " ").concat(msg.text);
  messagesLog.appendChild(newTemplateNode);
}

function countCommand(command) {
  if (command === 'f') {
    drawProgress.value = drawProgress.value + 1;
  }
}

async function getLatestMessages() {
  const messages = await fetch('/api-proxy').then(res => res.json());
  console.log(messages);
  const {
    last
  } = messages;
  messagesLog.innerHTML = '';
  loaderImage.remove();
  last.filter(message => message !== 'x').forEach(message => {
    countCommand(message);
    addNewMessage(message);
  });
}

async function run() {
  setInterval(getLatestMessages, 2000);
}

run();
},{"@vanillawc/wc-blink":"../node_modules/@vanillawc/wc-blink/index.js","emoji-rating":"../node_modules/emoji-rating/out/emojiRating.bundle.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52742" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/client.e31bb0bc.js.map