const { ApolloServer } = require("apollo-server");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const AuthInvoiceAPI = require("./dataSources/auth_invoice_api");
const OwnerPetAPI = require("./dataSources/owner_pet_api");
const authentication = require("./utils/authentication");

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        authInvoiceAPI: new AuthInvoiceAPI(),
        ownerPetAPI: new OwnerPetAPI(),
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then( ({url}) => {
    console.log(`Server ready at ${url}`);
});


