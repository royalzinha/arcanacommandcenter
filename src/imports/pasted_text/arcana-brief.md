@Figma ARCANA — PLANESWALKER COMMAND CENTER

Product Design + Full-Stack Development Brief

Você é um Senior Product Designer + Senior Front-End Engineer + UX Engineer, especializado em criar produtos digitais premium, interfaces complexas, dashboards, data visualization, design systems e experiências inspiradas em games.

Sua tarefa é projetar e desenvolver uma aplicação web completa, funcional e responsiva chamada ARCANA — Planeswalker Command Center.

ARCANA é um dashboard conceitual para jogadores e colecionadores de trading card games, inspirado no universo e nos conceitos de Magic: The Gathering, mas com identidade visual própria.

O resultado deve parecer um produto real que poderia ser lançado, e não um mockup estático ou uma fan page.

⸻

1. OBJETIVO PRINCIPAL

Criar uma plataforma centralizada onde o usuário possa:

* visualizar sua coleção;
* pesquisar cartas;
* filtrar cartas;
* visualizar detalhes de uma carta;
* acompanhar o valor da coleção;
* acompanhar evolução de preços;
* administrar decks;
* criar e editar decks;
* visualizar estatísticas dos decks;
* acompanhar wishlist;
* visualizar progresso de sets;
* acompanhar atividades recentes;
* visualizar seu perfil e achievements.

O produto deve combinar:

TCG Collection Manager + Deck Builder + Market Tracker + Analytics Dashboard

A experiência deve transmitir:

“Eu consigo administrar toda a minha coleção em um único lugar.”

⸻

2. PRINCÍPIO FUNDAMENTAL

IMPORTANTE:

Não transforme o projeto em uma fan page de Magic.

Magic é a inspiração e o contexto.

O produto deve continuar parecendo um software premium de gerenciamento de dados, mesmo se as referências visuais de Magic forem removidas.

A direção estética deve ser:

Premium SaaS + Dark Fantasy + TCG + Data Visualization

Referências conceituais:

* Linear
* Notion
* Stripe
* Bloomberg Terminal
* Destiny
* interfaces de RPG/TCG premium

Não copie nenhuma dessas interfaces.

Use apenas como referência de qualidade, organização e atmosfera.

⸻

3. IDENTIDADE

Nome:

ARCANA

Subtítulo:

PLANESWALKER COMMAND CENTER

Tagline:

YOUR COLLECTION. YOUR STRATEGY. YOUR PLANES.

O nome ARCANA deve aparecer na navegação principal.

Não usar o nome “Magic: The Gathering” como marca principal da aplicação.

Não reproduzir logos oficiais.

Não reproduzir a identidade visual oficial do Magic.

⸻

4. DIREÇÃO VISUAL

A interface deve ser predominantemente escura, sofisticada e minimalista.

Evitar completamente:

* visual medieval genérico;
* pergaminhos;
* excesso de dourado;
* excesso de ornamentos;
* interfaces douradas;
* excesso de partículas;
* UI exageradamente gamer;
* neon excessivo;
* excesso de bordas;
* excesso de gradientes;
* fontes fantasiosas difíceis de ler;
* aparência de site de fã.

A fantasia deve aparecer principalmente através de:

* atmosfera;
* tipografia de display;
* iluminação;
* pequenas referências a mana;
* nomenclatura;
* imagens das cartas;
* detalhes sutis.

A interface deve ser 80–90% software / 10–20% fantasy.

⸻

5. PALETA

Use CSS variables/tokens.

Background principal:

#080A0D

Surface:

#11151B

Surface secundária:

#181D25

Borders:

#262C35

Primary:

#7185FF

Secondary:

#9B7BFF

Accent:

#D6B36A

Texto principal:

#F2F0E8

Texto secundário:

#8B929E

Sucesso:

usar verde discreto.

Erro:

usar vermelho discreto.

Não usar cores extremamente saturadas.

⸻

6. CORES DE MANA

As cinco cores de mana devem funcionar como uma linguagem visual funcional.

WHITE:

#E8DCC0

BLUE:

#5D8FE8

BLACK:

#62576F

RED:

#D66B5E

GREEN:

#6FA66F

