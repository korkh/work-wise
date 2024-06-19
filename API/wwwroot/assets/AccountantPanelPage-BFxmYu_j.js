import{r as x,d as B,k as y,n as L,R as Z,C as Y,m as J,G as W,E as z}from"./index-BaoKhQDG.js";import{v as H}from"./v4-CQkTLCs1.js";const Q="_accountantPanelPage_r6h7n_1",D="_welcome_r6h7n_5",S={accountantPanelPage:Q,welcome:D};var O={},P={};(function(e){const t=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",s=t+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",i="["+t+"]["+s+"]*",n=new RegExp("^"+i+"$"),r=function(u,o){const f=[];let l=o.exec(u);for(;l;){const d=[];d.startIndex=o.lastIndex-l[0].length;const c=l.length;for(let p=0;p<c;p++)d.push(l[p]);f.push(d),l=o.exec(u)}return f},a=function(u){const o=n.exec(u);return!(o===null||typeof o>"u")};e.isExist=function(u){return typeof u<"u"},e.isEmptyObject=function(u){return Object.keys(u).length===0},e.merge=function(u,o,f){if(o){const l=Object.keys(o),d=l.length;for(let c=0;c<d;c++)f==="strict"?u[l[c]]=[o[l[c]]]:u[l[c]]=o[l[c]]}},e.getValue=function(u){return e.isExist(u)?u:""},e.isName=a,e.getAllMatches=r,e.nameRegexp=i})(P);const v=P,ee={allowBooleanAttributes:!1,unpairedTags:[]};O.validate=function(e,t){t=Object.assign({},ee,t);const s=[];let i=!1,n=!1;e[0]==="\uFEFF"&&(e=e.substr(1));for(let r=0;r<e.length;r++)if(e[r]==="<"&&e[r+1]==="?"){if(r+=2,r=F(e,r),r.err)return r}else if(e[r]==="<"){let a=r;if(r++,e[r]==="!"){r=k(e,r);continue}else{let u=!1;e[r]==="/"&&(u=!0,r++);let o="";for(;r<e.length&&e[r]!==">"&&e[r]!==" "&&e[r]!=="	"&&e[r]!==`
`&&e[r]!=="\r";r++)o+=e[r];if(o=o.trim(),o[o.length-1]==="/"&&(o=o.substring(0,o.length-1),r--),!ae(o)){let d;return o.trim().length===0?d="Invalid space after '<'.":d="Tag '"+o+"' is an invalid name.",g("InvalidTag",d,N(e,r))}const f=ne(e,r);if(f===!1)return g("InvalidAttr","Attributes for '"+o+"' have open quote.",N(e,r));let l=f.value;if(r=f.index,l[l.length-1]==="/"){const d=r-l.length;l=l.substring(0,l.length-1);const c=V(l,t);if(c===!0)i=!0;else return g(c.err.code,c.err.msg,N(e,d+c.err.line))}else if(u)if(f.tagClosed){if(l.trim().length>0)return g("InvalidTag","Closing tag '"+o+"' can't have attributes or invalid starting.",N(e,a));if(s.length===0)return g("InvalidTag","Closing tag '"+o+"' has not been opened.",N(e,a));{const d=s.pop();if(o!==d.tagName){let c=N(e,d.tagStartPos);return g("InvalidTag","Expected closing tag '"+d.tagName+"' (opened in line "+c.line+", col "+c.col+") instead of closing tag '"+o+"'.",N(e,a))}s.length==0&&(n=!0)}}else return g("InvalidTag","Closing tag '"+o+"' doesn't have proper closing.",N(e,r));else{const d=V(l,t);if(d!==!0)return g(d.err.code,d.err.msg,N(e,r-l.length+d.err.line));if(n===!0)return g("InvalidXml","Multiple possible root nodes found.",N(e,r));t.unpairedTags.indexOf(o)!==-1||s.push({tagName:o,tagStartPos:a}),i=!0}for(r++;r<e.length;r++)if(e[r]==="<")if(e[r+1]==="!"){r++,r=k(e,r);continue}else if(e[r+1]==="?"){if(r=F(e,++r),r.err)return r}else break;else if(e[r]==="&"){const d=oe(e,r);if(d==-1)return g("InvalidChar","char '&' is not expected.",N(e,r));r=d}else if(n===!0&&!_(e[r]))return g("InvalidXml","Extra text at the end",N(e,r));e[r]==="<"&&r--}}else{if(_(e[r]))continue;return g("InvalidChar","char '"+e[r]+"' is not expected.",N(e,r))}if(i){if(s.length==1)return g("InvalidTag","Unclosed tag '"+s[0].tagName+"'.",N(e,s[0].tagStartPos));if(s.length>0)return g("InvalidXml","Invalid '"+JSON.stringify(s.map(r=>r.tagName),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1})}else return g("InvalidXml","Start tag expected.",1);return!0};function _(e){return e===" "||e==="	"||e===`
`||e==="\r"}function F(e,t){const s=t;for(;t<e.length;t++)if(e[t]=="?"||e[t]==" "){const i=e.substr(s,t-s);if(t>5&&i==="xml")return g("InvalidXml","XML declaration allowed only at the start of the document.",N(e,t));if(e[t]=="?"&&e[t+1]==">"){t++;break}else continue}return t}function k(e,t){if(e.length>t+5&&e[t+1]==="-"&&e[t+2]==="-"){for(t+=3;t<e.length;t++)if(e[t]==="-"&&e[t+1]==="-"&&e[t+2]===">"){t+=2;break}}else if(e.length>t+8&&e[t+1]==="D"&&e[t+2]==="O"&&e[t+3]==="C"&&e[t+4]==="T"&&e[t+5]==="Y"&&e[t+6]==="P"&&e[t+7]==="E"){let s=1;for(t+=8;t<e.length;t++)if(e[t]==="<")s++;else if(e[t]===">"&&(s--,s===0))break}else if(e.length>t+9&&e[t+1]==="["&&e[t+2]==="C"&&e[t+3]==="D"&&e[t+4]==="A"&&e[t+5]==="T"&&e[t+6]==="A"&&e[t+7]==="["){for(t+=8;t<e.length;t++)if(e[t]==="]"&&e[t+1]==="]"&&e[t+2]===">"){t+=2;break}}return t}const te='"',se="'";function ne(e,t){let s="",i="",n=!1;for(;t<e.length;t++){if(e[t]===te||e[t]===se)i===""?i=e[t]:i!==e[t]||(i="");else if(e[t]===">"&&i===""){n=!0;break}s+=e[t]}return i!==""?!1:{value:s,index:t,tagClosed:n}}const re=new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,"g");function V(e,t){const s=v.getAllMatches(e,re),i={};for(let n=0;n<s.length;n++){if(s[n][1].length===0)return g("InvalidAttr","Attribute '"+s[n][2]+"' has no space in starting.",A(s[n]));if(s[n][3]!==void 0&&s[n][4]===void 0)return g("InvalidAttr","Attribute '"+s[n][2]+"' is without value.",A(s[n]));if(s[n][3]===void 0&&!t.allowBooleanAttributes)return g("InvalidAttr","boolean attribute '"+s[n][2]+"' is not allowed.",A(s[n]));const r=s[n][2];if(!ue(r))return g("InvalidAttr","Attribute '"+r+"' is an invalid name.",A(s[n]));if(!i.hasOwnProperty(r))i[r]=1;else return g("InvalidAttr","Attribute '"+r+"' is repeated.",A(s[n]))}return!0}function ie(e,t){let s=/\d/;for(e[t]==="x"&&(t++,s=/[\da-fA-F]/);t<e.length;t++){if(e[t]===";")return t;if(!e[t].match(s))break}return-1}function oe(e,t){if(t++,e[t]===";")return-1;if(e[t]==="#")return t++,ie(e,t);let s=0;for(;t<e.length;t++,s++)if(!(e[t].match(/\w/)&&s<20)){if(e[t]===";")break;return-1}return t}function g(e,t,s){return{err:{code:e,msg:t,line:s.line||s,col:s.col}}}function ue(e){return v.isName(e)}function ae(e){return v.isName(e)}function N(e,t){const s=e.substring(0,t).split(/\r?\n/);return{line:s.length,col:s[s.length-1].length+1}}function A(e){return e.startIndex+e[1].length}var $={};const X={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(e,t){return t},attributeValueProcessor:function(e,t){return t},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(e,t,s){return e}},le=function(e){return Object.assign({},X,e)};$.buildOptions=le;$.defaultOptions=X;class fe{constructor(t){this.tagname=t,this.child=[],this[":@"]={}}add(t,s){t==="__proto__"&&(t="#__proto__"),this.child.push({[t]:s})}addChild(t){t.tagname==="__proto__"&&(t.tagname="#__proto__"),t[":@"]&&Object.keys(t[":@"]).length>0?this.child.push({[t.tagname]:t.child,":@":t[":@"]}):this.child.push({[t.tagname]:t.child})}}var de=fe;const ce=P;function he(e,t){const s={};if(e[t+3]==="O"&&e[t+4]==="C"&&e[t+5]==="T"&&e[t+6]==="Y"&&e[t+7]==="P"&&e[t+8]==="E"){t=t+9;let i=1,n=!1,r=!1,a="";for(;t<e.length;t++)if(e[t]==="<"&&!r){if(n&&Ne(e,t))t+=7,[entityName,val,t]=ge(e,t+1),val.indexOf("&")===-1&&(s[Te(entityName)]={regx:RegExp(`&${entityName};`,"g"),val});else if(n&&be(e,t))t+=8;else if(n&&ye(e,t))t+=8;else if(n&&me(e,t))t+=9;else if(pe)r=!0;else throw new Error("Invalid DOCTYPE");i++,a=""}else if(e[t]===">"){if(r?e[t-1]==="-"&&e[t-2]==="-"&&(r=!1,i--):i--,i===0)break}else e[t]==="["?n=!0:a+=e[t];if(i!==0)throw new Error("Unclosed DOCTYPE")}else throw new Error("Invalid Tag instead of DOCTYPE");return{entities:s,i:t}}function ge(e,t){let s="";for(;t<e.length&&e[t]!=="'"&&e[t]!=='"';t++)s+=e[t];if(s=s.trim(),s.indexOf(" ")!==-1)throw new Error("External entites are not supported");const i=e[t++];let n="";for(;t<e.length&&e[t]!==i;t++)n+=e[t];return[s,n,t]}function pe(e,t){return e[t+1]==="!"&&e[t+2]==="-"&&e[t+3]==="-"}function Ne(e,t){return e[t+1]==="!"&&e[t+2]==="E"&&e[t+3]==="N"&&e[t+4]==="T"&&e[t+5]==="I"&&e[t+6]==="T"&&e[t+7]==="Y"}function be(e,t){return e[t+1]==="!"&&e[t+2]==="E"&&e[t+3]==="L"&&e[t+4]==="E"&&e[t+5]==="M"&&e[t+6]==="E"&&e[t+7]==="N"&&e[t+8]==="T"}function ye(e,t){return e[t+1]==="!"&&e[t+2]==="A"&&e[t+3]==="T"&&e[t+4]==="T"&&e[t+5]==="L"&&e[t+6]==="I"&&e[t+7]==="S"&&e[t+8]==="T"}function me(e,t){return e[t+1]==="!"&&e[t+2]==="N"&&e[t+3]==="O"&&e[t+4]==="T"&&e[t+5]==="A"&&e[t+6]==="T"&&e[t+7]==="I"&&e[t+8]==="O"&&e[t+9]==="N"}function Te(e){if(ce.isName(e))return e;throw new Error(`Invalid entity name ${e}`)}var Ee=he;const Ae=/^[-+]?0x[a-fA-F0-9]+$/,Ie=/^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt);!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);const Pe={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0};function Ce(e,t={}){if(t=Object.assign({},Pe,t),!e||typeof e!="string")return e;let s=e.trim();if(t.skipLike!==void 0&&t.skipLike.test(s))return e;if(t.hex&&Ae.test(s))return Number.parseInt(s,16);{const i=Ie.exec(s);if(i){const n=i[1],r=i[2];let a=we(i[3]);const u=i[4]||i[6];if(!t.leadingZeros&&r.length>0&&n&&s[2]!==".")return e;if(!t.leadingZeros&&r.length>0&&!n&&s[1]!==".")return e;{const o=Number(s),f=""+o;return f.search(/[eE]/)!==-1||u?t.eNotation?o:e:s.indexOf(".")!==-1?f==="0"&&a===""||f===a||n&&f==="-"+a?o:e:r?a===f||n+a===f?o:e:s===f||s===n+f?o:e}}else return e}}function we(e){return e&&e.indexOf(".")!==-1&&(e=e.replace(/0+$/,""),e==="."?e="0":e[0]==="."?e="0"+e:e[e.length-1]==="."&&(e=e.substr(0,e.length-1))),e}var xe=Ce;const q=P,I=de,Oe=Ee,ve=xe;let $e=class{constructor(t){this.options=t,this.currentNode=null,this.tagsNodeStack=[],this.docTypeEntities={},this.lastEntities={apos:{regex:/&(apos|#39|#x27);/g,val:"'"},gt:{regex:/&(gt|#62|#x3E);/g,val:">"},lt:{regex:/&(lt|#60|#x3C);/g,val:"<"},quot:{regex:/&(quot|#34|#x22);/g,val:'"'}},this.ampEntity={regex:/&(amp|#38|#x26);/g,val:"&"},this.htmlEntities={space:{regex:/&(nbsp|#160);/g,val:" "},cent:{regex:/&(cent|#162);/g,val:"¢"},pound:{regex:/&(pound|#163);/g,val:"£"},yen:{regex:/&(yen|#165);/g,val:"¥"},euro:{regex:/&(euro|#8364);/g,val:"€"},copyright:{regex:/&(copy|#169);/g,val:"©"},reg:{regex:/&(reg|#174);/g,val:"®"},inr:{regex:/&(inr|#8377);/g,val:"₹"},num_dec:{regex:/&#([0-9]{1,7});/g,val:(s,i)=>String.fromCharCode(Number.parseInt(i,10))},num_hex:{regex:/&#x([0-9a-fA-F]{1,6});/g,val:(s,i)=>String.fromCharCode(Number.parseInt(i,16))}},this.addExternalEntities=Se,this.parseXml=Re,this.parseTextData=_e,this.resolveNameSpace=Fe,this.buildAttributesMap=Ve,this.isItStopNode=qe,this.replaceEntitiesValue=Le,this.readStopNodeData=Ke,this.saveTextToParentTag=Xe,this.addChild=Be}};function Se(e){const t=Object.keys(e);for(let s=0;s<t.length;s++){const i=t[s];this.lastEntities[i]={regex:new RegExp("&"+i+";","g"),val:e[i]}}}function _e(e,t,s,i,n,r,a){if(e!==void 0&&(this.options.trimValues&&!i&&(e=e.trim()),e.length>0)){a||(e=this.replaceEntitiesValue(e));const u=this.options.tagValueProcessor(t,e,s,n,r);return u==null?e:typeof u!=typeof e||u!==e?u:this.options.trimValues?w(e,this.options.parseTagValue,this.options.numberParseOptions):e.trim()===e?w(e,this.options.parseTagValue,this.options.numberParseOptions):e}}function Fe(e){if(this.options.removeNSPrefix){const t=e.split(":"),s=e.charAt(0)==="/"?"/":"";if(t[0]==="xmlns")return"";t.length===2&&(e=s+t[1])}return e}const ke=new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`,"gm");function Ve(e,t,s){if(!this.options.ignoreAttributes&&typeof e=="string"){const i=q.getAllMatches(e,ke),n=i.length,r={};for(let a=0;a<n;a++){const u=this.resolveNameSpace(i[a][1]);let o=i[a][4],f=this.options.attributeNamePrefix+u;if(u.length)if(this.options.transformAttributeName&&(f=this.options.transformAttributeName(f)),f==="__proto__"&&(f="#__proto__"),o!==void 0){this.options.trimValues&&(o=o.trim()),o=this.replaceEntitiesValue(o);const l=this.options.attributeValueProcessor(u,o,t);l==null?r[f]=o:typeof l!=typeof o||l!==o?r[f]=l:r[f]=w(o,this.options.parseAttributeValue,this.options.numberParseOptions)}else this.options.allowBooleanAttributes&&(r[f]=!0)}if(!Object.keys(r).length)return;if(this.options.attributesGroupName){const a={};return a[this.options.attributesGroupName]=r,a}return r}}const Re=function(e){e=e.replace(/\r\n?/g,`
`);const t=new I("!xml");let s=t,i="",n="";for(let r=0;r<e.length;r++)if(e[r]==="<")if(e[r+1]==="/"){const u=E(e,">",r,"Closing Tag is not closed.");let o=e.substring(r+2,u).trim();if(this.options.removeNSPrefix){const d=o.indexOf(":");d!==-1&&(o=o.substr(d+1))}this.options.transformTagName&&(o=this.options.transformTagName(o)),s&&(i=this.saveTextToParentTag(i,s,n));const f=n.substring(n.lastIndexOf(".")+1);if(o&&this.options.unpairedTags.indexOf(o)!==-1)throw new Error(`Unpaired tag can not be used as closing tag: </${o}>`);let l=0;f&&this.options.unpairedTags.indexOf(f)!==-1?(l=n.lastIndexOf(".",n.lastIndexOf(".")-1),this.tagsNodeStack.pop()):l=n.lastIndexOf("."),n=n.substring(0,l),s=this.tagsNodeStack.pop(),i="",r=u}else if(e[r+1]==="?"){let u=C(e,r,!1,"?>");if(!u)throw new Error("Pi Tag is not closed.");if(i=this.saveTextToParentTag(i,s,n),!(this.options.ignoreDeclaration&&u.tagName==="?xml"||this.options.ignorePiTags)){const o=new I(u.tagName);o.add(this.options.textNodeName,""),u.tagName!==u.tagExp&&u.attrExpPresent&&(o[":@"]=this.buildAttributesMap(u.tagExp,n,u.tagName)),this.addChild(s,o,n)}r=u.closeIndex+1}else if(e.substr(r+1,3)==="!--"){const u=E(e,"-->",r+4,"Comment is not closed.");if(this.options.commentPropName){const o=e.substring(r+4,u-2);i=this.saveTextToParentTag(i,s,n),s.add(this.options.commentPropName,[{[this.options.textNodeName]:o}])}r=u}else if(e.substr(r+1,2)==="!D"){const u=Oe(e,r);this.docTypeEntities=u.entities,r=u.i}else if(e.substr(r+1,2)==="!["){const u=E(e,"]]>",r,"CDATA is not closed.")-2,o=e.substring(r+9,u);i=this.saveTextToParentTag(i,s,n);let f=this.parseTextData(o,s.tagname,n,!0,!1,!0,!0);f==null&&(f=""),this.options.cdataPropName?s.add(this.options.cdataPropName,[{[this.options.textNodeName]:o}]):s.add(this.options.textNodeName,f),r=u+2}else{let u=C(e,r,this.options.removeNSPrefix),o=u.tagName;const f=u.rawTagName;let l=u.tagExp,d=u.attrExpPresent,c=u.closeIndex;this.options.transformTagName&&(o=this.options.transformTagName(o)),s&&i&&s.tagname!=="!xml"&&(i=this.saveTextToParentTag(i,s,n,!1));const p=s;if(p&&this.options.unpairedTags.indexOf(p.tagname)!==-1&&(s=this.tagsNodeStack.pop(),n=n.substring(0,n.lastIndexOf("."))),o!==t.tagname&&(n+=n?"."+o:o),this.isItStopNode(this.options.stopNodes,n,o)){let h="";if(l.length>0&&l.lastIndexOf("/")===l.length-1)o[o.length-1]==="/"?(o=o.substr(0,o.length-1),n=n.substr(0,n.length-1),l=o):l=l.substr(0,l.length-1),r=u.closeIndex;else if(this.options.unpairedTags.indexOf(o)!==-1)r=u.closeIndex;else{const b=this.readStopNodeData(e,f,c+1);if(!b)throw new Error(`Unexpected end of ${f}`);r=b.i,h=b.tagContent}const m=new I(o);o!==l&&d&&(m[":@"]=this.buildAttributesMap(l,n,o)),h&&(h=this.parseTextData(h,o,n,!0,d,!0,!0)),n=n.substr(0,n.lastIndexOf(".")),m.add(this.options.textNodeName,h),this.addChild(s,m,n)}else{if(l.length>0&&l.lastIndexOf("/")===l.length-1){o[o.length-1]==="/"?(o=o.substr(0,o.length-1),n=n.substr(0,n.length-1),l=o):l=l.substr(0,l.length-1),this.options.transformTagName&&(o=this.options.transformTagName(o));const h=new I(o);o!==l&&d&&(h[":@"]=this.buildAttributesMap(l,n,o)),this.addChild(s,h,n),n=n.substr(0,n.lastIndexOf("."))}else{const h=new I(o);this.tagsNodeStack.push(s),o!==l&&d&&(h[":@"]=this.buildAttributesMap(l,n,o)),this.addChild(s,h,n),s=h}i="",r=c}}else i+=e[r];return t.child};function Be(e,t,s){const i=this.options.updateTag(t.tagname,s,t[":@"]);i===!1||(typeof i=="string"&&(t.tagname=i),e.addChild(t))}const Le=function(e){if(this.options.processEntities){for(let t in this.docTypeEntities){const s=this.docTypeEntities[t];e=e.replace(s.regx,s.val)}for(let t in this.lastEntities){const s=this.lastEntities[t];e=e.replace(s.regex,s.val)}if(this.options.htmlEntities)for(let t in this.htmlEntities){const s=this.htmlEntities[t];e=e.replace(s.regex,s.val)}e=e.replace(this.ampEntity.regex,this.ampEntity.val)}return e};function Xe(e,t,s,i){return e&&(i===void 0&&(i=Object.keys(t.child).length===0),e=this.parseTextData(e,t.tagname,s,!1,t[":@"]?Object.keys(t[":@"]).length!==0:!1,i),e!==void 0&&e!==""&&t.add(this.options.textNodeName,e),e=""),e}function qe(e,t,s){const i="*."+s;for(const n in e){const r=e[n];if(i===r||t===r)return!0}return!1}function Me(e,t,s=">"){let i,n="";for(let r=t;r<e.length;r++){let a=e[r];if(i)a===i&&(i="");else if(a==='"'||a==="'")i=a;else if(a===s[0])if(s[1]){if(e[r+1]===s[1])return{data:n,index:r}}else return{data:n,index:r};else a==="	"&&(a=" ");n+=a}}function E(e,t,s,i){const n=e.indexOf(t,s);if(n===-1)throw new Error(i);return n+t.length-1}function C(e,t,s,i=">"){const n=Me(e,t+1,i);if(!n)return;let r=n.data;const a=n.index,u=r.search(/\s/);let o=r,f=!0;u!==-1&&(o=r.substring(0,u),r=r.substring(u+1).trimStart());const l=o;if(s){const d=o.indexOf(":");d!==-1&&(o=o.substr(d+1),f=o!==n.data.substr(d+1))}return{tagName:o,tagExp:r,closeIndex:a,attrExpPresent:f,rawTagName:l}}function Ke(e,t,s){const i=s;let n=1;for(;s<e.length;s++)if(e[s]==="<")if(e[s+1]==="/"){const r=E(e,">",s,`${t} is not closed`);if(e.substring(s+2,r).trim()===t&&(n--,n===0))return{tagContent:e.substring(i,s),i:r};s=r}else if(e[s+1]==="?")s=E(e,"?>",s+1,"StopNode is not closed.");else if(e.substr(s+1,3)==="!--")s=E(e,"-->",s+3,"StopNode is not closed.");else if(e.substr(s+1,2)==="![")s=E(e,"]]>",s,"StopNode is not closed.")-2;else{const r=C(e,s,">");r&&((r&&r.tagName)===t&&r.tagExp[r.tagExp.length-1]!=="/"&&n++,s=r.closeIndex)}}function w(e,t,s){if(t&&typeof e=="string"){const i=e.trim();return i==="true"?!0:i==="false"?!1:ve(e,s)}else return q.isExist(e)?e:""}var Ge=$e,M={};function Ue(e,t){return K(e,t)}function K(e,t,s){let i;const n={};for(let r=0;r<e.length;r++){const a=e[r],u=je(a);let o="";if(s===void 0?o=u:o=s+"."+u,u===t.textNodeName)i===void 0?i=a[u]:i+=""+a[u];else{if(u===void 0)continue;if(a[u]){let f=K(a[u],t,o);const l=Ye(f,t);a[":@"]?Ze(f,a[":@"],o,t):Object.keys(f).length===1&&f[t.textNodeName]!==void 0&&!t.alwaysCreateTextNode?f=f[t.textNodeName]:Object.keys(f).length===0&&(t.alwaysCreateTextNode?f[t.textNodeName]="":f=""),n[u]!==void 0&&n.hasOwnProperty(u)?(Array.isArray(n[u])||(n[u]=[n[u]]),n[u].push(f)):t.isArray(u,o,l)?n[u]=[f]:n[u]=f}}}return typeof i=="string"?i.length>0&&(n[t.textNodeName]=i):i!==void 0&&(n[t.textNodeName]=i),n}function je(e){const t=Object.keys(e);for(let s=0;s<t.length;s++){const i=t[s];if(i!==":@")return i}}function Ze(e,t,s,i){if(t){const n=Object.keys(t),r=n.length;for(let a=0;a<r;a++){const u=n[a];i.isArray(u,s+"."+u,!0,!0)?e[u]=[t[u]]:e[u]=t[u]}}}function Ye(e,t){const{textNodeName:s}=t,i=Object.keys(e).length;return!!(i===0||i===1&&(e[s]||typeof e[s]=="boolean"||e[s]===0))}M.prettify=Ue;const{buildOptions:Je}=$,We=Ge,{prettify:ze}=M,He=O;let Qe=class{constructor(t){this.externalEntities={},this.options=Je(t)}parse(t,s){if(typeof t!="string")if(t.toString)t=t.toString();else throw new Error("XML data is accepted in String or Bytes[] form.");if(s){s===!0&&(s={});const r=He.validate(t,s);if(r!==!0)throw Error(`${r.err.msg}:${r.err.line}:${r.err.col}`)}const i=new We(this.options);i.addExternalEntities(this.externalEntities);const n=i.parseXml(t);return this.options.preserveOrder||n===void 0?n:ze(n,this.options)}addEntity(t,s){if(s.indexOf("&")!==-1)throw new Error("Entity value can't have '&'");if(t.indexOf("&")!==-1||t.indexOf(";")!==-1)throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");if(s==="&")throw new Error("An entity with value '&' is not permitted");this.externalEntities[t]=s}};var De=Qe;const et=`
`;function tt(e,t){let s="";return t.format&&t.indentBy.length>0&&(s=et),G(e,t,"",s)}function G(e,t,s,i){let n="",r=!1;for(let a=0;a<e.length;a++){const u=e[a],o=st(u);if(o===void 0)continue;let f="";if(s.length===0?f=o:f=`${s}.${o}`,o===t.textNodeName){let h=u[o];nt(f,t)||(h=t.tagValueProcessor(o,h),h=U(h,t)),r&&(n+=i),n+=h,r=!1;continue}else if(o===t.cdataPropName){r&&(n+=i),n+=`<![CDATA[${u[o][0][t.textNodeName]}]]>`,r=!1;continue}else if(o===t.commentPropName){n+=i+`<!--${u[o][0][t.textNodeName]}-->`,r=!0;continue}else if(o[0]==="?"){const h=R(u[":@"],t),m=o==="?xml"?"":i;let b=u[o][0][t.textNodeName];b=b.length!==0?" "+b:"",n+=m+`<${o}${b}${h}?>`,r=!0;continue}let l=i;l!==""&&(l+=t.indentBy);const d=R(u[":@"],t),c=i+`<${o}${d}`,p=G(u[o],t,f,l);t.unpairedTags.indexOf(o)!==-1?t.suppressUnpairedNode?n+=c+">":n+=c+"/>":(!p||p.length===0)&&t.suppressEmptyNode?n+=c+"/>":p&&p.endsWith(">")?n+=c+`>${p}${i}</${o}>`:(n+=c+">",p&&i!==""&&(p.includes("/>")||p.includes("</"))?n+=i+t.indentBy+p+i:n+=p,n+=`</${o}>`),r=!0}return n}function st(e){const t=Object.keys(e);for(let s=0;s<t.length;s++){const i=t[s];if(e.hasOwnProperty(i)&&i!==":@")return i}}function R(e,t){let s="";if(e&&!t.ignoreAttributes)for(let i in e){if(!e.hasOwnProperty(i))continue;let n=t.attributeValueProcessor(i,e[i]);n=U(n,t),n===!0&&t.suppressBooleanAttributes?s+=` ${i.substr(t.attributeNamePrefix.length)}`:s+=` ${i.substr(t.attributeNamePrefix.length)}="${n}"`}return s}function nt(e,t){e=e.substr(0,e.length-t.textNodeName.length-1);let s=e.substr(e.lastIndexOf(".")+1);for(let i in t.stopNodes)if(t.stopNodes[i]===e||t.stopNodes[i]==="*."+s)return!0;return!1}function U(e,t){if(e&&e.length>0&&t.processEntities)for(let s=0;s<t.entities.length;s++){const i=t.entities[s];e=e.replace(i.regex,i.val)}return e}var rt=tt;const it=rt,ot={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(e,t){return t},attributeValueProcessor:function(e,t){return t},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1};function T(e){this.options=Object.assign({},ot,e),this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=lt),this.processTextOrObjNode=ut,this.options.format?(this.indentate=at,this.tagEndChar=`>
`,this.newLine=`
`):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}T.prototype.build=function(e){return this.options.preserveOrder?it(e,this.options):(Array.isArray(e)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(e={[this.options.arrayNodeName]:e}),this.j2x(e,0).val)};T.prototype.j2x=function(e,t){let s="",i="";for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n))if(typeof e[n]>"u")this.isAttribute(n)&&(i+="");else if(e[n]===null)this.isAttribute(n)?i+="":n[0]==="?"?i+=this.indentate(t)+"<"+n+"?"+this.tagEndChar:i+=this.indentate(t)+"<"+n+"/"+this.tagEndChar;else if(e[n]instanceof Date)i+=this.buildTextValNode(e[n],n,"",t);else if(typeof e[n]!="object"){const r=this.isAttribute(n);if(r)s+=this.buildAttrPairStr(r,""+e[n]);else if(n===this.options.textNodeName){let a=this.options.tagValueProcessor(n,""+e[n]);i+=this.replaceEntitiesValue(a)}else i+=this.buildTextValNode(e[n],n,"",t)}else if(Array.isArray(e[n])){const r=e[n].length;let a="";for(let u=0;u<r;u++){const o=e[n][u];typeof o>"u"||(o===null?n[0]==="?"?i+=this.indentate(t)+"<"+n+"?"+this.tagEndChar:i+=this.indentate(t)+"<"+n+"/"+this.tagEndChar:typeof o=="object"?this.options.oneListGroup?a+=this.j2x(o,t+1).val:a+=this.processTextOrObjNode(o,n,t):a+=this.buildTextValNode(o,n,"",t))}this.options.oneListGroup&&(a=this.buildObjectNode(a,n,"",t)),i+=a}else if(this.options.attributesGroupName&&n===this.options.attributesGroupName){const r=Object.keys(e[n]),a=r.length;for(let u=0;u<a;u++)s+=this.buildAttrPairStr(r[u],""+e[n][r[u]])}else i+=this.processTextOrObjNode(e[n],n,t);return{attrStr:s,val:i}};T.prototype.buildAttrPairStr=function(e,t){return t=this.options.attributeValueProcessor(e,""+t),t=this.replaceEntitiesValue(t),this.options.suppressBooleanAttributes&&t==="true"?" "+e:" "+e+'="'+t+'"'};function ut(e,t,s){const i=this.j2x(e,s+1);return e[this.options.textNodeName]!==void 0&&Object.keys(e).length===1?this.buildTextValNode(e[this.options.textNodeName],t,i.attrStr,s):this.buildObjectNode(i.val,t,i.attrStr,s)}T.prototype.buildObjectNode=function(e,t,s,i){if(e==="")return t[0]==="?"?this.indentate(i)+"<"+t+s+"?"+this.tagEndChar:this.indentate(i)+"<"+t+s+this.closeTag(t)+this.tagEndChar;{let n="</"+t+this.tagEndChar,r="";return t[0]==="?"&&(r="?",n=""),(s||s==="")&&e.indexOf("<")===-1?this.indentate(i)+"<"+t+s+r+">"+e+n:this.options.commentPropName!==!1&&t===this.options.commentPropName&&r.length===0?this.indentate(i)+`<!--${e}-->`+this.newLine:this.indentate(i)+"<"+t+s+r+this.tagEndChar+e+this.indentate(i)+n}};T.prototype.closeTag=function(e){let t="";return this.options.unpairedTags.indexOf(e)!==-1?this.options.suppressUnpairedNode||(t="/"):this.options.suppressEmptyNode?t="/":t=`></${e}`,t};T.prototype.buildTextValNode=function(e,t,s,i){if(this.options.cdataPropName!==!1&&t===this.options.cdataPropName)return this.indentate(i)+`<![CDATA[${e}]]>`+this.newLine;if(this.options.commentPropName!==!1&&t===this.options.commentPropName)return this.indentate(i)+`<!--${e}-->`+this.newLine;if(t[0]==="?")return this.indentate(i)+"<"+t+s+"?"+this.tagEndChar;{let n=this.options.tagValueProcessor(t,e);return n=this.replaceEntitiesValue(n),n===""?this.indentate(i)+"<"+t+s+this.closeTag(t)+this.tagEndChar:this.indentate(i)+"<"+t+s+">"+n+"</"+t+this.tagEndChar}};T.prototype.replaceEntitiesValue=function(e){if(e&&e.length>0&&this.options.processEntities)for(let t=0;t<this.options.entities.length;t++){const s=this.options.entities[t];e=e.replace(s.regex,s.val)}return e};function at(e){return this.options.indentBy.repeat(e)}function lt(e){return e.startsWith(this.options.attributeNamePrefix)&&e!==this.options.textNodeName?e.substr(this.attrPrefixLen):!1}var ft=T;const dt=O,ct=De,ht=ft;var gt={XMLParser:ct,XMLValidator:dt,XMLBuilder:ht};const pt=x.memo(function({onDataParsed:t}){const{t:s}=B(),i=n=>{var a;const r=(a=n.target.files)==null?void 0:a[0];if(r){const u=new FileReader;u.onload=o=>{var p,h,m,b;const f=(p=o.target)==null?void 0:p.result,c=((b=(m=(h=new gt.XMLParser({ignoreAttributes:!1,attributeNamePrefix:"",textNodeName:"_text"}).parse(f).Document)==null?void 0:h.BkToCstmrStmt)==null?void 0:m.Stmt)==null?void 0:b.Ntry.map(j=>({...j,id:H()})))||[];console.log("Entries:",c),t(c)},u.readAsText(r)}};return y.jsxs(y.Fragment,{children:[y.jsx(L,{title:s("XML File Uploader and Viewer")}),y.jsx("input",{type:"file",accept:".xml",onChange:i})]})}),Nt=[{key:"Amt",header:"Amount",nestedKeys:["_text"],uniqueId:"amount"},{key:"Amt",header:"Currency",nestedKeys:["Ccy"],uniqueId:"currency"},{key:"CdtDbtInd",header:"Credit/Debit",uniqueId:"creditDebit"},{key:"ValDt",header:"Value Date",nestedKeys:["Dt"],uniqueId:"valueDate"},{key:"NtryDtls",header:"Account Servicer Ref",nestedKeys:["TxDtls","Refs","AcctSvcrRef"],uniqueId:"accountServicerRef"},{key:"NtryDtls",header:"Transaction Amount",nestedKeys:["TxDtls","AmtDtls","TxAmt","Amt","_text"],uniqueId:"transactionAmount"},{key:"NtryDtls",header:"Debtor Name",nestedKeys:["TxDtls","RltdPties","Dbtr","Nm"],uniqueId:"debtorName"},{key:"NtryDtls",header:"Debtor Country",nestedKeys:["TxDtls","RltdPties","Dbtr","PstlAdr","Ctry"],uniqueId:"debtorCountry"},{key:"NtryDtls",header:"Debtor Address",nestedKeys:["TxDtls","RltdPties","Dbtr","PstlAdr","AdrLine"],uniqueId:"debtorAddress"},{key:"NtryDtls",header:"Debtor IBAN",nestedKeys:["TxDtls","RltdPties","DbtrAcct","Id","IBAN"],uniqueId:"debtorIban"},{key:"NtryDtls",header:"Creditor Name",nestedKeys:["TxDtls","RltdPties","Cdtr","Nm"],uniqueId:"creditorName"},{key:"NtryDtls",header:"Creditor IBAN",nestedKeys:["TxDtls","RltdPties","CdtrAcct","Id","IBAN"],uniqueId:"creditorIban"},{key:"NtryDtls",header:"Debtor Agent BIC",nestedKeys:["TxDtls","RltdAgts","DbtrAgt","FinInstnId","BIC"],uniqueId:"debtorAgentBic"},{key:"NtryDtls",header:"Debtor Agent Name",nestedKeys:["TxDtls","RltdAgts","DbtrAgt","FinInstnId","Nm"],uniqueId:"debtorAgentName"},{key:"NtryDtls",header:"Creditor Agent BIC",nestedKeys:["TxDtls","RltdAgts","CdtrAgt","FinInstnId","BIC"],uniqueId:"creditorAgentBic"},{key:"NtryDtls",header:"Creditor Agent Name",nestedKeys:["TxDtls","RltdAgts","CdtrAgt","FinInstnId","Nm"],uniqueId:"creditorAgentName"},{key:"NtryDtls",header:"Remittance Info",nestedKeys:["TxDtls","RmtInf","Ustrd"],uniqueId:"remittanceInfo"}],bt=e=>{const{className:t}=e,{t:s}=B(),[i,n]=x.useState([]),r=a=>{n(a)};return y.jsx(Z,{max:!0,justify:"center",children:y.jsxs(Y,{gap:"32",className:J(S.accountantPanelPage,[t],{}),children:[y.jsx(pt,{onDataParsed:r}),i.length>0&&y.jsx(W,{title:"List of XML Entries",columns:Nt,data:i,verticalHeaders:!0,children:y.jsx(z,{data:i,fileName:"Employees"})}),y.jsx(L,{variant:"error",size:"m",text:s("Acceess granted only for accountants! Welcome!"),className:S.welcome})]})})},At=x.memo(bt);export{At as default};
