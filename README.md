# Monty-Hall-Problem-Simulation
Monty Hall Problem Simulation

## Problem
The Monty Hall problem is a brain teaser, in the form of a probability puzzle, loosely based on the American television game show Let's Make a Deal and named after its original host, Monty Hall. The problem was originally posed (and solved) in a letter by Steve Selvin to the American Statistician in 1975. It became famous as a question from reader Craig F. Whitaker's letter quoted in Marilyn vos Savant's "Ask Marilyn" column in Parade magazine in 1990\

Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats. You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. He then says to you, "Do you want to pick door No. 2?" Is it to your advantage to switch your choice?

[Exctracted from Wikipedia](https://en.wikipedia.org/wiki/Monty_Hall_problem)

## Simulation results
Result sample on 5000000 games (using `node . 5000000`): 
```
RAND   : 0.4995708
STAY   : 0.333558
SWITCH : 0.6666444
```

**Conclusion**: According to the empirical statistical results generated using the simulation, switching seems a better strategy.