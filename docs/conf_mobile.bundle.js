!function(e){function t(t){for(var r,s,o=t[0],c=t[1],l=t[2],u=0,m=[];u<o.length;u++)s=o[u],i[s]&&m.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(d&&d(t);m.length;)m.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(r=!1)}r&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},i={1:0},n=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;n.push([28,0]),a()}([,,,function(e,t,a){"use strict";t.a={setMuteVideoTracks:function(e,t){e.getVideoTracks().forEach(e=>e.enabled=!t)},setMuteAudioTracks:function(e,t){e.getAudioTracks().forEach(e=>e.enabled=!t)},setMuteTrack:function(e,t){e.enabled=!t},stopStream:function(e){e.getTracks().forEach(e=>e.stop())},getUserDevices:async function(){const e={video:[],audio:[]},t=await navigator.mediaDevices.enumerateDevices();for(const a of t)"videoinput"===a.kind&&e.video.push(a),"audioinput"===a.kind&&e.audio.push(a);return e},getUserMedia:function({videoDeviceId:e,audioDeviceId:t},a){const r={video:{deviceId:e},audio:{deviceId:t}};return""===e&&(r.video=!1),""===t&&(r.audio=!1),["user","environment"].includes(a)&&(r.video.facingMode=a),navigator.mediaDevices.getUserMedia(r)},snapVideoStream:function(e,t="image/jpeg",a=1){return new Promise(async(r,i)=>{let n=document.createElement("video");n.muted=n.playsInline=!0,n.srcObject=e,await n.play().catch(i);let s=document.createElement("canvas");s.width=n.videoWidth,s.height=n.videoHeight,s.getContext("2d").drawImage(n,0,0),s.toBlob(e=>{n.pause(),n.srcObject=null,n=s=null,r(e)},t,a)})},getFakeStream:function(e){const t=document.createElement("canvas");t.width=t.height=1,t.getContext("2d");const a=t.captureStream(),r=e.createMediaStreamDestination().stream,[i]=a.getVideoTracks(),[n]=r.getAudioTracks();return new MediaStream([i,n])}}},function(e,t,a){"use strict";let r=null;t.a={getOsName:function(e){switch(!0){case/Android/.test(e):return"Android";case/iPhone|iPad|iPod/.test(e):return"iOS";case/Windows/.test(e):return"Windows";case/Mac OS X/.test(e):return"Mac";case/CrOS/.test(e):return"CromeOS";case/Firefox/.test(e):return"FirefoxOS";default:return""}},getBrowserName:function(e){switch(!0){case/CriOS/.test(e):return"iOSChrome";case/Edge/.test(e):return"Edge";case/Chrome/.test(e):return"Chrome";case/Firefox/.test(e):return"Firefox";case/MSIE|Trident/.test(e):return"IE";case/Safari\//.test(e):return"Safari";case/AppleWebKit/.test(e):return"Webkit";default:return""}},getAudioCtx:function(e){if(null!==r)return r;const t=new(e.webkitAudioContext||e.AudioContext);return r=t},setLocationHref:function(e){location.href=e}}},function(e,t,a){"use strict";var r=a(0),i=a.n(r);t.a=(({isMuted:e=!1,isSelf:t=!1})=>i.a.createElement("i",{className:`material-icons ${t&&e?"-muted":""}`},e?"mic_off":"mic"))},function(e,t,a){"use strict";var r=a(0),i=a.n(r);t.a=(({isMuted:e=!1,isSelf:t=!1})=>i.a.createElement("i",{className:`material-icons ${t&&e?"-muted":""}`},e?"videocam_off":"videocam"))},,function(e,t,a){"use strict";t.a={isValidRoomType:function(e){return"sfu"===e||"mesh"===e},isValidRoomName:function(e){return/^[0-9a-z_-]{4,32}$/.test(e)}}},function(e,t,a){"use strict";var r=a(0),i=a.n(r);t.a=(({isSpeaking:e=!1})=>i.a.createElement("i",{className:`material-icons ${e?"-speaking":"-not_speaking"}`},"equalizer"))},function(e,t,a){"use strict";t.a=class{constructor(e){this.store=e}$update(e,t){const[a,r]=e.split(".");if(!(a&&r&&a in this.store&&r in this.store[a]))throw new Error(`${a}.${r} is not defined!`);this.store[a][r]=t}}},function(e,t,a){"use strict";const r=window.Peer,i=window.ScreenShare;t.a={initPeer:function(){return new Promise((e,t)=>{const a=new r({key:"03ff6219-b58f-4310-9484-e9108e859cdd",debug:2});a.once("open",()=>{e(a),a.removeListener("error",t)}),a.once("error",t)})},isScreenShareAvailable:function(){return i.create().isScreenShareAvailable()},getScreenStreamTrack:function(e){return new Promise((t,a)=>{i.create().start(e).then(e=>t(e.getTracks()[0])).catch(a)})}}},function(e,t,a){"use strict";e.exports=function(e){var t=(e?e.ownerDocument||e:document).defaultView||window;return!(!e||!("function"==typeof t.Node?e instanceof t.Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}},function(e,t,a){"use strict";var r=a(12);e.exports=function(e){return r(e)&&3==e.nodeType}},function(e,t,a){"use strict";var r=a(20);e.exports=function(e,t,a){a=a||{};var i={fftSize:1024,bufferLen:1024,smoothingTimeConstant:.2,minCaptureFreq:85,maxCaptureFreq:255,noiseCaptureDuration:1e3,minNoiseLevel:.3,maxNoiseLevel:.7,avgNoiseMultiplier:1.2,onVoiceStart:function(){},onVoiceStop:function(){},onUpdate:function(e){}},n={};for(var s in i)n[s]=a.hasOwnProperty(s)?a[s]:i[s];var o=0,c=1,l=0,d=0,u=60,m=5,h=[],p=!0,f=void 0,v=!1,g=null,E=e.createMediaStreamSource(t),b=e.createAnalyser();b.smoothingTimeConstant=n.smoothingTimeConstant,b.fftSize=n.fftSize;var S=e.createScriptProcessor(n.bufferLen,1,1);function y(){E.connect(b),b.connect(S),S.connect(e.destination)}function N(){S.disconnect(),b.disconnect(),E.disconnect()}return y(),S.onaudioprocess=function(){var e=new Uint8Array(b.frequencyBinCount);b.getByteFrequencyData(e);var t=r(b,e,n.minCaptureFreq,n.maxCaptureFreq);if(p)return void h.push(t);t>=o&&l<u?l++:t<o&&l>d&&l--;f!==(v=l>m)&&(v?n.onVoiceStart():n.onVoiceStop(),f=v);n.onUpdate(Math.max(0,t-o)/c)},p&&(g=setTimeout(function(){p=!1;var e=(h=h.filter(function(e){return e}).sort()).length?h.reduce(function(e,t){return Math.min(e,t)},1):n.minNoiseLevel||.1;o=e*n.avgNoiseMultiplier,n.minNoiseLevel&&o<n.minNoiseLevel&&(o=n.minNoiseLevel);n.maxNoiseLevel&&o>n.maxNoiseLevel&&(o=n.maxNoiseLevel);c=1-o},n.noiseCaptureDuration)),{connect:y,disconnect:N,destroy:function(){g&&clearTimeout(g),N(),S.onaudioprocess=null}}}},function(e,t,a){"use strict";function r(e){return function(){return e}}var i=function(){};i.thatReturns=r,i.thatReturnsFalse=r(!1),i.thatReturnsTrue=r(!0),i.thatReturnsNull=r(null),i.thatReturnsThis=function(){return this},i.thatReturnsArgument=function(e){return e},e.exports=i},function(e,t,a){"use strict";e.exports={}},function(e,t,a){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var a,s,o=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in a=Object(arguments[c]))i.call(a,l)&&(o[l]=a[l]);if(r){s=r(a);for(var d=0;d<s.length;d++)n.call(a,s[d])&&(o[s[d]]=a[s[d]])}}return o}},function(e,t){e.exports=function(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}},function(e,t,a){var r=a(18);e.exports=function(e,t,a){var i=t/2,n=Math.round(e/i*a);return r(n,0,a)}},function(e,t,a){var r=a(19);function i(e,t,a,i,n){for(var s=t.context.sampleRate,o=t.frequencyBinCount,c=r(i,s,o),l=r(n,s,o),d=l-c,u=0;c<l;c++)u+=a[c]/e;return 0===d?0:u/d}e.exports=i.bind(null,255),e.exports.floatData=i.bind(null,1)},function(e,t){var a,r,i=e.exports={};function n(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function o(e){if(a===setTimeout)return setTimeout(e,0);if((a===n||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:n}catch(e){a=n}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,l=[],d=!1,u=-1;function m(){d&&c&&(d=!1,c.length?l=c.concat(l):u=-1,l.length&&h())}function h(){if(!d){var e=o(m);d=!0;for(var t=l.length;t;){for(c=l,l=[];++u<t;)c&&c[u].run();u=-1,t=l.length}c=null,d=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];l.push(new p(e,t)),1!==l.length||d||o(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=f,i.addListener=f,i.once=f,i.off=f,i.removeListener=f,i.removeAllListeners=f,i.emit=f,i.prependListener=f,i.prependOnceListener=f,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,a){"use strict";var r=a(13);e.exports=function e(t,a){return!(!t||!a)&&(t===a||!r(t)&&(r(a)?e(t,a.parentNode):"contains"in t?t.contains(a):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(a))))}},function(e,t,a){"use strict";var r=Object.prototype.hasOwnProperty;function i(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}e.exports=function(e,t){if(i(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(var s=0;s<a.length;s++)if(!r.call(t,a[s])||!i(e[a[s]],t[a[s]]))return!1;return!0}},function(e,t,a){"use strict";e.exports=function(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}},function(e,t,a){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};e.exports=i},,,function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(7),s=a.n(n),o=a(2),c=a(1),l=a(8);class d{constructor(){this.roomType="",this.roomName="",this.isAppReady=!1,this.isWelcomeOpen=!0,this.isSettingOpen=!0,this.isChatOpen=!1,this.isRoomJoin=!1,this.isUserError=!1,this.isAppError=!1}get confUrl(){const e=`#!/${this.roomType}/${this.roomName}`;return`${location.origin}${location.pathname}${e}`}get isError(){return this.isUserError||this.isAppError}setRoom({roomType:e,roomName:t}){l.a.isValidRoomName(t)&&l.a.isValidRoomType(e)?(this.roomType=e,this.roomName=t):this.isUserError=!0}handleGetUserMediaError(e){switch(e.name){case"OverconstrainedError":case"NotFoundError":this.isAppError=!0;break;default:this.isUserError=!0}console.error(e)}handleAppError(e){this.isAppError=!0,console.error(e)}handleUserError(e){this.isUserError=!0,console.error(e)}}Object(c.g)(d,{roomType:c.l,roomName:c.l,isAppReady:c.l,isWelcomeOpen:c.l,isSettingOpen:c.l,isChatOpen:c.l,isRoomJoin:c.l,isUserError:c.l,isAppError:c.l,confUrl:c.d,isError:c.d});var u=d;class m{constructor(){this.peerId="YOUR_PEER_ID",this.dispName="YOUR_NAME",this.isVideoMuted=!1,this.isAudioMuted=!1,this.isSpeaking=!1,this.videoDeviceId="",this.audioDeviceId="",this.videoDevices=[],this.audioDevices=[]}get facingMode(){return 2!==this.videoDevices.length?"environment":this.videoDeviceId===this.videoDevices[1].deviceId?"user":"environment"}get syncState(){return{peerId:this.peerId,dispName:this.dispName,isVideoMuted:this.isVideoMuted,isAudioMuted:this.isAudioMuted,isSpeaking:this.isSpeaking}}get isNoVideoDevices(){return 0===this.videoDevices.length}get isNoAudioDevices(){return 0===this.audioDevices.length}updateDevices({video:e,audio:t}){this.videoDevices=e,this.audioDevices=t,this._setDefaultDeviceIfNeeded()}_setDefaultDeviceIfNeeded(){const e=this.videoDevices.find(e=>e.deviceId===this.videoDeviceId),t=this.audioDevices.find(e=>e.deviceId===this.audioDeviceId);!1===this.isNoVideoDevices&&(e||(this.videoDeviceId=this.videoDevices[0].deviceId)),!1===this.isNoAudioDevices&&(t||(this.audioDeviceId=this.audioDevices[0].deviceId))}}Object(c.g)(m,{peerId:c.l,dispName:c.l,isVideoMuted:c.l,isAudioMuted:c.l,isSpeaking:c.l,videoDeviceId:c.l,audioDeviceId:c.l,videoDevices:c.l.ref,audioDevices:c.l.ref,syncState:c.d,facingMode:c.d,isNoVideoDevices:c.d,isNoAudioDevices:c.d,updateDevices:c.c,_setDefaultDeviceIfNeeded:c.c});var h=m;class p{constructor(){this.syncState=new Map,this.pinnedPeerId="",this.localStream={},this.remoteStreams=[]}get pinnedPeerIdDisp(){return 0!==this.pinnedPeerId.length?this.pinnedPeerId:0!==this.remoteStreams.length?this.remoteStreams[0].peerId:""}get pinnedStream(){const e=this.remoteStreams.find(e=>e.peerId===this.pinnedPeerIdDisp);return e||(0!==this.remoteStreams.length?this.remoteStreams[0]:null)}setLocalStream(e){this.localStream=e}addRemoteStream(e){const t=this.remoteStreams.find(t=>t.peerId===e.peerId);this.removeRemoteStream(t),this.remoteStreams.push(e)}removeRemoteStreamByPeerId(e){const t=this.remoteStreams.find(t=>t.peerId===e);this.removeRemoteStream(t),this.syncState.delete(e),this.pinnedPeerId===e&&(this.pinnedPeerId="")}removeRemoteStream(e){e&&this.remoteStreams.remove(e)}}Object(c.g)(p,{syncState:c.l,pinnedPeerId:c.l,localStream:c.l.ref,remoteStreams:c.l.shallow,pinnedPeerIdDisp:c.d,pinnedStream:c.d,setLocalStream:c.c,addRemoteStream:c.c,removeRemoteStreamByPeerId:c.c,removeRemoteStream:c.c});var f=p;class v{constructor(){this.bufferText="",this.lastMessage={},this.messages=[]}addMessage({text:e,timestamp:t,peerId:a},r,i){this.messages.push({id:`${a}-${t}`,text:e,dispDate:new Date(t).toLocaleTimeString().slice(0,5),thumb:r,dispName:i})}updateBuffer(e){this.lastMessage=e,this.bufferText=""}}Object(c.g)(v,{bufferText:c.l,lastMessage:c.l.ref,messages:c.l.shallow,updateBuffer:c.c});var g=v;class E{constructor(){this.items=[]}showChat(e){this._show(`${e.dispName} sent a chat`)}showJoin(e){this._show(`${e.dispName} joined`)}showLeave(e){this._show(`${e.dispName} left`)}_show(e){const t={id:Date.now(),text:e};this.items.push(t),setTimeout(()=>this.items.remove(t),1e3)}}Object(c.g)(E,{items:c.l.shallow});var b=E;var S=class{constructor(){this.ui=new u,this.user=new h,this.room=new f,this.chat=new g,this.notification=new b}},y=a(14),N=a.n(y),w=a(10),_=a(3),O=a(11),M=a(4);var D=class extends w.a{constructor(e){super(e),this._destroyVad=null;const{user:t,room:a,ui:r}=this.store;Object(c.m)(()=>[t.videoDeviceId,t.audioDeviceId],async([e,i])=>{const n=await _.a.getUserMedia({videoDeviceId:e,audioDeviceId:i},t.facingMode).catch(e=>r.handleGetUserMediaError(e));r.isError||(a.localStream instanceof MediaStream&&_.a.stopStream(a.localStream),r.isAppReady=!0,t.isVideoMuted&&_.a.setMuteVideoTracks(n,!0),t.isAudioMuted&&_.a.setMuteAudioTracks(n,!0),a.setLocalStream(n))}),Object(c.m)(()=>t.isVideoMuted,e=>_.a.setMuteVideoTracks(a.localStream,e)),Object(c.m)(()=>t.isAudioMuted,e=>_.a.setMuteAudioTracks(a.localStream,e)),Object(c.m)(()=>t.dispName,e=>localStorage.setItem("SkyWayConf.dispName",e)),Object(c.p)(()=>r.isAppReady,async()=>{const e=await _.a.getUserDevices().catch(e=>r.handleUserError(e));r.isError||t.updateDevices(e)})}onClickWelcomeClose(){const{ui:e,user:t,room:a}=this.store;e.isWelcomeOpen=!1,Object(c.m)(()=>a.localStream,e=>{this._destroyVad&&this._destroyVad();const{destroy:a}=N()(M.a.getAudioCtx(window),e,{onUpdate(e){t.isSpeaking=0!==e}});this._destroyVad=a},{fireImmediately:!0})}async onLoad({roomType:e,roomName:t}){const{user:a,ui:r,room:i}=this.store;r.setRoom({roomType:e,roomName:t});const n=localStorage.getItem("SkyWayConf.dispName");n&&(a.dispName=n);const s=await _.a.getUserDevices().catch(e=>r.handleUserError(e));if(!r.isError){if(a.updateDevices(s),a.isNoVideoDevices&&a.isNoAudioDevices){r.isAppReady=!0;const e=_.a.getFakeStream(M.a.getAudioCtx(window));i.setLocalStream(e)}navigator.mediaDevices.ondevicechange=async function(){const e=await _.a.getUserDevices().catch(e=>r.handleUserError(e));r.isError||a.updateDevices(e)}}}async onClickJoinRoom(){const{ui:e,room:t,user:a}=this.store,r=await O.a.initPeer().catch(t=>e.handleAppError(t));if(e.isError)return;r.on("error",t=>e.handleSkyWayPeerError(t)),a.peerId=r.id;const i=r.joinRoom(`${e.roomType}/${e.roomName}`,{mode:e.roomType,stream:t.localStream});this._onRoomJoin(i),e.isSettingOpen=!1}async onClickSendChat(){const{chat:e,user:t,room:a,ui:r}=this.store,i=await _.a.snapVideoStream(a.localStream,"image/jpeg",.5).catch(e=>r.handleAppError(e));if(r.isError)return;const n={peerId:t.peerId,text:e.bufferText,blob:i,timestamp:Date.now()},s=URL.createObjectURL(i);e.addMessage(n,s,t.dispName),e.updateBuffer(n)}_onRoomJoin(e){const{ui:t,user:a,room:r,chat:i}=this.store;t.isRoomJoin=!0,e.on("stream",t=>this._onRoomAddStream(t,e)),e.on("removeStream",e=>this._onRoomRemoveStream(e)),e.on("peerLeave",e=>this._onRoomPeerLeave(e)),e.on("data",e=>this._onRoomData(e)),Object(c.m)(()=>r.localStream,()=>e.replaceStream(r.localStream)),Object(c.m)(()=>a.syncState,t=>e.send({type:"sync",payload:t})),Object(c.m)(()=>i.lastMessage,t=>e.send({type:"chat",payload:t}))}_onRoomAddStream(e,t){const{room:a,user:r,notification:i}=this.store;a.addRemoteStream(e),t.send({type:"sync",payload:r.syncState}),Object(c.p)(()=>void 0!==a.syncState.get(e.peerId),()=>i.showJoin(a.syncState.get(e.peerId)))}_onRoomRemoveStream(e){const{room:t}=this.store;t.removeRemoteStream(e)}_onRoomPeerLeave(e){const{room:t,notification:a}=this.store,r=t.syncState.get(e);a.showLeave(r),t.removeRemoteStreamByPeerId(e)}_onRoomData({_src:e,data:t}){const{room:a,chat:r,ui:i,notification:n}=this.store,{type:s,payload:o}=t;switch(s){case"sync":a.syncState.set(o.peerId,o);break;case"chat":{const e=a.syncState.get(o.peerId),t=new Blob([new Uint8Array(o.blob)]),s=URL.createObjectURL(t);r.addMessage(o,s,e.dispName),i.isChatOpen||n.showChat(e);break}default:throw new Error(`${s} is not defined as message type`)}}};var I=()=>i.a.createElement("div",{className:"Loader"},i.a.createElement("img",{className:"Loader_Image",src:"./images/conf/icon-loading.svg",alt:"Loading"}));var C=Object(o.c)(({ui:e})=>i.a.createElement("div",{className:"Error"},i.a.createElement("div",{className:"Error_Title"},i.a.createElement("i",{className:"material-icons"},"error"),i.a.createElement("span",null,"Error")),e.isUserError&&i.a.createElement("div",{className:"Error_Desc"},i.a.createElement("p",null,"Please check your.."),i.a.createElement("ul",null,i.a.createElement("li",null,"current url(and hash)"),i.a.createElement("li",null,"camera or microphone settings"),i.a.createElement("li",null,"network conditions"),i.a.createElement("li",null,"browser updates"))),e.isAppError&&i.a.createElement("div",{className:"Error_Desc"},i.a.createElement("p",null,"Sorry, currently our service is not available. Please try it later."))));var j=Object(o.b)("ui","action")(Object(o.c)(class extends i.a.Component{render(){const{ui:e,children:t}=this.props;return e.isError?i.a.createElement(C,{ui:e}):e.isAppReady?t:i.a.createElement(I,null)}componentDidCatch(e){this.props.action.$update("ui.isAppError",!0),console.error(e)}}));var k=Object(o.c)(class extends i.a.Component{constructor(){super(),this._vRef=null,this._aRef=null}render(){const{muted:e,isMirror:t,stream:a}=this.props;return i.a.createElement(i.a.Fragment,null,i.a.createElement("video",{className:`Video ${t?"-reverse":""}`,ref:e=>{this._vRef=e},muted:!0,autoPlay:!0,playsInline:!0}),i.a.createElement("audio",{ref:e=>{this._aRef=e},muted:e,autoPlay:!0}))}componentDidMount(){this._vRef&&this._aRef&&this.props.stream instanceof MediaStream&&(this._vRef.srcObject=this._aRef.srcObject=this.props.stream)}componentWillReact(){this._vRef&&this._aRef&&this.props.stream instanceof MediaStream&&(this._vRef.srcObject=this._aRef.srcObject=this.props.stream)}});var L=Object(o.c)(({room:e})=>i.a.createElement("div",{className:"ScreenVideo"},e.pinnedStream?i.a.createElement(k,{stream:e.pinnedStream,muted:!0}):null));var A=Object(o.b)("room")(Object(o.c)(({room:e})=>i.a.createElement(L,{room:e})));var R=class extends i.a.Component{constructor(){super(),this._ref=null,this._disposer=null,this._checkListWidth=this._checkListWidth.bind(this)}render(){return i.a.createElement("div",{className:"MemberList"},i.a.createElement("div",{className:"MemberList_Arrow -left"},i.a.createElement("i",{className:"material-icons"},"chevron_left")),i.a.createElement("div",{ref:e=>this._ref=e,className:"MemberList_Scroller"},this.props.children),i.a.createElement("div",{className:"MemberList_Arrow -right"},i.a.createElement("i",{className:"material-icons"},"chevron_right")))}componentDidMount(){const{room:e}=this.props;this._disposer=Object(c.m)(()=>e.remoteStreams.length,()=>this._checkListWidth(),{fireImmediately:!0,delay:500}),window.addEventListener("resize",this._checkListWidth)}componentWillUnmount(){this._disposer(),window.removeEventListener("resize",this._checkListWidth)}_checkListWidth(){parseInt(getComputedStyle(this._ref).width)<Array.from(this._ref.children).reduce((e,t)=>e+parseInt(getComputedStyle(t).width),0)?this._ref.parentElement.classList.add("-scrollable"):this._ref.parentElement.classList.remove("-scrollable")}},T=a(6),x=a(5);var V=Object(o.c)(({user:e,action:t})=>i.a.createElement("div",{className:"MemberVideo"},i.a.createElement("div",{className:"MemberVideo_Local"},i.a.createElement("button",{onClick:()=>t.$update("user.isVideoMuted",!e.isVideoMuted),title:e.isVideoMuted?"Unmute":"Mute"},i.a.createElement(T.a,{isMuted:e.isVideoMuted,isSelf:!0})),i.a.createElement("button",{onClick:()=>t.$update("user.isAudioMuted",!e.isAudioMuted),title:e.isAudioMuted?"Unmute":"Mute"},i.a.createElement(x.a,{isMuted:e.isAudioMuted,isSelf:!0})),i.a.createElement("button",{onClick:()=>t.$update("ui.isSettingOpen",!0),title:"Open settings"},i.a.createElement("i",{className:"material-icons"},"settings")),i.a.createElement("button",{onClick:()=>t.$update("ui.isChatOpen",!0),title:"Open chat"},i.a.createElement("i",{className:"material-icons"},"chat"))))),P=a(9);var U=Object(o.c)(({room:e,action:t})=>i.a.createElement(i.a.Fragment,null,e.remoteStreams.map(a=>{const r=e.syncState.get(a.peerId);return i.a.createElement("div",{key:a.id,className:"MemberVideo",onClick:()=>t.$update("room.pinnedPeerId",a.peerId)},e.pinnedPeerIdDisp===a.peerId&&i.a.createElement("div",{className:"MemberVideo_Pinned"}),r?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"MemberVideo_Name"},r.dispName),i.a.createElement("div",{className:"MemberVideo_Media"},r.isVideoMuted&&i.a.createElement(T.a,{isMuted:!0}),r.isAudioMuted&&i.a.createElement(x.a,{isMuted:!0}),r.isSpeaking&&i.a.createElement(P.a,{isSpeaking:!0}))):null,i.a.createElement(k,{stream:a}))})));var $=Object(o.b)("room","user","action")(Object(o.c)(({room:e,user:t,action:a})=>i.a.createElement(R,{room:e},i.a.createElement(V,{user:t,action:a}),i.a.createElement(U,{room:e,action:a}))));const W=({isVisible:e,children:t})=>i.a.createElement("div",{className:"Popup",style:{transform:e?"translate3d(0, 0, 0)":"translate3d(0, -100%, 0)",visibility:e?"visible":"hidden"}},t),F=({isVisible:e,children:t})=>e?i.a.createElement("div",{className:"Popup"},t):null;var B=Object(o.c)(({isVisible:e,noAnim:t=!1,children:a})=>t?i.a.createElement(F,{isVisible:e},a):i.a.createElement(W,{isVisible:e},a));var J=Object(o.c)(({ui:e,room:t})=>i.a.createElement(k,{stream:t.localStream,muted:!0,isMirror:!1===e.isScreenSharing}));var q=Object(o.c)(({user:e,action:t})=>i.a.createElement("div",{className:"DeviceSelector"},i.a.createElement("div",{className:"DeviceSelector_Label"},"Cam / Mic"),i.a.createElement("div",{className:"DeviceSelector_Row"},i.a.createElement("select",{className:"DeviceSelector_Select",value:e.videoDeviceId,onChange:e=>t.$update("user.videoDeviceId",e.target.value),disabled:e.isNoVideoDevices},e.isNoVideoDevices&&i.a.createElement("option",{value:""},"Cam not found"),e.videoDevices.map((e,t)=>i.a.createElement("option",{key:e.deviceId,value:e.deviceId},e.label||`Cam ${t+1}`))),i.a.createElement("button",{onClick:()=>t.$update("user.isVideoMuted",!e.isVideoMuted),title:e.isVideoMuted?"Unmute":"Mute"},i.a.createElement(T.a,{isMuted:e.isVideoMuted,isSelf:!0}))),i.a.createElement("div",{className:"DeviceSelector_Row"},i.a.createElement("select",{className:"DeviceSelector_Select",value:e.audioDeviceId,onChange:e=>t.$update("user.audioDeviceId",e.target.value),disabled:e.isNoAudioDevices},e.isNoAudioDevices&&i.a.createElement("option",{value:""},"Mic not found"),e.audioDevices.map((e,t)=>i.a.createElement("option",{key:e.deviceId,value:e.deviceId},e.label||`Mic ${t+1}`))),i.a.createElement("button",{onClick:()=>t.$update("user.isAudioMuted",!e.isAudioMuted),title:e.isAudioMuted?"Unmute":"Mute"},i.a.createElement(x.a,{isMuted:e.isAudioMuted,isSelf:!0})),i.a.createElement("span",{className:"DeviceSelector_Va"},i.a.createElement(P.a,{isSpeaking:e.isSpeaking})))));var z=Object(o.c)(({user:e,action:t})=>i.a.createElement("div",{className:"NameEdit"},i.a.createElement("div",{className:"NameEdit_Label"},"Name"),i.a.createElement("input",{className:"NameEdit_Input",type:"text",maxLength:10,value:e.dispName,onChange:e=>t.$update("user.dispName",e.target.value)})));var H=Object(o.b)("room","ui","user","action")(Object(o.c)(({room:e,ui:t,user:a,action:r})=>i.a.createElement(B,{isVisible:t.isSettingOpen},i.a.createElement("div",{className:"L-Setting"},i.a.createElement("div",{className:"L-Setting_Video"},i.a.createElement(J,{ui:t,room:e})),i.a.createElement(q,{user:a,action:r}),i.a.createElement(z,{user:a,action:r}),i.a.createElement("div",{className:"L-Setting_Finish"},i.a.createElement("button",{onClick:()=>{t.isRoomJoin?r.$update("ui.isSettingOpen",!1):r.onClickJoinRoom()}},"OK"))))));var K=Object(o.c)(class extends i.a.Component{constructor(){super(),this._ref=null}render(){const{chat:e}=this.props;return i.a.createElement("ul",{className:"ChatMessageList",ref:e=>this._ref=e},e.messages.map(e=>i.a.createElement("li",{key:e.id},i.a.createElement("div",{className:"ChatMessageList_Item"},i.a.createElement("div",{className:"ChatMessageList_Item_Thumb"},i.a.createElement("img",{className:"ChatMessageList_Item_Thumb_Image",src:e.thumb})),i.a.createElement("div",{className:"ChatMessageList_Item_Content"},i.a.createElement("div",{className:"ChatMessageList_Item_Content_Head"},i.a.createElement("span",{className:"ChatMessageList_Item_Content_HeadName"},e.dispName),i.a.createElement("span",{className:"ChatMessageList_Item_Content_HeadDate"},"at ",e.dispDate)),i.a.createElement("p",{className:"ChatMessageList_Item_Content_Body"},e.text))))))}componentWillReact(){this._ref&&requestAnimationFrame(()=>this._ref.scrollTop=this._ref.scrollHeight)}});var G=Object(o.c)(({chat:e,action:t})=>i.a.createElement("div",{className:"ChatBox"},i.a.createElement("button",{className:"ChatBox_Closer",onClick:()=>t.$update("ui.isChatOpen",!1)},i.a.createElement("i",{className:"material-icons -x05"},"close")),i.a.createElement(K,{chat:e}),i.a.createElement("div",{className:"ChatBox_Action"},i.a.createElement("input",{className:"ChatBox_Action_Input",type:"text",placeholder:"Type messages here...",value:e.bufferText,onChange:e=>t.$update("chat.bufferText",e.target.value)}),i.a.createElement("button",{disabled:0===e.bufferText.length,onClick:()=>t.onClickSendChat()},"Send"))));var Y=Object(o.b)("ui","chat","action")(Object(o.c)(({ui:e,chat:t,action:a})=>i.a.createElement(B,{isVisible:e.isChatOpen},i.a.createElement(G,{ui:e,chat:t,action:a}))));var X=Object(o.b)("ui","action")(Object(o.c)(({ui:e,action:t})=>i.a.createElement(B,{isVisible:e.isWelcomeOpen,noAnim:!0},i.a.createElement("div",{className:"L-Welcome"},i.a.createElement("h3",{className:"L-Welcome_Header"},"SkyWayConferenceMobile"),i.a.createElement("p",{className:"L-Welcome_Messages"},"This site plays sound.",i.a.createElement("br",null),"And this site uses your camera and microphone until closing tab."),i.a.createElement("div",{className:"L-Welcome_Finish"},i.a.createElement("button",{onClick:()=>t.onClickWelcomeClose()},"OK"))))));var Q=Object(o.c)(({notification:e})=>i.a.createElement(i.a.Fragment,null,e.items.map(e=>i.a.createElement("div",{className:"Toast",key:e.id},e.text))));var Z=Object(o.b)("notification")(Object(o.c)(({notification:e})=>i.a.createElement("div",{className:"L-Notification"},i.a.createElement(Q,{notification:e}))));var ee=()=>i.a.createElement(j,null,i.a.createElement("main",{className:"L-Main"},i.a.createElement(A,null),i.a.createElement($,null)),i.a.createElement(H,null),i.a.createElement(Y,null),i.a.createElement(X,null),i.a.createElement(Z,null)),te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};!function(){const[,e,t]=location.hash.split("/"),a=M.a.getOsName(navigator.userAgent),r=M.a.getBrowserName(navigator.userAgent);if(!1===(["Windows","Mac","iOS","Android"].includes(a)&&["Chrome","Firefox","Safari"].includes(r))||"Safari"===r&&"mesh"!==e)return void(location.href="./not_supported.html");if(!1===["iOS","Android"].includes(a))return void(location.href=`./conf.html${location.hash}`);if(/iPod/.test(navigator.userAgent))return void(location.href="./not_supported.html");const n=new S,c=new D(n);c.onLoad({roomType:e,roomName:t}),s.a.render(i.a.createElement(o.a,te({action:c},n),i.a.createElement(ee,null)),document.getElementById("app-root")),window.addEventListener("hashchange",()=>location.reload(!0))}()}]);