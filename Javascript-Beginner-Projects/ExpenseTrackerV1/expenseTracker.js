// Expenses Tracking

const expensesList = document.getElementById("expensesList");
const expenseName = document.getElementById("expenseText");
const expenseAmount = document.getElementById("amount");
const mainBtn = document.getElementById("mainBtn");
const totalAmount = document.getElementById("totalAmount");
// States
let expenses = [];
let isEditingId = null;
// Checking the data in local Storage 
const storedData  = localStorage.getItem("items");
if(storedData){
    expenses = JSON.parse(storedData)
    renderExpenses();
}

// Main Button
 mainBtn.addEventListener("click",()=>{
        const text = expenseName.value.trim();
        const amount = Number(expenseAmount.value);
        if(text === "" || amount <=0){
            alert("Please Enter the valid expense")
            return;
        }
        const expense = {
            "id" : Date.now(),
            "text"  : text,
            "amount" : amount
        }
        if(isEditingId === null){
            // Add mode
            expenses.push(expense);
            const expensesStr = JSON.stringify(expenses);
            localStorage.setItem('items', expensesStr);
        }else{
            // Edit mode
            const existingExpense = expenses.find(item=>item.id === isEditingId);
            existingExpense.text = expenseName.value;
            existingExpense.amount = Number(expenseAmount.value);
            isEditingId = null;
            mainBtn.textContent = "Add";
            const expensesStr = JSON.stringify(expenses);
            localStorage.setItem('items', expensesStr);
        }
        
        renderExpenses();
        expenseName.value = "";
        expenseAmount.value = "";
})

// Function to render tasks

function renderExpenses(){
    expensesList.innerHTML = "";
    let total = 0;
   
    expenses.forEach(expense=>{
        const itemList = document.createElement("li");
        itemList.className = "itemList"
        itemList.textContent = `${expense.text} -   ${expense.amount} sek`;
        // total amount calculation
        total  += Number(expense.amount);
        // Delete
        const deleteItem = document.createElement("button");
        deleteItem.textContent = "Delete";
        deleteItem.className = "deleteBtn";
        deleteItem.addEventListener("click",()=>{
            expenses = expenses.filter(item => item.id != expense.id);
            localStorage.setItem("items",JSON.stringify(expenses));
            renderExpenses();
        })

        // Update
        const updateBtn = document.createElement("button");
        updateBtn.textContent = "Edit"
        updateBtn.className = "editBtn";
        updateBtn.addEventListener("click",()=>{
            expenseName.value = expense.text;
            expenseAmount.value = expense.amount;
            isEditingId = expense.id;
            mainBtn.textContent = "Edit";
           
        })
    
        itemList.appendChild(updateBtn);
        itemList.appendChild(deleteItem);
        expensesList.appendChild(itemList);
        

    })
    totalAmount.textContent = `Total Amount : ${total}`
   
    
   
}


