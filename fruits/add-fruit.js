

// passed data or callback function
// set up event listeners

init(onAdd)






            FormData.addEventListener('submit', function(event) {
            //prevent for from reloading
            event.preventDefault();

            //form elements
            const elements = form.elements;

            //get the values from the form controls
            const fruit = {
                name: lemenets.name.value, 
                color: elements.color.value,
                image: elements.image.value,
            };

            onAdd(fruit);

            form.reset();
            document.activeElement.blur()



}
