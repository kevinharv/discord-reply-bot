# Discord Reply Bot
This bot started as a spring break project as part of a running joke within my friend group. I quite enjoyed the project and have a few more ideas for additional bots down the road. If you want to leverage this project for your own fun, feel free to fork and follow the configuration information below.


# Configuration

Include a config.json file in the root directory with the following format:
```
{
    "token": "your-token-here",
    "guildId": "your-guild-here",
    "clientId": "your-client-here"
}
```

Once configured, the bot can be deployed on any NodeJS host platform. I run my instance with PM2 on an AWS EC2.micro virtual machine.