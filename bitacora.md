# TypeScript

## Instalación de TypeScript de manera global
```bash
npm install -g typescript
```

## Transpilar los archivos de TypeScript a JavaScript

Para transpilar los archivos TypeScript (`.ts`) a JavaScript Vanilla (`.js`), utilizamos el comando:
```bash
tsc nombreArchivo.ts
```

## Archivo inicial de configuración de TypeScript
```bash
tsc --init
```

## Transpilar todos los `.ts` del proyecto

Teniendo el archivo de [tsconfig.json](./01-bases/tsconfig.json); al utilizar el comando `tsc`, transpilará todos los archivos según los criterios el documento de configuraciones

## Watchmode
Permite observar el estado de las variables y la ejecución del archivo mientras se está ejecutando
```bash
tsc --watch
or
tsc -w
```

## ✍🏻 Conceptos

1. ### ¿Qué es TypeScript?
   Lenguaje de programación libre y de código abierto; mantenido por Microsoft. Superconjunto/superset de JavaScript; añade tipos estáticos y objetos basados en clases.
2. ### ¿Cómo funciona?
    Utiliza el código escrito en TypeScript para transpilarlo a su sinónimo de JavaScript vanilla. El código de TypeScript, a grandes rasgos es más fácil de leer que su contraparte de JavaScript.

