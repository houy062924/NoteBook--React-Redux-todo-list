(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{21:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n(0),c=n(7),d=n.n(c),s=n(3),r=n(4),a=n(6),u=n(5),p=function(t){Object(a.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).finishTodo=function(e){t.props.finishTodo(e)},t.deleteTodo=function(e){t.props.deleteTodo(e)},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=function(e){return Object(o.jsx)("div",{className:"checkbox",onClick:function(){t.finishTodo(e.id)},children:e.finished&&Object(o.jsx)("span",{className:"check",children:"\u2713"})})},n=function(e){return Object(o.jsxs)("div",{className:"todo-text",children:[Object(o.jsx)("p",{className:"".concat(e.finished?"todo finished":"todo"),onClick:function(){t.finishTodo(e.id)},children:e.body}),Object(o.jsx)("img",{src:"./images/delete.png",className:"delete-button",onClick:function(){t.deleteTodo(e.id)}})]})};return Object(o.jsx)("div",{className:"todo-cont",children:this.props.todos.map((function(t){return Object(o.jsxs)("div",{className:"todo-line",children:[e(t),n(t)]},t.id)}))})}}]),n}(i.Component),l=function(t){Object(a.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).handleInput=function(e){t.props.updateInput(e.target.value)},t.handleSubmit=function(e){e.preventDefault();var n={id:Math.random(),body:t.props.input,finished:!1};t.props.addTodo(n),t.props.updateInput("")},t}return Object(r.a)(n,[{key:"render",value:function(){return Object(o.jsx)("form",{className:"newTodo-cont",onSubmit:this.handleSubmit,children:Object(o.jsx)("input",{type:"text",onChange:this.handleInput,value:this.props.input,placeholder:"Add New Task Here"})})}}]),n}(i.Component),h=(n(21),n(9)),j=function(t){Object(a.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"page-cont",children:[Object(o.jsx)("div",{className:"double-lines"}),Object(o.jsx)("h1",{className:"page-title",children:"To-Do List"}),Object(o.jsxs)("div",{className:"page-content",children:[Object(o.jsx)(p,{todos:this.props.todos,finishTodo:this.props.finishTodo,deleteTodo:this.props.deleteTodo}),Object(o.jsx)(l,{addTodo:this.props.addTodo,updateInput:this.props.updateInput,input:this.props.input})]})]})}}]),n}(i.Component),O=Object(h.b)((function(t){return{todos:t.todos,input:t.input}}),(function(t){return{finishTodo:function(e){t(function(t){return{type:"FINISH_TODO",id:t}}(e))},deleteTodo:function(e){t(function(t){return{type:"DELETE_TODO",id:t}}(e))},addTodo:function(e){t(function(t){return{type:"ADD_TODO",todo:t}}(e))},updateInput:function(e){t(function(t){return{type:"UPDATE_INPUT",input:t}}(e))}}}))(j),b=n(8),f=n(15),T=n(2),v={todos:[{id:0,body:"Finish React todo list project",finished:!0},{id:1,body:"Watch Udemy course: Understanding the weird parts of JavaScript",finished:!1},{id:2,body:"Excersise: rock climbing",finished:!1}],input:""},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;if("FINISH_TODO"===e.type){var n=t.todos.map((function(t){return t.id!==e.id?t:Object(T.a)(Object(T.a)({},t),{},{finished:!t.finished})}));return Object(T.a)(Object(T.a)({},t),{},{todos:n})}if("DELETE_TODO"===e.type){var o=t.todos.filter((function(t){return t.id!==e.id}));return Object(T.a)(Object(T.a)({},t),{},{todos:o})}return"ADD_TODO"===e.type?Object(T.a)(Object(T.a)({},t),{},{todos:[].concat(Object(f.a)(t.todos),[e.todo])}):"UPDATE_INPUT"===e.type?Object(T.a)(Object(T.a)({},t),{},{input:e.input}):t},y=Object(b.b)(m,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());d.a.render(Object(o.jsx)(h.a,{store:y,children:Object(o.jsx)(O,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.b9797157.chunk.js.map