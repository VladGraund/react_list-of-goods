(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,r=n(3),c=n.n(r),o=n(4),i=n(5),a=n(8),u=n(6),l=n(7),b=n(1),h=n.n(b),d=(n(13),n(14),n(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function j(t,e){var n=e.sortType,s=e.isReversed,r=Object(l.a)(t);switch(n){case 1:r.sort((function(t,e){return t.localeCompare(e)}));break;case 2:r.sort((function(t,e){return t.length-e.length}))}return s&&r.reverse(),r}!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var N=function(t){Object(a.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={sortType:s.NONE,isReversed:!1},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isReversed,r=e.sortType;return Object(d.jsxs)("div",{className:"section content",children:[Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{type:"button",className:"button is-info ".concat(r!==s.ALPHABET?"is-light":""),onClick:function(){return t.setState({sortType:s.ALPHABET})},children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",className:"button is-success ".concat(r!==s.LENGTH?"is-light":""),onClick:function(){return t.setState({sortType:s.LENGTH})},children:"Sort by length"}),Object(d.jsx)("button",{type:"button",className:"button is-warning ".concat(n?"":"is-light"),onClick:function(){return t.setState({isReversed:!n})},children:"Reverse"}),(!0===n||r!==s.NONE)&&Object(d.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return t.setState({sortType:s.NONE,isReversed:!1})},children:"Reset"})]}),Object(d.jsx)("ul",{children:j(p,this.state).map((function(t){return Object(d.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})}}]),n}(h.a.Component);c.a.render(Object(d.jsx)(N,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.616dfac2.chunk.js.map