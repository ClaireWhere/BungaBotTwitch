# BungaBotTwitch

A Twitch chat bot for <a href='https://www.twitch.tv/AAAAurora_'>AAAAurora_'s</a> stream

The source code of this project is only intended for use as Bunga_Bot in AAAAurora's stream but the code is public for documentation purposes. Feel free to reuse any of this code in your non-commercial projects.

## Install/Setup

Ensure there is a .env file in the root of the project with the following variables:
* `TWITCH_USERNAME`=Bunga_Bot
* `TWITCH_OAUTH`=the oauth key of the bot
* `TWITCH_CHANNEL`=aaaaurora_

After configured, to start the bot, just type this into the command line in the root directory: 
```bash
npm start
```

## Commands

<details>
<summary>Click to open the commands list</summary>

### Commands that Bunga_Bot will respond to in Twitch chat:
* `!arena` [set/clear] [arena id]
    - displays, sets, or clears the current arena for tournaments
* `!discord`
    - sends the discord server invite link
* `!meds`
* `!onlyfans`
* `!pronouns`
* `!roblox`
    - sends roblox username
* `!switch`
    - sends switch friend code
* `!tip`
    - sends streamlabs tip link

</details>

## Change Log

See a full list of changes in the [[Changelog]](CHANGELOG.md)
