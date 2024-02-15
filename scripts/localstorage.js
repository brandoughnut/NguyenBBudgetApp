const saveToLocalStorage = (item) => {

    let favorites = getLocalStorage();

        favorites.push(item);

    localStorage.setItem("Expenses", JSON.stringify(favorites));

}

const saveLocalStorageBudget = (budget) => {
    localStorage.setItem("Budget", JSON.stringify(budget));
}

const getLocalStorageBudget = () => {

    let localStorageData = localStorage.getItem("Budget");

    if(localStorageData == null){
        return 0;
    }

    return JSON.parse(localStorageData);
    
}

const getLocalStorage = () => {

    let localStorageData = localStorage.getItem("Expenses");

    if(localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);

}

const removeFromLocalStorage = (digimon) => {

    let favorites = getLocalStorage();

    let namedIndex = favorites.indexOf(digimon);

    favorites.splice(namedIndex, 1);

    localStorage.setItem("Expenses", JSON.stringify(favorites));

}

export {saveToLocalStorage, getLocalStorage, removeFromLocalStorage, saveLocalStorageBudget, getLocalStorageBudget}