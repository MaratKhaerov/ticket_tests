import{f as v,d,X as x,l as e,S as a,F as g,R as w,Z as C,P as b,a4 as y,U as o,Y as h,V as S}from"./vue-3-isxJqP.js";import{u as U,b as k}from"./index-KN2Dh_4E.js";import{m as B,p as D,q as F,r as i,V as m,s as T,t as q,v as A,x as E,b as N}from"./vuetify-shpi_k0Z.js";import{_ as L}from"./_plugin-vue_export-helper-x3n3nnut.js";/* empty css                            */const M={class:"text-center"},R=v({__name:"LoginView",setup(H){const p=w(),c=U(),s=d({}),n=d(!1),u=d(""),V=async()=>{try{await k.login(s.value),c.setAuthed(),p.push({name:"Home"})}catch(r){r.response&&r.response.data&&r.response.data.error?u.value=r.response.data.error:u.value="Произошла непредвиденная ошибка.",n.value=!0}},f=()=>{n.value=!1};return(r,t)=>{const _=C("router-link");return b(),x(g,null,[e(B,null,{default:a(()=>[e(F,{onSubmit:y(V,["prevent"])},{default:a(()=>[e(i,{modelValue:s.value.username,"onUpdate:modelValue":t[0]||(t[0]=l=>s.value.username=l),label:"Имя пользователя",required:""},null,8,["modelValue"]),e(i,{modelValue:s.value.password,"onUpdate:modelValue":t[1]||(t[1]=l=>s.value.password=l),label:"Пароль",type:"password",required:""},null,8,["modelValue"]),e(m,{type:"submit",color:"primary"},{default:a(()=>[o("Войти")]),_:1})]),_:1}),h("div",M,[o(" Еще не зарегистрирован? "),e(_,{to:"/register",class:"text-decoration-none"},{default:a(()=>[o("Регистрация")]),_:1})])]),_:1}),e(D,{modelValue:n.value,"onUpdate:modelValue":t[2]||(t[2]=l=>n.value=l),persistent:"","max-width":"300px"},{default:a(()=>[e(T,null,{default:a(()=>[e(q,{class:"text-h5"},{default:a(()=>[o("Ошибка")]),_:1}),e(A,null,{default:a(()=>[o(S(u.value),1)]),_:1}),e(E,null,{default:a(()=>[e(N),e(m,{color:"primary",text:"",onClick:f},{default:a(()=>[o("OK")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),Y=L(R,[["__scopeId","data-v-ccae9fd1"]]);export{Y as default};