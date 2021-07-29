# SlingAir Contract

## Frontend Development

- Implemented in React.Js
- Render the seats based on the data, as provided by the BE.
  - If a seat is marked as `isAvailable: false`, it shouldn't be selectable.
  - I have the the barebones of this setup already. Just need to connect it to the backend and hope it doesn't break!

### Web Pages

Different FE pages that need to be created or have already been created.

1. `/` - Where users select their seats from a ui and enter their info.
1. `/confirmed` - Upon successful submission, the user is sent to this page.
1. `/view-reservation` - Where users can view their reservation. _They didn't even provide me with a proper design. They want me to design it! It is pretty much the same data as the confirmed page._
1. `/profile` Where users can view/edit their personal information and/or delete a reservation.
1. `/admin` - _There is now some talk of adding an admin page that would allow the chief to see all of the reservations for a selected flight._ **stretch goal!**

**WTF?!** This is not what I signed up for.

## Backend (Middleware) Development

I have also been tasked with developing the Node server that will connect with the FE to the database.

This middleware should have all the requisite endpoints and accept requests from the FE.

I have already created some placeholder functions in `handlers.js`. I am sorry that I can't provide much more than that.

## Communicate with a database server

There is a distinct possibility that I will have to create a mongo database and connect our server to it. They're having trouble finding developer!!

---

## I Quit

If you're my replacement, please consider getting the hell out of Dodge ASAP. I get that you probably can't. I wouldn't be surprised if they locked you in before showing you all of the project details... Before totally losing it, I had the time to create some of the FE pages, but there is no functionality yet. I didn't even have a chance to really start on the Backend.

And this is where I would recommend you start.

Get the server working. Using Insomnia, you should be able to CRUD the data as if it were coming from the FE. Once all of your endpoints are working, you will need to wire them into the FE. I left some `TODO`s for that in the FE.

Ideally the backend should communicate with a database, but I am told that their backend dev just up and quit as well. They are looking for someone else! You can use the mock data that I provided to build out and test the app.