Utilizar essas cores principalmente para:

* filtros;
* badges;
* gráficos;
* identidade de decks;
* indicadores;
* pequenos detalhes.

Nunca colorir a interface inteira com essas cores.

⸻

7. TIPOGRAFIA

Utilizar:

Display:

DM Serif Display

UI:

Inter

Se não for possível carregar DM Serif Display, utilizar uma serifada elegante equivalente.

A interface deve utilizar:

* serif para grandes títulos e momentos narrativos;
* sans-serif para navegação, tabelas, filtros e dados.

Hierarquia tipográfica muito clara.

⸻

8. LAYOUT

Desktop principal:

1440px.

Utilizar:

12-column grid.

Margens aproximadas:

48px.

Gap:

24px.

Cards:

16px de border-radius.

Evitar excesso de rounded cards.

O sistema deve ter bastante espaço negativo.

A interface deve parecer premium e editorial.

⸻

9. TECNOLOGIA

Construir uma aplicação web moderna.

Preferência:

* React
* TypeScript
* Vite ou equivalente suportado pelo Replit
* Tailwind CSS
* shadcn/ui quando fizer sentido
* Lucide Icons
* Recharts para gráficos

Arquitetura preparada para futura integração com API real.

Não criar tudo em um único arquivo.

Separar:

components

pages

layouts

data

hooks

types

utils

services

⸻

10. DADOS

Nesta primeira versão, utilizar dados mockados realistas.

Criar uma camada de dados separada da UI.

Exemplo:

/src/data/cards.ts

/src/data/decks.ts

/src/data/activity.ts

/src/data/sets.ts

/src/data/user.ts

Não espalhar objetos mockados diretamente pelos componentes.

Preparar a arquitetura para futuramente substituir os mocks por API.

⸻

11. NAVEGAÇÃO

Criar sidebar desktop.

Estrutura:

ARCANA

COMMAND CENTER

* Dashboard
* Collection
* Decks
* Market
* Wishlist

DISCOVER

* Sets
* Explore

ACCOUNT

* Profile
* Settings

No mobile, transformar a navegação em bottom navigation ou drawer.

⸻

12. DASHBOARD

Rota:

/dashboard

Essa é a página principal.

Header:

GOOD EVENING, PLANESWALKER.

Subheadline:

Your collection is growing.

Criar uma composição visual sofisticada.

⸻

CARD 01 — COLLECTION VALUE

Título:

COLLECTION VALUE

Valor:

R$ 18,420.50

Variação:

+8.4%

Mostrar pequeno gráfico de evolução.

⸻

CARD 02 — TOTAL CARDS

TOTAL CARDS

2,481

67% collection progress

⸻

CARD 03 — DECKS

14

Active decks

⸻

CARD 04 — WISHLIST

83

Cards to acquire

⸻

13. COLLECTION ANALYTICS

Criar seção:

YOUR COLLECTION

Mostrar distribuição por mana.

Categorias:

WHITE
BLUE
BLACK
RED
GREEN

Criar gráfico elegante.

Pode ser donut chart ou horizontal bar chart.

⸻

14. COLLECTION GROWTH

Criar gráfico de linha:

Collection Growth

Dados de exemplo:

January
February
March
April
May
June
July
August

Mostrar crescimento progressivo.

Tooltip elegante.

⸻

15. RECENT ACTIVITY

Criar timeline/lista:

Added 14 cards

Completed Innistrad set

Updated Dimir Control

Added card to wishlist

Sold 3 cards

Cada atividade deve possuir:

* ícone;
* timestamp;
* descrição;
* pequeno detalhe visual.

⸻

16. YOUR DECKS

Mostrar cards horizontais dos principais decks.

Cada deck deve possuir:

* nome;
* commander;
* mana colors;
* number of cards;
* value;
* win rate;
* last played.

Exemplo:

DIMIR CONTROL

63.4% WIN RATE

$842 VALUE

⸻

17. COLLECTION PAGE

Rota:

/collection

Criar página completa para gerenciamento da coleção.

Header:

MY COLLECTION

Subheadline:

2,481 cards across 18 sets.

⸻

SEARCH

Campo:

Search cards…

Busca deve funcionar.

Filtrar a lista em tempo real.

