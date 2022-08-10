(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var n=r.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.d({},{Z:()=>u});const t={inbox:[],today:[],week:[],projects:[]},r=e.p+"3792aed98a9589656dd4.png",n=e.p+"38c6e851ea03d5118e55.png",d=e.p+"9989a4efa4a9c99c60a3.png",i=e.p+"94441b8e183728b82ae3.png",o=e.p+"596bd58bd36651b3b83d.png",a=(()=>{const e=()=>{document.querySelector("#overlay").remove()},a=e=>{let t=e.target,r=new Image;t.src===n?r.src=o:r.src=n,r.addEventListener("click",u.togglePriority),e.target.parentNode.replaceChild(r,t)};return{renderPage:()=>{},renderTaskForm:()=>{let t=document.querySelector("main"),r=document.createElement("div");r.setAttribute("id","overlay");let d=document.createElement("form"),o=document.createElement("div");o.classList.add("header");let l=document.createElement("h2");l.textContent="Create a New Task",o.appendChild(l);let c=new Image;c.src=i,c.addEventListener("click",e),o.appendChild(c),d.appendChild(o);let s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("id","title"),s.setAttribute("placeholder","title"),s.setAttribute("name","title"),s.setAttribute("required",""),d.appendChild(s);let p=document.createElement("textarea");p.setAttribute("id","description"),p.setAttribute("placeholder","description"),p.setAttribute("name","description"),p.setAttribute("rows","10"),p.setAttribute("cols","40"),p.setAttribute("required",""),d.appendChild(p);let u=document.createElement("input");u.setAttribute("type","date"),u.setAttribute("id","date"),u.setAttribute("name","date"),u.setAttribute("required",""),d.appendChild(u);let m=document.createElement("div");m.classList.add("footer");let b=new Image;b.src=n,b.addEventListener("click",a),m.appendChild(b);let g=document.createElement("button");g.setAttribute("type","submit"),g.setAttribute("id","add-task"),g.textContent="Add Task",m.appendChild(g),d.appendChild(m),r.appendChild(d),t.prepend(r)},renderProjectForm:()=>{},deleteForm:e,addProject:()=>{},removeProject:()=>{},addTask:()=>{document.querySelector("main");let e=document.querySelector("main > h2"),a=document.createElement("div");a.setAttribute("id","task");let l=document.createElement("div");l.classList.add("left");let c=new Image;c.src=r,c.addEventListener("click",u.removeTask),l.appendChild(c);let s=document.createElement("h3");s.textContent=t.inbox[t.inbox.length-1].title,l.appendChild(s),a.appendChild(l);let p=document.createElement("div");p.classList.add("right");let m=document.createElement("button");m.setAttribute("id","info"),m.textContent="Info",p.appendChild(m);let b=new Image;!1===t.inbox[t.inbox.length-1].priorityStatus?b.src=n:b.src=o,b.addEventListener("click",u.togglePriority),p.appendChild(b);let g=new Image;g.src=d,p.appendChild(g);let h=new Image;h.src=i,h.addEventListener("click",u.removeTask),p.appendChild(h),a.appendChild(p),e.parentNode.insertBefore(a,e.nextSibling)},editTask:()=>{},removeTask:e=>{e.target.parentNode.parentNode.remove()},togglePriority:a}})(),l=a,c=()=>{let e=document.querySelector("#title").value,r=document.querySelector("#description").value,d=document.querySelector("#date").value;console.log(d);let i=document.querySelector(".footer > img");i=i.src!==n,t.inbox[t.inbox.length]=((e,t,r,n)=>({title:e,description:t,date:r,priorityStatus:n}))(e,r,d,i),console.log(t.inbox[t.inbox.length-1])},s=()=>{},p=()=>{},u=(document.querySelector("#add-task-form").addEventListener("click",l.renderTaskForm),document.addEventListener("submit",(e=>{e.preventDefault(),c(),l.addTask(),l.deleteForm()})),{addProject:()=>{},removeProject:()=>{},findTaskLocation:()=>{},editTask:()=>{},removeTask:e=>{s(),l.removeTask(e)},togglePriority:e=>{p(),l.togglePriority(e)}})})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQ0EsSUFBSUEsRUFBc0IsQ0NBMUJBLEVBQXdCLENBQUNDLEVBQVNDLEtBQ2pDLElBQUksSUFBSUMsS0FBT0QsRUFDWEYsRUFBb0JJLEVBQUVGLEVBQVlDLEtBQVNILEVBQW9CSSxFQUFFSCxFQUFTRSxJQUM1RUUsT0FBT0MsZUFBZUwsRUFBU0UsRUFBSyxDQUFFSSxZQUFZLEVBQU1DLElBQUtOLEVBQVdDLElBRTFFLEdDTkRILEVBQW9CUyxFQUFJLFdBQ3ZCLEdBQTBCLGlCQUFmQyxXQUF5QixPQUFPQSxXQUMzQyxJQUNDLE9BQU9DLE1BQVEsSUFBSUMsU0FBUyxjQUFiLEVBR2hCLENBRkUsTUFBT0MsR0FDUixHQUFzQixpQkFBWEMsT0FBcUIsT0FBT0EsTUFDeEMsQ0FDQSxDQVB1QixHQ0F4QmQsRUFBb0JJLEVBQUksQ0FBQ1csRUFBS0MsSUFBVVgsT0FBT1ksVUFBVUMsZUFBZUMsS0FBS0osRUFBS0MsRyxNQ0FsRixJQUFJSSxFQUNBcEIsRUFBb0JTLEVBQUVZLGdCQUFlRCxFQUFZcEIsRUFBb0JTLEVBQUVhLFNBQVcsSUFDdEYsSUFBSUMsRUFBV3ZCLEVBQW9CUyxFQUFFYyxTQUNyQyxJQUFLSCxHQUFhRyxJQUNiQSxFQUFTQyxnQkFDWkosRUFBWUcsRUFBU0MsY0FBY0MsTUFDL0JMLEdBQVcsQ0FDZixJQUFJTSxFQUFVSCxFQUFTSSxxQkFBcUIsVUFDekNELEVBQVFFLFNBQVFSLEVBQVlNLEVBQVFBLEVBQVFFLE9BQVMsR0FBR0gsSUFDNUQsQ0FJRCxJQUFLTCxFQUFXLE1BQU0sSUFBSVMsTUFBTSx5REFDaENULEVBQVlBLEVBQVVVLFFBQVEsT0FBUSxJQUFJQSxRQUFRLFFBQVMsSUFBSUEsUUFBUSxZQUFhLEtBQ3BGOUIsRUFBb0IrQixFQUFJWCxDLHVCQ2Z4QixNQVNBLEVBSFcsQ0FBQ1ksTUFMSSxHQUtHQyxNQUpILEdBSVVDLEtBSFgsR0FHaUJDLFNBRmIsSSxxS0NPYkMsRUFBTSxNQUNSLE1BOEVNQyxFQUFhLEtBQ0RkLFNBQVNlLGNBQWMsWUFDN0JDLFFBQVEsRUE4RGRDLEVBQWtCQyxJQUNwQixJQUFJQyxFQUFhRCxFQUFNRSxPQUNuQkMsRUFBYSxJQUFJQyxNQUNqQkgsRUFBV2pCLE1BQVEsRUFDbkJtQixFQUFXbkIsSUFBTSxFQUVqQm1CLEVBQVduQixJQUFNLEVBRXJCbUIsRUFBV0UsaUJBQWlCLFFBQVMsa0JBQ3JDTCxFQUFNRSxPQUFPSSxXQUFXQyxhQUFhSixFQUFZRixFQUFXLEVBR2hFLE1BQU8sQ0FBQ08sV0ExSlcsT0EwSkNDLGVBOUlHLEtBQ25CLElBQUlDLEVBQU81QixTQUFTZSxjQUFjLFFBRTlCYyxFQUFVN0IsU0FBUzhCLGNBQWMsT0FDckNELEVBQVFFLGFBQWEsS0FBTSxXQUUzQixJQUFJQyxFQUFPaEMsU0FBUzhCLGNBQWMsUUFFOUJHLEVBQVNqQyxTQUFTOEIsY0FBYyxPQUNwQ0csRUFBT0MsVUFBVUMsSUFBSSxVQUVyQixJQUFJQyxFQUFVcEMsU0FBUzhCLGNBQWMsTUFDckNNLEVBQVFDLFlBQWMsb0JBQ3RCSixFQUFPSyxZQUFZRixHQUVuQixJQUFJRyxFQUFTLElBQUlqQixNQUNqQmlCLEVBQU9yQyxJQUFNLEVBQ2JxQyxFQUFPaEIsaUJBQWlCLFFBQVNULEdBQ2pDbUIsRUFBT0ssWUFBWUMsR0FFbkJQLEVBQUtNLFlBQVlMLEdBRWpCLElBQUlPLEVBQVF4QyxTQUFTOEIsY0FBYyxTQUNuQ1UsRUFBTVQsYUFBYSxPQUFRLFFBQzNCUyxFQUFNVCxhQUFhLEtBQU0sU0FDekJTLEVBQU1ULGFBQWEsY0FBZSxTQUNsQ1MsRUFBTVQsYUFBYSxPQUFRLFNBQzNCUyxFQUFNVCxhQUFhLFdBQVksSUFDL0JDLEVBQUtNLFlBQVlFLEdBRWpCLElBQUlDLEVBQWN6QyxTQUFTOEIsY0FBYyxZQUN6Q1csRUFBWVYsYUFBYSxLQUFNLGVBQy9CVSxFQUFZVixhQUFhLGNBQWUsZUFDeENVLEVBQVlWLGFBQWEsT0FBUSxlQUNqQ1UsRUFBWVYsYUFBYSxPQUFRLE1BQ2pDVSxFQUFZVixhQUFhLE9BQVEsTUFDakNVLEVBQVlWLGFBQWEsV0FBWSxJQUNyQ0MsRUFBS00sWUFBWUcsR0FFakIsSUFBSUMsRUFBTzFDLFNBQVM4QixjQUFjLFNBQ2xDWSxFQUFLWCxhQUFhLE9BQVEsUUFDMUJXLEVBQUtYLGFBQWEsS0FBTSxRQUN4QlcsRUFBS1gsYUFBYSxPQUFRLFFBQzFCVyxFQUFLWCxhQUFhLFdBQVksSUFDOUJDLEVBQUtNLFlBQVlJLEdBRWpCLElBQUlDLEVBQVMzQyxTQUFTOEIsY0FBYyxPQUNwQ2EsRUFBT1QsVUFBVUMsSUFBSSxVQUVyQixJQUFJUyxFQUFTLElBQUl0QixNQUNqQnNCLEVBQU8xQyxJQUFNLEVBQ2IwQyxFQUFPckIsaUJBQWlCLFFBQVNOLEdBQ2pDMEIsRUFBT0wsWUFBWU0sR0FFbkIsSUFBSUMsRUFBUzdDLFNBQVM4QixjQUFjLFVBQ3BDZSxFQUFPZCxhQUFhLE9BQVEsVUFDNUJjLEVBQU9kLGFBQWEsS0FBTSxZQUMxQmMsRUFBT1IsWUFBYyxXQUNyQk0sRUFBT0wsWUFBWU8sR0FFbkJiLEVBQUtNLFlBQVlLLEdBRWpCZCxFQUFRUyxZQUFZTixHQUVwQkosRUFBS2tCLFFBQVFqQixFQUFRLEVBOEVXa0Isa0JBdkpWLE9BdUo2QmpDLGFBQVlrQyxXQXBKaEQsT0FvSjREQyxjQWpKekQsT0FpSndFQyxRQXhFOUUsS0FDRGxELFNBQVNlLGNBQWMsUUFBbEMsSUFDSWtCLEVBQVNqQyxTQUFTZSxjQUFjLGFBRWhDb0MsRUFBT25ELFNBQVM4QixjQUFjLE9BQ2xDcUIsRUFBS3BCLGFBQWEsS0FBTSxRQUV4QixJQUFJcUIsRUFBT3BELFNBQVM4QixjQUFjLE9BQ2xDc0IsRUFBS2xCLFVBQVVDLElBQUksUUFFbkIsSUFBSUksRUFBUyxJQUFJakIsTUFDakJpQixFQUFPckMsSUFBTSxFQUNicUMsRUFBT2hCLGlCQUFpQixRQUFTLGNBQ2pDNkIsRUFBS2QsWUFBWUMsR0FFakIsSUFBSUMsRUFBUXhDLFNBQVM4QixjQUFjLE1BQ25DVSxFQUFNSCxZQUFjLFFBQWMsZUFBdUIsR0FBR0csTUFDNURZLEVBQUtkLFlBQVlFLEdBRWpCVyxFQUFLYixZQUFZYyxHQUVqQixJQUFJQyxFQUFRckQsU0FBUzhCLGNBQWMsT0FDbkN1QixFQUFNbkIsVUFBVUMsSUFBSSxTQUVwQixJQUFJbUIsRUFBU3RELFNBQVM4QixjQUFjLFVBQ3BDd0IsRUFBT3ZCLGFBQWEsS0FBTSxRQUMxQnVCLEVBQU9qQixZQUFjLE9BQ3JCZ0IsRUFBTWYsWUFBWWdCLEdBRWxCLElBQUlWLEVBQVMsSUFBSXRCLE9BQzhDLElBQTNELFFBQWMsZUFBdUIsR0FBR2lDLGVBQ3hDWCxFQUFPMUMsSUFBTSxFQUViMEMsRUFBTzFDLElBQU0sRUFFakIwQyxFQUFPckIsaUJBQWlCLFFBQVMsa0JBQ2pDOEIsRUFBTWYsWUFBWU0sR0FFbEIsSUFBSVksRUFBUyxJQUFJbEMsTUFDakJrQyxFQUFPdEQsSUFBTSxFQUNibUQsRUFBTWYsWUFBWWtCLEdBRWxCLElBQUlDLEVBQVMsSUFBSW5DLE1BQ2pCbUMsRUFBT3ZELElBQU0sRUFDYnVELEVBQU9sQyxpQkFBaUIsUUFBUyxjQUNqQzhCLEVBQU1mLFlBQVltQixHQUVsQk4sRUFBS2IsWUFBWWUsR0FFakJwQixFQUFPVCxXQUFXa0MsYUFBYVAsRUFBTWxCLEVBQU8wQixZQUFZLEVBdUIyQ0MsU0FwQnRGLE9Bb0JnR0MsV0FqQjdGM0MsSUFDRkEsRUFBTUUsT0FBT0ksV0FBV0EsV0FDOUJSLFFBQVEsRUFleUdDLGlCQUNoSSxFQTVKVyxHQThKWixJQzVIQSxFQTNCb0IsS0FDWixJQUFJdUIsRUFBUXhDLFNBQVNlLGNBQWMsVUFBVStDLE1BQ3pDckIsRUFBY3pDLFNBQVNlLGNBQWMsZ0JBQWdCK0MsTUFDckRwQixFQUFPMUMsU0FBU2UsY0FBYyxTQUFTK0MsTUFDM0NDLFFBQVFDLElBQUl0QixHQUNaLElBQUl1QixFQUFhakUsU0FBU2UsY0FBYyxpQkFFcENrRCxFQURBQSxFQUFXL0QsTUFBUSxFQUt2QixRQUFjLGdCQzdCRixFQUFDc0MsRUFBT0MsRUFBYUMsRUFBTXVCLEtBQ3BDLENBQUN6QixRQUFPQyxjQUFhQyxPQUFNYSxlQUFnQlUsSUQ0QlJkLENBQVlYLEVBQU9DLEVBQWFDLEVBQU11QixHQUM1RUYsUUFBUUMsSUFBSSxRQUFjLGVBQXVCLEdBQUcsRUFlNUQsRUFWdUIsT0FVdkIsRUFQMkIsT0VJM0IsR0FSdUJoRSxTQUFTZSxjQUFjLGtCQUMvQlEsaUJBQWlCLFFBQVMsa0JBRXJDdkIsU0FBU3VCLGlCQUFpQixVQXpCVEwsSUFDYkEsRUFBTWdELGlCQUNOLElBQ0EsWUFDQSxjQUFnQixJQXVCYixDQUFDbEIsV0FqQ1csT0FpQ0NDLGNBOUJFLE9BOEJha0IsaUJBckJWLE9BcUI0QlAsU0FsQnBDLE9Ba0I4Q0MsV0FmM0MzQyxJQUNoQixJQUNBLGFBQWVBLEVBQU0sRUFha0RELGVBWG5EQyxJQUNwQixJQUNBLGlCQUFtQkEsRUFBTSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL21vZHVsZXMvRE9NLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL2FwcGxpY2F0aW9uLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImNvbnN0IHN0b3JhZ2UgPSAoKCkgPT4ge1xuICAgIGxldCBpbmJveCA9IFtdO1xuICAgIGxldCB0b2RheSA9IFtdO1xuICAgIGxldCB3ZWVrID0gW107XG4gICAgbGV0IHByb2plY3RzID0gW107XG5cbiAgICByZXR1cm4ge2luYm94LCB0b2RheSwgd2VlaywgcHJvamVjdHN9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlOyIsIi8vIE1vZHVsZXNcbmltcG9ydCBjb250cm9sbGVyIGZyb20gJy4uL2luZGV4LmpzJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZS5qcyc7XG5cbi8vIE1lZGlhXG5pbXBvcnQgY2lyY2xlIGZyb20gJy4uLy4uL2Rpc3QvbWVkaWEvY2lyY2xlLnBuZyc7XG5pbXBvcnQgc3RhciBmcm9tICcuLi8uLi9kaXN0L21lZGlhL3N0YXIucG5nJztcbmltcG9ydCBlZGl0IGZyb20gJy4uLy4uL2Rpc3QvbWVkaWEvZWRpdC5wbmcnO1xuaW1wb3J0IHJlbW92ZSBmcm9tICcuLi8uLi9kaXN0L21lZGlhL3JlbW92ZS5wbmcnO1xuaW1wb3J0IGZ1bGxzdGFyIGZyb20gJy4uLy4uL2Rpc3QvbWVkaWEvZnVsbHN0YXIucG5nJztcblxuY29uc3QgRE9NID0gKCgpID0+IHtcbiAgICBjb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xuXG4gICAgfTtcbiAgICBjb25zdCByZW5kZXJQcm9qZWN0Rm9ybSA9ICgpID0+IHtcblxuICAgIH07XG4gICAgY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcblxuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9ICgpID0+IHtcblxuICAgIH07XG4gICAgY29uc3QgcmVuZGVyVGFza0Zvcm0gPSAoKSA9PiB7XG4gICAgICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgICAgICBcbiAgICAgICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ292ZXJsYXknKTtcblxuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgICAgICBsZXQgaGVhZGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGhlYWRlcjIudGV4dENvbnRlbnQgPSAnQ3JlYXRlIGEgTmV3IFRhc2snO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyMik7XG5cbiAgICAgICAgbGV0IGltYWdlMSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZTEuc3JjID0gcmVtb3ZlO1xuICAgICAgICBpbWFnZTEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVGb3JtKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGltYWdlMSk7XG5cbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICd0aXRsZScpO1xuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGUnKTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMTAnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjb2xzJywgJzQwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZScpO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlJyk7XG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgICAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICAgICAgICBsZXQgaW1hZ2UyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlMi5zcmMgPSBzdGFyO1xuICAgICAgICBpbWFnZTIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVQcmlvcml0eSk7XG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChpbWFnZTIpO1xuXG4gICAgICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXRhc2snKTtcbiAgICAgICAgc3VibWl0LnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gICAgICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAgICAgbWFpbi5wcmVwZW5kKG92ZXJsYXkpO1xuICAgIH07XG4gICAgY29uc3QgZGVsZXRlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpO1xuICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgIH07XG4gICAgY29uc3QgYWRkVGFzayA9ICgpID0+IHtcbiAgICAgICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluID4gaDInKTtcblxuICAgICAgICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzaycpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGVmdC5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgaW1hZ2UxID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlMS5zcmMgPSBjaXJjbGU7XG4gICAgICAgIGltYWdlMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXIucmVtb3ZlVGFzayk7XG4gICAgICAgIGxlZnQuYXBwZW5kQ2hpbGQoaW1hZ2UxKTtcbiAgICAgICAgXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gc3RvcmFnZS5pbmJveFtzdG9yYWdlLmluYm94Lmxlbmd0aCAtIDFdLnRpdGxlO1xuICAgICAgICBsZWZ0LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGxlZnQpO1xuXG4gICAgICAgIGxldCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByaWdodC5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xuXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5mbycpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnSW5mbyc7XG4gICAgICAgIHJpZ2h0LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAgICAgbGV0IGltYWdlMiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpZiAoc3RvcmFnZS5pbmJveFtzdG9yYWdlLmluYm94Lmxlbmd0aCAtIDFdLnByaW9yaXR5U3RhdHVzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaW1hZ2UyLnNyYyA9IHN0YXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbWFnZTIuc3JjID0gZnVsbHN0YXI7XG4gICAgICAgIH1cbiAgICAgICAgaW1hZ2UyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlci50b2dnbGVQcmlvcml0eSk7XG4gICAgICAgIHJpZ2h0LmFwcGVuZENoaWxkKGltYWdlMik7XG5cbiAgICAgICAgbGV0IGltYWdlMyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZTMuc3JjID0gZWRpdDtcbiAgICAgICAgcmlnaHQuYXBwZW5kQ2hpbGQoaW1hZ2UzKTtcblxuICAgICAgICBsZXQgaW1hZ2U0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlNC5zcmMgPSByZW1vdmU7XG4gICAgICAgIGltYWdlNC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXIucmVtb3ZlVGFzayk7XG4gICAgICAgIHJpZ2h0LmFwcGVuZENoaWxkKGltYWdlNCk7XG5cbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZChyaWdodCk7XG5cbiAgICAgICAgaGVhZGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhc2ssIGhlYWRlci5uZXh0U2libGluZyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGVkaXRUYXNrID0gKCkgPT4ge1xuXG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVUYXNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGxldCByZW1vdmFsID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgcmVtb3ZhbC5yZW1vdmUoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdG9nZ2xlUHJpb3JpdHkgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IG9sZEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGxldCBuZXdFbGVtZW50ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGlmIChvbGRFbGVtZW50LnNyYyA9PT0gc3Rhcikge1xuICAgICAgICAgICAgbmV3RWxlbWVudC5zcmMgPSBmdWxsc3RhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuc3JjID0gc3RhcjtcbiAgICAgICAgfVxuICAgICAgICBuZXdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlci50b2dnbGVQcmlvcml0eSk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdFbGVtZW50LCBvbGRFbGVtZW50KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtyZW5kZXJQYWdlLCByZW5kZXJUYXNrRm9ybSwgcmVuZGVyUHJvamVjdEZvcm0sIGRlbGV0ZUZvcm0sIGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGFkZFRhc2ssIGVkaXRUYXNrLCByZW1vdmVUYXNrLCB0b2dnbGVQcmlvcml0eX07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET007IiwiaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi4vaW5kZXguanMnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJztcbmltcG9ydCB0YXNrRmFjdG9yeSBmcm9tICcuL3Rhc2suanMnO1xuXG4vLyBNZWRpYSBJbXBvcnRzXG5pbXBvcnQgc3RhciBmcm9tICcuLi8uLi9kaXN0L21lZGlhL3N0YXIucG5nJztcbmltcG9ydCBmdWxsc3RhciBmcm9tICcuLi8uLi9kaXN0L21lZGlhL2Z1bGxzdGFyLnBuZyc7XG5cbmNvbnN0IGFwcGxpY2F0aW9uID0gKCgpID0+IHtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuXG4gICAgfTtcbiAgICBjb25zdCBhZGRMb2NhdGlvbiA9ICgpID0+IHtcblxuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9ICgpID0+IHtcblxuICAgIH07XG4gICAgY29uc3QgYWRkVGFzayA9ICgpID0+IHtcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykudmFsdWU7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGUpO1xuICAgICAgICBsZXQgaXNQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXIgPiBpbWcnKTtcbiAgICAgICAgaWYgKGlzUHJpb3JpdHkuc3JjID09PSBzdGFyKSB7XG4gICAgICAgICAgICBpc1ByaW9yaXR5ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc1ByaW9yaXR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBzdG9yYWdlLmluYm94W3N0b3JhZ2UuaW5ib3gubGVuZ3RoXSA9IHRhc2tGYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgaXNQcmlvcml0eSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0b3JhZ2UuaW5ib3hbc3RvcmFnZS5pbmJveC5sZW5ndGggLSAxXSk7XG4gICAgfTtcbiAgICBjb25zdCBlZGl0VGFzayA9ICgpID0+IHtcblxuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlVGFzayA9ICgpID0+IHtcblxuICAgIH07XG4gICAgY29uc3QgdG9nZ2xlUHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgICAgIFxuICAgIH07XG5cbiAgICByZXR1cm4ge2FkZFByb2plY3QsIGFkZExvY2F0aW9uLCByZW1vdmVQcm9qZWN0LCBhZGRUYXNrLCBlZGl0VGFzaywgcmVtb3ZlVGFzaywgdG9nZ2xlUHJpb3JpdHl9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwbGljYXRpb247IiwiY29uc3QgdGFza0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBpc1ByaW9yaXR5KSA9PiB7XG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5U3RhdHVzOiBpc1ByaW9yaXR5fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tGYWN0b3J5OyIsImltcG9ydCBET00gZnJvbSAnLi9tb2R1bGVzL0RPTS5qcyc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuL21vZHVsZXMvc3RvcmFnZS5qcydcbmltcG9ydCBhcHBsaWNhdGlvbiBmcm9tICcuL21vZHVsZXMvYXBwbGljYXRpb24uanMnO1xuaW1wb3J0IHRhc2tGYWN0b3J5IGZyb20gJy4vbW9kdWxlcy90YXNrLmpzJztcblxuY29uc3QgY29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcblxuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9ICgpID0+IHtcblxuICAgIH07XG4gICAgY29uc3QgYWRkVGFzayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhcHBsaWNhdGlvbi5hZGRUYXNrKCk7XG4gICAgICAgIERPTS5hZGRUYXNrKCk7XG4gICAgICAgIERPTS5kZWxldGVGb3JtKCk7XG4gICAgfTtcbiAgICBjb25zdCBmaW5kVGFza0xvY2F0aW9uID0gKCkgPT4ge1xuXG4gICAgfTtcbiAgICBjb25zdCBlZGl0VGFzayA9ICgpID0+IHtcblxuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlVGFzayA9IChldmVudCkgPT4ge1xuICAgICAgICBhcHBsaWNhdGlvbi5yZW1vdmVUYXNrKCk7XG4gICAgICAgIERPTS5yZW1vdmVUYXNrKGV2ZW50KTtcbiAgICB9O1xuICAgIGNvbnN0IHRvZ2dsZVByaW9yaXR5ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGFwcGxpY2F0aW9uLnRvZ2dsZVByaW9yaXR5KCk7XG4gICAgICAgIERPTS50b2dnbGVQcmlvcml0eShldmVudCk7XG4gICAgfTtcblxuICAgIC8vIEV2ZW50IExpc3RlbmVyc1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stZm9ybScpO1xuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET00ucmVuZGVyVGFza0Zvcm0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYWRkVGFzayk7XG5cbiAgICByZXR1cm4ge2FkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGZpbmRUYXNrTG9jYXRpb24sIGVkaXRUYXNrLCByZW1vdmVUYXNrLCB0b2dnbGVQcmlvcml0eX07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjb250cm9sbGVyOyJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZXhwb3J0cyIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiZyIsImdsb2JhbFRoaXMiLCJ0aGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInNjcmlwdFVybCIsImltcG9ydFNjcmlwdHMiLCJsb2NhdGlvbiIsImRvY3VtZW50IiwiY3VycmVudFNjcmlwdCIsInNyYyIsInNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxlbmd0aCIsIkVycm9yIiwicmVwbGFjZSIsInAiLCJpbmJveCIsInRvZGF5Iiwid2VlayIsInByb2plY3RzIiwiRE9NIiwiZGVsZXRlRm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmUiLCJ0b2dnbGVQcmlvcml0eSIsImV2ZW50Iiwib2xkRWxlbWVudCIsInRhcmdldCIsIm5ld0VsZW1lbnQiLCJJbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwicmVuZGVyUGFnZSIsInJlbmRlclRhc2tGb3JtIiwibWFpbiIsIm92ZXJsYXkiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZm9ybSIsImhlYWRlciIsImNsYXNzTGlzdCIsImFkZCIsImhlYWRlcjIiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiaW1hZ2UxIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJmb290ZXIiLCJpbWFnZTIiLCJzdWJtaXQiLCJwcmVwZW5kIiwicmVuZGVyUHJvamVjdEZvcm0iLCJhZGRQcm9qZWN0IiwicmVtb3ZlUHJvamVjdCIsImFkZFRhc2siLCJ0YXNrIiwibGVmdCIsInJpZ2h0IiwiYnV0dG9uIiwicHJpb3JpdHlTdGF0dXMiLCJpbWFnZTMiLCJpbWFnZTQiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsImVkaXRUYXNrIiwicmVtb3ZlVGFzayIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImlzUHJpb3JpdHkiLCJwcmV2ZW50RGVmYXVsdCIsImZpbmRUYXNrTG9jYXRpb24iXSwic291cmNlUm9vdCI6IiJ9