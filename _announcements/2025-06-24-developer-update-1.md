---
layout: announcement
title: "Developer Update 1"
date: 2025-06-24
image: "/assets/images/announcements/developer-update-1-1.gif"
excerpt: "Welcome to the first Developer Update, a new series of posts that give an inside look at our development process!"
---

We received a lot of great feedback from players at Game Con Canada 2025. We incorporated several suggestions so far and we are working on implementing more. The changes listed below will be available in the next game update.

### Summary

- Colors were hard to see sometimes.
  - Added customizable bubble colors.
  - Adjusted visual effects for incoming bubbles and added new visuals to help improve clarity.
- Game effects were confusing.
  - Added "hexes", showing where the incoming bubbles will snap into place after they land.
  - Added a visual effect at the start of Multibubble.
  - Other various visual improvements.
- Some player strategies weren't rewarding enough.
  - Added a score bonus when bubbles snap into place.

### Changelist

- Game effects were often confusing. It was unclear why certain effects like Bubble Mania, Multibubble, "bubbling up" (select a power), shields, etc. were triggering and when/why they ended. Sometimes bubbles would snap into place, and other times they would fall down.
  - _We think our biggest offender was our lack of visual/audio effects. We made the following changes in an effort to improve the user experience ("UX"), though we feel more UX changes will be needed._
  - Added "hexes" that show the grid in the Main Bubble which incoming bubbles snap to after they land. We hope this will help clarify where the incoming bubbles will snap into place after they land.
  - Added a visual effect at the start of Multibubble. The game briefly pauses, the camera zooms in, the hexes flash, then the camera zooms back out.
  - Added an extra blinking "!" to ghost bubbles when we detect that the incoming bubble might cause a game over.
  - Improved visuals of the center bubble pop effect.

![developer-update-1]({{ "/assets/images/announcements/developer-update-1.gif" | relative_url }})

- Some player strategies weren't rewarding enough.
  - \_Other "color-matching" games typically punish the player when game pieces leave a boundary, like the top of the board in Tetris. The only way to score points in Bubble UP! was to let the bubbles leave the Main Bubble. This subverted player expectations so strongly that our tutorial was effectively useless.
    We learned at GCC that our game is best explained in 2 words: "match colors". A new player following this instruction will eventually fill the Main Bubble and then be faced with a critical decision: match colors (they pop), or not (game over). By rewarding the player for matching colors, we hope to prepare them to make the right choice, naturally teaching them our core mechanic.
    The following change also diversifies player strategies by, for example, giving a tradeoff between scoring big snap bonuses and popping bubbles as fast as possible, both of which have unique benefits and challenges.\_
  - Added a score bonus when bubbles snap into place. Adding new bubbles to big color chains gives more score than adding to small color chains.
- Colors weren't clear enough, especially for incoming bubbles.
  - _Although_ [~10% of men have augmented color vision](https://www.colourblindawareness.org/colour-blindness/)_, we got this feedback from a significant number of players. We interpreted this as the incoming bubbles weren't showing enough color on the screen before they appeared, making them difficult to react to._
  - Added a setting to customize all 4 bubble colors, specific to each player profile.
  - Added a colored glow to the edge of the screen for each incoming bubble.
  - Added a background color to the "ghost bubbles" that are shown before each incoming bubble appears.

![developer-update-1-1]({{ "/assets/images/announcements/developer-update-1-1.gif" | relative_url }})

If you would like to submit suggestions or feedback, please create a post in the [#ideas](https://discord.gg/DpQPZKKfGG) channel in the [Bubble UP! Community Discord Server](https://discord.gg/nqFVgXWUBk), or to make an anonymous suggestion, [#submit-a-ticket](https://discord.gg/8U73Sxqn26). We look forward to hearing what you have to say!

Stay tuned for Developer Update 2, and keep poppin'!
