"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[290],{16042:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var r=a(67294),n=a(45697),o=a.n(n),s=a(11855),i=a(24550),l=a(64163),c=a(52028),d=a(86810),m=a(3772);const p=e=>{let{data:t}=e;return r.createElement(s.Z,null,r.createElement(s.Z,{sx:{px:{xs:0,sm:4,md:6},maxWidth:"1100px","& .blog-body":{"& div, img":{maxWidth:"100%",textAlign:"center",marginLeft:"auto",marginRight:"auto",display:"block"}}}},r.createElement("div",{className:"blog-body",dangerouslySetInnerHTML:{__html:t.text.childMarkdownRemark.html}})),r.createElement(s.Z,{paddingY:4},r.createElement(m.Z,null)))};p.propTypes={data:o().shape({text:o().shape({childMarkdownRemark:o().shape({html:o().element})}),author:o().shape({name:o().string}),createdAt:o().string})};var y=p,u=a(52831),g=a(28339),h=a(47040);const x=e=>{let{data:t}=e;return(0,r.useEffect)((()=>{(async()=>{const e=document.querySelectorAll(".jarallax");if(!e||e&&0===e.length)return;const{jarallax:t}=await a.e(850).then(a.t.bind(a,43850,23));t(e,{speed:.2})})()})),r.createElement(s.Z,{className:"jarallax","data-jarallax":!0,"data-speed":"0.2",position:"relative",minHeight:{xs:400,sm:500,md:600},display:"flex",marginTop:-13,paddingTop:13,alignItems:"center",id:"agency__portfolio-item--js-scroll"},r.createElement(s.Z,{className:"jarallax-img",sx:{position:"absolute",objectFit:"cover",fontFamily:"object-fit: cover;",top:0,left:0,width:"100%",height:"100%",zIndex:-1,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center"}}),r.createElement(s.Z,{sx:{position:"absolute",top:0,left:0,right:0,bottom:0,width:1,height:1,background:(0,u.Fq)("#161c2d",.6),zIndex:1}}),r.createElement(d.Z,{position:"relative",zIndex:2},r.createElement(s.Z,null,r.createElement(g.Z,{variant:"h3",sx:{fontWeight:400,color:"common.white",marginBottom:2}},t.title),r.createElement(s.Z,{display:"flex",alignItems:"center"},r.createElement(h.Z,{sx:{margin:0},secondary:t.date,primaryTypographyProps:{variant:"h6",sx:{color:"common.white"}},secondaryTypographyProps:{sx:{color:(0,u.Fq)("#ffffff",.8)}}})))))};x.propTypes={data:o().shape({title:o().string,author:o().shape({name:o().string}),date:o().string})};var f=x;const Z=e=>{let{data:t}=e;const a=(0,i.Z)();return r.createElement(c.Z,{colorInvert:!0},r.createElement(s.Z,null,r.createElement(f,{data:t}),r.createElement(d.Z,null,r.createElement(l.ZP,{container:!0,spacing:4},r.createElement(y,{data:t}))),r.createElement(s.Z,{component:"svg",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 1920 100.1",sx:{marginBottom:-1,width:1}},r.createElement("path",{fill:a.palette.alternate.main,d:"M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"}))))};Z.propTypes={data:o().object};var v=Z;const b=e=>{let{data:t}=e;return r.createElement(v,{data:t.contentfulBlogPost})};b.propTypes={data:o().shape({contentfulBlogPost:o().object})};var E=b},47040:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(4942),n=a(63366),o=a(87462),s=a(67294),i=a(38685),l=a(72372),c=a(28339),d=a(48399),m=a(68893),p=a(26640),y=a(68913);function u(e){return(0,y.Z)("MuiListItemText",e)}var g=(0,a(2162).Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),h=a(85893),x=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],f=(0,p.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[(0,r.Z)({},"& .".concat(g.primary),t.primary),(0,r.Z)({},"& .".concat(g.secondary),t.secondary),t.root,a.inset&&t.inset,a.primary&&a.secondary&&t.multiline,a.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,o.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),Z=s.forwardRef((function(e,t){var a=(0,m.Z)({props:e,name:"MuiListItemText"}),r=a.children,p=a.className,y=a.disableTypography,g=void 0!==y&&y,Z=a.inset,v=void 0!==Z&&Z,b=a.primary,E=a.primaryTypographyProps,T=a.secondary,w=a.secondaryTypographyProps,k=(0,n.Z)(a,x),j=s.useContext(d.Z).dense,I=null!=b?b:r,P=T,L=(0,o.Z)({},a,{disableTypography:g,inset:v,primary:!!I,secondary:!!P,dense:j}),M=function(e){var t=e.classes,a=e.inset,r=e.primary,n=e.secondary,o={root:["root",a&&"inset",e.dense&&"dense",r&&n&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,l.Z)(o,u,t)}(L);return null==I||I.type===c.Z||g||(I=(0,h.jsx)(c.Z,(0,o.Z)({variant:j?"body2":"body1",className:M.primary,component:"span",display:"block"},E,{children:I}))),null==P||P.type===c.Z||g||(P=(0,h.jsx)(c.Z,(0,o.Z)({variant:"body2",className:M.secondary,color:"text.secondary",display:"block"},w,{children:P}))),(0,h.jsxs)(f,(0,o.Z)({className:(0,i.Z)(M.root,p),ownerState:L,ref:t},k,{children:[I,P]}))}))}}]);
//# sourceMappingURL=component---src-pages-blog-contentful-blog-post-title-js-f53701b12b37ab4720e2.js.map