const { RESTDataSource } = require("apollo-datasource-rest");

const serverConfig = require("../server");

class OwnerPetAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.owner_pet_url;
    }

    async createOwner(owner){
        owner = new Object(JSON.parse(JSON.stringify(owner)));
        return await this.post(`/owner/`, owner);
    }

    async createPet(pet){
        pet = new Object(JSON.parse(JSON.stringify(pet)));
        return await this.post(`/pet/`, pet);
    }

    async getOwner(idOwner){
        return await this.get(`/owner/${idOwner}/`);
    }

    async getPetListByOwner(idOwner){
        return await this.get(`/pets/${idOwner}/`);
    }

}

module.exports = OwnerPetAPI;
