/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./src/c.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contactInfo = {
    address: "123 Pizza Street, Your City",
    phone: "+1 (123) 456-7890",
    email: "info@pizzapalace.com",
  };
  
  const openingHours = {
    Monday: "11:00 AM - 9:00 PM",
    Tuesday: "11:00 AM - 9:00 PM",
    Wednesday: "11:00 AM - 9:00 PM",
    Thursday: "11:00 AM - 9:00 PM",
    Friday: "11:00 AM - 10:00 PM",
    Saturday: "12:00 PM - 10:00 PM",
    Sunday: "12:00 PM - 9:00 PM",
  };



  function populateContact(append) {
    const box = document.createElement('div')
    const div1 = document.createElement('div')
    div1.classList.add('divv')
    
    const div2 = document.createElement('div')
    div2.classList.add('divv')
    box.setAttribute('id', 'box');  
    function createParaFromObject(contactInfo, append2) {
        
        
      
        for (const key in contactInfo) {
          
            const paragraph = document.createElement('p');
            const value = contactInfo[key];
            paragraph.textContent = `${key}: ${value}`;
            
            append2.appendChild(paragraph);
          
        }

      }
      createParaFromObject(contactInfo, div1);
      createParaFromObject(openingHours, div2);
    
    
    
    
    
    append.append(box, div1, div2);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateContact);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxJQUFJLElBQUksTUFBTTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBjb250YWN0SW5mbyA9IHtcbiAgICBhZGRyZXNzOiBcIjEyMyBQaXp6YSBTdHJlZXQsIFlvdXIgQ2l0eVwiLFxuICAgIHBob25lOiBcIisxICgxMjMpIDQ1Ni03ODkwXCIsXG4gICAgZW1haWw6IFwiaW5mb0BwaXp6YXBhbGFjZS5jb21cIixcbiAgfTtcbiAgXG4gIGNvbnN0IG9wZW5pbmdIb3VycyA9IHtcbiAgICBNb25kYXk6IFwiMTE6MDAgQU0gLSA5OjAwIFBNXCIsXG4gICAgVHVlc2RheTogXCIxMTowMCBBTSAtIDk6MDAgUE1cIixcbiAgICBXZWRuZXNkYXk6IFwiMTE6MDAgQU0gLSA5OjAwIFBNXCIsXG4gICAgVGh1cnNkYXk6IFwiMTE6MDAgQU0gLSA5OjAwIFBNXCIsXG4gICAgRnJpZGF5OiBcIjExOjAwIEFNIC0gMTA6MDAgUE1cIixcbiAgICBTYXR1cmRheTogXCIxMjowMCBQTSAtIDEwOjAwIFBNXCIsXG4gICAgU3VuZGF5OiBcIjEyOjAwIFBNIC0gOTowMCBQTVwiLFxuICB9O1xuXG5cblxuICBmdW5jdGlvbiBwb3B1bGF0ZUNvbnRhY3QoYXBwZW5kKSB7XG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYxLmNsYXNzTGlzdC5hZGQoJ2RpdnYnKVxuICAgIFxuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdjIuY2xhc3NMaXN0LmFkZCgnZGl2dicpXG4gICAgYm94LnNldEF0dHJpYnV0ZSgnaWQnLCAnYm94Jyk7ICBcbiAgICBmdW5jdGlvbiBjcmVhdGVQYXJhRnJvbU9iamVjdChjb250YWN0SW5mbywgYXBwZW5kMikge1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICBcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29udGFjdEluZm8pIHtcbiAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY29udGFjdEluZm9ba2V5XTtcbiAgICAgICAgICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IGAke2tleX06ICR7dmFsdWV9YDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYXBwZW5kMi5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIGNyZWF0ZVBhcmFGcm9tT2JqZWN0KGNvbnRhY3RJbmZvLCBkaXYxKTtcbiAgICAgIGNyZWF0ZVBhcmFGcm9tT2JqZWN0KG9wZW5pbmdIb3VycywgZGl2Mik7XG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gICAgYXBwZW5kLmFwcGVuZChib3gsIGRpdjEsIGRpdjIpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBvcHVsYXRlQ29udGFjdCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==