⸻

18. COLLECTION FILTERS

Filtros funcionais:

Color

Rarity

Type

Set

Price

Foil

Owned

Wishlist

Criar sistema de filtros combináveis.

⸻

19. CARD GRID

Mostrar cartas em grid.

Cada item:

* imagem;
* nome;
* set;
* rarity;
* quantity;
* value.

Criar hover state.

No hover:

* pequena elevação;
* sombra;
* glow muito discreto;
* mostrar ações rápidas.

⸻

20. VIEW TOGGLE

Permitir alternar:

GRID

LIST

Na visualização LIST:

colunas:

Card

Set

Rarity

Quantity

Price

Total Value

⸻

21. CARD DETAIL

Ao clicar em uma carta, abrir um side drawer.

Não navegar imediatamente para outra página.

Mostrar:

imagem da carta;

nome;

set;

rarity;

mana cost;

type;

quantity owned;

foil quantity;

current market price;

price change;

price history;

actions.

Ações:

ADD TO DECK

ADD TO WISHLIST

TRADE

SELL

⸻

22. DECKS

Rota:

/decks

Mostrar:

MY DECKS

Cards com:

* deck name;
* commander;
* colors;
* win rate;
* value;
* last played;
* number of cards.

Botão:

CREATE NEW DECK

⸻

23. DECK BUILDER

Rota:

/decks/new

Criar uma interface avançada.

Desktop:

3 colunas.

COLLECTION

DECK

ANALYSIS

⸻

COLLECTION

Pesquisar cartas.

Adicionar cartas ao deck.

⸻

DECK

Organizar:

Commander

Creatures

Instants

Sorceries

Artifacts

Enchantments

Planeswalkers

Lands

Mostrar quantidade de cada categoria.

Permitir:

* adicionar;
* remover;
* aumentar quantidade;
* diminuir quantidade.

⸻

ANALYSIS

Mostrar:

Average Mana Value

Mana Curve

Color Distribution

Card Types

Lands

Creatures

Removal

Ramp

Deck Value

Win Rate

⸻

24. DRAG AND DROP

Se for viável dentro do tempo de implementação, permitir drag-and-drop para adicionar cartas ao deck.

Se não for viável, implementar primeiro uma interação robusta de:

ADD TO DECK

e quantidade +/−.

Não sacrificar estabilidade por uma funcionalidade de drag-and-drop.

⸻

25. MARKET

Rota:

/market

Criar uma interface inspirada em terminal financeiro premium.

Header:

MARKET

Subheadline:

Track the value of your collection.

⸻

PORTFOLIO

Mostrar:

Total Collection Value

Today’s Change

Monthly Change

Yearly Change

⸻

PERFORMANCE CHART

Gráfico de linha.

⸻

TOP GAINERS

Cards:

Card name

Current price

24h change

⸻

TOP LOSERS

Mesmo formato.

⸻

26. WISHLIST

Rota:

/wishlist

Header:

WISHLIST

Subheadline:

Complete your collection.

Mostrar:

Total cards wanted

Estimated cost

Cards acquired

Progress.

⸻

27. SETS

Rota:

/sets

Mostrar sets disponíveis.

Cada set deve possuir:

* nome;
* símbolo fictício ou placeholder visual;
* cards owned;
* total cards;
* percentage complete;
* estimated missing cost.

Exemplo:

INNISTRAD

87 / 264

33%

⸻

28. PROFILE

Rota:

/profile

Criar:

PLANESWALKER PROFILE

Nome:

CECÍLIA

Archetype:

DIMIR COLLECTOR

Stats:

Cards

2,481

Sets

18

Decks

14

Games

126

⸻

29. ACHIEVEMENTS

Criar sistema visual de conquistas.

Exemplos:

FIRST DECK

1,000 CARDS

FIRST MYTHIC

FULL SET

COLLECTOR

DECK BUILDER

GAME NIGHT

Algumas desbloqueadas.

Algumas bloqueadas.

Visual elegante.

⸻

30. MICROINTERAÇÕES

Adicionar microinterações apenas onde agregarem valor.

Exemplos:

