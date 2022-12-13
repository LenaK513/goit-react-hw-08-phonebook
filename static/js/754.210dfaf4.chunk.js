"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[754],{9754:function(n,e,t){t.r(e),t.d(e,{default:function(){return K}});var r,o,a,i,s,c=t(2791),u=t(9434),l=t(168),d=t(4934),f=d.Z.button(r||(r=(0,l.Z)(["\n  text-transform: uppercase;\n  color: #fff;\n  background-color: #f74002;\n  padding: 7px 10px;\n  border: transparent;\n  border-radius: 5px;\n"]))),p=t(3329),x=function(n){var e=n.children;return(0,p.jsx)(f,{children:e})},m=function(n){return n.contacts.contacts},h=function(n){return n.filter.text},b=function(n){return n.contacts.isLoading},v=function(n){return n.contacts.error},g=t(3634),j=d.Z.form(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-bottom: 20px;\n"]))),Z=d.Z.input(a||(a=(0,l.Z)(["\n  margin-top: 10px;\n  margin-bottom: 20px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  height: 25px;\n"])));function y(){var n=(0,u.I0)(),e=(0,u.v9)(m);return(0,p.jsx)("div",{children:(0,p.jsxs)(j,{onSubmit:function(t){t.preventDefault();var r=t.currentTarget,o=r.elements.name.value,a=String(r.elements.number.value),i=o.toLowerCase();(null===e||void 0===e?void 0:e.find((function(n){var e;return(null===(e=n.name)||void 0===e?void 0:e.toLowerCase())===i})))?alert("".concat(o," is already in the list of contacts")):(n((0,g.uK)({name:o,number:a})),r.reset())},children:[(0,p.jsx)("label",{htmlFor:"1",children:" Name"}),(0,p.jsx)(Z,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,id:"1"}),(0,p.jsx)("label",{htmlFor:"2",children:"Phone"}),(0,p.jsx)(Z,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,id:"2"}),(0,p.jsx)(x,{type:"submit",children:"Add contact "})]})})}var C,w,k,_=d.Z.li(i||(i=(0,l.Z)(["\n  font-weight: 500;\n  margin-bottom: 4px;\n"]))),A=d.Z.button(s||(s=(0,l.Z)(["\n  text-transform: uppercase;\n  color: #fff;\n  background-color: #f74002;\n  padding: 5px 7px;\n  border: transparent;\n  border-radius: 5px;\n  margin-left: 5px;\n"]))),F=function(n){var e=n.id,t=n.name,r=n.number,o=n.onDeleteContact;return(0,p.jsxs)(_,{id:e,children:[t," : ",r,(0,p.jsx)(A,{onClick:function(){return o(e)},children:"Delete"})]},e)},I=d.Z.ul(C||(C=(0,l.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),L=function(){var n=(0,u.I0)(),e=(0,u.v9)(m);console.log(e),(0,c.useEffect)((function(){n((0,g.yF)())}),[n]);var t=function(n,e){var t=null===e||void 0===e?void 0:e.toLowerCase();return null===n||void 0===n?void 0:n.filter((function(n){return n.name.toLowerCase().includes(t)}))}(e,(0,u.v9)(h));return(0,p.jsxs)(I,{children:[(0,p.jsx)("h2",{children:"Contacts"}),t.length>0&&t.map((function(e){var t=e.id,r=e.name,o=e.number;return(0,p.jsx)(F,{id:t,name:r,phone:o,onDeleteContact:function(){return n((0,g.GK)(t))}},t)}))]})},z=t(6895),D=d.Z.label(w||(w=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  font-weight: 500;\n  margin-top: 30px;\n"]))),q=function(){var n=(0,u.I0)();return(0,p.jsxs)(D,{children:["Find contacts by name",(0,p.jsx)(Z,{type:"text",onChange:function(e){return n((0,z.bI)(e.currentTarget.value))}})]})},E=d.Z.div(k||(k=(0,l.Z)(["\n  margin-left: 20px;\n"])));function K(){var n=(0,u.I0)(),e=(0,u.v9)(b),t=(0,u.v9)(v);return(0,c.useEffect)((function(){n(g.yF)}),[n]),(0,p.jsxs)(E,{children:[e&&!t&&(0,p.jsx)("b",{children:"Request in progress..."}),(0,p.jsx)(y,{}),(0,p.jsx)(L,{}),(0,p.jsx)(q,{})]})}}}]);
//# sourceMappingURL=754.210dfaf4.chunk.js.map