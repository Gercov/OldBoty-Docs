---
sidebar_position: 5
---

# Ограничения бота

На этой странице представлены ограничения бота

## Общие ограничения
OldBoty 3.0 четко следует **[ограничениям для ботов сервиса Twitch](https://dev.twitch.tv/docs/irc#:~:text=The%20bot%20is%20limited%20to,messages%20per%2030%20second%20limit)**, а именно 100 действий в чате в течении 30 секунд. Из-за этого могут возникнуть ситуации, когда бот не сможет реагировать на команды, в таком случае просто немного подождите.

## Без подписки
- Спам [командой](features/commands) до 10 сообщений с кд в 5 секунд
- 5 кастомных [команд](features/commands)
- 1 [элиас](features/commands#элиасы) на команду
- 20 [банвордов](features/banwords)
- 2 [таймера](features/timers)
- 5 [связок](features/channel-groups) каналов
- Недоступны смайлики канала OldBoty
- [!mb](features/spam#бан-по-фразе) и [!mt](features/spam#мут-по-фразе) захватывает до 15 старых сообщений (из-за [общих ограничений](#общие-ограничения))

## С подпиской
- Спам [командой](features/commands) до 20 сообщений с кд в 2.5 секунд
- 40 кастомных [команд](features/commands)
- 5 [элиасов](features/commands#элиасы) на команду
- 50 [банвордов](features/banwords)
- 5 [таймеров](features/timers)
- 15 [связок](features/channel-groups) каналов
- Доступ к смайликам канала OldBoty
- [!mb](features/spam#бан-по-фразе) и [!mt](features/spam#мут-по-фразе) захватывает до 25 старых сообщений (из-за [общих ограничений](#общие-ограничения))