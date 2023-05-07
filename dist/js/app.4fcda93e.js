(function(){"use strict";var e={4409:function(e,t,i){var s=i(6369),n=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{"text-align":"center"},attrs:{id:"app"},on:{"~mouseover":function(t){return e.resume.apply(null,arguments)}}},[t("div",{staticClass:"button",on:{click:e.amplify}},[e._v("放大")]),t("div",{staticClass:"button",on:{click:e.reduce}},[e._v("缩小")]),t("canvas",{ref:"live2d",staticStyle:{position:"relative"},on:{mousedown:e.handleMouseDown,mousemove:e.handleMouseMove,mouseup:e.handleMouseUp}})])},o=[],r=(i(3767),i(8585),i(8696),i(7658),i(9858)),a=i(7063),l=i(4161),h=i(862);h.vc.logLevel=h.vc.LOG_LEVEL_WARNING;var c={name:"app",data(){return{websock:"",model4:"",playing:!1,audioCtx:"",analyser:"",frequencyData:"",o:80,isDragging:!1,lastX:0,lastY:0,scale:1}},mounted(){window.PIXI=r,this.$on("start",this.getWav),(async()=>{await this.createModel(),this.createAnalyser()})(),window.onresize=()=>{this.model4.x=this.$refs.live2d.clientWidth/2-this.model4.width/2},document.body.style.backgroundImage="url('example.jpg')"},created(){this.initWebSocket()},destroyed(){this.websock.close()},methods:{resume(){this.audioCtx.resume()},reduce(){this.scale<=.2||(this.scale-=.1,this.model4.scale.set(this.scale),this.$refs.live2d.width=this.model4.width,this.$refs.live2d.height=this.model4.height,this.app.resizeTo=this.$refs.live2d)},amplify(){this.scale>=1.5||(this.scale+=.1,this.model4.scale.set(this.scale),this.$refs.live2d.width=this.model4.width,this.$refs.live2d.height=this.model4.height,this.app.resizeTo=this.$refs.live2d)},handleMouseDown(e){this.isDragging=!0,this.lastX=e.clientX,this.lastY=e.clientY},handleMouseMove(e){if(this.isDragging){const t=e.clientX-this.lastX,i=e.clientY-this.lastY;this.$refs.live2d.style.left=parseInt(this.$refs.live2d.style.left||0)+t+"px",this.$refs.live2d.style.top=parseInt(this.$refs.live2d.style.top||0)+i+"px",this.lastX=e.clientX,this.lastY=e.clientY}},handleMouseUp(e){this.isDragging=!1,this.isDragging=!1,this.isDragging=!1},initWebSocket(){const e="ws://127.0.01:9000/live2d";this.websock=new WebSocket(e),this.websock.onmessage=this.websocketonmessage,this.websock.onopen=this.websocketonopen,this.websock.onerror=this.websocketonerror,this.websock.onclose=this.websocketclose},websocketonmessage(e){let t=JSON.parse(e.data);this.getWav(t.voice,t.mood)},websocketonopen(){console.log("建立")},websocketonerror(){console.log("错误")},websocketclose(){console.log("关闭")},async createModel(){this.model4=await a._Y.from("./model/Haru.model3.json",{autoUpdate:!0}),this.app=new r.Application({view:this.$refs.live2d,autoStart:!0,width:this.model4.width,height:this.model4.height,backgroundAlpha:0}),this.app.stage.addChild(this.model4),this.model4.x=this.$refs.live2d.clientWidth/2-this.model4.width/2},setMouthOpenY(e){e=Math.max(0,Math.min(1,e)),this.model4.internalModel.coreModel.setParameterValueById("ParamMouthOpenY",e)},createAnalyser(){this.audioCtx=new AudioContext,this.analyser=this.audioCtx.createAnalyser(),this.frequencyData=new Uint8Array(this.analyser.frequencyBinCount)},getByteFrequencyData(){return this.analyser.getByteFrequencyData(this.frequencyData),this.frequencyData},run(){if(!this.playing)return;const e=this.getByteFrequencyData(),t=[];for(var i=0;i<1e3;i+=this.o)t.push(e[i]);this.setMouthOpenY((this.arrayAdd(t)/t.length-20)/6),setTimeout(this.run,1e3/30)},arrayAdd(e){return e.reduce(((e,t)=>e+t),0)},getWav(e,t){(0,l.Z)({url:e,method:"get",responseType:"arraybuffer"}).then((e=>{const i=e.data;this.audioCtx.decodeAudioData(i,(e=>{const i=this.audioCtx.createBufferSource();i.buffer=e,i.connect(this.audioCtx.destination),i.connect(this.analyser),window.navigator.mediaDevices.getUserMedia({audio:!0}),this.playing=!0,this.run(),this.model4.expression(t),i.start(0),i.onended=()=>{this.playing=!1,this.websock.send(0),this.model4.expression(0)}}))}))}},watch:{}},d=c,u=i(1001),f=(0,u.Z)(d,n,o,!1,null,null,null),p=f.exports;s.ZP.config.productionTip=!1,new s.ZP({render:e=>e(p),beforeCreate(){}}).$mount("#app")}},t={};function i(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={id:s,loaded:!1,exports:{}};return e[s].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}i.m=e,function(){var e=[];i.O=function(t,s,n,o){if(!s){var r=1/0;for(c=0;c<e.length;c++){s=e[c][0],n=e[c][1],o=e[c][2];for(var a=!0,l=0;l<s.length;l++)(!1&o||r>=o)&&Object.keys(i.O).every((function(e){return i.O[e](s[l])}))?s.splice(l--,1):(a=!1,o<r&&(r=o));if(a){e.splice(c--,1);var h=n();void 0!==h&&(t=h)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[s,n,o]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,o,r=s[0],a=s[1],l=s[2],h=0;if(r.some((function(t){return 0!==e[t]}))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(l)var c=l(i)}for(t&&t(s);h<r.length;h++)o=r[h],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(c)},s=self["webpackChunklive2d"]=self["webpackChunklive2d"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(4409)}));s=i.O(s)})();
//# sourceMappingURL=app.03d217ef.js.map