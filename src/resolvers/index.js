const authInvoiceResolver = require("./auth_invoice_resolver");
const ownerPetResolver = require("./owner_pet_resolver");

const lodash = require("lodash");

const resolvers = lodash.merge(authInvoiceResolver, ownerPetResolver);

module.exports = resolvers;
