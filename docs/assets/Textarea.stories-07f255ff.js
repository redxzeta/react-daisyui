import{t as h,a as e,j as s}from"./tw-merge-837124be.js";import{R as _}from"./index-f1f749bf.js";import{c as T}from"./clsx.m-1229b3e0.js";import"./_commonjsHelpers-042e6b4d.js";const n=_.forwardRef(({bordered:a=!0,borderOffset:v,color:o,size:u,dataTheme:b,className:x,...y},g)=>{const N=h("textarea",x,T({[`textarea-${o}`]:o,[`textarea-${u}`]:u,["focus:outline-offset-0"]:!v,"textarea-bordered":a}));return e("textarea",{...y,"data-theme":b,className:N,ref:g})}),l=n;try{n.displayName="Textarea",n.__docgenInfo={description:"",displayName:"Textarea",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'},{value:'"ghost"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},bordered:{defaultValue:{value:"true"},description:"",name:"bordered",required:!1,type:{name:"boolean"}},borderOffset:{defaultValue:null,description:"",name:"borderOffset",required:!1,type:{name:"boolean"}}}}}catch{}try{l.displayName="Textarea",l.__docgenInfo={description:"",displayName:"Textarea",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'},{value:'"ghost"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},bordered:{defaultValue:{value:"true"},description:"",name:"bordered",required:!1,type:{name:"boolean"}},borderOffset:{defaultValue:null,description:"",name:"borderOffset",required:!1,type:{name:"boolean"}}}}}catch{}const A={title:"Data Input/Textarea",component:l,args:{placeholder:"Bio",disabled:!1}},r=a=>e("div",{className:"flex w-full component-preview p-4 items-center justify-center gap-2 font-sans",children:e(l,{...a})}),t=a=>e("div",{className:"flex w-full component-preview p-4 items-center justify-center gap-2 font-sans",children:s("div",{className:"form-control",children:[s("label",{className:"label",children:[e("span",{className:"label-text",children:"Your bio"}),e("span",{className:"label-text-alt",children:"Alt label"})]}),e(l,{...a}),s("label",{className:"label",children:[e("span",{className:"label-text-alt",children:"Your bio"}),e("span",{className:"label-text-alt",children:"Alt label"})]})]})});var c,d,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Textarea {...args} />
    </div>;
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,p,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your bio</span>
          <span className="label-text-alt">Alt label</span>
        </label>
        <Textarea {...args} />
        <label className="label">
          <span className="label-text-alt">Your bio</span>
          <span className="label-text-alt">Alt label</span>
        </label>
      </div>
    </div>;
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const O=["Default","FormControlAndLabels"];export{r as Default,t as FormControlAndLabels,O as __namedExportsOrder,A as default};
//# sourceMappingURL=Textarea.stories-07f255ff.js.map