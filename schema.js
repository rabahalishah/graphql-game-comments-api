/**
 * here the ! is for making the required property
 */
export const typeDefs = `#graphql
type Game {
    id: ID!,
    title: String!,
    platform: [String!]!
    reviews:[Review!]
}
type Review {
    id: ID!,
    rating: Int!,
    content: String!
    game: Game!,
    author: Author!
}

type Author {
    id: ID!,
    name: String!,
    verified: Boolean!
    reviews:[Review!]
}

type Query {
    # list
    reviews:[Review] 
    # detail
    review(id:ID!):Review
    
    # list
    games:[Game]
    # detail
    game(id:ID!):Game

    # list
    authors:[Author]
    # detail
    author(id:ID!):Author
}

type Mutation {
    addGame(game:addGameInput):Game
    # since we are not dealing with real data as we dont have a real DB. So after deleting we are simply returning all games except the deleted one
    deleteGame(id:ID!): [Game]

    updateGame(edits:updateGameInput,id:ID!): Game
}

input addGameInput {
    title: String!
    platform:[String!]!
}

input updateGameInput {
    title: String
    platform:[String!]
    
}


`;

/**
 * int, float, string, boolean, ID
 */
