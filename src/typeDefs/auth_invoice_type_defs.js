const { gql } = require("apollo-server");

const authInvoiceDefs = gql `
    type Tokens {
        refresh: String!
        access: String!
    }
    
    type Access {
        access: String!
    }

    input LogInInput {
        username: String!
        password: String!
    }

    input SignUpInput {
        username: String!
        password: String!
        name: String!
        email: String!
        phone: String!
        position: String!
    }

    input ServiceInput {
        userId: Int!
        name: String!
        value:  Int!
    }

    input ServiceIdInput {
        serviceId: Int!
    }


    input InvoiceInput {
        createdByUserId: Int!
        paymentMethod: String!
        services: [ServiceIdInput]!
    }

    type ServiceElement {
        name: String!
        value:  Int!
    }

    type Invoice {
        createdByUserId: Int!
        paymentMethod: String!
        date: String!
        services: [ServiceElement]!
        totalValue: Float!
    }

    type ServicesList {
        services: [ServiceElement]!
    }

    type invoiceElement {
        id: Int!
        createdByUserId: Int!
        paymentMethod: String!
        date: String!
        services: [ServiceElement]!
    }

    type Mutation {
        logIn(credentials: LogInInput!): Tokens!
        refreshToken(refresh: String!): Access!
        signUpUser(userInput: SignUpInput!): Tokens!
        serviceCreation(serviceInput: ServiceInput!): String!
        invoiceCreation(invoiceInput: InvoiceInput!): Invoice!
    }

    type Query {
        detailsPerInvoice(idInvoice: Int!): invoiceElement!
        allServicesList: [ServiceElement]!
        allInvoicesList: [invoiceElement]!
    }
    `;

module.exports = authInvoiceDefs;




