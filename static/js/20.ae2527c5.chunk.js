(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[20],{1340:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return K}));var i=n(38),a=n(3),c=n.n(a),r=n(12),o=n(19),l=n(10),s=n(8),d=n(1),u=n(4),b=n(5),j=n(7),O=n(2),v=n(54),x=n(13),m=n(34),p=n(176),h=n(199),C=n(363),f=n(187),y=n(25),R=n(100),I=n(106),E=n(56),g=n(36),T=n(20),U=n(57),w=n(39),Y=n(262),N=n(102),S=n(845),_=n(35),k=n(159);var B=n(59),P=n(63),A=n(212),D=n(32),L=n(128),q=n(221),Q=n(114),V=n(96),z=n(328);function M(){return Object(D.c)((function(e){return e.burn}))}var F,H=n(52),W=n(241),G=n(0),J=u.e.div(F||(F=Object(s.a)(["\n  border: solid 1px ",";\n  border-radius: 16px;\n  padding: 16px;\n"])),(function(e){return e.theme.colors.cardBorder}));function K(e){var t,n,a,s,u,F,K,X,Z,$,ee,te,ne,ie,ae,ce,re,oe,le,se=e.history,de=e.match.params,ue=de.currencyIdA,be=de.currencyIdB,je=null!==(t=Object(U.c)(ue))&&void 0!==t?t:void 0,Oe=null!==(n=Object(U.c)(be))&&void 0!==n?n:void 0,ve=Object(T.a)(),xe=ve.account,me=ve.chainId,pe=ve.library,he=Object(d.useMemo)((function(){return[Object(B.b)(je,me),Object(B.b)(Oe,me)]}),[je,Oe,me]),Ce=Object(l.a)(he,2),fe=Ce[0],ye=Ce[1],Re=Object(x.b)().t,Ie=M(),Ee=Ie.independentField,ge=Ie.typedValue,Te=function(e,t){var n,i,a,c,r,s=Object(T.a)(),d=s.account,u=s.chainId,b=M(),O=b.independentField,v=b.typedValue,x=Object(L.b)(e,t),m=Object(l.a)(x,2)[1],p=Object(V.e)(null!==d&&void 0!==d?d:void 0,[null===m||void 0===m?void 0:m.liquidityToken]),h=null===p||void 0===p?void 0:p[null!==(n=null===m||void 0===m||null===(i=m.liquidityToken)||void 0===i?void 0:i.address)&&void 0!==n?n:""],C=[Object(B.b)(e,u),Object(B.b)(t,u)],f=C[0],y=C[1],R=(a={},Object(o.a)(a,z.a.CURRENCY_A,f),Object(o.a)(a,z.a.CURRENCY_B,y),Object(o.a)(a,z.a.LIQUIDITY,null===m||void 0===m?void 0:m.liquidityToken),a),I=Object(q.a)(null===m||void 0===m?void 0:m.liquidityToken),E=m&&I&&h&&f&&j.e.greaterThanOrEqual(I.raw,h.raw)?new j.k(f,m.getLiquidityValue(f,I,h,!1).raw):void 0,g=m&&I&&h&&y&&j.e.greaterThanOrEqual(I.raw,h.raw)?new j.k(y,m.getLiquidityValue(y,I,h,!1).raw):void 0,U=(c={},Object(o.a)(c,z.a.CURRENCY_A,E),Object(o.a)(c,z.a.CURRENCY_B,g),c),w=new j.g("0","100");if(O===z.a.LIQUIDITY_PERCENT)w=new j.g(v,"100");else if(O===z.a.LIQUIDITY){if(null===m||void 0===m?void 0:m.liquidityToken){var Y=Object(Q.a)(v,m.liquidityToken);Y&&h&&!Y.greaterThan(h)&&(w=new j.g(Y.raw,h.raw))}}else if(R[O]){var N=Object(Q.a)(v,R[O]),S=U[O];N&&S&&!N.greaterThan(S)&&(w=new j.g(N.raw,S.raw))}var _,k,P=(r={},Object(o.a)(r,z.a.LIQUIDITY_PERCENT,w),Object(o.a)(r,z.a.LIQUIDITY,h&&w&&w.greaterThan("0")?new j.k(h.token,w.multiply(h.raw).quotient):void 0),Object(o.a)(r,z.a.CURRENCY_A,f&&w&&w.greaterThan("0")&&E?new j.k(f,w.multiply(E.raw).quotient):void 0),Object(o.a)(r,z.a.CURRENCY_B,y&&w&&w.greaterThan("0")&&g?new j.k(y,w.multiply(g.raw).quotient):void 0),r);return d||(_="Connect Wallet"),P[z.a.LIQUIDITY]&&P[z.a.CURRENCY_A]&&P[z.a.CURRENCY_B]||(_=null!==(k=_)&&void 0!==k?k:"Enter an amount"),{pair:m,parsedAmounts:P,error:_}}(null!==je&&void 0!==je?je:void 0,null!==Oe&&void 0!==Oe?Oe:void 0),Ue=Te.pair,we=Te.parsedAmounts,Ye=Te.error,Ne=function(){var e=Object(D.b)();return{onUserInput:Object(d.useCallback)((function(t,n){e(Object(z.b)({field:t,typedValue:n}))}),[e])}}().onUserInput,Se=!Ye,_e=Object(d.useState)(!1),ke=Object(l.a)(_e,2),Be=ke[0],Pe=ke[1],Ae=Object(d.useState)(!1),De=Object(l.a)(Ae,2),Le=De[0],qe=De[1],Qe=Object(d.useState)(""),Ve=Object(l.a)(Qe,2),ze=Ve[0],Me=Ve[1],Fe=Object(Y.a)(),He=Object(H.l)(),We=Object(l.a)(He,1)[0],Ge=(Z={},Object(o.a)(Z,z.a.LIQUIDITY_PERCENT,we[z.a.LIQUIDITY_PERCENT].equalTo("0")?"0":we[z.a.LIQUIDITY_PERCENT].lessThan(new j.g("1","100"))?"<1":we[z.a.LIQUIDITY_PERCENT].toFixed(0)),Object(o.a)(Z,z.a.LIQUIDITY,Ee===z.a.LIQUIDITY?ge:null!==(a=null===(s=we[z.a.LIQUIDITY])||void 0===s?void 0:s.toSignificant(6))&&void 0!==a?a:""),Object(o.a)(Z,z.a.CURRENCY_A,Ee===z.a.CURRENCY_A?ge:null!==(u=null===(F=we[z.a.CURRENCY_A])||void 0===F?void 0:F.toSignificant(6))&&void 0!==u?u:""),Object(o.a)(Z,z.a.CURRENCY_B,Ee===z.a.CURRENCY_B?ge:null!==(K=null===(X=we[z.a.CURRENCY_B])||void 0===X?void 0:X.toSignificant(6))&&void 0!==K?K:""),Z),Je=null===($=we[z.a.LIQUIDITY_PERCENT])||void 0===$?void 0:$.equalTo(new j.g("1")),Ke=Object(w.q)(null===Ue||void 0===Ue||null===(ee=Ue.liquidityToken)||void 0===ee?void 0:ee.address),Xe=Object(d.useState)(null),Ze=Object(l.a)(Xe,2),$e=Ze[0],et=Ze[1],tt=Object(P.b)(we[z.a.LIQUIDITY],g.t),nt=Object(l.a)(tt,2),it=nt[0],at=nt[1];function ct(){return(ct=Object(r.a)(c.a.mark((function e(){var t,n,i,a,r,o,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ke&&Ue&&pe&&Fe){e.next=2;break}throw new Error("missing dependencies");case 2:if(t=we[z.a.LIQUIDITY]){e.next=5;break}throw new Error("missing liquidity amount");case 5:return e.next=7,Ke.nonces(xe);case 7:n=e.sent,i=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],a={name:"Pancake LPs",version:"1",chainId:me,verifyingContract:Ue.liquidityToken.address},r=[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}],o={owner:xe,spender:g.t,value:t.raw.toString(),nonce:n.toHexString(),deadline:Fe.toNumber()},l=JSON.stringify({types:{EIP712Domain:i,Permit:r},domain:a,primaryType:"Permit",message:o}),pe.send("eth_signTypedData_v4",[xe,l]).then(b.splitSignature).then((function(e){et({v:e.v,r:e.r,s:e.s,deadline:Fe.toNumber()})})).catch((function(e){4001!==(null===e||void 0===e?void 0:e.code)&&at()}));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var rt=Object(d.useCallback)((function(e,t){return et(null),Ne(e,t)}),[Ne]),ot=Object(d.useCallback)((function(e){return rt(z.a.LIQUIDITY,e)}),[rt]),lt=Object(d.useCallback)((function(e){return rt(z.a.CURRENCY_A,e)}),[rt]),st=Object(d.useCallback)((function(e){return rt(z.a.CURRENCY_B,e)}),[rt]),dt=Object(N.d)();function ut(){return bt.apply(this,arguments)}function bt(){return(bt=Object(r.a)(c.a.mark((function e(){var t,n,a,r,l,s,d,u,b,O,x,m,p,h;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("rrrrrrrrrrrrrrrr"),me&&pe&&xe&&Fe){e.next=3;break}throw new Error("missing dependencies");case 3:if(n=we[z.a.CURRENCY_A],a=we[z.a.CURRENCY_B],n&&a){e.next=6;break}throw new Error("missing currency amounts");case 6:if(r=Object(_.g)(me,pe,xe),t={},Object(o.a)(t,z.a.CURRENCY_A,Object(_.c)(n,We)[0]),Object(o.a)(t,z.a.CURRENCY_B,Object(_.c)(a,We)[0]),l=t,je&&Oe){e.next=10;break}throw new Error("missing tokens");case 10:if(s=we[z.a.LIQUIDITY]){e.next=13;break}throw new Error("missing liquidity amount");case 13:if(d=Oe===j.d,u=je===j.d||d,fe&&ye){e.next=17;break}throw new Error("could not wrap");case 17:if(it!==P.a.APPROVED){e.next=21;break}u?(b=["removeLiquidityETH","removeLiquidityETHSupportingFeeOnTransferTokens"],O=[d?fe.address:ye.address,s.raw.toString(),l[d?z.a.CURRENCY_A:z.a.CURRENCY_B].toString(),l[d?z.a.CURRENCY_B:z.a.CURRENCY_A].toString(),xe,Fe.toHexString()]):(b=["removeLiquidity"],O=[fe.address,ye.address,s.raw.toString(),l[z.a.CURRENCY_A].toString(),l[z.a.CURRENCY_B].toString(),xe,Fe.toHexString()]),e.next=26;break;case 21:if(null===$e){e.next=25;break}u?(b=["removeLiquidityETHWithPermit","removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"],O=[d?fe.address:ye.address,s.raw.toString(),l[d?z.a.CURRENCY_A:z.a.CURRENCY_B].toString(),l[d?z.a.CURRENCY_B:z.a.CURRENCY_A].toString(),xe,$e.deadline,!1,$e.v,$e.r,$e.s]):(b=["removeLiquidityWithPermit"],O=[fe.address,ye.address,s.raw.toString(),l[z.a.CURRENCY_A].toString(),l[z.a.CURRENCY_B].toString(),xe,$e.deadline,!1,$e.v,$e.r,$e.s]),e.next=26;break;case 25:throw new Error("Attempting to confirm without approval or a signature. Please contact support.");case 26:return e.next=28,Promise.all(b.map((function(e){var t;return(t=r.estimateGas)[e].apply(t,Object(i.a)(O)).then(_.b).catch((function(t){console.error("estimateGas failed",e,O,t)}))})));case 28:if(x=e.sent,-1!==(m=x.findIndex((function(e){return v.a.isBigNumber(e)})))){e.next=34;break}console.error("This transaction would fail. Please contact support."),e.next=39;break;case 34:return p=b[m],h=x[m],qe(!0),e.next=39,r[p].apply(r,Object(i.a)(O).concat([{gasLimit:h}])).then((function(e){var t,n;qe(!1),dt(e,{summary:"Remove ".concat(null===(t=we[z.a.CURRENCY_A])||void 0===t?void 0:t.toSignificant(3)," ").concat(null===je||void 0===je?void 0:je.symbol," and ").concat(null===(n=we[z.a.CURRENCY_B])||void 0===n?void 0:n.toSignificant(3)," ").concat(null===Oe||void 0===Oe?void 0:Oe.symbol)}),Me(e.hash)})).catch((function(e){qe(!1),console.error(e)}));case 39:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function jt(){var e,t;return Object(G.jsxs)(m.a,{gap:"md",children:[Object(G.jsxs)(y.b,{align:"flex-end",children:[Object(G.jsx)(O.ac,{fontSize:"24px",children:null===(e=we[z.a.CURRENCY_A])||void 0===e?void 0:e.toSignificant(6)}),Object(G.jsxs)(y.c,{gap:"4px",children:[Object(G.jsx)(E.a,{currency:je,size:"24px"}),Object(G.jsx)(O.ac,{fontSize:"24px",ml:"10px",children:null===je||void 0===je?void 0:je.symbol})]})]}),Object(G.jsx)(y.c,{children:Object(G.jsx)(O.a,{width:"16px"})}),Object(G.jsxs)(y.b,{align:"flex-end",children:[Object(G.jsx)(O.ac,{fontSize:"24px",children:null===(t=we[z.a.CURRENCY_B])||void 0===t?void 0:t.toSignificant(6)}),Object(G.jsxs)(y.c,{gap:"4px",children:[Object(G.jsx)(E.a,{currency:Oe,size:"24px"}),Object(G.jsx)(O.ac,{fontSize:"24px",ml:"10px",children:null===Oe||void 0===Oe?void 0:Oe.symbol})]})]}),Object(G.jsx)(O.ac,{small:!0,textAlign:"left",pt:"12px",children:Re("Output is estimated. If the price changes by more than %slippage%% your transaction will revert.",{slippage:We/100})})]})}function Ot(){var e,t,n;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.ac,{children:Re("%assetA%/%assetB% Burned",{assetA:null!==(e=null===je||void 0===je?void 0:je.symbol)&&void 0!==e?e:"",assetB:null!==(t=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==t?t:""})}),Object(G.jsxs)(y.c,{children:[Object(G.jsx)(E.b,{currency0:je,currency1:Oe,margin:!0}),Object(G.jsx)(O.ac,{children:null===(n=we[z.a.LIQUIDITY])||void 0===n?void 0:n.toSignificant(6)})]})]}),Ue&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.ac,{children:Re("Price")}),Object(G.jsxs)(O.ac,{children:["1 ",null===je||void 0===je?void 0:je.symbol," = ",fe?Ue.priceOf(fe).toSignificant(6):"-"," ",null===Oe||void 0===Oe?void 0:Oe.symbol]})]}),Object(G.jsxs)(y.b,{children:[Object(G.jsx)("div",{}),Object(G.jsxs)(O.ac,{children:["1 ",null===Oe||void 0===Oe?void 0:Oe.symbol," = ",ye?Ue.priceOf(ye).toSignificant(6):"-"," ",null===je||void 0===je?void 0:je.symbol]})]})]}),Object(G.jsx)(O.o,{disabled:!(it===P.a.APPROVED||null!==$e),onClick:ut,children:Re("Confirm")})]})}var vt=Re("Removing %amountA% %symbolA% and %amountB% %symbolB%",{amountA:null!==(te=null===(ne=we[z.a.CURRENCY_A])||void 0===ne?void 0:ne.toSignificant(6))&&void 0!==te?te:"",symbolA:null!==(ie=null===je||void 0===je?void 0:je.symbol)&&void 0!==ie?ie:"",amountB:null!==(ae=null===(ce=we[z.a.CURRENCY_B])||void 0===ce?void 0:ce.toSignificant(6))&&void 0!==ae?ae:"",symbolB:null!==(re=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==re?re:""}),xt=Object(d.useCallback)((function(e){rt(z.a.LIQUIDITY_PERCENT,e.toString())}),[rt]),mt=je===j.d||Oe===j.d,pt=Boolean(me&&(je&&Object(j.o)(j.n[me],je)||Oe&&Object(j.o)(j.n[me],Oe))),ht=Object(d.useCallback)((function(e){be&&Object(k.a)(e)===be?se.push("/remove/".concat(Object(k.a)(e),"/").concat(ue)):se.push("/remove/".concat(Object(k.a)(e),"/").concat(be))}),[ue,be,se]),Ct=Object(d.useCallback)((function(e){ue&&Object(k.a)(e)===ue?se.push("/remove/".concat(be,"/").concat(Object(k.a)(e))):se.push("/remove/".concat(ue,"/").concat(Object(k.a)(e)))}),[ue,be,se]),ft=Object(d.useCallback)((function(){et(null),ze&&rt(z.a.LIQUIDITY_PERCENT,"0"),Me("")}),[rt,ze]),yt=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,i=Object(d.useState)((function(){return e})),a=Object(l.a)(i,2),c=a[0],r=a[1],o=Object(d.useRef)(),s=Object(d.useCallback)((function(e){r(e),o.current&&clearTimeout(o.current),o.current=setTimeout((function(){t(e),o.current=void 0}),n)}),[n,t]);return Object(d.useEffect)((function(){o.current&&(clearTimeout(o.current),o.current=void 0),r(e)}),[e]),[c,s]}(Number.parseInt(we[z.a.LIQUIDITY_PERCENT].toFixed(0)),xt),Rt=Object(l.a)(yt,2),It=Rt[0],Et=Rt[1],gt=Object(O.yc)(Object(G.jsx)(p.c,{title:Re("You will receive"),customOnDismiss:ft,attemptingTxn:Le,hash:ze||"",content:function(){return Object(G.jsx)(p.a,{topContent:jt,bottomContent:Ot})},pendingText:vt}),!0,!0,"removeLiquidityModal"),Tt=Object(l.a)(gt,1)[0];return Object(G.jsxs)(W.a,{children:[Object(G.jsxs)(f.a,{children:[Object(G.jsx)(f.b,{backTo:"/pool",title:Re("Remove %assetA%-%assetB% liquidity",{assetA:null!==(oe=null===je||void 0===je?void 0:je.symbol)&&void 0!==oe?oe:"",assetB:null!==(le=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==le?le:""}),subtitle:"To receive ".concat(null===je||void 0===je?void 0:je.symbol," and ").concat(null===Oe||void 0===Oe?void 0:Oe.symbol),noConfig:!0}),Object(G.jsxs)(O.t,{children:[Object(G.jsxs)(m.a,{gap:"20px",children:[Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.ac,{children:Re("Amount")}),Object(G.jsx)(O.o,{variant:"text",scale:"sm",onClick:function(){return Pe(!Be)},children:Re(Be?"Simple":"Detailed")})]}),!Be&&Object(G.jsxs)(J,{children:[Object(G.jsxs)(O.ac,{fontSize:"40px",bold:!0,mb:"16px",style:{lineHeight:1},children:[Ge[z.a.LIQUIDITY_PERCENT],"%"]}),Object(G.jsx)(O.Nb,{name:"lp-amount",min:0,max:100,value:It,onValueChanged:function(e){return Et(Math.ceil(e))},mb:"16px"}),Object(G.jsxs)(O.S,{flexWrap:"wrap",justifyContent:"space-evenly",children:[Object(G.jsx)(O.o,{variant:"tertiary",scale:"sm",onClick:function(){return rt(z.a.LIQUIDITY_PERCENT,"25")},children:"25%"}),Object(G.jsx)(O.o,{variant:"tertiary",scale:"sm",onClick:function(){return rt(z.a.LIQUIDITY_PERCENT,"50")},children:"50%"}),Object(G.jsx)(O.o,{variant:"tertiary",scale:"sm",onClick:function(){return rt(z.a.LIQUIDITY_PERCENT,"75")},children:"75%"}),Object(G.jsx)(O.o,{variant:"tertiary",scale:"sm",onClick:function(){return rt(z.a.LIQUIDITY_PERCENT,"100")},children:"Max"})]})]})]}),!Be&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(m.b,{children:Object(G.jsx)(O.c,{color:"textSubtle",width:"24px",my:"16px"})}),Object(G.jsxs)(m.a,{gap:"10px",children:[Object(G.jsx)(O.ac,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Re("You will receive")}),Object(G.jsxs)(I.c,{children:[Object(G.jsxs)(O.S,{justifyContent:"space-between",mb:"8px",children:[Object(G.jsxs)(O.S,{children:[Object(G.jsx)(E.a,{currency:je}),Object(G.jsx)(O.ac,{small:!0,color:"textSubtle",id:"remove-liquidity-tokena-symbol",ml:"4px",children:null===je||void 0===je?void 0:je.symbol})]}),Object(G.jsx)(O.ac,{small:!0,children:Ge[z.a.CURRENCY_A]||"-"})]}),Object(G.jsxs)(O.S,{justifyContent:"space-between",children:[Object(G.jsxs)(O.S,{children:[Object(G.jsx)(E.a,{currency:Oe}),Object(G.jsx)(O.ac,{small:!0,color:"textSubtle",id:"remove-liquidity-tokenb-symbol",ml:"4px",children:null===Oe||void 0===Oe?void 0:Oe.symbol})]}),Object(G.jsx)(O.ac,{small:!0,children:Ge[z.a.CURRENCY_B]||"-"})]}),me&&(pt||mt)?Object(G.jsx)(y.b,{style:{justifyContent:"flex-end",fontSize:"14px"},children:mt?Object(G.jsx)(S.a,{to:"/remove/".concat(je===j.d?j.n[me].address:ue,"/").concat(Oe===j.d?j.n[me].address:be),children:Re("Receive WBNB")}):pt?Object(G.jsx)(S.a,{to:"/remove/".concat(je&&Object(j.o)(je,j.n[me])?"BNB":ue,"/").concat(Oe&&Object(j.o)(Oe,j.n[me])?"BNB":be),children:Re("Receive BNB")}):null}):null]})]})]}),Be&&Object(G.jsxs)(O.l,{my:"16px",children:[Object(G.jsx)(h.a,{value:Ge[z.a.LIQUIDITY],onUserInput:ot,onMax:function(){rt(z.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Je,disableCurrencySelect:!0,currency:null===Ue||void 0===Ue?void 0:Ue.liquidityToken,pair:Ue,id:"liquidity-amount",onCurrencySelect:function(){return null}}),Object(G.jsx)(m.b,{children:Object(G.jsx)(O.c,{width:"24px",my:"16px"})}),Object(G.jsx)(h.a,{hideBalance:!0,value:Ge[z.a.CURRENCY_A],onUserInput:lt,onMax:function(){return rt(z.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Je,currency:je,label:Re("Output"),onCurrencySelect:ht,id:"remove-liquidity-tokena"}),Object(G.jsx)(m.b,{children:Object(G.jsx)(O.a,{width:"24px",my:"16px"})}),Object(G.jsx)(h.a,{hideBalance:!0,value:Ge[z.a.CURRENCY_B],onUserInput:st,onMax:function(){return rt(z.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Je,currency:Oe,label:Re("Output"),onCurrencySelect:Ct,id:"remove-liquidity-tokenb"})]}),Ue&&Object(G.jsxs)(m.a,{gap:"10px",style:{marginTop:"16px"},children:[Object(G.jsx)(O.ac,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Re("Prices")}),Object(G.jsxs)(I.c,{children:[Object(G.jsxs)(O.S,{justifyContent:"space-between",children:[Object(G.jsxs)(O.ac,{small:!0,color:"textSubtle",children:["1 ",null===je||void 0===je?void 0:je.symbol," ="]}),Object(G.jsxs)(O.ac,{small:!0,children:[fe?Ue.priceOf(fe).toSignificant(6):"-"," ",null===Oe||void 0===Oe?void 0:Oe.symbol]})]}),Object(G.jsxs)(O.S,{justifyContent:"space-between",children:[Object(G.jsxs)(O.ac,{small:!0,color:"textSubtle",children:["1 ",null===Oe||void 0===Oe?void 0:Oe.symbol," ="]}),Object(G.jsxs)(O.ac,{small:!0,children:[ye?Ue.priceOf(ye).toSignificant(6):"-"," ",null===je||void 0===je?void 0:je.symbol]})]})]})]}),Object(G.jsx)(O.l,{position:"relative",mt:"16px",children:xe?Object(G.jsxs)(y.b,{children:[Object(G.jsx)(O.o,{variant:it===P.a.APPROVED||null!==$e?"success":"primary",onClick:function(){return ct.apply(this,arguments)},disabled:it!==P.a.NOT_APPROVED||null!==$e,width:"100%",mr:"0.5rem",children:it===P.a.PENDING?Object(G.jsx)(A.a,{children:Re("Enabling")}):it===P.a.APPROVED||null!==$e?Re("Enabled"):Re("Enable")}),Object(G.jsx)(O.o,{variant:!Se&&we[z.a.CURRENCY_A]&&we[z.a.CURRENCY_B]?"danger":"primary",onClick:function(){Tt()},width:"100%",disabled:!Se||null===$e&&it!==P.a.APPROVED,children:Ye||Re("Remove")})]}):Object(G.jsx)(R.a,{})})]})]}),Ue?Object(G.jsx)(m.a,{style:{minWidth:"20rem",width:"100%",maxWidth:"400px",marginTop:"1rem"},children:Object(G.jsx)(C.a,{showUnwrapped:pt,pair:Ue})}):null]})}},845:function(e,t,n){"use strict";var i,a=n(8),c=n(85),r=n(4),o=Object(r.e)(c.a)(i||(i=Object(a.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=o}}]);
//# sourceMappingURL=20.ae2527c5.chunk.js.map