# Employee-Manager

# User Story 

AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

# Solution 

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

# Usage

This application will allow employers to easily access their team's basic info such as emails and GitHub profiles

Application uses jest and inquirer

# Links

Github: https://github.com/Cienna97/Employee-Manager.git


Walkthrough Video: https://watch.screencastify.com/v/3VBgO87ojeeoDpE5ibXM

# Screenshot 

In screenshot folder within application

# Future Development 

This application is set up right now and passes the tests required, however the front end of this application is still in progress.