import{j as m}from"./jsx-runtime-D_zvdyIk.js";import"./Button.stories-Dls4jkAD.js";import"./Button-CrMJatsN.js";import"./iframe-Dv62orsr.js";import"./preload-helper-D9Z9MdNV.js";const t=({label:l,size:s,allCaps:n,color:c,fontColor:i})=>m.jsx("span",{className:`${s} ${c}`,style:{color:i},children:n?l.toUpperCase():l});t.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"The text to display"},size:{required:!1,tsType:{name:"union",raw:'"normal" | "h1" | "h2" | "h3"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'}]},description:"The size of the label"},allCaps:{required:!1,tsType:{name:"boolean"},description:"Whether the label text should be all caps"},color:{required:!1,tsType:{name:"union",raw:'"text-primary" | "text-secondary" | "text-tertiary"',elements:[{name:"literal",value:'"text-primary"'},{name:"literal",value:'"text-secondary"'},{name:"literal",value:'"text-tertiary"'}]},description:"The color scheme of the label"},fontColor:{required:!1,tsType:{name:"string"},description:"The font color of the label"}}};const h={title:"UI/labels/MyLabel",component:t,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Hello World!"}},r={args:{label:"All CAPS LABEL",allCaps:!0}},a={args:{label:"SecondaryLabel",color:"text-secondary"}},o={args:{label:"CustomColor",fontColor:"#ff0000"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Hello World!"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "All CAPS LABEL",
    allCaps: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "SecondaryLabel",
    color: "text-secondary"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "CustomColor",
    fontColor: "#ff0000"
  }
}`,...o.parameters?.docs?.source}}};const C=["Basic","AllCaps","SecondaryLabel","CustomColor"];export{r as AllCaps,e as Basic,o as CustomColor,a as SecondaryLabel,C as __namedExportsOrder,h as default};
