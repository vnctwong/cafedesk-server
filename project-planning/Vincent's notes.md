# Ideation
  - project with tech or market user demand (perspective to build from)


# ERD
  - running through ERD with user stories + queries to check database structure


# Wireframing
  - differentiating search and preference
   * how users will nav back and forth
   * work process: do we settle on core and build around or change as we go
   * what is recognizable to new / power users
   * breakpoints for too much repetition of elements


# Routing
  - session or persistent
    * if search has multiple layers (i.e. search keyword, then filter), 1 or 2 routes 
  - ? How to get location from user from browser / cookie
  - use wireframe to re-check required routes

## Sequelize
  - syntax for 12m / m2m assco.
  - ERD structure to show association?
  - addColumn over edit DB, why
  - diff btwn sqlz & psql fnclty
  - hasOne, belongsTo, hasMany, belongsToMany. To add columns, do we edit migrations or models


# Controllers
  - How to add new tags, favorites, etc into DB
## Users
  - create
    * when post req @ /users, create user in db
### fav_business
  - create
    * when post req @ route/users/LN18, create row in DB & is_favorite = true
    * column is_fav needed?
  - update
    * when post req @ route/users/LN21, update is_favorite boolean true | false
    * ? delete row or not? 
### viewed_business
  - create
    * when is this accessed?
    * if !businessId create row
  - else update updateAt = sequelize.DATE
  - is viewed needed?
  - ? why was get accessor not a function when qrying wrong table/id

# custom fnc, how to know which params optional

# Elements not rendering properly
- clicking details reloads before going to actual details
- favorites hardcoded
- history hardcoded
- 

# order tags by count
- where to call count for tags
- how to call count for tags

# deployment fixes (netlify branch)
- navbar on top of chrome browser
- landscape mode sizing
- business detail loading not donut
- cursor changes from finger to text on business detail
- business detail page, 'open' not 'open now'
- need two fingers to scroll business detail map
- how to favorite

# PRESENTATIONS

## Sell your product, NOT tech demo this is a sales pitch!!
## Be ethusiatic, have reasons to be excited to dev this app
## 2 reasons for tech, why WE chose & why best for USER
## always relate back to WHY users use product

- ask user questions, set the tone, give audience reason to use   app. aka hook them in, no tech talk. RELATE

- walk through user story
  - make it very simple WHY this feature, then show HOW       while explaining
  - sprinkle tech and design choices DURING walkthrough

- keep the flow, get ppl excited about a, explain a, why a &      not b. 
  - still be excited about fails, show learning & future dev

- ? how to ask Q's and engage during pitch

- offer chance for questions + criticism


 

