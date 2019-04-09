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
## business
  - search coffee, inserts DB (search by cat)
  - search juice, inserts DB (!search cat but shows cat)
  - search by coffee, new inserts DB (!search cat, !show cat)
  - search bakery, show DB name but !cat
  - search coffee, show DB, but only last search
    * search coffee, inserts DB (search by cat)
    * search bake, show DB, but !cat
    * search bakery, same
    * search coffee, 20 new entry & !search cat
# Filter business by favorite

# custom fnc, how to know which params optional

# Elements not rendering properly
- clicking details reloads before going to actual details
- favorites hardcoded
- history hardcoded
- 

# order tags by count
- where to call count for tags
- how to call count for tags
 