* hover em cartas;
* números animando ao carregar;
* progresso;
* gráfico;
* filtros;
* abertura do drawer;
* toast ao adicionar carta;
* sucesso ao criar deck.

Evitar animações exageradas.

Utilizar transições rápidas e suaves.

⸻

31. ESTADOS

Toda interface deve considerar:

Loading

Empty

Error

Success

Hover

Focus

Active

Selected

Disabled

Não deixar componentes sem comportamento.

⸻

32. RESPONSIVIDADE

A aplicação precisa funcionar perfeitamente em:

1440px

1280px

1024px

768px

390px

Mobile não deve simplesmente diminuir o desktop.

Adaptar a experiência.

No mobile:

Sidebar → bottom navigation/drawer.

Dashboard:

cards empilhados.

Charts:

redimensionados.

Collection:

grid adaptável.

Deck Builder:

transformar as três colunas em tabs:

COLLECTION

DECK

ANALYSIS

⸻

33. ACESSIBILIDADE

Implementar:

* contraste adequado;
* foco visível;
* navegação por teclado;
* aria-labels quando necessário;
* botões reais;
* inputs reais;
* sem depender apenas de cor para transmitir informação.

⸻

34. UX

A interface deve priorizar:

1. Clareza
2. Hierarquia
3. Descoberta
4. Eficiência
5. Feedback

Não adicionar funcionalidades apenas porque parecem interessantes.

Toda funcionalidade deve ter uma razão de produto.

⸻

35. COMPONENTES

Criar componentes reutilizáveis:

AppShell

Sidebar

MobileNavigation

PageHeader

StatCard

ChartCard

CardTile

CardDrawer

FilterBar

SearchInput

Badge

ManaBadge

ProgressBar

ActivityItem

DeckCard

DeckList

DataTable

Tooltip

Modal

Toast

EmptyState

LoadingState

⸻

36. DESIGN TOKENS

Criar tokens para:

colors

spacing

radius

typography

shadows

transitions

Não espalhar valores aleatórios pelo código.

⸻

37. DADOS DE EXEMPLO

Criar uma coleção suficientemente grande para demonstrar o funcionamento.

Idealmente:

100+ cartas mockadas.

Pelo menos:

10 decks.

18 sets.

20 atividades.

30 wishlist items.

Não é necessário cadastrar milhares de cartas.

Os dados devem parecer realistas.

⸻

38. IMAGENS DE CARTAS

Quando possível, utilizar imagens públicas adequadas para prototipagem.

Se não houver acesso ou houver problemas de direitos/integração, utilizar placeholders elegantes.

IMPORTANTE:

Não criar imagens que confundam o usuário fazendo parecer que são assets oficiais.

A arquitetura deve permitir trocar os placeholders por uma API de cartas posteriormente.

⸻

39. PERFORMANCE

Evitar:

* componentes gigantes;
* renderizações desnecessárias;
* imagens sem otimização;
* dependências desnecessárias.

A aplicação deve carregar rapidamente.

⸻

40. INTERAÇÕES FUNCIONAIS

Não quero apenas uma interface visual.

Implementar de verdade:

* navegação;
* busca;
* filtros;
* toggle grid/list;
* abrir card drawer;
* adicionar carta ao deck;
* remover carta do deck;
* alterar quantidade;
* criar deck;
* editar deck;
* wishlist;
* tabs;
* gráficos;
* responsive navigation;
* toast feedback.

⸻

41. PERSISTÊNCIA

Nesta primeira versão, pode utilizar localStorage para:

* decks criados;
* cartas adicionadas;
* wishlist;
* preferências simples.

Criar uma camada de persistência separada.

Não misturar localStorage diretamente em componentes visuais.

⸻

42. ARQUITETURA

Organizar o projeto aproximadamente assim:

src/

components/

components/ui/

components/cards/

components/charts/

components/decks/

components/layout/

pages/

data/

hooks/

services/

types/

utils/

lib/

styles/

Não precisa seguir exatamente essa estrutura se outra arquitetura for tecnicamente superior, mas mantenha clara separação de responsabilidades.

⸻

43. QUALITY BAR

Antes de considerar o projeto terminado, faça uma revisão como um:

Senior Product Designer

Senior Front-End Engineer

UX Engineer

Verifique:

