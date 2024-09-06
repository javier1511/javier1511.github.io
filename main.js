!function(){"use strict";var e="",t=[{src:e+"036c2288c4194df98acf.jpg",text:"Personal altamente capacitado y confiable: Nuestro equipo de agentes de seguridad está compuesto por profesionales altamente capacitados y experimentados en el campo de la seguridad seleccionamos cuidadosamente a nuestros empleados y les proporcionamos una formación rigurosa, lo que nos permite brindar un servicio confiable y de calidad."},{src:e+"f3c17cf1edd21f6a8e50.jpg",text:"Reconocemos que cada cliente tiene requerimientos y desafíos únicos en términos de seguridad nos dedicamos a comprender tus necesidades específicas y a diseñar estrategias a medida que aborden tus preocupaciones y te brinden la tranquilidad que mereces. Desde la evaluación inicial de riesgos hasta la implementación de medidas de seguridad personalizadas, nos adaptamos a tu situación para ofrecerte soluciones efectivas."},{src:e+"062ca8255e9f302646ea.jpg",text:"Nos comprometemos a mantener la seguridad de tu inmueble en todo momento nuestros agentes altamente capacitados estarán presentes las 24 horas del día para brindar una protección constante y vigilancia activa. Con nuestra presencia, puedes estar tranquilo sabiendo que tu propiedad está protegida en todo momento."},{src:e+"a1657d58479b1fa46ab2.jpg",text:"Valoramos a nuestros clientes y nos esforzamos por ofrecer un servicio al cliente excepcional. Nos mantenemos disponibles las 24 horas del día, los 7 días de la semana, para atender tus consultas y brindarte el apoyo que necesitas además, establecemos relaciones de confianza a largo plazo con nuestros clientes, lo que nos permite comprender sus necesidades cambiantes y adaptar nuestras soluciones en consecuencia."}],a=document.querySelector(".offer__picture"),o=document.querySelector(".offer__text"),n=function(e){a.src=e.src,o.textContent=e.text,console.log("offerPictureSrc:",a.src),console.log("offerText:",o.textContent)};document.querySelector("#offer__titles-text2").addEventListener("click",(function(){n(t[1])})),document.querySelector("#offer__titles-text3").addEventListener("click",(function(){n(t[2])})),document.querySelector("#offer__titles-text4").addEventListener("click",(function(){n(t[3])})),document.querySelector("#offer__titles-text1").addEventListener("click",(function(){n(t[0])}));var s=document.querySelector(".modal"),c=document.querySelector(".modal__picture"),r=function(e){var t=e.target.src;c.src=t,s.classList.add("modal__opened")};document.querySelectorAll(".gallery__container-picture").forEach((function(e){e.addEventListener("click",r)}));var d=function(){s.classList.remove("modal__opened")};document.querySelector(".modal__content-close").addEventListener("click",d),window.addEventListener("click",(function(e){e.target===s&&d()})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&d()})),window.addEventListener("load",(function(){var e=document.querySelector(".loader");e.classList.add("loader-hidden"),e.addEventListener("transitionend",(function(){e&&e.parentNode===document.body&&document.body.removeChild(e)}))}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoieUJBQ0EsSUFBSUEsRUNEb0IsR0NPbEJDLEVBQVksQ0FDZCxDQUNJQyxJLDZCQUNBQyxLQUFNLHVWQUVWLENBQ0lELEksNkJBQ0FDLEtBQU0sMGFBRVYsQ0FDSUQsSSw2QkFDQUMsS0FBTSw2VEFFVixDQUNJRCxJLDZCQUNBQyxLQUFNLHFhQUlWQyxFQUFlQyxTQUFTQyxjQUFjLG1CQUN0Q0MsRUFBWUYsU0FBU0MsY0FBYyxnQkFHakNFLEVBQW1CLFNBQVVDLEdBQy9CTCxFQUFhRixJQUFNTyxFQUFLUCxJQUN4QkssRUFBVUcsWUFBY0QsRUFBS04sS0FDN0JRLFFBQVFDLElBQUksbUJBQW9CUixFQUFhRixLQUM3Q1MsUUFBUUMsSUFBSSxhQUFjTCxFQUFVRyxZQUN4QyxFQUVrQ0wsU0FBU0MsY0FBYyx3QkFDL0JPLGlCQUFpQixTQUFTLFdBQ2hETCxFQUFpQlAsRUFBVSxHQUMvQixJQUVtQ0ksU0FBU0MsY0FBYyx3QkFFL0JPLGlCQUFpQixTQUFTLFdBQ2pETCxFQUFpQlAsRUFBVSxHQUMvQixJQUVtQ0ksU0FBU0MsY0FBYyx3QkFFL0JPLGlCQUFpQixTQUFTLFdBQ2pETCxFQUFpQlAsRUFBVSxHQUMvQixJQUdtQ0ksU0FBU0MsY0FBYyx3QkFFL0JPLGlCQUFpQixTQUFTLFdBQ2pETCxFQUFpQlAsRUFBVSxHQUMvQixJQUVBLElBQU1hLEVBQVFULFNBQVNDLGNBQWMsVUFDL0JTLEVBQWVWLFNBQVNDLGNBQWMsbUJBRXRDVSxFQUFZLFNBQVNDLEdBQ3ZCLElBQU1DLEVBQWdCRCxFQUFNRSxPQUFPakIsSUFDbkNhLEVBQWFiLElBQU1nQixFQUNuQkosRUFBTU0sVUFBVUMsSUFBSSxnQkFDeEIsRUFJd0JoQixTQUFTaUIsaUJBQWlCLCtCQUNsQ0MsU0FBUSxTQUFTQyxHQUM3QkEsRUFBUVgsaUJBQWlCLFFBQVNHLEVBQ3RDLElBR0EsSUFBTVMsRUFBYSxXQUNmWCxFQUFNTSxVQUFVTSxPQUFPLGdCQUUzQixFQUVvQnJCLFNBQVNDLGNBQWMseUJBRS9CTyxpQkFBaUIsUUFBU1ksR0FFdENFLE9BQU9kLGlCQUFpQixTQUFTLFNBQVNJLEdBQ25DQSxFQUFNRSxTQUFXTCxHQUNoQlcsR0FFUixJQUVBcEIsU0FBU1EsaUJBQWlCLFdBQVcsU0FBU0ksR0FDeEIsV0FBZEEsRUFBTVcsS0FDTkgsR0FFUixJQUlBRSxPQUFPZCxpQkFBaUIsUUFBUSxXQUM1QixJQUFNZ0IsRUFBU3hCLFNBQVNDLGNBQWMsV0FFdEN1QixFQUFPVCxVQUFVQyxJQUFJLGlCQUNyQlEsRUFBT2hCLGlCQUFpQixpQkFBaUIsV0FDakNnQixHQUFVQSxFQUFPQyxhQUFlekIsU0FBUzBCLE1BQ3pDMUIsU0FBUzBCLEtBQUtDLFlBQVlILEVBRWxDLEdBQ0osRyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rhdm96cHJvZHVjY2lvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kYXZvenByb2R1Y2Npb24vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZGF2b3pwcm9kdWNjaW9uLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LmNzc1wiOyAvLyBhZ3JlZ2EgbGEgaW1wb3J0YWNpw7NuIGRlbCBhcmNoaXZvIHByaW5jaXBhbCBkZSBob2phcyBkZSBlc3RpbG9cbmltcG9ydCBpbWFnZW4zIGZyb20gXCIuL2ltYWdlcy8zLmpwZ1wiO1xuaW1wb3J0IGltYWdlbjIgZnJvbSBcIi4vaW1hZ2VzLzIuanBnXCI7XG5pbXBvcnQgaW1hZ2VuNCBmcm9tIFwiLi9pbWFnZXMvNC5qcGdcIjtcbmltcG9ydCBpbWFnZW41IGZyb20gXCIuL2ltYWdlcy81LmpwZ1wiO1xuXG5cbmNvbnN0IG9mZmVyRGF0YSA9IFtcbiAgICB7XG4gICAgICAgIHNyYzogaW1hZ2VuMyxcbiAgICAgICAgdGV4dDogXCJQZXJzb25hbCBhbHRhbWVudGUgY2FwYWNpdGFkbyB5IGNvbmZpYWJsZTogTnVlc3RybyBlcXVpcG8gZGUgYWdlbnRlcyBkZSBzZWd1cmlkYWQgZXN0w6EgY29tcHVlc3RvIHBvciBwcm9mZXNpb25hbGVzIGFsdGFtZW50ZSBjYXBhY2l0YWRvcyB5IGV4cGVyaW1lbnRhZG9zIGVuIGVsIGNhbXBvIGRlIGxhIHNlZ3VyaWRhZCBzZWxlY2Npb25hbW9zIGN1aWRhZG9zYW1lbnRlIGEgbnVlc3Ryb3MgZW1wbGVhZG9zIHkgbGVzIHByb3BvcmNpb25hbW9zIHVuYSBmb3JtYWNpw7NuIHJpZ3Vyb3NhLCBsbyBxdWUgbm9zIHBlcm1pdGUgYnJpbmRhciB1biBzZXJ2aWNpbyBjb25maWFibGUgeSBkZSBjYWxpZGFkLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6IGltYWdlbjIsXG4gICAgICAgIHRleHQ6IFwiUmVjb25vY2Vtb3MgcXVlIGNhZGEgY2xpZW50ZSB0aWVuZSByZXF1ZXJpbWllbnRvcyB5IGRlc2Fmw61vcyDDum5pY29zIGVuIHTDqXJtaW5vcyBkZSBzZWd1cmlkYWQgbm9zIGRlZGljYW1vcyBhIGNvbXByZW5kZXIgdHVzIG5lY2VzaWRhZGVzIGVzcGVjw61maWNhcyB5IGEgZGlzZcOxYXIgZXN0cmF0ZWdpYXMgYSBtZWRpZGEgcXVlIGFib3JkZW4gdHVzIHByZW9jdXBhY2lvbmVzIHkgdGUgYnJpbmRlbiBsYSB0cmFucXVpbGlkYWQgcXVlIG1lcmVjZXMuIERlc2RlIGxhIGV2YWx1YWNpw7NuIGluaWNpYWwgZGUgcmllc2dvcyBoYXN0YSBsYSBpbXBsZW1lbnRhY2nDs24gZGUgbWVkaWRhcyBkZSBzZWd1cmlkYWQgcGVyc29uYWxpemFkYXMsIG5vcyBhZGFwdGFtb3MgYSB0dSBzaXR1YWNpw7NuIHBhcmEgb2ZyZWNlcnRlIHNvbHVjaW9uZXMgZWZlY3RpdmFzLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6IGltYWdlbjQsXG4gICAgICAgIHRleHQ6IFwiTm9zIGNvbXByb21ldGVtb3MgYSBtYW50ZW5lciBsYSBzZWd1cmlkYWQgZGUgdHUgaW5tdWVibGUgZW4gdG9kbyBtb21lbnRvIG51ZXN0cm9zIGFnZW50ZXMgYWx0YW1lbnRlIGNhcGFjaXRhZG9zIGVzdGFyw6FuIHByZXNlbnRlcyBsYXMgMjQgaG9yYXMgZGVsIGTDrWEgcGFyYSBicmluZGFyIHVuYSBwcm90ZWNjacOzbiBjb25zdGFudGUgeSB2aWdpbGFuY2lhIGFjdGl2YS4gQ29uIG51ZXN0cmEgcHJlc2VuY2lhLCBwdWVkZXMgZXN0YXIgdHJhbnF1aWxvIHNhYmllbmRvIHF1ZSB0dSBwcm9waWVkYWQgZXN0w6EgcHJvdGVnaWRhIGVuIHRvZG8gbW9tZW50by5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiBpbWFnZW41LFxuICAgICAgICB0ZXh0OiBcIlZhbG9yYW1vcyBhIG51ZXN0cm9zIGNsaWVudGVzIHkgbm9zIGVzZm9yemFtb3MgcG9yIG9mcmVjZXIgdW4gc2VydmljaW8gYWwgY2xpZW50ZSBleGNlcGNpb25hbC4gTm9zIG1hbnRlbmVtb3MgZGlzcG9uaWJsZXMgbGFzIDI0IGhvcmFzIGRlbCBkw61hLCBsb3MgNyBkw61hcyBkZSBsYSBzZW1hbmEsIHBhcmEgYXRlbmRlciB0dXMgY29uc3VsdGFzIHkgYnJpbmRhcnRlIGVsIGFwb3lvIHF1ZSBuZWNlc2l0YXMgYWRlbcOhcywgZXN0YWJsZWNlbW9zIHJlbGFjaW9uZXMgZGUgY29uZmlhbnphIGEgbGFyZ28gcGxhem8gY29uIG51ZXN0cm9zIGNsaWVudGVzLCBsbyBxdWUgbm9zIHBlcm1pdGUgY29tcHJlbmRlciBzdXMgbmVjZXNpZGFkZXMgY2FtYmlhbnRlcyB5IGFkYXB0YXIgbnVlc3RyYXMgc29sdWNpb25lcyBlbiBjb25zZWN1ZW5jaWEuXCIsXG4gICAgfVxuXTtcblxubGV0IG9mZmVyUGljdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2ZmZXJfX3BpY3R1cmVcIik7XG5sZXQgb2ZmZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZmZlcl9fdGV4dFwiKTtcblxuXG5jb25zdCBvZmZlckRhdGFSZXBsYWNlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBvZmZlclBpY3R1cmUuc3JjID0gZGF0YS5zcmM7IC8vIENvcnJlY2Npw7NuIGFxdcOtXG4gICAgb2ZmZXJUZXh0LnRleHRDb250ZW50ID0gZGF0YS50ZXh0OyAvLyBDb3JyZWNjacOzbiBhcXXDrVxuICAgIGNvbnNvbGUubG9nKFwib2ZmZXJQaWN0dXJlU3JjOlwiLCBvZmZlclBpY3R1cmUuc3JjKTtcbiAgICBjb25zb2xlLmxvZyhcIm9mZmVyVGV4dDpcIiwgb2ZmZXJUZXh0LnRleHRDb250ZW50KTtcbn1cblxuY29uc3Qgb2ZmZXJEYXRhR2F0aGVySW5mb0FjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb2ZmZXJfX3RpdGxlcy10ZXh0MlwiKTtcbm9mZmVyRGF0YUdhdGhlckluZm9BY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBvZmZlckRhdGFSZXBsYWNlKG9mZmVyRGF0YVsxXSk7XG59KTtcblxuY29uc3Qgb2ZmZXJEYXRhR2F0aGVySW5mb0FjdGlvbjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29mZmVyX190aXRsZXMtdGV4dDNcIik7XG5cbm9mZmVyRGF0YUdhdGhlckluZm9BY3Rpb24yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb2ZmZXJEYXRhUmVwbGFjZShvZmZlckRhdGFbMl0pO1xufSk7XG5cbmNvbnN0IG9mZmVyRGF0YUdhdGhlckluZm9BY3Rpb24zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvZmZlcl9fdGl0bGVzLXRleHQ0XCIpO1xuXG5vZmZlckRhdGFHYXRoZXJJbmZvQWN0aW9uMy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG9mZmVyRGF0YVJlcGxhY2Uob2ZmZXJEYXRhWzNdKTtcbn0pO1xuXG5cbmNvbnN0IG9mZmVyRGF0YUdhdGhlckluZm9BY3Rpb24xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvZmZlcl9fdGl0bGVzLXRleHQxXCIpO1xuXG5vZmZlckRhdGFHYXRoZXJJbmZvQWN0aW9uMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG9mZmVyRGF0YVJlcGxhY2Uob2ZmZXJEYXRhWzBdKTtcbn0pO1xuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG5jb25zdCBtb2RhbFBpY3R1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19waWN0dXJlXCIpO1xuXG5jb25zdCBvcGVuTW9kYWwgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGNvbnN0IGNsaWNrZWRJbWdTcmMgPSBldmVudC50YXJnZXQuc3JjO1xuICAgIG1vZGFsUGljdHVyZS5zcmMgPSBjbGlja2VkSW1nU3JjO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9fb3BlbmVkXCIpO1xufVxuXG5cblxuY29uc3QgZ2FsbGVyeVBpY3R1cmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYWxsZXJ5X19jb250YWluZXItcGljdHVyZVwiKTtcbmdhbGxlcnlQaWN0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uKHBpY3R1cmUpIHtcbiAgICBwaWN0dXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTW9kYWwpO1xufSk7XG5cblxuY29uc3QgY2xvc2VNb2RhbCA9IGZ1bmN0aW9uKCl7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX19vcGVuZWRcIik7XG5cbn1cblxuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jb250ZW50LWNsb3NlXCIpO1xuXG5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpe1xuICAgIGlmKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwpe1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfVxufSlcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9XG59KTtcblxuLy9sb2FkZXIvL1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGVyXCIpO1xuXG4gICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJsb2FkZXItaGlkZGVuXCIpO1xuICAgIGxvYWRlci5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCAoKSA9PiB7XG4gICAgICAgIGlmIChsb2FkZXIgJiYgbG9hZGVyLnBhcmVudE5vZGUgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobG9hZGVyKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm9mZmVyRGF0YSIsInNyYyIsInRleHQiLCJvZmZlclBpY3R1cmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvZmZlclRleHQiLCJvZmZlckRhdGFSZXBsYWNlIiwiZGF0YSIsInRleHRDb250ZW50IiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb2RhbCIsIm1vZGFsUGljdHVyZSIsIm9wZW5Nb2RhbCIsImV2ZW50IiwiY2xpY2tlZEltZ1NyYyIsInRhcmdldCIsImNsYXNzTGlzdCIsImFkZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicGljdHVyZSIsImNsb3NlTW9kYWwiLCJyZW1vdmUiLCJ3aW5kb3ciLCJrZXkiLCJsb2FkZXIiLCJwYXJlbnROb2RlIiwiYm9keSIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==