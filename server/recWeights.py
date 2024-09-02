# class FinancialProfile(UserInfo):
#     def __init__(self, **kwargs):
#         super().__init__(**kwargs)
#         self.monthly_income = kwargs.get("monthly_income", 0)
#         self.monthly_expenses = kwargs.get("monthly_expenses", 0)
#         self.total_savings = kwargs.get("total_savings", 0)
#         self.total_debt = kwargs.get("total_debt", 0)
#         self.has_budget = kwargs.get("has_budget", False)
#         self.housing_expense = kwargs.get("housing_expense", 0)
#         self.groceries_expense = kwargs.get("groceries_expense", 0)
#         self.diningout_expense = kwargs.get("diningout_expense", 0)
#         self.healthcare_expense = kwargs.get("healthcare_expense", 0)
#         self.transportation_expense = kwargs.get("transportation_expense", 0)
#         self.personal_insurance_expense = kwargs.get("personal_insurance_expense", 0)
#         self.credit_score = kwargs.get("credit_score", 0)
#         self.credit_card = kwargs.get("credit_card", 0)
#         self.credit_card_interest = kwargs.get("credit_card_interest", 0)
#         self.medical_debt = kwargs.get("medical_debt", 0)
#         self.medical_debt_interest = kwargs.get("medical_debt_interest", 0)
#         self.student_loans = kwargs.get("student_loans", 0)
#         self.student_loans_interest = kwargs.get("student_loans_interest", 0)
#         self.other_debts = kwargs.get("other_debts", 0)
#         self.other_debts_interest = kwargs.get("other_debts_interest", 0)
#         self.mortgage = kwargs.get("mortgage", 0)
#         self.mortgage_interest = kwargs.get("mortgage_interest", 0)
#         self.auto_loans = kwargs.get("auto_loans", 0)
#         self.auto_loans_interest = kwargs.get("auto_loans_interest", 0)
#         self.student_loans = kwargs.get("student_loans", 0)
#         self.student_loans_interest = kwargs.get("student_loans_interest", 0)
#         self.savings = kwargs.get("savings", 0)
#         self.cd = kwargs.get("cd", 0)
#         self.high_yield_savings = kwargs.get("high_yield_savings", 0)

# # Example Usage:
# financial_profile = FinancialProfile(
#     # Personal Information
#     age=30,
#     filing_status="Single",
#     veteran=False,
#     student=False,
#     disabled=False,
#     dependent=False,
#     number_of_dependents=0,
#     employment_status="Employed",

#     # Base Form Info
#     monthly_income=60000,
#     monthly_expenses=30000,
#     total_savings=10000,
#     total_debt=5000,

#     # Budgets
#     has_budget=False,
#     housing_expense=1500,
#     groceries_expense=500,
#     diningout_expense=300,
#     healthcare_expense=200,
#     transportation_expense=300,
#     personal_insurance_expense=200,

#     # Debt Info
#     credit_score=700,
#     credit_card=5000,
#     credit_card_interest=18.0,
#     medical_debt=1000,
#     medical_debt_interest=5.0,
#     student_loans=25000,
#     student_loans_interest=4.5,
#     other_debts=1000
#     other_debts_interest=5.0,

#     # Investments/Retirement Info
#     mortgage=200000,
#     mortgage_interest=3.5,

#     auto_loans=15000,
#     auto_loans_interest=5.0,

#     student_loans=25000,
#     student_loans_interest=4.5,

#     savings=10000,
#     cd=5000,
#     high_yield_savings=2000,
#     ira=6000,
#     retirement_401k=20000,
#     retirement_403b=10000,
#     retirement_457b=8000,
#     hsa=3000,
#     brokerage=15000

#     # Services Info
#     using_veteran_services=False,
#     using_disabled_services=False,
#     using_income_services=False,
# )

# financial_profile.display_financial_profile()

import json
with open('exampleInput.json', 'r') as f:
    data = json.load(f)

