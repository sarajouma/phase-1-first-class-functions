function receivesAFunction(callbackFun){
    callbackFun();
}

function returnsANamedFunction() {
    return function namedFunction() {

    };
  }

  function returnsAnAnonymousFunction() {
    return function() {
      
    };
  }