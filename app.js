const menuToggle = document.querySelector('.burger')
const dropdown = document.querySelector('.list1')
                                         
   menuToggle.addEventListener('click', () =>{
    menuToggle.classList.toggle('active')
    dropdown.classList.toggle('active')
    
    })
    
