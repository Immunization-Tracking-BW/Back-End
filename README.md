# ImmuTrack

Live Site: []

## Endpoints

### Auth Routes

| Method | Endpoint                   | Access Control | Description                                                                                                                                  |
| ------ | -------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | `/auth/register/:userType` | All users      | Takes in JSON with email and password. Use type is either "parents" or "providers".                                                          |
| POST   | `/auth/login/:userType`    | All users      | Login in as a user. Usertype is either "parents" or "providers". Returns a JSON web token as res.data.token and user object as res.data.user |  |

## Must be logged in to access rest of routes.

### Children Routes

| Method | Endpoint                     | Access Control | Description                                                                                                             |
| ------ | ---------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------- |
| GET    | `/parent/:parentid/children` | parents        | Return all children based on parent's id.                                                                               |
| GET    | `parent/children/:childid`   | parents        | Return single child                                                                                                     |
| POST   | `/parent/:parentid/children` | parents        | Takes JSON with "firstName", "lastName", "dateOfBirth", and "socialSecuirtyNumber" (will fixe spelling) and add a child |
| PUT    | `parent/children/:childid`   | parents        | Edit a child                                                                                                            |
| DEL    | `/parent/children/:childid`  | parents        | Delete a child                                                                                                          |

### Immunization Routes

| Method | Endpoint                       | Access Control    | Description |
| ------ | ------------------------------ | ----------------- | ----------- |
| GET    | `/child/:childid/immunization` | Takes JSON with " |
