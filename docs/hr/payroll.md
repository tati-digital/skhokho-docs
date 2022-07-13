# Payroll

## Payroll List Records

![Payroll List Records](/img/payroll_list.png)

HR manager has access to payroll records for the employees under their organisation. From the payroll list page, HR Managers can view a list of records, and run payroll manually. If the organisation has set the payroll date on the [HR Settings](https://skhokho.io/hr/hr-manager-settings) page, the system will execute payroll automatically. If teh date is not set, the HR manager must manually run payroll.

### Payroll Run
When you "run" payroll, the following actions will take place.
* Individual payslips will be created for each employee based on the payroll records that you have entered in their file (salary, deductions, etc.)
* Employee leave credits will be added to their leave accounts, based on the numbers entered in the HR settings page. If no values have been entered, no credit will be granted. For example if an employee had 12 days of personal leave, and your HR settings specify 1,5 monthly leave credit - 1,5 will be added to their available leave days when payroll is run.
* A new company expense will be created under the Accounting App - for expenses. Of you do not have the Accounting app, no further action will be taken.
* Employees will receive an email telling them that their payslips are available and they can download them on their personal page.

::: danger
Before running payroll, ensure that the payroll salary amounts, deductions, tax rates are correct.
:::

## Payroll Detailed Records

The payroll detailed page for a specific employee can be accesses by clicking on the info icon on the far left of the list page. The detailed page will look like:

![Payroll Details](/img/payroll_details.png)

This is where you can set the payroll information for employees.

### Basic Salary Inputs

Start by entering the basic salary of the employee and additional deductions. Additional deduction do not include tax or UIF deductions, these are any extra deductions the company might be making against the employee salary - such as: (1) loan repayments.
Taxes are and UIF are calculated automatically and can be seen on the top right side of the page, under employee package card:

![Employee Cost to Company](/img/total_ctc_package.png)

You can also enter the tax percentage that must be used. The tax percentage will be applied to the basic salary, plus all the taxable benefits:

```
amountTaxed = taxPercent * (basicSalary + taxableBenefit1 + taxableBenefit2 ... taxableBenefits)
```

A default UIF deduction is also included, which you can edit to the correct amount for your business and salary package.

### Salary Benefits
Employee salary benefits are divided in to two - taxable and non-taxable. Taxable benefits include items like: car allowance, while non-taxable benefits include items like: provident fund. Please consult your tax advisor to get these values correct for the payslip.

::: warning
Skhokho is not a financial advisory, HR consulting company or tax consulting firm. We offer a software solution for companies, the onus is on the business to ensure that the tax amounts, and salary classifications are correct.
:::

You can can add a new benefit by clicking the button for new benefit:You will be able to enter the benefit name, amount and specify whether it is taxable or not by clicking on the check-box provided.
