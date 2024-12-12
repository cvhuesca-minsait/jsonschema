# Aplicaciones y Frameworks que utilizan JSON Schema

## **1. Frameworks y Librerías**

### **Backend**
1. **Ajv (Another JSON Validator)**:
   - Popular librería en Node.js para validar datos con JSON Schema.
   - Uso común en aplicaciones MEAN y MERN.
   - [Sitio oficial](https://ajv.js.org/)

2. **Fastify**:
   - Framework Node.js enfocado en alto rendimiento que utiliza JSON Schema para validar entradas y salidas de rutas.
   - [Sitio oficial](https://www.fastify.io/)

3. **Flask-RESTPlus**:
   - Extensión para Flask (Python) que admite la validación basada en JSON Schema.
   - Ideal para construir APIs RESTful.
   - [Sitio oficial](https://flask-restx.readthedocs.io/)

4. **Spring Boot (Java)**:
   - Soporta JSON Schema para validaciones de payloads y generadores de contratos.
   - Utiliza bibliotecas como **everit-org/json-schema**.

5. **Django REST Framework (DRF)**:
   - Usa extensiones para incorporar validación con JSON Schema.
   - Compatible con serializadores personalizados.

### **Frontend**
1. **Angular**:
   - JSON Schema es fundamental en Angular para formularios reactivos, especialmente con bibliotecas como **ngx-schema-form**.
   - [Sitio oficial](https://github.com/ngx-formly/ngx-formly)

2. **React**:
   - Utiliza bibliotecas como **react-jsonschema-form** para generar formularios dinámicos basados en JSON Schema.
   - [Repositorio](https://github.com/rjsf-team/react-jsonschema-form)

3. **Vue.js**:
   - Usa bibliotecas como **vue-json-schema-form** para gestionar formularios reactivos.
   - [Repositorio](https://github.com/formschema/native)

---

## **2. Herramientas de API**
1. **OpenAPI (Swagger)**:
   - Aunque OpenAPI tiene sus propias especificaciones, muchas definiciones de esquemas usan JSON Schema como base.
   - [Sitio oficial](https://swagger.io/)

2. **Postman**:
   - Usa JSON Schema para validar cuerpos de respuestas y peticiones en sus tests automáticos.

3. **GraphQL**:
   - JSON Schema se utiliza como herramienta complementaria para validar las entradas de APIs GraphQL en ciertos entornos.

4. **API Gateway (AWS)**:
   - Permite la validación de payloads usando JSON Schema en sus configuraciones de API Gateway.

---

## **3. Generadores de Formularios y UIs**
1. **react-jsonschema-form**:
   - Biblioteca popular para generar formularios en React a partir de JSON Schema.
   - [Repositorio](https://github.com/rjsf-team/react-jsonschema-form)

2. **Angular Schema Form**:
   - Genera formularios dinámicos basados en esquemas JSON.
   - [Repositorio](https://github.com/json-schema-form/angular-schema-form)

3. **Uniforms**:
   - Librería de generación de formularios basada en JSON Schema para React.
   - [Sitio oficial](https://uniforms.tools/)

4. **Form.io**:
   - Plataforma que permite crear y validar formularios dinámicos usando JSON Schema.
   - [Sitio oficial](https://form.io/)

---

## **4. Sistemas de Validación**
1. **JSON Schema Validator**:
   - Herramienta en línea para validar JSON contra un esquema.
   - [Sitio oficial](https://json-schema.org/learn/getting-started-step-by-step.html)

2. **Kubernetes Custom Resource Definitions (CRDs)**:
   - Kubernetes utiliza JSON Schema para validar definiciones de recursos personalizados.

3. **AJAX Form Validation**:
   - Muchas bibliotecas como jQuery o Fetch se integran con JSON Schema para validar formularios antes de enviar.

---

## **5. Documentación y Generación de Contratos**
1. **AsyncAPI**:
   - Utiliza JSON Schema para definir y validar esquemas de mensajes en sistemas basados en eventos.
   - [Sitio oficial](https://www.asyncapi.com/)

2. **Swagger Codegen**:
   - Genera documentación y contratos de API basados en OpenAPI, que puede usar JSON Schema para validar entradas y salidas.
   - [Sitio oficial](https://swagger.io/tools/swagger-codegen/)

3. **Stoplight**:
   - Plataforma de diseño de API que soporta JSON Schema para modelar datos y contratos.
   - [Sitio oficial](https://stoplight.io/)

---

## **6. Bases de Datos y Modelado**
1. **MongoDB**:
   - JSON Schema se usa en **MongoDB Atlas** y **Mongoose** para definir validadores de datos.
   - [Sitio oficial](https://www.mongodb.com/)

2. **PostgreSQL**:
   - Usa JSON Schema para validar datos JSON almacenados en columnas tipo `JSONB`.

3. **Elasticsearch**:
   - Utiliza JSON Schema como base para la validación de documentos en índices.

4. **Prisma**:
   - ORM que usa esquemas para mapear bases de datos relacionales, a menudo con validaciones inspiradas en JSON Schema.

---

## **7. Infraestructura y Automatización**
1. **Terraform**:
   - Soporta validaciones JSON Schema en configuraciones de infraestructura como código.

2. **GitHub Actions**:
   - JSON Schema se usa para validar flujos y configuraciones de CI/CD.

3. **Azure Resource Manager (ARM)**:
   - Utiliza JSON Schema para validar plantillas de recursos.

---

## **8. Otras herramientas notables**
1. **VS Code**:
   - El editor utiliza JSON Schema para validar configuraciones de extensiones y archivos como `settings.json`.

2. **YAML Schemas**:
   - Muchas herramientas convierten JSON Schema en YAML para configuraciones como Kubernetes o Ansible.

3. **JSON Schema Faker**:
   - Genera datos simulados a partir de JSON Schema.
   - [Repositorio](https://github.com/json-schema-faker/json-schema-faker)

4. **Spectral**:
   - Herramienta para linting y validación de OpenAPI y JSON Schema.
   - [Sitio oficial](https://stoplight.io/open-source/spectral/)

---
