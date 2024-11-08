# TypeScript

## Introducción a TypeScript

### Instalación de TypeScript de manera global

```bash
npm install -g typescript
```

### Transpilar los archivos de TypeScript a JavaScript

Para transpilar los archivos TypeScript (`.ts`) a JavaScript Vanilla (`.js`), utilizamos el comando:

```bash
tsc nombreArchivo.ts
```

### Archivo inicial de configuración de TypeScript

```bash
tsc --init
```

### Transpilar todos los `.ts` del proyecto

Teniendo el archivo de [tsconfig.json](./01-bases/tsconfig.json); al utilizar el comando `tsc`, transpilará todos los archivos según los criterios el documento de configuraciones

### Watchmode

Permite observar el estado de las variables y la ejecución del archivo mientras se está ejecutando

```bash
tsc --watch
or
tsc -w
```

## Tipos básicos

### Tipos de datos

#### Que permite JavaScript

| Primitivos |                           | Compuestos        |                                       |
| :--------- | :------------------------ | :---------------- | :------------------------------------ |
| String     | `" "`, `' '`, `` ` ` ``   | Objetos literales | `person = {name: 'Rob', age: 21 }`    |
| Number     | `3.1415`, `1564.06`, `72` | Funciones         | `function doNothing() {}`, `() => {}` |
| Boolean    | `true`, `false`           | Clases            | `class Person { name; age; }`         |
| Symbol     | `Symbol()`                | Arreglos          | `['string', 10, ...etc]`              |
| Null       | `null`                    |                   |                                       |
| Undefined  | `undefined`               |                   |                                       |

#### [Pero TypeScript también nos permite](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

- Crear nuevos tipos
- Interface
- Genéricos
- Tuplas

## ✍🏻 Definiciones

1. ### ¿Qué es TypeScript?
   Lenguaje de programación libre y de código abierto; mantenido por Microsoft. Superconjunto/superset de JavaScript; añade tipos estáticos y objetos basados en clases.
2. ### ¿Cómo funciona?
   Utiliza el código escrito en TypeScript para transpilarlo a su sinónimo de JavaScript vanilla. El código de TypeScript, a grandes rasgos es más fácil de leer que su contraparte de JavaScript.

## 📝 Resumen

| Tipo    | Ejemplo                                                |
| :------ | :----------------------------------------------------- |
| Boolean | `let booleano: boolean = true`                         |
| Number  | `let numero: number = 10`                              |
| String  | `let cadenaDeTexto: string = 'Valor'`                  |
| Boolean | `let booleano: boolean = true`                         |
| Any     | `let anyImplicito;` or `let cualquierCosa: any = 654 ` |
| Array   | `let frutas: string[] = ['Manzana', 'Pera', 'Melón']`  |
| Tuples  | `let normalTupla: [string, number] = ['Texto', 125]`   |
| Enum    | `enum AudioLevel { min, medium, max }`                 |
