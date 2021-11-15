# Office Hours Project

* [Background](#background)
* [About the repo](#about-the-repo)
* [Assignment](#assignment)

## Background

At [Designlab](https://trydesignlab.com), our mission is to train and empower creators all over the world. We do this by providing flexible yet rigorous creative skills education in the form of online courses that involve hands-on projects and 1-on-1 mentorship from experts.

At the core of the Designlab course experience are 1-on-1 video calls between mentors and students, or "sessions". Throughout the lifetime of the company, [hundreds of mentors](https://trydesignlab.com/mentors/) in our network have worked with thousands of students and conducted more than 135,000 sessions!

When a student begins a Designlab course, we match them with a mentor, and the student works with that mentor exclusively throughout the duration of their course. For this project, you will be building a page for a fictional feature called "Mentor Office Hours", which allows students to browse several mentors who are available for on-demand sessions.


## About The Repo

### Initial setup

1) Install [npm](https://www.npmjs.com/get-npm) if you don't have it installed already.

2) Clone this repo to your machine.

3) From the repo root directory, run `npm install` to complete the setup.


### Running the project
A simple http server compiles and serves the project files locally at [http://0.0.0.0:8080/](http://0.0.0.0:8080/) or [http://localhost:8080/](http://localhost:8080/).

While it's running, it will watch for changes in the project's Sass files (in `static/scss`) & JS files (in `react/`) and recompile/rebuild them automatically.

To simultaneously build/watch sass/react and run the simple web server, run this command from the repo root directory:
```
npm start
```

### Design system
We've included a demo page for our [LUMA design system](http://localhost:8080/luma.html) that includes most of the modules that make up the Designlab public website. As you work to utilize, modify, and/or expand the design system to complete the project, the variables/mixins/utility classes in `static/scss/bem/base/` will likely be helpful to you.

### Example pages
Also included are simplified versions of our [homepage](http://localhost:8080) and our [Figma 101 Email Course page](http://localhost:8080/figma.html) to demonstrate how the LUMA modules are used. Note that these pages are stripped down to mostly just HTML/CSS, so interactions such as form submissions will not work.

### React
Rather than working with a single-page application, for this project you will need to build and [render React component(s)](https://reactjs.org/docs/add-react-to-a-website.html) to an otherwise plain/static web page. An example React component is included for the [toggle](http://localhost:8080/luma.html#toggle) module.


## Assignment

### Prompt

Build the Mentor Office Hours page based on [this mockup in Figma](https://www.figma.com/file/SmD142dTTJn4hM12ZajM3n/Mentor-Office-Hours-Project-for-Emmanuel), starting with the included `office_hours.html` file.

**Please focus your effort on the markup and styling** needed to implement the visual details of the design before moving on to the interactive features. We will be paying closer attention to your HTML/SCSS than your Javascript.

There are three interactive features:
* The ability to open/close the "Availability" accordions for each mentor (only content for one of them appears in the mockup, so you can make up the content for the others).
* The ability to open/close the drop-down site navigation menu that's only accessible on smaller screen widths
* The button to show all mentors on smaller screen widths (by default, only 3 mentors are shown)

You are free to use and/or modify any of the initial code in the repo as you see fit, as long as you follow the guidelines below.

**Guidelines:**

* You must utilize the existing modules/classes from our design system wherever you feel it's appropriate. **The most important part of this project will be how you decide what to reuse, what to modify, and/or what to add to the existing HTML/SCSS**.
* To save time, feel free to duplicate/hard-code the markup for repeated elements (i.e. the mentor grid items) — we're most concerned about how you structure the HTML/SCSS and use the design system to implement the mockup.
* You must use React to implement at least one of the three interactive features. You may use jQuery for the other two, if you'd like.
* We must be able to view your work by just running `npm start` (do not add other npm packages) and visiting [this link](http://localhost:8080/office_hours.html).
* You should spend no more than six hours working on the project. If there are additional changes you'd make if you had more time, you'll have an opportunity to discuss these with us on a call that we'll schedule to review your work.


**Additional notes:**

* Assets for some of the images from the mockup are already included in the repo, for example, assets for eight out of the nine mentors are included because those mentors appear in the homepage example.
* For other assets that are not included, you will need to export them from Figma and add them to the repo.


### Deliverable

1. Create a new branch off `main` for your work
2. Submit a PR to merge your branch into the `main` branch
3. Add @unformatt as a reviewer on the PR and also send an email to matt@trydesignlab.com once you've done this

---

Thanks for your time, and we hope you enjoy the project! We're looking forward to seeing your work and discussing further :)
