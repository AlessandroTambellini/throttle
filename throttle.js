function throttle(callback, delay) {
  let timerID;
  let lastCalledTime = 0;
  
  function throttledFunction(...args) {
    const currentTime = Date.now();
    const timeSinceLastCall = currentTime - lastCalledTime;
    const delayRemaining = delay - timeSinceLastCall;

    if (delayRemaining <= 0) {
      lastCalledTime = currentTime;
      callback.call(this, ...args);
    } else {
      clearTimeout(timerID);
      timerID = setInterval(() => {
        lastCalledTime = Date.now();
        callback.call(this, ...args);
      }, delayRemaining);
    }
  }

  throttledFunction.cancel = function() {
    clearTimeout(timerID);
  }

  return throttledFunction;
}