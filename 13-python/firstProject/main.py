print("🧠 Welcome to: TEDxMadScience — 'Inventing the Impossible!'")
print("You're a genius scientist about to reveal your wild invention to the world.\n")

# Inputs
scientist_name = input("What's your mad scientist name? ")
invention_name = input("Name your weird invention: ")
power_source = input("What powers your invention? (e.g. cat hair, lightning, sadness): ")
unexpected_side_effect = input("What side effect does it cause? ")
scientific_term = input("Make up a science-sounding word: ")
animal_part = input("An animal body part: ")
emotion = input("An emotion you felt while building it: ")

# TED Talk story
story = f"""
🎤 LIVE at TEDxMadScience

'{scientist_name}', a revolutionary genius in the field of Experimental Lunacy, takes the stage.

{scientist_name}:  
"Thank you, fellow visionaries. Today, I proudly present: the *{invention_name}™*.

This groundbreaking device is powered entirely by {power_source} and held together with nothing but duct tape and blind optimism.

However, due to a minor calibration error, it occasionally causes {unexpected_side_effect}. But that’s all part of the innovation process.

Using a process I call **Quantum {scientific_term} Compression**, it can reverse entropy, fold socks, and sometimes scream in Latin.

The core component? A surgically-enhanced {animal_part}, pulsing with chaotic energy. I cried {emotion}-tears while soldering it by candlelight.

Ladies and gentlemen... welcome to the future."

💥 *Mic drops. Crowd screams. A goat faints.*
"""

print("\n🔬 Your TED Talk Transcript:\n")
print(story)
