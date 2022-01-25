const { RESTDataSource } = require("apollo-datasource-rest");
const server = require("../server");

const serverConfig = require("../server");

class AuthInvoiceAPI extends RESTDataSource {

    constructor(){
        super();
        this.baseURL = serverConfig.auth_invoice_url;
    }

    async authRequest(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/login/`, credentials);
    }

    async refreshToken(token) {
        token = new Object(JSON.parse(JSON.stringify({refresh: token})));
        return await this.post(`/refresh/`, token);
    }

    async createUser(user){
        user = new Object(JSON.parse(JSON.stringify(user)));
        return await this.post(`/user/`, user);
    }

    async createService(service){
        service = new Object(JSON.parse(JSON.stringify(service)));
        return await this.post(`/service/`, service);
    }

    async createInvoice(invoice){
        invoice = new Object(JSON.parse(JSON.stringify(invoice)));
        return await this.post(`/invoice/`, invoice);
    }

    async getDetailsPerInvoice(idInvoice){
        return await this.get(`/invoice/${idInvoice}/`);
    }

    async getAllServicesList(){
        return await this.get(`/service/list/`);
    }

    async getAllInvoicesList(){
        return await this.get(`/invoice/list/`);
    }


}

module.exports = AuthInvoiceAPI;
