import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInterfaceType } from 'graphql'
export const SPFObjType = new GraphQLInterfaceType({
	name: 'SPFObjType',
	fields: {
		obid: { type: GraphQLString },
		objuid: { type: GraphQLString },
		objname: { type: GraphQLString },
		domainuid: { type: GraphQLString },
		objdefuid: { type: GraphQLString },
		config: { type: GraphQLString },
		creationdate: { type: GraphQLString },
		lastupdated: { type: GraphQLString },
		terminationdate: { type: GraphQLString },
		uniquekey: { type: GraphQLString },
		claimedtoconfigs: { type: GraphQLString },
		markedforremoval: { type: GraphQLString },
		description: { type: GraphQLString },
		spfrevstate: { type: GraphQLString }
	},
})