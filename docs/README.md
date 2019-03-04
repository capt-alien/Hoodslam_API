**Customer API project for BEW1.2 2.27.19**

I am creating an API to track fighters from the Oakland based professional wrestling federation Hood-slam!

routes:
Sign up:
{{url}}/

login:
{{url}}/login

Index:
{{url}}/

Individual fighter:
{{url}}/fighters/{id}


CRUD fighter Resource:
To access the API users will have to sign up by sending a post request json with username and password as keys/value pairs to the sign-up route. Once signed in, the user can create a new fighter by sending a JSON with a post request. Then the user can request all existing fighters through an index route and search for single fighters by sending a get request to the fighters/{id} routes. With the fighters/{id} route users can send a put request with JSON to update information about the fighter or send a delete request to the route to destroy data on the fighter.

Please note that user and fighter are separate resources for security reasons. Security is a two-part protocol with username being the more public. Here should have separate usernames from the fighter names for an extra layer of security. Users will be associated to the fighters by fighter_id.

All testing will be done in Postman😅

Fighter schema:

  name: { type: String, required: true },
  nickname: { type: String, required: true },
  affiliation: { type: String, required: true },
  bio: { type: String, required: true },
  u_name : { type: Schema.Types.ObjectId, ref: "User", required: true }

(u_name is the name of the user that created the fighter which references the user in the user resource)

User Schema:

createdAt: { type: Date },
updatedAt: { type: Date },
username: { type: String, required: true },
password: { type: String, select: false },
fighters : [{ type: Schema.Types.ObjectId, ref: "fighter" }]
