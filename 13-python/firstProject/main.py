#mini madlib game with python

print("Welcome to Mad Libs! Fill in the blanks below:")

# Take user inputs
name = input("Enter a name: ")
place = input("Enter a place: ")
animal = input("Enter an animal: ")
verb = input("Enter a verb (past tense): ")
adjective = input("Enter an adjective: ")
food = input("Enter your favorite food: ")

# The funny story
story = f"""
Once upon a time, {name} went to {place} with a pet {animal}.
They {verb} all day long and felt very {adjective}.
At the end of the day, they ate some delicious {food} and lived happily ever after!
"""

print("\nHere's your Mad Lib story:\n")
print(story)
