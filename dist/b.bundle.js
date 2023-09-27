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
    
    
    for (let key in pizza) {
     
      let para = document.createElement('p');
      let br = document.createElement('br');      
      para.textContent = pizza[key]
      pizzaDiv.append(para, br,)      
        
      }
    
    box.append(pizzaDiv);    
    })
    append.append(box);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateMenu);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBLGlFQUFlLGMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcblxuY29uc3QgcGl6emFzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiTWFyZ2hlcml0YVwiLFxuICAgICAgaW5ncmVkaWVudHM6IFtcIlRvbWF0byBTYXVjZVwiLCBcIk1venphcmVsbGEgQ2hlZXNlXCIsIFwiRnJlc2ggQmFzaWxcIl0sXG4gICAgICBwcmljZTogMTAuOTksICAgICAgXG4gICAgICBcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiUGVwcGVyb25pIEZlYXN0XCIsXG4gICAgICBpbmdyZWRpZW50czogW1wiVG9tYXRvIFNhdWNlXCIsIFwiTW96emFyZWxsYSBDaGVlc2VcIiwgXCJQZXBwZXJvbmkgU2xpY2VzXCJdLFxuICAgICAgcHJpY2U6IDEyLjk5LCAgICAgIFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJWZWdnaWUgRGVsaWdodFwiLFxuICAgICAgaW5ncmVkaWVudHM6IFtcIlRvbWF0byBTYXVjZVwiLCBcIk1venphcmVsbGEgQ2hlZXNlXCIsIFwiQmVsbCBQZXBwZXJzXCIsIFwiTXVzaHJvb21zXCIsIFwiT2xpdmVzXCJdLFxuICAgICAgcHJpY2U6IDExLjk5LCAgICAgIFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJTdXByZW1lIFNwZWNpYWxcIixcbiAgICAgIGluZ3JlZGllbnRzOiBbXCJUb21hdG8gU2F1Y2VcIiwgXCJNb3p6YXJlbGxhIENoZWVzZVwiLCBcIlBlcHBlcm9uaVwiLCBcIlNhdXNhZ2VcIiwgXCJCZWxsIFBlcHBlcnNcIiwgXCJPbmlvbnNcIl0sXG4gICAgICBwcmljZTogMTMuOTksICAgICAgXG4gICAgfSxcbiAgXTtcblxuZnVuY3Rpb24gcG9wdWxhdGVNZW51KGFwcGVuZCkge1xuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYm94LnNldEF0dHJpYnV0ZSgnaWQnLCAnYm94Jyk7XG4gICAgcGl6emFzLmZvckVhY2goKHBpenphLCBpKSA9PiB7XG4gICAgY29uc3QgcGl6emFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgXG4gICAgXG4gICAgZm9yIChsZXQga2V5IGluIHBpenphKSB7XG4gICAgIFxuICAgICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBsZXQgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpOyAgICAgIFxuICAgICAgcGFyYS50ZXh0Q29udGVudCA9IHBpenphW2tleV1cbiAgICAgIHBpenphRGl2LmFwcGVuZChwYXJhLCBiciwpICAgICAgXG4gICAgICAgIFxuICAgICAgfVxuICAgIFxuICAgIGJveC5hcHBlbmQocGl6emFEaXYpOyAgICBcbiAgICB9KVxuICAgIGFwcGVuZC5hcHBlbmQoYm94KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBwb3B1bGF0ZU1lbnUiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=