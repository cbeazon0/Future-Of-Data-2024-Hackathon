import json

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

    #making denominators nonzero
    if expenses == 0 or expenses == -1:
        expenses = 1
    if dependents == -1:
        dependents = 0
    if income == 0 or income == -1:
        income = 1
    

    takeHome = income - expenses
    debtTotal = debt_medical_amount + debt_student_amount + debt_credit_amount + debt_other_amount
    growthfactor = income/(dependents+1)/expenses
    povertyLine = 15000 #approx


    budget1weight = 0
    budget2weight = 0
    budget3weight = 0
    debt1weight = 0
    debt2weight = 0
    debt3weight = 0
    debt4weight = 0
    debt5weight = 0
    debt6weight = 0
    debt7weight = 0

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
    if debt_credit_amount > income*0.05:
        budget1weight += 1
        budget2weight += 2
        budget3weight += 0
        debt1weight += 0
        debt2weight += 0
        debt3weight += 0
        debt4weight += 3
        debt5weight += 1
        debt6weight += 1
        debt7weight += 0
    if growthfactor < 1 and savings < income*12:
        budget1weight += 2
        budget2weight += 0
        budget3weight += 0
        debt1weight += 0
        debt2weight += 0
        debt3weight += 0
        debt4weight += 0
        debt5weight += 0
        debt6weight += 0
        debt7weight += 0
    if savings > income*12 and growthfactor > 1:
        budget1weight += 0
        budget2weight += 0
        budget3weight += 2
        debt1weight += 0
        debt2weight += 0
        debt3weight += 0
        debt4weight += 0
        debt5weight += 0
        debt6weight += 0
        debt7weight += 0

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
    
    input = [budget1weight, budget2weight, budget3weight, debt1weight, debt2weight, debt3weight, debt4weight, debt5weight, debt6weight, debt7weight]
    return input

