def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    basic.show_string("Life is a Garden...")
    basic.show_leds("""
        . . # . .
                . # . # .
                . . # . .
                . . # # .
                . . # . .
    """)
    basic.pause(1000)
    basic.clear_screen()
    if input.button_is_pressed(Button.A):
        basic.show_string("Friendships are the frogs")
        basic.clear_screen()
    elif input.is_gesture(Gesture.SHAKE):
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . # # .
                        . . # . #
        """)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . # . . .
                        . # # . .
                        . # . # .
        """)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        # . . . .
                        # # . . .
                        # . # . .
        """)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        # . . . .
                        . # . . .
        """)
basic.forever(on_forever)
