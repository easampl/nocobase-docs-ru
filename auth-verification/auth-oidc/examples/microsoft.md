# Идентификатор Microsoft Entra (Microsoft Entra ID)

> [https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app)  
> [https://learn.microsoft.com/en-us/entra/identity-platform/v2-protocols-oidc](https://learn.microsoft.com/en-us/entra/identity-platform/v2-protocols-oidc)

## Добавить аутентификатор в NocoBase

Сначала добавьте новый аутентификатор в NocoBase: Параметры плагина — Аутентификация пользователей — Добавить — OIDC.

Скопируйте callback URL.



## Зарегистрируйте приложение

Откройте Microsoft Entra admin center и зарегистрируйте новое приложение.



Вставьте сюда callback URL, который вы только что скопировали.



## Получите и заполните нужную информацию

Перейдите в только что зарегистрированное приложение и скопируйте **Application (client) ID** и **Directory (tenant) ID** со страницы обзора.



Нажмите `Certificates & secrets`, создайте новый секрет клиента и скопируйте значение **Value**.



Соответствие информации Microsoft Entra полям аутентификатора в NocoBase:


| Информация Microsoft Entra | Поле аутентификатора в NocoBase                                                                                                                                                                                            |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Application (client) ID    | Клиент ID                                                                                                                                                                                                                  |
| Client secrets - Value     | Клиент secret                                                                                                                                                                                                              |
| Directory (tenant) ID      | Поставщик: [https://login.microsoftonline.com/{tenant}/v2.0/.well-known/openid-configuration](https://login.microsoftonline.com/{tenant}/v2.0/.well-known/openid-configuration), замените `{tenant}` на Directory (tenant) ID |


