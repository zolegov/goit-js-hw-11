import{S as a,i as c}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function l(o){const s=document.querySelector(".imagesFetch"),i=o.reduce((e,t)=>e+=`
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
          </li>  `,"");s.insertAdjacentHTML("beforeend",i),new a(".gallery a").refresh()}function m(o){const s="43173042-04092544e8d4f8f0c3df25e51",i=new URLSearchParams({orientation:"horizontal",image_type:"photo",safesearch:!0,per_page:150}),r=document.querySelector(".loader");r.style.display="block",fetch(`https://pixabay.com/api/?key=${s}&q=${o}&${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return r.style.display="none",e.json()}).then(e=>{const t=e.hits;t.length===0&&iziToast.warning({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l(t)}).catch(e=>{console.log(e)})}const p=document.querySelector(".form");p.addEventListener("submit",o=>{o.preventDefault();const s=document.querySelector(".form-input"),i=s.value.trim();if(s.value===""){c.error({title:"Error",message:"Enter search images value",position:"topRight"});return}const r=document.querySelector(".imagesFetch");m(i),r.innerHTML="",s.value=""});
//# sourceMappingURL=commonHelpers.js.map
