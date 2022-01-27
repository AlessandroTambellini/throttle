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

  throttledFunction.cancel = function () {
    clearTimeout(timerID);
  };

  return throttledFunction;
}

// This is an example to show the utility of the method call() inside throttledFunction
const object = {
  name: "Alessandro Tambellini",
  callback() {
    console.log(this.name);
  },
};

object.throttled = throttle(object.callback, 1000);
object.throttled();
