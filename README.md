# bank-account-toy
A simple bank account toy app for exercise purposes.

It has 4 main features:
- Making a deposit
- Making a withdrawal
- Making a payment
- Showing the account movement history 

The front-end is a React SPA, in the client folder.
The back-end is an Express app that exposes a Rest API, in the server folder.

## Running locally
```bash
docker-compose build
docker-compose up
# The client will be running on port 3000, and the API on port 8080
```
There are 3 services on docker-compose.yml: client, server and db.

## Models
### User
A lot of simplifications were made: the User only has an username files, which is used as an immutable id; authentication & authorization were completely abstracted away; the username is used in the Transaction model to represent the concept of the user account - in a real app, users would probably have relations to multiple Accounts model.
```typescript
interface User {
  username: string;
}
```

### Transaction
Every money movement between "accounts" in the system is represented by a Transaction. Money amounts are represented as `number`; in a real app something like a `Money` ValueObject with a currency and BigDecimal amount would be more appropriate.
```typescript
interface Transaction {
  kind: "DEPOSIT" | "WITHDRAWAL" | "PAYMENT";
  centsAmount: number;
  source: UserAccount;
  destination: UserAccount;
  description: string;
  createdAt: Date
}
```

## Decisions
### Simplicity
Boilerplate was avoided to keep the signal-to-noise ratio high, since a toy app has little code on its own.

### Front-end (React)
`create-react-app` was used with TypeScript and a minimalist CSS Framework (Water.css).

### Back-end (Node)
It was used Express.js with TypeScript. Express is very minimalist and un-opinionated (not "batteries-included"), so there are a lot of things that are important for a real production app that was not implemented for time and scope reasons.

### Containerization
docker-compose was used to speed up development, avoid having to install dependencies on the machine, keep dev environment consistent and allow keeping the dev and production environments similar.

### Logging
I have only used console.log for simplicity and added a basic log middleware (morgan).

An evolution could be using a more powerful logger, like winston, with support to multiple transports.
Another option would be using a simple logger that only outputs to stdout and use an external process manager to handle all logging manipulation (as suggested by 12 Factor App).

### Other
- Formatting with Prettier to keep the style consistent
- Static analysis with ESLint (besides TS) to keep conventions consistent
