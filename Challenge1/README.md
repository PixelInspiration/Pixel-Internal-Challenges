# Challenge1

This app listens for keyboard events so it can detect Barcodes that are entered on a Bluetooth Barcode Reader (detected and operates as a Keyboard)

A series of Keys entered in short succession, optionally terminated by the Enter key, are detected as a scanned Barcode.
This is the required functionality, this can not stop working.

To simulate a Barcode reader a button has been added to the page, this sends a short sequence of random keys followed by 'Enter'.

Problem:
When we display an input field we want the user to manually enter some information using a keyboard (softkeys on iPad or Tablet).
Whilst a user is entering information into the input field we don't want the function **triggerBarcode** to be fired.

Bonus:
Your solution should be simple, it is possible to solve this with a single line of code.

