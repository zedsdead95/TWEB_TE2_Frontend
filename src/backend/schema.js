const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;

const typeDefs = `
directive @date(
  defaultFormat: String = "yyyy:mm:dd, hh:mm:ss"
) on FIELD_DEFINITION

scalar Date

type Movie {
  _id : ID!
  name: String
  lastName: String
 }
 
 type Query {
  getMovie(_id: ID!): User
  getMovies: [User]
 }
`

const schema = makeExecutableSchema({
    typeDefs,
})

module.exports = schema;
