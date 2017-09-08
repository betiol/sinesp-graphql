// @flow
const sinesp = require('sinesp-nodejs');

export default async function querySinesp(placa: string) {
    if (!placa) {
        return {
            error: 'Invalid City',
        };
    }

    const response = await sinesp.consultaPlaca(`${placa}`, (car) => {
        return {
            codigoRetorno: car.codigoRetorno,
            mensagemRetorno: car.mensagemRetorno,
            codigoSituacao: car.codigoSituacao,
            situacao: car.situacao,
            modelo: car.modelo,
            marca: car.marca,
            cor: car.cor,
            ano: car.ano,
            anoModelo: car.anoModelo,
            placa: car.placa,
            data: car.data,
            uf: car.uf,
            municipio: car.municipio,
            chassi: car.chassi
        }
        return response;
    })
}