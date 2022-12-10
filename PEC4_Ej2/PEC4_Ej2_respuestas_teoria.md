# ¿Qué comando debes utilizar para crear un nuevo proyecto Angular utilizando Angular CLI denominado vinoteca?
Para crear un nuevo proyecto angular utilizaremos la siguiente instrucción

~~~~
ng new vinoteca
~~~~

## Ficheros de configuración en la raíz del proyecto:
### tsconfing.app.json
Este fichero es donde se define la configuracón de typeScript para la compilación del programa.

![tsconfig.app.json](img/tsconfig.jpg)

### angular.json
Aquí se define toda la configuración de nuestra aplicación, por ejemplo cual es el fichero principal, donde se encuentra el codigo fuente, carpeta de destino, configuración de testeo, configuración servidor, etc.

### package.json
Aquí definimos que paquetes (dependencias) necessitamos instal·lar en nuestro proyecto mediante **npm**.

### .editorconfig
Aquí se definen las propiedades o reglas que utilizarà nuestro editor de código (IDE)

![editorconfig](img/editorConfig.jpg)

### .gitignore
En este fichero podemos definir que carpetas/archivos queremos ignorar con el repositorio **github**

![gitignore](img/gitignore.jpg)

## Directorio node_modules
El directorio **node_modules** es donde estan todos los archivos que instala **npm**, que son dependencias necesarias para que nuestra aplicación funcione correctamentente, estos módulos los instala porqué están definidos en el archivo **package.json**.

## Directorio src
En el directorio **src** se encuentra todo el codigo fuente de nuestra apliocación.

### index.html
Este serà el punto de entrada de nuestra aplicación.

![index](img/index.jpg)

### main.ts
El firchero **main.ts** tiene la lógica inicial de nuestra aplicación AngularJS.

![main](img/main.jpg)

### styles.css
la hoja de estilos global de nuestra aplicación, se aplicarà por defecto a todos los componentes de angular.

![styles](img/styles.jpg)


### test.ts

Aquí se ejecutant las comprobaciones de los test de desarrollo.


### polyfills.ts

Polyfillsen angular hay algunas líneas de código para hacer compatible el código generado por angular con navegadores más antiguos, como IE, firefox versiones antiguas.

## Directorio environments

En la carpeta **environments** tenemos los archivos de configuración del estado de nuestra aplicación, existen principalmente dos estados:
* Desarrollo: Donde estamos desarrollando nuestra aplicación, donde hay archivos de test y otros complementos necesarios para testear nuestra aplicación.
* Producción: Cuando ya tenemos nuestra aplicación finalizada y la vamos a colgar en el servidor definitivo.

## Directorio assets

El directorio assets és como una carpeta pública donde podemos acceder desde cualquier componente, por ejemplo, una carpeta de imágenes donde podemos direccionar nuestras imágenes, videos, esta información se quedará inamovible cuando compilemos.

## Directorio app
El directorio app és donde se aloja nuestra aplicación y sus componentes.

### Ficheros app.component.*
Un componente és una parte de nuestra aplicación, que està bàsicamente compuesta de un fichero html, uno ts y uno css.

### Fichero app.module.ts
Aquí és donce se definen que componentes hay en nuestra aplicación, cual es el archivo principal para arrancar nuestra aplicación, etc.

# Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen en:

## app.module.ts - @NgModule (declarations, imports, providers, bootstrap).

* declarations: Que componentes forman parte de nuestra aplicación.
* imports: sirve para importar otros módulos que vamos a utilizar.
* providers: sirve para importar servicios de datos, para manejar datos de base de datos.
* bootstrap: la vista o componente principal de nuestra aplicación.

## app.component.ts - @Component (selector, templateUrl, styleUrls).

* selector: Es la etiqueta html que activarà toda la lógica del componente.
* templateUrl: Es el fichero html asociado a la vista html.
* styleUrls: Es la hoja de estilos utilizada por el componente.

# ¿Es posible poder inyectar el template y los estilos en línea de un componente sin necesidad de especificarlos en templateUrl, styleUrls? ¿Es recomendable hacer esto?

Si es posible, pero no recomendable, debido a que queda poco claro y estructurado el codigo, mucho mejor para el mantenimiento de una aplicación que todo el código esté en ficheros separados para su reutilización y mantenimiento.



