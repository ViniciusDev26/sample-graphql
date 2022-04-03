import { v4 as uuidV4 } from 'uuid';
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../infra/type-graphql/models/User";

@Resolver()
class UserResolver {
  private data: User[] = [];

  @Query(() => [User])
  async listUsers() {
    return this.data
  }

  @Mutation(() => User)
  async createUser(
    @Arg('name') name: string
  ) {
    const user = { id: uuidV4(), name }
    this.data.push(user);

    return user
  }
}

export { UserResolver }