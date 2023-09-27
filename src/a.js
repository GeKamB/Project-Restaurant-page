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



export default populateIndexPage;

