"use strict";(self.webpackChunkcaso_2_markdown=self.webpackChunkcaso_2_markdown||[]).push([[453],{5696:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=t(4848),i=t(8453);const s={sidebar_position:4},a="Instalaci\xf3n del Facturador",d={id:"docuCuat",title:"Instalaci\xf3n del Facturador",description:"---",source:"@site/docs/docuCuat.md",sourceDirName:".",slug:"/docuCuat",permalink:"/caso2/docs/docuCuat",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Manual de instalaci\xf3n",permalink:"/caso2/docs/docuTres"}},l={},c=[{value:"Pasos",id:"pasos",level:3}];function o(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"instalaci\xf3n-del-facturador",children:"Instalaci\xf3n del Facturador"}),"\n",(0,r.jsx)(n.h1,{id:"docker--linux--ssl-externo",children:"Docker | Linux | SSL externo"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"pasos",children:"Pasos"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Para instalar debe ejecutar el script evitando instalar el SSL, le ser\xe1 consultado en el proceso y deber\xe1 ingresar "n".'}),"\n",(0,r.jsxs)(n.li,{children:["Finalizada la instalaci\xf3n debe dirigirse a la ruta de instalaci\xf3n.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"cd /root/facturadorpro31/"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Debe editar el archivo .env","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"nano .env"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Dentro del editor ubicar los par\xe1metros y cambiarlos."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Antes"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Despu\xe9s"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:" APP_URL=http://${APP_URL_BASE}"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"APP_URL=https://${APP_URL_BASE}"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"FORCE_HTTPS=false"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"FORCE_HTTPS=true"})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Una vez finalizado, guarde y salga del editor."}),"\n",(0,r.jsx)(n.li,{children:"Ejecute los siguientes comandos para eliminar la cach\xe9 de la aplicaci\xf3n."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"    - php artisan config:Cache\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Con eso habr\xe1 completado el lado de la herramienta, en ese momento hasta no tener un SSL configurado no podr\xe1 acceder a la herramienta."}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{children:(0,r.jsx)(n.em,{children:"Recuerda"})}),(0,r.jsx)(n.p,{children:"Recuerde habilitar el puerto 443 para poder tener acceso a la herramienta."})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var r=t(6540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);