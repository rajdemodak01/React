import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


// import { Client, Account, ID } from "appwrite";

// const client = new Client()
//     .setProject('<PROJECT_ID>'); // Your project ID

// const account = new Account(client);

// const promise = account.create('[USER_ID]', 'email@example.com', '');

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });

//above code is imported from documentation of appwrite(sign up code), we can use this code for creating user. But later if we want to shirt from appwrite we will face issues. That's why we are creating our own class/service. The functionality will be same. There they use promise, here we will use async
//if backedn servise is changed in future, then the changes be only done in this file




// import { Client, Account } from "appwrite";

// const client = new Client()
//     .setProject('<PROJECT_ID>'); // Your project ID

// const account = new Account(client);

// const promise = account.createEmailPasswordSession('email@example.com', 'password');

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });

//similarly this is log in code in the documentation of appwrite


// building class
export class AuthService {
    client=new Client;
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account=new Account(this.client)
    }


    //if later we use another baas other than appwrite, we have to change the inside os these functions, not these parameters, 
    //this is used in production grade application
    async createAccount({email,password,name}){
        //account creation may fail that's why we are using this try catch block(This is not mentioned in the appwrite documnet)
        try {
            //we have to pass a unique user id (as mentioned in the document of appwrite)
            console.log("inside create account", email, password, name);
            
            const userAccount=await this.account.create(ID.unique(),email,password,name)
            if (userAccount) {
                //call another method
                //if account is created successfully we also want to log in directly
                return this.login({email,password})
            }else{
                console.log("Account not created");
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite serive :: createAccount :: error", error);
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
            console.log("if this not run means you have to do \"createEmailPasswordSession\" instead of \"createEmailSession\"");
            throw error
        }
    }

    async getCurrentuser(){
        //if account present return that accout, else give erro
        try {
            //how to get current user is also defined in the documentation of appwrite(account.get())
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        return null;
    }
    async logout() {
        try {
            //this is also defined in the documentation. that's why we know where to use which method to do these things
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService=new AuthService();//creating a object

// Exporting service/object
export default authService