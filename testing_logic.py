class UserInfo:
    def __init__(self, name, picture_url):
        self.name = name
        self.picture_url = picture_url

    def display_picture(self):
        print(f"User: {self.name}")
        print(f"Picture URL: {self.picture_url}")
        # Placeholder for actual image display logic if needed


class FinancialProfile(UserInfo):
    def __init__(self, name, picture_url, age, income, employment_status, housing_expense, food_expense, 
                 insurance_expense, other_expenses, goals, credit_score, filing_status, budget=None, 
                 veteran=False, student=False, mortgage=0.0, mortgage_interest=0.0, credit_card=0.0, 
                 credit_card_interest=0.0, auto_loans=0.0, auto_loans_interest=0.0, student_loans=0.0, 
                 student_loans_interest=0.0, other_debts={}, savings=0.0, cd=0.0, high_yield_savings=0.0, 
                 ira=0.0, retirement_401k=0.0, retirement_403b=0.0, retirement_457b=0.0, hsa=0.0, 
                 brokerage=0.0):
        super().__init__(name, picture_url)
        
        # Personal Information
        self.age = age
        self.income = income
        self.employment_status = employment_status
        self.expenses = {
            "housing": housing_expense,
            "food": food_expense,
            "insurance": insurance_expense,
            "other": other_expenses
        }
        self.goals = goals
        self.credit_score = credit_score
        self.filing_status = filing_status
        self.budget = budget
        self.veteran = veteran
        self.student = student
        
        # Debt Information
        self.mortgage = {"amount": mortgage, "interest_rate": mortgage_interest}
        self.credit_card = {"amount": credit_card, "interest_rate": credit_card_interest}
        self.auto_loans = {"amount": auto_loans, "interest_rate": auto_loans_interest}
        self.student_loans = {"amount": student_loans, "interest_rate": student_loans_interest}
        self.other_debts = other_debts
        
        # Investments Information
        self.savings = {
            "regular_savings": savings,
            "cd": cd,
            "high_yield": high_yield_savings
        }
        self.retirement = {
            "ira": ira,
            "401k": retirement_401k,
            "403b": retirement_403b,
            "457b": retirement_457b
        }
        self.non_retirement = {
            "hsa": hsa,
            "brokerage": brokerage
        }

    def display_financial_profile(self):
        self.display_picture()
        print("\nPersonal Information:")
        print(f"Age: {self.age}")
        print(f"Income: {self.income}")
        print(f"Employment Status: {self.employment_status}")
        print(f"Expenses: {self.expenses}")
        print(f"Goals: {self.goals}")
        print(f"Credit Score: {self.credit_score}")
        print(f"Filing Status: {self.filing_status}")
        print(f"Budget: {self.budget}")
        print(f"Veteran: {self.veteran}")
        print(f"Student: {self.student}")
        
        print("\nDebt Information:")
        print(f"Mortgage: {self.mortgage}")
        print(f"Credit Card: {self.credit_card}")
        print(f"Auto Loans: {self.auto_loans}")
        print(f"Student Loans: {self.student_loans}")
        print(f"Other Debts: {self.other_debts}")
        
        print("\nInvestments Information:")
        print(f"Savings: {self.savings}")
        print(f"Retirement: {self.retirement}")
        print(f"Non-Retirement: {self.non_retirement}")


# Example Usage:
financial_profile = FinancialProfile(
    name="John Doe",
    picture_url="http://example.com/johndoe.jpg",
    age=30,
    income=60000,
    employment_status="Employed",
    housing_expense=1500,
    food_expense=500,
    insurance_expense=200,
    other_expenses=300,
    goals="Buy a house in 5 years",
    credit_score=700,
    filing_status="Single",
    budget=2000,
    veteran=False,
    student=False,
    mortgage=200000,
    mortgage_interest=3.5,
    credit_card=5000,
    credit_card_interest=18.0,
    auto_loans=15000,
    auto_loans_interest=5.0,
    student_loans=25000,
    student_loans_interest=4.5,
    savings=10000,
    cd=5000,
    high_yield_savings=2000,
    ira=6000,
    retirement_401k=20000,
    retirement_403b=10000,
    retirement_457b=8000,
    hsa=3000,
    brokerage=15000
)

financial_profile.display_financial_profile()
