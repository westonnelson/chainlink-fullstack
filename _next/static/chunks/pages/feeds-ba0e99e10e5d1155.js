(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[716],{325:function(e,t,n){"use strict";n.d(t,{j:function(){return s}});n(7294);var r=n(1213),i=n(5893);function s(e){var t=e.message;return(0,i.jsxs)(r.bZ,{status:"error",mb:"8",children:[(0,i.jsx)(r.zM,{}),(0,i.jsx)(r.Cd,{mr:2,children:"Error:"}),(0,i.jsx)(r.X,{children:t})]})}},8821:function(e,t,n){"use strict";n.d(t,{Ar:function(){return R},$0:function(){return A}});var r=n(5115),i=n(4651),s=n(5419),a=n(5193),c=n(1213),o=n(7495),l=n(6977),u=n(7809),d=n.n(u),h=n(1664),x=n(7294),p=n(2020),f=n(8360),j=n(1744),m=n(5893);function y(){var e=(0,o.K)().account,t=(0,f.M)(e),n=t?j.dF(t):"";return(0,m.jsxs)(r.xv,{children:[n," ETH"]})}var g=n(7375),v=n(4023),b=n(3929),w="7b516e5f9bca4abc8f07170d1f0a6cae",k={1:"https://mainnet.infura.io/v3/".concat(w),4:"https://rinkeby.infura.io/v3/".concat(w),42:"https://kovan.infura.io/v3/".concat(w)},C=new b.zw({rpc:{1:k[1],4:k[4],42:k[42]},qrcode:!0});function O(){var e=(0,o.K)(),t=e.activate,n=e.activateBrowserWallet,s=(0,g.qY)(),c=s.onOpen,l=s.isOpen,u=s.onClose;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.xu,{order:[-1,null,null,2],textAlign:["left",null,null,"right"],children:(0,m.jsx)(a.zx,{colorScheme:"teal",variant:"outline",onClick:c,children:"Connect to a wallet"})}),(0,m.jsxs)(v.u_,{isOpen:l,onClose:u,children:[(0,m.jsx)(v.ZA,{}),(0,m.jsxs)(v.hz,{children:[(0,m.jsx)(v.xB,{children:"Connect to a wallet"}),(0,m.jsx)(v.ol,{}),(0,m.jsxs)(v.fe,{children:[(0,m.jsx)(a.zx,{justifyContent:"space-between",width:"100%",mb:"4",size:"lg",variant:"outline",rightIcon:(0,m.jsx)(i.Ee,{maxWidth:"20px",src:"/images/logo-metamask.png",alt:"MetaMask"}),onClick:function(){n(),u()},children:"MetaMask"}),(0,m.jsx)(a.zx,{justifyContent:"space-between",width:"100%",mb:"4",size:"lg",variant:"outline",rightIcon:(0,m.jsx)(i.Ee,{maxWidth:"20px",src:"/images/logo-walletconnect.svg",alt:"WalletConnect"}),onClick:function(){t(C)},children:"WalletConnect"})]})]})]})]})}var P=n(4942),E=n(9008),S=n(1163);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var D="https://chainlink-fullstack.demo.hack.bg/",M=function(e){var t=e.customMeta,n=(0,S.useRouter)(),r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,P.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({title:"Chainlink Demo App",description:"Full stack starter project showcasing Chainlink products on Ethereum",image:"".concat(D,"/images/chainlink-logo.png"),type:"website"},t);return(0,m.jsxs)(E.default,{children:[(0,m.jsx)("title",{children:r.title}),(0,m.jsx)("meta",{content:r.description,name:"description"}),(0,m.jsx)("meta",{property:"og:url",content:"".concat(D).concat(n.asPath)}),(0,m.jsx)("link",{rel:"canonical",href:"".concat(D).concat(n.asPath)}),(0,m.jsx)("meta",{property:"og:type",content:r.type}),(0,m.jsx)("meta",{property:"og:site_name",content:"Chainlink Demo App"}),(0,m.jsx)("meta",{property:"og:description",content:r.description}),(0,m.jsx)("meta",{property:"og:title",content:r.title}),(0,m.jsx)("meta",{property:"og:image",content:r.image}),(0,m.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,m.jsx)("meta",{name:"twitter:site",content:"@chainlink"}),(0,m.jsx)("meta",{name:"twitter:title",content:r.title}),(0,m.jsx)("meta",{name:"twitter:description",content:r.description}),(0,m.jsx)("meta",{name:"twitter:image",content:r.image})]})},U=n(325),z={transactionStarted:"Started",transactionSucceed:"Completed"};function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:38;return e.replace(e.substring(6,t),"...")}var R=function(e){var t,n=e.children,u=e.customMeta,f=(0,o.K)(),j=f.account,g=f.deactivate,v=f.error,b=f.setError,w=(0,l.z)().notifications;return(0,x.useEffect)((function(){v&&b(v)}),[v,b]),t=d().create({seed:j}).toDataURL(),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(M,{customMeta:u}),(0,m.jsx)("header",{children:(0,m.jsx)(r.W2,{maxWidth:"container.xl",children:(0,m.jsxs)(r.MI,{columns:[1,1,1,2],alignItems:"center",justifyContent:"space-between",py:"8",children:[(0,m.jsxs)(r.kC,{py:[4,null,null,0],children:[(0,m.jsx)(h.default,{href:"/",passHref:!0,children:(0,m.jsx)(r.rU,{px:"4",py:"1",children:"Home"})}),(0,m.jsx)(h.default,{href:"/feeds",passHref:!0,children:(0,m.jsx)(r.rU,{px:"4",py:"1",children:"Data Feeds"})}),(0,m.jsx)(h.default,{href:"/vrf",passHref:!0,children:(0,m.jsx)(r.rU,{px:"4",py:"1",children:"Randomness"})}),(0,m.jsx)(h.default,{href:"/external-api",passHref:!0,children:(0,m.jsx)(r.rU,{px:"4",py:"1",children:"External API"})})]}),j?(0,m.jsxs)(r.kC,{order:[-1,null,null,2],alignItems:"center",justifyContent:["flex-start",null,null,"flex-end"],children:[(0,m.jsx)(y,{}),(0,m.jsx)(i.Ee,{ml:"4",src:t,alt:"blockie"}),(0,m.jsxs)(s.v2,{placement:"bottom-end",children:[(0,m.jsx)(s.j2,{as:a.zx,ml:"4",children:I(j)}),(0,m.jsx)(s.qy,{children:(0,m.jsx)(s.sN,{onClick:function(){g()},children:"Disconnect"})})]})]}):(0,m.jsx)(O,{})]})})}),(0,m.jsx)("main",{children:(0,m.jsxs)(r.W2,{maxWidth:"container.xl",children:[v&&(0,m.jsx)(U.j,{message:(0,p.e$)(v)}),n,w.map((function(e){return"walletConnected"===e.type?null:(0,m.jsxs)(c.bZ,{status:"success",position:"fixed",bottom:"8",right:"8",width:"400px",children:[(0,m.jsx)(c.zM,{}),(0,m.jsxs)(r.xu,{children:[(0,m.jsxs)(c.Cd,{children:[e.transactionName," ",z[e.type]]}),(0,m.jsxs)(c.X,{overflow:"hidden",children:["Transaction Hash:"," ",I(e.transaction.hash,61)]})]})]},e.id)}))]})}),(0,m.jsx)("footer",{children:(0,m.jsx)(r.W2,{mt:"8",py:"8",maxWidth:"container.xl",children:(0,m.jsx)(r.rU,{href:"https://github.com/hackbg/chainlink-fullstack",isExternal:!0,children:(0,m.jsxs)(r.Ug,{children:[(0,m.jsx)(i.Ee,{src:"images/github.svg",width:"20px"}),(0,m.jsx)(r.xv,{children:"GitHub"})]})})})})]})};function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var A=function(e){return(0,m.jsx)(r.xu,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,P.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({maxWidth:"container.sm",p:"8",mt:"8",bg:"gray.100"},e))}},9680:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var r=n(7495),i=n(5829);function s(e){var t,n,s=(0,r.K)().chainId;return s&&i[s]&&(null===(t=Object.values(i[s]).find((function(e){return e.chainId===String(s)})))||void 0===t||null===(n=t.contracts)||void 0===n?void 0:n[e])}},2020:function(e,t,n){"use strict";n.d(t,{e$:function(){return c},Sx:function(){return o},jl:function(){return u},gC:function(){return h},Yg:function(){return x}});var r=n(2236),i=n(157),s=n(950),a=n(3929);function c(e){return e instanceof s.A5?"No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.":e instanceof i.Uu?"You're connected to an unsupported network. Please switch to Kovan or Rinkeby.":e instanceof s.ab||e instanceof a.ab?"Please authorize this website to access your Ethereum account.":(console.error(e),"An unknown error occurred. Check the console for more details.")}function o(e){return e.includes("The execution failed due to an exception.")?"".concat(e," Please check if the contract has enough LINK to pay the oracle."):e}var l=new r.F("Bitcoin","BTC",8,{fixedPrecisionDigits:2,useFixedPrecision:!0}),u=function(e){return l.format(e.toString())},d=new r.W6("United States Dollar","USD",8,{fixedPrecisionDigits:2}),h=function(e){return d.format(e.toString())},x=function(e){return"Mining"===e?"Mining Request":"Success"===e&&"Fulfilling Request"}},3231:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var r=n(7294),i=n(5115),s=n(1277),a=n(8821),c=n(1391),o=n(9609),l=n(7495),u=n(9748),d=n(7625),h=n(8636),x=n(3651),p=n(9680);function f(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=(0,p.X)(e),s=null!==(n=(0,h.g)(i&&{abi:new x.vU(i.abi),address:i.address,method:t,args:r}))&&void 0!==n?n:[],a=(0,d.Z)(s,1),c=a[0];return c}var j=n(2020),m=n(6313),y=n(325),g=n(5893);function v(){var e=(0,r.useState)(m.kc),t=e[0],n=e[1],s=(0,l.K)().chainId,a=f("FeedRegistryConsumer","getPrice",[t,m.kX.USD]);return(0,g.jsxs)(g.Fragment,{children:[s===u.a.Rinkeby&&(0,g.jsx)(y.j,{message:"Not available on this network. Please switch to Kovan."}),(0,g.jsxs)(i.Ug,{children:[(0,g.jsx)(i.xu,{children:(0,g.jsxs)(c.Ph,{value:t,onChange:function(e){return n(e.target.value)},children:[(0,g.jsx)("option",{value:m.kc,children:"LINK"}),(0,g.jsx)("option",{value:m.kX.ETH,children:"ETH"}),(0,g.jsx)("option",{value:m.kX.BTC,children:"BTC"})]})}),(0,g.jsx)(i.xv,{fontSize:"xl",children:"/ USD:"}),!a&&(0,g.jsx)(o.$,{color:"teal"}),a&&(0,g.jsx)(i.xv,{fontSize:"xl",children:(0,j.gC)(a)})]})]})}function b(){var e=f("PriceConsumerV3","getLatestPrice");return(0,g.jsxs)(i.Ug,{children:[(0,g.jsx)(i.xv,{fontSize:"xl",children:"ETH/USD:"}),!e&&(0,g.jsx)(o.$,{color:"teal"}),e&&(0,g.jsx)(i.xv,{fontSize:"xl",children:(0,j.gC)(e)})]})}var w=n(5861),k=n(7757),C=n.n(k),O=n(4146),P=new(n(6863).r)(m.ZP.readOnlyUrls[u.a.Mainnet]),E=new O.CH(m.Gl,[{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"description",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint80",name:"_roundId",type:"uint80"}],name:"getRoundData",outputs:[{internalType:"uint80",name:"roundId",type:"uint80"},{internalType:"int256",name:"answer",type:"int256"},{internalType:"uint256",name:"startedAt",type:"uint256"},{internalType:"uint256",name:"updatedAt",type:"uint256"},{internalType:"uint80",name:"answeredInRound",type:"uint80"}],stateMutability:"view",type:"function"},{inputs:[],name:"latestRoundData",outputs:[{internalType:"uint80",name:"roundId",type:"uint80"},{internalType:"int256",name:"answer",type:"int256"},{internalType:"uint256",name:"startedAt",type:"uint256"},{internalType:"uint256",name:"updatedAt",type:"uint256"},{internalType:"uint80",name:"answeredInRound",type:"uint80"}],stateMutability:"view",type:"function"},{inputs:[],name:"version",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],P);function S(){var e=(0,r.useState)(),t=e[0],n=e[1],s=(0,r.useCallback)((0,w.Z)(C().mark((function e(){var t;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.latestRoundData();case 2:t=e.sent,n(t.answer);case 4:case"end":return e.stop()}}),e)}))),[]);return(0,r.useEffect)((function(){s()}),[s]),(0,g.jsxs)(i.Ug,{children:[(0,g.jsx)(i.xv,{fontSize:"xl",children:"WBTC PoR:"}),!t&&(0,g.jsx)(o.$,{color:"teal"}),t&&(0,g.jsx)(i.xv,{fontSize:"xl",children:(0,j.jl)(t)})]})}var T=function(){return(0,g.jsxs)(a.Ar,{children:[(0,g.jsx)(i.X6,{as:"h1",mb:"4",children:"Data Feeds"}),(0,g.jsx)(i.xv,{fontSize:"xl",children:"Retrieve the latest prices and data points of assets in your smart contracts."}),(0,g.jsxs)(a.$0,{children:[(0,g.jsx)(b,{}),(0,g.jsxs)(i.xv,{my:"4",children:["Consuming price feed by address via ",(0,g.jsx)(i.EK,{children:"AggregatorV3Interface"}),"."]}),(0,g.jsxs)(i.Ug,{children:[(0,g.jsxs)(i.rU,{href:"https://docs.chain.link/docs/get-the-latest-price",isExternal:!0,children:["Learn More ",(0,g.jsx)(s.h0,{mx:"2px"})]}),(0,g.jsxs)(i.rU,{href:"https://docs.chain.link/docs/reference-contracts",isExternal:!0,children:["Contract Addresses ",(0,g.jsx)(s.h0,{mx:"2px"})]})]})]}),(0,g.jsxs)(a.$0,{children:[(0,g.jsx)(v,{}),(0,g.jsx)(i.xv,{my:"4",children:"Feed Registry is an on-chain mapping of assets to feeds. It enables you to query Chainlink data feeds from asset addresses directly, without needing to know the feed contract addresses."}),(0,g.jsxs)(i.rU,{href:"https://docs.chain.link/docs/feed-registry",isExternal:!0,children:["Learn More ",(0,g.jsx)(s.h0,{mx:"2px"})]})]}),(0,g.jsxs)(a.$0,{children:[(0,g.jsx)(S,{}),(0,g.jsx)(i.xv,{my:"4",children:"Proof of Reserve enables the reliable and timely monitoring of reserve assets using automated audits based on cryptographic truth."}),(0,g.jsxs)(i.rU,{href:"https://chain.link/proof-of-reserve",isExternal:!0,children:["Learn More ",(0,g.jsx)(s.h0,{mx:"2px"})]})]})]})}},2466:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/feeds",function(){return n(3231)}])}},function(e){e.O(0,[593,200,774,888,179],(function(){return t=2466,e(e.s=t);var t}));var t=e.O();_N_E=t}]);