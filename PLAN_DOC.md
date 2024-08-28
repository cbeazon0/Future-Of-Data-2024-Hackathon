# Plan Document
Backend logic planning

## Inputs

Personal Information
- Age
- Income/Employment status
- Expenses
  - Housing
  - Food
  - Insurance
  - etc
 - Goals
 - Credit score
 - Filing status
 - Budget?
 - Veteran?
 - Student? (or plan to be soon)

Debt

 - Debt + interest rate
   - Mortgage
   - Credit Card
   - Auto loans
   - Student loans
   - etc

Investments

- Investments/Savings
  - Savings
    - CD
    - High Yield
  - Retirement
    - IRA
    - 401k/403b/457b
  - Non-retirement
    - HSA
    - Brokerage


## Output
- Budget
- Emergency fund (3-6 months)
- Debt payoff strategies
  - Snowball
  - Avalache
- Credit improvement
- Welfare
  - Food stamps
- Investments/Savings
  - Savings
    - CD
    - High Yield
  - Retirement
    - IRA
    - 401k/403b/457b
  - Non-retirement
    - HSA
    - Brokerage


## Basic Logic

* Base the emergency fund off the estimated expenses.  
* If CC_debt == true -> pay off CC debt before investing regardless of rate
* 