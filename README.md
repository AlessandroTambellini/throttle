# throttle
function to control and limit the frequence a function is called.

## how does it works

The first time the throttled function is called, it is immediately executed. The next times, it is executed once per delay specified. The data passed to the function to be executed is that of the most recent call.

example 1
```
const throttledFetch = throttle(fetchUserData, 2000);
myElement.addEventListener("click", () => throttledFetch(userID));

// currentTime = 0ms, user clicks => the function fires immediately
// currentTime = 1000ms, user clicks
// currentTime = 2000ms, function fires
// currentTime = 2500ms, user clicks
// currentTime = 2600ms, user clicks
// currentTime = 3000ms, user clicks
// currentTime = 3400ms, user clicks
// currentTime = 4500ms, function fires with the most recent parameters
```

example 2
```
const throttledConsole = throttle(console.log, 3000);
document.addEventListener("keypress", () => throttledConsole(currentTime));

// currentTime = 0ms, user starts typing => the function fires immediately
// currentTime = 1000ms, user stops typing
// currentTime = 2000ms, user start again typing
// currentTime = 3000ms, function fires with the most recent parameters
// currentTime = 5000ms, user stops typing
// currentTime = 8000ms, function fires for the last time.
```

The only caveat is to not use a delay greater than the time elapsed from 1/1/1970 :wink:
