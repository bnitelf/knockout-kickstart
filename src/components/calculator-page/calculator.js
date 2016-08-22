import ko from 'knockout';
import calculatorTemplate from 'text!./calculator.html';

/**
 * View Model for Calculator screen, handle TODO application.
 * 
 * @class CalculatorViewModel
 */
class CalculatorViewModel {
    
    /**
     * Creates an instance of CalculatorViewModel.
     * 
     * @param {any} route
     */
    constructor(route) {
        this.num1 = ko.observable();
        this.num2 = ko.observable();
        this.result = ko.observable();
    }

    calculate() {
        var result = parseFloat(this.num1()) + parseFloat(this.num2());
        this.result("Result is : " + result);
        //debugger;
    }
}


export default { viewModel: CalculatorViewModel, template: calculatorTemplate };