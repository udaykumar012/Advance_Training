function compose(f,g) {
  // Compose the two functions here!
  return function(...a){
    return f(g(...a))
  }
}