import UserWelcome from "./userWelcome";
export default class ServerRouter{
    constructor() {
        this.state={
            serverRouter:require('express').Router()
        }
        this.getRouter();
        this.initiateAPI();
    }

    getRouter(){
        return this.state.serverRouter;
    }

    initiateAPI(){
        let router=this.state.serverRouter;

        router.get('/welcome',(request,response)=>{
           new UserWelcome(request,response);
        });
    }

}