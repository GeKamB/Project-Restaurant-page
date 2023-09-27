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
  !*** ./src/a.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const welcome = 'Welcome to PizzaPalace';
const para = 'Indulge in the world of mouthwatering pizzas that will tantalize your taste buds. Join us for a slice of perfection!'


function populateIndexPage(append, append2) {
    const title = document.createElement('h2');
    title.textContent = welcome;
    title.classList.add('title');

    const paragraph = document.createElement('p');
    paragraph.textContent = para;
    paragraph.classList.add('paragraph');
    
    const wrapper = document.createElement('div');
    wrapper.classList.add('buttonsWrapper');

    append2.append(title, paragraph, wrapper);

    const reservationButton = document.createElement('button');
    reservationButton.textContent = 'Book a table';
    reservationButton.classList.add('bookingButton');
    wrapper.append(reservationButton);
    reservationButton.addEventListener('click', createBookingForm);
    reservationButton.disabled;

    function createBookingForm() {
        reservationButton.disabled = true;
        const bookingForm = document.createElement('div');
        bookingForm.classList.add('bookingForm');
        
    
        const formContent = `
            <h2>Book a Table</h2>
            <form>
                <div class="formI">
                    <label for="guests">Number of Guests:</label>
                    <input type="number" id="guests" name="guests" required>
                </div>
                
                <div class="formI">
                    <label for="date">Date:</label>
                    <input type="date" id="date" name="date" required>
                </div>
    
                <div class="formI">
                    <label for="time">Time:</label>
                    <input type="time" id="time" name="time" required>
                </div>
    
                <button type="submit">Book Now</button>
            </form>
        `;
    
        bookingForm.innerHTML = formContent;
        append2.append(bookingForm);
    
        const form = bookingForm.querySelector('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle form submission (e.g., send reservation data to the server)
            // You can add your booking logic here
            alert('Reservation submitted successfully!');
            bookingForm.remove();
            reservationButton.disabled = false;
        });
    }

    

    
  
    
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateIndexPage);


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLGlFQUFlLGlCQUFpQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9hLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3Qgd2VsY29tZSA9ICdXZWxjb21lIHRvIFBpenphUGFsYWNlJztcbmNvbnN0IHBhcmEgPSAnSW5kdWxnZSBpbiB0aGUgd29ybGQgb2YgbW91dGh3YXRlcmluZyBwaXp6YXMgdGhhdCB3aWxsIHRhbnRhbGl6ZSB5b3VyIHRhc3RlIGJ1ZHMuIEpvaW4gdXMgZm9yIGEgc2xpY2Ugb2YgcGVyZmVjdGlvbiEnXG5cblxuZnVuY3Rpb24gcG9wdWxhdGVJbmRleFBhZ2UoYXBwZW5kLCBhcHBlbmQyKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gd2VsY29tZTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHBhcmE7XG4gICAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoJ3BhcmFncmFwaCcpO1xuICAgIFxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnNXcmFwcGVyJyk7XG5cbiAgICBhcHBlbmQyLmFwcGVuZCh0aXRsZSwgcGFyYWdyYXBoLCB3cmFwcGVyKTtcblxuICAgIGNvbnN0IHJlc2VydmF0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVzZXJ2YXRpb25CdXR0b24udGV4dENvbnRlbnQgPSAnQm9vayBhIHRhYmxlJztcbiAgICByZXNlcnZhdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdib29raW5nQnV0dG9uJyk7XG4gICAgd3JhcHBlci5hcHBlbmQocmVzZXJ2YXRpb25CdXR0b24pO1xuICAgIHJlc2VydmF0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlQm9va2luZ0Zvcm0pO1xuICAgIHJlc2VydmF0aW9uQnV0dG9uLmRpc2FibGVkO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQm9va2luZ0Zvcm0oKSB7XG4gICAgICAgIHJlc2VydmF0aW9uQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgYm9va2luZ0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9va2luZ0Zvcm0uY2xhc3NMaXN0LmFkZCgnYm9va2luZ0Zvcm0nKTtcbiAgICAgICAgXG4gICAgXG4gICAgICAgIGNvbnN0IGZvcm1Db250ZW50ID0gYFxuICAgICAgICAgICAgPGgyPkJvb2sgYSBUYWJsZTwvaDI+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImd1ZXN0c1wiPk51bWJlciBvZiBHdWVzdHM6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cImd1ZXN0c1wiIG5hbWU9XCJndWVzdHNcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIj5EYXRlOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1JXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aW1lXCI+VGltZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRpbWVcIiBpZD1cInRpbWVcIiBuYW1lPVwidGltZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkJvb2sgTm93PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIGA7XG4gICAgXG4gICAgICAgIGJvb2tpbmdGb3JtLmlubmVySFRNTCA9IGZvcm1Db250ZW50O1xuICAgICAgICBhcHBlbmQyLmFwcGVuZChib29raW5nRm9ybSk7XG4gICAgXG4gICAgICAgIGNvbnN0IGZvcm0gPSBib29raW5nRm9ybS5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb24gKGUuZy4sIHNlbmQgcmVzZXJ2YXRpb24gZGF0YSB0byB0aGUgc2VydmVyKVxuICAgICAgICAgICAgLy8gWW91IGNhbiBhZGQgeW91ciBib29raW5nIGxvZ2ljIGhlcmVcbiAgICAgICAgICAgIGFsZXJ0KCdSZXNlcnZhdGlvbiBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5IScpO1xuICAgICAgICAgICAgYm9va2luZ0Zvcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgICByZXNlcnZhdGlvbkJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBcblxuICAgIFxuICBcbiAgICBcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBwb3B1bGF0ZUluZGV4UGFnZTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9