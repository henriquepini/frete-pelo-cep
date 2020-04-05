# Calcular frete !
Este é um repositório simples para utilização de uma API (documentação [aqui](https://viacep.com.br/)) para encontrar um endereço, dado o CEP.
##### Links
[Tarefas](#tarefas) |
[Grupo](#grupo) |
[Base do projeto](#base-do-projeto) |
[Tabela - Cálculo de Frete](#tabela) |
[Formulas](#formulas)
# Tarefas 
  - Consumir a API da [ViaCEP]( https://viacep.com.br )
  - Calcular o **Custo do Frete** de acordo com duas variáveis informadas:
  -- Localidade e
    -- Valor do produto
 - Calcular o **Custo Total do Produto (R$ Preço do produto + Frete)**
# Grupo 
Esta atividade foi feita em grupo, sendo eles :
> Henrique - 1911513966
>
> Fernando - 1911513366
>
> Luana - 1911516783
>
> Luis - 1911511522
>
> Kaian - 1911511535

## Base do projeto 
Foi usado como suporte o arquivo **JsSearchCEPProj.zip** que se encontra no Google Driver da
disciplina de Desenvolvimento de Software.
**URL -** (https://drive.google.com/drive/folders/1zwJpWHukXnIo-bgxyXIoPkAJ1wiGdqGS)
| Arquivos | Descrição
-----------|----------
**CSS** |Modelo de arquivo .css para ser utilizado na estilização das páginas.
**JS** |Modelo do JavaScript que será utilizado para enviar informar o CEP para a API da ViaCEP
**HTML** | Arquivo HTML que será usado como Interface.
### Tabela
Esta tabela deverá ser utilizada para realizar o Cálculo do Frete, levando-se em consideração o Custo do Produto.
| Código da UF | UF | Unidade Federativa | Cidade | Frete (%) sobre R$ do Produto |
---------------|----|--------------------|--------|-------------------------------|
11 |RO|Roraima||140%|
12 |AC|Acre||145%|
13 |AM|Amazonas||130%|
14 |RR|Roraima||140%|
15 |PA|Pará||145%|
16 |AP|Apamá||145%|
17 |TO|TO||85%|
21 |MA|Maranhão||145%|
22 |PI|Piauí||140%|
23 |CE|Ceará||100%|
24 |RN|Rio Grande do Norte||140%|
25 |PB|Paraíba||95%|
26 |PE|Pernambuco||95%|
27 |AL|Alagoas||90%|
28 |SE|Sergipe||85%|
29 |BA|Bahia||90%|
31 |MG|Minas Gerais||80%|
32 |ES|Espirito Santo||70%|
33 |RJ|Rio de Janeiro||60%|
35 |SP|São Paulo|||
35 |SP|São Paulo|Campinas|30%|
35 |SP|São Paulo|Sumaré|30%|
35 |SP|São Paulo|Americana|30%|
35 |SP|São Paulo|Valinhos|30%|
35 |SP|São Paulo|Vinhedo|30%|
35 |SP|São Paulo|Salto|30%|
35 |SP|São Paulo|Sorocaba|30%|
41 |PR|Paraná||40%|
42 |SC|Santa Catarina||50%|
43 |RS|Rio Grande do Sul||60%|
50 |MS|Mato Grosso do Sul||60%|
51 |MT|Mato Grosso||65%|
52 |GO|Goiás||55%|
53 |DF|Distrito Federal||55%|
### Formulas 
1.  **Frete**
    * Para Calcular o Valor do Frete, será necessário verificar a Taxa (%) percentual atribuído na tabela – Calculo de Frete, usando a seguinte fórmula a seguir.
    ```
    [Frete = PrecoProduto * (% Frete s/ R$ Produto)]
    ```
2.  **Valor Total**
    * O Valor Total para entrega, leva em consideração o [PreçoDoProduto],
acrescido da Taxa (%) percentual relacionada à região. Use a fórmula a seguir
para realizar o Cálculo do Valor Total da Entrega.
    ```
    [ValorTotal = PrecoProduto + (PrecoProduto * (% Frete s/ PrecoProduto))]
    ```

[Voltar ao início](#calcular-frete)
### FIM
