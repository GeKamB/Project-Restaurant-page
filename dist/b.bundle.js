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
  !*** ./src/b.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pizzas = [
    {
      name: "Margherita",
      ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Fresh Basil"],
      price: 10.99,
    },
    {
      name: "Pepperoni Feast",
      ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Pepperoni Slices"],
      price: 12.99,
    },
    {
      name: "Veggie Delight",
      ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Bell Peppers", "Mushrooms", "Olives"],
      price: 11.99,
    },
    {
      name: "Supreme Special",
      ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Pepperoni", "Sausage", "Bell Peppers", "Onions"],
      price: 13.99,
    },
  ];

function populateMenu(append) {
    const box = document.createElement('div')
    box.setAttribute('id', 'box');
    pizzas.forEach((pizza, i) => {
    const pizzaDiv = document.createElement('p');
    pizzaDiv
    
    for (let key in pizza) {
      let para = document.createElement('p');
      let br = document.createElement('br');
      
      para = pizza[key]
      pizzaDiv.append(para, br)
       
        
      }
    
    box.append(pizzaDiv);    
    })
    append.append(box);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateMenu);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQSxpRUFBZSxjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9iLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgcGl6emFzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiTWFyZ2hlcml0YVwiLFxuICAgICAgaW5ncmVkaWVudHM6IFtcIlRvbWF0byBTYXVjZVwiLCBcIk1venphcmVsbGEgQ2hlZXNlXCIsIFwiRnJlc2ggQmFzaWxcIl0sXG4gICAgICBwcmljZTogMTAuOTksXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlBlcHBlcm9uaSBGZWFzdFwiLFxuICAgICAgaW5ncmVkaWVudHM6IFtcIlRvbWF0byBTYXVjZVwiLCBcIk1venphcmVsbGEgQ2hlZXNlXCIsIFwiUGVwcGVyb25pIFNsaWNlc1wiXSxcbiAgICAgIHByaWNlOiAxMi45OSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiVmVnZ2llIERlbGlnaHRcIixcbiAgICAgIGluZ3JlZGllbnRzOiBbXCJUb21hdG8gU2F1Y2VcIiwgXCJNb3p6YXJlbGxhIENoZWVzZVwiLCBcIkJlbGwgUGVwcGVyc1wiLCBcIk11c2hyb29tc1wiLCBcIk9saXZlc1wiXSxcbiAgICAgIHByaWNlOiAxMS45OSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU3VwcmVtZSBTcGVjaWFsXCIsXG4gICAgICBpbmdyZWRpZW50czogW1wiVG9tYXRvIFNhdWNlXCIsIFwiTW96emFyZWxsYSBDaGVlc2VcIiwgXCJQZXBwZXJvbmlcIiwgXCJTYXVzYWdlXCIsIFwiQmVsbCBQZXBwZXJzXCIsIFwiT25pb25zXCJdLFxuICAgICAgcHJpY2U6IDEzLjk5LFxuICAgIH0sXG4gIF07XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTWVudShhcHBlbmQpIHtcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JveCcpO1xuICAgIHBpenphcy5mb3JFYWNoKChwaXp6YSwgaSkgPT4ge1xuICAgIGNvbnN0IHBpenphRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBpenphRGl2XG4gICAgXG4gICAgZm9yIChsZXQga2V5IGluIHBpenphKSB7XG4gICAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGxldCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICBcbiAgICAgIHBhcmEgPSBwaXp6YVtrZXldXG4gICAgICBwaXp6YURpdi5hcHBlbmQocGFyYSwgYnIpXG4gICAgICAgXG4gICAgICAgIFxuICAgICAgfVxuICAgIFxuICAgIGJveC5hcHBlbmQocGl6emFEaXYpOyAgICBcbiAgICB9KVxuICAgIGFwcGVuZC5hcHBlbmQoYm94KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBwb3B1bGF0ZU1lbnUiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=