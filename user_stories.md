User stories
As a user, I want to select one of three random images to vote, with each image having a name I can see. I want the instructions to use the page to be clear and helpful. I don’t want any of those images to be among the three images that came before it.
As a user, I want to see each of the 20 images at least once.
As a user, I do not want to click through forever. I want to make one selection per image, even if I did not select that image. I want the option to select each image. I want to click 25 times.
As the client BusMall, I want to keep track of how many times each element was selected AND how many times that image was displayed. I can make a ratio of clicks/display to give me insight into an image’s popularity vs its prevalence.
As a developer, I want to build a user-friendly website.
As a developer, I want to to create a constructor to display 3 random images of the 20 per click, making sure that none of those 3 elements was featured in the last array of choices. Each image will have its title visible and its alt text hoverable.
As a developer, I want to create a simple button for each picture shown to vote for its image, but only one of those buttons may be selected. I want to include clear instructions for users of all abilities.
As a developer, I want to build a constructor function to create an object for each image. Each object should have properties for “id name,” filepath, number of times it has been shown, and number of times it has been clicked. No image should be shown more than (25+1)/2 times, or 13 times. Assuming it is in the first and last set, this is the maximum number of times an image can be displayed without consecutive repeats.
As a developer, I want to build methods to update each number of clicks and displays for each object.
As a developer, I want to turn off the event listener for the button after a user has clicked 25 times. After that, I want to display a list with the name of each image, number of times it has been shown, and number of times it has been clicked. 
