
# JSON Schema APIS más robustas y confiables


## ¿Que es JSON?

JSON (JavaScript Object Notation) es un formato de intercambio de datos ligero y fácil de leer. 

## ¿Que es JSON Schema?

JSON Schema es un lenguaje de descripción de datos que permite definir la estructura, el contenido y las validaciones de los datos en formato JSON.


## ¿Por qué usar JSON Schema?

- **Validación de datos**: JSON Schema permite definir reglas de validación para los datos en formato JSON.

- **Documentación de APIs**: JSON Schema permite definir la estructura de los datos que se envían y reciben en una API.

- **Generación de código**: JSON Schema permite generar código en diferentes lenguajes de programación a partir de la definición de los datos.

- **Pruebas unitarias**: JSON Schema permite definir reglas de validación para los datos en formato JSON, lo que facilita la creación de pruebas unitarias.

### ¿Como funciona JSON schema?


JSON Schema define un conjunto de palabras clave que se pueden utilizar para definir la estructura y las validaciones de los datos en formato JSON.


Ejemplo de JSON

```json
{
  "name": "John Doe",
  "age": 30
}
```


Ejemplo de JSON Schema

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "age": {
      "type": "number"
    }
  }
}
```

### type

La palabra clave `type` se utiliza para definir el tipo de datos que se espera en una propiedad.

```json
{
  "type": ["string", "number", "null", "object", "array", "boolean"],
}
```

### properties

La palabra clave `properties` se utiliza para definir las propiedades de un objeto.

```json
{
  "properties": {
    "name": {
      "type": "string"
    },
    "age": {
      "type": "number"
    }
  }
}
```

### required

La palabra clave `required` se utiliza para definir las propiedades que son obligatorias en un objeto.

```json
{
  "required": ["name", "age"]
}
```

### additionalProperties

La palabra clave `additionalProperties` se utiliza para definir si un objeto puede tener propiedades adicionales que no están definidas en el esquema.

```json
{
  "additionalProperties": false
}
```

## Restricciones

JSON Schema permite definir una serie de restricciones para los datos en formato JSON, como:

### String

- `minLength`: Longitud mínima de una cadena.
- `maxLength`: Longitud máxima de una cadena.
- `pattern`: Expresión regular que debe cumplir una cadena.

Ejemplo de restricciones en string

```json
{
  "type": "string",
  "minLength": 1,
  "maxLength": 255,
  "pattern": "^[a-zA-Z0-9]*$"
}
```
### Number

- `minimum`: Valor mínimo de un número.
- `maximum`: Valor máximo de un número.
- `multipleOf`: Valor que debe ser múltiplo de un número.

Ejemplo de restricciones en number

```json
{
  "type": "number",
  "minimum": 0,
  "maximum": 100,
  "multipleOf": 2
}
```
### Array

- `minItems`: Número mínimo de elementos en un array.   
- `maxItems`: Número máximo de elementos en un array.
- `uniqueItems`: Si los elementos de un array deben ser únicos.

Ejemplo de restricciones en array

```json
{
  "type": "array",
  "minItems": 1,
  "maxItems": 10,
  "uniqueItems": true
}
```

### Object

- `minProperties`: Número mínimo de propiedades en un objeto.
- `maxProperties`: Número máximo de propiedades en un objeto.
- `required`: Propiedades obligatorias en un objeto.
- `additionalProperties`: Si un objeto puede tener propiedades adicionales.


Ejemplo de restricciones en object

```json
{
  "type": "object",
  "minProperties": 1,
  "maxProperties": 10,
  "required": ["name", "age"],
  "additionalProperties": false
}
```


### AnyOf

La palabra clave `anyOf` se utiliza para definir un conjunto de esquemas, de los cuales al menos uno debe ser válido.

```json
{
  "anyOf": [
    {
      "type": "object",
        "properties": {
            "name": {
            "type": "string"
            }
        }
    },
    {
      "type": "object",
        "properties": {
            "age": {
            "type": "number"
            }
        }
    }
  ]
}
```

### AllOf

La palabra clave `allOf` se utiliza para definir un conjunto de esquemas, de los cuales todos deben ser válidos.

```json
{
  "allOf": [
    {
      "type": "object",
        "properties": {
            "name": {
            "type": "string"
            }
        }
    },
    {
      "type": "object",
        "properties": {
            "age": {
            "type": "number"
            }
        }
    }
  ]
}
```

### OneOf

La palabra clave `oneOf` se utiliza para definir un conjunto de esquemas, de los cuales solo uno debe ser válido.

```json
{
  "oneOf": [
    {
      "type": "object",
        "properties": {
            "name": {
            "type": "string"
            }
        }
    },
    {
      "type": "object",
        "properties": {
            "age": {
            "type": "number"
            }
        }
    }
  ]
}
```

### Not

La palabra clave `not` se utiliza para definir un esquema que no debe ser válido.

```json
{
  "not": {
    "type": "object",
      "properties": {
          "name": {
          "type": "string"
          }
      }
  }
}
```

## Referencias

JSON Schema permite definir referencias a otros esquemas, lo que facilita la reutilización de esquemas.

```json
{
    "properties": {
    "author": {
      "$ref": "#/definitions/Person"
    },
    "editor": {
      "$ref": "#/definitions/Person"
    }
  },
  "definitions": {
    "Person": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "age": {
          "type": "number"
        }
      }
    }
  },
  "type": "object"
  
}
```

Podemos referenciar esquemas locales o remotos

Ejemplo de referencia local:
    
```json
{
"$ref": "#/definitions/Person"
}
```

Ejemplo de referencia remota:

```json
{
  "$ref": "https://example.com/schema.json"
}
```




## ¿Como podemos valida un JSON con JSON Schema?

Existen varias herramientas y bibliotecas que permiten validar un JSON con un JSON Schema, como:

- **ajv**: Una biblioteca de validación de JSON para Node.js y el navegador.

### Ejemplo de validación con ajv

```javascript

const Ajv = require('ajv');
const ajv = new Ajv();

const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'number' }
  },
  required: ['name', 'age']
};

const data = {
  name: 'John Doe',
  age: 30
};

const validate = ajv.compile(schema);
const valid = validate(data);

if (!valid) {
  console.log(validate.errors);
}else{
    console.log("El JSON es valido");
}

```


## Conclusiones

JSON Schema es una herramienta poderosa y versátil que permite definir la estructura, el contenido y las validaciones de los datos en formato JSON.

- JSON Schema es útil para validar datos, documentar APIs, generar código y crear pruebas unitarias.


Gracias por asistir a esta charla sobre JSON Schema. Si tienes alguna pregunta, no dudes en hacerla.

Un saludo,

Carmelo

## Referencias

- [JSON Schema](https://json-schema.org/)
- [ajv](https://ajv.js.org/)
- [JSON Schema Validator](https://www.jsonschemavalidator.net/)

[]: # (END)