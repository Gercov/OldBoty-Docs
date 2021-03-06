---
sidebar_position: 1
---
# Команды

Команды - ссылки/фразы которыми можно спамить, и которые могут вызывать обычные пользователи(по вашему желанию)

## Управление командами
### Добавление команды
`!addc !key value`
- `key` - ключ команды, по которому будет происходить вызов
- `value` - фраза

Пример:
```
!addc !тг https://t.me/oldboty_tw_bot
```
:::tip
Команда также используется для обновления фразы
:::

### Обновление команды
`!change !key value`

Пример:
```
!change !тг https://t.me/oldboty_tw_bot
```

### Вызов команды
`!key number`
- `number` - сколько раз проспамить команду

Пример:
```
!тг 3
```

### Удаление команды
`!delc !key`

Пример:
```
!delc !тг
```
### Просмотр команд

В **[телеграм боте](https://t.me/oldboty_tw_bot)** нажмите на кнопку `Информация о канале` на клавиатуре и перейдите в `Команды`

## Дополнительные настройки команд
У каждой команды есть индивидуальные настройки, которые вы можете изменить в **[телеграм боте](https://t.me/oldboty_tw_bot)**, раздел `Команды`

### Публичный режим
Позволяет отключить доступ к команде всем пользователям, даже если на канале [включен режим публичных команд](commands#режим-публичных-команд)\

### Тип ответа
Существует 3 типа ответа на команды:
- `стандартный` - просто отправляет команду в чат
- `упоминание` - добавляет команды в конец тег пользователя
- `ответ` - отвечает на сообщение пользователя

## Режим публичных команд
Позволяет вызывать всем пользователям из чата команды канала

`!pcom value`
- `value` - `on` или `off`, для включения и выключения режима соответственно

Пример:
```
!pcom on
```

## Элиасы
Дополнительные ключи для вызова команд


### Добавить элиас
`!addca !key !aliaskey`
- `!key` - ключ команды
- `!aliaskey` - элиас

Пример:
```
!addca !тг !tg
```

### Удалить элиас
`!delca !key !aliaskey`

Пример:
```
!delca !тг !tg
```

### Просмотр элиасов
Перейдите в **[телеграм бота](https://t.me/oldboty_tw_bot)**, нажмите кнопку `Информация о канале` на клавиатуре, перейдите в `Команды`, нажмите на интересующую команду
