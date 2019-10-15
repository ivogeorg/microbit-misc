// File: microbutton-hold-event
// Auth: ivogeorg@gmai.com
// Date: 2019-10-15

function buttonAHoldHandler(): void {
    basic.showString("Button A was held for 2 sec");
}

const holdTime: number = 2000; // ms
let startTime: number = 0;
let buttonAHeld: boolean = false; // button A is currently being held down
let buttonAWasHeld: boolean = false; // button A was held for holdTime

basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (!buttonAHeld) {
            // start timer
            buttonAHeld = true;
            startTime = game.currentTime();
        } else {
            if (game.currentTime() - startTime >= holdTime) {
                // hold time reached, so set the event
                buttonAWasHeld = true;
            }
        }
    } else {
        if (buttonAHeld) {
            // button A has been released
            buttonAHeld = false;
        }
    }

    if (buttonAWasHeld) {
        // execute the "event handler" and clear the event
        buttonAHoldHandler();
        buttonAWasHeld = false;
    }
})



