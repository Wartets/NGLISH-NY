!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},i=(new Error).stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="1e89dc07-fa2c-499e-9435-bf2833212507",e._sentryDebugIdIdentifier="sentry-dbid-1e89dc07-fa2c-499e-9435-bf2833212507")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"0641108747ac3eed7f951ff2065d53f73693fe04"},(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{KFDm:function(e,i,a){"use strict";a.r(i);var n=a("gcR/"),t=a.n(n),o=a("q1tI"),c=a.n(o),s=a("Jqp9"),l=a("X6oL"),d=a("i9j7"),r=a.n(d),p=a("GB3f"),m=a("wXC7"),u=a.n(m),f=a("KeRS"),b=a.n(f),h=a("J4zp"),x=a.n(h);function g(e){var i=e.className,a=e.children,n=e.uniqueName,s=e.alwaysOpen,l=e.allowMultiple,d=[];o.Children.forEach(a,(function(e,i){e.props.expanded&&d.push(i)}));var r=Object(o.useState)(d),p=x()(r,2),m=p[0],u=p[1];return t()("div",{className:i,role:"tablist","aria-multiselectable":"true","data-testid":"accordion"},void 0,o.Children.map(a,(function(e,i){return c.a.cloneElement(e,{expanded:-1!==m.indexOf(i),index:i,uid:"".concat(n,"-").concat(i),onClick:function(){return function(e,i){"function"==typeof i&&i();var a=m.slice(0),n=1===a.length&&s,t=a.indexOf(e);-1===t||n?l?a.push(e):a=[e]:a.splice(t,1),u(a)}(i,e.props.onClick)}})})))}g.displayName="Accordion",g.defaultProps={allowMultiple:!1,alwaysOpen:!1,className:" ",children:null};var v=g,y=a("lSNA"),k=a.n(y);function N(e){var i=e.uid,a=e.onClick,n=e.className,l=e.expanded,d=e.expandedClassName,r=e.children;return t()("div",{className:Object(s.cx)(n,k()({},d,l)),"data-testid":"accordion-item"},void 0,o.Children.map(r,(function(e){return c.a.cloneElement(e,{onClick:a,expanded:l,uid:i})})))}N.displayName="AccordionItem",N.defaultProps={onClick:function(){},expanded:!1,expandedClassName:void 0,className:void 0,uid:"",children:null};var w=N;function C(e){var i=e.uid,a=e.expanded,n=e.className,o=e.children,c={};return a||(c.display="none"),t()("div",{className:Object(s.cx)(Object(s.css)(c),n),id:"body-".concat(i),"aria-labelledby":"item-".concat(i),role:"tabpanel","data-testid":"accordion-item-body"},void 0,o)}C.displayName="AccordionItemBody",C.defaultProps={expanded:!1,className:void 0,uid:"",children:null};var O=C,j=Object(s.css)("cursor:pointer;margin:0;");function D(e){var i=e.uid,a=e.className,n=e.onClick,o=e.expanded,c=e.children;return t()("header",{"aria-controls":"body-".concat(i),id:"item-".concat(i),className:Object(s.cx)(j,a),onClick:n,onKeyUp:function(e){return!n||13!==e.keyCode&&32!==e.keyCode||(n(),!1)},role:"tab",tabIndex:"0","aria-expanded":o,"data-testid":"accordion-item-header"},void 0,c)}D.displayName="AccordionItemHeader",D.defaultProps={expanded:!1,className:void 0,children:null,uid:"",onClick:null};var S=Object(s.css)("list-style:none;margin:0;padding:0;"),I=(u.a.color.gray60,u.a.breakpoint.medium,u.a.color.gray60,u.a.color.gray60,u.a.breakpoint.large,u.a.breakpoint.maxDesktopContentWidth,Object(s.css)("&::before{background-color:",u.a.color.white,";border-bottom:1px solid ",u.a.color.gray60,";border-top:2px solid ",u.a.color.gray60,";content:'';display:block;height:1px;margin-top:0;}padding:0 20px;",u.a.breakpoint.medium,"{padding:0 3%;}",u.a.breakpoint.large,"{padding:0;}")),A=Object(s.css)("display:flex;flex-flow:row;"),L=Object(s.css)("display:block;height:44px;vertical-align:middle;width:184px;"),E=Object(s.css)("margin:18px 0 0 auto;"),z=Object(s.css)("color:",u.a.color.blue30,";font-family:",u.a.font.franklinBase,";font-size:11px;font-style:normal;font-weight:",u.a.font.weight.book,";line-height:11px;text-decoration:none;"),P=Object(s.css)("display:block;",u.a.breakpoint.large,"{display:none;}"),_=Object(s.css)("display:none;",u.a.breakpoint.large,"{display:block;}"),H=Object(s.css)("display:flex;margin-top:10px;min-width:600px;"),B=Object(s.css)("flex:1;"),T=Object(s.css)("border-left:1px solid ",u.a.color.gray60,";flex:1;padding-left:15px;"),M=Object(s.css)("color:",u.a.color.gray20,";font-size:13px;font-weight:",u.a.font.weight.bold,";font-family:",u.a.font.franklinBase,";height:25px;line-height:15px;margin:0;text-transform:uppercase;width:150px;"),q=Object(s.css)("margin-bottom:5px;white-space:nowrap;&:last-child{margin-bottom:10px;}"),G=Object(s.css)("color:",u.a.color.black,";display:inline-block;font-family:",u.a.font.franklinBase,";text-decoration:none;width:150px;&:hover{cursor:pointer;text-decoration:underline;}body.dark &{color:",u.a.color.white,";}"),V=Object(s.css)("&.desktop{display:none;}",u.a.breakpoint.medium,"{&.desktop{display:block;}&.smartphone{display:none;}}"),R=Object(s.css)("border-top:1px solid ",u.a.color.gray70,";color:",u.a.color.gray20,";font-family:",u.a.font.franklinBase,";font-size:13px;font-weight:",u.a.font.weight.bold,";height:44px;letter-spacing:0.04rem;line-height:44px;text-transform:uppercase;.accordionExpanded &{color:",u.a.color.gray45,";}"),J=Object(s.css)(S,";columns:2;padding:0 0 15px;"),F=Object(s.css)("height:34px;line-height:34px;list-style-type:none;&.desktop{display:none;}",u.a.breakpoint.medium,"{&.desktop{display:block;}&.smartphone{display:none;}}"),K=Object(s.css)("color:",u.a.color.gray20,";display:block;font-family:",u.a.font.franklinBase,";font-size:15px;font-weight:",u.a.font.weight.medium,";height:34px;line-height:34px;text-decoration:none;text-transform:capitalize;"),U=Object(s.css)(G,";font-size:14px;font-weight:",u.a.font.weight.medium,";height:23px;line-height:16px;"),X=Object(s.css)(G,";font-size:16px;font-weight:",u.a.font.weight.bold,";height:25px;line-height:15px;padding-bottom:0;"),Y=Object(s.css)(G,";font-size:11px;font-weight:",u.a.font.weight.medium,";height:23px;line-height:21px;"),Q=Object(s.css)(S,";border-top:1px solid ",u.a.color.gray60,";margin-top:2px;padding-top:10px;"),W=Object(s.css)("display:inline-block;height:13px;width:13px;margin-right:7px;vertical-align:middle;"),Z="Listings & More";function $(e){var i=e.indexData,a=e.uniqueName,n=e.handleAccordionClick,o=function(e){if(n){var i,t,o=(t=i=a,"masthead"===i?t="header":"siteindex"===i&&(t="footer"),t),c=function(e){return"more"===e?Z:e.charAt(0).toUpperCase()+e.slice(1)}(e);n(o,c)}};return t()(v,{uniqueName:a},void 0,i.map((function(e,i){return t()(w,{expandedClassName:"accordionExpanded",expanded:e.expanded,onClick:function(){return o(e.name)}},"".concat(a,"-").concat(i.toString(16)),t()(D,{className:R,index:i},void 0,e.longName||e.name),t()(O,{},void 0,t()("ul",{className:J,"data-testid":"site-index-accordion-list"},void 0,e.pages.map((function(e){return t()("li",{className:Object(s.cx)(F,e.deviceType)},e.link,t()("a",{className:K,href:e.link,"data-testid":"accordion-item-list-link"},void 0,e.name))})))))})))}$.displayName="SiteIndexAccordion",$.defaultProps={handleAccordionClick:null,indexData:[]};var ee=$,ie=function(e){var i=e.className,a=e.fill;return t()("svg",{className:i,viewBox:"0 0 10 13"},void 0,t()("path",{fill:a,d:"M9.9,8c-0.4,1.1-1.2,1.9-2.3,2.4V8l1.3-1.2L7.6,5.7V4c1.2-0.1,2-1,2-2c0-1.4-1.3-1.9-2.1-1.9c-0.2,0-0.3,0-0.6,0.1v0.1c0.1,0,0.2,0,0.3,0c0.5,0,0.9,0.2,0.9,0.7c0,0.4-0.3,0.7-0.8,0.7C6,1.7,4.5,0.6,2.8,0.6c-1.5,0-2.5,1.1-2.5,2.2C0.3,4,1,4.3,1.6,4.6l0-0.1C1.4,4.4,1.3,4.1,1.3,3.8c0-0.5,0.5-0.9,1-0.9C3.7,2.9,6,4,7.4,4h0.1v1.7L6.2,6.8L7.5,8v2.4c-0.5,0.2-1.1,0.3-1.7,0.3c-2.2,0-3.6-1.3-3.6-3.5c0-0.5,0.1-1,0.2-1.5l1.1-0.5V10l2.2-1v-5L2.5,5.5c0.3-1,1-1.7,1.8-2l0,0C2.2,3.9,0.1,5.6,0.1,8c0,2.9,2.4,4.8,5.2,4.8C8.2,12.9,9.9,10.9,9.9,8L9.9,8z"}))};ie.displayName="DigitalSubscriptionsIcon",ie.defaultProps={className:void 0,fill:u.a.color.black};var ae,ne,te,oe,ce=ie,se=function(e){var i=e.className,a=e.fill;return t()("svg",{className:i,viewBox:"0 0 14 13",fill:a},void 0,ae||(ae=t()("path",{d:"M13.1,11.7H3.5V1.2h9.6V11.7zM13.1,0.4H3.5C3,0.4,2.6,0.8,2.6,1.2v2.2H0.9C0.4,3.4,0,3.8,0,4.3v5.2v1.5c0,0.8,0.8,1.5,1.8,1.5h1.7h0h7.4h2.2c0.5,0,0.9-0.4,0.9-0.9V1.2C14,0.8,13.6,0.4,13.1,0.4"})),ne||(ne=t()("polygon",{points:"10.9,3 5.2,3 5.2,3.9 11.4,3.9 11.4,3"})),te||(te=t()("rect",{x:"5.2",y:"4.7",width:"6.1",height:"0.9"})),oe||(oe=t()("rect",{x:"5.2",y:"6.5",width:"6.1",height:"0.9"})))};se.displayName="HomeDeliveryIcon",se.defaultProps={className:void 0,fill:u.a.color.black};var le,de=se,re=a("Q/Gi"),pe={productLinks:[{name:"Subscribe",link:"/subscription",iconClass:"iconDigitalSubscriptions"},{name:"Manage My Account",link:"/account",iconClass:"iconAccount"},{name:"Home Delivery",link:"https://www.nytimes.com/subscription/home-delivery",iconClass:"iconHomeDelivery"},{name:"Gift Subscriptions",link:"https://www.nytimes.com/gift",iconClass:"iconDigitalSubscriptions"}],corporateLinks:[{name:"Group Subscriptions",link:"/subscription/groups?Pardot_Campaign_Code_Form_Input=89FQX"},{name:"Gift Articles",link:"/gift-articles"},{name:"Email Newsletters",link:"/newsletters"}],alternateLinks:[{name:"NYT Licensing",link:"https://nytlicensing.com/"},{name:"Replica Edition",link:"https://nytimes.pressreader.com/"},{name:"Times Store",link:"https://store.nytimes.com/"}]},me={iconDigitalSubscriptions:ce,iconHomeDelivery:de,iconAccount:re.a},ue={iconDigitalSubscriptions:W,iconHomeDelivery:W,iconAccount:W},fe=function(){var e=Object(s.useTheme)();return t()("div",{className:T,"aria-labelledby":"site-index-subscribe-label"},void 0,le||(le=t()("h3",{className:M,id:"site-index-subscribe-label"},void 0,"Account")),t()("ul",{className:S,"data-testid":"site-index-subscribe-list"},void 0,pe.productLinks.map((function(i){var a=null;if(i.iconClass){var n,o=me[i.iconClass]||"i",c=ue[i.iconClass]||i.iconClass;me[i.iconClass]&&"dark"===(null==e?void 0:e.mode)&&(n=u.a.color.white),a=t()(o,{className:c,fill:n})}return t()("li",{className:q},i.name,t()("a",{className:X,href:i.link,"data-testid":"site-index-subscribe-list-link"},void 0,a,i.name))}))),t()("ul",{className:S,"data-testid":"site-index-corporate-links"},void 0,pe.corporateLinks.map((function(e){return t()("li",{},e.name,t()("a",{className:Y,href:e.link},void 0,e.name))}))),t()("ul",{className:Q,"data-testid":"site-index-alternate-links"},void 0,pe.alternateLinks.map((function(e){return t()("li",{},e.name,t()("a",{className:Y,href:e.link,onClick:function(){return(null==e?void 0:e.edition)&&Object(p.f)(null==e?void 0:e.edition)},hrefLang:null==e?void 0:e.lang},void 0,e.name))}))))};fe.displayName="SiteIndexSubscribe";var be,he=fe,xe=function(e){var i=e.indexData;return t()("div",{className:H,"data-testid":"site-index-section"},void 0,(i||[]).map((function(e,i){return t()("section",{className:B,"aria-labelledby":"site-index-section-label-".concat(i)},i.toString(),t()("h3",{className:M,id:"site-index-section-label-".concat(i)},void 0,e.name),t()("ul",{className:S,"data-testid":"site-index-section-list"},void 0,e.pages.map((function(e){var i=e.name,a=e.link,n=e.deviceType;return t()("li",{className:Object(s.cx)(V,n)},a,t()("a",{className:U,href:a,"data-testid":"site-index-section-list-link"},void 0,i))}))))})),be||(be=t()(he,{})))};xe.displayName="SiteIndexSections",xe.defaultProps={indexData:[]};var ge=xe,ve="Go to Home Page »";function ye(e){var i=e.indexData,a=Object(s.useTheme)(),n=Object(l.useTracking)(),o=Object(p.d)();return t()("div",{className:I},void 0,t()("header",{className:A},void 0,t()(b.a,{to:o,"aria-label":"New York Times","data-testid":"site-index-header"},void 0,t()(r.a,{fill:"dark"===(null==a?void 0:a.mode)?u.a.color.white:u.a.color.black,className:L})),(!a||!a.homepage)&&t()("div",{className:E},void 0,t()(b.a,{to:a.homeUrl||o,className:z,"data-testid":"go-to-homepage"},void 0,ve))),t()("div",{className:P,"data-testid":"site-index-accordion"},void 0,t()(ee,{handleAccordionClick:function(e,i){n.trackEvent({event:"moduleInteraction",interaction:{module:{name:e,context:"section",label:i},type:"click",status:""}})},indexData:i,uniqueName:"siteindex"})),t()("div",{className:_,"data-testid":"site-index-sections"},void 0,t()(ge,{indexData:i})))}ye.displayName="SiteIndexContent",ye.defaultProps={indexData:[]};i.default=ye}}]);
//# sourceMappingURL=siteIndexContent-b760ead686926196fca8.js.map