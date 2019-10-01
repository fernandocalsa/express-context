# Example of Express app with context

In this project you can find an example on how to inject information about the user that is executing the request, so we can filter the data easily.

You can access to this app through https://express-context.herokuapp.com

## Data

We have three different entities:

### Company

It has an id and a name
```
{
  id: 1,
  name: "Facebook"
}
```

### User

It has an id, a first name, a last name and a company id that joins to a company.
```
{
  id: 121,
  firstName: "Mark"
  lastName: "Zuckerberg",
  company: 1
}
```

### Project

It has an id, a name, a createdBy that joins to a user and a company id that joins to a user.
```
{
  id: 1223,
  name: "Facebook Messenger",
  createdBy: 121,
  company: 1
}
```

## Authentication

Every request to this API requires a `Authorization` header. This is a simple `base64` string built from a JSON object like this:
```
{"userId":1}
```

## Endpoints

### Get /users

It returns all the users from the current user company.

### Get /projects

It returns all the projects from the current user company.

### Post /projects

It creates a new project in the current user company and returns it.

> Note: It doesn´t actually create the project as we are not connected to a database.

### Get /projects/:id

It returns a project by the id. It only returns the project if it is in the current user company.

If not found returns a 404.
