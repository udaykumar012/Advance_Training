function createSecretHolder(secret) {
  return{
    getSecret:function(){
      return secret;
    },
    setSecret:function(){
      secret=arguments[0];
    }
  }
}