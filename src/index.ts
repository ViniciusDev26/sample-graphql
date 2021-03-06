import "reflect-metadata";
import "dotenv/config";

import path from 'path';
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { UserResolver } from "./resolvers/UserResolver";

async function main(){
  const schema = await buildSchema({
    resolvers: [
      UserResolver
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  })

  const server = new ApolloServer({
    schema
  })

  const { url } = await server.listen(process.env.PORT || 3333); 
  console.log(`server running on ${url}`);
}

main();