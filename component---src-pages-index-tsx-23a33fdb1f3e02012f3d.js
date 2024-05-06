(self.webpackChunkborg=self.webpackChunkborg||[]).push([[691],{5616:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return G},default:function(){return I}});var l=n(7294),i=n(3133);const a=(0,i.createGlobalStyle)(['body{margin:0 auto;font-family:"Roboto",sans-serif;}']);var r=e=>{let{children:t}=e;return l.createElement(l.Fragment,null,l.createElement(a,null),t)};const o=i.default.div.withConfig({displayName:"Headerstyle__HeaderWrapper",componentId:"sc-foudk3-0"})(["display:flex;justify-content:center;width:100%;height:575px;padding:0 40px;box-sizing:border-box;background:linear-gradient(270deg,#364053 0%,#191e29 100%);"]),d=i.default.div.withConfig({displayName:"Headerstyle__Content",componentId:"sc-foudk3-1"})(["display:flex;flex-direction:column;justify-content:space-around;align-items:center;max-width:1180px;width:100%;padding:60px 0;color:#fff;"]),c=i.default.h1.withConfig({displayName:"Headerstyle__Heading",componentId:"sc-foudk3-2"})(["margin:0;text-align:center;font-size:40px;margin-bottom:10px;@media (min-width:768px){font-size:80px;}"]),s=i.default.div.withConfig({displayName:"Headerstyle__Tagline",componentId:"sc-foudk3-3"})(["text-align:center;"]),p=i.default.div.withConfig({displayName:"Headerstyle__Graph",componentId:"sc-foudk3-4"})(["max-width:720px;height:270px;width:100%;margin-top:20px;background-color:white;"]);var C=()=>l.createElement(o,null,l.createElement(d,null,l.createElement(c,null,"BORG Token Metrics"),l.createElement(s,null,"Deep-dive into the statistics of BORG and the mechanics of the full SwissBorg Ecosystem."),l.createElement(p,null)));const L=i.default.div.withConfig({displayName:"Contentstyle__Content",componentId:"sc-1oi4wa-0"})(["max-width:1440px;padding:60px 40px;margin:0 auto;> div{display:flex;max-width:1180px;margin:0 auto;}"]),u=i.default.h2.withConfig({displayName:"Contentstyle__Heading",componentId:"sc-1oi4wa-1"})(["margin:0 0 40px 0;text-align:center;font-size:42px;"]),m=i.default.div.withConfig({displayName:"Contentstyle__MetricsWrapper",componentId:"sc-1oi4wa-2"})(["display:flex;flex-direction:column;justify-content:space-between;> div:first-of-type{margin-left:0;}@media (min-width:768px){flex-direction:row;> div:first-of-type{margin-left:20px;}}"]);var f=n(2409),y=n.n(f),g=n(2639),h=n.n(g),x=n(482),E=n.n(x),_=n(3126),k=n.n(_);const w={diamond:y(),burned:h(),buyback:E(),supply:k()},V=i.default.ul.withConfig({displayName:"BorgMetricsstyle__BorgMetrics",componentId:"sc-dr15ks-0"})(["list-style:none;width:100%;margin:0;padding:0;@media (min-width:768px){max-width:550px;}"]),v=i.default.li.withConfig({displayName:"BorgMetricsstyle__BorgMetric",componentId:"sc-dr15ks-1"})(["display:flex;align-items:center;gap:10px;font-size:20px;font-weight:300;box-shadow:0px 1px 0px rgba(143,150,161,0.5);@media (min-width:768px){height:72px;font-size:24px;}"]),M=i.default.div.withConfig({displayName:"BorgMetricsstyle__CopyWrapper",componentId:"sc-dr15ks-2"})(["display:flex;flex-direction:column-reverse;width:100%;padding:12px 0;@media (min-width:768px){flex-direction:row;align-items:center;}"]),b=i.default.div.withConfig({displayName:"BorgMetricsstyle__QuantityWrapper",componentId:"sc-dr15ks-3"})(["color:#01c38d;display:flex;flex:1;flex-direction:column;justify-content:space-around;line-height:30px;> div{line-height:inherit;}@media (min-width:768px){align-items:flex-end;height:60px;}"]),B=i.default.div.withConfig({displayName:"BorgMetricsstyle__Quantity",componentId:"sc-dr15ks-4"})(["font-weight:600;"]),Z=i.default.div.withConfig({displayName:"BorgMetricsstyle__SubText",componentId:"sc-dr15ks-5"})(["font-size:16px;"]),R=e=>e?(100*e).toFixed(2):"";var H=e=>{let{borgMetricsData:t}=e;if(!t)return null;const{circulatingSupplyTokens:n,stakedBorgTokens:i,stakedBorgPercentage:a,borgInYieldTokens:r,borgInYieldPercentage:o,borgBurnedTokens:d,borgInBubackPoolTokens:c}=t,s=[{icon:w.supply,title:"Remaining circulating supply",quantity:null==n?void 0:n.toLocaleString()},{icon:w.diamond,title:"BORG staked",quantity:null==i?void 0:i.toLocaleString(),subText:"("+R(a)+"% of circulating supply)"},{icon:w.diamond,title:"BORG in yield",quantity:null==r?void 0:r.toLocaleString(),subText:"("+R(o)+"% of circulating supply)"},{icon:w.burned,title:"Circulating supply burned",quantity:null==d?void 0:d.toLocaleString()},{icon:w.buyback,title:"BORG in buyback pool",quantity:null==c?void 0:c.toLocaleString()}];return l.createElement(V,null,s.map((e=>{const{icon:t,title:n,quantity:i,subText:a}=e;return l.createElement(v,null,l.createElement(t,null),l.createElement(M,null,l.createElement("div",null,n),l.createElement(b,null,l.createElement(B,null,i),a&&l.createElement(Z,null,a))))})))};const O=i.default.div.withConfig({displayName:"BorgChartstyle__BorgChart",componentId:"sc-6xlgbz-0"})(["min-height:300px;width:100%;background-color:#364053;margin-top:30px;@media (min-width:768px){flex-direction:row;margin-top:0;max-width:550px;}"]);var S=()=>l.createElement(O,null);var F=e=>{let{borgMetricsData:t}=e;return l.createElement(L,null,l.createElement(u,null,"Breakdown of BORG's circulating supply"),l.createElement(m,null,l.createElement(H,{borgMetricsData:t}),l.createElement(S,null)))};var I=()=>{const{0:e,1:t}=(0,l.useState)();return(0,l.useEffect)((()=>{(async()=>{const e=await fetch("https://borg-api-techchallenge.swissborg-stage.com/api/borg-stats"),n=await e.json();t(n)})()}),[]),l.createElement(r,null,l.createElement(l.Fragment,null,l.createElement(C,null),l.createElement(F,{borgMetricsData:e})))};const G=()=>l.createElement(l.Fragment,null,l.createElement("title",null,"Home Page"),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:site",content:"@swissborg"}),l.createElement("meta",{name:"twitter:title",content:"SwissBorg BORG token"}),l.createElement("meta",{name:"twitter:description",content:"Making crypto asset management accessible. Discover our app & community: #WeAreSwissBorg"}),l.createElement("meta",{name:"twitter:image",content:"https://twitter.com/swissborg/header_photo"}))},2639:function(e,t,n){var l=n(7294);function i(e){return l.createElement("svg",e,[l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.8476 17.7981C23.9936 13.8086 21.8113 10.3469 18.8175 7.94682C18.4059 7.61689 17.979 7.30702 17.5381 7.01859C17.6016 7.51486 17.6292 8.03004 17.6297 8.54539L17.6297 8.55921C17.6297 12.7093 15.5794 16.3586 12.4766 18.4481C10.4995 19.8732 9.19981 22.2707 9.19981 24.9861C9.19981 25.2653 9.21811 25.5446 9.24557 25.8142C9.29133 26.8637 9.59338 27.9422 9.96865 28.7991C11.7992 32.9396 15.4256 35.8186 20.0569 35.8186C20.0649 35.8186 20.0729 35.8186 20.0809 35.8186C20.0885 35.8186 20.0962 35.8186 20.1039 35.8186C20.3271 35.8186 20.5476 35.8064 20.7648 35.7828C22.7893 35.5844 25.016 34.5935 26.5712 33.6032C29.9304 31.4849 31.9998 28.0866 31.9998 23.6669C31.9998 20.2229 30.6387 17.1179 28.446 14.9146C28.3714 14.8396 28.2958 14.7657 28.2193 14.6928C27.8914 14.3806 27.5462 14.0879 27.1854 13.8166C27.2311 14.1055 27.2494 14.3943 27.2494 14.6928C27.2494 14.9294 27.2355 15.1625 27.2084 15.3913C27.0876 16.413 26.7053 17.3486 26.1349 18.1226C25.8349 18.5298 25.4828 18.8923 25.0893 19.1991C25.027 18.7256 24.9461 18.2584 24.8476 17.7981ZM25.2054 33.0201C25.4571 32.8801 25.6986 32.7363 25.9267 32.591L25.9311 32.5882C28.9545 30.6816 30.7998 27.6598 30.7998 23.6669C30.7998 20.8916 29.8264 18.3715 28.228 16.4553C27.8452 17.9464 26.9876 19.2406 25.8272 20.1454L24.1735 21.435L23.8996 19.3559C23.3823 15.4289 21.5043 11.9692 18.797 9.5068C18.5094 13.656 16.3482 17.2799 13.1638 19.432C11.5074 20.6331 10.3998 22.6636 10.3998 24.9861C10.3998 25.2142 10.4148 25.4514 10.4394 25.6926L10.4429 25.7272L10.4444 25.7619C10.4824 26.6335 10.7386 27.5651 11.067 28.3158C11.9753 30.3692 13.3435 32.0471 15.0532 33.1539C14.3893 32.1848 13.9998 31.0116 13.9998 29.7476C13.9998 28.2973 14.5105 26.9683 15.3621 25.9267C15.5562 25.6893 15.768 25.4668 15.9955 25.2612C16.1672 25.1061 16.3478 24.9605 16.5366 24.8255C16.5167 24.9641 16.5068 25.1127 16.5068 25.2612C16.5068 25.6014 16.5677 25.9281 16.6793 26.2303L16.6887 26.2553C16.881 26.7606 17.216 27.196 17.6464 27.5094C17.7124 27.0331 17.8177 26.5696 17.9589 26.1223C18.4203 24.6603 19.265 23.37 20.3725 22.3629C20.4365 22.3047 20.5014 22.2474 20.5672 22.1911C20.8975 21.9082 21.2494 21.6498 21.62 21.4186C21.5902 21.6662 21.5704 21.9237 21.5704 22.1911C21.5704 22.4266 21.5843 22.6589 21.6112 22.8871C21.8221 24.6736 22.8346 26.2109 24.2756 27.133C25.3161 27.8461 25.9998 29.0445 25.9998 30.4013C25.9998 30.5399 25.9899 30.6785 25.98 30.8172C25.9602 31.3421 25.8016 31.8769 25.5935 32.3127C25.4797 32.5578 25.3499 32.7941 25.2054 33.0201ZM20.6257 34.5907C22.3456 34.406 23.8033 33.3186 24.5052 31.8073L24.5106 31.7955C24.6634 31.4755 24.7684 31.1013 24.7808 30.7719L24.7816 30.7518L24.783 30.7317C24.7935 30.5858 24.7998 30.4899 24.7998 30.4013C24.7998 29.463 24.3313 28.6323 23.6107 28.1322C22.1168 27.1698 21.0063 25.6549 20.5714 23.872C19.6562 24.9229 19.0349 26.2314 18.835 27.674L18.56 29.6591L16.94 28.4794C16.5058 28.1633 16.1395 27.7607 15.8646 27.298C15.4415 28.0172 15.1998 28.8539 15.1998 29.7476C15.1998 31.5151 16.1504 33.0632 17.5665 33.906L17.5796 33.9138C18.3091 34.3606 19.1547 34.6144 20.0809 34.6185C20.2586 34.6178 20.4405 34.6082 20.6257 34.5907Z",fill:"url(#paint0_linear_363_382)",key:0}),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.1764 0.48046C20.4458 0.0695015 19.5538 0.0695018 18.8232 0.48046L2.02318 9.93046C1.26747 10.3555 0.799805 11.1552 0.799805 12.0222V30.815C0.799805 31.682 1.26747 32.4817 2.02318 32.9068L18.8232 42.3568C19.5538 42.7677 20.4458 42.7677 21.1764 42.3568L37.9764 32.9068C38.7321 32.4817 39.1998 31.682 39.1998 30.815V12.0222C39.1998 11.1552 38.7321 10.3555 37.9764 9.93046L21.1764 0.48046ZM37.3881 10.9763L20.5881 1.52635C20.2228 1.32087 19.7768 1.32087 19.4115 1.52635L2.61149 10.9764C2.23364 11.1889 1.9998 11.5887 1.9998 12.0222V30.815C1.9998 31.2485 2.23364 31.6483 2.61149 31.8609L19.4115 41.3109C19.7768 41.5163 20.2228 41.5163 20.5881 41.3109L37.3881 31.8609C37.766 31.6483 37.9998 31.2485 37.9998 30.815V12.0222C37.9998 11.5887 37.766 11.1889 37.3881 10.9763Z",fill:"url(#paint1_linear_363_382)",key:1}),l.createElement("defs",{key:2},[l.createElement("linearGradient",{id:"paint0_linear_363_382",x1:"0.799805",y1:"0.172241",x2:"0.799805",y2:"42.665",gradientUnits:"userSpaceOnUse",key:0},[l.createElement("stop",{stopColor:"#13E5BF",key:0}),l.createElement("stop",{offset:"1",stopColor:"#01C38D",key:1})]),l.createElement("linearGradient",{id:"paint1_linear_363_382",x1:"0.799805",y1:"0.172241",x2:"0.799805",y2:"42.665",gradientUnits:"userSpaceOnUse",key:1},[l.createElement("stop",{stopColor:"#13E5BF",key:0}),l.createElement("stop",{offset:"1",stopColor:"#01C38D",key:1})])])])}i.defaultProps={width:"40",height:"43",viewBox:"0 0 40 43",fill:"none"},e.exports=i,i.default=i},482:function(e,t,n){var l=n(7294);function i(e){return l.createElement("svg",e,[l.createElement("path",{d:"M44.4077 19.6226C42.2367 10.3354 33.9035 3.41846 23.9547 3.41846C22.0736 3.41846 20.2502 3.66575 18.5153 4.12959L18.5211 4.12566C16.9074 4.55728 15.3721 5.17566 13.939 5.95567C7.55571 9.42504 3.17196 16.1076 2.95882 23.8322L1.96763 21.7812C1.82344 21.4828 1.46469 21.3579 1.16633 21.5021C0.867974 21.6462 0.742995 22.005 0.887181 22.3033L2.94584 26.5632C3.04038 26.7588 3.23327 26.888 3.45013 26.901C3.66699 26.914 3.87395 26.8088 3.99119 26.6259L6.54445 22.6428C6.72328 22.3638 6.6421 21.9927 6.36312 21.8139C6.08415 21.635 5.71303 21.7162 5.5342 21.9952L4.16713 24.1278C4.26791 16.7528 8.42386 10.3059 14.5515 6.98886C17.349 5.47682 20.5516 4.61846 23.9547 4.61846C33.2369 4.61846 41.0276 11.0044 43.173 19.6226L44.4077 19.6226Z",fill:"url(#paint0_linear_1_28744)",key:0}),l.createElement("path",{d:"M44.8699 22.4406C44.7664 22.2496 44.5677 22.1295 44.3504 22.1266C44.1332 22.1238 43.9314 22.2385 43.8228 22.4267L41.4581 26.5246C41.2925 26.8116 41.3909 27.1785 41.678 27.3442C41.965 27.5098 42.3319 27.4114 42.4975 27.1244L43.751 24.952C43.6477 28.8868 42.3967 32.5358 40.3205 35.5764C38.3581 38.4464 35.6577 40.7783 32.4843 42.2924L32.462 42.3108C29.8844 43.539 26.9995 44.2264 23.954 44.2264C14.6921 44.2264 6.91518 37.8684 4.74981 29.2788L3.51423 29.2788C5.70578 38.5375 14.0254 45.4264 23.954 45.4264C31.1825 45.4264 37.5582 41.7749 41.3371 36.2158C43.5085 33.0256 44.8216 29.2118 44.9547 25.1145L46.0702 27.1717C46.2281 27.463 46.5923 27.5711 46.8836 27.4132C47.1749 27.2552 47.283 26.891 47.1251 26.5997L44.8699 22.4406Z",fill:"url(#paint1_linear_1_28744)",key:1}),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.4479 11.7451C24.1703 11.5868 23.8296 11.5868 23.552 11.7451L13.1095 17.6994C12.8273 17.8603 12.6531 18.1602 12.6531 18.485V30.3526C12.6531 30.6775 12.8273 30.9774 13.1095 31.1383L23.552 37.0926C23.8296 37.2509 24.1703 37.2509 24.4479 37.0926L34.8904 31.1383C35.1726 30.9774 35.3468 30.6775 35.3468 30.3526V18.485C35.3468 18.1602 35.1726 17.8603 34.8904 17.6994L24.4479 11.7451ZM23.0566 10.8764C23.6413 10.543 24.3586 10.543 24.9433 10.8764L35.3857 16.8307C35.98 17.1695 36.3468 17.801 36.3468 18.485V30.3526C36.3468 31.0367 35.98 31.6682 35.3857 32.007L24.9433 37.9613C24.3586 38.2946 23.6413 38.2946 23.0566 37.9613L12.6142 32.007C12.0199 31.6682 11.6531 31.0367 11.6531 30.3526V18.485C11.6531 17.801 12.0199 17.1695 12.6142 16.8307L23.0566 10.8764Z",fill:"url(#paint2_linear_1_28744)",key:2}),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 41.0408C33.1803 41.0408 40.6224 33.5988 40.6224 24.4185C40.6224 15.2382 33.1803 7.79614 24 7.79614C14.8198 7.79614 7.37769 15.2382 7.37769 24.4185C7.37769 33.5988 14.8198 41.0408 24 41.0408ZM22.9629 9.53004C23.6057 9.16349 24.3943 9.16349 25.0371 9.53004L36.5183 16.0765C37.1716 16.4491 37.5749 17.1434 37.5749 17.8955V30.9435C37.5749 31.6956 37.1716 32.3899 36.5183 32.7624L25.0371 39.3089C24.3943 39.6754 23.6057 39.6754 22.9629 39.3089L11.4817 32.7624C10.8284 32.3899 10.425 31.6956 10.425 30.9435V17.8955C10.425 17.1434 10.8284 16.4491 11.4817 16.0765L22.9629 9.53004Z",fill:"#13E5BF",fillOpacity:"0.1",key:3}),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.1934 15.22L24.6844 16.0765V23.3523L25.5083 23.8204V18.2795L28.3377 19.8857L28.3403 19.8843L28.8897 20.1956L29.3484 19.9368V19.4996L25.5083 17.3228V16.5654L26.1934 16.1768L30.1705 18.4346V20.4441L28.2611 21.5214L28.1971 21.4898C28.0806 21.4325 27.9602 21.4032 27.8394 21.4032C27.3847 21.4032 27.0153 21.7776 27.0153 22.2379C27.0153 22.6979 27.3847 23.0724 27.8394 23.0724C28.2609 23.0724 28.611 22.7501 28.6544 22.3231L28.6615 22.251L30.5883 21.1633L32.3754 22.1782V26.6665L30.5863 27.6809L23.3156 23.5526V16.0767L21.8064 15.22L17.0058 17.9456V20.4326L14.8005 21.6828V27.1499L17.0058 28.402V30.8933L21.8064 33.6189L23.3156 32.7622V25.4706L22.4915 25.0027V30.5594L19.1102 28.6431L18.6516 28.9019V29.3391L22.4915 31.5161V32.2732L21.8064 32.6621L17.8297 30.4043V28.3946L19.7389 27.3177L19.803 27.3491C19.9197 27.4066 20.0398 27.4355 20.1606 27.4355C20.6151 27.4355 20.9847 27.0613 20.9847 26.601C20.9847 26.1407 20.6151 25.7665 20.1606 25.7665C19.7393 25.7665 19.3892 26.0886 19.346 26.516L19.3385 26.5881L17.4117 27.6754L15.6246 26.6609V22.1724L17.4137 21.1579L24.6844 25.2863V32.7622L26.1934 33.6189L30.9944 30.8933V28.4061L33.1995 27.1558V21.6892L30.9944 20.4375V17.9456L26.1934 15.22ZM17.8296 18.4346L21.8063 16.1768L22.4914 16.5658V17.3226L17.8296 19.9653V18.4346ZM22.4915 18.279L18.2572 20.68L22.4915 23.0843V18.279ZM25.5083 25.7543L29.7429 28.1592L25.5083 30.56V25.7543ZM25.5083 31.5164V32.2732L26.1934 32.662L30.1705 30.4042V28.8735L25.5083 31.5164Z",fill:"url(#paint3_linear_1_28744)",key:4}),l.createElement("defs",{key:5},[l.createElement("linearGradient",{id:"paint0_linear_1_28744",x1:"22.6175",y1:"30.2625",x2:"22.6175",y2:"3.41846",gradientUnits:"userSpaceOnUse",key:0},[l.createElement("stop",{stopColor:"#13E5BF",key:0}),l.createElement("stop",{offset:"1",stopColor:"#01C38D",key:1})]),l.createElement("linearGradient",{id:"paint1_linear_1_28744",x1:"25.356",y1:"48.7605",x2:"25.356",y2:"22.1266",gradientUnits:"userSpaceOnUse",key:1},[l.createElement("stop",{stopColor:"#13E5BF",key:0}),l.createElement("stop",{offset:"1",stopColor:"#01C38D",key:1})]),l.createElement("linearGradient",{id:"paint2_linear_1_28744",x1:"39.8804",y1:"24.4188",x2:"11.6531",y2:"24.4188",gradientUnits:"userSpaceOnUse",key:2},[l.createElement("stop",{stopColor:"#13E5BF",key:0}),l.createElement("stop",{offset:"1",stopColor:"#01C38D",key:1})]),l.createElement("linearGradient",{id:"paint3_linear_1_28744",x1:"14.8005",y1:"15.22",x2:"14.8005",y2:"33.6189",gradientUnits:"userSpaceOnUse",key:3},[l.createElement("stop",{stopColor:"#13E5BF",key:0}),l.createElement("stop",{offset:"1",stopColor:"#01C38D",key:1})])])])}i.defaultProps={width:"48",height:"49",viewBox:"0 0 48 49",fill:"none"},e.exports=i,i.default=i},2409:function(e,t,n){var l=n(7294);function i(e){return l.createElement("svg",e,[l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.9792 6.61694H10.3874C9.93605 6.61694 9.50933 6.81071 9.22669 7.14438L2.32531 15.8607C2.09283 16.1352 1.98659 17.0691 2.00146 17.3992H16.3274L18.9792 6.61694Z",fill:"#13E5BF",fillOpacity:"0.2",key:0}),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28.1499 6.61694H36.7417C37.1931 6.61694 37.6198 6.81071 37.9025 7.14438L44.8038 15.8607C45.0363 16.1352 45.1426 17.0691 45.1277 17.3992H30.8017L28.1499 6.61694Z",fill:"#13E5BF",fillOpacity:"0.2",key:1}),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.7244 40.9316C22.9544 41.1748 23.2535 41.3143 23.5646 41.3601L16.3764 16.8005H2.59912C2.61303 17.1151 2.73662 17.4253 2.97152 17.6724L22.7244 40.9316Z",fill:"#13E5BF",fillOpacity:"0.2",key:2}),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.4047 40.9316C24.1748 41.1748 23.8756 41.3143 23.5646 41.3601L30.7527 16.8005H44.53C44.5161 17.1151 44.3925 17.4253 44.1576 17.6724L24.4047 40.9316Z",fill:"#13E5BF",fillOpacity:"0.2",key:3}),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M44.7569 17.9986C45.2276 17.4395 45.3119 16.1932 44.8752 15.6025L37.2932 5.99509C37.0242 5.63128 36.6171 5.41931 36.1869 5.41931H10.9391C10.5093 5.41931 10.1021 5.63128 9.83315 5.99509L2.36954 15.6025C1.93243 16.1932 1.89836 17.4395 2.3695 17.9986L22.5162 42.0581C23.0785 42.7247 24.0479 42.7247 24.6102 42.0581L44.7569 17.9986ZM36.3299 6.70733L36.3411 6.72248L43.8218 16.2015H31.1305L28.5974 6.61734H36.1869C36.2145 6.61734 36.273 6.63035 36.3299 6.70733ZM27.3583 6.61734L29.8913 16.2015H17.235L19.768 6.61734H27.3583ZM18.5288 6.61734L15.9958 16.2015H3.42125L10.788 6.7188L10.7965 6.70733C10.8535 6.63019 10.9121 6.61734 10.9391 6.61734H18.5288ZM3.43048 17.3996L22.2865 39.9177L15.8345 17.3996H3.43048ZM24.8397 39.9179L43.6959 17.3996H31.2918L24.8397 39.9179ZM23.5631 40.0239L17.0807 17.3996H30.0455L23.5631 40.0239Z",fill:"url(#paint0_linear_1_28712)",key:4}),l.createElement("defs",{key:5},l.createElement("linearGradient",{id:"paint0_linear_1_28712",x1:"51.3325",y1:"23.9887",x2:"2.02881",y2:"23.9887",gradientUnits:"userSpaceOnUse"},[l.createElement("stop",{stopColor:"#13E5BF",key:0}),l.createElement("stop",{offset:"1",stopColor:"#01C38D",key:1})]))])}i.defaultProps={width:"48",height:"49",viewBox:"0 0 48 49",fill:"none"},e.exports=i,i.default=i},3126:function(e,t,n){var l=n(7294);function i(e){return l.createElement("svg",e,[l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.5763 3.7058C24.5976 3.15528 23.4025 3.15528 22.4238 3.7058L6.43891 12.6973C5.42655 13.2668 4.80005 14.338 4.80005 15.4995V33.3388C4.80005 34.5004 5.42655 35.5716 6.43891 36.141L22.4238 45.1325C23.4025 45.6831 24.5976 45.6831 25.5763 45.1325L41.5612 36.141C42.5736 35.5716 43.2001 34.5004 43.2001 33.3388V15.4995C43.2001 14.338 42.5735 13.2668 41.5612 12.6973L25.5763 3.7058ZM25.6202 8.56405C24.6192 7.98009 23.3813 7.98009 22.3803 8.56404L11.1954 15.0886C10.2076 15.6648 9.60025 16.7222 9.60025 17.8657V30.9724C9.60025 32.1159 10.2076 33.1733 11.1954 33.7495L22.3803 40.2741C23.3813 40.858 24.6192 40.858 25.6202 40.2741L36.8051 33.7495C37.7929 33.1733 38.4002 32.1159 38.4002 30.9724V17.8657C38.4002 16.7222 37.7929 15.6648 36.8051 15.0886L25.6202 8.56405Z",fill:"#13E5BF",fillOpacity:"0.2",key:0}),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.5886 4.52751L41.3886 13.9775C41.7665 14.1901 42.0003 14.5899 42.0003 15.0234V33.8161C42.0003 34.2497 41.7665 34.6495 41.3886 34.862L24.5886 44.312C24.2233 44.5175 23.7773 44.5175 23.412 44.312L6.61198 34.862C6.23413 34.6495 6.00029 34.2497 6.00029 33.8161V15.0234C6.00029 14.5899 6.23413 14.1901 6.61198 13.9775L23.412 4.52751C23.7773 4.32203 24.2233 4.32203 24.5886 4.52751ZM22.8237 3.48162C23.5543 3.07066 24.4463 3.07066 25.1769 3.48162L41.9769 12.9316C42.7326 13.3567 43.2003 14.1563 43.2003 15.0234V33.8161C43.2003 34.6832 42.7326 35.4828 41.9769 35.9079L25.1769 45.3579C24.4463 45.7689 23.5543 45.7689 22.8237 45.3579L6.02367 35.9079C5.26796 35.4828 4.80029 34.6832 4.80029 33.8161V15.0234C4.80029 14.1563 5.26796 13.3567 6.02367 12.9316L22.8237 3.48162ZM24.8932 13.5362L26.8616 12.419L33.1241 15.9743V19.2248L36.0004 20.8576V27.9884L33.1241 29.6192V32.8636L26.8616 36.419L24.8932 35.3015V25.5497L15.4091 20.1646L13.0754 21.4879V27.3428L15.4065 28.6661L17.9199 27.2478L17.9297 27.1538C17.986 26.5963 18.4427 26.176 18.9922 26.176C19.5851 26.176 20.0672 26.6642 20.0672 27.2646C20.0672 27.865 19.5851 28.3532 18.9922 28.3532C18.8347 28.3532 18.678 28.3155 18.5257 28.2405L18.4422 28.1996L15.9518 29.6043V32.2257L21.139 35.1708L22.0327 34.6636V33.6759L17.0238 30.8363V30.2659L17.622 29.9284L22.0327 32.4281V25.1798L23.1077 25.7901V35.3015L21.139 36.419L14.877 32.8636V29.6139L12.0004 27.9806V20.8493L14.877 19.2184V15.9743L21.139 12.419L23.1077 13.5364V23.2882L32.5918 28.6733L34.9254 27.35V21.4954L32.5944 20.1715L30.081 21.5904L30.0717 21.6844C30.0152 22.2414 29.5584 22.6619 29.0086 22.6619C28.4155 22.6619 27.9337 22.1734 27.9337 21.5733C27.9337 20.9729 28.4155 20.4844 29.0086 20.4844C29.1662 20.4844 29.3232 20.5227 29.4752 20.5974L29.5587 20.6386L32.0494 19.2334V16.6122L26.8616 13.6671L25.9679 14.174V15.162L30.977 18.0013V18.5717L30.3786 18.9092L29.662 18.5032L29.6586 18.5051L25.9679 16.4098V23.6375L24.8932 23.027V13.5362ZM21.1389 13.6671L15.9516 16.6121V18.6089L22.0325 15.1617V14.1745L21.1389 13.6671ZM16.5094 19.5412L22.0326 16.4093V22.6774L16.5094 19.5412ZM31.4916 29.2972L25.9679 26.1601V32.4288L31.4916 29.2972ZM25.9679 34.6635V33.6764L32.0493 30.2289V32.2256L26.8615 35.1707L25.9679 34.6635Z",fill:"url(#paint0_linear_1_28700)",key:1}),l.createElement("defs",{key:2},l.createElement("linearGradient",{id:"paint0_linear_1_28700",x1:"4.80029",y1:"3.1734",x2:"4.80029",y2:"45.6661",gradientUnits:"userSpaceOnUse"},[l.createElement("stop",{stopColor:"#13E5BF",key:0}),l.createElement("stop",{offset:"1",stopColor:"#01C38D",key:1})]))])}i.defaultProps={width:"48",height:"49",viewBox:"0 0 48 49",fill:"none"},e.exports=i,i.default=i}}]);
//# sourceMappingURL=component---src-pages-index-tsx-23a33fdb1f3e02012f3d.js.map