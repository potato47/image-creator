(function(){"use strict";var t={1692:function(t,e,i){i(6992),i(8674),i(9601),i(7727);var n=i(5393),a=(i(8309),{class:"el-dropdown-link"}),o=(0,n.Wm)("i",{class:"el-icon-arrow-down el-icon--right"},null,-1),l={style:{flex:"1",overflow:"auto"}},s={class:"border",style:{flex:"1",overflow:"auto"}},r={style:{display:"flex","align-items":"center"}},u=(0,n.Uk)(" 尺寸 "),h=(0,n.Uk)(" x "),d=(0,n.Uk)(" 缩放： "),y=(0,n.Uk)(" 背景: "),c=(0,n.Uk)("删除");function p(t,e,i,p,m,f){var g=(0,n.up)("el-dropdown-item"),v=(0,n.up)("el-dropdown-menu"),x=(0,n.up)("el-dropdown"),w=(0,n.up)("el-header"),b=(0,n.up)("el-tree"),k=(0,n.up)("el-divider"),P=(0,n.up)("el-button"),N=(0,n.up)("el-aside"),C=(0,n.up)("el-main"),S=(0,n.up)("el-input-number"),W=(0,n.up)("el-color-picker"),z=(0,n.up)("el-footer"),T=(0,n.up)("el-container"),V=(0,n.up)("el-form-item"),_=(0,n.up)("el-input"),j=(0,n.up)("el-form");return(0,n.wg)(),(0,n.j4)(T,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(w,{class:"border",style:{display:"-webkit-flex","align-items":"center",height:"40px"}},{default:(0,n.w5)((function(){return[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(t.menuGroups,(function(e){return(0,n.wg)(),(0,n.j4)(x,{onCommand:t.handleMenuClick,key:e.title},{dropdown:(0,n.w5)((function(){return[(0,n.Wm)(v,null,{default:(0,n.w5)((function(){return[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.children,(function(t){return(0,n.wg)(),(0,n.j4)(g,{key:t.name,command:t.command},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,n.zw)(t.name),1)]})),_:2},1032,["command"])})),128))]})),_:2},1024)]})),default:(0,n.w5)((function(){return[(0,n.Wm)("span",a,[(0,n.Uk)((0,n.zw)(e.title),1),o])]})),_:2},1032,["onCommand"])})),128))]})),_:1}),(0,n.Wm)(T,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(N,{class:"border",style:{display:"flex","flex-direction":"column"}},{default:(0,n.w5)((function(){return[(0,n.Wm)("div",l,[(0,n.Wm)(b,{data:t.treeData,props:t.treeDefaultProps,"expand-on-click-node":!1,"default-expand-all":!0,draggable:"","highlight-current":"",onNodeClick:t.handleNodeClick},null,8,["data","props","onNodeClick"])]),(0,n.Wm)("div",s,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(t.templateGroups,(function(e){return(0,n.wg)(),(0,n.j4)(n.HY,{key:e.title},[(0,n.Wm)(k,null,{default:(0,n.w5)((function(){return[(0,n.Uk)((0,n.zw)(e.title),1)]})),_:2},1024),((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.templates,(function(e){return(0,n.wg)(),(0,n.j4)(P,{key:e.type,round:"",style:{margin:"5px"},size:"mini",onClick:function(i){return t.handleAddNode(e.type)}},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,n.zw)(e.display),1)]})),_:2},1032,["onClick"])})),128))],64)})),128))])]})),_:1}),(0,n.Wm)(T,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(C,{class:"border",style:{overflow:"auto",display:"flex","align-items":"center","justify-content":"center"}},{default:(0,n.w5)((function(){return[(0,n.Wm)("canvas",{id:"canvas",width:t.canvasConfig.width,height:t.canvasConfig.height,style:[{"background-image":"url('./bg_tile.png')",border:"solid 1px"},{width:t.canvasConfig.width*t.canvasConfig.zoom+"px",height:t.canvasConfig.height*t.canvasConfig.zoom+"px"}]},null,12,["width","height"])]})),_:1}),(0,n.Wm)(z,{style:{display:"flex","align-items":"center","justify-content":"center"}},{default:(0,n.w5)((function(){return[(0,n.Wm)("div",r,[u,(0,n.Wm)(S,{placeholder:"width",modelValue:t.canvasConfig.width,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.canvasConfig.width=e}),size:"mini"},null,8,["modelValue"]),h,(0,n.Wm)(S,{placeholder:"height",modelValue:t.canvasConfig.height,"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.canvasConfig.height=e}),size:"mini"},null,8,["modelValue"]),d,(0,n.Wm)(S,{placeholder:"zoom",modelValue:t.canvasConfig.zoom,"onUpdate:modelValue":e[3]||(e[3]=function(e){return t.canvasConfig.zoom=e}),size:"mini",precision:2,step:.1,min:.1,max:10},null,8,["modelValue","step","min"]),y,(0,n.Wm)(W,{size:"mini","show-alpha":"",modelValue:t.canvasConfig.color,"onUpdate:modelValue":e[4]||(e[4]=function(e){return t.canvasConfig.color=e})},null,8,["modelValue"])])]})),_:1})]})),_:1}),(0,n.Wm)(N,{class:"border",style:{padding:"10px"}},{default:(0,n.w5)((function(){return[t.currentNode?((0,n.wg)(),(0,n.j4)(j,{key:0,ref:"form","label-position":"left",model:t.currentNode,"label-width":"80px",size:"mini"},{default:(0,n.w5)((function(){return[(0,n.Wm)(V,null,{default:(0,n.w5)((function(){return[t.currentNode?((0,n.wg)(),(0,n.j4)(P,{key:0,type:"danger",onClick:e[5]||(e[5]=function(e){return t.handleDeleteNode(t.currentNode)})},{default:(0,n.w5)((function(){return[c]})),_:1})):(0,n.ry)("",!0)]})),_:1}),((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(t.nodeKeys,(function(e){return(0,n.wg)(),(0,n.j4)(V,{label:e.display,key:e.name},{default:(0,n.w5)((function(){return["String"==e.type?((0,n.wg)(),(0,n.j4)(_,{key:0,size:"mini",modelValue:t.currentNode[e.name],"onUpdate:modelValue":function(i){return t.currentNode[e.name]=i},disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","disabled"])):(0,n.ry)("",!0),"Number"==e.type?((0,n.wg)(),(0,n.j4)(S,{key:1,style:{width:"100%"},size:"mini",modelValue:t.currentNode[e.name],"onUpdate:modelValue":function(i){return t.currentNode[e.name]=i}},null,8,["modelValue","onUpdate:modelValue"])):(0,n.ry)("",!0),"Color"==e.type?((0,n.wg)(),(0,n.j4)(W,{key:2,class:"node-color",size:"mini","show-alpha":"",modelValue:t.currentNode[e.name],"onUpdate:modelValue":function(i){return t.currentNode[e.name]=i}},null,8,["modelValue","onUpdate:modelValue"])):(0,n.ry)("",!0)]})),_:2},1032,["label"])})),128))]})),_:1},8,["model"])):(0,n.ry)("",!0)]})),_:1})]})),_:1})]})),_:1})}i(4553),i(9554),i(9600),i(561),i(4747);var m,f,g=i(1278),v=i(2610),x=i(485),w=i(224),b=i(1124),k=(i(3290),function(){function t(e){(0,g.Z)(this,t),this.uuid=0,this.type="Rectangle",this.name="矩形",this.x=0,this.y=0,this.width=100,this.height=100,this.color="#333333",this.x=e.canvas.width/2-this.width/2,this.y=e.canvas.height/2-this.height/2}return(0,v.Z)(t,[{key:"createPath",value:function(t){t.beginPath(),t.rect(this.x,this.y,this.width,this.height),t.closePath()}},{key:"paint",value:function(t){t.fillStyle=this.color,this.createPath(t),t.fill()}},{key:"isPointInPath",value:function(t,e,i){return this.createPath(t),t.isPointInPath(e,i)}},{key:"getKeys",value:function(){return[{name:"type",display:"Type",type:"String",disabled:!0},{name:"name",display:"Name",type:"String"},{name:"x",display:"X",type:"Number"},{name:"y",display:"Y",type:"Number"},{name:"width",display:"Width",type:"Number"},{name:"height",display:"Height",type:"Number"},{name:"color",display:"Color",type:"Color"}]}}]),t}()),P=function(){function t(e){(0,g.Z)(this,t),this.uuid=0,this.type="Circle",this.name="圆形",this.x=50,this.y=50,this.radius=50,this.color="#333333",this.x=e.canvas.width/2,this.y=e.canvas.height/2}return(0,v.Z)(t,[{key:"paint",value:function(t){this.createPath(t),t.fillStyle=this.color,t.fill()}},{key:"isPointInPath",value:function(t,e,i){return this.createPath(t),t.isPointInPath(e,i)}},{key:"getKeys",value:function(){return[{name:"type",display:"Type",type:"String",disabled:!0},{name:"name",display:"Name",type:"String"},{name:"x",display:"X",type:"Number"},{name:"y",display:"Y",type:"Number"},{name:"radius",display:"Radius",type:"Number"},{name:"color",display:"Color",type:"Color"}]}},{key:"createPath",value:function(t){t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.closePath()}}]),t}(),N=(i(2222),function(){function t(e){(0,g.Z)(this,t),this.uuid=0,this.type="Text",this.name="文字",this.x=0,this.y=50,this.fontSize=50,this.fontFamily="sans-serif",this.color="#333333",this.string="文字";var i=e.measureText(this.string).width,n=this.fontSize;this.x=e.canvas.width/2-i/2,this.y=e.canvas.height/2+n/2}return(0,v.Z)(t,[{key:"paint",value:function(t){t.fillStyle=this.color,t.font="".concat(this.fontSize,"px ").concat(this.fontFamily),t.fillText(this.string,this.x,this.y)}},{key:"isPointInPath",value:function(t,e,i){t.font="".concat(this.fontSize,"px ").concat(this.fontFamily);var n=t.measureText(this.string).width,a=this.fontSize;return t.beginPath(),t.rect(this.x,this.y-a,n,a),t.closePath(),t.isPointInPath(e,i)}},{key:"getKeys",value:function(){return[{name:"type",display:"Type",type:"String",disabled:!0},{name:"name",display:"Name",type:"String"},{name:"x",display:"X",type:"Number"},{name:"y",display:"Y",type:"Number"},{name:"fontSize",display:"FontSize",type:"Number"},{name:"fontFamily",display:"FontFamily",type:"String"},{name:"color",display:"Color",type:"Color"},{name:"string",display:"String",type:"String"}]}}]),t}()),C=function(){function t(e){(0,g.Z)(this,t),this.uuid=0,this.type="RectangleOutline",this.name="矩形边框",this.x=0,this.y=0,this.width=100,this.height=100,this.lineWidth=5,this.color="#333333",this.x=e.canvas.width/2-this.width/2,this.y=e.canvas.height/2-this.height/2}return(0,v.Z)(t,[{key:"createPath",value:function(t){t.beginPath(),t.rect(this.x,this.y,this.width,this.height),t.closePath()}},{key:"paint",value:function(t){t.strokeStyle=this.color,t.lineWidth=this.lineWidth,this.createPath(t),t.stroke()}},{key:"isPointInPath",value:function(t,e,i){return this.createPath(t),t.isPointInPath(e,i)}},{key:"getKeys",value:function(){return[{name:"type",display:"Type",type:"String",disabled:!0},{name:"name",display:"Name",type:"String"},{name:"x",display:"X",type:"Number"},{name:"y",display:"Y",type:"Number"},{name:"width",display:"Width",type:"Number"},{name:"height",display:"Height",type:"Number"},{name:"lineWidth",display:"LineWidth",type:"Number"},{name:"color",display:"Color",type:"Color"}]}}]),t}(),S=function(){function t(e){(0,g.Z)(this,t),this.uuid=0,this.type="CircleOutline",this.name="圆形边框",this.x=50,this.y=50,this.radius=50,this.lineWidth=5,this.color="#333333",this.x=e.canvas.width/2,this.y=e.canvas.height/2}return(0,v.Z)(t,[{key:"paint",value:function(t){this.createPath(t),t.strokeStyle=this.color,t.lineWidth=this.lineWidth,t.stroke()}},{key:"isPointInPath",value:function(t,e,i){return this.createPath(t),t.isPointInPath(e,i)}},{key:"getKeys",value:function(){return[{name:"type",display:"Type",type:"String",disabled:!0},{name:"name",display:"Name",type:"String"},{name:"x",display:"X",type:"Number"},{name:"y",display:"Y",type:"Number"},{name:"radius",display:"Radius",type:"Number"},{name:"lineWidth",display:"LineWidth",type:"Number"},{name:"color",display:"Color",type:"Color"}]}},{key:"createPath",value:function(t){t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.closePath()}}]),t}(),W=function(){function t(e){(0,g.Z)(this,t),this.uuid=0,this.type="RoundRect",this.name="圆角矩形",this.x=0,this.y=0,this.width=100,this.height=100,this.radius=10,this.color="#333333",this.x=e.canvas.width/2-this.width/2,this.y=e.canvas.height/2-this.height/2}return(0,v.Z)(t,[{key:"createPath",value:function(t){var e={x:this.x+this.radius,y:this.y},i={x:this.x+this.width,y:this.y},n={x:this.x+this.width,y:this.y+this.height},a={x:this.x,y:this.y+this.height},o={x:this.x,y:this.y};t.beginPath(),t.moveTo(e.x,e.y),t.arcTo(i.x,i.y,n.x,n.y,this.radius),t.arcTo(n.x,n.y,a.x,a.y,this.radius),t.arcTo(a.x,a.y,o.x,o.y,this.radius),t.arcTo(o.x,o.y,e.x,e.y,this.radius),t.closePath()}},{key:"paint",value:function(t){t.fillStyle=this.color,this.createPath(t),t.fill()}},{key:"isPointInPath",value:function(t,e,i){return this.createPath(t),t.isPointInPath(e,i)}},{key:"getKeys",value:function(){return[{name:"type",display:"Type",type:"String",disabled:!0},{name:"name",display:"Name",type:"String"},{name:"x",display:"X",type:"Number"},{name:"y",display:"Y",type:"Number"},{name:"width",display:"Width",type:"Number"},{name:"height",display:"Height",type:"Number"},{name:"radius",display:"Radius",type:"Number"},{name:"color",display:"Color",type:"Color"}]}}]),t}(),z=function(){function t(e){(0,g.Z)(this,t),this.uuid=0,this.type="RoundRectOutline",this.name="圆角矩形边框",this.x=0,this.y=0,this.width=100,this.height=100,this.radius=10,this.lineWidth=5,this.color="#333333",this.x=e.canvas.width/2-this.width/2,this.y=e.canvas.height/2-this.height/2}return(0,v.Z)(t,[{key:"createPath",value:function(t){var e={x:this.x+this.radius,y:this.y},i={x:this.x+this.width,y:this.y},n={x:this.x+this.width,y:this.y+this.height},a={x:this.x,y:this.y+this.height},o={x:this.x,y:this.y};t.beginPath(),t.moveTo(e.x,e.y),t.arcTo(i.x,i.y,n.x,n.y,this.radius),t.arcTo(n.x,n.y,a.x,a.y,this.radius),t.arcTo(a.x,a.y,o.x,o.y,this.radius),t.arcTo(o.x,o.y,e.x,e.y,this.radius),t.closePath()}},{key:"paint",value:function(t){t.strokeStyle=this.color,t.lineWidth=this.lineWidth,this.createPath(t),t.stroke()}},{key:"isPointInPath",value:function(t,e,i){return this.createPath(t),t.isPointInPath(e,i)}},{key:"getKeys",value:function(){return[{name:"type",display:"Type",type:"String",disabled:!0},{name:"name",display:"Name",type:"String"},{name:"x",display:"X",type:"Number"},{name:"y",display:"Y",type:"Number"},{name:"width",display:"Width",type:"Number"},{name:"height",display:"Height",type:"Number"},{name:"radius",display:"Radius",type:"Number"},{name:"lineWidth",display:"LineWidth",type:"Number"},{name:"color",display:"Color",type:"Color"}]}}]),t}(),T=function(){function t(e){(0,g.Z)(this,t),this.uuid=0,this.type="Text",this.name="空心文字",this.x=0,this.y=50,this.fontSize=50,this.fontFamily="sans-serif",this.lineWidth=2,this.color="#333333",this.string="空心文字";var i=e.measureText(this.string).width,n=this.fontSize;this.x=e.canvas.width/2-i/2,this.y=e.canvas.height/2+n/2}return(0,v.Z)(t,[{key:"paint",value:function(t){t.strokeStyle=this.color,t.font="".concat(this.fontSize,"px ").concat(this.fontFamily),t.lineWidth=this.lineWidth,t.strokeText(this.string,this.x,this.y)}},{key:"isPointInPath",value:function(t,e,i){t.font="".concat(this.fontSize,"px ").concat(this.fontFamily);var n=t.measureText(this.string).width,a=this.fontSize;return t.beginPath(),t.rect(this.x,this.y-a,n,a),t.closePath(),t.isPointInPath(e,i)}},{key:"getKeys",value:function(){return[{name:"type",display:"Type",type:"String",disabled:!0},{name:"name",display:"Name",type:"String"},{name:"x",display:"X",type:"Number"},{name:"y",display:"Y",type:"Number"},{name:"fontSize",display:"FontSize",type:"Number"},{name:"fontFamily",display:"FontFamily",type:"String"},{name:"lineWidth",display:"LineWidth",type:"Number"},{name:"color",display:"Color",type:"Color"},{name:"string",display:"String",type:"String"}]}}]),t}(),V=[{title:"图形",templates:[{type:k,display:"矩形"},{type:P,display:"圆形"},{type:W,display:"圆角矩形"}]},{title:"边框",templates:[{type:C,display:"矩形边框"},{type:S,display:"圆形边框"},{type:z,display:"圆角矩形边框"}]},{title:"文字",templates:[{type:N,display:"普通文字"},{type:T,display:"空心文字"}]},{title:"其他",templates:[]}],_=function(t){(0,x.Z)(i,t);var e=(0,w.Z)(i);function i(){var t;return(0,g.Z)(this,i),t=e.apply(this,arguments),t.uuid=0,t.canvasConfig={width:500,height:500,zoom:1,color:"rgba(0, 0, 0, 0)"},t.menuGroups=[{title:"文件",children:[{name:"新建",command:"new-file"},{name:"保存",command:"save-file"}]},{title:"关于",children:[{name:"版本：101",command:""},{name:"源码",command:"source"}]}],t.currentNode=null,t.nodeKeys=[],t.treeData=[],t.templateGroups=V,t.treeDefaultProps={label:"name",children:"children"},t}return(0,v.Z)(i,[{key:"mounted",value:function(){var t,e,i,n=this;m=document.getElementById("canvas"),f=m.getContext("2d"),m.addEventListener("mousedown",(function(a){e={x:(a.clientX-m.getBoundingClientRect().left)/n.canvasConfig.zoom,y:(a.clientY-m.getBoundingClientRect().top)/n.canvasConfig.zoom},n.treeData.forEach((function(i){i.isPointInPath(f,e.x,e.y)&&(t=i)})),t&&(n.handleNodeClick(t),i={x:e.x-t.x,y:e.y-t.y}),a.preventDefault()}),!1),m.addEventListener("mousemove",(function(e){if(t){var a={x:(e.clientX-m.getBoundingClientRect().left)/n.canvasConfig.zoom,y:(e.clientY-m.getBoundingClientRect().top)/n.canvasConfig.zoom};t.x=a.x-i.x,t.y=a.y-i.y}e.preventDefault()}),!1),m.addEventListener("mouseup",(function(e){t&&(t=null),e.preventDefault()}),!1),requestAnimationFrame(this.draw)}},{key:"handleMenuClick",value:function(t){"save-file"===t?this.handleSaveFile():"new-file"===t&&(this.canvasConfig={width:500,height:500,zoom:1,color:"rgba(0, 0, 0, 0)"},this.treeData=[],this.currentNode=null)}},{key:"handleNodeClick",value:function(t){this.currentNode=t,this.nodeKeys=this.currentNode.getKeys()}},{key:"handleAddNode",value:function(t){var e=new t(f);e&&(e.uuid=this.uuid++,this.treeData.push(e))}},{key:"handleSaveFile",value:function(){this.exportCanvasAsPNG("canvas","image-creator.png")}},{key:"handleDeleteNode",value:function(t){var e=this.treeData.findIndex((function(e){return e.uuid===t.uuid}));e>-1&&(this.treeData.splice(e,1),this.currentNode=null,this.nodeKeys=[])}},{key:"exportCanvasAsPNG",value:function(t,e){var i=document.getElementById(t),n="image/png",a=i.toDataURL(n),o=document.createElement("a");o.download=e,o.href=a,o.dataset.downloadurl=[n,o.download,o.href].join(":"),document.body.appendChild(o),o.click(),document.body.removeChild(o)}},{key:"draw",value:function(){f.clearRect(0,0,m.width,m.height),f.fillStyle=this.canvasConfig.color,f.fillRect(0,0,m.width,m.height),this.treeData.forEach((function(t){return t.paint(f)})),requestAnimationFrame(this.draw)}}]),i}(b.w3);_.render=p;var j=_,I=i(8719),Z=i(8538),U=function(t){t.use(I.ZP,{locale:Z.Z})},F=(0,n.ri)(j);U(F),F.mount("#app")}},e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}i.m=t,i.x=function(){},function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0},e=[[1692,998]],n=function(){},a=function(a,o){for(var l,s,r=o[0],u=o[1],h=o[2],d=o[3],y=0,c=[];y<r.length;y++)s=r[y],i.o(t,s)&&t[s]&&c.push(t[s][0]),t[s]=0;for(l in u)i.o(u,l)&&(i.m[l]=u[l]);h&&h(i),a&&a(o);while(c.length)c.shift()();return d&&e.push.apply(e,d),n()},o=self["webpackChunkvue_element_ts"]=self["webpackChunkvue_element_ts"]||[];function l(){for(var n,a=0;a<e.length;a++){for(var o=e[a],l=!0,s=1;s<o.length;s++){var r=o[s];0!==t[r]&&(l=!1)}l&&(e.splice(a--,1),n=i(i.s=o[0]))}return 0===e.length&&(i.x(),i.x=function(){}),n}o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o));var s=i.x;i.x=function(){return i.x=s||function(){},(n=l)()}}(),i.x()})();
//# sourceMappingURL=app.4321475e.js.map