---
layout: announcement
title: "Developer Update 2"
date: 2025-07-09
image: "assets/images/announcements/developer-update-2.png"
excerpt: "We're gearing up to exhibit at Game Discovery Exhibition 2025 on July 21-27!"
---

We're gearing up to exhibit at Game Discovery Exhibition 2025 on July 21-27! Keep reading to learn more about new **game modes** and a new **progression system** coming in the next major game update on July 16!

### Summary

- New "Free Play" and "Versus" game modes.
- New progression system.
- Vertical mode support on mobile.

### Changelist

- **Campaign mode**
  - _This is the "main" game mode, with powerups and increasing difficulty._
  - "Base" powerups include Bomb, Multiplier, Paint, and Shield, and each has a max level perk: Bomb, Multiplier, and Paint powerups spawn one of their respective special bubbles, and Shield grants an instant shield. Max level perks are only available after each base powerup has been leveled up to the max level for the current profile. This depends on what has been unlocked for that profile in the progression system (see below).
  - New Accelerator powerup. This one-time powerup changes the Accelerator into a "slow-mo" button that slows down time for precise bubble placement. This consumes charge, which slowly regenerates over time.
- **Progression**
  - _We want to give players goals to play toward between games and add interesting strategies to Campaign mode._
  - Gain PP ("Powerup Points") with each profile level. Score points in any game mode to level up player profiles.
  - Spend PP in the main menu to unlock access to higher levels of the base powerups in Campaign mode.
  - Reset and reallocate PP anytime in the main menu.
  - The maximum amount of PP a profile can have isn't enough to unlock everything. This adds interesting powerup "builds" that encourage the player to find their strengths, and overcome their weaknesses.
- **Free Play mode**
  - _We love powerups and Rogue-lite mechanics, but we also love the more casual, puzzle-oriented play that our game originally had. For now, we decided against tracking high scores in this mode, as we weren't sure if getting a high score would be easier or harder than in Campaign mode. We may introduce per-game-mode high score tracking in the future._
  - No powerups.
  - Game difficulty doesn't change.
  - Encounters still happen.
  - High scores aren't tracked.
  - Scoring points still earns profile EXP.
- **Versus mode**
  - _Game are best with friends. This game mode is experimental and requires a lot more testing._
  - Split-screen gameplay against a human or a CPU opponent.
  - Similar to Free Play mode: no powerups, difficulty doesn't change, encounters happen, high scores aren't tracked, and scoring points earns profile EXP.
  - When the Combo Chain is popped, each popped bubble outside the Combo Ring spawns a penalty bubble on the opponent's board.
  - Penalty bubbles are gray, move at maximum speed, and multiple can spawn at the same time, rather than one-at-a-time. The only way to pop them normally is to wait for the opponent to spawn more of them and match colors at the edge. However, they also automatically pop whenever they reach the center of the Main Bubble.
- **Vertical mobile support**
  - _One of the most common points of player feedback we received was for vertical support to be added. We think the player is always right! Adding vertical support also made it much easier for us to add Versus mode._
- **Significant backend rework**
  - _We previously structured our code with many static singleton classes, which was great for passing messages between various systems without having to manually search for each reference (can require more code). However, when we implemented Versus mode, we realized that many of these singletons should not be singletons, but instead belong to individual players. For example, in Versus mode, each player should have their own SpawnManager rather than share a single SpawnManager. The same was true for the ScoreManager, ComboManager, etc. Making this change was a significant rework, but we haven't seen many new bugs, so our code base might be more robust than we thought. We are continuing to test for bugs internally as often as we can._

We're excited to hear what you have to say about this update, which arrives on July 16th. Let us know what you think in the [Bubble UP! Community Discord Server](https://discord.gg/nqFVgXWUBk)!
