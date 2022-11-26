import { NextPage, NextPageContext } from 'next'
import React from 'react'
import ContainerGlobal from '../../../components/ContainerGlobal'
import { Container } from '../../../styles/dashboard/materia'

const Materias = ({
  materia
}: {
  materia: { nome: string; caps: { nome: string; conteudo: string }[] }
}) => {
  return (
    <ContainerGlobal>
      <Container>
        <h1>{materia.nome}</h1>
        <ol>
          {materia.caps.map((v, index) => {
            const key = index + v.nome

            return (
              <li key={key}>
                <a href={`#Cap${index + 1}`}>Cap {index + 1}</a>
              </li>
            )
          })}
        </ol>

        <div>
          {materia.caps.map((v, index) => {
            const key = index + v.nome

            return (
              <div key={key} id={`Cap${index + 1}`}>
                <h2>
                  Cap {index + 1} - {v.nome}
                </h2>

                <p>{v.conteudo}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </ContainerGlobal>
  )
}

Materias.getInitialProps = async (ctx: NextPageContext) => {
  const { id } = ctx.query

  const matematica = {
    nome: 'Matemática',
    caps: [
      {
        nome: 'Historia da matemática',
        conteudo: `Além de reconhecer quantidades de objetos, o homem pré-histórico
        aprendeu a contar quantidades abstratas como o tempo: dias, estações e
        anos. A aritmética elementar (adição, subtração, multiplicação e
        divisão) também foi conquistada naturalmente. Acredita-se que esse
        conhecimento é anterior à escrita e, por isso, não há registros
        históricos. O primeiro objeto conhecido que confirma a habilidade de
        cálculo é o Osso de Ishango, uma fíbula de babuíno com riscos que
        indicam uma contagem, que data por volta de 20.000 anos atrás.[14]
        Muitos sistemas de numeração existiram. O Papiro de Rhind é um documento
        que resistiu ao tempo e mostra os numerais escritos no Antigo Egito. O
        desenvolvimento da matemática permeou as primeiras civilizações e tornou
        possível o desenvolvimento de aplicações concretas: o comércio, o manejo
        de plantações, a medição de terra, astronomia, registro do tempo e, por
        vezes, a realização de rituais religiosos. A partir de 3000 a.C., quando
        Babilônios e Egípcios começaram a usar aritmética e geometria em
        construções, astronomia e alguns cálculos financeiros, a matemática
        começou a se tornar um pouco mais sofisticada.[15] O estudo de
        estruturas matemáticas começou com a aritmética dos números naturais,
        seguiu com a extração de raízes quadradas e cúbicas, resolução de
        algumas equações polinomiais de segundo grau, trigonometria, frações,
        entre outros tópicos. Euclides: painel em mármore no Museo dell'Opera di
        Santa Maria del Fiore Tais desenvolvimentos são creditados às
        civilizações acadiana, babilônica, egípcia, chinesa, ou ainda, àquelas
        do vale do Indo. Por volta de 600 a.C., na civilização grega, a
        matemática, influenciada por trabalhos anteriores e pela filosofia,
        tornou-se mais abstrata. Dois ramos se distinguiram: a aritmética e a
        geometria. Formalizaram-se as generalizações, por meio de definições
        axiomáticas dos objetos de estudo, e as demonstrações. A obra Os
        Elementos, de Euclides, é um registro importante do conhecimento
        matemático na Grécia do século III a.C.. A civilização muçulmana
        permitiu que a herança grega fosse conservada e propiciou seu confronto
        com as descobertas chinesas e hindus, notadamente na questão da
        representação numérica.[carece de fontes] Os trabalhos matemáticos
        desenvolveram-se consideravelmente tanto na trigonometria, com a
        introdução das funções trigonométricas, quanto na aritmética.
        Desenvolveu-se ainda a análise combinatória, a análise numérica e a
        álgebra de polinômios. Na época do Renascentismo, uma parte dos textos
        árabes foi estudada e traduzida para o latim. A pesquisa matemática se
        concentrou então na Europa. O cálculo algébrico desenvolveu-se
        rapidamente com os trabalhos dos franceses François Viète e René
        Descartes. Nessa época também foram criadas as tabelas de logaritmos,
        que foram extremamente importantes para o avanço científico dos séculos
        XVI a XX, sendo substituídas apenas após a criação de computadores. A
        percepção de que os números reais não são suficientes para resolução de
        certas equações também data do século XVI. Já nessa época, começou o
        desenvolvimento dos chamados números complexos, apenas com uma definição
        e quatro operações. Uma compreensão mais profunda dos números complexos
        só foi conquistada no século XVIII com Euler. No início do século XVII,
        Isaac Newton e Gottfried Wilhelm Leibniz descobriram a noção de cálculo
        infinitesimal e introduziram a noção de fluxor (vocábulo abandonado
        posteriormente). Ao longo dos séculos XVIII e XIX, a matemática se
        desenvolveu fortemente com a introdução de novas estruturas abstratas,
        notadamente os grupos (graças aos trabalhos de Évariste Galois) sobre a
        resolubilidade de equações polinomiais, e os anéis, definidos nos
        trabalhos de Richard Dedekind. O rigor em matemática variou ao longo do
        tempo: os gregos antigos foram bastante rigorosos em suas argumentações;
        já no tempo da criação do Cálculo Diferencial e Integral, como as
        definições envolviam a noção de limite que, pelo conhecimento da época,
        só poderia ser tratada intuitivamente, o rigor foi menos intenso e
        muitos resultados eram estabelecidos com base na intuição. Isso levou a
        contradições e "falsos teoremas". Com isso, por volta do século XIX,
        alguns matemáticos, tais como Bolzano, Karl Weierstrass e Cauchy
        dedicaram-se a criar definições e demonstrações mais rigorosas. A
        matemática ainda continua a se desenvolver intensamente por todo o mundo
        nos dias de hoje. No Brasil Ver artigo principal: História do ensino de
        matemática no Brasil O ensino da matemática e, na verdade, de outras
        matérias, desde o descobrimento do Brasil, era ministrado pelos jesuítas
        até a expulsão deles em 1759. Desta data até 1808, os ex-alunos dos
        jesuítas ficaram encarregados pelo ensino. De 1808 a 1834, a matéria era
        ministrada nas escolas do Exército e da Marinha e, a partir de 1873,
        também nas escolas de engenharia. Em 1874, é criada a Escola Politécnica
        a partir da Escola Central, ex-Escola Militar. A Escola de Minas de Ouro
        Preto é criada em 1875 e a Escola Politécnica de São Paulo em 1893.
        Assim, o ensino de matemática passa também a ser oferecido em escolas
        não militares.[16]`
      },
      {
        nome: 'Áreas de metodologias',
        conteudo: `As regras que governam as operações aritméticas são as da álgebra
        elementar, e as propriedades mais profundas dos números inteiros são
        estudadas na teoria dos números. A investigação de métodos para resolver
        equações algébricas leva ao campo da álgebra abstrata, que, entre outras
        coisas, estuda anéis e corpos — estruturas que generalizam as
        propriedades possuídas pelos números. O conceito de vetor, importante
        para a física, é generalizado no espaço vetorial e estudado na álgebra
        linear, pertencendo aos dois ramos da estrutura e do espaço. O ensino da
        geometria O estudo do espaço se originou com a geometria, primeiro com a
        geometria euclidiana e a trigonometria; mais tarde, foram generalizadas
        nas geometrias não-euclidianas, as quais cumprem um papel central na
        formulação da teoria da relatividade. A teoria de Galois permitiu
        resolverem-se várias questões sobre construções geométricas com régua e
        compasso. A geometria diferencial e a geometria algébrica generalizam a
        geometria em diferentes direções: a geometria diferencial enfatiza o
        conceito de sistemas de coordenadas, equilíbrio e direção, enquanto na
        geometria algébrica os objetos geométricos são descritos como conjuntos
        de solução de equações polinomiais. A teoria dos grupos investiga o
        conceito de simetria de forma abstrata e fornece uma ligação entre os
        estudos do espaço e da estrutura. A topologia conecta o estudo do espaço
        e o estudo das transformações, focando-se no conceito de continuidade.
        Entender e descrever as alterações em quantidades mensuráveis é o tema
        comum das ciências naturais e o cálculo foi desenvolvido como a
        ferramenta mais útil para fazer isto. A descrição da variação de valor
        de uma grandeza é obtida por meio do conceito de função. O campo das
        equações diferenciais fornece métodos para resolver problemas que
        envolvem relações entre uma grandeza e suas variações. Os números reais
        são usados para representar as quantidades contínuas e o estudo
        detalhado das suas propriedades e das propriedades de suas funções
        consiste na análise real, a qual foi generalizada para análise complexa,
        abrangendo os números complexos. A análise funcional trata de funções
        definidas em espaços de dimensões tipicamente infinitas, constituindo a
        base para a formulação da mecânica quântica, entre muitas outras coisas.
        Para esclarecer e investigar os fundamentos da matemática, foram
        desenvolvidos os campos da teoria dos conjuntos, lógica matemática e
        teoria dos modelos. Quando os computadores foram concebidos, várias
        questões teóricas levaram à elaboração das teorias da computabilidade,
        complexidade computacional, informação e informação algorítmica, as
        quais são investigadas na ciência da computação. René Descartes Os
        computadores também contribuíram para o desenvolvimento da teoria do
        caos, que trata do fato de que muitos sistemas dinâmicos não-lineares
        possuem um comportamento que, na prática, é imprevisível. A teoria do
        caos tem relações estreitas com a geometria dos fractais, como o
        conjunto de Mandelbrot e de Mary, descoberto por Lorenz, conhecido pelo
        atrator que leva seu nome. Um importante campo na matemática aplicada é
        a estatística, que permite a descrição, análise e previsão de fenômenos
        aleatórios e é usada em todas as ciências. A análise numérica investiga
        os métodos para resolver numericamente e de forma eficiente vários
        problemas usando computadores e levando em conta os erros de
        arredondamento. A matemática discreta é o nome comum para estes campos
        da matemática úteis na ciência computacional. Por fim, uma teoria
        importante desenvolvida pelo ganhador do Prémio Nobel, John Nash, é a
        teoria dos jogos, que possui atualmente aplicações nos mais diversos
        campos, como no estudo de disputas comerciais, pois uma de suas
        principais premissas é a de que todos os participantes querem obter o
        maior lucro possível. Entretanto, premissas deste tipo levantam
        restrições para a aplicação desta teoria em outras áreas, como a
        biologia, por exemplo.`
      },
      {
        nome: 'Notação, linguagem e rigor',
        conteudo: `A maior parte da notação matemática em uso atualmente não havia sido
        inventada até o século XVI.[17] Antes disso, os matemáticos escreviam
        tudo em palavras, um processo trabalhoso que limitava as descobertas
        matemáticas. No século XVIII, Euler foi responsável por muitas das
        notações em uso atualmente. A notação moderna deixou a matemática muito
        mais fácil para os profissionais, mas os iniciantes normalmente acham
        isso desencorajador. Isso é extremamente compreensivo: alguns poucos
        símbolos contêm uma grande quantidade de informação. Assim como a
        notação musical, a notação matemática moderna tem uma sintaxe restrita e
        informações que seriam difíceis de escrever de outro modo. A língua
        matemática pode também ser difícil para os iniciantes. Palavras como "e"
        e "ou" têm significados muito mais precisos do que a fala do dia-a-dia.
        Além disso, palavras como aberto e campo têm recebido um significado
        matemático específico. O jargão matemático inclui termos técnicos como
        homeomorfismo e integral. Mas há uma razão para a notação especial e o
        jargão técnico: matemática requer mais precisão do que a fala do
        dia-a-dia. Matemáticos se referem a essa precisão da linguagem e lógica
        como "rigor".`
      }
    ]
  }

  const portugues = {
    nome: 'Português',
    caps: [
      {
        nome: 'Origens e período romano',
        conteudo: `O português teve origem no que é hoje a Galiza e o norte de Portugal, derivada do latim vulgar que foi introduzido no oeste da Península Ibérica há cerca de dois mil anos. Tem um substrato céltico-lusitano,[21] resultante da língua nativa dos povos ibéricos pré-romanos que habitavam a parte ocidental da Península (Galaicos, Lusitanos, Célticos e Cónios). Surgiu no noroeste da Península Ibérica e desenvolveu-se na sua faixa ocidental, incluindo parte da antiga Lusitânia e da Bética romana. O romance galaico-português nasce do latim falado, trazido pelos soldados romanos, colonos e magistrados. O contato com o latim vulgar fez com que, após um período de bilinguismo, as línguas locais desaparecessem, levando ao aparecimento de novos dialetos. Assume-se que a língua iniciou o seu processo de diferenciação das outras línguas ibéricas através do contato das diferentes línguas nativas locais com o latim vulgar, o que levou ao possível desenvolvimento de diversos traços individuais ainda no período romano.[22][23][24]


        Mapa cronológico mostrando o desenvolvimento das línguas do sudoeste da Europa entre as quais o português.
        A língua iniciou a segunda fase do seu processo de diferenciação das outras línguas românicas depois da queda do Império Romano, durante a época das invasões bárbaras no século V quando surgiram as primeiras alterações fonéticas documentadas que se reflectiram no léxico. Começou a ser usada em documentos escritos pelo século IX, e no século XV tornara-se numa língua amadurecida, com uma literatura bastante rica. Chegando à Península Ibérica em 218 a.C., os romanos trouxeram com eles o latim vulgar, de que todas as línguas românicas (também conhecidas como "línguas novilatinas" ou "neolatinas") descendem. Só no fim do século I a.C. os povos que viviam a sul da Lusitânia pré-romana, os cónios e os celtas, começam o seu processo de romanização. As línguas paleo-ibéricas, como a língua lusitana ou a sul-lusitana são substituídas pelo latim.[25]
        
        A partir de 409 d.C., enquanto o Império Romano entrava em colapso, a Península Ibérica era invadida por povos de origem germânica e iraniana ou eslava[26] (suevos, vândalos, búrios, alanos, visigodos), conhecidos pelos romanos como bárbaros que receberam terras como federados. Os bárbaros (principalmente os suevos e os visigodos) absorveram em grande escala a cultura e a língua da Península; contudo, desde que as escolas e a administração romana fecharam, a Europa entrou na Idade Média e as comunidades ficaram isoladas, o latim popular continuou a evoluir de forma diferenciada levando à formação de um proto-ibero-romance "lusitano" (ou proto-galego-português).[27]
        
        `
      },
      {
        nome: 'Influência árabe, Reconquista e Império Português',
        conteudo: `
        Língua portuguesa
        
        Artigo
        Discussão
        Ler
        Editar
        Ver histórico
        Origem: Wikipédia, a enciclopédia livre.
        Disambig grey.svg Nota: Para outros significados, veja Língua portuguesa (desambiguação).
        Português
        Falado(a) em:	Ver geografia da língua portuguesa
        Total de falantes:	Nativa: 250 milhões
        Total: 273 milhões
        Posição:	5.ª como língua nativa[1][2]
        6.ª como língua nativa e segunda língua
        Família:	Indo-europeia
         Itálica
          Românica
           Ítalo-ocidental
            Românica ocidental
             Galo-ibérica
              Ibero-românica
               Ibero-ocidental
                Galaico-portuguesa
                 Português
        Escrita:	Alfabeto latino
        Estatuto oficial
        Língua oficial de:	
        9 países[Expandir]
        
        1 entidade dependente[Expandir]
        
        Língua minoritária[Expandir]
        
        Várias organizações internacionais
        Regulado por:	
        Quatro instituições:[Expandir]
        Códigos de língua
        ISO 639-1:	pt
        ISO 639-2:	por
        ISO 639-3:	por
        Map of the portuguese language in the world.svg
          Língua materna
          Língua oficial e administrativa
          Língua cultural ou de importância secundária
          Comunidades de minorias lusófonas
          Crioulo de base portuguesa
        A língua portuguesa, também designada português, é uma língua indo-europeia românica flexiva ocidental originada no galego-português falado no Reino da Galiza e no norte de Portugal. Com a criação do Reino de Portugal em 1139 e a expansão para o sul na sequência da Reconquista, deu-se a difusão da língua pelas terras conquistadas e mais tarde, com as descobertas portuguesas, para o Brasil, África e outras partes do mundo.[3] O português foi usado, naquela época, não somente nas cidades conquistadas pelos portugueses, mas também por muitos governantes locais nos seus contatos com outros estrangeiros poderosos. Especialmente nessa altura a língua portuguesa também influenciou várias línguas.[4]
        
        Durante a Era dos Descobrimentos, marinheiros portugueses levaram o seu idioma para lugares distantes. A exploração foi seguida por tentativas de colonizar novas terras para o Império Português e, como resultado, o português dispersou-se pelo mundo. Brasil e Portugal são os dois únicos países cuja língua primária é o português. É língua oficial em antigas colônias portuguesas, nomeadamente, Moçambique, Angola, Cabo Verde, Guiné Equatorial,[5][6][7] Guiné-Bissau e São Tomé e Príncipe, todas na África.[8] Além disso, por razões históricas, falantes do português, ou de crioulos portugueses, são encontrados também em Macau (China), Timor-Leste, em Damão e Diu e no estado de Goa (Índia), Malaca (Malásia), em enclaves na ilha das Flores (Indonésia), Baticaloa no (Sri Lanka) e nas ilhas ABC no Caribe.[9][10]
        
        É uma das línguas oficiais da União Europeia, do Mercosul, da União de Nações Sul-Americanas, da Organização dos Estados Americanos, da União Africana e dos Países Lusófonos. Com aproximadamente 280 milhões de falantes, o português é a 5.ª língua mais falada no mundo, a 3.ª mais falada no hemisfério ocidental e a mais falada no hemisfério sul do planeta.[11] O português é conhecido como "a língua de Camões"[carece de fontes] (em homenagem a uma das mais conhecidas figuras literárias de Portugal, Luís Vaz de Camões, autor de Os Lusíadas) e "a última flor do Lácio" (expressão usada no soneto Língua Portuguesa, do escritor brasileiro Olavo Bilac).[12][13][14][15][16] Miguel de Cervantes, o célebre autor espanhol, considerava o idioma "doce e agradável".[17] Em março de 2006, o Museu da Língua Portuguesa, um museu interativo sobre o idioma, foi fundado em São Paulo, Brasil, a cidade com o maior número de falantes do português em todo o mundo.[18]
        
        O Dia Internacional da Língua Portuguesa é comemorado em 5 de maio.[19] A data foi instituída em 2009, no âmbito da Comunidade dos Países de Língua Portuguesa (CPLP), com o propósito de promover o sentido de comunidade e de pluralismo dos falantes do português. A comemoração propicia também a discussão de questões idiomáticas e culturais da lusofonia, promovendo a integração entre os povos desses nove países.[20]
        
        História
        Ver artigo principal: História da língua portuguesa
        Origens e período romano
        Ver artigos principais: Língua lusitana, Conquista romana da Península Ibérica, Roma antiga, Latim vulgar, Línguas ibero-românicas, Queda do Império Romano do Ocidente e Invasões bárbaras
        
        Inscrição em latim em um marco miliário da Via Nova, estrada romana que ligava Bracara Augusta (atual Braga) a Asturica (atual Astorga)
        O português teve origem no que é hoje a Galiza e o norte de Portugal, derivada do latim vulgar que foi introduzido no oeste da Península Ibérica há cerca de dois mil anos. Tem um substrato céltico-lusitano,[21] resultante da língua nativa dos povos ibéricos pré-romanos que habitavam a parte ocidental da Península (Galaicos, Lusitanos, Célticos e Cónios). Surgiu no noroeste da Península Ibérica e desenvolveu-se na sua faixa ocidental, incluindo parte da antiga Lusitânia e da Bética romana. O romance galaico-português nasce do latim falado, trazido pelos soldados romanos, colonos e magistrados. O contato com o latim vulgar fez com que, após um período de bilinguismo, as línguas locais desaparecessem, levando ao aparecimento de novos dialetos. Assume-se que a língua iniciou o seu processo de diferenciação das outras línguas ibéricas através do contato das diferentes línguas nativas locais com o latim vulgar, o que levou ao possível desenvolvimento de diversos traços individuais ainda no período romano.[22][23][24]
        
        
        Mapa cronológico mostrando o desenvolvimento das línguas do sudoeste da Europa entre as quais o português.
        A língua iniciou a segunda fase do seu processo de diferenciação das outras línguas românicas depois da queda do Império Romano, durante a época das invasões bárbaras no século V quando surgiram as primeiras alterações fonéticas documentadas que se reflectiram no léxico. Começou a ser usada em documentos escritos pelo século IX, e no século XV tornara-se numa língua amadurecida, com uma literatura bastante rica. Chegando à Península Ibérica em 218 a.C., os romanos trouxeram com eles o latim vulgar, de que todas as línguas românicas (também conhecidas como "línguas novilatinas" ou "neolatinas") descendem. Só no fim do século I a.C. os povos que viviam a sul da Lusitânia pré-romana, os cónios e os celtas, começam o seu processo de romanização. As línguas paleo-ibéricas, como a língua lusitana ou a sul-lusitana são substituídas pelo latim.[25]
        
        A partir de 409 d.C., enquanto o Império Romano entrava em colapso, a Península Ibérica era invadida por povos de origem germânica e iraniana ou eslava[26] (suevos, vândalos, búrios, alanos, visigodos), conhecidos pelos romanos como bárbaros que receberam terras como federados. Os bárbaros (principalmente os suevos e os visigodos) absorveram em grande escala a cultura e a língua da Península; contudo, desde que as escolas e a administração romana fecharam, a Europa entrou na Idade Média e as comunidades ficaram isoladas, o latim popular continuou a evoluir de forma diferenciada levando à formação de um proto-ibero-romance "lusitano" (ou proto-galego-português).[27]
        
        Influência árabe, Reconquista e Império Português
        
        Cancioneiro da Ajuda, coleção de poesias escritas em galego-português datada do final do século XIII, influenciadas pela lírica occitana
        Ver artigos principais: Língua galego-portuguesa, Invasão muçulmana da Península Ibérica, Reconquista e Império Português
        Desde 711, com a invasão islâmica da Península, que também introduziu um pequeno contingente de saqalibas, o árabe tornou-se a língua de administração das áreas conquistadas. Contudo, a população continuou a usar as suas falas românicas, o moçárabe nas áreas sob o domínio mouro, de tal forma que, quando os mouros foram expulsos, a influência que exerceram na língua foi relativamente pequena. O seu efeito principal foi no léxico, com a introdução de cerca oitocentas palavras através do moçárabe-lusitano.[28]
        
        Em 1297, com a conclusão da reconquista, o rei D. Dinis I prossegue políticas em matéria de legislação e centralização do poder, adoptando o português como língua oficial em Portugal. O idioma se espalhou pelo mundo nos séculos XV e XVI quando Portugal estabeleceu um império colonial e comercial (1415-1999) que se estendeu do Brasil, na América, a Goa, na Ásia (Índia, Macau na China e Timor-Leste). Foi utilizada como língua franca exclusiva na ilha do Sri Lanka por quase 350 anos. Durante esse tempo, muitas línguas crioulas baseadas no português também apareceram em todo o mundo, especialmente na África, na Ásia e no Caribe.[29][30]`
      }
    ]
  }

  const geografia = {
    nome: 'Geografia',
    caps: [
      {
        nome: 'Geografia',
        conteudo: `Geografia (do grego γεωγραφία, geographia, literalmente "descrição da terra")[1][2] é uma área da ciência dedicado ao estudo responsável por examinar a superfície do planeta Terra e compreender todos os aspectos físicos deste. A primeira pessoa a usar a palavra γεωγραφία foi Eratóstenes (276–194 aC). A geografia é uma disciplina abrangente que busca uma compreensão da Terra e suas complexidades humanas e naturais – não apenas onde os objetos estão, mas também como eles mudaram e vieram a ser. Embora a geografia seja específica do planeta Terra, muitos conceitos podem ser aplicados de forma mais ampla a outros corpos celestes no campo da ciência planetária.

        A geografia é muitas vezes definida em termos de dois ramos: geografia humana e geografia física. A geografia humana está preocupada com o estudo das pessoas e suas comunidades, culturas, economias e interações com o meio ambiente, estudando suas relações com e através do espaço e lugar. A geografia física está preocupada com o estudo de processos e padrões no ambiente natural, como a atmosfera, hidrosfera, biosfera e geosfera. Para alguns, a Geografia também é uma prática humana de conhecer onde se vive, para compreender e planejar o local de moradia de um indivíduo. Um dos temas centrais da geografia é a relação homem-natureza. Ambos os ramos fazem uso de filosofias geográficas, conceitos e ferramentas semelhantes e muitas vezes têm sobreposição significativa. Um desses conceitos, a primeira lei da geografia, proposta por Waldo Tobler, é "tudo está relacionado a tudo o mais, mas coisas próximas são mais relacionadas do que coisas distantes".
        
        As quatro tradições históricas em pesquisa geográfica são análises espaciais dos fenômenos naturais e humanos, estudos de área de lugares e regiões, estudos das relações homem-terra e ciências da terra. A geografia tem sido chamada de "a disciplina mundial" e "a ponte entre as ciências humanas e físicas".`
      },
      {
        nome: 'Visão geral',
        conteudo: `A geografia é uma ciência que estuda a relação entre a Terra e seus habitantes. Os geógrafos querem saber onde vivem os homens, as plantas e os animais, onde se localizam os rios, os lagos, as montanhas e as cidades. Estudam o porquê desses elementos se encontrarem onde estão e como eles se relacionam. A palavra "geografia" vem do grego geographía (γεογραπηία), que significa descrição da Terra.

        A geografia depende muito de outras áreas do conhecimento, para obter informações básicas, especialmente em alguns ramos especializados. Utiliza os dados da química, da geologia, da matemática, da história, da física, da astronomia, da antropologia e da biologia e, principalmente, da ecologia, pois tanto a Ecologia como a Geografia são estudos relacionados: ambos estão preocupados com as análises biológicas, de fatores geológicos e dos ciclos biogeoquímicos dos Ecossistemas, isto é, da relação entre os seres vivos (inclusive os povos) e seu meio ambiente.
        
        Os geógrafos utilizam inúmeras técnicas, como viagens, leituras e estudo de estatísticas. Os mapas são seu instrumento e meio de expressão mais importante. Além de estudar mapas, os geógrafos os atualizam, graças às suas pesquisas especializadas, aumentando assim o nosso conhecimento geográfico.
        
        Como o conhecimento da geografia é útil às pessoas em sua vida cotidiana, o aprendizado da geografia se inicia no jardim de infância ou no ensino fundamental e estende-se até à universidade. O objetivo básico do estudo da geografia é o desenvolvimento do sentido de direção, da capacidade de ler mapas, da compreensão das relações espaciais e do conhecimento do tempo, do clima e dos recursos naturais.
        
        O homem sempre precisou e utilizou o conhecimento geográfico. Os povos pré-históricos tinham de encontrar cavernas e reservas regulares de água. Tinham também de morar perto de um lugar onde pudessem caçar, Saber localizar rastros de animais e trilhas de inimigos. Usavam carvão ou argila colorida para desenhar mapas primitivos de sua região nas paredes das cavernas e em peles secas de animais. Com o tempo, o homem aprendeu a lavrar a terra e a domesticar os animais. Essas atividades o forçaram a prestar mais atenção ao clima e à localização dos pastos.
        
        Atualmente, não nos satisfazemos com um conhecimento geográfico limitado a área que circunda nossas casas. Hoje, nem mesmo basta às pessoas conhecer as terras e os mares próximos, como acontecia na época do império Romano. Para satisfazer nossas necessidades, precisamos saber um pouco da geografia da Terra inteira.`
      }
    ]
  }

  switch (id) {
    case '1':
      return { materia: matematica }
    case '2':
      return { materia: portugues }
    case '3':
      return { materia: geografia }

    default:
      break
  }

  return {}
}

export default Materias
