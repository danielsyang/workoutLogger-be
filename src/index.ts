import "reflect-metadata"
import { PrismaClient } from "@prisma/client"
import { ApolloServer } from "apollo-server-express"
import { buildSchema } from "type-graphql"
import { resolvers } from "../prisma/generated/type-graphql"
import express from "express"

const main = async () => {
  const app = express()
  const prisma = new PrismaClient()

  const schema = await buildSchema({
    resolvers,
    validate: false,
  })

  const server = new ApolloServer({
    schema,
    context: { prisma },
  })

  server.applyMiddleware({ app })

  app.get("/health-check", (_, res) => {
    res.sendStatus(200)
  })

  app.listen(3000, () => console.log("running on port 3000"))
}

main()