def generate_output(
    budget1weight,
    budget2weight,
    budget3weight,
    debt1weight,
    debt2weight,
    debt3weight,
    debt4weight,
    debt5weight,
    debt6weight,
    debt7weight
):
    recommendations = {
        "recommendations": {
            "Budget": {
                "title": "Budget",
                "shortDescription": "Here's what we found for you...",
                "resources": {
                    "1": {
                        "title": "The 50/30/20 Plan",
                        "description": (
                            "The 50/30/20 rule offers a straightforward approach to budgeting by dividing your after-tax income into three categories: "
                            "50% for essential needs like housing, utilities, and groceries, 30% for discretionary spending on things you enjoy, such as dining out or hobbies, "
                            "and 20% towards savings and debt repayment. By adhering to this balanced budget, you can ensure that you cover necessary expenses, "
                            "enjoy your life, and still make progress on your financial goals. Learn more about how to apply this method with NerdWallet's calculator."
                        ),
                        "link": "https://www.nerdwallet.com/article/finance/nerdwallet-budget-calculator",
                        "logic": "budgetFunc1",
                        "weight": budget1weight
                    },
                    "2": {
                        "title": "Create a budget to pay off debt",
                        "description": (
                            "If you are carrying significant debt, it's crucial to have a strategic plan to pay it off. "
                            "Explore budgeting techniques such as the snowball method, which prioritizes paying off the smallest debts first to build momentum, "
                            "or the avalanche method, which focuses on paying off debts with the highest interest rates to save money over time. "
                            "You can also adapt the 50/30/20 rule by dedicating more than 20%% of your income towards debt repayment. "
                            "This guide provides insights into these methods and how to tailor a budget that fits your specific debt situation."
                        ),
                        "link": "https://www.lendingtree.com/personal/budget-to-pay-off-debt/",
                        "logic": "budgetFunc2",
                        "weight": budget2weight
                    },
                    "3": {
                        "title": "Looking to retire?",
                        "description": (
                            "Retirement planning requires careful budgeting to ensure you have enough saved to enjoy your golden years. "
                            "The zero-based budgeting method helps you allocate every dollar of your income to a specific expense, savings goal, or debt repayment, "
                            "ensuring that your income minus expenses equals zero. This method forces you to be intentional about every spending decision, "
                            "making it an effective tool for maximizing savings and planning for retirement. Discover more about how to implement zero-based budgeting and set yourself up for a secure retirement."
                        ),
                        "link": "https://www.ramseysolutions.com/budgeting/how-to-make-a-zero-based-budget",
                        "logic": "budgetFunc3",
                        "weight": budget3weight
                    }
                }
            },
            "Debt": {
                "title": "Debt",
                "shortDescription": "Here's what we found for you...",
                "resources": {
                    "1": {
                        "title": "Paying off your medical debt",
                        "description": (
                            "Medical debt can be a significant burden, especially if unexpected health issues arise. "
                            "Organizations like UNDUE Medical Debt provide assistance to individuals who are struggling to manage their medical bills. "
                            "By accessing these resources, you may find options for debt relief, forgiveness programs, or restructuring that can help reduce your financial stress. "
                            "Explore UNDUE's resources to see if you qualify for support and to understand how to navigate medical debt relief."
                        ),
                        "link": "https://www.unduemedicaldebt.org/medical-debt-resources/",
                        "logic": "debtFunction1",
                        "weight": debt1weight
                    },
                    "2": {
                        "title": "Paying off your student loans with loan forgiveness programs",
                        "description": (
                            "Student loans can be overwhelming, but there are federal loan forgiveness programs that might help reduce or even eliminate your debt. "
                            "Depending on your career path, income level, and repayment history, you could qualify for programs such as Public Service Loan Forgiveness (PSLF) or income-driven repayment plan forgiveness. "
                            "These options can significantly lower your monthly payments or forgive your remaining balance after a set number of years. "
                            "Visit the Department of Education's website to learn about the specific qualifications and how to apply for these relief options."
                        ),
                        "link": "https://studentaid.gov/manage-loans/forgiveness-cancellation/debt-relief-info",
                        "logic": "debtFunction2",
                        "weight": debt2weight
                    },
                    "3": {
                        "title": "Paying off your student loans with Income-Driven Repayment",
                        "description": (
                            "If you don't qualify for loan forgiveness, or need a more manageable payment plan, an income-driven repayment (IDR) plan might be right for you. "
                            "IDR plans adjust your monthly student loan payments based on your income and family size, ensuring that payments remain affordable. "
                            "After a certain number of years of qualifying payments, any remaining loan balance may be forgiven. "
                            "Learn how IDR plans work, how they can reduce your payment burden, and how to apply on the Federal Student Aid website."
                        ),
                        "link": "https://studentaid.gov/manage-loans/repayment/plans/income-driven",
                        "logic": "debtFunction3",
                        "weight": debt3weight
                    },
                    "4": {
                        "title": "Paying off your credit card debt",
                        "description": (
                            "Credit card debt can quickly become unmanageable due to high-interest rates. "
                            "Debt relief programs, such as those offered by Accredited Debt Relief, can help you consolidate your credit card debt, "
                            "potentially lowering your interest rates and monthly payments. These programs can provide a structured plan to pay off your debt faster, "
                            "reduce your financial stress, and avoid the pitfalls of high-interest payments. Find out more about how Accredited Debt Relief works and if it's a good fit for your situation."
                        ),
                        "link": "https://www.accrediteddebtrelief.com/free-quote/ocp/aff/questionnaire/debt_amount/?affiliate_id=152&campaign_id=2717&click_id=cr5r41t296uce9m01p5g&offer_id=13&request_id=2-cr5r41t296uce9m01p70&subid1=b775de06fb5e44c7844f801ccb908673&subid2=&subid3=&subid4=&subid5=2717&utm_campaign=14-2717&utm_medium=affiliate&utm_source=152#debt_amount",
                        "logic": "debtFunction4",
                        "weight": debt4weight
                    },
                    "5": {
                        "title": "Paying off your debt",
                        "description": (
                            "Whether you have medical, credit card, or other forms of personal debt, a debt relief program might be a viable option for you. "
                            "National Debt Relief specializes in consolidating debts, which can help you manage and reduce your monthly payments. "
                            "This approach can simplify your finances by combining multiple payments into one and potentially lowering your overall interest rates. "
                            "Learn more about how National Debt Relief works, the types of debt it covers, and how it can help you regain control of your financial life."
                        ),
                        "link": "https://www.nationaldebtrelief.com/apply/",
                        "logic": "debtFunction5",
                        "weight": debt5weight
                    },
                    "6": {
                        "title": "Understanding your debt",
                        "description": (
                            "Before choosing a debt relief method, it's essential to understand the nature of your debt and the available options. "
                            "Resources like NerdWallet offer comprehensive guides on debt management, covering various strategies such as debt consolidation, credit counseling, and debt settlement. "
                            "It's also crucial to be aware of potential scams and predatory practices in the debt relief industry. "
                            "By educating yourself, you can make informed decisions that are best for your financial health. Check out NerdWallet's resources to get started."
                        ),
                        "link": "https://www.nerdwallet.com/article/finance/find-debt-relief",
                        "logic": "debtFunction6",
                        "weight": debt6weight
                    },
                    "7": {
                        "title": "Credit Card debt is stressful, talk to a professional",
                        "description": (
                            "Credit card debt can be stressful, and managing it alone may seem overwhelming. "
                            "Speaking with a certified credit counselor can provide you with the guidance you need. "
                            "A professional can help you create a budget, understand your financial options, negotiate with creditors, and connect you with educational resources. "
                            "Ensure you choose a reputable credit counseling service that is transparent about fees and has proper licensing. Learn more about finding trustworthy credit counseling services."
                        ),
                        "link": "https://consumer.ftc.gov/articles/how-get-out-debt#Credit%20Counseling",
                        "logic": "debtFunction7",
                        "weight": debt7weight
                    }
                }
            }
        }
    }
    
    file_path = 'output.json'
    with open(file_path, 'w') as json_output:
        json.dump(recommendations, json_output, indent=4)

# Example usage
test_data = {
    "data": {
        "base": {
            "income": 5000,
            "expenses": 2500,
            "savings": 10000,
            "debt": 32000
        },
        "personal": {
            "age": 30,
            "dependents": 0
        },
        "budget": {
            "housing": 1500,
            "groceries": 500,
            "eatOut": 300,
            "entertainment": 200,
            "transportation": 300,
            "healthCare": 200,
            "insurance": 200,
            "otherNeeds": 200
        },
        "debt": {
            "medical": {
                "amount": 1000,
                "rate": 5.0
            },
            "student": {
                "amount": 25000,
                "rate": 4.5
            },
            "credit": {
                "amount": 5000,
                "rate": 18.0
            },
            "other": {
                "amount": 1000,
                "rate": 5.0
            }
        }
    }
}

# with open('exampleInput.json', 'r') as f:
#     data = json.load(f)
test_input = weight(test_data)
print(generate_output(test_input[0], test_input[1], test_input[2], test_input[3], test_input[4], test_input[5], test_input[6], test_input[7], test_input[8], test_input[9]))