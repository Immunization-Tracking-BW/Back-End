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

| Method | Endpoint                     | Access Control | Description                                                                                          |
| ------ | ---------------------------- | -------------- | ---------------------------------------------------------------------------------------------------- |
| GET    | `/parent/:parentid/children` | parents        | Returns all children based on parent's id.                                                           |
| GET    | `parent/children/:childid`   | All users      | Returns single child                                                                                 |
| POST   | `/parent/:parentid/children` | All users      | Takes JSON with "firstName", "lastName", "dateOfBirth", and "socialSecurityNumber" and add a child   |
| PUT    | `parent/children/:childid`   | All users      | Takes JSON with "firstName", "lastName", "dateOfBirth", and "socialSecurityNumber" and Edit a child. |
| DEL    | `/parent/children/:childid`  | All users      | Deletes a child                                                                                      |

### Immunization Routes

| Method | Endpoint                                       | Access Control | Description                                                                                       |
| ------ | ---------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------- |
| GET    | `/child/:childid/immunization`                 | All users      | Returns a child's immunizations.                                                                  |
| GET    | `/child/immunization/:immunizationid`          | All users      | Returns a single immunizations.                                                                   |
| POST   | `/child/:childid/immunization/:immunizationid` | providers      | Takes JSON with "vaccine", "date", "location", "immunizationCompleted" and adds an imunizations.  |
| PUT    | `/child/immunization/:immuinzationid`          | providers      | Takes JSON with "vaccine", "date", "location", "immunizationCompleted" and edits an imunizations. |

### Provider Routes

| Method | Endpoint                         | Access Control | Description                                         |
| ------ | -------------------------------- | -------------- | --------------------------------------------------- |
| GET    | `/provider/:providerid/children` | providers      | Returns a list of child associated with a provider. |

## Data Model

### Parents

---

```
{
    id: UUID
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    password: string
}
```

### Child

---

```
{
    id: UUID
    firstName: string
    lastName: string
    dateOfBirth: string
    socialSecurityNumber: string
    parent_id: integer
}
```

### Providers

---

```
{
    id: UUID
    orgName: string
    streetAddress: string
    city: string
    state: string
    phoneNumber: string
    email: string
    password: string
}
```

### Immunizations

---

```
{
    id: UUID
    vaccine: string
    immunizationCompleted: boolean
    date: string
    location: string
    grantPermission: boolean
    child_id: integer
    provider_id: integer
}
```
