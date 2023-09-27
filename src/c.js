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

export default populateContact