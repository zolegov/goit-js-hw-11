import{S as l,i as a}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();let m=new l(".gallery a");const p=document.querySelector(".imagesFetch");function u(o){const s=o.reduce((i,t)=>i+=`
          <li class="imagesFetch-item">
          <div class="gallery">
                 <a href="${t.largeImageURL}">
                    <img src="${t.webformatURL}" alt="1"/>
                 </a>
          </div>
          <div class="imagesFetch-item-description">
              <ul class="description-list">
              <li class="description-list-item">
                  <p class="item-name">Likes</p>
                  <span>${t.likes}</span>
              </li>
              <li class="description-list-item">
                  <p class="item-name">Views</p>
                  <span>${t.views}900290</span>
              </li>
              <li class="description-list-item">
                  <p class="item-name">Comments</p>
                  <span>${t.comments}229</span>
              </li>
              <li class="description-list-item">
                  <p class="item-name">Downloads</p>
                  <span>${t.downloads}610937</span>
              </li>
              </ul>
          </div>
          </li>  `,"");p.insertAdjacentHTML("beforeend",s),m.refresh()}function d(o){const s="43173042-04092544e8d4f8f0c3df25e51",i=new URLSearchParams({orientation:"horizontal",image_type:"photo",safesearch:!0,per_page:15});return fetch(`https://pixabay.com/api/?key=${s}&q=${o}&${i}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const f=document.querySelector(".form"),h=document.querySelector(".imagesFetch"),c=document.querySelector(".loader");f.addEventListener("submit",o=>{o.preventDefault();const s=document.querySelector(".form-input"),i=s.value.trim();if(i===""){a.error({title:"Error",message:"Enter search images value",position:"topRight"});return}c.style.display="block",d(i).then(t=>{const e=t.hits;e.length===0&&a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.style.display="none",u(e)}).catch(t=>{console.log(t)}),h.innerHTML="",s.value=""});
//# sourceMappingURL=commonHelpers.js.map
