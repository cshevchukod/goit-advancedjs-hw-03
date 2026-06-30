import{a as d,S as f,i as a}from"./assets/vendor-BGqwtSVv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="56510220-94bf2d241d837d21bc9d081cd",g="https://pixabay.com/api/";function h(s){return d.get(g,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:n,comments:u,downloads:p})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img class="gallery-image" src="${o}" alt="${e}" />
          </a>
          <div class="image-info">
            <p><span>Likes</span>${t}</p>
            <p><span>Views</span>${n}</p>
            <p><span>Comments</span>${u}</p>
            <p><span>Downloads</span>${p}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function b(){c.innerHTML=""}function S(){l.classList.remove("is-hidden")}function q(){l.classList.add("is-hidden")}const P=document.querySelector(".form");P.addEventListener("submit",v);function v(s){s.preventDefault();const r=s.currentTarget.elements["search-text"].value.trim();if(!r){a.error({message:"Please enter a search query.",position:"topRight"});return}b(),S(),h(r).then(o=>{if(o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(o=>{a.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(o)}).finally(()=>{q()})}
//# sourceMappingURL=index.js.map
