const Ajv = require("ajv");
const ajv = new Ajv({
    allErrors: true,
});
const addFormats = require("ajv-formats");
const localize = require("ajv-i18n");
addFormats(ajv);

const contactSchema = require("./schemas/Contact.schema.json");
const addressSchema = require("./schemas/Address.schema.json");
const userSchema = require("./schemas/User.schema.json");

ajv.addSchema(addressSchema, "Address");
ajv.addSchema(contactSchema, "Contact");
ajv.addSchema(userSchema, "User");
const data = {
    name: "John Doe",
    age: 25,
    birthDate: "1993-12-31",
    // birthDate: "31-12-1993",
    address: {
        street: "123 Main St",
        city: "Springfield",
        state: "IL",
        zip: "62701",
    },
    contact: {
        phone: "555-555-5555",
        email: "carmelo@me.com",
    },
};

const validate = ajv.getSchema("User");
const valid = validate(data);

if (!valid) {
    localize.es(validate.errors);
    console.log(validate.errors);
    // console.log(validate.errors.map((error) => `${error.message}`).join("\n"));
} else {
    console.log("Los datos son válidos");
}