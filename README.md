# Sinesp GraphQL Query

[SINESP Cidadão](https://www.sinesp.gov.br/sinesp-cidadao) é uma base de dados pública de veículos brasileiros muito útil para identificar carros ou motos roubados ou suspeitos.

 # Informações Disponíveis

Se um veículo com a placa especificada for encontrado, o servidor irá retornar com as seguintes informações:

- *codigoRetorno*: código de retorno da consulta
- *mensagemRetorno*: mensagem de retorno da consulta
- *codigoSituacao*: código da situação do veículo
- *situacao*: mensagem da situação do veículo
- *modelo*: modelo do veículo
- *marca*: marca do veículo
- *cor*: cor do veículo
- *ano*: ano de fabricação do veículo
- *anoModelo*: ano do modelo do veículo
- *placa*: placa consultada
- *data*: data e hora da consulta
- *uf*: estado ou unidade federativa do veículo
- *municipio*: município ou cidade do veículo
- *chassi*: chassi do veículo

# Como usar

Abaixo um exemplo simples e geral de utilização da query, basta passar um número de placa:

```GraphQL
query {
  querySinesp(placa: "AAA0000") {
    codigoRetorno
    mensagemRetorno
    codigoSituacao
    situacao
    modelo
  	marca
    cor
    ano
    anoModelo
    placa
    data
    uf
    municipio
    chassi
  }
}
```