* alinhamento;
* espaçamento;
* hierarquia;
* consistência;
* contraste;
* responsividade;
* estados;
* navegação;
* bugs;
* overflow;
* componentes quebrando;
* textos cortados;
* gráficos;
* interações;
* acessibilidade.

Não aceite uma solução apenas “boa o suficiente”.

⸻

44. PRIORIDADE DE IMPLEMENTAÇÃO

Implementar nesta ordem:

PHASE 1

Design system

App shell

Sidebar

Navigation

Dashboard

⸻

PHASE 2

Collection

Search

Filters

Card drawer

Grid/list

⸻

PHASE 3

Decks

Deck Builder

Deck Analytics

⸻

PHASE 4

Market

Wishlist

Sets

⸻

PHASE 5

Profile

Achievements

⸻

PHASE 6

Responsive

Microinteractions

Accessibility

Polish

⸻

45. REGRA IMPORTANTE

Não tentar implementar tudo de uma vez de maneira superficial.

Construa uma fundação sólida.

Cada página deve parecer pronta para apresentação em um portfólio profissional.

⸻

46. RESULTADO ESPERADO

Ao abrir o projeto, o usuário deve imediatamente perceber:

“Isso parece um produto real.”

Não deve parecer:

“Isso parece um template de dashboard.”

A interface deve ter personalidade.

Deve existir uma identidade visual clara.

Deve haver consistência entre:

Dashboard

Collection

Decks

Market

Wishlist

Profile

⸻

47. EXPERIÊNCIA FINAL

A sensação desejada é:

Você não está olhando para uma planilha de cartas.

Você está entrando em uma central pessoal de gerenciamento de um universo de cartas.

A experiência deve ser:

precisa

elegante

premium

misteriosa

informativa

minimalista

envolvente

⸻

48. NÃO FAZER

Não:

* usar Comic Sans;
* usar fontes medievais;
* usar excesso de ouro;
* usar pergaminho;
* usar bordas ornamentadas em tudo;
* usar neon;
* usar background cheio de partículas;
* colocar dragões aleatórios;
* colocar mana symbols gigantes como decoração;
* copiar Magic literalmente;
* copiar interfaces de outros produtos;
* criar botões que não fazem nada;
* criar gráficos apenas decorativos;
* criar páginas sem estados;
* usar lorem ipsum;
* deixar mobile quebrado.

⸻

49. IMPORTANTE SOBRE COPYRIGHT

Este é um projeto conceitual para portfólio.

Não utilizar logos oficiais de Magic: The Gathering.

Não copiar elementos proprietários da interface oficial.

Não apresentar ARCANA como produto oficial.

Quando houver necessidade de cartas/arte, utilizar placeholders ou dados/imagens adequados para prototipagem.

A identidade principal deve ser original.

⸻

50. DEFINIÇÃO DE PRONTO

O projeto só deve ser considerado concluído quando:

✓ Dashboard funcional

✓ Collection funcional

✓ Search funcional

✓ Filters funcionais

✓ Card drawer funcional

✓ Grid/List funcional

✓ Decks funcionais

✓ Deck Builder funcional

✓ Deck Analytics funcional

✓ Market funcional

✓ Wishlist funcional

✓ Sets funcional

✓ Profile funcional

✓ Achievements funcional

✓ Navegação funcional

✓ Responsividade funcional

✓ Estados de loading/empty/error

✓ Persistência local básica

✓ Design system consistente

✓ Sem erros de console

✓ Sem links quebrados

✓ Sem overflow horizontal indesejado

✓ Interface visualmente refinada

✓ Código organizado

⸻

51. PRIMEIRO PASSO

Antes de começar a implementar, pense como um Product Designer.

Defina mentalmente:

* arquitetura;
* componentes;
* estados;
* fluxos;
* hierarquia.

Depois construa a aplicação.

Não me entregue uma explicação longa sobre o que você pretende fazer.

Comece construindo o projeto.

Depois de cada grande etapa, valide visualmente a aplicação e corrija problemas de layout antes de avançar.

Priorize qualidade visual e funcionalidade real.

O objetivo final é produzir um case de UI/UX + Front-End de nível profissional, pronto para ser apresentado em um portfólio de designer.