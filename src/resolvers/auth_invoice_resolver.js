const userResolver = {
    Query: {
        detailsPerInvoice: async(_, {idInvoice}, {dataSources}) => {
            return await dataSources.authInvoiceAPI.getDetailsPerInvoice(idInvoice);
        },
        
        allServicesList: async(_, temp, {dataSources}) => {
            return await dataSources.authInvoiceAPI.getAllServicesList();
        },    

        allInvoicesList: async(_, temp, {dataSources}) => {
            return await dataSources.authInvoiceAPI.getAllInvoicesList();
        },
    },
    Mutation: {
        logIn: async (_, { credentials }, { dataSources }) => {
            return await dataSources.authInvoiceAPI.authRequest(credentials);
        },
        refreshToken: async (_, {refresh}, {dataSources}) => {
            return await dataSources.authInvoiceAPI.refreshToken(refresh);
        },
        signUpUser: async(_, {userInput}, {dataSources}) => {
            return await dataSources.authInvoiceAPI.createUser(userInput);
        },

        serviceCreation: async(_, {serviceInput}, {dataSources, userIdToken}) => {
            if(serviceInput.userId == userIdToken){
                return await dataSources.authInvoiceAPI.createService(serviceInput);
            } else {
                return null;
            }
            
        },

        invoiceCreation: async(_, {invoiceInput}, {dataSources, userIdToken}) => {
            if(invoiceInput.createdByUserId == userIdToken){
                return await dataSources.authInvoiceAPI.createInvoice(invoiceInput);
            } else {
                return null;
            }
            
        },



        
    }
};

module.exports = userResolver;
