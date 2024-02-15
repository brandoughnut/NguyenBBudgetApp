import {saveToLocalStorage, getLocalStorage, removeFromLocalStorage, saveLocalStorageBudget, getLocalStorageBudget} from "./localstorage.js";

let totalBudget = document.getElementById("totalBudget");
let inputBudget = document.getElementById("inputBudget");
let saveBudget = document.getElementById("saveBudget");
let injectHere1 = document.getElementById("injectHere1");
let expenseName = document.getElementById("expenseName");
let expenseValue = document.getElementById("expenseValue");
let addExpense = document.getElementById("addExpense");
let injectHere2 = document.getElementById("injectHere2");
let totalBudget1 = document.getElementById("totalBudget1");

let newBudget = 0;

saveBudget.addEventListener('click', () => {
    if(inputBudget.value%1 != 0){
        totalBudget.textContent = `${Math.round(inputBudget.value*100)/100}`;
        totalBudget1.textContent = `${Math.round(inputBudget.value*100)/100}`;
    }else{
        totalBudget.textContent = `${inputBudget.value}.00`;
        totalBudget1.textContent = `${inputBudget.value}.00`;
    }    
    newBudget = Math.round(inputBudget.value*100)/100;
    saveLocalStorageBudget(newBudget);
    onLoad();
    creatingElements();

    inputBudget.value = "";
});


addExpense.addEventListener('click', () => {

    let name = expenseName.value;
    let expense = expenseValue.value;

    if(name != "" && expense > -1){
        let myObject = {Name: name, Value: expense}
        saveToLocalStorage(myObject);
        creatingElements();
        updateBudget();
    }
    
    expenseName.value = "";
    expenseValue.value = "";

});

const creatingElements = () => {

    injectHere1.textContent = "";
    injectHere2.textContent = "";
    let expenseArr = getLocalStorage();

    expenseArr.map((elements) => {
        let p1 = document.createElement('p');
        p1.textContent = elements.Name;
    
        let p2 = document.createElement('p');
        p2.textContent = `-${elements.Value}`;
    
        let firstDiv = document.createElement('div');
        firstDiv.className = "d-flex justify-content-between";
    
        firstDiv.appendChild(p1);
        firstDiv.appendChild(p2);
    
        let button = document.createElement('button');
        button.textContent = "Remove";
        button.className = "btn btn-warning";
        button.style.width = "100%";
    
        button.addEventListener('click', () => {
            outerDiv.remove();
            outerDivv.remove();
            removeFromLocalStorage(elements);
            updateBudget();
        });
    
        let secondDiv = document.createElement('div');
    
        secondDiv.appendChild(button);
    
        let outerDiv = document.createElement('div');
    
        outerDiv.appendChild(firstDiv);
        outerDiv.appendChild(secondDiv);
    
        injectHere1.appendChild(outerDiv);
    
        let hr = document.createElement('hr');
    
        let pe1 = document.createElement('p');
        pe1.textContent = elements.Name;
        
        let pe2 = document.createElement('p');
        pe2.textContent = `-${elements.Value}`;
    
        let middleDivv = document.createElement('div');
        middleDivv.className = "col d-flex justify-content-between mx-5";
    
        middleDivv.appendChild(pe1);
        middleDivv.appendChild(pe2);
    
        let outerDivv = document.createElement('div');
    
        outerDivv.appendChild(hr);
        outerDivv.appendChild(middleDivv);
    
        injectHere2.appendChild(outerDivv);

    })

}

const updateBudget = () => {
    let expenseArr = getLocalStorage();
    let budget = getLocalStorageBudget();

    expenseArr.map((number) => {
        budget -= number.Value;
    });

    if(budget%1 != 0){
        totalBudget.textContent = Math.round(budget*100)/100;
        totalBudget1.textContent = Math.round(budget*100)/100;
    }else{
        totalBudget.textContent = `${budget}.00`;
        totalBudget1.textContent = `${budget}.00`;
    }

}

const onLoad = () => {
    creatingElements();
    updateBudget();
}

onLoad();