(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var n=r.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.d({},{Z:()=>g});const t=e.p+"3792aed98a9589656dd4.png",r=e.p+"38c6e851ea03d5118e55.png",n=e.p+"9989a4efa4a9c99c60a3.png",a=e.p+"94441b8e183728b82ae3.png",i=e.p+"596bd58bd36651b3b83d.png",c=()=>{document.querySelector("main");let e=document.querySelector("main > h2"),i=document.createElement("div");i.setAttribute("id","task");let c=document.createElement("div");c.classList.add("left");let d=new Image;d.src=t,d.addEventListener("click",g.removeTask),c.appendChild(d);let o=document.createElement("h3");o.textContent="Title",c.appendChild(o),i.appendChild(c);let l=document.createElement("div");l.classList.add("right");let p=document.createElement("button");p.setAttribute("id","info"),p.textContent="Info",l.appendChild(p);let s=new Image;s.src=r,s.addEventListener("click",g.togglePriority),l.appendChild(s);let m=new Image;m.src=n,l.appendChild(m);let u=new Image;u.src=a,u.addEventListener("click",g.removeTask),l.appendChild(u),i.appendChild(l),e.parentNode.insertBefore(i,e.nextSibling)},d=e=>{e.target.parentNode.parentNode.remove()},o=e=>{let t=e.target,n=new Image;t.src===r?(console.log("yah"),n.src=i):n.src=r,n.addEventListener("click",g.togglePriority),e.target.parentNode.replaceChild(n,t)},l=()=>{},p=()=>{},s=()=>{},g=(document.querySelector("#add-task").addEventListener("click",(()=>{l(),c()})),{addProject:()=>{},removeProject:()=>{},addTaskLocation:()=>{},editTask:()=>{},removeTask:()=>{p(),d()},togglePriority:()=>{s(),o()}})})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1ksRUFBTUMsT0FBT0osV0FBV1UsYUFBYUgsRUFBWUQsRUFBVyxFQzVEcEUsRUFoQm9CLE9BZ0JwQixFQVZ1QixPQVV2QixFQVAyQixPQ2lCM0IsR0FOdUJsQyxTQUFTUyxjQUFjLGFBQy9CVSxpQkFBaUIsU0FyQlosS0FDWixJQUNBLEdBQWEsSUFxQlYsQ0FBQ29CLFdBN0JXLE9BNkJDQyxjQTFCRSxPQTBCYUMsZ0JBbkJYLE9BbUI0QkMsU0FoQm5DLE9BZ0I2Q0MsV0FiM0MsS0FDZixJQUNBLEdBQWdCLEVBV3NEQyxlQVRuRCxLQUNuQixJQUNBLEdBQW9CLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL21vZHVsZXMvRE9NLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL2FwcGxpY2F0aW9uLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgY29udHJvbGxlciBmcm9tICcuLi9pbmRleC5qcyc7XG5cbi8vIE1lZGlhXG5pbXBvcnQgY2lyY2xlIGZyb20gJy4uLy4uL2Rpc3QvbWVkaWEvY2lyY2xlLnBuZyc7XG5pbXBvcnQgc3RhciBmcm9tICcuLi8uLi9kaXN0L21lZGlhL3N0YXIucG5nJztcbmltcG9ydCBlZGl0IGZyb20gJy4uLy4uL2Rpc3QvbWVkaWEvZWRpdC5wbmcnO1xuaW1wb3J0IHJlbW92ZSBmcm9tICcuLi8uLi9kaXN0L21lZGlhL3JlbW92ZS5wbmcnO1xuaW1wb3J0IGZ1bGxzdGFyIGZyb20gJy4uLy4uL2Rpc3QvbWVkaWEvZnVsbHN0YXIucG5nJztcblxuY29uc3QgRE9NID0gKCgpID0+IHtcbiAgICBjb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xuXG4gICAgfTtcbiAgICBjb25zdCByZW5kZXJQcm9qZWN0Rm9ybSA9ICgpID0+IHtcblxuICAgIH07XG4gICAgY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcblxuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9ICgpID0+IHtcblxuICAgIH07XG4gICAgY29uc3QgYWRkVGFzayA9ICgpID0+IHtcbiAgICAgICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluID4gaDInKTtcblxuICAgICAgICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzaycpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGVmdC5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgaW1hZ2UxID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlMS5zcmMgPSBjaXJjbGU7XG4gICAgICAgIGltYWdlMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXIucmVtb3ZlVGFzayk7XG4gICAgICAgIGxlZnQuYXBwZW5kQ2hpbGQoaW1hZ2UxKTtcbiAgICAgICAgXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RpdGxlJztcbiAgICAgICAgbGVmdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZChsZWZ0KTtcblxuICAgICAgICBsZXQgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmlnaHQuY2xhc3NMaXN0LmFkZCgncmlnaHQnKTtcblxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZm8nKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0luZm8nO1xuICAgICAgICByaWdodC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgICAgIGxldCBpbWFnZTIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2UyLnNyYyA9IHN0YXI7XG4gICAgICAgIGltYWdlMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXIudG9nZ2xlUHJpb3JpdHkpO1xuICAgICAgICByaWdodC5hcHBlbmRDaGlsZChpbWFnZTIpO1xuXG4gICAgICAgIGxldCBpbWFnZTMgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2UzLnNyYyA9IGVkaXQ7XG4gICAgICAgIHJpZ2h0LmFwcGVuZENoaWxkKGltYWdlMyk7XG5cbiAgICAgICAgbGV0IGltYWdlNCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZTQuc3JjID0gcmVtb3ZlO1xuICAgICAgICBpbWFnZTQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyLnJlbW92ZVRhc2spO1xuICAgICAgICByaWdodC5hcHBlbmRDaGlsZChpbWFnZTQpO1xuXG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQocmlnaHQpO1xuXG4gICAgICAgIGhlYWRlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YXNrLCBoZWFkZXIubmV4dFNpYmxpbmcpO1xuICAgIH07XG5cbiAgICBjb25zdCBlZGl0VGFzayA9ICgpID0+IHtcblxuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlVGFzayA9IChldmVudCkgPT4ge1xuICAgICAgICBsZXQgcmVtb3ZhbCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIHJlbW92YWwucmVtb3ZlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZ2dsZVByaW9yaXR5ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGxldCBvbGRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBsZXQgbmV3RWxlbWVudCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpZiAob2xkRWxlbWVudC5zcmMgPT09IHN0YXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd5YWgnKTtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuc3JjID0gZnVsbHN0YXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdFbGVtZW50LnNyYyA9IHN0YXI7XG4gICAgICAgIH1cbiAgICAgICAgbmV3RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXIudG9nZ2xlUHJpb3JpdHkpO1xuICAgICAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudCwgb2xkRWxlbWVudCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7cmVuZGVyUGFnZSwgcmVuZGVyUHJvamVjdEZvcm0sIGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGFkZFRhc2ssIGVkaXRUYXNrLCByZW1vdmVUYXNrLCB0b2dnbGVQcmlvcml0eX07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET007IiwiaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi4vaW5kZXguanMnO1xuXG5jb25zdCBhcHBsaWNhdGlvbiA9ICgoKSA9PiB7XG4gICAgY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcblxuICAgIH07XG4gICAgY29uc3QgYWRkTG9jYXRpb24gPSAoKSA9PiB7XG5cbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoKSA9PiB7XG5cbiAgICB9O1xuICAgIGNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG5cbiAgICB9O1xuICAgIGNvbnN0IGVkaXRUYXNrID0gKCkgPT4ge1xuXG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVUYXNrID0gKCkgPT4ge1xuXG4gICAgfTtcbiAgICBjb25zdCB0b2dnbGVQcmlvcml0eSA9ICgpID0+IHtcblxuICAgIH07XG5cbiAgICByZXR1cm4ge2FkZFByb2plY3QsIGFkZExvY2F0aW9uLCByZW1vdmVQcm9qZWN0LCBhZGRUYXNrLCBlZGl0VGFzaywgcmVtb3ZlVGFzaywgdG9nZ2xlUHJpb3JpdHl9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwbGljYXRpb247IiwiaW1wb3J0IERPTSBmcm9tICcuL21vZHVsZXMvRE9NLmpzJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vbW9kdWxlcy9zdG9yYWdlLmpzJ1xuaW1wb3J0IGFwcGxpY2F0aW9uIGZyb20gJy4vbW9kdWxlcy9hcHBsaWNhdGlvbi5qcyc7XG5pbXBvcnQgdGFza0ZhY3RvcnkgZnJvbSAnLi9tb2R1bGVzL3Rhc2suanMnO1xuXG5jb25zdCBjb250cm9sbGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuXG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKCkgPT4ge1xuXG4gICAgfTtcbiAgICBjb25zdCBhZGRUYXNrID0gKCkgPT4ge1xuICAgICAgICBhcHBsaWNhdGlvbi5hZGRUYXNrKCk7XG4gICAgICAgIERPTS5hZGRUYXNrKCk7XG4gICAgfTtcbiAgICBjb25zdCBhZGRUYXNrTG9jYXRpb24gPSAoKSA9PiB7XG5cbiAgICB9O1xuICAgIGNvbnN0IGVkaXRUYXNrID0gKCkgPT4ge1xuXG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVUYXNrID0gKCkgPT4ge1xuICAgICAgICBhcHBsaWNhdGlvbi5yZW1vdmVUYXNrKCk7XG4gICAgICAgIERPTS5yZW1vdmVUYXNrKCk7XG4gICAgfTtcbiAgICBjb25zdCB0b2dnbGVQcmlvcml0eSA9ICgpID0+IHtcbiAgICAgICAgYXBwbGljYXRpb24udG9nZ2xlUHJpb3JpdHkoKTtcbiAgICAgICAgRE9NLnRvZ2dsZVByaW9yaXR5KCk7XG4gICAgfTtcblxuICAgIC8vIEV2ZW50IExpc3RlbmVyc1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2snKTtcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFzayk7XG5cbiAgICByZXR1cm4ge2FkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGFkZFRhc2tMb2NhdGlvbiwgZWRpdFRhc2ssIHJlbW92ZVRhc2ssIHRvZ2dsZVByaW9yaXR5fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2xsZXI7Il0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJleHBvcnRzIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJnIiwiZ2xvYmFsVGhpcyIsInRoaXMiLCJGdW5jdGlvbiIsImUiLCJ3aW5kb3ciLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGVuZ3RoIiwiRXJyb3IiLCJyZXBsYWNlIiwicCIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkZXIiLCJ0YXNrIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImxlZnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbWFnZTEiLCJJbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHBlbmRDaGlsZCIsInRpdGxlIiwidGV4dENvbnRlbnQiLCJyaWdodCIsImJ1dHRvbiIsImltYWdlMiIsImltYWdlMyIsImltYWdlNCIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsImV2ZW50IiwidGFyZ2V0IiwicmVtb3ZlIiwib2xkRWxlbWVudCIsIm5ld0VsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwicmVwbGFjZUNoaWxkIiwiYWRkUHJvamVjdCIsInJlbW92ZVByb2plY3QiLCJhZGRUYXNrTG9jYXRpb24iLCJlZGl0VGFzayIsInJlbW92ZVRhc2siLCJ0b2dnbGVQcmlvcml0eSJdLCJzb3VyY2VSb290IjoiIn0=