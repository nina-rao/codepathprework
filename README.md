# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Nina Rao**

Time spent: **3.5** hours spent in total

Link to project: (https://glitch.com/edit/#!/spangled-oasis-mackerel)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
These gifs show standard gameplay including starting the game, sequences being played, the user guessing (correctly & incorrectly), the user being allowed to keep playing as they haven't maxed out strikes, sequences repeating after incorrect guesses, the user winning the game, and the user losing the game after more than 2 strikes.


![gamestart](https://user-images.githubusercontent.com/72675759/161359847-6b60154b-3b94-4c4f-b73f-5c99d3078d0f.gif)


![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/72675759/161360118-fcaae033-48c5-4d77-a6c3-608002494601.gif)

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/72675759/161360493-d06d5458-02e1-4768-b396-bbc28e012c96.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I utilized the following resources to help supplement my development (all work is my own):
https://www.w3schools.com/tags/tag_img.asp,
https://www.quackit.com/css/css_color_codes.cfm,
www.stackoverflow.com

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
While the guided prework made creating this project easier and more streamlined, when it came time to add optional features, I encountered some difficulties. Changing the playback speeds after each consecutive turn gave me a few difficulties because at first I wasn't sure where to decrement the hold time. I went back through the functions provided by CodePath and made sure I fully understood how input would be processed in playClueSequence(). Improving my comprehension as well as using the console debugger helped me find the solution. Another problem I encountered was randomizing the sequence using JavaScript's Math.random function. While I was familiar with random number generation in languages such as C++ and Java, I found I had to read documentation on Math.random and do some testing with it before actually implementing it in my program. Once I knew how it worked, I did further research as I knew the functions in script.js access the clue sequence by iterating through indexes in an array, I wanted to be able to populate an array using the random number generation. It took some playing around, but with my newly gained knowledge in working with JavaScript's Math library and data structures, I solved the problem. The final optional feature that gave me trouble was adding images to the buttons. Alignment, sizing, and styling of images in CSS and HTML were new to me. After reading the link provided about the img tab and some further online research, I was able to come up with a way to put images on buttons while not altering the layout of other elements. Upon completing my project, I was faced with a few challenges in submission. In lieue of using GitHub Desktop to upload my project files, I decided to experiment with Glitch's native import/export tool. I was a bit lost on how to proceed with uploading the files at first, but after trial and error, I was able to create a pull request with my updated files and merge them onto the main branch. Making the gifs also posed a challenge, as some of the GIF softwares provided were not working for me. Ultimately, I decided to use a screen recording software to create videos, then converted the videos to gifs. In the future, I would like to find a GIF software that works for me to expedite this process.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
 - How can we dynamically import data onto a website? For example, if we wanted to dynamically load images from the web, how would we begin to develop the backend to support this?
- How can websites be made scalable for various screen sizes: smartphones, tablets, laptops, etc? How can we minimize repetitive work done creating the UI while also maximizing the ways it can be viewed?
- How do web developers utilize APIs to create unique sites and services? How is data aggregated and cleaned to make it useful for development purposes?
- What is the difference between a framework and a library? What are the top frameworks and libraries used in industry today, how are they implemented, and what are the use cases?
- If data is being passed over networks to be used in a website, how do we ensure data security? What are the various practices and protocols used by web developers to reduce the risk of software vulnerabilities?
- Technology and software aside, how do web developers hone their sense of design? What are the fundamentals of UX design theory that a developer should keep in mind while programming?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
Given more time on this prework project, I would first attempt to reduce the small bugs in the program and improve user experience as a whole. In regards to the former, I noticed a few small glitches and edge case bugs that were not ideal. For example, being able to select a button at any given point in the game, including before starting and during the playing of a sequence, makes the game less official looking and at times even interrupts flow of gameplay. I would add more attributes to the buttons to ensure that buttons cannot be clicked on unless it is the player's turn to repeatthe sequence. Through the added attributes as well as the addition of functions that define appropriate gameplay behavior, the game would run much smoother. In addition, I would have loved to expand on the optional feature of making the images hidden until the user clicked on them, but unfortunately I was unable to implement that in the time I set aside for this application. As someone who appreciates sound design, I would also likely look into how to calculate musical note frequencies so that I could specifically set the button sounds to more pleasing notes. In the same vein, I would like to implement additional sound effects into the game. For example, a happy tune that plays when you win and a sad tune that plays when you lose. To make the game aesthetically pleasing, I would like to learn how to incorporate animations in web dev to perhaps add some confetti and celebratory animations to the screen when the user wins the game. In this project I learned how to use JavaScript alert boxes, and I found that I had to manually close the window everytime. To save user energy and minimize mouse movement, I would do more research on JavaScript to implement alert boxes that automatically close after a specified duration of time. A game feature I would implement if I had the time would be a super-hard mode. The super-hard mode would consist of settings that allow the user to play with either sound only or visuals only. Taking away one of the sensory elements of this game would an exciting challenge factor and it would be interesting to implement by setting variables for these various states of gameplay and creating new functions that support more than one way to play the game. 



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Nina Rao]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
