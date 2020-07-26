function userResgistration(request, response){
    console.log('Request received for registration', request.body);
    return response.send(` ${request.body.userName} IS A BADASSS`)
};

module.exports = userResgistration;