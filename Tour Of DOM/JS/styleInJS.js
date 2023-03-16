const sections = document.querySelectorAll('section');
for (const  section of sections){
    section.style.border = '2px solid blue' ;

    section.style.marginTop = '15px';

    section.style.borderRadius='5px';
    section.style.paddingLeft='10px';
    section.style.textAlign='center';
    section.style.width='50%';
    section.style.backgroundColor= 'grey';
}

const placesContainer = document.getElementById('places-container');

placesContainer.style.backgroundColor='green';