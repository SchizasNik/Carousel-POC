# Latana Carousel POC

This POC was created as a part of the hiring process for Latana. The objective was mainly the carousel component, but the whole layout shown in figma was created. The 'styled components' library was used for styling, coupled with a raw css file setting some defaults. In terms of responsiveness, I opted for a fluid design, adapting all intermediate screen sizes between the two depicted in figma. Regarding testing, only two cases were included, just to point out that RTL, while a great library, is not really suitable in our case because JSDOM does not support layout. We would need something like puppeteer to properly test window resizes and slide appearance on click.

# Project Commands

Project was built using yarn but you can also use npm without a problem.

1. Start it - yarn start
2. Run Tests to check that RTL is not suitable in this case - yarn run test

# Assumptions / Info

1. Public URL will always have a trailing slash.
2. Added all slides twice in order to be able to see more of the carousel.
3. Slides will have the same size.
4. If the entirety of the slide is not visible (including the container) the slide will be faded. (can change easily)
5. Slide Images would follow design guidelines.
6. Would have used Typescript if this was not a POC/assignment/small in size.
7. Slide/Data configuration is not validated.
8. CTA redirect is not included, could have easily been included in the data configuration.
9. Bold question in figma is by design (different than the others) and not by accident.

# Possible enhancements

1. Fade carousel in (with loader before) after images have loaded.
2. Lazy loading images and/or divs as you scroll (with a look-ahead).
3. Slide data configuration is now static. Could be something dynamic so that changes in content do not necessitate code deployments.
4. In a live project, I would showcase the new component in storybook - https://storybook.js.org/
5. Test in mobile browsers and make the needed adjustments.
