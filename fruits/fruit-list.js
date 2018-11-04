

function makeFruit(fruit) {
    const html = /*html*/
        <li class="fruit">
            <h3> class="name" style="background: ${fruit.color};">
                ${fruit.name}
            </h3>
            img src=
         
        
        </li>
    ';



}



const list = document.getElementById('fruits');


const fruitList = {
    //init
    //should include:
    // initial fruits array
    //onRemove callback

    init(fruits, onRemove) {
        for(let i = 0; i < fruits.length; i++)  {
            fruitList.add(fruits[i]);

        }
        //loop thru fruits


    }



    addEventListener(fruit) {
        const removeButton = dom.querySelector('button');

        removeButton.addEventListener('click',funticon)
    }
}




 console.log(fruit);