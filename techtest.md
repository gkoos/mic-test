This test is very simple as the intention is for us to see how you think and how you structure your
code and your tests. We would like you to create a very simple Ruby on rails application that has
a single page with a form to submit a customer request using the POST endpoint of our testing
REST api (You can take a look at our website homepage as an example of how we use a similar
approach)
Form must contain the following fields(See api swagger documentation for the required
validations): Customer full name, Business name, Email, Telephone number
The initial ruby on rails base project is in here: ​https://github.com/makeitcheaper/code_test
**_You will find a readme file in the repository explaining how to setup the project and other
explanation._**
You need to:

1. Fork the project
2. On completion: Send us a link to your public github url or create a Pull request.
For the api integration - Api swagger documentation:
[http://mic-leads.dev-test.makeiteasy.com/api/v1/docs#!/Enqueue/post_api_v1_create](http://mic-leads.dev-test.makeiteasy.com/api/v1/docs#!/Enqueue/post_api_v1_create)
Feel free to spend as much or as little time on the exercise as you like as long as the following
requirements have been met​:
● Please complete the user story below.
● Your code should run and be fully functional
● Feel free to use whatever frameworks / libraries / gems you like.
● TDD (Rspec with Unit test, mock external service)
● Quality code: Best practices, Separation of concerns, Dont reinvent the wheel, Keep the
code simple as possible. Refactor as necessary.
● If possible commit often so we can see your way of working
**_User Story_**
_As a user running the application
I can_ ​ **_see some basic information about the company and submit my contact details for a
callback_**
_So that I can request a callback
Acceptance criteria:
● Page displayed with a basic form to request a callback
● Leads are received successfully by the Api on form submission
● Form fields are validating accordingly
● A thank you message is displayed to let you know that your request was submitted
successfully and that Makeitcheaper will contact you
● When form failed to submit due to being down or an error we want the user to see a nice
message instead of a generic error._
**Bonus** ​:
1. Create a decent looking homepage
2. if you have experience in some frontend frameworks (vue.js, angular, react) then add
some functionality using one of them to show your skills.


