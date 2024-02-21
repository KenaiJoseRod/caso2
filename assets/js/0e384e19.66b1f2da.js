"use strict";(self.webpackChunkcaso_2_markdown=self.webpackChunkcaso_2_markdown||[]).push([[976],{1512:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>t});var a=s(4848),i=s(8453);const r={sidebar_position:1},c="Manual para Script de Instalaci\xf3n",l={id:"intro",title:"Manual para Script de Instalaci\xf3n",description:"Facturador PRO4",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/caso2/docs/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Manual de Instalaci\xf3n",permalink:"/caso2/docs/docuDos"}},o={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Requisitos previos",id:"requisitos-previos",level:2},{value:"Pasos",id:"pasos",level:2},{value:"Enlaces de inter\xe9s",id:"enlaces-de-inter\xe9s",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"manual-para-script-de-instalaci\xf3n",children:"Manual para Script de Instalaci\xf3n"}),"\n",(0,a.jsx)(n.h1,{id:"docker--gitlab--opci\xf3n-ssl--opci\xf3n-ssh",children:"Docker | GitLab | Opci\xf3n SSL | Opci\xf3n SSH"}),"\n",(0,a.jsx)(n.p,{children:"Facturador PRO4"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsx)(n.p,{children:"Hemos elaborado un script para uso en instancias Linux con Ubuntu 18 o superior, este es un archivo que actualiza el sistema, instala las herramientas, sus dependencias y realiza todas las configuraciones previas, dejando el aplicativo listo para probar en menos de 20 minutos (siempre y cuando el dominio ya est\xe9 configurado hacia la instancia), su ejecuci\xf3n es muy sencilla."}),"\n",(0,a.jsx)(n.h2,{id:"requisitos-previos",children:"Requisitos previos"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Tener acceso a su servidor, vps, m\xe1quina virtual o local via SSH, en las instalaciones que realizamos para AWS o Google Cloud, hacemos entrega del usuario, la IP del servidor y la clave ssh que puede ser un archivo .ppk o .pem, recuerde almacenarlas en su equipo local."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Tener instalado una versi\xf3n de ssh en su m\xe1quina para conectarse de manera remota, puede utilizar putty, filezilla o una consola terminal. para mayor informaci\xf3n sobre el acceso SSH visite los siguientes manuales:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"https://docs.google.com/document/d/1PmQejvNd_dkXVm8DPUYlQTag0wvES46tMpxX3MPhkNY/edit#",children:"Gu\xeda para acceder con Putty (gesti\xf3n de servidor)"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"https://docs.google.com/document/d/1Xpri2102N4b5C-dG-FVPXW5ZWjEz5S4iDjpvl7Zwq2E/edit#",children:"Gu\xeda para acceder con Winscp (gesti\xf3n de archivos con aplicaci\xf3n de escritorio)"})})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Si es posible configurar su dominio apuntando a su instancia para que al finalizar la instalaci\xf3n se encuentre disponible el aplicativo. Edite los r\xe9cords A y CNAME donde A debe contener su IP y CNAME el valor * (asterisco) para que se tomen los subdominios registrados por la herramienta."}),"\n",(0,a.jsxs)("center",{children:["  ",(0,a.jsx)(n.img,{alt:"imgagen",src:s(4874).A+"",width:"583",height:"326"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"En caso de contar con servicios instalados en su instancia como mysql, apache o nginx, debe detenerlos, ya que estos ocupan los puertos que pasar\xe1n a usar el aplicativo con los contenedores de Docker."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"pasos",children:"Pasos"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Acceder a su instancia v\xeda SSH."}),"\n",(0,a.jsx)(n.li,{children:"Loguearse como super usuario, ejecute"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"   sudo su \n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Clonar el snippet de gitlab que contiene el script"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"   git clone https://gitlab.com/snippets/2079063.git script\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Ingrese a la carpeta clonada"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"   cd script\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"Dar permisos de ejecuci\xf3n al script"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"   chmod +x install.sh\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"6",children:["\n",(0,a.jsx)(n.li,{children:"El comando a utilizar para iniciar el despliegue requiere de un par\xe1metro principalmente:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"   ./install.sh [dominio]\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Por ejemplo:"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"./install.sh facturador.pro"}),"\n"]}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Una vez ejecutado el comando iniciar\xe1 el proceso de actualizaci\xf3n del sistema, en el proceso se le solicitar\xe1:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"El usuario y contrase\xf1a de GitLab, para que se pueda descargar el proyecto en su instancia"}),"\n",(0,a.jsxs)(n.li,{children:["Si desea instalar  SSL gratuito, tenga en cuenta que este debe ser actualizado cada 90 d\xedas, el mensaje ser\xe1 el siguiente:",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Instalar con SSL? (debe tener acceso al panel de su dominio para editar/agregar records TXT). si[s] no[n]"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Deber\xe1 contestar con \u201cs\u201d o \u201cn\u201d para continuar."}),"\n",(0,a.jsxs)(n.li,{children:["Si selecciona S\xcd, deber\xe1 contestar las siguientes preguntas con \u201cy\u201d, son 2 en total, seguidamente se le ofrecer\xe1 un c\xf3digo que debe a\xf1adir en un r\xe9cord tipo TXT en su dominio quedando como ",(0,a.jsx)(n.strong,{children:"_acme-challenge.example.com"})," o simplemente ",(0,a.jsx)(n.strong,{children:"_acme-challenge depender\xe1 de su proveedor"}),".\r\n",(0,a.jsxs)("center",{children:["  ",(0,a.jsx)(n.img,{alt:"imgagen",src:s(513).A+"",width:"467",height:"121"})]})]}),"\n",(0,a.jsx)(n.li,{children:"Para continuar presione enter, luego deber\xe1 repetir las acciones para a\xf1adir un segundo c\xf3digo y habr\xe1 finalizado la configuraci\xf3n, si el proceso es exitoso la ejecuci\xf3n del script continuar\xe1."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Si desea obtener y gestionar actualizaciones autom\xe1ticas, deber\xe1 disponer de su sesi\xf3n de gitlab al momento\r\n",(0,a.jsxs)("center",{children:[" ",(0,a.jsx)(n.img,{alt:"imgagen",src:s(4328).A+"",width:"501",height:"58"})]})]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Deber\xe1 contestar con \u201cs\u201d o \u201cn\u201d para continuar"}),"\n",(0,a.jsx)(n.li,{children:"Debe seleccionar S\xcd, al final del despliegue se le dar\xe1 un extracto de texto que debe a\xf1adir a su configuraci\xf3n de gitlab"}),"\n"]}),"\n",(0,a.jsxs)("center",{children:["  ",(0,a.jsx)(n.img,{alt:"imgagen",src:s(6967).A+"",width:"466",height:"302"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Finalizado el script y dependiendo de sus selecciones anteriores, se le entregar\xe1 varios datos que debe guardar, como;"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Usuario administrador."}),"\n",(0,a.jsx)(n.li,{children:"Contrase\xf1a para usuario administrador."}),"\n",(0,a.jsx)(n.li,{children:"Url del proyecto."}),"\n",(0,a.jsx)(n.li,{children:"Ubicaci\xf3n del proyecto dentro del servidor."}),"\n",(0,a.jsx)(n.li,{children:"Clave ssh para a\xf1adir a gitlab (obligatorio para quienes seleccionan la instalaci\xf3n de SSH)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"enlaces-de-inter\xe9s",children:"Enlaces de inter\xe9s"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"https://gitlab.com/b.mendoza/facturadorpro3/-/wikis/Script-Update-Docker",children:"Actualizaci\xf3n mediante ejecuci\xf3n Script para instalaciones Docker"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"https://docs.google.com/document/d/1D87YJ9fq9yHiAauu6SGVugiC3m_i42DrFUt6VKYXuDI/edit?usp=sharing",children:"Gesti\xf3n de SSL independiente, no el que incorpora el Script"})})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"https://gitlab.com/b.mendoza/facturadorpro3/snippets/1971490",children:"Gu\xeda gitlab para la instalaci\xf3n, contiene el script usado en el presente manual"})}),", adem\xe1s posee los par\xe1metros extras que pueden usarse en la ejecuci\xf3n del paso 6."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},513:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/IMG2-84d6a5ba7c46aabc8f2174c48313531e.png"},4874:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/img1-f0ddde3139cf6fc7b84b8876c5b05d08.png"},4328:(e,n,s)=>{s.d(n,{A:()=>a});const a="data:image/png;base64,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"},6967:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/img4-f6b8dc6e21ba96280aa4fffc72fc10fa.png"},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var a=s(6540);const i={},r=a.createContext(i);function c(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);