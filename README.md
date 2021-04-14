# Simple To-Do List App made using React Native and Expo

## How to run the demo

To start the demo, type in npm start inside the RN-Challenge directory. 

Note: For best viewing experience, please use the Expo Go app to test the app (I used Expo Go and the IOS emulator for the development of this app)

1. Homescreen
- In the homepage, you will see three distinct components
- First is the search bar, where you can search by name of task, date, and categories
- Second is the categories cards where you can see the number of tasks you have per category
- Third is the list of tasks that you have today, there's also a 'View All' button which will take you to the second screen
- -----------------------------------------
2. Tasks Screen
- In the second screen, you will see a calendar strip at the top of the page which you can use to navigate between the dates
- Below that is the list of tasks that you have for that particular date
- You also have an option to show or hide the tasks you have completed by clicking on the button at the top right corner
- Note: Tasks that are overdue will be highlighted red
- -----------------------------------------
3. Adding, Editing, Deleting, and Completing Tasks Functionality
- There's a blue plus button at the bottom right corner which will pop up a modal that is used to add new tasks
- In the modal, you can specify the task name, date, and choose between the available categories,
- After you're done, you can click on "Create Task" and then the task will be created
- I also added a validation for adding task. If a user doesn't specify a task name, an alert will appear.
- To edit a task, simply click on the task name and a similar modal will pop up
- To delete a task, you can click on the blue X button on the right side of each task, and then an alert will pop up to ask users for confirmation.
- To indicate that you have completed a task, you can click on the gray circle on each task and it will turn green to indicate that you have completed that task. The text will also change to a lighter color and there will be a line striking through it.

## Demo 
[![Demo](https://img.youtube.com/vi/tg7vzaab8Jg/0.jpg)](https://www.youtube.com/watch?v=tg7vzaab8Jg&feature=youtu.be)
