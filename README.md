**Customer API project for BEW1.2 2.27.19

I am creating an API to track fighters from the Oakland based professional wrestling federation Hood-slam!

The Fighter resource will have the following fields:
id
name
style/theme
affiliation
total matches
total wins
titles

Afterwards the fighters will then be able to create posts and comment on other fighters posts. Fighters will need to be logged in to create posts but posts will be public (GET will not have a JWT, but POST, PUT and DELETE will require JWT).

Steps:
1) create server "hello world"
1.5) init node and mongoose
2) create fighter resource
3) create fighter model
4) create post resource
5) create post model



All testing will be done in postman😅