---
pkg: "@nocobase/plugin-data-source-main"
---

# Общая коллекция

## Введение
Используется в большинстве сценариев. Общую коллекцию можно использовать, если не требуется специальный шаблон коллекции.

## Руководство пользователя


![20240324085739](https://static-docs.nocobase.com/20240324085739.png)

### Настройка первичного ключа

При создании коллекции нужно указать поле первичного ключа. При создании новой коллекции рекомендуется включить предустановленное поле ID. Тип первичного ключа по умолчанию для поля ID — Snowflake ID (53-bit).

![20251209210153](https://static-docs.nocobase.com/20251209210153.png)

Наведите курсор на интерфейс поля ID, чтобы выбрать другие типы первичного ключа.

![20251209210517](https://static-docs.nocobase.com/20251209210517.png)

Доступные типы первичного ключа:
- [Текст](/data-sources/data-modeling/collection-fields/basic/input)
- [Целое число](/data-sources/data-modeling/collection-fields/basic/integer)
- [Snowflake ID (53-bit)](/data-sources/data-modeling/collection-fields/advanced/snowflake-id)
- [UUID](/data-sources/data-modeling/collection-fields/advanced/uuid)
- [Nano ID](/data-sources/data-modeling/collection-fields/advanced/nano-id)
