(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/BreweryDB_top_logo.d41cf1ba.png"},28:function(e,t,a){e.exports=a(42)},33:function(e,t,a){},35:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),i=(a(33),a(6)),s=a(7),l=a(9),u=a(8),h=a(10),d=(a(35),a(44)),m=a(45),p=a(11),b=a(38),f=a(12),v=(a(19),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).renderDetail=function(e){return"beers"===a.props.type?r.a.createElement("div",{className:"beer-detail"},r.a.createElement(d.a,null,e.name),r.a.createElement("ul",null,r.a.createElement("li",null,"ABV: ",e.abv),r.a.createElement("li",null,"IBU: ",e.ibu))):r.a.createElement("a",{href:"#"},e.name)},a.renderItem=function(e,t){var n=a.props.onClickItem;return r.a.createElement("li",{key:e.id,onClick:function(){return n(e,t)}},r.a.createElement(m.a,{className:"list-item",interactive:!0,elevation:p.a.TWO},a.renderDetail(e)))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.list,a=e.error,n=e.isLoaded;return a?r.a.createElement("div",null,"Error: ",a.message):n?r.a.createElement("ul",{className:"list-container"},t.map(this.renderItem)):r.a.createElement(b.a,{intent:f.a.PRIMARY,size:b.a.SIZE_SMALL})}}]),t}(n.Component)),y=a(46),E=a(47),w=a(48),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={queryStr:"English"},a.handleClick=function(){var e=a.state.queryStr,t="https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/",n="key=b7da1c5827026053a276f0dbe2234962",r=e?t+"search/style?"+n+"&q="+e:t+"styles/?"+n;a.props.onSearch(r)},a.handleChange=function(e){a.setState({queryStr:e.target.value})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.queryStr;return r.a.createElement(m.a,null,r.a.createElement(y.a,{label:this.props.label,labelFor:"text-input"},r.a.createElement(E.a,{id:"search-input",className:"search-box",placeholder:this.props.placeholder,onChange:this.handleChange,value:e}),r.a.createElement(w.a,{icon:"search",onClick:this.handleClick},"Search")))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={error:null,isLoaded:!0,showAll:!1,items:[]},a.showResults=function(e){var t=e.data.map(function(e){return{id:e.id,cid:e.categoryId,name:e.shortName}});a.setState({isLoaded:!0,items:t})},a.search=function(e){a.setState({isLoaded:!1}),fetch(e).then(function(e){return e.json()}).then(function(e){a.showResults(e)},function(e){a.setState({isLoaded:!0,error:e})})},a.showBeerList=function(e,t){var n="https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beers?key=b7da1c5827026053a276f0dbe2234962&styleId="+e.id;a.props.onStyleClick(n)},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;return r.a.createElement("div",{className:"style-wrapper"},r.a.createElement(j,{label:"Search beer style",placeholder:"Search beer styles...",onSearch:this.search}),r.a.createElement("div",null),r.a.createElement(v,{list:n,error:t,isLoaded:a,onClickItem:this.showBeerList}))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={beer:{}},a.showBeer=function(e){a.setState({beer:e})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.error,a=e.isLoaded,n=e.beers;return r.a.createElement(v,{list:n,type:"beers",error:t,isLoaded:a,onClickItem:this.showBeer})}}]),t}(n.Component),g=a(21),S=a.n(g),C=(a(40),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.children;return r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("div",{className:"nav"},r.a.createElement("header",null,r.a.createElement("img",{src:S.a,className:"nav-logo",alt:"logo"}),r.a.createElement("h4",null,"Explore the beer you like")),r.a.createElement("div",{className:"nav-content"},e)))}}]),t}(n.Component)),L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={error:null,isLoaded:!0,beers:[]},a.showResults=function(e){var t=e.data.map(function(e){return{id:e.id,name:e.nameDisplay,abv:e.abv,ibu:e.ibu,glass:e.glass}});a.setState({isLoaded:!0,beers:t})},a.onStyleClick=function(e){a.setState({isLoaded:!1}),fetch(e).then(function(e){return e.json()}).then(function(e){a.showResults(e)},function(e){a.setState({isLoaded:!0,error:e})})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.beers,a=e.error,n=e.isLoaded;return r.a.createElement("div",{className:"App"},r.a.createElement(C,null,r.a.createElement(O,{onStyleClick:this.onStyleClick})),r.a.createElement("div",{className:"beer-list-container"},r.a.createElement(k,{beers:t,error:a,isLoaded:n})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(L,null),document.getElementById("container")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.d7785b41.chunk.js.map