#print(data["data"]["debt"]["medical"]["amount"])
def weight(data):
    budget1weight = 0 # 50/30/20 - catchall for budgeting
    budget2weight = 0 # significant debt
    budget3weight = 0 # decent income/expenses - older age - retirement oriented
    debt1weight = 0 # 4x poverty line or worse - debt > 5% annual income - high priority for medical debt
    debt2weight = 0 # must have student loan debt - loan should have worsened - income < 50k
    debt3weight = 0 # must have student loan debt - loan has not worsened - income > 50k
    debt4weight = 0 # must have credit card debt - catchall for credit card debt
    debt5weight = 0 # for signigicant credit card debt, or any other mild form of debt - catchall for any debt
    debt6weight = 0 # educational for any debt type - those with debt < 5% annual income should have this in their list
    debt7weight = 0 # educational for any debt type - those with debt > 5% annual income should have this in their list

    income = data["data"]["base"]["income"]
    expenses = data["data"]["base"]["expenses"]
    savings = data["data"]["base"]["savings"]
    debt = data["data"]["base"]["debt"]
    age = data["data"]["personal"]["age"]
    dependents = data["data"]["personal"]["dependents"]
    housing = data["data"]["budget"]["housing"]
    groceries = data["data"]["budget"]["groceries"]
    eatOut = data["data"]["budget"]["eatOut"]
    entertainment = data["data"]["budget"]["entertainment"]
    transportation = data["data"]["budget"]["transportation"]
    healthCare = data["data"]["budget"]["healthCare"]
    insurance = data["data"]["budget"]["insurance"]
    otherNeeds = data["data"]["budget"]["otherNeeds"]
    debt_medical_amount = data["data"]["debt"]["medical"]["amount"]
    debt_medical_rate = data["data"]["debt"]["medical"]["rate"]
    debt_student_amount = data["data"]["debt"]["student"]["amount"]
    debt_student_rate = data["data"]["debt"]["student"]["rate"]
    debt_credit_amount = data["data"]["debt"]["credit"]["amount"]
    debt_credit_rate = data["data"]["debt"]["credit"]["rate"]
    debt_other_amount = data["data"]["debt"]["other"]["amount"]
    debt_other_rate = data["data"]["debt"]["other"]["rate"]

    takeHome = income - expenses
    debtTotal = debt_medical_amount + debt_student_amount + debt_credit_amount + debt_other_amount
    growthfactor = income/(dependents+1)/expenses
    povertyLine = 15000 #approx

    if debtTotal > income*0.05/(dependents+1):
        budget1weight += 1
        budget2weight += 3
        budget3weight += 0
        debt1weight += 0
        debt2weight += 0
        debt3weight += 0
        debt4weight += 0
        debt5weight += 1
        debt6weight += 0
        debt7weight += 1
    if debtTotal > income*0.15/(dependents+1):
        budget1weight += 0
        budget2weight += 2
        budget3weight += 0
        debt1weight += 0
        debt2weight += 0
        debt3weight += 0
        debt4weight += 0
        debt5weight += 1
        debt6weight += 0
        debt7weight += 2
    if debt_medical_amount > income*0.05 and income*12 < 4*povertyLine:
        budget1weight += 2
        budget2weight += 4
        budget3weight += 0
        debt1weight += 6
        debt2weight += 0
        debt3weight += 0
        debt4weight += 0
        debt5weight += 2
        debt6weight += 0
        debt7weight += 1
    if growthfactor >= 1.25 and savings >= income*12 and debtTotal < income:
        budget1weight += 1
        budget2weight += 0
        budget3weight += 6
        debt1weight += 0
        debt2weight += 0
        debt3weight += 0
        debt4weight += 0
        debt5weight += 0
        debt6weight += 0
        debt7weight += 0
    if debt_student_amount > income*6 and growthfactor < 1.25:
        budget1weight += 0
        budget2weight += 1
        budget3weight += 0
        debt1weight += 0
        debt2weight += 4
        debt3weight += 2
        debt4weight += 0
        debt5weight += 1
        debt6weight += 0
        debt7weight += 1
    if debt_student_amount < income*6 and growthfactor > 1.15:
        budget1weight += 1
        budget2weight += 0
        budget3weight += 1
        debt1weight += 0
        debt2weight += 2
        debt3weight += 4
        debt4weight += 0
        debt5weight += 1
        debt6weight += 1
        debt7weight += 1

    #conditions that 0 out weights
    if debtTotal == 0:
        budget1weight += 1
        budget2weight = 0
        budget3weight += 3
        debt1weight = 0
        debt2weight = 0
        debt3weight = 0
        debt4weight = 0
        debt5weight = 0
        debt6weight = 0
        debt7weight = 0
        
    
    