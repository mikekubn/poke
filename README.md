# Poke

### TODO Tasks

- `TODO.md`

### Technology

You are free to use whatever stack you want but what we value the most is [Next.js](https://nextjs.org/) and [Apollo](https://www.apollographql.com/).

### Backend (`/backend`)

We have provided you with a simple [GraphQL](https://graphql.org/learn) server that serves Pokemon data. The server is non-persistent and therefore on server restart, data will reset.

To run the server:

```
$ cd backend
$ npm install
$ npm start
```

After running the backend, you can access https://localhost:4000/graphql in the browser, you'll be presented with a GraphQL Playground that allows you to run Queries and Mutations as well as view the GraphQL Schema.

A sample query:

```
query { pokemons(query: { limit: 10, offset: 0 }) { edges { name } } }
```

### Frontend (`/frontend`)

I have decided to use apollo client without support ssr nextjs, because I read article, regarding with rc and experimental library for it: [Apollo blog](https://www.apollographql.com/blog/how-to-use-apollo-client-with-next-js-13)

Before you start with frontend part, please you should check codegen documentation for grapqhl auto generate queries and mutations.

If you want use just types and queries/mutations, you can run:

```
$ cd frontend
$ npm install
$ npm codegen
```

To run the server:

```
$ cd frontend
$ npm install
$ npm start
```
