# MateriALL
MateriALL is a Google Docs Add-on that takes teachers’ existing slide decks and automatically generates worksheet questions for use in the classroom.

It was created as JavaScript app by my final project team for the UC Berkeley School of Information Master of Information Management and Systems. This project was selected as an Outstanding Final Project from the entire graduate class. After I learned how to use React, I decided to refactor the project based on [React-Google-Apps-Script](https://github.com/enuchi/React-Google-Apps-Script). Through this project, I practiced using React and I built the foundation to implement the additional features easily that my team previously designed.

## Project Demo

![MateriALL Demo](https://github.com/eyjanice/materiall/assets/10818121/d6be4214-c60e-400c-ba52-9d91fe38213d)

## Architecture Overview

![MateriALL Diagram](https://github.com/eyjanice/materiall/assets/10818121/a26e68ab-e61c-4c27-8adb-e291a9bfea7c)

This diagram shows how MateriALL components interacts with one another. A user first opens the Sidebar App to interact with MateriALL. Google Slide deck is retrieved from the submitted link, and the sidebar app shows retrieved data. Then, the user selects source texts to create a question. Those selected source texts are saved in local storage and loaded to Modal App for the user to create a question. Modal App sends loaded texts to backend API to retrieve generated questions and the Modal App sends and saves questions to Google Docs.

![MateriALL Component Diagram](https://github.com/eyjanice/materiall/assets/10818121/be1c147a-0884-485d-9914-0f4749de6f1a)

The Sidebar App and the Modal App are two different React apps. In the Sidebar App, all texts from each page of the slide deck is loaded to be selected. Those selected texts are sent to Modal App, and go through loading page to Question Editor. When a question type is selected, that particular Question Type Input is rendered, and that component has corresponding workflow.
## Project Status

This project is currently in development.

MateriALL lets teachers create a worksheet based on contents sourced from their Google Slides. They can create true-or-false questions, and fill-in-the-blank questions.

I am currently implementing a support for multiple choice questions and short answer questions. I plan on using generative AI to generate multiple choice questions and short answer questions.
## Reflection
#### What Went Well
-   I rebuilt the original imperative JavaScript app with React based on the open source template by enuchi.
-   I organized components and their states effectively to keep the components decoupled and yet their data in sync throughout different windows.
-   I implemented connection to the backend API to get the basic NLP model that was linked to the original app.
-   I adjusted and improved some designs so that it is more intuitive and reasonable.
-   I learned how to set up authorizations for Google OAuth and how to build with Google App Script.

#### What Could Have Been Better

-   Generative AI was not available when we built our first version, and, to focus on learning React, I use the original backend without AI to create this MateriALL React app. But MateriALL would be able to create better questions and options with language models, especially multiple questions and short answer questions.
-   I did my best to manage components, but with more research and practice, I might have be able to minimize the repetitive codes.
-   The format of the produced worksheet is basic at the moment.

#### Action Item

-   Finish multiple choice question creation process, using the current backend API.
-   Research how to use language models inside of Google Add-On app and implement it to MateriALL
-   Find out way to get good results to create good questions using prompt engineering so that users can create good worksheets with less time and energy.
-   Check back with my team for feedback and ideas.
