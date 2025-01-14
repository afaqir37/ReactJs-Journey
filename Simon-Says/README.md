
# Simon Says Game (React Version)
This is a version of the classic Simon Says game, built with React. Players must memorize and repeat a sequence of actions before the game ends. This version uses a sequence of events, and the player needs to replicate them to win the game.

### Features
- Countdown Timer: Before the game starts, the player is given a few seconds to memorize the sequence.
- Random Sequence Generation: The game generates a new sequence for each round, which increases in complexity.
- Winning and Losing Conditions: The game tracks whether the player has successfully repeated the sequence. Win or loss alerts will appear at the end of the game.
- Confetti Celebration: Celebrate the player’s win with a fun confetti animation.
- Curtain Effect: A curtain effect hides the sequence during the memorization phase and reveals it only when the player needs to repeat it.


### How to Play
- Start the Game: Press "New Game" to begin.
- Memorize the Sequence: You will see a sequence of actions. Memorize them before the countdown ends.
- Repeat the Sequence: After the countdown, you will need to repeat the sequence by following the on-screen prompts.
- Game Over: If the sequence is repeated incorrectly, the game ends. You will see either a win or loss alert, depending on the outcome.

## Installation
Clone the repository:

```bash
git clone https://github.com/yourusername/simon-says.git
```
- Navigate to the project directory:

```bash
cd simon-says
```
- Install dependencies using Vite:

```bash
npm install
```


- Start the development server:

```bash
npm run dev
```

The game will be available at http://localhost:3000.