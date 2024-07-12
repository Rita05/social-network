"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[559],{559:(t,n,e)=>{e.r(n),e.d(n,{DialogueContainer:()=>Et});var i=e(7005),r=e(5574),s=e(5917);const o=e.p+"static/media/arrow-left.5b88cb9f29d946994d7f313052800a8f.svg";var a,d,l,x,p,g,c,h=e(7528),f=e(3583),m=e(9332),u=e(1985);const A=f.Ay.div(a||(a=(0,h.A)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    height: 48px;\n    border-bottom: 1px solid ",";\n"])),m.w.colors.border),y=(0,f.Ay)(u.$)(d||(d=(0,h.A)(["\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 148px;\n\tborder: none;\n    background-color: transparent;\n\tcolor: #818c99;\n\tcursor: pointer;\n"]))),b=f.Ay.img(l||(l=(0,h.A)(["\n   width: 40px;\n   height: 40px;\n   margin-left: -8px;\n"]))),w=f.Ay.div(x||(x=(0,h.A)(["\n\tdisplay: flex;\n\tflex-direction: column;\n"]))),j=f.Ay.span(p||(p=(0,h.A)(["\n\tfont-weight: 700;\n    font-size: 13px;\n"]))),v=f.Ay.div(g||(g=(0,h.A)(["\n\twidth: 148px;\n\tdisplay: flex;\n\tjustify-content: flex-end;\n"]))),F=f.Ay.img(c||(c=(0,h.A)(["\n\twidth: 30px;\n\theight: 30px;\n\tborder-radius: 50%;\n\tmargin-right: 15px;\n\tobject-fit: cover;\n"])));var M=e(393);const k=t=>{const{currentDialogue:n}=t;let e=(0,r.Zp)();return(0,M.jsxs)(A,{children:[(0,M.jsxs)(y,{onClick:()=>e(-1),children:[(0,M.jsx)(b,{src:"".concat(o)}),"\u041d\u0430\u0437\u0430\u0434"]}),(0,M.jsx)(w,{children:(0,M.jsx)(j,{children:null===n||void 0===n?void 0:n.name})}),(0,M.jsx)(v,{children:(0,M.jsx)(F,{src:null===n||void 0===n?void 0:n.avatar})})]})};var D=e(5818);const S=e.p+"static/media/send-message.8ecd686cb2b2615b9d2d467ed7251579.svg";var N,E,z,K,B,C,I,L=e(3086),P=e(8333),_=e(3346),H=e(7160),Q=e(2527),T=e(238);const Z=f.Ay.div(N||(N=(0,h.A)(["\n  width: 100%;\n\tmin-height: 50px;\n\tpadding-top: 12px;\n\tborder-top: 1px solid ",";\n"])),m.w.colors.border),$=f.Ay.div(E||(E=(0,h.A)(["\n\tdisplay: flex;\n\tmargin-left: 2%;\n\tmargin-right: 2%;\n"]))),G=(0,f.AH)(z||(z=(0,h.A)(["\n\tflex-direction: column;\n\talign-items: flex-start;\n"]))),O=f.Ay.form(K||(K=(0,h.A)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tgap: ",";\n\n\t& div {\n\t\twidth: 100%;\n\t}\n\n\t& textarea{\n\t   border: 1px solid ",";\n\t   height: ",";\n\t}\n\n\t& button {\n\t\tmargin-left: 7px;\n\t","\n\t}\n"])),(t=>t.hasError?"25px":"5px"),m.w.colors.border,(t=>t.hasError?"14px":"15px"),(t=>t.hasError&&"\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      height: 50px;\n\t\t\tmargin-left: 0;\n    ")),q=(0,f.AH)(B||(B=(0,h.A)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\tfont-family: Montserrat-Alternates, sans-serif;\n\twidth: 100%;\n\tpadding: 9px 0 10px 13px;\n  border-radius: 6px;\n\n\t"," {\n\t\tfont-family: OpenSans, sans-serif;\n\t\tfont-size: 13px;\n\t\tpadding-bottom: 8px;\n\t}\n"])),T.I0),J=(0,f.Ay)(u.$)(C||(C=(0,h.A)(["\n\theight: 36px;\n\tborder: none;\n\tpadding: 0;\n\tbackground-color: transparent;\n"]))),R=f.Ay.img(I||(I=(0,h.A)(["\n\twidth: 24px;\n\theight: 24px;\n"]))),U=t=>{const{onSendMessage:n}=t,e=(0,H.j)();return(0,M.jsx)(Z,{children:(0,M.jsx)($,{children:(0,M.jsx)(V,{onSubmit:t=>{n(t.newDialogueMessage),e((0,L.cL)("DialogueAddMessageForm"))}})})})},V=(0,_.A)({form:"DialogueAddMessageForm"})((t=>{const{handleSubmit:n,submitFailed:e,touch:i}=t,[r,o]=(0,s.useState)(!1),a=(0,P.A)("DialogueAddMessageForm"),d=!!(0,Q.Q)(a(H.M.getState(),"newDialogueMessage"))&&r,l=t=>{const{input:n,fieldName:e,setLocalTouched:r}=t;return(0,M.jsx)(D.M,{styles:G,...t,children:(0,M.jsx)("textarea",{...n,...t,onBlur:t=>{n.onBlur(t),i(e),r(!0)}})})};return(0,M.jsxs)(O,{onSubmit:t=>(t=>{n(t),o(!1)})(t),error:e,hasError:d,children:[(0,D.K)({name:"newDialogueMessage",placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",component:t=>(0,M.jsx)(l,{...t,fieldName:"newDialogueMessage",setLocalTouched:o}),onKeyDown:t=>{var e;"Enter"===(e=t).key&&!e.shiftKey&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(e.preventDefault(),n(e))},validate:[Q.Q],styles:q}),(0,M.jsx)(J,{type:"submit",children:(0,M.jsx)(R,{src:S})})]})}));var W,X,Y,tt,nt,et;const it=f.Ay.div(W||(W=(0,h.A)(["\n\twidth: auto;\n\tposition: relative;\n\tdisplay:flex;\n\talign-self: flex-end;\n\tfont-family: 'Montserrat', sans-serif;\n\tmargin: 24.5px 40px 47px;\n"]))),rt=f.Ay.div(X||(X=(0,h.A)(["\n\tdisplay: flex;\n\torder: 1;\n"]))),st=f.Ay.img(Y||(Y=(0,h.A)(["\n\torder: 2;\n\twidth: 36px;\n\theight: 36px;\n\tmargin-top: 12px;\n\tmargin-left: 12px;\n\tborder-radius: 50%;\n\tobject-fit: cover;\n"]))),ot=f.Ay.div(tt||(tt=(0,h.A)(["\n\tposition: relative;\n\tborder-radius: 10px;\n\tborder-bottom-right-radius: 0;\n\tpadding: 7px 13px 8px;\n\tmin-height: 45px;\n\tbackground-color: ",";\n\tbox-shadow: 0px 1px 2px 0px #1D21261A;\n\n\t:after {\n\t\twidth: 0;\n\t\theight: 0;\n\t\tbottom: 0px;\n\t\tright: -10px;\n\t\tborder-top: 9px solid transparent;\n\t\tborder-left: 11px solid ",';\n\t\tcontent: "";\n\t\tposition: absolute;\n\t}\n'])),m.w.colors.primary,m.w.colors.primary),at=f.Ay.div(nt||(nt=(0,h.A)(["\n\tfont-family: Montserrat-Alternates, sans-serif;\n\tfont-size: 16px;\n\tfont-weight: 600;\n\tline-height: 21.94px;\n\tcolor: #FFFFFF;\n"]))),dt=f.Ay.span(et||(et=(0,h.A)(["\n\tfont-family: Nunito Sans, sans-serif;\n\tfont-size: 16px;\n\tfont-weight: 400;\n\tline-height: 19.5px;\n\tcolor: #FFFFFF;\n\tmargin: 0;\n\tword-break: break-word;\n"]))),lt=t=>{const{userName:n,message:e,photo:i}=t;return(0,M.jsx)(it,{children:(0,M.jsxs)(rt,{children:[(0,M.jsx)(st,{src:"".concat(i||"")}),(0,M.jsxs)(ot,{children:[(0,M.jsx)(at,{children:n}),(0,M.jsx)(dt,{children:e})]})]})})};var xt,pt,gt,ct=e(225);const ht=(0,f.I4)(ct.x)(xt||(xt=(0,h.A)(["\n\talign-items: center; \n\tlist-style: none;\n\tjustify-content: space-between;\n\tmin-height: auto;\n\tmargin-bottom: 16px;\n"]))),ft=f.I4.div(pt||(pt=(0,h.A)(["\n\twidth: 100%;\n\theight: 100%;\n\tmax-height: 75vh;\n  overflow-y: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n"]))),mt=f.I4.div(gt||(gt=(0,h.A)(["\n\tdisplay: flex;\n\tflex-direction: column;\n"])));var ut,At,yt,bt,wt,jt;const vt=f.Ay.div(ut||(ut=(0,h.A)(["\n\tfont-family: 'Montserrat', sans-serif;\n\tmargin-left: 40px;\n\tmargin-right: 40px;\n\tmargin-bottom: 47px;\n\tdisplay: flex;\n\talign-self: flex-start;\n"]))),Ft=f.Ay.div(At||(At=(0,h.A)(["\n\tdisplay: flex;\n"]))),Mt=f.Ay.img(yt||(yt=(0,h.A)(["\n\twidth: 36px;\n\theight: 36px;\n\tmargin-top: 12px;\n\tmargin-right: 12px;\n\tborder-radius: 50%;\n\tobject-fit: cover;\n"]))),kt=f.Ay.div(bt||(bt=(0,h.A)(['\n\tposition: relative;\n\tborder-radius: 10px;\n\tborder-bottom-left-radius: 0;\n\tpadding: 8px 27px 8px 13px;\n\tmin-height: 44px;\n\tbackground: #F5F7FB;\n\tbox-shadow: 0px 1px 2px 0px rgba(29, 33, 38, 0.1),0px 5px 20px 0px rgba(29, 33, 38, 0.03);\n\n\t:after {\n\t\tcontent: "";\n\t\tposition: absolute;\n\t\twidth: 0;\n\t\theight: 0;\n\t\tbottom: 0;\n\t\tleft: -14px;\n\t\tborder-top: 8px solid transparent;\n\t\tborder-right: 14px solid #F5F7FB; \n\t\tfilter: drop-shadow(-2px 2px 2px rgba(0, 0, 0, 0.1));\n}\n']))),Dt=f.Ay.div(wt||(wt=(0,h.A)(["\n\tfont-family: Montserrat-Alternates, sans-serif;\n\tfont-size: 16px;\n\tfont-weight: 600;\n\tline-height: 19.5px;\n"]))),St=f.Ay.span(jt||(jt=(0,h.A)(["\n\tfont-size: 16px;\n\tfont-weight: 400;\n\tline-height: 19.5px;\n\tmargin: 0;\n\tword-break: break-word;\n"]))),Nt=t=>{const{userName:n,message:e,photo:i}=t;return(0,M.jsx)(vt,{children:(0,M.jsxs)(Ft,{children:[(0,M.jsx)(Mt,{src:""}),(0,M.jsxs)(kt,{children:[(0,M.jsx)(Dt,{children:n}),(0,M.jsx)(St,{children:e})]})]})})};const Et=(0,e(4485).Zz)((0,i.Ng)((t=>({dialogsPage:t.dialogsPage})),(t=>({sendMessage:n=>t((t=>({type:"SEND_MESSAGE",newDialogueMessage:t}))(n))}))))((t=>{const{dialogsPage:{dialogs:n,messages:e},sendMessage:i}=t,s=(0,r.g)(),o=n.find((t=>t.id===Number(s.id)));return(0,M.jsxs)(ht,{children:[(0,M.jsx)(k,{currentDialogue:o}),(0,M.jsx)(ft,{children:o?e.map((t=>(0,M.jsx)(mt,{children:t.id%2!==0?(0,M.jsx)(lt,{userName:"\u041c\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u0430 \u0422\u0430\u0440\u0430\u043d\u043e\u0432\u0430",message:t.message,photo:""},t.id):(0,M.jsx)(Nt,{userName:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0422\u0430\u0440\u0430\u043d\u043e\u0432",message:t.message,photo:""},t.id)},t.id))):null}),(0,M.jsx)(U,{onSendMessage:t=>{i(t)}})]})}))}}]);
//# sourceMappingURL=559.66861587.chunk.js.map