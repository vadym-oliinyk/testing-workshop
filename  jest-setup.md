1. Устанавливаем Jest `yarn add -D jest`

2. Добавляем в `package.json` команду для запуска тестов `"test": "jest"`

3. Для поддержки TS в тестах устанавливаем `yarn add -D @babel/preset-typescript ts-node`

4. Добавляем в `.babelrc` в поле `presets` preset для TS `@babel/preset-typescript`

5. Добавляем типы Jest-a `yarn add -D @types/jest`

6. Добавляем React Testing Library для удобного тестирования React компонентов `yarn add -D @testing-library/react`

7. Создаем файл конфигурации Jest-a `npx jest --init`