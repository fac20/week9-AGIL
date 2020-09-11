# FLYING SAUCERS/ CYBERSPACE NOMADS
### Your go to website for out of this world travel destinations!

<MARQUEE>![Outer space-pana (1)](https://user-images.githubusercontent.com/59174800/92889831-781b5c80-f40e-11ea-969c-16add5117649.png)

</MARQUEE>

A single-page app which uses the endpoints of a [travel destinations API]() we created last week.
 See project brief [here](https://founders-and-coders.gitbook.io/coursebook/curriculum/single-page-app/project


### Abduction guidelines:
- *Clone* this repo
- Run npm install
- Start live server to view the site on your browser

## Action points from previous contact's SGC
- Take more breaks 
- Drawing out file structure
- Set out a clear plan of action from the start ? like step by step so we always know which tasks need doing in which order
- Read previous weeks SGCs
- Reading conventional commits article and implementing it.



### Acceptance Criteria

- [ ] A single-page app
- [ ] Accessible signup/login forms
- [ ] Token-based authentication with storage in localStorage
- [ ] Form for adding new resources
- [ ] Works well across Chrome, Firefox and Safari/Edge browsers

#### Stretch criteria

- [ ] Buttons to delete existing resources
- [ ] Form for updating existing resources 


## Crazy 8s
![Screenshot 2020-09-10 at 23 16 46](https://user-images.githubusercontent.com/36554605/92815036-c2272280-f3bb-11ea-9d16-f53472657bb7.png)

## Prototype
### Mobile 
![Screenshot 2020-09-10 at 23 07 36](https://user-images.githubusercontent.com/36554605/92814657-5e9cf500-f3bb-11ea-853e-4a74b612e652.png)

### Desktop 
![Screenshot 2020-09-10 at 23 07 48](https://user-images.githubusercontent.com/36554605/92814707-69f02080-f3bb-11ea-95c4-31f416376f4b.png)


## Our pseudo code 

Create index.html page which displays signup (onclick call displaySignup() ) and login button (o’clock call displayLogin)

Write displaySignup function  + index page and div with app   A + T 
—> display signup form in app div

"username": "test57",
"age": 22, 
"email": "a@gsdts.com",
"password": “1234"

—> form will contain button 
—> on submit, button will call signup(username, age, email, password) 

displayLogin function  J + K
—> display login form in app div 
—> form will contain button
email
Password
—> on click, call login() 

signup()  A + K
—> makes fetch request of type POST with username, password etc to heroku/signup 
—> gets the access token in the response and add to headers 
—> add access token to the local storage 
—> calls displayAll()

Login() J + T
—> makes fetch request of type POST with username, password etc to https://destinationapiagil.herokuapp.com/login
—> gets the access token in the response and add to headers 
—> add access token to the local storage 
—> call displayAllposts() 


displayAll()
Fetch all the posts from the API 
Insert them into template ? 
Add button to call displayAddpost()
Append to page 

displayAddpost()
—> display add post form 
—> button which calls addPost() 

addPost()
—> make fetch request of type POST with 
headers: { authorization: `Bearer ${token}` }

Body: 
{
 "text_content": 
"flight_time": 
"flight_cost":
}

## The mad scientists: 
Facilitator: Amber   
Design: Terry   
Deployment: Jessica  
Quality: Khadija  


## Tools 
- html, css and vanilla javascript 
- Miro
- Netlify 
- FAC mentors :)) 
- stack overflow and MDN 
- our own travel destinations API
