(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1058:function(e,t,n){},1059:function(e,t,n){"use strict";n.r(t);n(384);var a=n(2),r=n.n(a),o=n(372),s=n.n(o),i=n(61),c=n(3),l=n(4),u=n(8),d=n(6),m=n(9),p=n(62),h=n(11),f=n.n(h),b=n(45),g=n(143),v=n.n(g),y=n(376),k=n(144),w=n.n(k),E=n(380),O=18,x="undefined"!==typeof web3?window.web3.currentProvider:new y.providers.HttpProvider("https://mainnet.infura.io"),j=[],N=function(e){j.push(e)};function S(){return B.apply(this,arguments)}function B(){return(B=Object(b.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(window.web3){e.next=4;break}x=new E.PortisProvider({}),e.next=11;break;case 4:if(!window.ethereum){e.next=8;break}window.ethereum.enable(),e.next=11;break;case 8:throw t="You need an Ethereum wallet to interact with this marketplace. Unlock your wallet, get MetaMask.io or Portis on desktop, or get Trust Wallet or Coinbase Wallet on mobile.",alert(t),new Error(t);case 11:j.map(function(e){return e(x)});case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}var M,A,C,F,L,P=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.account,n=e.showImage,a=t.user?t.user.username:null,o=t.address,s=a||o.substring(2,8).toUpperCase();return r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat("https://opensea.io","/accounts/").concat(o)},n&&t?r.a.createElement("div",{style:{backgroundImage:'url("'+t.image+'")'}}):null,r.a.createElement("span",null,s))}}]),t}(r.a.Component),T=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.asset;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"text-center d-inline-block m-100",href:e.openseaLink},r.a.createElement("img",{alt:"Asset artwork",src:e.imageUrl})),r.a.createElement("div",{className:"card-body h-25"},r.a.createElement("h5",{className:"card-title"},e.name),r.a.createElement("p",{className:"card-text text-truncate"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.openseaLink,className:"card-link"},e.assetContract.name," #",e.tokenId))))}}]),t}(r.a.Component),D=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.bundle;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"text-center d-inline-block m-100",href:e.permalink},r.a.createElement(_,null,e.assets.map(function(e,t){return r.a.createElement("img",{className:"small",alt:"Asset Bundle artwork",key:t,src:e.imageUrlThumbnail||e.imageUrl})}))),r.a.createElement("div",{className:"card-body h-25"},r.a.createElement("h5",{className:"card-title"},e.name),r.a.createElement("p",{className:"card-text text-truncate"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.permalink,className:"card-link"},e.description,r.a.createElement("br",null),e.externalLink))))}}]),t}(r.a.Component),_=p.a.div(M||(M=Object(i.a)(["\n  min-height: 120px;\n  max-height: 240px;\n  overflow-y: auto;\n  padding: 5px 0;\n"]))),U=n(32),I=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.order,t=e.currentPrice,n=e.paymentTokenContract,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=t&&null!=t.decimals?t.decimals:O;return new w.a(e.toString()).div(new w.a(10).pow(n))}(t,n),o=parseFloat(a).toLocaleString(void 0,{minimumSignificantDigits:1}),s="ETH"===n.symbol;return r.a.createElement(z,null,s?"\u039e":null,o," ",s?null:n.symbol)}}]),t}(r.a.Component),z=p.a.span(A||(A=Object(i.a)(["\n  img {\n    height: 15px !important;\n  }\n"]))),H=p.a.div.attrs({className:"card mx-2 mb-4"})(C||(C=Object(i.a)(["\n  min-width: 200px;\n  img {\n    height: 120px;\n    max-width: 100%;\n  }\n  img.small {\n    max-width: 50%;\n    height: 60px;\n  }\n"]))),Y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={errorMessage:null,creatingOrder:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onError",value:function(e){var t=this;throw this.setState({errorMessage:e.message}),setTimeout(function(){return t.setState({errorMessage:null})},3e3),e}},{key:"fulfillOrder",value:function(){var e=Object(b.a)(f.a.mark(function e(){var t,n,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.order,a=t.accountAddress){e.next=4;break}return e.next=4,S();case 4:return e.prev=4,this.setState({creatingOrder:!0}),e.next=8,this.props.seaport.fulfillOrder({order:n,accountAddress:a});case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),this.onError(e.t0);case 13:return e.prev=13,this.setState({creatingOrder:!1}),e.finish(13);case 16:case"end":return e.stop()}},e,this,[[4,10,13,16]])}));return function(){return e.apply(this,arguments)}}()},{key:"renderBuyButton",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=this.state.creatingOrder,a=this.props,o=a.accountAddress,s=a.order,i=function(){var n=Object(b.a)(f.a.mark(function n(){return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!o||t){n.next=3;break}return e.setState({errorMessage:"You already own this asset!"}),n.abrupt("return");case 3:e.fulfillOrder();case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}();return r.a.createElement("button",{disabled:n,onClick:i,className:"btn btn-primary w-100"},"Buy",n?"ing":""," for ",r.a.createElement(I,{order:s}))}},{key:"renderAcceptOfferButton",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=this.state.creatingOrder,a=this.props,o=a.accountAddress,s=a.order,i=function(){var n=Object(b.a)(f.a.mark(function n(){return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!o||t){n.next=3;break}return e.setState({errorMessage:"You do not own this asset!"}),n.abrupt("return");case 3:e.fulfillOrder();case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}();return r.a.createElement("button",{disabled:n,onClick:i,className:"btn btn-success w-100"},"Sell",n?"ing":""," for ",r.a.createElement(I,{order:s}))}},{key:"renderExpirationBadge",value:function(){var e=parseFloat(this.props.order.expirationTime);if(e<=0)return null;var t=v.a.duration(v.a.unix(e).diff(v()()));return r.a.createElement("span",{className:"badge bid-expiry-badge red"},r.a.createElement("i",{className:"tiny material-icons"},"timer"),r.a.createElement("span",{className:"expire-label"},"Expires in "),t.humanize())}},{key:"render",value:function(){var e=this.state.errorMessage,t=this.props,n=t.order,a=t.accountAddress,o=n.makerAccount,s=n.listingTime,i=n.asset,c=n.assetBundle,l=i?i.owner:c.assets[0].owner,u=1e3*s.toNumber(),d=v()(u).local().fromNow(),m=a&&a.toLowerCase()===l.address.toLowerCase();return r.a.createElement(H,null,i?r.a.createElement(T,{asset:i}):r.a.createElement(D,{bundle:c}),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},"Offered by ",r.a.createElement(P,{account:o})),e?r.a.createElement("div",{className:"alert alert-warning mb-0",role:"alert"},e):r.a.createElement("li",{className:"list-group-item"},n.side===U.OrderSide.Buy?this.renderAcceptOfferButton(m):null,n.side===U.OrderSide.Sell?this.renderBuyButton(!m):null)),r.a.createElement("div",{className:"card-footer"},r.a.createElement("small",{className:"text-muted"},"Posted ",d)))}}]),t}(r.a.Component),J=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={orders:void 0,total:0,side:void 0,onlyForMe:!1,onlyByMe:!1,onlyBundles:!1,page:1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var e=Object(b.a)(f.a.mark(function e(){var t,n,a,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.accountAddress,e.next=3,this.props.seaport.api.getOrders({maker:this.state.onlyByMe?t:void 0,owner:this.state.onlyForMe?t:void 0,side:this.state.side,bundled:!!this.state.onlyBundles||void 0},this.state.page);case 3:n=e.sent,a=n.orders,r=n.count,this.setState({orders:a,total:r});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"paginateTo",value:function(e){var t=this;this.setState({orders:void 0,page:e},function(){return t.fetchData()})}},{key:"toggleSide",value:function(e){var t=this;this.state.side===e&&(e=void 0),this.setState({orders:void 0,side:e,onlyForMe:void 0},function(){return t.fetchData()})}},{key:"toggleForMe",value:function(){var e=Object(b.a)(f.a.mark(function e(){var t,n=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.accountAddress){e.next=4;break}return e.next=4,S();case 4:t=this.state.onlyForMe,this.setState({orders:void 0,onlyForMe:!t,onlyByMe:!1,side:t?void 0:U.OrderSide.Buy},function(){return n.fetchData()});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"toggleBundles",value:function(){var e=this,t=this.state.onlyBundles;this.setState({orders:void 0,onlyBundles:!t,onlyByMe:!1,side:U.OrderSide.Sell},function(){return e.fetchData()})}},{key:"toggleByMe",value:function(){var e=Object(b.a)(f.a.mark(function e(){var t,n=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.accountAddress){e.next=4;break}return e.next=4,S();case 4:t=this.state.onlyByMe,this.setState({orders:void 0,onlyByMe:!t,onlyForMe:!1},function(){return n.fetchData()});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderPagination",value:function(){var e=this,t=this.state,n=t.page,a=t.total,o=this.props.seaport.api.pageSize,s=n*o>=a;return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination justify-content-center"},r.a.createElement("li",{className:"page-item "+(1===n?"disabled":"")},r.a.createElement("a",{className:"page-link",href:"#Log",onClick:function(){return e.paginateTo(n-1)},tabIndex:"-1"},"Previous")),r.a.createElement("li",{className:"page-item "+(s?"disabled":"")},r.a.createElement("a",{className:"page-link",href:"#Log",onClick:function(){return e.paginateTo(n+1)}},"Next"))))}},{key:"renderFilters",value:function(){var e=this,t=this.state,n=t.onlyByMe,a=t.onlyForMe,o=t.onlyBundles,s=this.state.side===U.OrderSide.Sell,i=this.state.side===U.OrderSide.Buy;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"mb-3 ml-4"},"Filter orderbook:",r.a.createElement("div",{className:"btn-group ml-4",role:"group"},r.a.createElement("button",{type:"button",className:"btn btn-outline-primary "+(s?"active":""),"data-toggle":"button",onClick:function(){return e.toggleSide(U.OrderSide.Sell)}},"Auctions"),r.a.createElement("button",{type:"button",className:"btn btn-outline-success "+(i?"active":""),"data-toggle":"button",onClick:function(){return e.toggleSide(U.OrderSide.Buy)}},"Bids"))),r.a.createElement("div",{className:"mb-3 ml-4"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("button",{type:"button",className:"btn btn-outline-secondary "+(a?"active":""),"data-toggle":"button",onClick:function(){return e.toggleForMe()}},"For Me"),r.a.createElement("button",{type:"button",className:"btn btn-outline-secondary "+(n?"active":""),"data-toggle":"button",onClick:function(){return e.toggleByMe()}},"By Me"))),r.a.createElement("div",{className:"mb-3 ml-4"},r.a.createElement("button",{type:"button",className:"btn btn-outline-info "+(o?"active":""),"data-toggle":"button",onClick:function(){return e.toggleBundles()}},"Bundles")))}},{key:"render",value:function(){var e=this,t=this.state.orders;return r.a.createElement("div",{className:"container py-3",id:"Log"},this.renderFilters(),null!=t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-deck"},t.map(function(t,n){return r.a.createElement(Y,Object.assign({},e.props,{key:n,order:t}))})),this.renderPagination()):r.a.createElement("div",{className:"text-center"},"Loading..."))}}]),t}(r.a.Component),W=n(237),G=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={accountAddress:null},n.onChangeAddress=function(){n.seaport=new W.OpenSeaPort(x,{networkName:W.Network.Main}),n.web3=n.seaport.web3,n.web3.eth.getAccounts(function(e,t){n.setState({accountAddress:t[0]})})},n.onChangeAddress(),N(n.onChangeAddress),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/ProjectOpenSea/ships-log"},r.a.createElement(K,{src:"https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png",alt:"Fork me on GitHub"})),r.a.createElement(q,null,r.a.createElement("h1",null,"The Ship's Log"),r.a.createElement("h6",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ProjectOpenSea/opensea-js"},r.a.createElement("img",{alt:"OpenSea logo",className:"mr-2",src:"/opensea-logo.png"}),"OpenSea.js")," example dapp")),r.a.createElement("main",null,r.a.createElement(J,{seaport:this.seaport,accountAddress:this.state.accountAddress})))}}]),t}(r.a.Component),q=p.a.header(F||(F=Object(i.a)(["\n  border-bottom: 1px solid lightgrey;\n  padding: 10px;\n  text-align: center;\n  background-color: #f4f9fd;\n\n  h6 img {\n    width: 24px;\n  }\n"]))),K=p.a.img(L||(L=Object(i.a)(["\n  width: 150px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  border: 0;\n\n  @media(max-width: 600px) {\n    width: 80px;\n  }\n"]))),Q=(n(1058),function(){window.dataLayer.push(arguments)});window.dataLayer=window.dataLayer||[],Q("js",new Date),Q("config","UA-111688253-4"),s.a.render(r.a.createElement(G,null),document.getElementById("root"))},383:function(e,t,n){e.exports=n(1059)},406:function(e,t){},409:function(e,t){},411:function(e,t){},416:function(e,t){},417:function(e,t){},441:function(e,t){},443:function(e,t){},451:function(e,t){},453:function(e,t){},474:function(e,t){},507:function(e,t){},508:function(e,t){},586:function(e,t){},633:function(e,t){},640:function(e,t){},688:function(e,t){},718:function(e,t){},868:function(e,t){}},[[383,1,2]]]);
//# sourceMappingURL=main.6d8980cc.chunk.js.map