function dropNavToggle(){$("#nav-dropdown").toggleClass("show"),$(this).children(".carret").toggleClass("carret-toggle")}function dropLangToggle(){$("#lang-dropdown").toggleClass("show"),$(this).children(".carret").toggleClass("carret-toggle")}document.getElementById("btn-nav-drop").addEventListener("click",dropNavToggle),document.getElementById("btn--lang").addEventListener("click",dropLangToggle),window.onclick=function(t){if(!t.target.matches(".btn--nav-dropdown")){$("#nav-dropdown").hasClass("show")&&$("#btn-nav-drop").children(".carret").toggleClass("carret-toggle");var e,n=document.getElementsByClassName("dropdown-content");for(e=0;e<n.length;e++){var o=n[e];o.classList.contains("show")&&o.classList.remove("show")}}if(!t.target.matches(".btn--lang-dropdown")){$("#lang-dropdown").hasClass("show")&&$("#btn--lang").children(".carret").toggleClass("carret-toggle");var e,n=document.getElementsByClassName("select-content");for(e=0;e<n.length;e++){var o=n[e];o.classList.contains("show")&&o.classList.remove("show")}}},$(document).ready(function(){function t(){for(var t,e=$(".carousel-3d-slide"),n=$(".slider-indicator li"),o=0;o<e.length;o++){if(e[o].classList.contains("current")){t=o,arr2=n[t];for(var i=0;i<n.length;i++)n[i].classList.remove("active"),arr2.classList.add("active")}}}function e(){var t=this;setTimeout(function(){t.style.cssText="height:auto; padding-top:0",t.style.cssText="height:"+t.scrollHeight+"~17px"},0)}for(var n=$(".carousel-3d-slide"),o=0;o<n.length;o++)n[o].addEventListener("transitionend",t,!1);var i=$("#toogle-btn"),r=$(".main-nav"),a=$(".btn--open-modal"),s=$(".btn--modal-close, .modal-overlay"),l=$(".breadcrumbs__list-item--active").children().html();if(void 0!=l&&(l=$(".breadcrumbs__list-item--active").children().html(l.substring(0,19)+"...")),a.click(function(t){t.preventDefault(),$(".modal-overlay").fadeIn(400,function(){$("#modal-order").css("display","flex").animate({opacity:1,top:"20%"},300)})}),s.click(function(){$("#modal-order").animate({opacity:0,top:"-20%"},200,function(){$(this).css("display","none"),$(".modal-overlay").fadeOut(400)})}),i.on("click",function(){r.slideToggle()}),$(window).resize(function(){$(window).width()>767&&r.is(":hidden")&&r.removeAttr("style")}),$(window).width()<=576){$(".work__item-wrap").on("click",function(){$(this).parent().children(".work__item-text").is(":hidden")?($(this).parent().children(".work__item-text").slideToggle(),$(this).children(".work__item-title").children().css("transform"," rotate(90deg)")):($(this).parent().children(".work__item-text").slideToggle(),$(this).children(".work__item-title").children().css("transform"," rotate(0deg)"))})}var d=document.querySelector("textarea");void 0!=d&&d.addEventListener("keydown",e)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZHJvcE5hdlRvZ2dsZSIsIiQiLCJ0b2dnbGVDbGFzcyIsInRoaXMiLCJjaGlsZHJlbiIsImRyb3BMYW5nVG9nZ2xlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJvbmNsaWNrIiwiZXZlbnQiLCJ0YXJnZXQiLCJtYXRjaGVzIiwiaGFzQ2xhc3MiLCJpIiwiZHJvcGRvd25zIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsIm9wZW5Ecm9wZG93biIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwicmVhZHkiLCJjaGFuZ2VTbGlkZXJMaXN0IiwiaW5kZXgiLCJhIiwiYiIsImsiLCJhcnIyIiwiYWRkIiwiYXV0b3NpemUiLCJlbCIsInNldFRpbWVvdXQiLCJzdHlsZSIsImNzc1RleHQiLCJzY3JvbGxIZWlnaHQiLCJlbGVtIiwidG9vZ2xlX2J0biIsIm1lbnUiLCJtb2RhbF9vcGVuIiwibW9kYWxfY2xvc2UiLCJicmVhZGNydW1ic19pdGVtIiwiaHRtbCIsInVuZGVmaW5lZCIsInN1YnN0cmluZyIsImNsaWNrIiwicHJldmVudERlZmF1bHQiLCJmYWRlSW4iLCJjc3MiLCJhbmltYXRlIiwib3BhY2l0eSIsInRvcCIsImZhZGVPdXQiLCJvbiIsInNsaWRlVG9nZ2xlIiwicmVzaXplIiwid2lkdGgiLCJpcyIsInJlbW92ZUF0dHIiLCJwYXJlbnQiLCJ0ZXh0YXJlYSIsInF1ZXJ5U2VsZWN0b3IiXSwibWFwcGluZ3MiOiJBQUdBLFFBQVNBLGlCQUNQQyxFQUFFLGlCQUFpQkMsWUFBWSxRQUMvQkQsRUFBRUUsTUFBTUMsU0FBUyxXQUFXRixZQUFZLGlCQUcxQyxRQUFTRyxrQkFDUkosRUFBRSxrQkFBa0JDLFlBQVksUUFDaENELEVBQUVFLE1BQU1DLFNBQVMsV0FBV0YsWUFBWSxpQkFJekNJLFNBQVNDLGVBQWUsZ0JBQWdCQyxpQkFBaUIsUUFB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QUFHLFlBQ25EekQsRUFBRUUsTUFBTXlELFNBQVN4RCxTQUFTLG9CQUFvQm1ELGNBQzlDdEQsRUFBRUUsTUFBTUMsU0FBUyxxQkFBcUJBLFdBQVc2QyxJQUFJLFlBQVksb0JBRWpFaEQsRUFBRUUsTUFBTXlELFNBQVN4RCxTQUFTLG9CQUFvQm1ELGNBQzlDdEQsRUFBRUUsTUFBTUMsU0FBUyxxQkFBcUJBLFdBQVc2QyxJQUFJLFlBQVksb0JBTXpFLEdBQUlZLEdBQVd2RCxTQUFTd0QsY0FBYyxnQkFFdEJsQixJQUFaaUIsR0FDRkEsRUFBU3JELGlCQUFpQixVQUFXdUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbmZ1bmN0aW9uIGRyb3BOYXZUb2dnbGUoKSB7XHJcbiAgJCgnI25hdi1kcm9wZG93bicpLnRvZ2dsZUNsYXNzKFwic2hvd1wiKTtcclxuICAkKHRoaXMpLmNoaWxkcmVuKCcuY2FycmV0JykudG9nZ2xlQ2xhc3MoXCJjYXJyZXQtdG9nZ2xlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcm9wTGFuZ1RvZ2dsZSgpIHtcclxuICQoJyNsYW5nLWRyb3Bkb3duJykudG9nZ2xlQ2xhc3MoXCJzaG93XCIpO1xyXG4gJCh0aGlzKS5jaGlsZHJlbignLmNhcnJldCcpLnRvZ2dsZUNsYXNzKFwiY2FycmV0LXRvZ2dsZVwiKTtcclxufVxyXG5cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLW5hdi1kcm9wXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcm9wTmF2VG9nZ2xlKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tLWxhbmdcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRyb3BMYW5nVG9nZ2xlKTtcclxuXHJcbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgaWYgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLmJ0bi0tbmF2LWRyb3Bkb3duJykpIHtcclxuICAgaWYgKCQoJyNuYXYtZHJvcGRvd24nKS5oYXNDbGFzcygnc2hvdycpKSB7XHJcbiAgICAkKCcjYnRuLW5hdi1kcm9wJykuY2hpbGRyZW4oJy5jYXJyZXQnKS50b2dnbGVDbGFzcyhcImNhcnJldC10b2dnbGVcIik7XHJcbiAgfSBcclxuXHJcbiAgdmFyIGRyb3Bkb3ducyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkcm9wZG93bi1jb250ZW50XCIpO1xyXG4gIHZhciBpO1xyXG4gIGZvciAoaSA9IDA7IGkgPCBkcm9wZG93bnMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBvcGVuRHJvcGRvd24gPSBkcm9wZG93bnNbaV07XHJcbiAgICBpZiAob3BlbkRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XHJcbiAgICAgIG9wZW5Ecm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5pZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuYnRuLS1sYW5nLWRyb3Bkb3duJykpIHtcclxuXHJcbiAgaWYgKCQoJyNsYW5nLWRyb3Bkb3duJykuaGFzQ2xhc3MoJ3Nob3cnKSkge1xyXG4gICAgJCgnI2J0bi0tbGFuZycpLmNoaWxkcmVuKCcuY2FycmV0JykudG9nZ2xlQ2xhc3MoXCJjYXJyZXQtdG9nZ2xlXCIpO1xyXG4gIH0gXHJcblxyXG4gIHZhciBkcm9wZG93bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2VsZWN0LWNvbnRlbnRcIik7XHJcbiAgdmFyIGk7XHJcbiAgZm9yIChpID0gMDsgaSA8IGRyb3Bkb3ducy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIG9wZW5Ecm9wZG93biA9IGRyb3Bkb3duc1tpXTtcclxuICAgIGlmIChvcGVuRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuICAgICAgb3BlbkRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxufTtcclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpeyBcclxuXHJcbiAgdmFyIGVsZW0gPSAkKFwiLmNhcm91c2VsLTNkLXNsaWRlXCIpO1xyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VTbGlkZXJMaXN0KCkge1xyXG4gICAgdmFyIGEgPSAkKFwiLmNhcm91c2VsLTNkLXNsaWRlXCIpO1xyXG4gICAgdmFyIGIgPSAkKFwiLnNsaWRlci1pbmRpY2F0b3IgbGlcIik7XHJcblxyXG4gICAgdmFyIGluZGV4O1xyXG5cclxuXHJcbiAgICBmb3IgKHZhciBrID0gMDsgayA8IGEubGVuZ3RoOyBrKyspIHtcclxuICAgICAgdmFyIGFyciA9IGFba107XHJcbiAgICAgIGlmIChhcnIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50JykpIHtcclxuICAgICAgICBpbmRleCA9IGs7XHJcbiAgICAgICAgYXJyMj1iW2luZGV4XTtcclxuICAgICAgICBmb3IodmFyIGk9MDsgaSA8IGIubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgYltpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgYXJyMi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcblxyXG4gIGZvciAodmFyIGkgPSAwIDsgaSA8IGVsZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgZWxlbVtpXS5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBjaGFuZ2VTbGlkZXJMaXN0LCBmYWxzZSk7IFxyXG4gfVxyXG5cclxuLypzbGlkZXIganMgZW5kKi8vLy8vL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICB2YXIgdG9vZ2xlX2J0biAgID0gJCgnI3Rvb2dsZS1idG4nKTtcclxuICB2YXIgbWVudSAgPSAkKCcubWFpbi1uYXYnKTtcclxuICB2YXIgbW9kYWxfb3BlbiA9ICQoJy5idG4tLW9wZW4tbW9kYWwnKTtcclxuICB2YXIgbW9kYWxfY2xvc2UgPSAkKCcuYnRuLS1tb2RhbC1jbG9zZSwgLm1vZGFsLW92ZXJsYXknKTtcclxuXHJcbiAgdmFyIGJyZWFkY3J1bWJzX2l0ZW0gPSAkKCcuYnJlYWRjcnVtYnNfX2xpc3QtaXRlbS0tYWN0aXZlJykuY2hpbGRyZW4oKS5odG1sKCk7XHJcblxyXG5cclxuXHJcblxyXG4gIGlmIChicmVhZGNydW1ic19pdGVtICE9IHVuZGVmaW5lZCkge1xyXG4gICAgYnJlYWRjcnVtYnNfaXRlbSA9ICQoJy5icmVhZGNydW1ic19fbGlzdC1pdGVtLS1hY3RpdmUnKS5jaGlsZHJlbigpLmh0bWwoYnJlYWRjcnVtYnNfaXRlbS5zdWJzdHJpbmcoMCwgMTkpICsgXCIuLi5cIik7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgbW9kYWxfb3Blbi5jbGljayggZnVuY3Rpb24oZXZlbnQpeyBcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlSW4oNDAwLCBcclxuICAgICAgZnVuY3Rpb24oKXsgXHJcbiAgICAgICAgJCgnI21vZGFsLW9yZGVyJykgXHJcbiAgICAgICAgLmNzcygnZGlzcGxheScsICdmbGV4JykgXHJcbiAgICAgICAgLmFuaW1hdGUoe29wYWNpdHk6IDEsIHRvcDogJzIwJSd9LCAzMDApOyBcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIG1vZGFsX2Nsb3NlLmNsaWNrKCBmdW5jdGlvbigpeyBcclxuICAgICQoJyNtb2RhbC1vcmRlcicpXHJcbiAgICAuYW5pbWF0ZSh7b3BhY2l0eTogMCwgdG9wOiAnLTIwJSd9LCAyMDAsICBcclxuICAgICAgZnVuY3Rpb24oKXsgXHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpOyBcclxuICAgICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVPdXQoNDAwKTsgXHJcbiAgICAgIH1cclxuICAgICAgKTtcclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICB0b29nbGVfYnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgbWVudS5zbGlkZVRvZ2dsZSgpO1xyXG4gIH0pO1xyXG5cclxuXHJcblxyXG4gICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgIHZhciB3ID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICBpZih3ID4gNzY3ICYmIG1lbnUuaXMoJzpoaWRkZW4nKSkge1xyXG4gICAgICBtZW51LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gNTc2KSB7XHJcblxyXG4gICAgdmFyIHdvcmtfYnRuID0gJCgnLndvcmtfX2l0ZW0td3JhcCcpO1xyXG5cclxuICAgIHdvcmtfYnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKCQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oJy53b3JrX19pdGVtLXRleHQnKS5pcyhcIjpoaWRkZW5cIikpIHtcclxuICAgICAgICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oJy53b3JrX19pdGVtLXRleHQnKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLndvcmtfX2l0ZW0tdGl0bGUnKS5jaGlsZHJlbigpLmNzcygndHJhbnNmb3JtJywnIHJvdGF0ZSg5MGRlZyknKTtcclxuICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKCcud29ya19faXRlbS10ZXh0Jykuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy53b3JrX19pdGVtLXRpdGxlJykuY2hpbGRyZW4oKS5jc3MoJ3RyYW5zZm9ybScsJyByb3RhdGUoMGRlZyknKTtcclxuICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICB2YXIgdGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xyXG5cclxuICBpZiAodGV4dGFyZWEgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYXV0b3NpemUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGF1dG9zaXplKCl7XHJcbiAgICAgIHZhciBlbCA9IHRoaXM7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICBlbC5zdHlsZS5jc3NUZXh0ID0gJ2hlaWdodDphdXRvOyBwYWRkaW5nLXRvcDowJztcclxuICAgICAgICBlbC5zdHlsZS5jc3NUZXh0ID0gJ2hlaWdodDonICsgZWwuc2Nyb2xsSGVpZ2h0ICsgXCJ+MTdcIiArICdweCc7XHJcbiAgICAgIH0sMCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59KTsiXX0=
