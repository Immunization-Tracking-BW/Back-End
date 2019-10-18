# ImmuTrack

Live Site: []

## Endpoints

### Auth Routes

| Method | Endpoint                   | Access Control | Description                                                                                                               |
| ------ | -------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------- |
| POST   | `/auth/register/:userType` | All users      | Takes in JSON with email and password. Use type is either "parents" or "providers". Returns a JSON WEB token as a string. |
| POST   |
