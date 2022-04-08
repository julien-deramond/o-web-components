!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";
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
    ***************************************************************************** */var e;const t=document.createElement("template");t.innerHTML='<style>\n  .container {\n    padding: 8px;\n  }\n</style>\n\n<div class="container" data-testid="componentA">\n  It works\n</div>\n\n';const n="component-a";class o extends HTMLElement{constructor(){super(),e.set(this,void 0),function(e,t,n,o,a){if("m"===o)throw new TypeError("Private method is not writable");if("a"===o&&!a)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===o?a.call(e,n):a?a.value=n:t.set(e,n)}(this,e,this.attachShadow({mode:"open"}),"f"),function(e,t,n,o){if("a"===n&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?o:"a"===n?o.call(e):o?o.value:t.get(e)}(this,e,"f").appendChild(t.content.cloneNode(!0))}}e=new WeakMap,window.customElements.define("component-a",o),window.customElements.get(n)||window.customElements.define(n,o)}));
