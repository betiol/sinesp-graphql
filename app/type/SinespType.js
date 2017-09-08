// @flow

import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

export default new GraphQLObjectType({
    name: 'Sinesp',
    description: 'Represents type of car',
    fields: {
        codigoRetorno: {
            type: GraphQLString,
            resolve: obj => obj.codigoRetorno,
        },
        mensagemRetorno: {
            type: GraphQLString,
            resolve: obj => obj.mensagemRetorno,
        },
        codigoSituacao: {
            type: GraphQLString,
            resolve: obj => obj.codigoSituacao,
        },
        situacao: {
            type: GraphQLString,
            resolve: obj => obj.situacao,
        },
        modelo: {
            type: GraphQLString,
            resolve: obj => obj.modelo,
        },
        marca: {
            type: GraphQLString,
            resolve: obj => obj.marca,
        },
        cor: {
            type: GraphQLString,
            resolve: obj => obj.cor,
        },
        ano: {
            type: GraphQLString,
            resolve: obj => obj.ano,
        },
        anoModelo: {
            type: GraphQLString,
            resolve: obj => obj.anoModelo,
        },
        placa: {
            type: GraphQLString,
            resolve: obj => obj.placa,
        },
        data: {
            type: GraphQLString,
            resolve: obj => obj.data,
        },
        uf: {
            type: GraphQLString,
            resolve: obj => obj.uf,
        },
        municipio: {
            type: GraphQLString,
            resolve: obj => obj.municipio,
        },
        chassi: {
            type: GraphQLString,
            resolve: obj => obj.chassi,
        }
    }
});
