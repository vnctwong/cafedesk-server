# Project Planning

## Project Description 
### Mugs / Cuppa Joe?
- Our app helps users search for the nearest coffee shops that are good study or work locations.
- Target Audience:
  - People who needs a place to work / study
    (Students / Remote workers / Travelling professionals)
- Team members: Yves, Vincent, X

## User Stories
- As a student, I want to find a quiet coffee shop near me because I need to study. 
- As a user, I want to rate/tag bubble tea shop because they have bad service. 
- As a user, I want to see my recent searches when I have focus on the search bar, because it makes it saves time.
- As a user, I want to save my preference with tags and view my choices immediately because it saves me time. 
- As a user, I want to be able to favourite locations and check history locations because I want to keep track of them.
- As a user, I want to see my choices on a map because it helps me to plan my day trip.
- As a user, I want to be able to vote on tags because I want to help other users by specifying search queries.
- As a user, I want to be able to get more details of other users and stores because I want to know more about them. 
- *STRETCH* As a bootcamp student, I want to pair program with my cohort mate and **coordinate** a location (shared page) because we may  have different preferences. 


## Core Features
- Users 
- Preferences
- Tags
- Favourites
- Detail pages: Store, User
- Map

## Stretch
- Event
- filter by opening hours
- if api call taking too long, skip and pull from db only
- Surprise / Random 
- Filter transit
- Friends: tied to group, share location, checkin
- Store /Admin
- Reward for user contribution to rating and review, super user
- Third-party login
- Store admin (basic input)

## Wireframes
home page (initial search bar)
result page 
store page
user page
admin page

# Routes
- GET /recommendations
  - expects there to be preferences in cookie
  - return array of businesses that match preferences
- GET /search/:keyword
  - expects tags (filters) to be passed through header
  - returns array of businesses found
- GET /users/:user_id
  - returns name
- GET /users/:user_id/favourites
  - returns array of businesses user has marked as favourite
- POST /users/:user_id/favourites/:favourite_id
  - update state of favourite (toggle true/false)
- GET /users/:user_id/views
  - returns array of businesses user has marked as viewed
- POST /users/:user_id/views/:view_id
  - update time viewed to NOW
- GET /tags
  - return array of tags
- GET /businesses
  - return all businesses
- GET /businesses/:business_id
  - return business
- GET /businesses/:business_id/tags
  - return array of tags for business
- POST /businesses/:business_id/tags
  - expects user_id to be passed in header
  - update state of favourite (toggle true/false)

# Stack Choices

## Front-End
    React, Redux, React routes, HTML, CSS, Bootstrap, axios

## Back-End
    Axios, 
    ORM: Sequalize, 
    Javascript,
    Routing: Express.js

## Database
    postgres, knex?

## Testing
    CircleCI, Jest

## Deployment 
    Heroku / Netlify

# ERD
![Entity Relations](./erds.png "Entity Relations")
