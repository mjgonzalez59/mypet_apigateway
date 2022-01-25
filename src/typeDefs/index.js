//Se llama al typedef (esquema) de cada submodulo
const authInvoiceDefs = require("./auth_invoice_type_defs");
const ownerPetTypeDefs = require("./owner_pet_type_defs");

//Se unen
const schemasArrays = [authInvoiceDefs, ownerPetTypeDefs]

//Se exportan
module.exports = schemasArrays

