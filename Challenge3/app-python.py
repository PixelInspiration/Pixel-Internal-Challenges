import json

with open('maze1.json') as json_data:
	maze = json.load(json_data)
	print( maze )