function buttonAHoldHandler(): void {
    basic.showString("Button A was held for 2 sec");
}

basic.forever(function () {
    const holdTime: number = 2000; // ms
    let startTime: number = 0;
    let buttonAHeld: boolean = false; // button A is currently being held down
    let buttonAWasHeld: boolean = false; // button A was held for holdTime

    if (input.buttonIsPressed(Button.A)) {
        //        basic.showIcon(IconNames.Yes);
        if (!buttonAHeld) {
            basic.showIcon(IconNames.No);
            // start timer
            buttonAHeld = true;
            startTime = game.currentTime();
        } else {
            basic.clearScreen(); // <<== SREEN NEVER CLEARED
            basic.showIcon(IconNames.Yes); // <<== THIS NEVER SHOWS
            //            basic.showNumber(game.currentTime()); // <<== THIS NEVER SHOWS
            if (game.currentTime() - startTime >= holdTime) {
                basic.showIcon(IconNames.Heart); // <<== THIS NEVER SHOWS
                // hold time reached, so save the "event"
                buttonAWasHeld = true;
            }
        }
    } else {
        //        basic.showIcon(IconNames.No);
        if (buttonAHeld) {
            // button A has been released
            buttonAHeld = false;
        }
    }

    if (buttonAWasHeld) {
        // execute the "event handler" and clear
        basic.showIcon(IconNames.Yes);
        //        buttonAHoldHandler();
        buttonAWasHeld = false;
    }
})


