!function(){var e={form:document.querySelector(".todo"),list:document.querySelector(".todo__items")},r={save:function(e,r){try{var t=JSON.stringify(r);localStorage.setItem(e,t)}catch(e){console.error("Set state error: ",e.message)}},load:function(e){try{var r=localStorage.getItem(e);return null===r?void 0:JSON.parse(r)}catch(e){console.error("Get state error: ",e.message)}},remove:function(e){try{localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}}},t={},o="todo";e.form.addEventListener("input",(function(e){var a=e.target,n=a.name,c=a.value;t[n]=c,r.save(o,t)})),function(){var a=r.load(o);if(a)for(var n in a)e.form[n].value=a[n],t[n]=a[n]}()}();
//# sourceMappingURL=index.f96d6b5f.js.map