recomendations = [
    {
        "rank": 7,
        "title": "Roth IRA",
        "description": "A Roth IRA is a retirement account that allows your money to grow tax-free.",
        "link": "https://www.irs.gov/retirement-plans/roth-iras"
    },
    {
        "rank": 5,
        "title": "Traditional IRA",
        "description": "A traditional IRA is a retirement account that allows your money to grow tax-deferred.",
        "link": "https://www.irs.gov/retirement-plans/traditional-and-roth-iras"
    },
    {
        "rank": 6,
        "title": "401(k)",
        "description": "A 401(k) is a retirement account that allows your money to grow tax-free.",
        "link": "https://www.irs.gov/retirement-plans/401k-plans"
    },
    {
        "rank": 1,
        "title": "403(b)",
        "description": "A 403(b) is a retirement account that allows your money to grow tax-free.",
        "link": "https://www.irs.gov/retirement-plans/403b-plans"
    },
    {
        "rank": 2,
        "title": "457(b)",
        "description": "A 457(b) is a retirement account that allows your money to grow tax-free.",
        "link": "https://www.irs.gov/retirement-plans/457b-plans"
    },
    {
        "rank": 3,
        "title": "HSA",
        "description": "A Health Savings Account (HSA) is a tax-advantaged account that allows you to save for medical expenses.",
        "link": "https://www.irs.gov/publications/p969"
    },
    {
        "rank": 4,
        "title": "Brokerage Account",
        "description": "A brokerage account is an investment account that allows you to buy and sell stocks, bonds, and other securities.",
        "link": "https://www.investopedia.com/terms/b/brokerageaccount.asp"
    }
]

# print(recomendations[0]["title"])
# print(recomendations[1]["description"])
# print(recomendations[4]["link"])

groups = {
    "emergencyFund": [ # group 1 name
        {
            "title": "Emergency Fund", # item 1 in group title
            "description": "An emergency fund is a savings account that is set aside for unexpected expenses, such as medical bills, car repairs, or job loss.",
            "link": "https://www.investopedia.com/terms/e/emergency_fund.asp"
        }
    ],
    "retirementFund": [ # group 2 name
        {
            "title": "Retirement Fund", # item 1 in group title
            "description": "A retirement fund is a savings account that is set aside for retirement.",
            "link": "https://www.investopedia.com/terms/r/retirementfund.asp"
        },
        {
            "title": "Roth IRA", # item 2 in group title
            "description": "A Roth IRA is a retirement account that allows your money to grow tax-free.",
            "link": "https://www.irs.gov/retirement-plans/roth-iras"
        }
    ]
}

print(groups["emergencyFund"][0]["title"])
print(groups["retirementFund"][1]["description"])