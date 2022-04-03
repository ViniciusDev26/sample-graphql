import { Field, ID, ObjectType } from "type-graphql";
import { IUser } from "../../../models/IUser";

@ObjectType()
class User implements IUser{
  @Field(_Type => ID)
  id: string;

  @Field()
  name: string;
}

export { User }