(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-450786e9"],{"06d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("2b0e"),a=o["default"].extend({computed:{selectionStart:{cache:!1,get:function(){return this.$refs.input.selectionStart},set:function(t){this.$refs.input.selectionStart=t}},selectionEnd:{cache:!1,get:function(){return this.$refs.input.selectionEnd},set:function(t){this.$refs.input.selectionEnd=t}},selectionDirection:{cache:!1,get:function(){return this.$refs.input.selectionDirection},set:function(t){this.$refs.input.selectionDirection=t}}},methods:{select:function(){var t;(t=this.$refs.input).select.apply(t,arguments)},setSelectionRange:function(){var t;(t=this.$refs.input).setSelectionRange.apply(t,arguments)},setRangeText:function(){var t;(t=this.$refs.input).setRangeText.apply(t,arguments)}}})},1079:function(t,e,n){"use strict";var o=n("541c");e["a"]=o["a"]},"11de":function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return u}));var o=n("2b0e"),a=n("b42e"),r=n("c637"),l=n("a723"),i=n("cf75"),c=Object(i["d"])({id:Object(i["c"])(l["u"]),inline:Object(i["c"])(l["g"],!1),novalidate:Object(i["c"])(l["g"],!1),validated:Object(i["c"])(l["g"],!1)},r["J"]),u=o["default"].extend({name:r["J"],functional:!0,props:c,render:function(t,e){var n=e.props,o=e.data,r=e.children;return t("form",Object(a["a"])(o,{class:{"form-inline":n.inline,"was-validated":n.validated},attrs:{id:n.id,novalidate:n.novalidate}}),r)}})},"1f1e":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("2b0e"),a=o["default"].extend({computed:{validity:{cache:!1,get:function(){return this.$refs.input.validity}},validationMessage:{cache:!1,get:function(){return this.$refs.input.validationMessage}},willValidate:{cache:!1,get:function(){return this.$refs.input.willValidate}}},methods:{setCustomValidity:function(){var t;return(t=this.$refs.input).setCustomValidity.apply(t,arguments)},checkValidity:function(){var t;return(t=this.$refs.input).checkValidity.apply(t,arguments)},reportValidity:function(){var t;return(t=this.$refs.input).reportValidity.apply(t,arguments)}}})},"40fc":function(t,e,n){"use strict";n.d(e,"b",(function(){return j})),n.d(e,"a",(function(){return B}));var o=n("2b0e"),a=n("0056"),r=n("a723"),l=n("906c"),i=n("6b77"),c=n("a8c8"),u=n("58f2"),s=n("3a58"),p=n("d82f"),d=n("cf75"),b=n("fa73");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=Object(u["a"])("value",{type:r["p"],defaultValue:"",event:a["bb"]}),g=h.mixin,x=h.props,O=h.prop,y=h.event,j=Object(d["d"])(Object(p["m"])(m(m({},x),{},{ariaInvalid:Object(d["c"])(r["j"],!1),autocomplete:Object(d["c"])(r["u"]),debounce:Object(d["c"])(r["p"],0),formatter:Object(d["c"])(r["l"]),lazy:Object(d["c"])(r["g"],!1),lazyFormatter:Object(d["c"])(r["g"],!1),number:Object(d["c"])(r["g"],!1),placeholder:Object(d["c"])(r["u"]),plaintext:Object(d["c"])(r["g"],!1),readonly:Object(d["c"])(r["g"],!1),trim:Object(d["c"])(r["g"],!1)})),"formTextControls"),B=o["default"].extend({mixins:[g],props:j,data:function(){var t=this[O];return{localValue:Object(b["g"])(t),vModelValue:this.modifyValue(t)}},computed:{computedClass:function(){var t=this.plaintext,e=this.type,n="range"===e,o="color"===e;return[{"custom-range":n,"form-control-plaintext":t&&!n&&!o,"form-control":o||!t&&!n},this.sizeFormClass,this.stateClass]},computedDebounce:function(){return Object(c["d"])(Object(s["c"])(this.debounce,0),0)},hasFormatter:function(){return Object(d["b"])(this.formatter)}},watch:v({},O,(function(t){var e=Object(b["g"])(t),n=this.modifyValue(t);e===this.localValue&&n===this.vModelValue||(this.clearDebounce(),this.localValue=e,this.vModelValue=n)})),created:function(){this.$_inputDebounceTimer=null},mounted:function(){this.$on(a["eb"],this.clearDebounce)},beforeDestroy:function(){this.clearDebounce()},methods:{clearDebounce:function(){clearTimeout(this.$_inputDebounceTimer),this.$_inputDebounceTimer=null},formatValue:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t=Object(b["g"])(t),!this.hasFormatter||this.lazyFormatter&&!n||(t=this.formatter(t,e)),t},modifyValue:function(t){return t=Object(b["g"])(t),this.trim&&(t=t.trim()),this.number&&(t=Object(s["b"])(t,t)),t},updateValue:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=this.lazy;if(!o||n){this.clearDebounce();var a=function(){if(t=e.modifyValue(t),t!==e.vModelValue)e.vModelValue=t,e.$emit(y,t);else if(e.hasFormatter){var n=e.$refs.input;n&&t!==n.value&&(n.value=t)}},r=this.computedDebounce;r>0&&!o&&!n?this.$_inputDebounceTimer=setTimeout(a,r):a()}},onInput:function(t){if(!t.target.composing){var e=t.target.value,n=this.formatValue(e,t);!1===n||t.defaultPrevented?Object(i["f"])(t,{propagation:!1}):(this.localValue=n,this.updateValue(n),this.$emit(a["y"],n))}},onChange:function(t){var e=t.target.value,n=this.formatValue(e,t);!1===n||t.defaultPrevented?Object(i["f"])(t,{propagation:!1}):(this.localValue=n,this.updateValue(n,!0),this.$emit(a["d"],n))},onBlur:function(t){var e=t.target.value,n=this.formatValue(e,t,!0);!1!==n&&(this.localValue=Object(b["g"])(this.modifyValue(n)),this.updateValue(n,!0)),this.$emit(a["b"],t)},focus:function(){this.disabled||Object(l["d"])(this.$el)},blur:function(){this.disabled||Object(l["c"])(this.$el)}}})},4797:function(t,e,n){"use strict";n.d(e,"a",(function(){return _}));var o=n("2b0e"),a=n("c637"),r=n("a723"),l=n("2326"),i=n("906c"),c=n("6b77"),u=n("d82f"),s=n("cf75"),p=n("dde7"),d=n("06d9"),b=n("ad47"),f=n("d520"),m=n("40fc"),v=n("1f1e"),h=n("90ef"),g=n("bc9a");function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j=["text","password","email","number","url","tel","search","range","color","date","time","datetime","datetime-local","month","week"],B=Object(s["d"])(Object(u["m"])(O(O(O(O(O(O({},h["b"]),p["b"]),b["b"]),f["b"]),m["b"]),{},{list:Object(s["c"])(r["u"]),max:Object(s["c"])(r["p"]),min:Object(s["c"])(r["p"]),noWheel:Object(s["c"])(r["g"],!1),step:Object(s["c"])(r["p"]),type:Object(s["c"])(r["u"],"text",(function(t){return Object(l["a"])(j,t)}))})),a["R"]),_=o["default"].extend({name:a["R"],mixins:[g["a"],h["a"],p["a"],b["a"],f["a"],m["a"],d["a"],v["a"]],props:B,computed:{localType:function(){var t=this.type;return Object(l["a"])(j,t)?t:"text"},computedAttrs:function(){var t=this.localType,e=this.name,n=this.form,o=this.disabled,a=this.placeholder,r=this.required,l=this.min,i=this.max,c=this.step;return{id:this.safeId(),name:e,form:n,type:t,disabled:o,placeholder:a,required:r,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,min:l,max:i,step:c,list:"password"!==t?this.list:null,"aria-required":r?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return O(O({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{noWheel:function(t){this.setWheelStopper(t)}},mounted:function(){this.setWheelStopper(this.noWheel)},deactivated:function(){this.setWheelStopper(!1)},activated:function(){this.setWheelStopper(this.noWheel)},beforeDestroy:function(){this.setWheelStopper(!1)},methods:{setWheelStopper:function(t){var e=this.$el;Object(c["c"])(t,e,"focus",this.onWheelFocus),Object(c["c"])(t,e,"blur",this.onWheelBlur),t||Object(c["a"])(document,"wheel",this.stopWheel)},onWheelFocus:function(){Object(c["b"])(document,"wheel",this.stopWheel)},onWheelBlur:function(){Object(c["a"])(document,"wheel",this.stopWheel)},stopWheel:function(t){Object(c["f"])(t,{propagation:!1}),Object(i["c"])(this.$el)}},render:function(t){return t("input",{class:this.computedClass,attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners,ref:"input"})}})},"4f7d":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",{staticClass:"match-height"},[n("b-col",{attrs:{cols:"12"}},[n("form-input-basic")],1),n("b-col",{attrs:{md:"6"}},[n("form-input-size")],1),n("b-col",{attrs:{md:"6"}},[n("form-input-horizontal-lable-size")],1),n("b-col",{attrs:{cols:"12"}},[n("form-floating-label")],1),n("b-col",{attrs:{cols:"12"}},[n("form-input-contextual-states")],1),n("b-col",{attrs:{cols:"12"}},[n("form-input-validate-tooltips")],1),n("b-col",{attrs:{md:"6"}},[n("form-input-datalist")],1),n("b-col",{attrs:{md:"6"}},[n("form-input-debounce")],1),n("b-col",{attrs:{cols:"12"}},[n("form-input-formatter")],1)],1)},a=[],r=n("a15b"),l=n("b28b"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Basic Inputs"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeBasic)+" ")]},proxy:!0}])},[n("b-row",[n("b-col",{staticClass:"mb-1",attrs:{md:"6",xl:"4"}},[n("b-form-group",{attrs:{label:"Basic Input","label-for":"basicInput"}},[n("b-form-input",{attrs:{id:"basicInput",placeholder:"Enter Email"}})],1)],1),n("b-col",{staticClass:"mb-1",attrs:{md:"6",xl:"4"}},[n("b-form-group",[n("label",{attrs:{for:"InputHelp"}},[t._v("Input text with help")]),n("small",{staticClass:"text-muted"},[t._v(" eg. "),n("i",[t._v("someone@example.com")])]),n("b-form-input",{attrs:{id:"InputHelp"}})],1)],1),n("b-col",{staticClass:"mb-1",attrs:{md:"6",xl:"4"}},[n("b-form-group",{attrs:{label:"Disabled Input","label-for":"disabledInput"}},[n("b-form-input",{attrs:{id:"disabledInput",disabled:""}})],1)],1),n("b-col",{attrs:{md:"6",xl:"4"}},[n("b-form-group",{attrs:{label:"With Helper Text","label-for":"helperInput",description:"Find helper text here for given textbox."}},[n("b-form-input",{attrs:{id:"helperInput",placeholder:"Name"}})],1)],1),n("b-col",{attrs:{md:"6",xl:"4"}},[n("b-form-group",{attrs:{label:"Readonly Input","label-for":"readOnlyInput"}},[n("b-form-input",{attrs:{id:"readOnlyInput",value:"You can't update me :P",readonly:""}})],1)],1),n("b-col",{attrs:{md:"6",xl:"4"}},[n("b-form-group",{attrs:{label:"Readonly Static Text","label-for":"plainTextInput"}},[n("b-form-input",{attrs:{id:"plainTextInput",plaintext:"",value:"email@pixinvent.com"}})],1)],1)],1)],1)},c=[],u=n("1079"),s=n("4797"),p=n("8226"),d='\n<template>\n   <b-row>\n    <b-col md="4">\n      <div class="form-label-group">\n        <b-form-input\n          id="floating-label1"\n          placeholder="Label Placeholder"\n        />\n        <label for="floating-label1">Label-placeholder</label>\n      </div>\n    </b-col>\n    <b-col md="4">\n      <div class="form-label-group has-icon-left">\n        <b-form-input\n          id="iconLabelLeft"\n          placeholder="Icon Left, Default Input"\n        />\n        <div class="form-control-position">\n          <i class="bx bx-user" />\n        </div>\n        <label for="iconLabelLeft">Icon Left, Default Input</label>\n      </div>\n    </b-col>\n    <b-col md="4">\n      <div class="form-label-group">\n        <b-form-input\n          placeholder="Disabled-placeholder"\n          disabled\n        />\n        <label for="floating-label-disable">Disabled-placeholder</label>\n      </div>\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport { BFormInput, BRow, BCol } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormInput,\n    BRow,\n    BCol,\n  },\n}\n<\/script>\n',b='\n<template>\n  <b-row>\n    <b-col\n      md="6"\n      xl="4"\n      class="mb-1"\n    >\n\n      \x3c!-- basic --\x3e\n      <b-form-group\n        label="Basic Input"\n        label-for="basicInput"\n      >\n        <b-form-input\n          id="basicInput"\n          placeholder="Enter Email"\n        />\n      </b-form-group>\n    </b-col>\n\n    <b-col\n      md="6"\n      xl="4"\n      class="mb-1"\n    >\n      \x3c!-- input text with help --\x3e\n      <b-form-group>\n        <label for="InputHelp">Input text with help</label>\n        <small class="text-muted"> eg. <i>someone@example.com</i></small>\n        <b-form-input id="InputHelp" />\n      </b-form-group>\n    </b-col>\n\n    <b-col\n      md="6"\n      xl="4"\n      class="mb-1"\n    >\n      \x3c!-- disabled input --\x3e\n      <b-form-group\n        label="Disabled Input"\n        label-for="disabledInput"\n      >\n        <b-form-input\n          id="disabledInput"\n          disabled\n        />\n      </b-form-group>\n    </b-col>\n\n    <b-col\n      md="6"\n      xl="4"\n    >\n      \x3c!-- with helper text --\x3e\n      <b-form-group\n        label="With Helper Text"\n        label-for="helperInput"\n        description="Find helper text here for given textbox."\n      >\n        <b-form-input\n          id="helperInput"\n          placeholder="Name"\n        />\n      </b-form-group>\n    </b-col>\n    <b-col\n      md="6"\n      xl="4"\n    >\n      \x3c!-- readonly input --\x3e\n      <b-form-group\n        label="Readonly Input"\n        label-for="readOnlyInput"\n      >\n        <b-form-input\n          id="readOnlyInput"\n          value="You can\'t update me :P"\n          readonly\n        />\n      </b-form-group>\n    </b-col>\n\n    <b-col\n      md="6"\n      xl="4"\n    >\n      \x3c!-- static text --\x3e\n      <b-form-group\n        label="Readonly Static Text"\n        label-for="plainTextInput"\n      >\n        <b-form-input\n          id="plainTextInput"\n          plaintext\n          value="email@pixinvent.com"\n        />\n      </b-form-group>\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport {BFormInput, BRow, BCol, BFormGroup} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormInput,\n    BFormGroup,\n    BRow,\n    BCol,\n  },\n}\n<\/script>\n',f="\n<template>\n  <b-form-group class=\"mb-0\">\n    <b-form-input list=\"my-list-id\" />\n\n    <datalist id=\"my-list-id\">\n      <option>Manual Option</option>\n      <option\n        v-for=\"size in sizes\"\n        :key=\"size\"\n      >\n        {{ size }}\n      </option>\n    </datalist>\n  </b-form-group>\n</template>\n\n<script>\nimport { BFormInput, BFormGroup } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormGroup,\n    BFormInput,\n  },\n  data() {\n    return {\n      sizes: ['Small', 'Medium', 'Large', 'Extra Large'],\n    }\n  },\n}\n<\/script>\n",m='\n<template>\n  <div>\n    <b-form-input\n      v-model="value"\n      type="text"\n      debounce="500"\n    />\n    <b-card-text class="mt-1 mb-0">\n      <strong>Value : </strong><span>{{ value }}</span>\n    </b-card-text>\n  </div>\n</template>\n\n<script>\nimport { BFormInput, BCardText } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormInput,\n    BCardText,\n  },\n  data() {\n    return {\n      value: \'\',\n    }\n  },\n}\n<\/script>\n',v='\n<template>\n  <b-row>\n\n    \x3c!-- large --\x3e\n    <b-col cols="12">\n      <b-form-group\n        label="Large"\n        label-for="largeInput"\n      >\n        <b-form-input\n          id="largeInput"\n          size="lg"\n          placeholder="Large Input"\n        />\n      </b-form-group>\n    </b-col>\n\n    \x3c!-- default --\x3e\n    <b-col cols="12">\n      <b-form-group\n        label="Default"\n        label-for="defaultLabel"\n      >\n        <b-form-input\n          id="defaultLabel"\n          placeholder="Normal Input"\n        />\n      </b-form-group>\n    </b-col>\n\n    \x3c!-- small --\x3e\n    <b-col cols="12">\n      <b-form-group\n        label="Small"\n        label-for="smallInput"\n      >\n        <b-form-input\n          id="smallInput"\n          size="sm"\n          placeholder="Small Input"\n        />\n      </b-form-group>\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport {BFormInput, BRow, BCol, BFormGroup} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormInput,\n    BFormGroup,\n    BRow,\n    BCol,\n  },\n}\n<\/script>\n',h='\n<template>\n  <b-row>\n\n    \x3c!-- valid input --\x3e\n    <b-col md="6">\n      <b-form-group\n        label="Valid State"\n        label-for="input-valid"\n      >\n        <b-form-input\n          id="input-valid"\n          :state="true"\n          placeholder="Valid"\n        />\n        <b-form-valid-feedback>\n          This is valid state.\n        </b-form-valid-feedback>\n      </b-form-group>\n    </b-col>\n\n    \x3c!-- invalid input --\x3e\n    <b-col md="6">\n      <b-form-group\n        label="Invalid State"\n        label-for="input-invalid"\n      >\n        <b-form-input\n          id="input-invalid"\n          :state="false"\n          placeholder="Invalid"\n        />\n        <b-form-invalid-feedback>\n          This is invalid state.\n        </b-form-invalid-feedback>\n      </b-form-group>\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport {\n  BFormInput, BRow, BCol, BFormInvalidFeedback, BFormValidFeedback, BFormGroup,\n} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormInput,\n    BFormInvalidFeedback,\n    BFormValidFeedback,\n    BRow,\n    BFormGroup,\n    BCol,\n  },\n}\n<\/script>\n',g='\n<template>\n  <div>\n    <b-form-group\n      label="Text input with formatter (on input)"\n      label-for="input-formatter"\n      description="We will convert your name to lowercase instantly"\n    >\n      <b-form-input\n        id="input-formatter"\n        v-model="text1"\n        placeholder="Enter your name"\n        :formatter="formatter"\n      />\n    </b-form-group>\n    <b-card-text><strong>Value:</strong> {{ text1 }}</b-card-text>\n\n    <b-form-group\n      label="Text input with lazy formatter (on blur)"\n      label-for="input-lazy"\n      description="This one is a little lazy!"\n    >\n      <b-form-input\n        id="input-lazy"\n        v-model="text2"\n        placeholder="Enter your name"\n        lazy-formatter\n        :formatter="formatter"\n      />\n    </b-form-group>\n\n    <b-card-text class="mb-0">\n      <strong>Value:</strong> {{ text2 }}\n    </b-card-text>\n  </div>\n</template>\n\n<script>\nimport { BFormInput, BFormGroup, BCardText } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormInput,\n    BCardText,\n    BFormGroup,\n  },\n  data() {\n    return {\n      text1: \'\',\n      text2: \'\',\n    }\n  },\n  methods: {\n    formatter(value) {\n      return value.toLowerCase()\n    },\n  },\n}\n<\/script>\n',x='\n<template>\n  <b-form novalidate class="needs-validation" @submit.prevent>\n    <b-form-row>\n\n      \x3c!-- valid input  --\x3e\n      <b-col\n        md="4"\n        class="mb-3"\n      >\n        <label for="input-valid1">Valid Input:</label>\n        <b-form-input\n          id="input-valid1"\n          v-model="value1"\n          :state="value1.length > 0"\n          placeholder="Valid input"\n        />\n        <b-form-valid-feedback\n          tooltip\n        >\n          Looks good!\n        </b-form-valid-feedback>\n        <b-form-invalid-feedback\n          tooltip\n        >\n          Please provide a valid input.\n        </b-form-invalid-feedback>\n      </b-col>\n\n      \x3c!-- invalid input --\x3e\n      <b-col\n        md="4"\n        class="mb-3"\n      >\n        <label for="input-invalid1">Invalid Input:</label>\n        <b-form-input\n          id="input-invalid1"\n          v-model="value2"\n          :state="value2.length > 0"\n          placeholder="Invalid input"\n        />\n        <b-form-valid-feedback tooltip>\n          Looks good!\n        </b-form-valid-feedback>\n        <b-form-invalid-feedback\n          tooltip\n        >\n          Please provide a valid input.\n        </b-form-invalid-feedback>\n      </b-col>\n\n      \x3c!-- invalid input --\x3e\n      <b-col\n        md="4"\n        class="mb-3"\n      >\n        <label for="input-invalid2">Invalid Input:</label>\n        <b-form-input\n          id="input-invalid2"\n          v-model="value3"\n          :state="value3.length > 0"\n          placeholder="Invalid input"\n        />\n        <b-form-valid-feedback tooltip>\n          Looks good!\n        </b-form-valid-feedback>\n        <b-form-invalid-feedback tooltip>\n          Please provide a valid city.\n        </b-form-invalid-feedback>\n      </b-col>\n\n      \x3c!-- submit button --\x3e\n      <b-col\n        cols="12"\n      >\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          type="submit"\n          variant="primary"\n        >\n          Submit\n        </b-button>\n      </b-col>\n    </b-form-row>\n  </b-form>\n</template>\n\n<script>\nimport { BFormInput, BCol, BForm, BFormRow, BFormValidFeedback, BFormInvalidFeedback, BButton} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BFormInput,\n    BForm,\n    BButton,\n    BFormRow,\n    BFormValidFeedback,\n    BFormInvalidFeedback,\n    BCol,\n  },\n  directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      value1: \'John\',\n      value2: \'Doe\',\n      value3: \'\',\n    }\n  },\n}\n<\/script>\n',O='\n<template>\n  <div>\n     \x3c!-- large label  --\x3e\n    <b-form-group\n      label-cols="4"\n      label-cols-lg="2"\n      label-size="lg"\n      label="Large"\n      label-for="input-lg"\n    >\n      <b-form-input\n        id="input-lg"\n        size="lg"\n        placeholder="Large Input"\n      />\n    </b-form-group>\n\n    \x3c!-- default label --\x3e\n    <b-form-group\n      label-cols="4"\n      label-cols-lg="2"\n      label="Default"\n      label-for="input-default"\n    >\n      <b-form-input\n        id="input-default"\n        placeholder="Normal Input"\n      />\n    </b-form-group>\n\n    \x3c!-- small label --\x3e\n    <b-form-group\n      label-cols="4"\n      label-cols-lg="2"\n      label-size="sm"\n      label="Small"\n      label-for="input-sm"\n    >\n      <b-form-input\n        id="input-sm"\n        size="sm"\n        placeholder="Small Input"\n      />\n    </b-form-group>\n  </div>\n</template>\n\n<script>\nimport { BFormGroup, BFormInput } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormGroup,\n    BFormInput,\n  },\n}\n<\/script>\n',y={components:{BCardCode:u["a"],BFormInput:s["a"],BFormGroup:p["a"],BRow:r["a"],BCol:l["a"]},data:function(){return{codeBasic:b}}},j=y,B=n("2877"),_=Object(B["a"])(j,i,c,!1,null,null,null),I=_.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Sizing Options"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeSize)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("Set heights using the ")]),n("code",[t._v("size")]),n("span",[t._v(" prop to ")]),n("code",[t._v("sm")]),n("span",[t._v(" or ")]),n("code",[t._v("lg")]),n("span",[t._v(" for small or large respectively.")])]),n("div",[n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("b-form-group",{attrs:{label:"Large","label-for":"largeInput"}},[n("b-form-input",{attrs:{id:"largeInput",size:"lg",placeholder:"Large Input"}})],1)],1),n("b-col",{attrs:{cols:"12"}},[n("b-form-group",{attrs:{label:"Default","label-for":"defaultLabel"}},[n("b-form-input",{attrs:{id:"defaultLabel",placeholder:"Normal Input"}})],1)],1),n("b-col",{attrs:{cols:"12"}},[n("b-form-group",{attrs:{label:"Small","label-for":"smallInput"}},[n("b-form-input",{attrs:{id:"smallInput",size:"sm",placeholder:"Small Input"}})],1)],1)],1)],1)],1)},w=[],C=n("d6e4"),k={components:{BCardCode:u["a"],BFormInput:s["a"],BFormGroup:p["a"],BCardText:C["a"],BRow:r["a"],BCol:l["a"]},data:function(){return{codeSize:v}}},z=k,V=Object(B["a"])(z,F,w,!1,null,null,null),S=V.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Horizontal form label sizing"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeHorizontalSize)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("You can control the label text size match the size of your form input(s) via the optional ")]),n("code",[t._v("label-size")]),n("span",[t._v(" prop. Values can be ")]),n("code",[t._v("'sm'")]),n("span",[t._v(" or ")]),n("code",[t._v("'lg'")]),n("span",[t._v(" for small or large label, respectively. Sizes work for both horizontal and non-horizontal form groups.")])]),n("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2","label-size":"lg",label:"Large","label-for":"input-lg"}},[n("b-form-input",{attrs:{id:"input-lg",size:"lg",placeholder:"Large Input"}})],1),n("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2",label:"Default","label-for":"input-default"}},[n("b-form-input",{attrs:{id:"input-default",placeholder:"Normal Input"}})],1),n("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2","label-size":"sm",label:"Small","label-for":"input-sm"}},[n("b-form-input",{attrs:{id:"input-sm",size:"sm",placeholder:"Small Input"}})],1)],1)},T=[],L=n("541c"),$={components:{BCardCode:L["a"],BFormGroup:p["a"],BFormInput:s["a"],BCardText:C["a"]},data:function(){return{codeHorizontalSize:O}}},P=$,E=Object(B["a"])(P,D,T,!1,null,null,null),R=E.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Floating Label Inputs"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeFloatinLabel)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-2"},[n("span",[t._v("For Flating Label Inputs, need to use ")]),n("code",[t._v(".form-label-group")]),n("span",[t._v(" class & add prop ")]),n("code",[t._v("disabled")]),n("span",[t._v(" for disabled Floating Label Input.")])]),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("div",{staticClass:"form-label-group"},[n("b-form-input",{attrs:{id:"floating-label1",placeholder:"Label Placeholder"}}),n("label",{attrs:{for:"floating-label1"}},[t._v("Label-placeholder")])],1)]),n("b-col",{attrs:{md:"6"}},[n("div",{staticClass:"form-label-group"},[n("b-form-input",{attrs:{placeholder:"Disabled-placeholder",disabled:""}}),n("label",{attrs:{for:"floating-label-disable"}},[t._v("Disabled-placeholder")])],1)])],1)],1)},G=[],H={components:{BCardCode:u["a"],BCardText:C["a"],BFormInput:s["a"],BRow:r["a"],BCol:l["a"]},data:function(){return{codeFloatinLabel:d}}},M=H,N=Object(B["a"])(M,W,G,!1,null,null,null),A=N.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Contextual states"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeStates)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("Use ")]),n("code",[t._v("<b-form-valid-feedback>")]),n("span",[t._v(" and ")]),n("code",[t._v("<b-form-invalid-feedback>")]),n("span",[t._v(" form sub-components for input validation.")])]),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("b-form-group",{attrs:{label:"Valid State","label-for":"input-valid"}},[n("b-form-input",{attrs:{id:"input-valid",state:!0,placeholder:"Valid"}}),n("b-form-valid-feedback",[t._v(" This is valid state. ")])],1)],1),n("b-col",{attrs:{md:"6"}},[n("b-form-group",{attrs:{label:"Invalid State","label-for":"input-invalid"}},[n("b-form-input",{attrs:{id:"input-invalid",state:!1,placeholder:"Invalid"}}),n("b-form-invalid-feedback",[t._v(" This is invalid state. ")])],1)],1)],1)],1)},q=[],Y=n("3010"),U=n("5b4c"),K={components:{BCardCode:u["a"],BFormInput:s["a"],BCardText:C["a"],BFormInvalidFeedback:Y["a"],BFormValidFeedback:U["a"],BRow:r["a"],BFormGroup:p["a"],BCol:l["a"]},data:function(){return{codeStates:h}}},Q=K,X=Object(B["a"])(Q,J,q,!1,null,null,null),Z=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Input Validation States with Tootltips"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeValidateTooltips)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("Use ")]),n("code",[t._v("tooltip")]),n("span",[t._v(" true in ")]),n("code",[t._v("<b-form-valid-feedback>")]),n("span",[t._v(" and ")]),n("code",[t._v("<b-form-invalid-feedback>")]),n("span",[t._v(" form sub-components.")])]),n("b-form",{staticClass:"needs-validation",attrs:{novalidate:""},on:{submit:function(t){t.preventDefault()}}},[n("b-form-row",[n("b-col",{staticClass:"mb-3",attrs:{md:"4"}},[n("label",{attrs:{for:"input-valid1"}},[t._v("Valid Input:")]),n("b-form-input",{attrs:{id:"input-valid1",state:t.value1.length>0,placeholder:"Valid input"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),n("b-form-valid-feedback",{attrs:{tooltip:""}},[t._v(" Looks good! ")]),n("b-form-invalid-feedback",{attrs:{tooltip:""}},[t._v(" Please provide a valid input. ")])],1),n("b-col",{staticClass:"mb-3",attrs:{md:"4"}},[n("label",{attrs:{for:"input-invalid1"}},[t._v("Invalid Input:")]),n("b-form-input",{attrs:{id:"input-invalid1",state:t.value2.length>0,placeholder:"Invalid input"},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}}),n("b-form-valid-feedback",{attrs:{tooltip:""}},[t._v(" Looks good! ")]),n("b-form-invalid-feedback",{attrs:{tooltip:""}},[t._v(" Please provide a valid input. ")])],1),n("b-col",{staticClass:"mb-3",attrs:{md:"4"}},[n("label",{attrs:{for:"input-invalid2"}},[t._v("Invalid Input:")]),n("b-form-input",{attrs:{id:"input-invalid2",state:t.value3.length>0,placeholder:"Invalid input"},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}}),n("b-form-valid-feedback",{attrs:{tooltip:""}},[t._v(" Looks good! ")]),n("b-form-invalid-feedback",{attrs:{tooltip:""}},[t._v(" Please provide a valid city. ")])],1),n("b-col",{attrs:{cols:"12"}},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{type:"submit",variant:"primary"}},[t._v(" Submit ")])],1)],1)],1)],1)},et=[],nt=n("11de"),ot=n("1947"),at=n("13bb"),rt=n("e009"),lt={components:{BCardCode:u["a"],BFormInput:s["a"],BCardText:C["a"],BForm:nt["a"],BButton:ot["a"],BFormRow:at["a"],BFormValidFeedback:U["a"],BFormInvalidFeedback:Y["a"],BCol:l["a"]},directives:{Ripple:rt["a"]},data:function(){return{value1:"John",value2:"Doe",value3:"",codeValidateTooltips:x}}},it=lt,ct=Object(B["a"])(it,tt,et,!1,null,null,null),ut=ct.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Datalist support"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeDatalist)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("Datalists are a native HTML tag ")]),n("code",[t._v("<datalist>")]),n("span",[t._v(" that contains a list of ")]),n("code",[t._v("<option>")]),n("span",[t._v(" tags. By assigning an ID to the datalist tag, the list can be references from a text input by adding a ")]),n("code",[t._v("list")]),n("span",[t._v(" attribute.")])]),n("b-form-group",{staticClass:"mb-0"},[n("b-form-input",{attrs:{list:"my-list-id"}}),n("datalist",{attrs:{id:"my-list-id"}},[n("option",[t._v("Manual Option")]),t._l(t.sizes,(function(e){return n("option",{key:e},[t._v(" "+t._s(e)+" ")])}))],2)],1)],1)},pt=[],dt={components:{BCardCode:u["a"],BFormGroup:p["a"],BCardText:C["a"],BFormInput:s["a"]},data:function(){return{sizes:["Small","Medium","Large","Extra Large"],codeDatalist:f}}},bt=dt,ft=Object(B["a"])(bt,st,pt,!1,null,null,null),mt=ft.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Debounce support"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeDebounce)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("To enable debouncing, set the prop ")]),n("code",[t._v("debounce")]),n("span",[t._v(" to any integer greater than zero. The value is specified in milliseconds. Setting ")]),n("code",[t._v("debounce")]),n("span",[t._v(" to ")]),n("code",[t._v("0")]),n("span",[t._v(" will disable debouncing.")])]),n("b-form-input",{attrs:{type:"text",debounce:"500"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),n("b-card-text",{staticClass:"mt-1 mb-0"},[n("strong",[t._v("Value : ")]),n("span",[t._v(t._s(t.value))])])],1)},ht=[],gt={components:{BCardCode:u["a"],BFormInput:s["a"],BCardText:C["a"]},data:function(){return{value:"",codeDebounce:m}}},xt=gt,Ot=Object(B["a"])(xt,vt,ht,!1,null,null,null),yt=Ot.exports,jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Formatter support"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeFormatter)+" ")]},proxy:!0}])},[n("b-card-text",[n("code",[t._v("<b-form-input>")]),n("span",[t._v(" optionally supports formatting by passing a function reference to the ")]),n("code",[t._v("formatter")]),n("span",[t._v(" prop.")])]),n("div",[n("b-form-group",{attrs:{label:"Text input with formatter (on input)","label-for":"input-formatter",description:"We will convert your name to lowercase instantly"}},[n("b-form-input",{attrs:{id:"input-formatter",placeholder:"Enter your name",formatter:t.formatter},model:{value:t.text1,callback:function(e){t.text1=e},expression:"text1"}})],1),n("b-card-text",[n("strong",[t._v("Value:")]),t._v(" "+t._s(t.text1))]),n("b-form-group",{attrs:{label:"Text input with lazy formatter (on blur)","label-for":"input-lazy",description:"This one is a little lazy!"}},[n("b-form-input",{attrs:{id:"input-lazy",placeholder:"Enter your name","lazy-formatter":"",formatter:t.formatter},model:{value:t.text2,callback:function(e){t.text2=e},expression:"text2"}})],1),n("b-card-text",{staticClass:"mb-0"},[n("strong",[t._v("Value:")]),t._v(" "+t._s(t.text2)+" ")])],1)],1)},Bt=[],_t={components:{BCardCode:u["a"],BFormInput:s["a"],BCardText:C["a"],BFormGroup:p["a"]},data:function(){return{text1:"",text2:"",codeFormatter:g}},methods:{formatter:function(t){return t.toLowerCase()}}},It=_t,Ft=Object(B["a"])(It,jt,Bt,!1,null,null,null),wt=Ft.exports,Ct={components:{BRow:r["a"],BCol:l["a"],FormInputBasic:I,FormInputSize:S,FormInputHorizontalLableSize:R,FormFloatingLabel:A,FormInputContextualStates:Z,FormInputValidateTooltips:ut,FormInputDatalist:mt,FormInputDebounce:yt,FormInputFormatter:wt}},kt=Ct,zt=Object(B["a"])(kt,o,a,!1,null,null,null);e["default"]=zt.exports},a15b:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var o=n("b42e"),a=n("c637"),r=n("a723"),l=n("2326"),i=n("228e"),c=n("6c06"),u=n("b508"),s=n("d82f"),p=n("cf75"),d=n("fa73");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=["start","end","center"],h=Object(u["a"])((function(t,e){return e=Object(d["h"])(Object(d["g"])(e)),e?Object(d["c"])(["row-cols",t,e].filter(c["a"]).join("-")):null})),g=Object(u["a"])((function(t){return Object(d["c"])(t.replace("cols",""))})),x=[],O=function(){var t=Object(i["b"])().reduce((function(t,e){return t[Object(p["g"])(e,"cols")]=Object(p["c"])(r["p"]),t}),Object(s["c"])(null));return x=Object(s["h"])(t),Object(p["d"])(Object(s["m"])(f(f({},t),{},{alignContent:Object(p["c"])(r["u"],null,(function(t){return Object(l["a"])(Object(l["b"])(v,"between","around","stretch"),t)})),alignH:Object(p["c"])(r["u"],null,(function(t){return Object(l["a"])(Object(l["b"])(v,"between","around"),t)})),alignV:Object(p["c"])(r["u"],null,(function(t){return Object(l["a"])(Object(l["b"])(v,"baseline","stretch"),t)})),noGutters:Object(p["c"])(r["g"],!1),tag:Object(p["c"])(r["u"],"div")})),a["Ob"])},y={name:a["Ob"],functional:!0,get props(){return delete this.props,this.props=O(),this.props},render:function(t,e){var n,a=e.props,r=e.data,l=e.children,i=a.alignV,c=a.alignH,u=a.alignContent,s=[];return x.forEach((function(t){var e=h(g(t),a[t]);e&&s.push(e)})),s.push((n={"no-gutters":a.noGutters},m(n,"align-items-".concat(i),i),m(n,"justify-content-".concat(c),c),m(n,"align-content-".concat(u),u),n)),t(a.tag,Object(o["a"])(r,{staticClass:"row",class:s}),l)}}},ad47:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return i}));var o=n("2b0e"),a=n("a723"),r=n("cf75"),l=Object(r["d"])({size:Object(r["c"])(a["u"])},"formControls"),i=o["default"].extend({props:l,computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]}}})},d6e4:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var o=n("2b0e"),a=n("b42e"),r=n("c637"),l=n("a723"),i=n("cf75"),c=Object(i["d"])({textTag:Object(i["c"])(l["u"],"p")},r["u"]),u=o["default"].extend({name:r["u"],functional:!0,props:c,render:function(t,e){var n=e.props,o=e.data,r=e.children;return t(n.textTag,Object(a["a"])(o,{staticClass:"card-text"}),r)}})},dde7:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return u}));var o=n("2b0e"),a=n("a723"),r=n("906c"),l=n("cf75"),i="input, textarea, select",c=Object(l["d"])({autofocus:Object(l["c"])(a["g"],!1),disabled:Object(l["c"])(a["g"],!1),form:Object(l["c"])(a["u"]),id:Object(l["c"])(a["u"]),name:Object(l["c"])(a["u"]),required:Object(l["c"])(a["g"],!1)},"formControls"),u=o["default"].extend({props:c,mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(r["B"])((function(){var e=t.$el;t.autofocus&&Object(r["u"])(e)&&(Object(r["v"])(e,i)||(e=Object(r["C"])(i,e)),Object(r["d"])(e))}))}))}}})}}]);
//# sourceMappingURL=chunk-450786e9.808eb611.js.map