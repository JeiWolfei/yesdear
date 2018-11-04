
let fruits =  [
    {


    }

];




const fruitsApi = {
    getAll() {
        const json = localStorge.getItem('fruits';
        if(json) {
            fruits = JSON.parse(json);
        }
        return fruits;
    }
    add(fruit) {
        // add to array
        fruits.push(fruit);
        //save array to local storage
        saveFruits();
    }
    remove(fruit) {
        
    }

}