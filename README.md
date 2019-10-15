# Miscellaneous code for the micro:bit

## 1. Button-hold event

The file [microbit-button-hold.js](microbit-button-hold.js) shows a simple way to detect and use the event of a button being held down for some amount of time. Note the following:
1. The variables outside the `forever` loop represent the extra _state_ we need to keep to accomplish what we want.
2. Since this event is not exposed by the software stack as a function, say `input.onButtonHold(Button.A, 2000)`, we cannot clear it except by resetting `buttonAWasHeld` back to `false`. 
3. We do not reset `buttonAHeld` back to `false` until we detect that the button was released, because then we would continue generating button-hold events while the button is held down. Of course, if that's the behavior we want, we would clear it every time it is detected that the button is in a pressed state and without waiting for the button to be released. _Try to modify the code to achieve that._
4. Correspondingly, the handler function starts executing whether or not the button that was held for the necessary amount of time is still being pressed or has been released. Alternatively, we can wait to trigger the handler until the button is released. _Try to modify the code to achieve that._
5. Upon the button being released, the button-pressed event (set with `input.onButtonPressed(Button.A, ...)`) will also be detected. We may have to keep extra state to distinguish between button press and button held.

