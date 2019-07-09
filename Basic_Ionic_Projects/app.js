const reason = document.querySelector('#exp_reason');
const amount = document.querySelector('#exp_amt');
const clear = document.querySelector('#btn_clear');
const add = document.querySelector('#btn_add');
const expenselist = document.querySelector('#expenselist');
const total_expenses = document.querySelector('#total_expenses');
const alert_controller = document.querySelector('ion-alert-controller');

let total = 0;

const Clear = () => {
    reason.value = '';
    amount.value = '';
}

add.addEventListener('click', () => {
    const entered_reason = reason.value;
    const entered_amount = amount.value;

    if(entered_reason.trim().length <= 0 || entered_amount.trim().length <= 0 ||
    entered_amount <= 0){
    alert_controller.create({message: 'Please Enter Valid Reason & Amount',
        header: 'Invalid inputs',
        buttons: ['Okay']
    }).then(alertElement => {alertElement.present();});
        return;
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = entered_reason + ": $" + entered_amount;
    
    total += +entered_amount;ion-alert-controller
    total_expenses.textContent = total;
    
    expenselist.appendChild(newItem);
    Clear();
});

clear.addEventListener('click', () => {
    Clear();
});