import json
import recWeights
with open('exampleInput.json', 'r') as f:
    data = json.load(f)

input = recWeights.weight(data)
recWeights.generate_output(input[0],input[1],input[2],input[3],input[4],input[5],input[6],input[7],input[8],input[9])