"use strict";(self.webpackChunkcra_ts_5=self.webpackChunkcra_ts_5||[]).push([[76],{88671:function(n,e,i){var t=i(1413),s=i(29439),r=(i(47313),i(7410)),o=i(16783),a=i(46417);e.Z=function(n){var e=(0,r.U$)(n),i=(0,s.Z)(e,2),c=i[0],l=i[1],x=l.error&&l.touched?l.error:"";return(0,a.jsx)(o.Z,(0,t.Z)((0,t.Z)((0,t.Z)({},n),c),{},{helperText:x,error:!!x}))}},62538:function(n,e,i){i.d(e,{Z:function(){return R}});var t=i(47313),s=i(56352),r=i(45987),o=i(29439),a=i(1413),c=i(4942),l=i(88564),x=i(83061),d=i(16450),m=i(57822),u=i(33973),f=i(11198),g=i(47131),p=i(44211),Z=i(28597),h=i(11400),j=i(14065),b=i(50301),y=i(23837),v=i(5365),w=i(46417),C=["className","message","variant"],k="AppMessageView",S={success:"".concat(k,"-success"),error:"".concat(k,"-error"),info:"".concat(k,"-info"),warning:"".concat(k,"-warning"),icon:"".concat(k,"-icon"),iconVariant:"".concat(k,"-iconVariant"),message:"".concat(k,"-message")},I=(0,l.ZP)(h.Z)((function(n){var e,i=n.theme;return e={},(0,c.Z)(e,"& .".concat(S.success),{backgroundColor:y.Z[600]}),(0,c.Z)(e,"& .".concat(S.error),{backgroundColor:i.palette.error.main}),(0,c.Z)(e,"& .".concat(S.info),{backgroundColor:i.palette.primary.light}),(0,c.Z)(e,"& .".concat(S.warning),{backgroundColor:v.Z[700]}),(0,c.Z)(e,"& .".concat(S.icon),{fontSize:20}),(0,c.Z)(e,"& .".concat(S.iconVariant),{opacity:.9,marginRight:i.spacing(1)}),(0,c.Z)(e,"& .".concat(S.message),{display:"flex",alignItems:"center"}),e})),z={success:d.Z,warning:Z.Z,error:m.Z,info:u.Z};function W(n){return(0,w.jsx)(b.Z,(0,a.Z)((0,a.Z)({},n),{},{direction:"left"}))}var D=function(n){var e=t.useState(!1),i=(0,o.Z)(e,2),c=i[0],l=i[1],d=n.className,m=n.message,u=n.variant,Z=(0,r.Z)(n,C),h=z[u],b=(0,s.I0)(),y=function(){l(!1),setTimeout((function(){return b((0,j.SR)())}),500)};return(0,t.useEffect)((function(){m&&l(!0)}),[m]),(0,w.jsx)(I,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:c,onClose:y,autoHideDuration:3500,TransitionComponent:W,children:(0,w.jsx)(p.Z,(0,a.Z)({className:(0,x.Z)(S[u],d),"aria-describedby":"client-snackbar",message:(0,w.jsxs)("span",{id:"client-snackbar",className:S.message,children:[(0,w.jsx)(h,{className:(0,x.Z)(S.icon,S.iconVariant)}),m]}),action:[(0,w.jsx)(g.Z,{"aria-label":"close",color:"inherit",onClick:y,size:"large",children:(0,w.jsx)(f.Z,{className:S.icon})},"close")]},Z))})},M=i(1903),R=function(){var n=(0,s.v9)((function(n){return n.common})),e=n.error,i=n.loading,t=n.message;return(0,w.jsxs)(w.Fragment,{children:[i&&(0,w.jsx)(M.Z,{}),t&&(0,w.jsx)(D,{variant:"success",message:t.toString()}),e&&(0,w.jsx)(D,{variant:"error",message:e.toString()})]})}},55952:function(n,e,i){i(47313);var t=i(73428),s=i(57829),r=i(61113),o=i(69680),a=i(46417);e.Z=function(n){var e=n.children;return(0,a.jsx)(s.Z,{sx:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,a.jsxs)(t.Z,{sx:{maxWidth:900,minHeight:{xs:320,sm:450},width:"100%",overflow:"hidden",position:"relative",display:"flex"},children:[(0,a.jsx)(s.Z,{sx:{width:{xs:"100%",sm:"50%",lg:"40%"},padding:{xs:5,lg:10},display:"flex",flexDirection:"column",justifyContent:"center"},children:e}),(0,a.jsx)(s.Z,{sx:{width:{xs:"100%",sm:"50%",lg:"60%"},position:"relative",padding:{xs:5,lg:10},display:{xs:"none",sm:"flex"},alignItems:{sm:"center"},justifyContent:{sm:"center"},flexDirection:{sm:"column"},backgroundColor:function(n){return n.palette.grey[900]},color:function(n){return n.palette.common.white},fontSize:14},children:(0,a.jsxs)(s.Z,{sx:{maxWidth:320},children:[(0,a.jsx)(r.Z,{component:"h2",sx:{fontWeight:o.F3.BOLD,fontSize:30,mb:4},children:"Welcome to Crema!"}),(0,a.jsx)(r.Z,{children:"Crema is purely based on Material ui components and follows Material ui guidelines."})]})})]})})}},8076:function(n,e,i){i.r(e),i.d(e,{default:function(){return C}});i(47313);var t=i(57829),s=i(55952),r=i(57588),o=i(7410),a=i(3463),c=i(29466),l=i(97890),x=i(936),d=i(1001),m=i(88671),u=i(44758),f=i(69099),g=i(47131),p=i(62538),Z=i(50389),h=i(69680),j=i(57864),b=i(26672),y=i(58821),v=i(46417),w=function(){var n=(0,Z.a)(),e=n.signInWithEmailAndPassword,i=n.signInWithPopup,s=(0,l.s0)(),r=(0,x.Z)().messages,w=function(){s("/forget-password")},C=a.Ry({email:a.Z_().email(String(r["validation.emailFormat"])).required(String(r["validation.emailRequired"])),password:a.Z_().required(String(r["validation.passwordRequired"]))});return(0,v.jsxs)(t.Z,{sx:{flex:1,display:"flex",flexDirection:"column"},children:[(0,v.jsx)(t.Z,{sx:{flex:1,display:"flex",flexDirection:"column",mb:5},children:(0,v.jsx)(o.J9,{validateOnChange:!0,initialValues:{email:"crema.demo@gmail.com",password:"Pass@1!@all"},validationSchema:C,onSubmit:function(n,i){var t=i.setSubmitting;t(!0),e(n),t(!1)},children:function(n){var e=n.isSubmitting;return(0,v.jsxs)(o.l0,{style:{textAlign:"left"},noValidate:!0,autoComplete:"off",children:[(0,v.jsx)(t.Z,{sx:{mb:{xs:5,xl:8}},children:(0,v.jsx)(m.Z,{placeholder:r["common.email"],name:"email",label:(0,v.jsx)(d.Z,{id:"common.email"}),variant:"outlined",sx:{width:"100%","& .MuiInputBase-input":{fontSize:14}}})}),(0,v.jsx)(t.Z,{sx:{mb:{xs:3,xl:4}},children:(0,v.jsx)(m.Z,{type:"password",placeholder:r["common.password"],label:(0,v.jsx)(d.Z,{id:"common.password"}),name:"password",variant:"outlined",sx:{width:"100%","& .MuiInputBase-input":{fontSize:14}}})}),(0,v.jsxs)(t.Z,{sx:{mb:{xs:3,xl:4}},children:[(0,v.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,v.jsx)(u.Z,{sx:{ml:-3}}),(0,v.jsx)(t.Z,{component:"span",sx:{color:"grey.500"},children:(0,v.jsx)(d.Z,{id:"common.rememberMe"})})]}),(0,v.jsx)(t.Z,{component:"span",sx:{color:function(n){return n.palette.primary.main},fontWeight:h.F3.MEDIUM,cursor:"pointer",display:"block",textAlign:"right"},onClick:w,children:(0,v.jsx)(d.Z,{id:"common.forgetPassword"})})]}),(0,v.jsx)("div",{children:(0,v.jsx)(f.Z,{variant:"contained",color:"primary",type:"submit",disabled:e,sx:{minWidth:160,fontWeight:h.F3.REGULAR,fontSize:16,textTransform:"capitalize",padding:"4px 16px 8px"},children:(0,v.jsx)(d.Z,{id:"common.login"})})})]})}})}),(0,v.jsxs)(t.Z,{sx:{color:"grey.500",mb:{xs:5,md:7}},children:[(0,v.jsx)("span",{style:{marginRight:4},children:(0,v.jsx)(d.Z,{id:"common.dontHaveAccount"})}),(0,v.jsx)(t.Z,{component:"span",sx:{fontWeight:h.F3.MEDIUM,"& a":{color:function(n){return n.palette.primary.main},textDecoration:"none"}},children:(0,v.jsx)(c.rU,{to:"/signup",children:(0,v.jsx)(d.Z,{id:"common.signup"})})})]}),(0,v.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:function(n){return n.palette.background.default},mx:{xs:-5,lg:-10},mb:{xs:-6,lg:-11},mt:"auto",py:2,px:{xs:5,lg:10}},children:[(0,v.jsx)(t.Z,{sx:{color:function(n){return n.palette.text.secondary}},children:(0,v.jsx)(d.Z,{id:"common.orLoginWith"})}),(0,v.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,v.jsx)(g.Z,{sx:{p:2,"& svg":{fontSize:18},color:function(n){return n.palette.text.secondary}},onClick:function(){return i("google")},children:(0,v.jsx)(j.P_r,{})}),(0,v.jsx)(g.Z,{sx:{p:1.5,"& svg":{fontSize:18},color:function(n){return n.palette.text.secondary}},onClick:function(){return i("facebook")},children:(0,v.jsx)(b.tBk,{})}),(0,v.jsx)(g.Z,{sx:{p:1.5,"& svg":{fontSize:18},color:function(n){return n.palette.text.secondary}},onClick:function(){return i("github")},children:(0,v.jsx)(y.rFR,{})}),(0,v.jsx)(g.Z,{sx:{p:1.5,"& svg":{fontSize:18},color:function(n){return n.palette.text.secondary}},onClick:function(){return i("twitter")},children:(0,v.jsx)(j.h3E,{})})]})]}),(0,v.jsx)(p.Z,{})]})},C=function(){return(0,v.jsx)(s.Z,{children:(0,v.jsxs)(t.Z,{sx:{width:"100%"},children:[(0,v.jsx)(t.Z,{sx:{mb:{xs:6,xl:8}},children:(0,v.jsx)(t.Z,{sx:{mb:5,display:"flex",alignItems:"center"},children:(0,v.jsx)(r.Z,{})})}),(0,v.jsx)(w,{})]})})}}}]);