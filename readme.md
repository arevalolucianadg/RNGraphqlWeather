# OWeather

App React Native para Android

### Tabla de contenido
- [Descargar APK](#descargar-apk)
- [Antes de comenzar](#antes-de-comenzar)
  - [Configuración de entorno](#configuración-de-entorno)
  - [Crear .env](#crear-env)
- [Scripts disponibles](#scripts-disponibles)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [API GraphQL](#api-graphql)

## Descargar APK
**OWeather - Google Drive**
[OWeatherApp-release.apk](https://drive.google.com/file/d/1iSDXiRRP6nd85zNPNytCT7xjaUhJF79O/view?usp=sharing)
***

## Antes de comenzar

### Configuración de entorno

[**React Native - Setting up the development environment**](https://reactnative.dev/docs/environment-setup)

NodeJS: +14.0

Yarn: +1.0

### Crear .env
Ver archivo .env.example

```
LOAD_STORYBOOK=FALSE
/* LOAD_STORYBOOK: boolean */


API_URL=https://graphql-weather-api.herokuapp.com/
```
***

## Scripts disponibles

**Ejecutar en Android**

`npm run android`

**Tests**

`npm run test`

`npm run test:watch`

> (**En Progreso**) Por el momento sólo WeatherCard tiene tests.


**Storybook**

`npm run storybook`

> (**En Progreso**) Por el momento sólo TabBarIcon tiene stories.

**Generar AAB release**

```bash
cd android
./gradlew bundleRelease
```

**Generar AAB release**

```bash
cd android
./gradlew assembleRelease
```

***

## Tecnologías utilizadas
* React Native
* TypeScript
* GraphQL & Apollo Client
* Styled Components
* Jest
* React Native Testing Library
* Storybook
* AsyncStorage
* ESLint
***

## API GraphQL
[GraphQL Weather](https://graphql-weather-api.herokuapp.com/)