
export default class UserWelcome{
    constructor(request,response) {
        this.state={
            welcomeRequest:request,
            welcomeResponse:response
        }
        this.initiateWelcome()
    }

    initiateWelcome(){
        let welcome_message={message:'UserWelcome to starting API'}
        return this.state.welcomeResponse.send(welcome_message);
    }
}