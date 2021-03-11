# App Clima con React

_WebApp Cotizador de Criptomonedas. Elige entre el top 10 de criptomonedas y recibe su precio en la moneda que selecciones de forma dinámica._

## Índice de Contenidos

-   [Demo](#demo-)
-   [Construido Con](#construido-con-%EF%B8%8F)
-   [Instalación](#instalación-)

## Demo 🚀

https://precio-top-criptomonedas.netlify.app/

## Construido con 🛠️

-   [Create React App](https://github.com/facebook/create-react-app). - Usado para crear la base del proyecto con React
-   [API Criptomonedas](https://min-api.cryptocompare.com/documentation?key=Price&cat=multipleSymbolsFullPriceEndpoint) - API de donde tomo los datos de las criptomonedas (top10 cripto, precio, max precio, min precio, volumen, etc)
-   React useState Hook - Para el estado de la moneda, la criptomoneda, el resultado de las consultas a la API, la carga de dicho resultado, para mostrar el componente error y el componente formulario condicionalmente, etc
-   React useEffect Hook - Para hacer una consulta a la API, guardar los datos en un state, validar que no haya error, ocultar el formulario y mostrar un spinner de carga
-   Axios - Librería de JavaScript que uso como cliente HTTP para consultar la API y obtener respuestas sencillas
-   JavaScript ES6+ - Últimos estándares de JavaScript
-   Uso un poco CSS Grid para el posicionamiento y el responsive de la imagen y el formulario
-   Hice una carga condicional de componentes
-   [Emotion](https://emotion.sh/docs/introduction). - Librería diseñada para escribir CSS en JavaScript mediante Styled Components
-   PropTypes - Verificación de los tipos de las props.

### Instalación 🔧

_Clona o haz fork del repositorio. Abre el proyecto en tu consola y escribe el comando:_

```
npm install
```

_Te instalará las dependencias del proyecto, luego usa el comando:_

```
npm start
```

_Iniciará el proyecto en modo desarrollador en tu navegador. Se abrirá automáticamente:_

[http://localhost:3000](http://localhost:3000)

_La página se recargará si haces y guardas cambios en el código. También verás errores en la consola (si los hubiese)_
