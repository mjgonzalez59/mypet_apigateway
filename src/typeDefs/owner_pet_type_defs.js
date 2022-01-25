const { gql } = require("apollo-server");

const ownerPetTypeDefs = gql `

    input OwnerInput {
        userId: Int!
        idOwner: String! 
        name: String! 
        phone: String! 
        email: String! 
    }
    
    type Owner {
        idOwner: String! 
        name: String! 
        phone: String! 
        email: String! 
    }

    input PetInput {
        userId: Int!
        name: String! 
        type: String! 
        breed: String! 
        gender: String!
        weight: Float! 
        size: Float!
        birthDate: String!
        idOwner: String! 
    }

    type Pet {
        id: String! 
        name: String! 
        type: String! 
        breed: String! 
        gender: String! 
        weight: Float! 
        size: Float! 
        birthDate: String! 
        idOwner: String! 
    }

    type petListByOwner {
        idOwner: String! 
        name: String! 
        phone: String! 
        email: String! 
        pets: [Pet!]
    }

    extend type Mutation {
        createOwner(ownerInput: OwnerInput!): Owner!
        createPet(petInput: PetInput!): Pet!
    }

    extend type Query {
        getPetListByOwner(idOwner: String!): petListByOwner!
    }

`;

module.exports = ownerPetTypeDefs;

