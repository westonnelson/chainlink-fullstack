(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[644],{7398:function(e,t,n){"use strict";n.d(t,{u:function(){return j}});var r=n(1662),s=n(6871),i=n(8668),o=n(9703),a=n(1358),c=n(2515),l=n(4332),u=n(7294),d=n(7375),f=n(6450);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}var h={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},x=["openDelay","closeDelay","closeOnClick","closeOnMouseDown","onOpen","onClose","placement","id","isOpen","defaultIsOpen","arrowSize","arrowShadowColor","arrowPadding","modifiers","isDisabled","gutter","offset","direction"];var g=["children","label","shouldWrapChildren","aria-label","hasArrow","bg","portalProps"],v=(0,i.m$)(c.E.div),j=(0,i.Gp)((function(e,t){var n=(0,i.mq)("Tooltip",e),c=(0,i.Lr)(e),j=(0,i.Fg)(),b=c.children,w=c.label,y=c.shouldWrapChildren,O=c["aria-label"],k=c.hasArrow,C=c.bg,S=c.portalProps,E=m(c,g);C&&(n.bg=C,n[r.j.arrowBg.var]=(0,o.K1)(j,"colors",C));var P,R=function(e){void 0===e&&(e={});var t=e,n=t.openDelay,s=void 0===n?0:n,i=t.closeDelay,a=void 0===i?0:i,c=t.closeOnClick,l=void 0===c||c,h=t.closeOnMouseDown,g=t.onOpen,v=t.onClose,j=t.placement,b=t.id,w=t.isOpen,y=t.defaultIsOpen,O=t.arrowSize,k=void 0===O?10:O,C=t.arrowShadowColor,S=t.arrowPadding,E=t.modifiers,P=t.isDisabled,R=t.gutter,M=t.offset,T=t.direction,N=m(t,x),F=(0,d.qY)({isOpen:w,defaultIsOpen:y,onOpen:g,onClose:v}),I=F.isOpen,D=F.onOpen,_=F.onClose,z=(0,r.D)({enabled:I,placement:j,arrowPadding:S,modifiers:E,gutter:R,offset:M,direction:T}),q=z.referenceRef,A=z.getPopperProps,W=z.getArrowInnerProps,U=z.getArrowProps,K=(0,d.Me)(b,"tooltip"),V=u.useRef(null),H=u.useRef(),L=u.useRef(),Z=u.useCallback((function(){P||(H.current=window.setTimeout(D,s))}),[P,D,s]),$=u.useCallback((function(){H.current&&clearTimeout(H.current),L.current=window.setTimeout(_,a)}),[a,_]),G=u.useCallback((function(){l&&$()}),[l,$]),B=u.useCallback((function(){h&&$()}),[h,$]),X=u.useCallback((function(e){I&&"Escape"===e.key&&$()}),[I,$]);(0,d.OR)("keydown",X),u.useEffect((function(){return function(){clearTimeout(H.current),clearTimeout(L.current)}}),[]),(0,d.OR)("mouseleave",$,(function(){return V.current}));var Y=u.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),p({},e,{ref:(0,f.lq)(V,t,q),onMouseEnter:(0,o.v0)(e.onMouseEnter,Z),onClick:(0,o.v0)(e.onClick,G),onMouseDown:(0,o.v0)(e.onMouseDown,B),onFocus:(0,o.v0)(e.onFocus,Z),onBlur:(0,o.v0)(e.onBlur,$),"aria-describedby":I?K:void 0})}),[Z,$,B,I,K,G,q]),J=u.useCallback((function(e,t){var n;return void 0===e&&(e={}),void 0===t&&(t=null),A(p({},e,{style:p({},e.style,(n={},n[r.j.arrowSize.var]=k?(0,o.px)(k):void 0,n[r.j.arrowShadowColor.var]=C,n))}),t)}),[A,k,C]),Q=u.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),p({ref:t},N,e,{id:K,role:"tooltip",style:p({},e.style,{position:"relative",transformOrigin:r.j.transformOrigin.varRef})})}),[N,K]);return{isOpen:I,show:Z,hide:$,getTriggerProps:Y,getTooltipProps:Q,getTooltipPositionerProps:J,getArrowProps:U,getArrowInnerProps:W}}(p({},E,{direction:j.direction}));if((0,o.HD)(b)||y)P=u.createElement(i.m$.span,p({tabIndex:0},R.getTriggerProps()),b);else{var M=u.Children.only(b);P=u.cloneElement(M,R.getTriggerProps(M.props,M.ref))}var T=!!O,N=R.getTooltipProps({},t),F=T?(0,o.CE)(N,["role","id"]):N,I=(0,o.ei)(N,["role","id"]);return w?u.createElement(u.Fragment,null,P,u.createElement(l.M,null,R.isOpen&&u.createElement(s.h_,S,u.createElement(i.m$.div,p({},R.getTooltipPositionerProps(),{__css:{zIndex:n.zIndex,pointerEvents:"none"}}),u.createElement(v,p({variants:h},F,{initial:"exit",animate:"enter",exit:"exit",__css:n}),w,T&&u.createElement(a.TX,I,O),k&&u.createElement(i.m$.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper"},u.createElement(i.m$.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:n.bg}}))))))):u.createElement(u.Fragment,null,b)}));o.Ts&&(j.displayName="Tooltip")},9545:function(e,t,n){"use strict";n.d(t,{j:function(){return u}});var r=n(5528),s=n(7294),i=n(7495),o=n(8102),a=n(3453),c=n(1581);function l(e,t){const[n,r]=(0,s.useState)({status:"None"}),{addTransaction:i}=(0,o.W)(),{addNotification:l}=(0,a.l)();return{promiseTransaction:(0,s.useCallback)((async n=>{var s,o,a,u,d,f;if(!e)return;let p;try{p=await n,r({transaction:p,status:"Mining",chainId:e}),i({transaction:Object.assign(Object.assign({},p),{chainId:e}),submittedAt:Date.now(),transactionName:null===t||void 0===t?void 0:t.transactionName});const s=await p.wait();return r({receipt:s,transaction:p,status:"Success",chainId:e}),s}catch(m){const t=null!==(d=null!==(a=null!==(o=null===(s=m.error)||void 0===s?void 0:s.message)&&void 0!==o?o:m.reason)&&void 0!==a?a:null===(u=m.data)||void 0===u?void 0:u.message)&&void 0!==d?d:m.message;if(p){if((e=>(null===e||void 0===e?void 0:e.code)===c.jK.TRANSACTION_REPLACED&&(null===e||void 0===e?void 0:e.replacement)&&("repriced"===(null===e||void 0===e?void 0:e.reason)||!1===(null===e||void 0===e?void 0:e.cancelled)))(m)){const n=0===m.receipt.status?"Fail":"Success";l({notification:{type:"Fail"===n?"transactionFailed":"transactionSucceed",submittedAt:Date.now(),transaction:m.replacement,receipt:m.receipt,transactionName:null===(f=m.replacement)||void 0===f?void 0:f.transactionName,originalTransaction:p},chainId:e}),r({status:n,transaction:m.replacement,originalTransaction:p,receipt:m.receipt,errorMessage:t,chainId:e})}else r({status:"Fail",transaction:p,receipt:m.receipt,errorMessage:t,chainId:e})}else r({status:"Exception",errorMessage:t,chainId:e});return}}),[e,r,i,t]),state:n}}function u(e,t,n){const{library:o,chainId:a}=(0,i.K)(),{promiseTransaction:c,state:u}=l(a,n),[d,f]=(0,s.useState)(void 0);return{send:(0,s.useCallback)((async(...s)=>{const i=function(e,t,n){if(e.signer)return e;if(null===t||void 0===t?void 0:t.signer)return e.connect(t.signer);if(null===n||void 0===n?void 0:n.getSigner())return e.connect(n.getSigner());throw new TypeError("No signer available in contract, options or library")}(e,n,o),a=await c(i[t](...s));if(null===a||void 0===a?void 0:a.logs){const t=a.logs.reduce(((t,n)=>{try{return(0,r.Q)(n.address,e.address)?[...t,e.interface.parseLog(n)]:t}catch(s){return t}}),[]);f(t)}}),[e,t,n,o]),state:u,events:d}}},325:function(e,t,n){"use strict";n.d(t,{j:function(){return i}});n(7294);var r=n(1213),s=n(5893);function i(e){var t=e.message;return(0,s.jsxs)(r.bZ,{status:"error",mb:"8",children:[(0,s.jsx)(r.zM,{}),(0,s.jsx)(r.Cd,{mr:2,children:"Error:"}),(0,s.jsx)(r.X,{children:t})]})}},8821:function(e,t,n){"use strict";n.d(t,{Ar:function(){return I},$0:function(){return _}});var r=n(5115),s=n(4651),i=n(5419),o=n(5193),a=n(1213),c=n(7495),l=n(6977),u=n(7809),d=n.n(u),f=n(1664),p=n(7294),m=n(2020),h=n(8360),x=n(1744),g=n(5893);function v(){var e=(0,c.K)().account,t=(0,h.M)(e),n=t?x.dF(t):"";return(0,g.jsxs)(r.xv,{children:[n," ETH"]})}var j=n(7375),b=n(4023),w="https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",y="https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213",O=new(n(3929).zw)({rpc:{1:w,4:y},qrcode:!0});function k(){var e=(0,c.K)(),t=e.activate,n=e.activateBrowserWallet,i=(0,j.qY)(),a=i.onOpen,l=i.isOpen,u=i.onClose;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.xu,{order:[-1,null,null,2],textAlign:["left",null,null,"right"],children:(0,g.jsx)(o.zx,{colorScheme:"teal",variant:"outline",onClick:a,children:"Connect to a wallet"})}),(0,g.jsxs)(b.u_,{isOpen:l,onClose:u,children:[(0,g.jsx)(b.ZA,{}),(0,g.jsxs)(b.hz,{children:[(0,g.jsx)(b.xB,{children:"Connect to a wallet"}),(0,g.jsx)(b.ol,{}),(0,g.jsxs)(b.fe,{children:[(0,g.jsx)(o.zx,{justifyContent:"space-between",width:"100%",mb:"4",size:"lg",variant:"outline",rightIcon:(0,g.jsx)(s.Ee,{maxWidth:"20px",src:"/images/logo-metamask.png",alt:"MetaMask"}),onClick:function(){n(),u()},children:"MetaMask"}),(0,g.jsx)(o.zx,{justifyContent:"space-between",width:"100%",mb:"4",size:"lg",variant:"outline",rightIcon:(0,g.jsx)(s.Ee,{maxWidth:"20px",src:"/images/logo-walletconnect.svg",alt:"WalletConnect"}),onClick:function(){t(O)},children:"WalletConnect"})]})]})]})]})}var C=n(4942),S=n(9008),E=n(1163);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var R="https://nextjs-ethereum-starter.vercel.app/",M=function(e){var t=e.customMeta,n=(0,E.useRouter)(),r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,C.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({title:"Next.js Ethereum Starter",description:"Ethers.js - Hardhat - Next.js - Typescript",image:"".concat(R,"/images/site-preview.png"),type:"website"},t);return(0,g.jsxs)(S.default,{children:[(0,g.jsx)("title",{children:r.title}),(0,g.jsx)("meta",{content:r.description,name:"description"}),(0,g.jsx)("meta",{property:"og:url",content:"".concat(R).concat(n.asPath)}),(0,g.jsx)("link",{rel:"canonical",href:"".concat(R).concat(n.asPath)}),(0,g.jsx)("meta",{property:"og:type",content:r.type}),(0,g.jsx)("meta",{property:"og:site_name",content:"Next.js Ethereum Starter"}),(0,g.jsx)("meta",{property:"og:description",content:r.description}),(0,g.jsx)("meta",{property:"og:title",content:r.title}),(0,g.jsx)("meta",{property:"og:image",content:r.image}),(0,g.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,g.jsx)("meta",{name:"twitter:site",content:"@hackbg"}),(0,g.jsx)("meta",{name:"twitter:title",content:r.title}),(0,g.jsx)("meta",{name:"twitter:description",content:r.description}),(0,g.jsx)("meta",{name:"twitter:image",content:r.image})]})},T=n(325),N={transactionStarted:"Started",transactionSucceed:"Completed"};function F(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:38;return e.replace(e.substring(6,t),"...")}var I=function(e){var t,n=e.children,u=e.customMeta,h=(0,c.K)(),x=h.account,j=h.deactivate,b=h.error,w=h.setError,y=(0,l.z)().notifications;return(0,p.useEffect)((function(){b&&w(b)}),[b,w]),t=d().create({seed:x}).toDataURL(),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(M,{customMeta:u}),(0,g.jsx)("header",{children:(0,g.jsx)(r.W2,{maxWidth:"container.xl",children:(0,g.jsxs)(r.MI,{columns:[1,1,1,2],alignItems:"center",justifyContent:"space-between",py:"8",children:[(0,g.jsxs)(r.kC,{py:[4,null,null,0],children:[(0,g.jsx)(f.default,{href:"/",passHref:!0,children:(0,g.jsx)(r.rU,{px:"4",py:"1",children:"Home"})}),(0,g.jsx)(f.default,{href:"/feeds",passHref:!0,children:(0,g.jsx)(r.rU,{px:"4",py:"1",children:"Data Feeds"})}),(0,g.jsx)(f.default,{href:"/vrf",passHref:!0,children:(0,g.jsx)(r.rU,{px:"4",py:"1",children:"Randomness"})}),(0,g.jsx)(f.default,{href:"/external-api",passHref:!0,children:(0,g.jsx)(r.rU,{px:"4",py:"1",children:"External API"})})]}),x?(0,g.jsxs)(r.kC,{order:[-1,null,null,2],alignItems:"center",justifyContent:["flex-start",null,null,"flex-end"],children:[(0,g.jsx)(v,{}),(0,g.jsx)(s.Ee,{ml:"4",src:t,alt:"blockie"}),(0,g.jsxs)(i.v2,{placement:"bottom-end",children:[(0,g.jsx)(i.j2,{as:o.zx,ml:"4",children:F(x)}),(0,g.jsx)(i.qy,{children:(0,g.jsx)(i.sN,{onClick:function(){j()},children:"Disconnect"})})]})]}):(0,g.jsx)(k,{})]})})}),(0,g.jsx)("main",{children:(0,g.jsxs)(r.W2,{maxWidth:"container.xl",children:[b&&(0,g.jsx)(T.j,{message:(0,m.e$)(b)}),n,y.map((function(e){return"walletConnected"===e.type?null:(0,g.jsxs)(a.bZ,{status:"success",position:"fixed",bottom:"8",right:"8",width:"400px",children:[(0,g.jsx)(a.zM,{}),(0,g.jsxs)(r.xu,{children:[(0,g.jsxs)(a.Cd,{children:[e.transactionName," ",N[e.type]]}),(0,g.jsxs)(a.X,{overflow:"hidden",children:["Transaction Hash:"," ",F(e.transaction.hash,61)]})]})]},e.id)}))]})}),(0,g.jsx)("footer",{children:(0,g.jsx)(r.W2,{mt:"8",py:"8",maxWidth:"container.xl",children:(0,g.jsx)(r.rU,{href:"https://github.com/hackbg",children:"GitHub"})})})]})};function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var _=function(e){return(0,g.jsx)(r.xu,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,C.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({maxWidth:"container.sm",p:"8",mt:"8",bg:"gray.100"},e))}},3473:function(e,t,n){"use strict";n.d(t,{c:function(){return a}});var r=n(7495),s=n(4146),i=n(7294),o=n(6914);function a(e){var t=(0,r.K)(),n=t.library,a=t.chainId,c=a&&o.Pl[a][e];return(0,i.useMemo)((function(){return n&&c.address?new s.CH(c.address,c.abi,n.getSigner()):null}),[c,n])}},2020:function(e,t,n){"use strict";n.d(t,{e$:function(){return a},jl:function(){return l},gC:function(){return d},Yg:function(){return f}});var r=n(2236),s=n(157),i=n(950),o=n(3929);function a(e){return e instanceof i.A5?"No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.":e instanceof s.Uu?"You're connected to an unsupported network. Please switch to Kovan or Rinkeby.":e instanceof i.ab||e instanceof o.ab?"Please authorize this website to access your Ethereum account.":(console.error(e),"An unknown error occurred. Check the console for more details.")}var c=new r.F("Bitcoin","BTC",8,{fixedPrecisionDigits:2,useFixedPrecision:!0}),l=function(e){return c.format(e.toString())},u=new r.W6("United States Dollar","USD",8,{fixedPrecisionDigits:2}),d=function(e){return u.format(e.toString())},f=function(e){return"Mining"===e?"Mining Request":"Success"===e&&"Fulfilling Request"}},3169:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var r=n(7294),s=n(5115),i=n(1277),o=n(8821),a=n(5861),c=n(7757),l=n.n(c),u=n(5193),d=n(9545),f=n(2020),p=n(3473),m=n(6914),h=n(325),x=n(5893);function g(){var e=(0,r.useState)(""),t=e[0],n=e[1],i=(0,r.useState)(""),o=i[0],c=i[1],g=(0,p.c)(m.xo.RandomNumberConsumer),v=(0,d.j)(g,"getRandomNumber",{transactionName:"Randomness Request"}),j=v.send,b=v.state,w=v.events,y=function(){var e=(0,a.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:c("");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=(0,r.useCallback)((0,a.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.randomResult();case 2:t=e.sent,c(String(t));case 4:case"end":return e.stop()}}),e)}))),[g]);(0,r.useEffect)((function(){if(w){var e=w.find((function(e){return"RequestedRandomness"===e.name}));e&&n(e.args.requestId)}}),[w]),(0,r.useEffect)((function(){g&&t&&g.on("FulfilledRandomness",(function(e){t===e&&(O(),g.removeAllListeners())}))}),[g,t,O]);var k="Mining"===b.status||"Success"===b.status&&!o,C="Exception"===b.status;return(0,x.jsxs)(x.Fragment,{children:[C&&(0,x.jsx)(h.j,{message:b.errorMessage}),(0,x.jsx)(u.zx,{onClick:y,isLoading:k,loadingText:(0,f.Yg)(b.status),colorScheme:"teal",children:"Request Randomness"}),o&&(0,x.jsxs)(s.Kq,{spacing:2,mt:4,children:[(0,x.jsx)(s.xv,{fontSize:"xl",children:"Result"}),(0,x.jsx)(s.EK,{size:"xs",colorScheme:"red",children:o})]})]})}var v=n(7398),j=n(4651),b=n(9748),w=n(7495),y=b.a.Rinkeby,O=function(e){var t=m.Pl[y].randomSvg.address;return"".concat("https://testnets.opensea.io","/assets/").concat(t,"/").concat(e)};function k(e){var t=e.tokenId;return(0,w.K)().chainId===y&&(0,x.jsxs)(s.rU,{href:O(t),isExternal:!0,children:["See on OpenSea Testnet Marketplace ",(0,x.jsx)(i.h0,{mx:"2px"})]})}function C(){var e=(0,r.useState)(!1),t=e[0],n=e[1],i=(0,r.useState)(!1),o=i[0],c=i[1],g=(0,r.useState)(),b=g[0],w=g[1],y=(0,r.useState)(),O=y[0],C=y[1],S=(0,p.c)(m.xo.RandomSvg),E=(0,d.j)(S,"create",{transactionName:"NFT Request"}),P=E.send,R=E.state,M=E.events,T=(0,d.j)(S,"finishMint",{transactionName:"NFT Mint Finish"}),N=T.send,F=T.state,I=T.events,D=function(){var e=(0,a.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:w(void 0),c(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=(0,r.useCallback)((0,a.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.tokenURI(b);case 2:return t=e.sent,e.abrupt("return",(n=t,JSON.parse(atob(n.split(",")[1]))));case 4:case"end":return e.stop()}var n}),e)}))),[S,b]);(0,r.useEffect)((function(){if(M){var e=M.find((function(e){return"requestedRandomSVG"===e.name}));e&&w(e.args.tokenId)}}),[M]),(0,r.useEffect)((function(){S&&b&&S.on("CreatedUnfinishedRandomSVG",(function(e){b.eq(e)&&(c(!0),n(!0),S.removeAllListeners())}))}),[S,b]),(0,r.useEffect)((function(){I&&I.find((function(e){return"CreatedRandomSVG"===e.name}))&&_().then((function(e){C(e),n(!1)}))}),[I,_]);var z="Mining"===R.status||"Success"===R.status&&!o,q="Mining"===F.status||"Success"===F.status&&!O,A="Exception"===R.status||"Exception"===F.status,W=R.errorMessage||F.errorMessage;return(0,x.jsxs)(x.Fragment,{children:[A&&(0,x.jsx)(h.j,{message:W}),!t&&(0,x.jsx)(v.u,{label:"Request random number and mint new NFT associated with the result",placement:"right-start",fontSize:"xs",hasArrow:!0,children:(0,x.jsx)(u.zx,{onClick:D,isLoading:z,loadingText:(0,f.Yg)(R.status),colorScheme:"teal",children:O?"Request New NFT":"Request NFT"})}),t&&(0,x.jsx)(v.u,{label:"Use the random number from first step to generate unique SVG and store it as on-chain NFT metadata",placement:"right-start",fontSize:"xs",defaultIsOpen:!0,hasArrow:!0,children:(0,x.jsx)(u.zx,{onClick:function(){return N(b)},isLoading:q,loadingText:"Finishing Minting",colorScheme:"teal",children:"Finish Minting"})}),O&&(0,x.jsxs)(s.Kq,{spacing:2,mt:4,children:[(0,x.jsx)(s.xv,{fontSize:"xl",children:"Result"}),(0,x.jsx)(j.Ee,{src:O.image,alt:"Random SVG",boxSize:"360px",backgroundColor:"white",borderRadius:"lg",mt:"8"}),(0,x.jsx)(k,{tokenId:b})]})]})}var S=function(){return(0,x.jsxs)(o.Ar,{children:[(0,x.jsx)(s.X6,{as:"h1",mb:"4",children:"Randomness"}),(0,x.jsx)(s.xv,{fontSize:"xl",children:"Use VRF (Verifiable Random Function) to consume randomness in your smart contracts."}),(0,x.jsxs)(o.$0,{children:[(0,x.jsx)(g,{}),(0,x.jsx)(s.xv,{my:"4",children:"With every new request for randomness, Chainlink VRF generates a random number and cryptographic proof of how that number was determined. VRF enables smart contracts to access randomness without compromising on security or usability."}),(0,x.jsxs)(s.rU,{href:"https://docs.chain.link/docs/get-a-random-number",isExternal:!0,children:["Learn More ",(0,x.jsx)(i.h0,{mx:"2px"})]})]}),(0,x.jsxs)(o.$0,{children:[(0,x.jsx)(C,{}),(0,x.jsx)(s.xv,{my:"4",children:"100% on-chain generated NFT using VRF as randomness source. Each request creates and stores an unique Scalable Vector Graphic (SVG)."}),(0,x.jsxs)(s.rU,{href:"https://chain.link/education/nfts",isExternal:!0,children:["Learn More ",(0,x.jsx)(i.h0,{mx:"2px"})]})]})]})}},5633:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vrf",function(){return n(3169)}])},5861:function(e,t,n){"use strict";function r(e,t,n,r,s,i,o){try{var a=e[i](o),c=a.value}catch(l){return void n(l)}a.done?t(c):Promise.resolve(c).then(r,s)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(s,i){var o=e.apply(t,n);function a(e){r(o,s,i,a,c,"next",e)}function c(e){r(o,s,i,a,c,"throw",e)}a(void 0)}))}}n.d(t,{Z:function(){return s}})}},function(e){e.O(0,[593,774,888,179],(function(){return t=5633,e(e.s=t);var t}));var t=e.O();_N_E=t}]);