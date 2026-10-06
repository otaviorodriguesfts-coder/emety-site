export const showResults=false; // mude para true quando colocar depoimentos e cases reais
export const nav=[['Serviços','#servicos'],['Processo','#processo'],...(showResults?[['Resultados','#resultados']]:[]),['FAQ','#faq']];
export const niches=['Roofing','HVAC','Plumbing','Electrical','Landscaping','Remodeling','Cleaning','Pest Control'];
export const stats=[['Google','Foco em busca local'],['Leads','Chamadas e orçamentos'],['100%','Rastreamento claro'],['EUA','Home Services']];
export const services=[
['Landing pages mobile-first','Páginas rápidas, desenhadas para converter homeowners em ligações e pedidos de orçamento.'],
['SEO local e Google Maps','Presença forte onde o cliente procura: Google Business Profile, Maps e buscas por cidade.'],
['Google Ads e Local Services Ads','Campanhas para aparecer no momento da urgência, com orçamento sob controle.'],
['Branding','Identidade que transmite confiança e destaca sua empresa frente aos concorrentes locais.'],
['Call tracking e analytics','Saiba quais buscas, anúncios e páginas geram oportunidades reais.'],
['Testes e otimização de conversão','User testing e melhoria contínua para transformar mais visitas em clientes.']];
export const benefits=[['Crescimento previsível','Um sistema mensurável, não ações soltas.'],['Leads qualificados','Foco em ligações e agendamentos, não em cliques vazios.'],['Transparência total','Relatórios claros de origem de cada lead.'],['Especialistas em Home Services','Conhecemos a sazonalidade e a urgência do seu mercado.']];
export const steps=[['Diagnóstico','Auditoria da presença local, Google e conversão atual.'],['Estratégia','Plano por serviço, cidade e canal.'],['Execução','Páginas, perfil Google e campanhas no ar.'],['Otimização','Testes e ajustes contínuos guiados por dados.']];
export const testimonials=[1,2,3].map(i=>({q:'[PLACEHOLDER] Depoimento de cliente Emety — substituir por texto autorizado.',n:'[Nome do cliente]',r:'[Cargo, Empresa, Estado]',i}));
export const cases=[['[PLACEHOLDER] +000%','Leads mensais','[Segmento · Cidade, EUA]'],['[PLACEHOLDER] -00%','Custo por lead','[Segmento · Cidade, EUA]'],['[PLACEHOLDER] #1','Google Maps local','[Segmento · Cidade, EUA]']];
export const faqs=[['Para quais empresas a Emety é indicada?','Empresas de Home Services nos EUA, como roofing, HVAC, plumbing, elétrica, landscaping, reformas, limpeza e pest control.'],['O atendimento é em português?','Sim. Nossa comunicação com você é em português; as campanhas e páginas são criadas em inglês para o público americano.'],['Como vocês medem resultados?','Com call tracking, Google Analytics e Search Console, conectando cada lead à sua origem.'],['Quanto tempo até ver resultados?','Anúncios podem gerar oportunidades rapidamente; SEO local costuma amadurecer em meses. Definimos metas no diagnóstico.']];

export const whatsapp='https://wa.me/12102798494?text='+encodeURIComponent('Olá! Vim pelo site da Emety e quero um diagnóstico gratuito.');
