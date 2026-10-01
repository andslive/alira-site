# Alira — Site institucional

Site estático responsivo, sem dependências e sem etapa de build. As vendas de infoprodutos são realizadas exclusivamente pelo WhatsApp.

## Idiomas

Bandeiras no cabeçalho: BR (pt-BR), CO (es-CO), MX (es-MX) e AR (es-AR). Toda a página é traduzida ao clicar, inclusive privacidade, informações de uso, metadados e rótulos de acessibilidade. A seleção fica na URL e é lembrada neste navegador por localStorage.

As traduções ficam em translations.js. Ao editar conteúdo, mantenha as quatro versões completas. As quatro bandeiras estão embutidas diretamente no HTML, a partir de lipis/flag-icons, sob licença MIT. Não dependem do envio da pasta assets para aparecer. As fontes SVG e a licença também estão em assets/flags.

## Publicar na Vercel

1. Extraia este arquivo ZIP.
2. Envie o conteúdo da pasta alira-site para um novo repositório GitHub.
3. Na Vercel, importe o repositório e escolha Framework Preset: Other.
4. Em Build Command, ative Override e deixe o campo vazio. Deixe Output Directory no padrão (a raiz do projeto, pois não há pasta public). Root Directory também é a raiz, se os arquivos forem enviados diretamente ao repositório.
5. Publique e, se desejar, conecte seu domínio.

Alternativa com Vercel CLI instalada: execute `vercel` dentro desta pasta e siga as instruções da conta.

## Contatos

WhatsApp principal: +55 87 99650-9687. Alternativo: +55 74 99194-6784.
Os contatos podem ser alterados em config.js. E-mail institucional: suporte@aliraconteudos.com.br. Os links das páginas HTML também devem ser atualizados para a navegação sem JavaScript. O e-mail é canal de suporte; as vendas são realizadas exclusivamente pelo WhatsApp.

## Antes da publicação

- Confira os dados e certifique-se de que os dois números recebem atendimento comercial.
- O endereço de e-mail foi incluído no site. A caixa de correio precisa existir em um provedor de e-mail e ter os registros de DNS configurados para receber mensagens. Publicar o site não cria a caixa de correio.
- Para conectar o domínio, abra Settings > Domains no projeto Vercel, adicione aliraconteudos.com.br e copie exatamente os registros DNS indicados para o painel onde comprou o domínio. Preserve os registros MX e TXT do serviço de e-mail.
- As páginas de privacidade e uso descrevem apenas este site e precisam ser atualizadas se adicionar pixels, formulários, checkout ou coleta adicional.
- Acrescente as condições específicas de entrega, cancelamento e reembolso nas ofertas dos produtos.
- Não foram incluídos depoimentos, números de clientes, catálogo fictício ou selo de aprovação.
- Arquivos cadastrais pessoais e contrato social não são distribuídos junto ao site.

O projeto é publicado pela integração do repositório andslive/alira-site com a Vercel. Um commit na branch main dispara uma nova publicação, conforme as configurações do projeto.

## Visibilidade e plano

Para tornar o repositório privado, abra Settings > General > Danger Zone > Change repository visibility > Change to private e confirme no GitHub.

Para mudar o plano da equipe Vercel, selecione a equipe do projeto e abra Settings > Billing > Plan > Upgrade. A ativação do Pro é uma assinatura paga, confirmada na conta do usuário. O Pro pertence à equipe, não é uma configuração do HTML do site.
