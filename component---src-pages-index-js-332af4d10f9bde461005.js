(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),o=i(a("8OQS")),d=i(a("pVnL")),l=i(a("q1tI")),u=i(a("17x9")),c=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return m(t||a).src},m=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=c(e),a=p(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,w=new WeakMap;function k(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function S(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)})).join("")+"<img "+l+s+o+a+i+t+n+r+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=l.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(N,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?l.default.createElement("picture",null,r(i),o):o})),N=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":p,sizes:a,srcSet:i,src:r},m,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));N.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var A=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=p(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,w=e.itemProp,E=e.loading,S=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,A=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,d.default)({opacity:x?1:0,transition:A?"opacity "+y+"ms":"none"},o),M="boolean"==typeof b?"lightgray":b,T={transitionDelay:y+"ms"},C=(0,d.default)({opacity:this.state.imgLoaded?0:1},A&&T,{},o,{},f),H={title:t,alt:this.state.isVisible?"":a,style:C,className:p,itemProp:w};if(g){var F=g,_=m(g);return l.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(_.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/_.aspectRatio+"%"}}),M&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:M,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},A&&T)}),_.base64&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:_.base64,spreadProps:H,imageVariants:F,generateSources:L}),_.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:_.tracedSVG,spreadProps:H,imageVariants:F,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,k(F),l.default.createElement(N,{alt:a,title:t,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:S})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)({alt:a,title:t,loading:E},_,{imageVariants:F}))}}))}if(h){var V=h,P=m(h),W=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete W.display,l.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},M&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:M,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},A&&T)}),P.base64&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:H,imageVariants:V,generateSources:L}),P.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:H,imageVariants:V,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,k(V),l.default.createElement(N,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:S})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)({alt:a,title:t,loading:E},P,{imageVariants:V}))}}))}return null},t}(l.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),M=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});A.propTypes={resolutions:O,sizes:M,fixed:u.default.oneOfType([O,u.default.arrayOf(O)]),fluid:u.default.oneOfType([M,u.default.arrayOf(M)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var T=A;t.default=T},EK0E:function(e,t,a){"use strict";var i,r=a("dyZX"),n=a("CkkT")(0),s=a("KroJ"),o=a("Z6vF"),d=a("czNK"),l=a("ZD67"),u=a("0/R4"),c=a("s5qY"),f=a("s5qY"),p=!r.ActiveXObject&&"ActiveXObject"in r,m=o.getWeak,g=Object.isExtensible,h=l.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},y={get:function(e){if(u(e)){var t=m(e);return!0===t?h(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(c(this,"WeakMap"),e,t)}},v=e.exports=a("4LiD")("WeakMap",b,y,l,!0,!0);f&&p&&(d((i=l.getConstructor(b,"WeakMap")).prototype,y),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=v.prototype,a=t[e];s(t,e,(function(t,r){if(u(t)&&!g(t)){this._f||(this._f=new i);var n=this._f[e](t,r);return"set"==e?this:n}return a.call(this,t,r)}))})))},INYr:function(e,t,a){"use strict";var i=a("XKFU"),r=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},MTnK:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAAEYklEQVQ4y0WTf0zUZRzHvwLenSB3x/3iujs47+C4QxDUU1luDk6x0qVT8QeiOFHTkYagqKQ4R800wHJhKWzWNNrIdoVM08BYERCgCILyS34JIhorBTPN0ldf7p+e7b1nn+ezvT6fz/t5HqGopJLuEfjWfYX65m7G1ycFJ3kn/RB1zQO8EOPm1rucLb7ImaJ8Ouvd/H2vgf72auqvldNw7TI3rlfQ21ZNY1srQllZDaNP4cr5crraezzAgrxc9qXto7Whk+zd+wkLm06oLYogSziLFrhoLDvJPyK0o/kS3S2XGbxVzljPL9zvbUTo6R6j/noHpSVl9PUMeoBH3svhYNZhhgefcTDtbawmI1ZLKDq9GaUmCOd0J231F+hu+5HOG5cZEPfRnmpG+xsQhn6DvpHHfJT7GS03+z3AnOwDHMg6ysCd36kuzuF4egKZyfFMs1vQabTIZHK++fIEQyJkHDjYXslYbw0P+68i9A69YOQZFBZ+TVndMF33ITM9g/TdRyj+ooRP9yynICuZo6lLWf2ak7jZUwkxW7heVcqdriput1Yw1PETj/tqeTQO7Bl8wYMnLzn+8Wnyiy5w/tKvbEhax6rVO9izYzdrFswiwTWbvUkuspJdZC+P4UBqEg8HGmm/UUH3zUrudVb9Dxx5BGNjf9FU/h3nz57m3OeFJCx5k9ycQ7hP5fP+lmVkr59P3lYXpzLeIH/bIs7kZ8FoJ3d7q+jrrOFOR63Hwz966xGa2+/S2VTH89uVcK8W+n8mbdMaHjSXwnANpzLXcnRTLEdS5vHuSieHt8SRuCqFzKxjFBUW0XL1B/4cquflgyaeDovPJu/EhyStW8/+fZn821PJaMtFUjckMHzNDU+aqCvJI2PZHNKXTGNjbAh718Rgn5GIVLcEX+N6Xl9bwLmvirniLqK63I2Q+8F2NqUks3DRCvrq3DzvqhCBKxi79T19taW8tXEXGu1MFs60k7E0gpXxr6KzJ6G1LEdvT0EXkYYufDMmy0ycMfMQXLFOZjkjMZimiN7Fk7F5FTEzIoidOxdFgBnBR4uXRIdEqiTaosJoMCNTOpD6mZiksOHrH4y/yoFKYxUfvw3BYrESqNeg0alQKOUYdAqMgWoEQfDIy2si3t4yJDI/pBKJeDYuH1ETRHnjI1Ug8VXjNXEyk/z8EYKCjBiMepQBCrFCCEsXx3s0P24ewcFmfHykSCQyvLwlBJutTLHYxAaCmBoRhVyhYYKPP9LJelGBTJarELQ6NVqtGrncn6joaLLFX7JzRyqZu9LYtXM7jjCrmNegVCpwxcWSmJjI1q3bSNuZjmv+Qrx9ZMiVgWIRk2iROJneZEKr06IO8EetUmB4RUyq5GgUvujVClFyFH5SMZbhsOqJcpiJDDMz1WYm3BaMPSTIs0dHhGKPjESIjl9GoC0Cpd6I0hBEgMmMWrwglWi+XBxNKcoY6sAQ4kAmVxIgdmswGQi2BGO2mrGINoWGO7BHRTNn8Ur+A+ci1+rM5z8hAAAAAElFTkSuQmCC","aspectRatio":1.271186440677966,"src":"/konyan.me/static/3c9a75b45e2fbbdd7d3138b788a01933/630fb/profile.png","srcSet":"/konyan.me/static/3c9a75b45e2fbbdd7d3138b788a01933/5db04/profile.png 75w,\\n/konyan.me/static/3c9a75b45e2fbbdd7d3138b788a01933/6d161/profile.png 150w,\\n/konyan.me/static/3c9a75b45e2fbbdd7d3138b788a01933/630fb/profile.png 300w,\\n/konyan.me/static/3c9a75b45e2fbbdd7d3138b788a01933/62b1f/profile.png 450w,\\n/konyan.me/static/3c9a75b45e2fbbdd7d3138b788a01933/2a4de/profile.png 600w,\\n/konyan.me/static/3c9a75b45e2fbbdd7d3138b788a01933/30492/profile.png 670w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},NLiy:function(e,t,a){e.exports={container:"index-module--container--2IQ43",header__title:"index-module--header__title--24dLM",header__bio:"index-module--header__bio--beLHk",header__bio_left:"index-module--header__bio_left--1y4pj",blogs__container:"index-module--blogs__container--3pssX"}},OGtf:function(e,t,a){var i=a("XKFU"),r=a("eeVq"),n=a("vhPU"),s=/"/g,o=function(e,t,a,i){var r=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),r=a.n(i),n=a("Wbzz"),s=a("MTnK"),o=a("9eSz"),d=a.n(o),l=function(){var e=s.data;return r.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid,style:{width:"86px",height:"86px",borderRadius:"50%"}})},u=a("Bl7J"),c=a("vrFN"),f=a("NLiy"),p=a.n(f),m=a("YzFs"),g=a.n(m),h=function(e){var t=e.title,a=e.date,i=e.description;return r.a.createElement("article",{className:g.a.container},r.a.createElement("h4",{className:g.a.title},t),r.a.createElement("date",{className:g.a.date},a),r.a.createElement("p",{className:g.a.description},i),r.a.createElement(n.Link,{className:g.a.readmore},r.a.createElement("span",null,"Read more >>")))};h.defaultProps={title:""};var b=h,y=[{title:"Hello World",date:"20, MAY, 2020",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{title:"Hello World",date:"20, MAY, 2020",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{title:"Hello World",date:"20, MAY, 2020",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{title:"Hello World",date:"20, MAY, 2020",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}];t.default=function(){return r.a.createElement(u.a,null,r.a.createElement(c.a,{title:"Home"}),r.a.createElement("div",{className:p.a.container},r.a.createElement("h2",{className:p.a.header__title},"Keep Moving Forward"),r.a.createElement("div",{className:p.a.header__bio},r.a.createElement(l,null),r.a.createElement("div",{className:p.a.header__bio_left},r.a.createElement("p",null,"Written by Nyan Lin Tun who lives and remote developer in Myanmar."),r.a.createElement("small",null,"passionate about code, design, startups and technology"))),r.a.createElement("div",{className:p.a.blogs__container},y.map((function(e){return r.a.createElement(b,{key:e.title,title:e.title,description:e.description,date:e.date})})))))}},YzFs:function(e,t,a){e.exports={container:"blog-module--container--1pCGB",title:"blog-module--title--3eckg",date:"blog-module--date--FbYXk",description:"blog-module--description--2aBms",readmore:"blog-module--readmore--27b8H",textPopUpTop:"blog-module--text-pop-up-top--3ch_M"}},ZD67:function(e,t,a){"use strict";var i=a("3Lyj"),r=a("Z6vF").getWeak,n=a("y3w9"),s=a("0/R4"),o=a("9gX7"),d=a("SlkY"),l=a("CkkT"),u=a("aagx"),c=a("s5qY"),f=l(5),p=l(6),m=0,g=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},b=function(e,t){return f(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var a=b(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var l=e((function(e,i){o(e,l,t,"_i"),e._t=t,e._i=m++,e._l=void 0,null!=i&&d(i,a,e[n],e)}));return i(l.prototype,{delete:function(e){if(!s(e))return!1;var a=r(e);return!0===a?g(c(this,t)).delete(e):a&&u(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=r(e);return!0===a?g(c(this,t)).has(e):a&&u(a,this._i)}}),l},def:function(e,t,a){var i=r(n(t),!0);return!0===i?g(e).set(t,a):i[e._i]=a,e},ufstore:g}}}]);
//# sourceMappingURL=component---src-pages-index-js-332af4d10f9bde461005.js.map