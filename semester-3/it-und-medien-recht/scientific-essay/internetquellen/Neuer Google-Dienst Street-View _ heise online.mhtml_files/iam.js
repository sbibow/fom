var szmvars="";!function(e){for(var t="iom".split(",")||["iom"],o=0,n=(t=4<t.length?t.slice(0,3):t).length;o<n;o+=1)e[t[o]]=function(){var i,g,a="dummy",r="de.ioam.de/tx.io",s="de.ioam.de/aid.io",t="de.ioam.de/optin.php?re=",h="irqs.ioam.de",c=".ioam.de/tx.io",l=".ioam.de/aid.io",p=["imarex"],u=".iocnt.net/tx.io",m=".iocnt.net/aid.io",w="irqs.iocnt.net",d=["at"],f=["","inst","init","open","clse","play","resm","stop","fowa","bakw","recd","paus","forg","bakg","dele","refr","kill","view","alve","fini","mute","aforg","abakg","aclse","sple","scvl","serr","spyr","smdr","sfpl","sfqt","ssqt","stqt","soqt","sofc","scfc","scqt","splr","spli","sprs","spre","smrs","smre","sors","sore","sack","sapl","sapa","snsp"],v=[],y=1,_=0,k=1,b="",A="Leercode_nichtzuordnungsfaehig",C={onfocus:"aforg",onblur:"abakg",onclose:"aclse"},S=2,T="[]".match(/[A-Za-z0-9]+/g)||[],I="ioam2018",O=0,F="6a7a45fd771fdc7c259403ec81951301",D="ioamout",E=6e4,N=5e3,x=1e4,B=3e4,P=1e4,j=3e4,M=6e4,z=3e5,q=10,U=null,o=null,L={},K=864e5,R={},J=0,V=0,G=0,X=864e5,H=18e4,Z="me.ioam.de",e=_e(location.hostname),W=[730,785,722],Q=!1,$={name:"iom_consent",domain:0<e.length?e.slice(7,e.length-1):"",expires:new Date(2147483647e3).toUTCString(),path:"/"};function n(e){ee(e,{vendors:W,cookie:$,resultKey:"ct"},R)}function Y(i,r){var a=Date.now(),s="";Object.keys(r).forEach(function(e,t,o){var n=r[e];"name"===e?(s+=n+"="+i+"&"+a,s+=t<o.length?"; ":""):n&&(s+=e+"="+n,s+=t<o.length?"; ":"")}),document.cookie=s}function ee(e,s,t){function c(c,e){for(var t=[1],o=0,n=e.length;o<n;o+=1){var i,r,a,s=e[o];!0===c.vendor.consents[s]||!0===c.vendor.legitimateInterests[s]?(a=[],i=c.vendor.legitimateInterests[s],r=0<Object.keys(c.specialFeatureOptins).length,a=function(e,t){function o(t){return function(e){return!0===t[e]}}function n(o){return function(e){var t=parseInt(e)+o;return Math.pow(2,t)}}var i,r,a=[],s=Object.keys(c.purpose.consents).filter(o(c.purpose.consents)).map(n(-1));return e&&(a=Object.keys(c.purpose.legitimateInterests).filter(o(c.purpose.legitimateInterests)).map(n(-1))),0<a.length&&(r=a,s=(i=s).concat(r.filter(function(e){return i.indexOf(e)<0}))),t&&(s=s.concat(Object.keys(c.specialFeatureOptins).filter(o(c.specialFeatureOptins)).map(n(9)))),s}((e[o],i),r),t.push(function(e){for(var t=0,o=0,n=e.length;o<n;o+=1)t|=e[o];return t}(a))):t.push(0)}return function(e){for(var t="",o=0,n=e.length;o<n;o+=1){t+=function(e,t){for(;e.length<t;)e="0"+e;return e}(e[o].toString(16),0===o?2:4)}return t}(t)}function l(e,t){for(var o="",n=0,i=e.length;n<i;n+=1)o+="0000";return o=(t?"01":"00")+o}function o(i,r,a){return function(e,t){var o,n;t&&-1<["tcloaded","useractioncomplete"].indexOf(e.eventStatus)?((o=e.gdprApplies?c(e,r.vendors):l(r.vendors,!0))!==i&&(a&&r.resultKey&&(a[r.resultKey]=o),Y(o,s.cookie)),__tcfapi("removeEventListener",2,function(){},e.listenerId)):(n=l(r.vendors,!0),a&&r.resultKey&&(a[r.resultKey]=n),Y(n,s.cookie))}}var n,i,r,a,p,u,m,d,f="__tcfapi"in window,g=(n=s.cookie,a="",(p=document.cookie.match(new RegExp("(^| )"+n.name+"=([^;]+)")))&&(a=(r=p[2].split("&"))[0],i=r[1]),{value:a,date:i}.value),h=l(s.vendors,f);f&&(t&&s.resultKey&&(t[s.resultKey]=g||h),__tcfapi("addEventListener",2,o(g||h,s,t)),!1===Q&&(__tcfapi("addEventListener",2,(u=g||h,m=s,d=t,function(e,t){t&&"cmpuishown"===e.eventStatus&&__tcfapi("addEventListener",2,o(u,m,d))})),Q=!0)),e&&e!==g&&!1==f?(Y(e,s.cookie),t&&s.resultKey&&(t[s.resultKey]=e)):!e&&g&&!1==f?t&&s.resultKey&&(t[s.resultKey]=g):e||g||!1!=f||(Y(h,s.cookie),t&&s.resultKey&&(t[s.resultKey]=h))}var te,oe=function(e){e&&e.hasOwnProperty("block-status")&&"NONE"===e["block-status"].toUpperCase()&&(o&&o.parentNode.removeChild(o),o=re(e["invite-url"]))};function ne(e){for(var t=0,o=0;o<e.length;++o)t+=e.charCodeAt(o),t+=t<<10,t^=t>>6;return t+=t<<3,t^=t>>11,t+=t<<15,(t=Math.abs(t&t)).toString(36)}function ie(){var e=window.navigator,t=e.userAgent;if(t+=se(),0<e.plugins.length)for(var o=0;o<e.plugins.length;o++)t+=e.plugins[o].filename+e.plugins[o].version+e.plugins[o].description;if(0<e.mimeTypes.length)for(o=0;o<e.mimeTypes.length;o++)t+=e.mimeTypes[o].type;if(/MSIE (\d+\.\d+);/.test(e.userAgent))try{t+=function(){var e,t="",o=["7790769C-0471-11D2-AF11-00C04FA35D02","89820200-ECBD-11CF-8B85-00AA005B4340","283807B5-2C60-11D0-A31D-00AA00B92C03","4F216970-C90C-11D1-B5C7-0000F8051515","44BBA848-CC51-11CF-AAFA-00AA00B6015C","9381D8F2-0288-11D0-9501-00AA00B911A5","4F216970-C90C-11D1-B5C7-0000F8051515","5A8D6EE0-3E18-11D0-821E-444553540000","89820200-ECBD-11CF-8B85-00AA005B4383","08B0E5C0-4FCB-11CF-AAA5-00401C608555","45EA75A0-A269-11D1-B5BF-0000F8051515","DE5AED00-A4BF-11D1-9948-00C04F98BBC9","22D6F312-B0F6-11D0-94AB-0080C74C7E95","44BBA842-CC51-11CF-AAFA-00AA00B6015B","3AF36230-A269-11D1-B5BF-0000F8051515","44BBA840-CC51-11CF-AAFA-00AA00B6015C","CC2A9BA0-3BDD-11D0-821E-444553540000","08B0E5C0-4FCB-11CF-AAA5-00401C608500","D27CDB6E-AE6D-11CF-96B8-444553540000","2A202491-F00D-11CF-87CC-0020AFEECF20"];document.body.addBehavior("#default#clientCaps");for(var n=0;n<o.length;n++)t+=null!==(e=document.body.getComponentVersion("{"+o[n]+"}","ComponentID"))?e:"null";return t}()}catch(e){}return ne(t)}function re(e){var t=document.createElement("script");t.type="text/javascript",t.src=e;var o=document.getElementsByTagName("head")[0];return!!o&&(o.appendChild(t),t)}function ae(e,t){if(".ioam.de"==e.split("/")[2].slice(e.split("/")[2].length-8)||".iocnt.net"==e.split("/")[2].slice(e.split("/")[2].length-10))switch(t){case 1:U&&U.parentNode.removeChild(U),(U=re(e+"&mo=1"))||((new Image).src=e+"&mo=0");break;case 2:(new Image).src=e+"&mo=0";break;case 3:n=e,(i=document.querySelectorAll(".iamsendbox")).length<q||i[0].remove(),o(n);break;case 0:default:document.write('<script src="'+e+'&mo=1"><\/script>')}function o(e){var t=document.createElement("iframe");t.className="iamsendbox",t.style.position="absolute",t.style.left=t.style.top="-999px",t.src=e+"&mo=1",document.body.appendChild(t)}var n,i}function se(){return screen.width+"x"+screen.height+"x"+screen.colorDepth}function ce(e,t){for(var o=0;o<e.length;o++)if(e[o]==t)return 1}function le(e){return 255<(e=(e=(e=e||"").replace(/[?#].*/g,"")).replace(/[^a-zA-Z0-9,_\/-]+/g,".")).length&&(e=e.substr(0,254)+"+"),e}function pe(e){var t,o,n,i,r;for(t in R={},e)e.hasOwnProperty(t)&&("cn"!=t||"cn"==t&&ce(p,e[t])||ce(d,e[t]))&&(R[t]=e[t]);R.hasOwnProperty("fp")&&(R.fp=""!=R.fp&&void 0!==R.fp?R.fp:A,R.fp=le(R.fp),R.pt="FP"),R.hasOwnProperty("np")&&(R.np=""!=R.np&&void 0!==R.np?R.np:A,R.np=le(R.np),R.pt="NP"),R.hasOwnProperty("xp")&&(R.xp=""!=R.xp&&void 0!==R.xp?R.xp:A,R.xp=le(R.xp),R.pt="XP"),R.hasOwnProperty("cp")&&(R.cp=""!=R.cp&&void 0!==R.cp?R.cp:A,R.cp=le(R.cp),R.pt="CP"),R.hasOwnProperty("ms")&&(R.ms=""!=R.ms&&void 0!==R.ms?R.ms:""),R.pt||(R.cp=A,R.pt="CP",R.er="N13"),R.hasOwnProperty("ps")?ce(["ack","lin","pio","out"],R.ps)||(R.ps="lin",R.er="N23"):(R.ps="lin",R.er="N22"),R.rf=3<=(o=document.referrer.split("/")).length?o[2]:"",(!R.hasOwnProperty("sur")||R.hasOwnProperty("sur")&&"yes"!=R.sur)&&(R.r2=(255<(n=(n=(n=document.referrer)||"").replace(/[^a-zA-Z0-9,_\/:-]+/g,".")).length&&(n=n.substr(0,254)+"+"),n)),R.ur=document.location.host,R.xy=se(),R.lo="DE/Bremen",R.cb="001b",R.i2="001b3fcacabbe4d085fd771fd",R.ep=parseInt("1639300173",10),R.vr="418",R.id=ie(),R.st=R.st?R.st:a,(!R.hasOwnProperty("sc")||R.hasOwnProperty("sc")&&"no"!=R.sc)&&(i=ve(),R.i3=i.cookie,R.n1=i.length),(ce(T,R.st)||R.hasOwnProperty("sc")&&"yes"==R.sc)&&"nocookie"==R.i3&&(R.i3=ke()),R.hasOwnProperty("cn")||"_"!=R.st.charAt(2)||(r=R.st.substr(0,2),ce(p,r)||ce(d,r)?R.cn=r:R.er="E12");try{R.dntt=window.navigator.msDoNotTrack&&"1"==window.navigator.msDoNotTrack||window.navigator.doNotTrack&&("yes"==window.navigator.doNotTrack||"1"==window.navigator.doNotTrack)?"1":"0"}catch(e){}}function ue(e){var t,o="";if(e=e||"",function(){try{clearInterval(i)}catch(e){}}(),G&&!function(){if(!(2&S)||void 0===R.nt?1&S:R.nt){if(window.navigator.msDoNotTrack&&"1"==window.navigator.msDoNotTrack)return 1;if(window.navigator.doNotTrack&&("yes"==window.navigator.doNotTrack||"1"==window.navigator.doNotTrack))return 1}}()&&(!y||y&&ce(f,e))&&"out"!==R.ps){R.lt=(new Date).getTime(),R.ev=e;var n=r;for(t in R.cn&&ce(p,R.cn)?n=R.cn+c:R.cn&&ce(d,R.cn)&&(n=R.cn+u),!ce(v,R.st)&&((/iPhone/.test(window.navigator.userAgent)||/iPad/.test(window.navigator.userAgent))&&/Safari/.test(window.navigator.userAgent)&&!/Chrome/.test(window.navigator.userAgent)&&!/CriOS/.test(window.navigator.userAgent)||/Maple_201/.test(window.navigator.userAgent)||/SMART-TV/.test(window.navigator.userAgent)||/SmartTV201/.test(window.navigator.userAgent))&&(n=R.cn&&ce(p,R.cn)?R.cn+l:R.cn&&ce(d,R.cn)?R.cn+m:s,g=3,R.hasOwnProperty("sur")&&"yes"==R.sur?R.u2=window.location.origin:R.u2=document.URL),R)R.hasOwnProperty(t)&&"cs"!=t&&"url"!=t&&(o=o+encodeURIComponent(t).slice(0,8)+"="+encodeURIComponent(R[t]).slice(0,2048)+"&");return o=o.slice(0,4096),R.cs=ne(o),R.url="https://"+n+"?"+o+"cs="+R.cs,ae(R.url,g),ce(["play","resm","alve","mute","sfqt","ssqt","stqt","sapl","snsp"],e)&&(1===g||3===g)&&R.hasOwnProperty("hb")&&function(){switch(R.hb){case"adshort":E=N;break;case"admedium":E=x;break;case"adlong":E=B;break;case"short":E=P;break;case"medium":E=j;break;case"long":E=M;break;case"extralong":E=z;break;default:E=0}if(0!=E)try{i=setInterval(function(){return ue("alve")},E)}catch(e){}}(),R}return{}}function me(e,t){return de(e,t),ue(R.ev)}function de(e,t){var o,n,i,r,a,s,c,l,p,u,m,d,f;return ee(e.ct,{vendors:W,cookie:$,resultKey:"ct"},e),g=t,pe(e),R.sv&&(R.sv="in"==R.sv&&1==g?"i2":R.sv),R.sv&&"ke"!==R.sv&&!1===(o=e.ct,n=W,i=785,r=9,p=!(a=-1),"string"!=typeof o||o.length!==2+4*n.length||-1<(s=n.indexOf(i))&&(c=2+4*(s+1),p=(parseInt(o.slice(2,c),16)&(l=Math.pow(2,r+a)))===l),p)&&(R.sv="ke"),function(){if((1==_||"on"==R.tb)&&"off"!=R.tb&&!J)for(var e in g=J=1,C)!function(e){var t=window[e];window[e]=function(){b!=C[e]&&(b=C[e],ue(C[e])),"function"==typeof t&&t()}}(e)}(),function(){szmvars=R.st+"//"+R.pt+"//"+R.cp+"//VIA_SZMNG";var e,t,o,n,i="i2"==R.sv?"in":R.sv,r=h;R.cn&&(i+="_"+R.cn,"at"==R.cn&&(r=w)),L={siteIdentifier:R.cp,offerIdentifier:R.st,sampleType:i,pixelType:R.pt,contentType:R.cp,host:r,port:"",isFadeoutFlash:!0,isFadeoutFrame:!0,isFadeoutForm:!0,positionTop:10,positionLeft:100,zIndex:11e5,popupBlockDuration:K,keysForQueryParam:["offerIdentifier","siteIdentifier","sampleType","pixelType","isFadeoutFlash","isFadeoutFrame","isFadeoutForm","positionTop","positionLeft","zIndex"]},void 0!==window.iam_zindex&&(L.zIndex=window.iam_zindex),void 0!==window.iam_fadeout_flash&&(L.isFadeoutFlash=window.iam_fadeout_flash),void 0!==window.iam_fadeout_iframe&&(L.isFadeoutFrame=window.iam_fadeout_iframe),void 0!==window.iam_fadeout_form&&(L.isFadeoutForm=window.iam_fadeout_form),void 0!==window.iam_position_top&&(L.positionTop=window.iam_position_top),void 0!==window.iam_position_left&&(L.positionLeft=window.iam_position_left),function(){for(var e=document.cookie.split(";"),t=0;t<e.length;t++)if(e[t].match("POPUPCHECK=.*")){var o=new Date,n=o.getTime();if(o.setTime(e[t].split("=")[1]),n<=o.getTime())return!0}return!1}()||(k&&!V&&"ke"!==R.sv&&"dz"===R.sv&&(V=1,iam_ng_nxss()),!k||V||"ke"===R.sv||"in"!==R.sv&&"mo"!==R.sv&&"i2"!==R.sv||(V=1,function(e){var t=new Date;t.setTime(t.getTime()+e);var o="expires="+t.toUTCString();document.cookie="POPUPCHECK="+t.getTime().toString()+";"+o+";path=/"}(L.popupBlockDuration),e="identitystatus",t="?"+function(e){var t=[];for(var o in e)e.hasOwnProperty(o)&&t.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return t.join("&")}(function(e,t){for(var o,n={},i=t.length,r=0;r<i;r++)o=t[r],e.hasOwnProperty(o)&&(n[o]=e[o]);return n}(L,L.keysForQueryParam)),window.XDomainRequest&&9===document.documentMode?re(o="https://"+L.host+"/"+e+"/identity.js"+t+"&callback=iom.gi&c="+Math.random()):(o="https://"+L.host+"/"+e+t+"&c="+Math.random(),(n=new XMLHttpRequest).onreadystatechange=function(){var e;n.readyState===XMLHttpRequest.DONE&&200===n.status&&(e=JSON.parse(n.responseText),oe(e))},n.open("GET",o,!0),n.withCredentials=!0,n.send(null))))}(),function(){try{for(var e=document.cookie.split(";"),t=0;t<e.length;t++)if(e[t].match(D+"=.*"))return R.ps="out"}catch(e){return}}(),G=1,"yes"!==R.oer||window.IVW||document.IVW||(u="http"===window.location.protocol.slice(0,4)?window.location.protocol:"https:",m=R.co?R.co+"_SENT_VIA_MIGRATION_TAG":"SENT_VIA_MIGRATION_TAG",d=R.oc?R.oc:!R.cp||R.cp==A?"":R.cp,f=null!==R.pt?R.pt:"CP",(new Image).src=u+"//"+R.st+".ivwbox.de/cgi-bin/ivw/"+f.toUpperCase()+"/"+d+";"+m+"?r="+escape(document.referrer)+"&d="+1e5*Math.random()),{}}function fe(e,t){de(e,t);var o="object"==typeof localStorage&&"function"==typeof localStorage.getItem?localStorage.getItem("ioam_smi"):null,n="object"==typeof localStorage&&"function"==typeof localStorage.getItem?localStorage.getItem("ioam_site"):null,i="object"==typeof localStorage&&"function"==typeof localStorage.getItem?localStorage.getItem("ioam_bo"):null;return null!==o&&null!==n&&null!==i?(R.mi=o,R.fs=R.st,R.st=n,R.bo=i,R.fs==R.st?R.cp="___hyb2___"!==R.cp.slice(0,10)?"___hyb2___"+R.fs+"___"+R.cp:R.cp:R.cp="___hyb___"!==R.cp.slice(0,9)?"___hyb___"+R.fs+"___"+R.cp:R.cp,ue(R.ev)):null!==o&&null!==i||"http"!==window.location.protocol.slice(0,4)||/IOAM\/\d+\.\d+/.test(window.navigator.userAgent)?{}:ue(R.ev)}function ge(e){if(null!==localStorage.getItem("ioam_smi")&&null!==localStorage.getItem("ioam_site")&&null!==localStorage.getItem("ioam_bo")&&localStorage.getItem("ioam_smi")===e)return{};R.fs=R.st;var t=null,o=null;if("string"==typeof e&&"object"==typeof JSON&&"function"==typeof JSON.parse)try{(t=JSON.parse(e)).hasOwnProperty("library")?t.library.hasOwnProperty("offerIdentifier")?t.library.offerIdentifier?o=t.library.offerIdentifier:R.er="JSON(E10): offerIdentifier not valid":R.er="JSON(E10): no key offerIdentifier":R.er="JSON(E10): no key library"}catch(e){R.er="JSON(E10): "+e}return null!==o&&localStorage.setItem("ioam_site",o),R.st=o,R.mi=e,R.bo=(new Date).getTime(),localStorage.setItem("ioam_smi",R.mi),localStorage.setItem("ioam_bo",R.bo),R.fs==R.st?R.cp="___hyb2___"!==R.cp.slice(0,10)?"___hyb2___"+R.fs+"___"+R.cp:R.cp:R.cp="___hyb___"!==R.cp.slice(0,9)?"___hyb___"+R.fs+"___"+R.cp:R.cp,ue(R.ev)}function he(){var e="http"===window.location.protocol.slice(0,4)?window.location.protocol:"https://"+t;window.open(e,"_blank").focus()}function we(){var e=1e11;return(Math.floor(9e11*Math.random())+e).toString(16)+(Math.floor(9e11*Math.random())+e).toString(16)+function(e){for(var t=[],o=0,n=e.length;o<n;o++){var i=Number(e.charCodeAt(o)).toString(16);t.push(i)}return t.join("")}(R.cb)+(Math.floor(9e11*Math.random())+e).toString(16)}function ve(){try{for(var e=document.cookie.split(";"),t=0;t<e.length;t++)if(e[t].match(I+"=.*")){var o=e[t].split("=")[1].replace("!",":"),n=o.split(":"),i=n.slice(0,n.length-1).join(":"),r=n.slice(-1).pop();if(ne(i)===r)return R.hasOwnProperty("i3")&&R.i3||(a=o,g=f=d=m=u=p=l=c=s=void 0,s=_e(location.hostname),c=a.split(":")[1],l=parseInt(a.split(":")[4])+1,p=new Date((new Date).setTime(c)),u=new Date,m=R.st?R.st:"nosite",d=R.cp?R.cp:R.np?R.np:R.fp?R.fp:"nocode",f=R.ev?R.ev:"noevent",g=(g=a.split(":").slice(0,4).join(":")+":"+l+":"+m+":"+d+":"+f+":"+u.getTime().toString())+":"+ne(g),document.cookie=I+"="+g+";expires="+p.toUTCString()+";"+s+";path=/;"),{cookie:o,length:e.length};R.er="N19";try{O<3?(O++,ke(2e3)):R.er="N20"}catch(e){R.er="N20"}}}catch(e){return{cookie:"nocookie",length:0}}var a,s,c,l,p,u,m,d,f,g;return{cookie:"nocookie",length:e.length}}function ye(){return"nocookie"!=ve().cookie}function _e(e){var t,o,n="acadaeafagaialamaoaqarasatauawaxazbabbbdbebfbgbhbibjbmbnbobrbsbtbwbybzcacccdcfcgchcickclcmcncocrcucvcwcxcyczdjdkdmdodzeceeegereseteufifjfkfmfofrgagdgegfggghgiglgmgngpgqgrgsgtgugwgyhkhmhnhrhthuidieiliminioiqirisitjejmjojpkekgkhkikmknkpkrkwkykzlalblclilklrlsltlulvlymamcmdmemgmhmkmlmmmnmompmqmrmsmtmumvmwmxmymznancnenfngninlnonpnrnunzompapepfpgphpkplpmpnprpsptpwpyqarerorsrurwsasbscsdsesgshsiskslsmsnsosrssstsvsxsysztctdtftgthtjtktltmtntotrtttvtwtzuaugukusuyuzvavcvevgvivnvuwfwsyeytzazmzw".match(/.{1,2}(?=(.{2})+(?!.))|.{1,2}$/g),i=["www","m","mobile"],r=e.split("."),a=[],s=[],c="",l="",p=0;if(!e)return"";if(ce(n,r[r.length-1])){for(p=r.length-1;0<=p;--p){if(!(p>=r.length-3&&r[p].length<=4)){s.push(r[p]);break}a.push(r[p])}for(p=0,o=(a=a.reverse()).length;p<o;p+=1)ce(i,a[p])||(c+=p<o?"."+a[p]:a[p]);ce(i,l=(s=s.reverse())[s.length-1]||"")&&(l="")}else l=r.slice(r.length-2,r.length).join(".")||"";return(t=l+c)&&4<t.length&&1<t.split(".").length?"domain="+("."===t[0]?t:t?"."+t:"")+";":""}function ke(e){e=e||24*(Math.floor(66*Math.random())+300)*60*60*1e3;var t=_e(location.hostname),o=new Date((new Date).setTime((new Date).getTime()+e)),n=new Date,i=R.st?R.st:"nosite",r=R.cp?R.cp:R.np?R.np:R.fp?R.fp:"nocode",a=R.ev?R.ev:"noevent",s=R.hasOwnProperty("i2")?R.i2:we(),c=s+":"+o.getTime().toString()+":"+n.getTime().toString()+":"+t.replace("domain=","").replace(";","")+":1:"+i+":"+r+":"+a+":"+n.getTime().toString(),l=(l=s+":"+o.getTime().toString()+":"+n.getTime().toString()+":"+t.replace("domain=","").replace(";","")+":2:"+i+":"+r+":"+a+":"+n.getTime().toString())+":"+ne(l);return document.cookie=I+"="+l+";expires="+o.toUTCString()+";"+t+";path=/;",ye()||(document.cookie=I+"="+l+";expires="+o.toUTCString()+";path=/;",R.er="N25",ye())?c:(R.er="N26","nocookie")}function be(e){e=e||864e5;var t=_e(location.hostname),o=new Date((new Date).setTime((new Date).getTime()+e));document.cookie=D+"=stop;expires="+o.toUTCString()+";"+t+";path=/;",ke(2e3)}function Ae(){be(2e3),ke(2e3)}function Ce(){if("object"==typeof localStorage&&"function"==typeof localStorage.getItem){if(null!==localStorage.getItem("ioamplusdata")&&null!==localStorage.getItem("ioamplusttl")){var e=new Date,t=e.getTime();if(e.setTime(localStorage.getItem("ioamplusttl")),t<=e.getTime())return!0}var o="https://"+Z+"/soziodata2.php?sc="+F+"&st="+R.st+"&id="+R.id,n=(i="GET",r=o,"withCredentials"in(a=new XMLHttpRequest)?(a.open(i,r,!0),a.withCredentials=!0):"undefined"!=typeof XDomainRequest?(a=new XDomainRequest).open(i,r):a=null,a);if(n)return n.onload=function(){var e=n.responseText,t=new Date;try{"0"==e.split(":")[1].split(",")[0]?(t.setTime(t.getTime()+H),localStorage.setItem("ioamplusttl",t.getTime().toString()),null==localStorage.getItem("ioamplusdata")&&localStorage.setItem("ioamplusdata",e)):(t.setTime(t.getTime()+X),localStorage.setItem("ioamplusdata",e),localStorage.setItem("ioamplusttl",t.getTime().toString()))}catch(e){}},n.send(),!0}var i,r,a;return!1}return(window.postMessage||window.JSON&&"[object Function]"!=={}.toString.call(window.JSON.parse)&&"[object Function]"!=={}.toString.call(window.JSON.stringify))&&(te=function(e){try{var t=JSON.parse(e.data)}catch(e){t={type:!1}}var o;"[object Object]"==={}.toString.call(t)&&"iam_data"==t.type&&(o={seq:t.seq,iam_data:{st:R.st,cp:R.cp}},e.source.postMessage(JSON.stringify(o),e.origin))},window.addEventListener?window.addEventListener("message",te):window.attachEvent("onmessage",te)),ee("",{vendors:W,cookie:$,resultKey:"ct"},R),{count:me,c:me,i:de,init:de,e:ue,event:ue,h:fe,hybrid:fe,setMultiIdentifier:ge,smi:ge,oi:he,optin:he,setoptout:be,soo:be,deloptout:Ae,doo:Ae,getInvitation:oe,gi:oe,getPlus:Ce,gp:Ce,consent:n,ct:n}}()}(window);