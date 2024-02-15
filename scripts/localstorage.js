const saveToLocalStorage = (item) => {
    // favoites will get the current values in local storage
    // AKA saves the array in favorites
    let favorites = getLocalStorage();

        favorites.push(item);

    // JSON.stringify this ensures whatever we saved into local storage is a string
    localStorage.setItem("Expenses", JSON.stringify(favorites));

}

const saveLocalStorageBudget = (budget) => {
    localStorage.setItem("Budget", JSON.stringify(budget));
}

const getLocalStorageBudget = () => {

    // getting our values from local storage
    let localStorageData = localStorage.getItem("Budget");

    // we check if that data is null if so we return an empty array
    if(localStorageData == null){
        return 0;
    }

    // we return an array of local storage;
    return JSON.parse(localStorageData);
    
}

const getLocalStorage = () => {
    // getting our values from local storage
    let localStorageData = localStorage.getItem("Expenses");

    // we check if that data is null if so we return an empty array
    if(localStorageData == null){
        return [];
    }

    // we return an array of local storage;
    return JSON.parse(localStorageData);

}

const removeFromLocalStorage = (digimon) => {
    // We're saving local storage data into favorites variable
    let favorites = getLocalStorage();

    // we're finding the index of our parameter (digimon)
    let namedIndex = favorites.indexOf(digimon);

    // remove the name from the array using the .splice method
    favorites.splice(namedIndex, 1);

    // we set our new mutate favorites array inside our local storage
    localStorage.setItem("Expenses", JSON.stringify(favorites));

}

export {saveToLocalStorage, getLocalStorage, removeFromLocalStorage, saveLocalStorageBudget, getLocalStorageBudget}