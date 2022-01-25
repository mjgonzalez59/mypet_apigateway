ownerPetResolver = {
    Query: {
        getPetListByOwner: async (_, {idOwner}, {dataSources}) => {
            const ownerData = await dataSources.ownerPetAPI.getOwner(idOwner);
            const petsList = await dataSources.ownerPetAPI.getPetListByOwner(idOwner);
            let petListByOwner = {
                idOwner: ownerData.idOwner,
                name: ownerData.name,
                phone: ownerData.phone,
                email: ownerData.email,
                pets: petsList
            }
            return petListByOwner;
        },
    },
    Mutation: {
        createOwner: async (_, {ownerInput}, {dataSources, userIdToken}) => {
            if(ownerInput.userId == userIdToken){
                return await dataSources.ownerPetAPI.createOwner(ownerInput);
            } else {
                return null; 
            }
        },

        createPet: async (_, {petInput}, {dataSources, userIdToken}) => {
            if(petInput.userId == userIdToken){
                return await dataSources.ownerPetAPI.createPet(petInput);
            } else {
                return null;
            }
        },
    },
};

module.exports = ownerPetResolver;
