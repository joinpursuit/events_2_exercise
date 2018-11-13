# To-Do: Make To-Do

It's time to makeay, we're going to construct a to-do list. Our app will have the following items:

- An `h1` title (e.g. "Reed's To-Dos").
- A single `ul` tag, empty when the page is first loaded.
- A `form` for the user to add a new to-do, with a single text `input` and a `submit` button.

And the following functionalities:

- When the user writes something in the `form`'s text input area and clicks `submit`, the `ul` should update with a new `li` item at the bottom of the list. The page **should not refresh**.
- When the user writes _nothing_ in the `form`'s text input area and clicks `submit`, an error message (inside a `p` tag) should appear below the form.
- When the user clicks on one of the `li` items, the item should be crossed out, indicating that that to-do is complete.

## Bonus Tasks

- Implement a `button` tag next to each `li` that removes that `li` tag entirely.
  - **Extra bonus**: Add validation to this button so it _only_ removes to-dos which have been crossed out. Otherwise, send an `alert` to the window with an error message.
- Add the ability to add multiple to-dos if the user submits a text input with multiple lines. Each line should be a new to-do.
- Style your app using a simple, clear aesthetic. Take a look at [Evernote](https://www.google.com/search?q=evernote&rlz=1C5CHFA_enUS748US752&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj8iIfq28LeAhXGq1MKHZZAAMkQ_AUIFSgD&biw=1367&bih=749#imgrc=5L6K_LkczUEbHM:) and [Trello](https://www.google.com/search?rlz=1C5CHFA_enUS748US752&biw=1367&bih=749&tbm=isch&sa=1&ei=4hTjW6WLCYOk_Qa4iZ-4CA&q=trello&oq=trello&gs_l=img.3..0j0i67j0l8.53892.54638..54927...0.0..0.100.358.5j1......1....1..gws-wiz-img.......35i39.7fnwI2IxJX0#imgrc=frlWF-4h_4s4BM:) for inspiration.
