// @flow

import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
} from 'graphql';

import SinespType from './SinespType';

import querySinesp from '../services/Sinesp';

export default new GraphQLObjectType({
    name: 'Query',
    description: 'The root of all... queries',
    fields: () => ({
        querySinesp: {
            type: SinespType,
            args: {
                placa: {
                    type: new GraphQLNonNull(GraphQLString),
                }
            },
            resolve: async (obj, args, context) => {
                return await querySinesp(args.placa);
            }
        },
    }),
});