(()=>{"use strict";function e(e,a,t){let n=document.createElement(`${e}`);return null!=a&&n.classList.add(a),n.textContent=null!=t?t:"",n}function a(e){let a=document.createElement("img");return a.src=e,a}function t(){const t=document.querySelector("main");t.textContent="";const n="Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                   Aspernatur expedita obcaecati corrupti sapiente odio, quasi dignissimos maxime temporibus.\n                   Officia corporis architecto similique maiores amet placeat earum quos doloremque assumenda?",i=e("div","homeContainer"),s=e("div","welcomeContainer"),o=e("h2","welcomeText","Take a look to our food"),m=e("div","picSection"),p=e("div","picContainer"),r=e("div","picContainer"),d=e("div","picContainer"),c=e("div","imgContainer"),u=e("div","imgContainer"),l=e("div","imgContainer");c.append(a("assets/images/home/milaNapo.png")),u.append(a("assets/images/home/milaCeddar.png")),l.append(a("assets/images/home/milaJamon.png")),p.append(c,e("p","picText1",n)),r.append(e("p","picText2",n),u),d.append(l,e("p","picText3",n)),m.append(p,r,d),s.append(o),i.append(s,m),t.appendChild(i)}function n(t,n){let i=e("div","menu--item"),s=a(t),o=e("h2","item--title",n),m=e("p","item--descr","Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                    Aspernatur expedita obcaecati corrupti sapiente odio, quasi dignissimos maxime temporibus.");return i.append(s,o,m),i}function i(a,t){const n=e("div","info"),i=e("div","info--icon");i.innerHTML=`<i class="${a}"></i>`;const s=e("p","info--text",t);return n.append(i,s),n}function s(e,a){let t=document.querySelector(`.${a}`);null!=t&&t.classList.remove(a),e.classList.add(a)}!function(){const a=document.querySelector("body");a.style.backgroundImage="url(assets/images/backgImg.png)",function(){const o=e("nav","navBar"),m=e("div","titleContainer"),p=e("div","itemsMenu"),r=e("p","titleContainer--title","Milanga"),d=e("p","titleSub",' Experts of the Argentinian "Milanesa"'),c=e("div","itemsMenu--list"),u=e("button","list--home","Home");u.addEventListener("click",(e=>{s(e.target,"active"),t()}));const l=e("button","list--menu","Menu");l.addEventListener("click",(a=>{s(a.target,"active"),function(){const a=document.querySelector("main");a.textContent="";const t=e("div","menu"),i=e("div","mainDish");i.append(n("assets/images/menu/milaCebo.jpeg","Fugazzeta"),n("assets/images/menu/milaJamon.png","Eggs"),n("assets/images/menu/milaNapo.png","Neapolitan"),n("assets/images/menu/milaCeddar.png","Ceddar"),n("assets/images/menu/hamburmila.jpeg","Burguer 1"),n("assets/images/menu/hamburmila2.jpeg","Burguer 2"),n("assets/images/menu/hamburmila3.jpeg","Burguer 3"),n("assets/images/menu/hamburmila4.jpeg","Burguer 4"));const s=e("div","garrison");s.append(n("assets/images/menu/ensalada.jpeg","Salad 1"),n("assets/images/menu/ensalada2.jpeg","Salad 2"),n("assets/images/menu/papas.jpeg","Fries 1"),n("assets/images/menu/papas2.jpeg","Fries 2")),t.append(e("h1","mmTitle","Main Dishes"),i,e("h1","mmTitle","Salads and Fries"),s),a.append(t)}()}));const g=e("button","list--contact","Contact");g.addEventListener("click",(a=>{s(a.target,"active"),function(){const a=document.querySelector("main");a.textContent="";const t=e("div","contactCard");t.append(i("fas fa-map-marker-alt","True Street 123"),i("fas fa-phone","123 456 789"),i("far fa-clock","Everyday, from 11 am to 3 am"),i("fas fa-envelope","Send us a message! : RealEmail@yummi.yikes")),a.append(t)}()})),c.append(u,l,g),p.appendChild(c),m.append(r,d),o.append(m,p),a.appendChild(o);const f=e("main","main");a.appendChild(f),t(),s(u,"active")}(),function(){const t=e("footer"),n=e("p","footer--information","Made by Fraanlol"),i=e("a");i.href="https://github.com/Fraanlol",i.setAttribute("target","_blank"),i.innerHTML='<i class="fab fa-github"></i>',t.append(n,i),a.appendChild(t)}()}()})();