(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[182],{325:function(e,t,n){"use strict";n.d(t,{j:function(){return i}});n(7294);var r=n(1213),s=n(5893);function i(e){var t=e.message;return(0,s.jsxs)(r.bZ,{status:"error",mb:"8",children:[(0,s.jsx)(r.zM,{}),(0,s.jsx)(r.Cd,{mr:2,children:"Error:"}),(0,s.jsx)(r.X,{children:t})]})}},8821:function(e,t,n){"use strict";n.d(t,{Ar:function(){return D},$0:function(){return F}});var r=n(5115),s=n(4651),i=n(5419),a=n(5193),c=n(1213),o=n(7495),l=n(6977),u=n(7809),d=n.n(u),h=n(1664),f=n(7294),x=n(2020),p=n(8360),m=n(1744),j=n(5893);function g(){var e=(0,o.K)().account,t=(0,p.M)(e),n=t?m.dF(t):"";return(0,j.jsxs)(r.xv,{children:[n," ETH"]})}var v=n(7375),b=n(4023),w="https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",y="https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213",k=new(n(3929).zw)({rpc:{1:w,4:y},qrcode:!0});function O(){var e=(0,o.K)(),t=e.activate,n=e.activateBrowserWallet,i=(0,v.qY)(),c=i.onOpen,l=i.isOpen,u=i.onClose;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r.xu,{order:[-1,null,null,2],textAlign:["left",null,null,"right"],children:(0,j.jsx)(a.zx,{colorScheme:"teal",variant:"outline",onClick:c,children:"Connect to a wallet"})}),(0,j.jsxs)(b.u_,{isOpen:l,onClose:u,children:[(0,j.jsx)(b.ZA,{}),(0,j.jsxs)(b.hz,{children:[(0,j.jsx)(b.xB,{children:"Connect to a wallet"}),(0,j.jsx)(b.ol,{}),(0,j.jsxs)(b.fe,{children:[(0,j.jsx)(a.zx,{justifyContent:"space-between",width:"100%",mb:"4",size:"lg",variant:"outline",rightIcon:(0,j.jsx)(s.Ee,{maxWidth:"20px",src:"/images/logo-metamask.png",alt:"MetaMask"}),onClick:function(){n(),u()},children:"MetaMask"}),(0,j.jsx)(a.zx,{justifyContent:"space-between",width:"100%",mb:"4",size:"lg",variant:"outline",rightIcon:(0,j.jsx)(s.Ee,{maxWidth:"20px",src:"/images/logo-walletconnect.svg",alt:"WalletConnect"}),onClick:function(){t(k)},children:"WalletConnect"})]})]})]})]})}var C=n(4942),E=n(9008),P=n(1163);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var I="https://nextjs-ethereum-starter.vercel.app/",M=function(e){var t=e.customMeta,n=(0,P.useRouter)(),r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,C.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({title:"Next.js Ethereum Starter",description:"Ethers.js - Hardhat - Next.js - Typescript",image:"".concat(I,"/images/site-preview.png"),type:"website"},t);return(0,j.jsxs)(E.default,{children:[(0,j.jsx)("title",{children:r.title}),(0,j.jsx)("meta",{content:r.description,name:"description"}),(0,j.jsx)("meta",{property:"og:url",content:"".concat(I).concat(n.asPath)}),(0,j.jsx)("link",{rel:"canonical",href:"".concat(I).concat(n.asPath)}),(0,j.jsx)("meta",{property:"og:type",content:r.type}),(0,j.jsx)("meta",{property:"og:site_name",content:"Next.js Ethereum Starter"}),(0,j.jsx)("meta",{property:"og:description",content:r.description}),(0,j.jsx)("meta",{property:"og:title",content:r.title}),(0,j.jsx)("meta",{property:"og:image",content:r.image}),(0,j.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,j.jsx)("meta",{name:"twitter:site",content:"@hackbg"}),(0,j.jsx)("meta",{name:"twitter:title",content:r.title}),(0,j.jsx)("meta",{name:"twitter:description",content:r.description}),(0,j.jsx)("meta",{name:"twitter:image",content:r.image})]})},A=n(325),R={transactionStarted:"Started",transactionSucceed:"Completed"};function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:38;return e.replace(e.substring(6,t),"...")}var D=function(e){var t,n=e.children,u=e.customMeta,p=(0,o.K)(),m=p.account,v=p.deactivate,b=p.error,w=p.setError,y=(0,l.z)().notifications;return(0,f.useEffect)((function(){b&&w(b)}),[b,w]),t=d().create({seed:m}).toDataURL(),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(M,{customMeta:u}),(0,j.jsx)("header",{children:(0,j.jsx)(r.W2,{maxWidth:"container.xl",children:(0,j.jsxs)(r.MI,{columns:[1,1,1,2],alignItems:"center",justifyContent:"space-between",py:"8",children:[(0,j.jsxs)(r.kC,{py:[4,null,null,0],children:[(0,j.jsx)(h.default,{href:"/",passHref:!0,children:(0,j.jsx)(r.rU,{px:"4",py:"1",children:"Home"})}),(0,j.jsx)(h.default,{href:"/feeds",passHref:!0,children:(0,j.jsx)(r.rU,{px:"4",py:"1",children:"Data Feeds"})}),(0,j.jsx)(h.default,{href:"/vrf",passHref:!0,children:(0,j.jsx)(r.rU,{px:"4",py:"1",children:"Randomness"})}),(0,j.jsx)(h.default,{href:"/external-api",passHref:!0,children:(0,j.jsx)(r.rU,{px:"4",py:"1",children:"External API"})})]}),m?(0,j.jsxs)(r.kC,{order:[-1,null,null,2],alignItems:"center",justifyContent:["flex-start",null,null,"flex-end"],children:[(0,j.jsx)(g,{}),(0,j.jsx)(s.Ee,{ml:"4",src:t,alt:"blockie"}),(0,j.jsxs)(i.v2,{placement:"bottom-end",children:[(0,j.jsx)(i.j2,{as:a.zx,ml:"4",children:z(m)}),(0,j.jsx)(i.qy,{children:(0,j.jsx)(i.sN,{onClick:function(){v()},children:"Disconnect"})})]})]}):(0,j.jsx)(O,{})]})})}),(0,j.jsx)("main",{children:(0,j.jsxs)(r.W2,{maxWidth:"container.xl",children:[b&&(0,j.jsx)(A.j,{message:(0,x.e$)(b)}),n,y.map((function(e){return"walletConnected"===e.type?null:(0,j.jsxs)(c.bZ,{status:"success",position:"fixed",bottom:"8",right:"8",width:"400px",children:[(0,j.jsx)(c.zM,{}),(0,j.jsxs)(r.xu,{children:[(0,j.jsxs)(c.Cd,{children:[e.transactionName," ",R[e.type]]}),(0,j.jsxs)(c.X,{overflow:"hidden",children:["Transaction Hash:"," ",z(e.transaction.hash,61)]})]})]},e.id)}))]})}),(0,j.jsx)("footer",{children:(0,j.jsx)(r.W2,{mt:"8",py:"8",maxWidth:"container.xl",children:(0,j.jsx)(r.rU,{href:"https://github.com/hackbg",children:"GitHub"})})})]})};function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var F=function(e){return(0,j.jsx)(r.xu,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,C.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({maxWidth:"container.sm",p:"8",mt:"8",bg:"gray.100"},e))}},3473:function(e,t,n){"use strict";n.d(t,{c:function(){return c}});var r=n(7495),s=n(4146),i=n(7294),a=n(6914);function c(e){var t=(0,r.K)(),n=t.library,c=t.chainId,o=c&&a.Pl[c][e];return(0,i.useMemo)((function(){return n&&o.address?new s.CH(o.address,o.abi,n.getSigner()):null}),[o,n])}},2020:function(e,t,n){"use strict";n.d(t,{e$:function(){return c},jl:function(){return l},gC:function(){return d},Yg:function(){return h}});var r=n(2236),s=n(157),i=n(950),a=n(3929);function c(e){return e instanceof i.A5?"No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.":e instanceof s.Uu?"You're connected to an unsupported network. Please switch to Kovan or Rinkeby.":e instanceof i.ab||e instanceof a.ab?"Please authorize this website to access your Ethereum account.":(console.error(e),"An unknown error occurred. Check the console for more details.")}var o=new r.F("Bitcoin","BTC",8,{fixedPrecisionDigits:2,useFixedPrecision:!0}),l=function(e){return o.format(e.toString())},u=new r.W6("United States Dollar","USD",8,{fixedPrecisionDigits:2}),d=function(e){return u.format(e.toString())},h=function(e){return"Mining"===e?"Mining Request":"Success"===e&&"Fulfilling Request"}},4680:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r=n(7294),s=n(5115),i=n(1277),a=n(7495),c=n(9748),o=n(5861),l=n(7757),u=n.n(l),d=n(5193),h=n(9545),f=n(1744),x=n(3473),p=n(6914),m=n(325),j=n(5893),g=new Intl.NumberFormat("en-us",{minimumFractionDigits:4,maximumFractionDigits:4});function v(){var e=(0,r.useState)(""),t=e[0],n=e[1],i=(0,r.useState)(),a=i[0],c=i[1],l=(0,x.c)(p.xo.ApiConsumer),v=(0,h.j)(l,"requestVolumeData",{transactionName:"External API Request"}),b=v.send,w=v.state,y=v.events,k=function(){var e=(0,o.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:c(null);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=(0,r.useCallback)((0,o.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.volume();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)}))),[l]);(0,r.useEffect)((function(){if(y){var e=y.find((function(e){return"ChainlinkRequested"===e.name}));e&&n(e.args.id)}}),[y]),(0,r.useEffect)((function(){l&&t&&l.on("ChainlinkFulfilled",(function(e){t===e&&(O(),l.removeAllListeners())}))}),[l,t,O]);var C,E,P="Mining"===w.status||"Success"===w.status&&!a,S="Exception"===w.status;return(0,j.jsxs)(j.Fragment,{children:[S&&(0,j.jsx)(m.j,{message:w.errorMessage}),(0,j.jsx)(d.zx,{onClick:k,isLoading:P,loadingText:(E=w.status,"Mining"===E?"Mining Request":"Success"===E&&"Fulfilling Request"),colorScheme:"teal",children:"Request External API"}),a&&(0,j.jsxs)(s.xv,{fontSize:"xl",mt:"2",children:["ETH VOLUME 24H: ",(C=a,g.format(parseFloat(f.dF(C))))]})]})}var b=n(7226),w=n(7398),y=n(4612),k=n(2593),O=n(335),C=/^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,E=/^[a-zA-Z_][\w]*(?:\.[\w]+)*$/,P=/^(1(0)*)$/;function S(){var e=(0,r.useState)("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"),t=e[0],n=e[1],i=(0,r.useState)("RAW.ETH.USD.VOLUME24HOUR"),a=i[0],c=i[1],l=(0,r.useState)("1000000000000000000"),f=l[0],g=l[1],v=(0,r.useState)(""),S=v[0],I=v[1],M=(0,r.useState)(""),A=M[0],R=M[1],z=(0,x.c)(p.xo.APIRequestBuilder),D=(0,h.j)(z,"requestData",{transactionName:"External API Request"}),q=D.send,F=D.state,_=D.events,N=function(){var e=(0,o.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(""),e.next=3,q(t,a,k.O$.from(f));case 3:R(null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=(0,r.useCallback)((0,o.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.data();case 2:t=e.sent,n=(0,O.S5)(t,f.split("").filter((function(e){return"0"===e})).length),R(n);case 5:case"end":return e.stop()}}),e)}))),[z,f]);(0,r.useEffect)((function(){if(_){var e=_.find((function(e){return"ChainlinkRequested"===e.name}));e&&I(e.args.id)}}),[_]),(0,r.useEffect)((function(){z&&S&&z.on("ChainlinkFulfilled",(function(e){S===e&&(U(),z.removeAllListeners())}))}),[z,S,U]);var H,T="Mining"===F.status||"Success"===F.status&&!A,W="Exception"===F.status,Z=!C.test(t),L=!E.test(a),X=!P.test(f),$=Z||L||X;return(0,j.jsxs)(j.Fragment,{children:[W&&(0,j.jsx)(m.j,{message:F.errorMessage}),(0,j.jsxs)(b.NI,{isInvalid:Z,children:[(0,j.jsx)(b.lX,{htmlFor:"url",children:"Data Source"}),(0,j.jsx)(w.u,{label:"Set the URL to perform the GET request on",placement:"right-start",fontSize:"xs",hasArrow:!0,children:(0,j.jsx)(y.II,{value:t,placeholder:"Enter API URL...",id:"url",onChange:function(e){return n(e.target.value)}})}),Z&&(0,j.jsx)(b.J1,{children:"URL is not valid."})]}),(0,j.jsxs)(b.NI,{mt:"4",isInvalid:L,children:[(0,j.jsx)(b.lX,{htmlFor:"path",children:"Path to Number"}),(0,j.jsx)(w.u,{label:"Set dot separated path to find the desired data in the API response",placement:"right-start",fontSize:"xs",hasArrow:!0,children:(0,j.jsx)(y.II,{value:a,placeholder:"Enter Path...",id:"path",onChange:function(e){return c(e.target.value)}})}),L&&(0,j.jsx)(b.J1,{children:"Path is not valid."})]}),(0,j.jsxs)(b.NI,{mt:"4",isInvalid:X,children:[(0,j.jsx)(b.lX,{htmlFor:"multiplier",children:"Multiplier"}),(0,j.jsx)(w.u,{label:"The multiplier from the response value",placement:"right-start",id:"multiplier",fontSize:"xs",hasArrow:!0,children:(0,j.jsx)(y.II,{value:f,placeholder:"Enter Multiplier...",onChange:function(e){return g(e.target.value)}})}),X&&(0,j.jsx)(b.J1,{children:"Multiplier is not valid."})]}),(0,j.jsx)(d.zx,{mt:"4",onClick:N,isLoading:T,loadingText:(H=F.status,"Mining"===H?"Mining Request":"Success"===H&&"Fulfilling Request"),colorScheme:"teal",disabled:$||T,children:"Custom API Request"}),A&&(0,j.jsxs)(s.xv,{fontSize:"xl",mt:"2",children:["Data: ",A]})]})}var I=n(8821);var M=function(){var e=(0,a.K)().chainId;return(0,j.jsxs)(I.Ar,{children:[e===c.a.Rinkeby&&(0,j.jsx)(m.j,{message:"Oracle on Rinkeby is in maintenance mode. Please switch to Kovan."}),(0,j.jsx)(s.X6,{as:"h1",mb:"8",children:"External API"}),(0,j.jsx)(s.xv,{fontSize:"xl",children:"Request & Receive data from any API in your smart contracts."}),(0,j.jsxs)(I.$0,{children:[(0,j.jsx)(v,{}),(0,j.jsx)(s.xv,{my:"4",children:"Consume data from CryptoCompare API via HTTP GET request, through Chainlink's decentralized oracle network. It provides smart contracts with the ability to push and pull data, facilitating the interoperability between on-chain and off-chain applications."}),(0,j.jsxs)(s.rU,{href:"https://docs.chain.link/docs/make-a-http-get-request/",isExternal:!0,children:["Learn More ",(0,j.jsx)(i.h0,{mx:"2px"})]})]}),(0,j.jsx)(I.$0,{children:(0,j.jsx)(S,{})})]})}},3891:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/external-api",function(){return n(4680)}])}},function(e){e.O(0,[593,883,774,888,179],(function(){return t=3891,e(e.s=t);var t}));var t=e.O();_N_E=t}]);