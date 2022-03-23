"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[290],{43864:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(4942),n=a(63366),o=a(87462),i=a(67294),s=a(85505),l=a(49408),c=a(49308),d=a(48267),m=a(47761),p=a(98348),y=a(48416);function u(e){return(0,y.Z)("MuiListItemText",e)}var g=(0,a(62194).Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),h=a(85893),x=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],f=(0,p.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[(0,r.Z)({},"& .".concat(g.primary),t.primary),(0,r.Z)({},"& .".concat(g.secondary),t.secondary),t.root,a.inset&&t.inset,a.primary&&a.secondary&&t.multiline,a.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,o.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),Z=i.forwardRef((function(e,t){var a=(0,m.Z)({props:e,name:"MuiListItemText"}),r=a.children,p=a.className,y=a.disableTypography,g=void 0!==y&&y,Z=a.inset,v=void 0!==Z&&Z,b=a.primary,w=a.primaryTypographyProps,E=a.secondary,T=a.secondaryTypographyProps,k=(0,n.Z)(a,x),j=i.useContext(d.Z).dense,I=null!=b?b:r,P=E,L=(0,o.Z)({},a,{disableTypography:g,inset:v,primary:!!I,secondary:!!P,dense:j}),R=function(e){var t=e.classes,a=e.inset,r=e.primary,n=e.secondary,o={root:["root",a&&"inset",e.dense&&"dense",r&&n&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,l.Z)(o,u,t)}(L);return null==I||I.type===c.Z||g||(I=(0,h.jsx)(c.Z,(0,o.Z)({variant:j?"body2":"body1",className:R.primary,component:"span",display:"block"},w,{children:I}))),null==P||P.type===c.Z||g||(P=(0,h.jsx)(c.Z,(0,o.Z)({variant:"body2",className:R.secondary,color:"text.secondary",display:"block"},T,{children:P}))),(0,h.jsxs)(f,(0,o.Z)({className:(0,s.Z)(R.root,p),ownerState:L,ref:t},k,{children:[I,P]}))}))},16042:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var r=a(67294),n=a(45697),o=a.n(n),i=a(39211),s=a(66449),l=a(4320),c=a(18368),d=a(86810),m=a(67935);const p=e=>{let{data:t}=e;return r.createElement(i.Z,{maxWidth:"100%"},r.createElement(i.Z,{sx:{px:{xs:4,sm:4,md:6},"& .blog-body":{"& p":{maxWidth:"100%",textAlign:"left",marginLeft:"auto",marginRight:"auto",display:"block","& .render-viewer-fatal, .render-viewer-error, .render-viewer-invalid":{display:"none !important"}},"& img":{maxWidth:{xs:"90%",md:"50%"},marginLeft:"auto",marginRight:"auto",textAlign:"center",display:"block"},"& .embedVideo-iframe":{width:"100%"}}}},r.createElement("div",{className:"blog-body",dangerouslySetInnerHTML:{__html:t.text.childMarkdownRemark.html}})),r.createElement(i.Z,{paddingY:4},r.createElement(m.Z,null)))};p.propTypes={data:o().shape({text:o().shape({childMarkdownRemark:o().shape({html:o().element})}),author:o().shape({name:o().string}),createdAt:o().string})};var y=p,u=a(67663),g=a(49308),h=a(43864);const x=e=>{let{data:t}=e;return(0,r.useEffect)((()=>{(async()=>{const e=document.querySelectorAll(".jarallax");if(!e||e&&0===e.length)return;const{jarallax:t}=await a.e(435).then(a.t.bind(a,76435,23));t(e,{speed:.2})})()})),r.createElement(i.Z,{className:"jarallax","data-jarallax":!0,"data-speed":"0.2",position:"relative",minHeight:{xs:400,sm:500,md:600},display:"flex",marginTop:-13,paddingTop:13,alignItems:"center",id:"agency__portfolio-item--js-scroll"},r.createElement(i.Z,{className:"jarallax-img",sx:{position:"absolute",objectFit:"cover",fontFamily:"object-fit: cover;",top:0,left:0,width:"100%",height:"100%",zIndex:-1,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center"}}),r.createElement(i.Z,{sx:{position:"absolute",top:0,left:0,right:0,bottom:0,width:1,height:1,background:(0,u.Fq)("#161c2d",.6),zIndex:1}}),r.createElement(d.Z,{position:"relative",zIndex:2},r.createElement(i.Z,null,r.createElement(g.Z,{variant:"h3",sx:{fontWeight:400,color:"common.white",marginBottom:2}},t.title),r.createElement(i.Z,{display:"flex",alignItems:"center"},r.createElement(h.Z,{sx:{margin:0},secondary:t.date,primaryTypographyProps:{variant:"h6",sx:{color:"common.white"}},secondaryTypographyProps:{sx:{color:(0,u.Fq)("#ffffff",.8)}}})))))};x.propTypes={data:o().shape({title:o().string,author:o().shape({name:o().string}),date:o().string})};var f=x;const Z=e=>{let{data:t}=e;const a=(0,s.Z)();return r.createElement(c.Z,{colorInvert:!0},r.createElement(i.Z,null,r.createElement(f,{data:t}),r.createElement(d.Z,null,r.createElement(l.ZP,{container:!0,spacing:2},r.createElement(y,{data:t}))),r.createElement(i.Z,{component:"svg",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 1920 100.1",sx:{marginBottom:-1,width:1}},r.createElement("path",{fill:a.palette.alternate.main,d:"M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"}))))};Z.propTypes={data:o().object};var v=Z;const b=e=>{let{data:t}=e;return r.createElement(v,{data:t.contentfulBlogPost})};b.propTypes={data:o().shape({contentfulBlogPost:o().object})};var w=b}}]);
//# sourceMappingURL=component---src-pages-blog-contentful-blog-post-title-js-c8c5c6a1ad03cf21bb59.js.map