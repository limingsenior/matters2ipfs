(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{3887:function(e,t,a){e.exports=a(3929)},3892:function(e,t,a){},3928:function(e,t,a){},3929:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),o=a.n(s),i=(a(3892),a(3931)),c=a(3981),l=a(3966),p=a(35),u=a(3967),h=a(33),m=a.n(h),f=a(41),d=a(18),g=a(53),b=a(3968),E=a(3983),y=a(3970),v=a(3971),w=a(3973),C=a(3969),k=a(3974),j=a(3975),x=a(3976),O=a(3979),B=a(3980),N=a(3965),S=a(3932),A=a(3986),R=a(3987),H=a(56),U=a(55),T=a(3972),z=a(3977),I=a(3978),D=a(78),L=a(79),P=a.n(L);var F=new D.GraphQLClient("https://cors-anywhere.herokuapp.com/https://server.matters.news/graphql",{headers:{},mode:"cors"});var G=function(e){if(!e)return!0;try{return new URL(e),!0}catch(t){return!1}},W=function(e){if(e.indexOf("matters.news")<0)return"";var t=e.match(/.+-(.+)/);return t&&t[1]?t[1].split("#")[0]:""},J=function(){var e=Object(f.a)(m.a.mark(function e(t){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!t.mediaHash){e.next=8;break}return a='\n    query {\n      article(input: { mediaHash: "'.concat(t.mediaHash,'" }) {\n        dataHash\n      }\n    }\n  '),e.next=4,F.request(a);case 4:return n=e.sent,e.abrupt("return",n);case 8:throw new Error("Can't found mediaHash");case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),q=a(89),_=a(3),M=a(3962),Q=a(3963),V=a(82),X=a.n(V),Y=a(80),Z=a.n(Y),$=a(83),K=a.n($),ee=a(81),te=a.n(ee),ae=a(87),ne=a.n(ae),re=a(3964),se={success:Z.a,warning:te.a,error:X.a,info:K.a},oe=Object(i.a)(function(e){return{success:{backgroundColor:M.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main},warning:{backgroundColor:Q.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}});function ie(e){var t=oe(),a=e.className,n=e.message,s=e.onClose,o=e.variant,i=Object(q.a)(e,["className","message","onClose","variant"]),c=se[o];return r.a.createElement(re.a,Object.assign({className:Object(_.a)(t[o],a),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:t.message},r.a.createElement(c,{className:Object(_.a)(t.icon,t.iconVariant)}),n),action:[r.a.createElement(N.a,{key:"close","aria-label":"Close",color:"inherit",onClick:s},r.a.createElement(ne.a,{className:t.icon}))]},i))}var ce=["https://ninetailed.ninja/ipfs/:hash","https://siderus.io/ipfs/:hash","https://eu.siderus.io/ipfs/:hash","https://na.siderus.io/ipfs/:hash","https://ap.siderus.io/ipfs/:hash","https://ipfs.eternum.io/ipfs/:hash","https://hardbin.com/ipfs/:hash","https://ipfs.wa.hle.rs/ipfs/:hash","https://gateway.pinata.cloud/ipfs/:hash","https://ipfs.sloppyta.co/ipfs/:hash","https://ipfs.busy.org/ipfs/:hash","https://ipfs.greyh.at/ipfs/:hash","https://gateway.serph.network/ipfs/:hash","https://ipfs.fooock.com/ipfs/:hash","https://ipfstube.erindachtler.me/ipfs/:hash","https://cdn.cwinfo.net/ipfs/:hash","https://ipfs.privacytools.io/ipfs/:hash","https://d26g9c7mfuzstv.cloudfront.net/ipfs/:hash","https://gateway.temporal.cloud/ipfs/:hash","https://ipfs.jes.xxx/ipfs/:hash","https://cloudflare-ipfs.com/ipfs/:hash","https://ipfs.io/ipfs/:hash","https://gateway.ipfs.io/ipfs/:hash","https://ipfs.infura.io/ipfs/:hash","https://upload.global/ipfs/:hash","https://catalunya.network/ipfs/:hash","https://ipfs.works/ipfs/:hash","https://api.wisdom.sh/ipfs/:hash","https://ipfs.macholibre.org/ipfs/:hash","https://ipns.co/:hash","https://ipfs.netw0rk.io/ipfs/:hash","https://gateway.swedneck.xyz/ipfs/:hash","https://ipfs.mrh.io/ipfs/:hash","https://gateway.originprotocol.com/ipfs/:hash","https://ipfs.dapps.earth/ipfs/:hash","https://ipfs.doolta.com/ipfs/:hash","https://rx14.co.uk/ipfs/:hash","https://ipfs.globalupload.io/ipfs/:hash","https://ipfs.renehsz.com/ipfs/:hash","https://gateway.blocksec.com/ipfs/:hash","https://jorropo.ovh/ipfs/:hash"],le=(a(3928),Object(i.a)(function(e){var t;return t={root:{paddingBottom:30},button:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},buttonGrow:{flexGrow:1},buttonBox:{},input:{display:"none"},buttonIcon:{marginRight:e.spacing(1)},formControl:{marginRight:e.spacing(4),minWidth:120},listItem:{wordBreak:"break-all"},buttonSplit:{flex:1},legend:{color:"rgba(0, 0, 0, 0.38)"},loading:{margin:e.spacing(4),display:"flex",justifyContent:"center"},divider:{marginTop:e.spacing(4),marginBottom:e.spacing(4)},close:{padding:e.spacing(.5)},error:{backgroundColor:"red"},heroContent:{padding:e.spacing(8,0,6)},buttonRight:{marginLeft:e.spacing(4)},space:{marginLeft:e.spacing(1)},priButton:{justifyContent:"flex-end"},center:{display:"flex",justifyContent:"center",alignItems:"center"},centerButton:{marginTop:e.spacing(4),justifyContent:"center"},overAvatar:{minWidth:0,paddingRight:e.spacing(1)},subheader:{top:"auto",zIndex:"auto",position:"static"},inputRoot:{marginTop:e.spacing(2),marginBottom:e.spacing(4),padding:"2px 4px",display:"flex",alignItems:"center"}},Object(g.a)(t,"input",{marginLeft:8,flex:1}),Object(g.a)(t,"iconButton",{padding:10}),Object(g.a)(t,"inputDivider",{width:1,height:28,margin:4}),t})),pe=1;function ue(){var e=le(),t=new URLSearchParams(window.location.search),a=t.get("url")||"",s=t.get("cors")||"",o=Object(n.useState)(!1),i=Object(d.a)(o,2),c=i[0],h=i[1],g=Object(n.useState)(""),D=Object(d.a)(g,2),L=D[0],F=D[1],q=Object(n.useState)(""),_=Object(d.a)(q,2),M=_[0],Q=_[1],V=Object(n.useState)(""),X=Object(d.a)(V,2),Y=X[0],Z=X[1],$=Object(n.useState)(!1),K=Object(d.a)($,2),ee=K[0],te=K[1],ae=Object(n.useState)({id:pe,count:0,checkedCount:0,onlineCount:0,offlineCount:0}),ne=Object(d.a)(ae,2),re=ne[0],se=ne[1],oe=Object(n.useState)({}),ue=Object(d.a)(oe,2),he=ue[0],me=ue[1],fe=function(e){return!G(e)},de=Object(n.useState)(!1),ge=Object(d.a)(de,2),be=ge[0],Ee=ge[1],ye=Object(n.useState)(!1),ve=Object(d.a)(ye,2),we=ve[0],Ce=ve[1],ke=Object(n.useState)(!1),je=Object(d.a)(ke,2),xe=je[0],Oe=je[1],Be=Object(n.useState)(fe(L)),Ne=Object(d.a)(Be,2),Se=Ne[0],Ae=Ne[1],Re=Object(n.useState)(""),He=Object(d.a)(Re,2),Ue=He[0],Te=He[1],ze=function(e){if(e){for(var t={},a=0;a<ce.length;a++){var n=ce[a].replace(":hash",e),r=s+n,o=r+"#x-ipfs-companion-no-redirect";t[r]={displayUrl:r,requestUrl:o,status:"checking"}}me(t);var i=Object.keys(t);se(function(e){return{count:i.length,checkedCount:0,onlineCount:0,offlineCount:0}}),i.forEach(function(e){var a,n,r=t[e],s=Date.now(),o=pe;(a=r.requestUrl,P()(a,n).then(function(e){return"object"===typeof e.data?JSON.stringify(e.data,null,2):e.data}).catch(function(e){throw e.response&&e.response.data&&(e.message=e.response.data),e})).then(function(){var t=Date.now()-s;se(function(e){var t=Object.assign({},e);return pe===o&&(t.checkedCount++,t.onlineCount++),t}),me(function(a){var n=Object.assign({},a);return n[e]&&pe===o&&(n[e].status="online",n[e].timeout=t),n})}).catch(function(t){se(function(e){var t=Object.assign({},e);return pe===o&&(t.checkedCount++,t.offlineCount++),t}),me(function(a){var n=Object.assign({},a);return n[e]&&pe===o&&(n[e].status="offline",n[e].error=t.message||"Timeout!"),n})})})}},Ie=function(e){var t=e.target.value,a=fe(t);if(F(t),Ae(a),a)Q("");else{var n=W(t);Q(n)}};function De(e,t){"clickaway"!==t&&Ee(!1)}function Le(e,t){"clickaway"!==t&&Ce(!1)}var Pe=function(){var e=Object(f.a)(m.a.mark(function e(){var t,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(M){e.next=4;break}return Te("Please input a valid matters article url"),Ce(!0),e.abrupt("return");case 4:return pe++,h(!0),se({count:0,checkedCount:0,onlineCount:0,offlineCount:0}),me({}),e.prev=8,e.next=11,J({mediaHash:M});case 11:(t=e.sent)&&t.article&&t.article.dataHash?(a=t.article.dataHash,Z(a),ze(a)):t&&null===t.article?(Te("Can't get the matters dataHash, this may cause by your matters url"),Ce(!0)):(Te("Can't get the matters dataHash, this may cause by our convert server error"),Ce(!0)),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(8),Te(e.t0.message),Ce(!0);case 19:h(!1);case 20:case"end":return e.stop()}},e,null,[[8,15]])}));return function(){return e.apply(this,arguments)}}(),Fe=function(){Ee(!0)};Object(n.useEffect)(function(){xe||Oe(!0),!xe&&a?(te(!0),Ie({target:{value:a}})):xe&&ee&&(te(!1),Pe())});var Ge="".concat(window.location.protocol,"//").concat(window.location.host,"/?url=").concat(encodeURIComponent(L));return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.heroContent},r.a.createElement(l.a,{maxWidth:"md"},r.a.createElement(p.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Convert"," ",r.a.createElement(u.a,{href:"https://matters.news",target:"_blank",rel:"noopener noreferrer"},"Matters")," ","to"," ",r.a.createElement(u.a,{href:"https://contributionls.github.io/public-gateway-checker/",target:"_blank",rel:"noopener noreferrer"},"IPFS")))),r.a.createElement(b.a,null,r.a.createElement(E.a,{id:"url",required:!0,autoFocus:!0,inputProps:{autoComplete:"off"},label:"Matters Article Url",type:"url",placeholder:"https://matters.news/@leungkaichihk/%E9%A6%99%E6%B8%AF%E7%AC%AC%E4%B8%80%E8%AA%B2-%E7%B0%A1%E4%BB%8B%E5%8F%8A%E7%9B%AE%E9%8C%84-zdpuB2J818r8yUSDeZ4vDARrnQ4ut3S2UYjALXHJ16jp25w4P",onChange:Ie,value:L,variant:"outlined",margin:"normal",error:Se,helperText:Se?"URL is invalid!":""}),r.a.createElement(b.a,{row:!0,className:e.centerButton},r.a.createElement(y.a,{onClick:Pe,color:"primary",size:"large",variant:"outlined",disabled:c,className:"".concat(e.button)},c?r.a.createElement(v.a,{size:20,color:"inherit",className:e.buttonIcon}):r.a.createElement(T.a,{fontSize:"small",className:e.buttonIcon}),"Convert"),r.a.createElement(y.a,{onClick:function(){Ie({target:{value:"https://matters.news/@leungkaichihk/%E9%A6%99%E6%B8%AF%E7%AC%AC%E4%B8%80%E8%AA%B2-%E7%B0%A1%E4%BB%8B%E5%8F%8A%E7%9B%AE%E9%8C%84-zdpuB2J818r8yUSDeZ4vDARrnQ4ut3S2UYjALXHJ16jp25w4P"}}),te(!0)},variant:"outlined",color:"default",size:"large",className:"".concat(e.button," ").concat(e.buttonRight)},"Example")),Y?r.a.createElement("div",null,r.a.createElement(w.a,{className:e.divider}),r.a.createElement(C.a,{"aria-labelledby":"nested-list-subheader",subheader:r.a.createElement(k.a,{component:"div",className:e.subheader,id:"nested-list-subheader"},re.checkedCount,"/",re.count," gateways,"," ",re.onlineCount," are online,"," ",re.offlineCount," are offline"),dense:!1},Object.keys(he).map(function(e){return he[e]}).map(function(t,a){return r.a.createElement(j.a,{key:"key_".concat(a)},r.a.createElement(x.a,{className:"".concat(e.center," ").concat(e.overAvatar)},r.a.createElement("div",null,"init"===t.status?r.a.createElement(z.a,{color:"disabled"}):null,"checking"===t.status?r.a.createElement(v.a,{size:20,color:"secondary",className:e.buttonIcon}):null,"offline"===t.status?r.a.createElement(I.a,{color:"error"}):null,"online"===t.status?r.a.createElement(U.a,{color:"primary"}):null)),r.a.createElement(O.a,{primaryTypographyProps:{className:e.listItem},primary:r.a.createElement(u.a,{target:"_blank",rel:"noopener noreferrer",href:t.displayUrl},t.displayUrl),secondary:"offline"===t.status?t.error:"online"===t.status?"".concat(t.timeout,"ms"):null}),r.a.createElement(B.a,null,r.a.createElement(H.CopyToClipboard,{text:t.displayUrl,onCopy:Fe},r.a.createElement(N.a,{edge:"end","aria-label":"copy"},r.a.createElement(U.b,null)))))})),r.a.createElement(w.a,{className:e.divider}),r.a.createElement(p.a,{variant:"h5",component:"h3"},"Want a link that automatically checks the IPFS address of the article?"),r.a.createElement(S.a,{className:e.inputRoot},r.a.createElement(A.a,{value:Ge,className:e.input,placeholder:"Search Google Maps",inputProps:{"aria-label":"search google maps"}}),r.a.createElement(N.a,{className:e.iconButton,"aria-label":"copy"},r.a.createElement(H.CopyToClipboard,{text:Ge,onCopy:Fe},r.a.createElement(U.b,null))))):null),r.a.createElement(R.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:be,autoHideDuration:1500,onClose:De},r.a.createElement(ie,{onClose:De,variant:"success",message:"The url has be copied!"})),r.a.createElement(R.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:we,autoHideDuration:2500,onClose:Le},r.a.createElement(ie,{onClose:Le,variant:"error",message:Ue})))}var he=Object(i.a)(function(e){return{root:{display:"flex",flexDirection:"column",flexGrow:1,minHeight:"100vh",backgroundColor:e.palette.background.paper},grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},link:{margin:e.spacing(1)},title:{flexGrow:1},space:{marginRight:e.spacing(1),marginLeft:e.spacing(1)},footer:{paddingTop:e.spacing(1),paddingBottom:e.spacing(2),marginTop:"auto",backgroundColor:"#f2f2f2",borderTop:"1px solid #e4e4e4",lineHeight:40},flex:{display:"flex",justifyContent:"center"}}});function me(){var e=he();return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null),r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:"sharethis-inline-share-buttons",style:{padding:10}}),r.a.createElement(l.a,{maxWidth:"md"},r.a.createElement(ue,null)),r.a.createElement("footer",{className:e.footer},r.a.createElement(l.a,{maxWidth:"sm"},r.a.createElement("div",{className:e.flex},r.a.createElement(p.a,{variant:"body2",className:e.space},r.a.createElement(u.a,{color:"textSecondary",href:"https://github.com/contributionls/matters2ipfs"},"Github")),r.a.createElement(p.a,{variant:"body2",className:e.space},r.a.createElement(u.a,{color:"textSecondary",href:"https://github.com/contributionls/matters2ipfs/blob/master/README.md#getting_started"},"Docs")),r.a.createElement(p.a,{variant:"body2",className:e.space},r.a.createElement(u.a,{color:"textSecondary",href:"https://github.com/contributionls/matters2ipfs/issues/new"},"Submit Gateway")),r.a.createElement(p.a,{variant:"body2",className:e.space},r.a.createElement(u.a,{color:"textSecondary",href:"https://github.com/contributionls/matters2ipfs/blob/master/Terms.md"},"Terms of Use")),r.a.createElement(p.a,{variant:"body2",className:e.space},r.a.createElement(u.a,{color:"textSecondary",href:"https://matters.news/@deserve"},"Follow")))))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe=a(3982),de=a(88),ge=Object(de.a)({palette:{primary:{main:"#0d6763"},secondary:{main:"#c0a46b"}}});o.a.render(r.a.createElement(function(){return r.a.createElement(fe.a,{theme:ge},r.a.createElement(me,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[3887,1,2]]]);
//# sourceMappingURL=main.e9df08dc.chunk.js.map