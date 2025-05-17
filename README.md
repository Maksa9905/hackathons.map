# Hackathons.Map

Интерактивный виджет для отображения карты России с хакатонами в различных городах. Этот React-компонент позволяет отмечать города на карте, показывать информацию о хакатонах и обрабатывать пользовательские взаимодействия.

## Установка

```bash
npm install hackathons.map
```

## Использование

```jsx
import React, { useState } from 'react';
import { HackathonsMap } from 'hackathons.map';
import { ELocation } from 'hackathons.map';

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <HackathonsMap
      onLocationChange={setSelectedLocation}
      selectedLocation={selectedLocation}
      renderTooltipContent={(location, locationData) => (
        <div>
          <h1>{location}</h1>
          <h2>{locationData.name}</h2>
          <p>{locationData.description}</p>
        </div>
      )}
      locationOptions={{
        [ELocation.MOSCOW]: {
          name: 'Хакатон в Москве',
          description: 'Крупнейший хакатон страны',
          coordinates: {
            latitude: 55.7558,
            longitude: 37.6173,
          },
        },
        [ELocation.SAINT_PETERSBURG]: {
          name: 'Хакатон в Санкт-Петербурге',
          description: 'Международный хакатон разработчиков',
          coordinates: {
            latitude: 59.9343,
            longitude: 30.3351,
          },
        },
        // Добавьте другие локации по необходимости
      }}
    />
  );
}
```

## API

### Props компонента HackathonsMap

| Свойство | Тип | Описание |
|----------|-----|----------|
| `onLocationChange` | `(location: ELocation \| null) => void` | Функция обратного вызова при изменении выбранной локации |
| `selectedLocation` | `ELocation \| null` | Текущая выбранная локация |
| `locationOptions` | `Partial<Record<ELocation, TLocationData>>` | Объект с данными о локациях |
| `renderTooltipContent` | `(location: ELocation, locationData: TLocationData) => React.ReactNode` | Функция для рендеринга содержимого тултипа |

### Перечисление ELocation

Доступные города для размещения на карте:

```typescript
enum ELocation {
  VLADIVOSTOK = 'VLADIVOSTOK',
  EKATERINBURG = 'EKATERINBURG',
  IRKUTSK = 'IRKUTSK',
  KAZAN = 'KAZAN',
  MOSCOW = 'MOSCOW',
  NOVOSIBIRSK = 'NOVOSIBIRSK',
  OMSK = 'OMSK',
  PERM = 'PERM',
  SAINT_PETERSBURG = 'SAINT_PETERSBURG',
  SARATOV = 'SARATOV',
  SMOLENSK = 'SMOLENSK',
}
```

## Разработка

Проект использует следующие технологии:
- React 19
- TypeScript
- Styled Components
- Vite

### Команды

```bash
# Запуск в режиме разработки
npm run dev

# Сборка проекта
npm run build

# Проверка кода линтером
npm run lint

# Предпросмотр сборки
npm run preview
```

## Структура проекта

```
src/
  ├── components/       # Компоненты React
  │   ├── HackathonsMap.tsx      # Основной компонент карты
  │   ├── LocationPin.tsx        # Компонент метки города
  │   ├── MapSvg.tsx             # SVG карта России
  │   └── Tooltip.tsx            # Компонент всплывающей подсказки
  ├── hooks/            # React хуки
  ├── types/            # TypeScript типы
  │   └── ELocation.ts           # Перечисление локаций
  ├── utils/            # Утилиты
  │   └── coordinatesConverter.ts # Конвертер координат для локаций
  ├── App.tsx           # Демонстрационное приложение
  ├── index.ts          # Точка экспорта библиотеки
  └── main.tsx          # Точка входа для разработки
```

## Лицензия

MIT

