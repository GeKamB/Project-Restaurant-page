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
    monday: "11:00 AM - 9:00 PM",
    tuesday: "11:00 AM - 9:00 PM",
    wednesday: "11:00 AM - 9:00 PM",
    thursday: "11:00 AM - 9:00 PM",
    friday: "11:00 AM - 10:00 PM",
    saturday: "12:00 PM - 10:00 PM",
    sunday: "12:00 PM - 9:00 PM",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxJQUFJLElBQUksTUFBTTtBQUNyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLGlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgY29udGFjdEluZm8gPSB7XG4gICAgYWRkcmVzczogXCIxMjMgUGl6emEgU3RyZWV0LCBZb3VyIENpdHlcIixcbiAgICBwaG9uZTogXCIrMSAoMTIzKSA0NTYtNzg5MFwiLFxuICAgIGVtYWlsOiBcImluZm9AcGl6emFwYWxhY2UuY29tXCIsXG4gIH07XG4gIFxuICBjb25zdCBvcGVuaW5nSG91cnMgPSB7XG4gICAgbW9uZGF5OiBcIjExOjAwIEFNIC0gOTowMCBQTVwiLFxuICAgIHR1ZXNkYXk6IFwiMTE6MDAgQU0gLSA5OjAwIFBNXCIsXG4gICAgd2VkbmVzZGF5OiBcIjExOjAwIEFNIC0gOTowMCBQTVwiLFxuICAgIHRodXJzZGF5OiBcIjExOjAwIEFNIC0gOTowMCBQTVwiLFxuICAgIGZyaWRheTogXCIxMTowMCBBTSAtIDEwOjAwIFBNXCIsXG4gICAgc2F0dXJkYXk6IFwiMTI6MDAgUE0gLSAxMDowMCBQTVwiLFxuICAgIHN1bmRheTogXCIxMjowMCBQTSAtIDk6MDAgUE1cIixcbiAgfTtcblxuXG5cbiAgZnVuY3Rpb24gcG9wdWxhdGVDb250YWN0KGFwcGVuZCkge1xuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2MS5jbGFzc0xpc3QuYWRkKCdkaXZ2JylcbiAgICBcbiAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYyLmNsYXNzTGlzdC5hZGQoJ2RpdnYnKVxuICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JveCcpOyAgXG4gICAgZnVuY3Rpb24gY3JlYXRlUGFyYUZyb21PYmplY3QoY29udGFjdEluZm8sIGFwcGVuZDIpIHtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvbnRhY3RJbmZvKSB7XG4gICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbnRhY3RJbmZvW2tleV07XG4gICAgICAgICAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgJHtrZXl9OiAke3ZhbHVlfWA7XG4gICAgICAgICAgICBhcHBlbmQyLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICAgY3JlYXRlUGFyYUZyb21PYmplY3QoY29udGFjdEluZm8sIGRpdjEpO1xuICAgICAgY3JlYXRlUGFyYUZyb21PYmplY3Qob3BlbmluZ0hvdXJzLCBkaXYyKTtcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBhcHBlbmQuYXBwZW5kKGJveCwgZGl2MSwgZGl2Mik7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgcG9wdWxhdGVDb250YWN0Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9