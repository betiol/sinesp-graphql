// @flow

export default async function querySinesp(placa) {
    if (!placa) {
        return {
            error: 'Placa Inválida',
        };
    }

    const response = await fetch(`http://betiol-github-io.umbler.net/api/consultaPlaca?placa=${placa}`);

    if (!response.ok) {
        return {
            error: 'Erro ao obter dados dessa placa',
        };
    }

    const car = await response.json().then(res => res);
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
    };

}