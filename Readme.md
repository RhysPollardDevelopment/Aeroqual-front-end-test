# Aeroqual Front End Test

## RHYS POLLARD NOTES

This is the completed front end test for Rhys Pollard

The changes I have made are almost entirely CSS, Javascript and HTML, along with some basic editing in program.cs allowing for default and static files to render the local HTML page.

To run this website, please use `dotnet run` as normal and navigate to localhost:7073. The page should be self explanatory there on.

### Considerations/Assumptions

Had this been a fully fledged project, I would have run the front end service in a separate app (such as REACT) and linked the two during use.

This seemed excessive for the scope and purpose of this test so I have simplified the font end into wwwroot static folder.

I have also included basic verification for age as I assume any member would need an age also.

---

## Brief

This test is to build a front end for the E Society's member registry.

The E Society is a group that only allows members with an E in their name.

## API

A backend engineer has already built an API for you to design against.

The API is simple, and has three methods.

1. A GET method that returns all the registered people

2. A POST method that adds a person

3. A DELETE method that deletes a person.

Swagger documentation is available at /swagger/index.html

## Requirements

We would like you to build a front end for this application.

The front end must

1. Show a list of the current members
2. Allow new members to be added
3. Allow members to be deleted
4. Validate that users being added have an 'e' or 'E' in their name.

You may use any front end technology/stack you like.

## Building and running the API

The API is a .net 6 API.

Get the SDK for your preferred runtime here: https://dotnet.microsoft.com/en-us/download/dotnet/6.0

In the same directory as `FrontEndTest.csproj` call `dotnet run`, as below

`\FrontEndTakeHome\FrontEndTest> dotnet run`

## Submission

Please add your solution to a github repository and share with maxgruebneraeroqual, or zip it and email it to the recruiter

Please add build instructions

Please add any notes or assumptions you made that you think we might find handy to a readme

Don't go overboard - your time is valuable, this test should be pretty short.

If you have any questions or run into issues, email max.gruebner@aeroqual.com
