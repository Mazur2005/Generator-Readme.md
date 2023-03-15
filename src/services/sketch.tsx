export const sketch = `# From_Menu_Quiz

[![npm  - v8.19.2](https://img.shields.io/badge/npm_-v8.19.2-2ea44f?logo=npm)](https://www.npmjs.com/package/npm/v/8.19.2) [![vite - v4.1.1](https://img.shields.io/badge/vite-v4.1.1-2ea44f?logo=vite&logoColor=yellow)](https://www.npmjs.com/package/npm/v/8.19.2) [![java script - ES6](https://img.shields.io/badge/java_script-ES6-2ea44f?logo=javaScript)](https://www.npmjs.com/package/npm/v/8.19.2)

In this project, I focused on writing good code, not on design.


This project has three steps:

1. First it is a form with simple REGEX validation.
2. Secondly, it's a menu with a weather API and the ability to choose a quiz.
3. Thirdly it is a quiz but with questions and answers in random order.

 
# GitHub page

## [Anchor to view page](https://mazur2005.github.io/Form_Menu_Quiz/)


# API Reference

${"``` bash\n  https://openweathermap.org/api \n```"}

| Parameter         | Type     | Description                                                                                                                                         |
| :---------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| ${`api_key, api_id`} | ${`string`} | **Path**. [Form_Menu_Quiz\src\form\js\fetch_API_weather.js](https://github.com/Mazur2005/Form_Menu_Quiz/blob/main/src/form/js/fetch_API_weather.js) |


# Documentation

## Form

1. Has validation using [RegEx.](https://github.com/Mazur2005/Form_Menu_Quiz/blob/main/src/form/js/RegEx.js)
2. Nick name and city will be set and remember in cookie.
3. Weather API sending a question with the city selected by the user.

   - In this part, JS checks the response.
   - When bad request comes from user, commit error.
   - But when the problem comes from server or code. This API will disappear.


## Menu

- Data:

  - name of day.
  - hour.
  - dd/mm/yyyy.



- API:

  - City name.
  - The icon displays the current weather.
  - Weather.
  - Temperature.
  - Pressure.
  - **Path**. [Form_Menu_Quiz\src\menu\js\weather_API.js](https://github.com/Mazur2005/Form_Menu_Quiz/blob/main/src/menu/js/weather_API.js).

  
- Welcoming user using his nickname and show rules from quiz.



- Three options quiz:

  - HTML
  - CSS
  - JS


- Code will verify your choice and will be remember on cookie.
- You can use as many question as you what, but every question has to has four answers. The default quantity is ten.
  - **Path**. [Form_Menu_Quiz\src\menu\js\question_quiz](https://github.com/Mazur2005/Form_Menu_Quiz/tree/main/src/menu/js/question_quiz)

## Quiz

1. User has only one try to found a good answer. When user selected answer, background color will be changed for 0.2 seconds, for another color depends on answer:

   - Good --- blue
   - Bad --- red


2. The timer will be reset when you choose answer or skip the question, and will be stopped when all questions will be done.


3. For the last, user will see a result quiz, points and percentage. The user will have 2 options:

   - return --- it means return to the menu.
   - repeat --- it means to repeat this quiz again.


4. Questions and answers are random every time :).

![Funny gif](https://media.giphy.com/media/ne3xrYlWtQFtC/giphy.gif)


# Installation

The easiest way to use this project is to install it globally as a Node command line program. Run the following command in Terminal:

${"``` bash\n $ npm install --global \n```"}

Or, you can install standard locally, for use in a single project:

${"``` bash\n $ npm install --save-dev \n```"}


# Optimizations

In this project It have been used compiler Vite

![Vite compiler](https://blog.logrocket.com/wp-content/uploads/2022/11/configuring-service-workers-vitw-2.8.png)


# Usage

After you've installed node, you should be able to use the program. The simplest use case would be run local server:

${"``` bash\n $ git run dev \n```"}

You don't have to build project with Vite because this process is done, but if you want fork this project remember to run build to update yours changes.

${"``` bash\n $ git run build \n```"}
  
Or you can open live server and build project in the same time.

${"``` bash\n $ git run preview \n```"}


# Feedback

If you have any feedback, please reach out to me at mazurarkadiusz2005@gmail.com


# Authors

- [Project](https://github.com/Mazur2005)
- [Icon-vite](https://codepen.io/davideast/pen/yLELbvm)
- [Icons](https://www.nicepng.com/ourpic/u2q8w7a9w7r5r5q8_html-css-icon-png/)
- [Gif](https://giphy.com/explore/random-number)`;
