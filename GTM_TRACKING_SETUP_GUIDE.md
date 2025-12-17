# Guia Completo de Configuração GTM - All Granite & Stone

## 📋 Índice
1. [Resumo das Implementações](#resumo-das-implementações)
2. [Eventos Implementados](#eventos-implementados)
3. [Configuração no Google Tag Manager](#configuração-no-google-tag-manager)
4. [Teste e Validação](#teste-e-validação)

---

## 🎯 Resumo das Implementações

### Arquivos Criados/Modificados

#### 1. **Novo Arquivo: `src/utils/gtm.js`**
Helper centralizado para todos os eventos de tracking. Contém funções para:
- `trackFormSubmit()` - Submissão de formulário
- `trackPhoneClick()` - Cliques em telefone
- `trackEmailClick()` - Cliques em email
- `trackCTAClick()` - Cliques em CTAs
- `trackPortfolioView()` - Visualização de portfolio
- `trackPortfolioFilter()` - Filtros de portfolio
- `trackServiceClick()` - Cliques em serviços
- `trackSocialClick()` - Cliques em redes sociais
- `trackDirectionsClick()` - Cliques em direções

#### 2. **Arquivos Modificados com Tracking:**
- ✅ `src/components/ContactForm.jsx` - Form submission
- ✅ `src/components/Hero.jsx` - Phone clicks (desktop/mobile), CTA clicks, Portfolio link
- ✅ `src/components/ServiceAreaMap.jsx` - Phone click, Directions
- ✅ `src/components/FinalCTASection.jsx` - Phone click, CTA click
- ✅ `src/components/Footer.jsx` - Phone, Email, Social, Services, Portfolio
- ✅ `src/pages/Portfolio.jsx` - Portfolio filters

---

## 📊 Eventos Implementados

### 1. **form_submit** - Submissão de Formulário ✅ CRÍTICO

**Quando dispara:** Quando usuário submete o formulário de contato com sucesso

**Localização:** ContactForm (seção "Get Your Free Quote")

**Data Layer:**
```javascript
{
  event: 'form_submit',
  form_name: 'contact_quote',
  form_location: 'quote_section'
}
```

**Dados capturados:**
- `form_name`: Nome do formulário ('contact_quote')
- `form_location`: Localização na página ('quote_section')

---

### 2. **phone_click** - Cliques em Telefone ✅ CRÍTICO

**Quando dispara:** Quando usuário clica em qualquer link de telefone

**Localizações (6 total):**
1. Hero Desktop - Botão "Call Us" no header
2. Hero Mobile - Botão "Call Now" no menu mobile
3. Showroom - Número de telefone na seção showroom
4. Final CTA - Número de telefone grande na seção final
5. Footer - Número de telefone no rodapé

**Data Layer:**
```javascript
{
  event: 'phone_click',
  click_location: 'hero_desktop' | 'hero_mobile' | 'showroom' | 'final_cta' | 'footer'
}
```

**Dados capturados:**
- `click_location`: Onde o telefone foi clicado

---

### 3. **email_click** - Cliques em Email ✅ IMPORTANTE

**Quando dispara:** Quando usuário clica no link de email

**Localização:** Footer

**Data Layer:**
```javascript
{
  event: 'email_click',
  click_location: 'footer'
}
```

**Dados capturados:**
- `click_location`: Onde o email foi clicado ('footer')

---

### 4. **cta_click** - Cliques em CTAs ✅ IMPORTANTE

**Quando dispara:** Quando usuário clica em botões de Call-to-Action

**Localizações:**
1. Hero - "Get Free Quote" e "Visit Showroom"
2. Final CTA - "Get Your Free Quote Today"

**Data Layer:**
```javascript
{
  event: 'cta_click',
  cta_text: 'get_free_quote' | 'visit_showroom',
  cta_location: 'hero' | 'final_cta'
}
```

**Dados capturados:**
- `cta_text`: Texto/identificador do CTA
- `cta_location`: Localização do CTA na página

---

### 5. **portfolio_view** - Visualização de Portfolio ✅ IMPORTANTE

**Quando dispara:** Quando usuário navega para a página de Portfolio

**Localizações:**
1. Header Mobile Menu - Link "Portfolio"
2. Footer - Link "Portfolio"

**Data Layer:**
```javascript
{
  event: 'portfolio_view',
  click_location: 'header' | 'footer'
}
```

**Dados capturados:**
- `click_location`: De onde o usuário acessou o portfolio

---

### 6. **portfolio_filter** - Filtros de Portfolio ✅ IMPORTANTE

**Quando dispara:** Quando usuário seleciona um filtro na página de Portfolio

**Localização:** Portfolio page - Botões de filtro

**Data Layer:**
```javascript
{
  event: 'portfolio_filter',
  filter_category: 'All' | 'Kitchens' | 'Bathrooms' | 'Outdoor' | 'Commercial'
}
```

**Dados capturados:**
- `filter_category`: Categoria selecionada

---

### 7. **service_click** - Cliques em Serviços ✅ ÚTIL

**Quando dispara:** Quando usuário clica em um link de serviço

**Localização:** Footer - Links de serviços

**Data Layer:**
```javascript
{
  event: 'service_click',
  service_name: 'Kitchen Countertops' | 'Bathroom Vanities' | 'Outdoor Kitchens' | 'Commercial Projects' | 'Custom Works'
}
```

**Dados capturados:**
- `service_name`: Nome do serviço clicado

---

### 8. **social_click** - Cliques em Redes Sociais ✅ ÚTIL

**Quando dispara:** Quando usuário clica em ícone de rede social

**Localização:** Footer - Ícones sociais

**Data Layer:**
```javascript
{
  event: 'social_click',
  social_network: 'facebook' | 'instagram'
}
```

**Dados capturados:**
- `social_network`: Rede social clicada

**URLs Atualizadas:**
- Facebook: https://www.facebook.com/allgraniteandstone
- Instagram: https://www.instagram.com/allgraniteandstone/

---

### 9. **directions_click** - Cliques em Direções ✅ ÚTIL

**Quando dispara:** Quando usuário clica no botão "Get Directions"

**Localização:** ServiceAreaMap - Botão de direções

**Data Layer:**
```javascript
{
  event: 'directions_click',
  destination: 'google_maps'
}
```

**Dados capturados:**
- `destination`: Destino do link ('google_maps')

---

## 🔧 Configuração no Google Tag Manager

### Passo 1: Acessar o GTM

1. Acesse [Google Tag Manager](https://tagmanager.google.com/)
2. Selecione o container **GTM-5J7L2ZRR**
3. Clique em "Workspace" para começar a configuração

---

### Passo 2: Criar Variáveis da Camada de Dados

Vamos criar variáveis para capturar os dados enviados pelo site.

#### 2.1 Criar Variável: form_name

1. No menu lateral, clique em **"Variáveis"**
2. Na seção "Variáveis definidas pelo usuário", clique em **"Nova"**
3. Clique no ícone de lápis para nomear: **`DL - form_name`**
4. Clique em "Configuração da variável"
5. Selecione **"Variável da camada de dados"**
6. Em "Nome da variável da camada de dados", digite: **`form_name`**
7. Clique em **"Salvar"**

#### 2.2 Criar Variável: form_location

Repita o processo acima com:
- Nome: **`DL - form_location`**
- Nome da variável: **`form_location`**

#### 2.3 Criar Variável: click_location

- Nome: **`DL - click_location`**
- Nome da variável: **`click_location`**

#### 2.4 Criar Variável: cta_text

- Nome: **`DL - cta_text`**
- Nome da variável: **`cta_text`**

#### 2.5 Criar Variável: cta_location

- Nome: **`DL - cta_location`**
- Nome da variável: **`cta_location`**

#### 2.6 Criar Variável: filter_category

- Nome: **`DL - filter_category`**
- Nome da variável: **`filter_category`**

#### 2.7 Criar Variável: service_name

- Nome: **`DL - service_name`**
- Nome da variável: **`service_name`**

#### 2.8 Criar Variável: social_network

- Nome: **`DL - social_network`**
- Nome da variável: **`social_network`**

#### 2.9 Criar Variável: destination

- Nome: **`DL - destination`**
- Nome da variável: **`destination`**

**✅ Total de variáveis criadas: 9**

---

### Passo 3: Criar Acionadores (Triggers)

Agora vamos criar os acionadores que detectam quando cada evento acontece.

#### 3.1 Acionador: Form Submit

1. No menu lateral, clique em **"Acionadores"**
2. Clique em **"Novo"**
3. Nome: **`CE - Form Submit`** (CE = Custom Event)
4. Clique em "Configuração do acionador"
5. Selecione **"Evento personalizado"**
6. Nome do evento: **`form_submit`**
7. Marque **"Usar correspondência de regex"**: NÃO
8. Clique em **"Salvar"**

#### 3.2 Acionador: Phone Click

- Nome: **`CE - Phone Click`**
- Tipo: **Evento personalizado**
- Nome do evento: **`phone_click`**

#### 3.3 Acionador: Email Click

- Nome: **`CE - Email Click`**
- Tipo: **Evento personalizado**
- Nome do evento: **`email_click`**

#### 3.4 Acionador: CTA Click

- Nome: **`CE - CTA Click`**
- Tipo: **Evento personalizado**
- Nome do evento: **`cta_click`**

#### 3.5 Acionador: Portfolio View

- Nome: **`CE - Portfolio View`**
- Tipo: **Evento personalizado**
- Nome do evento: **`portfolio_view`**

#### 3.6 Acionador: Portfolio Filter

- Nome: **`CE - Portfolio Filter`**
- Tipo: **Evento personalizado**
- Nome do evento: **`portfolio_filter`**

#### 3.7 Acionador: Service Click

- Nome: **`CE - Service Click`**
- Tipo: **Evento personalizado**
- Nome do evento: **`service_click`**

#### 3.8 Acionador: Social Click

- Nome: **`CE - Social Click`**
- Tipo: **Evento personalizado**
- Nome do evento: **`social_click`**

#### 3.9 Acionador: Directions Click

- Nome: **`CE - Directions Click`**
- Tipo: **Evento personalizado**
- Nome do evento: **`directions_click`**

**✅ Total de acionadores criados: 9**

---

### Passo 4: Criar Tags do Google Analytics 4 (GA4)

Agora vamos criar as tags que enviam os eventos para o Google Analytics 4.

**IMPORTANTE:** Você precisa ter uma propriedade GA4 configurada. Se não tiver:
1. Acesse [Google Analytics](https://analytics.google.com/)
2. Crie uma propriedade GA4
3. Anote o **ID de Medição** (formato: G-XXXXXXXXXX)

#### 4.1 Criar Tag de Configuração GA4 (apenas uma vez)

1. No menu lateral, clique em **"Tags"**
2. Clique em **"Nova"**
3. Nome: **`GA4 - Configuration`**
4. Clique em "Configuração da tag"
5. Selecione **"Google Analytics: Evento GA4"**
6. Em "ID de medição", cole seu **ID GA4** (G-XXXXXXXXXX)
7. Em "Nome do evento", digite: **`page_view`**
8. Clique em "Acionamento"
9. Selecione **"All Pages"** (Todas as páginas)
10. Clique em **"Salvar"**

#### 4.2 Tag: Form Submit Event

1. Clique em **"Nova"** tag
2. Nome: **`GA4 - Form Submit`**
3. Tipo: **"Google Analytics: Evento GA4"**
4. ID de medição: **Seu ID GA4** (ou selecione "Configuração de tag" e escolha a tag de configuração criada)
5. Nome do evento: **`form_submit`**
6. Clique em **"Parâmetros do evento"** > **"Adicionar linha"**
   - Nome do parâmetro: **`form_name`**
   - Valor: Clique no ícone **+** e selecione **`{{DL - form_name}}`**
7. Adicione outra linha:
   - Nome do parâmetro: **`form_location`**
   - Valor: **`{{DL - form_location}}`**
8. Acionamento: Selecione **`CE - Form Submit`**
9. Clique em **"Salvar"**

#### 4.3 Tag: Phone Click Event

- Nome: **`GA4 - Phone Click`**
- Tipo: **Google Analytics: Evento GA4**
- ID de medição: **Seu ID GA4**
- Nome do evento: **`phone_click`**
- Parâmetros:
  - `click_location` = `{{DL - click_location}}`
- Acionamento: **`CE - Phone Click`**

#### 4.4 Tag: Email Click Event

- Nome: **`GA4 - Email Click`**
- Tipo: **Google Analytics: Evento GA4**
- ID de medição: **Seu ID GA4**
- Nome do evento: **`email_click`**
- Parâmetros:
  - `click_location` = `{{DL - click_location}}`
- Acionamento: **`CE - Email Click`**

#### 4.5 Tag: CTA Click Event

- Nome: **`GA4 - CTA Click`**
- Tipo: **Google Analytics: Evento GA4**
- ID de medição: **Seu ID GA4**
- Nome do evento: **`cta_click`**
- Parâmetros:
  - `cta_text` = `{{DL - cta_text}}`
  - `cta_location` = `{{DL - cta_location}}`
- Acionamento: **`CE - CTA Click`**

#### 4.6 Tag: Portfolio View Event

- Nome: **`GA4 - Portfolio View`**
- Tipo: **Google Analytics: Evento GA4**
- ID de medição: **Seu ID GA4**
- Nome do evento: **`portfolio_view`**
- Parâmetros:
  - `click_location` = `{{DL - click_location}}`
- Acionamento: **`CE - Portfolio View`**

#### 4.7 Tag: Portfolio Filter Event

- Nome: **`GA4 - Portfolio Filter`**
- Tipo: **Google Analytics: Evento GA4**
- ID de medição: **Seu ID GA4**
- Nome do evento: **`portfolio_filter`**
- Parâmetros:
  - `filter_category` = `{{DL - filter_category}}`
- Acionamento: **`CE - Portfolio Filter`**

#### 4.8 Tag: Service Click Event

- Nome: **`GA4 - Service Click`**
- Tipo: **Google Analytics: Evento GA4**
- ID de medição: **Seu ID GA4**
- Nome do evento: **`service_click`**
- Parâmetros:
  - `service_name` = `{{DL - service_name}}`
- Acionamento: **`CE - Service Click`**

#### 4.9 Tag: Social Click Event

- Nome: **`GA4 - Social Click`**
- Tipo: **Google Analytics: Evento GA4**
- ID de medição: **Seu ID GA4**
- Nome do evento: **`social_click`**
- Parâmetros:
  - `social_network` = `{{DL - social_network}}`
- Acionamento: **`CE - Social Click`**

#### 4.10 Tag: Directions Click Event

- Nome: **`GA4 - Directions Click`**
- Tipo: **Google Analytics: Evento GA4**
- ID de medição: **Seu ID GA4**
- Nome do evento: **`directions_click`**
- Parâmetros:
  - `destination` = `{{DL - destination}}`
- Acionamento: **`CE - Directions Click`**

**✅ Total de tags criadas: 10 (1 configuração + 9 eventos)**

---

### Passo 5: Publicar o Container

1. No canto superior direito, clique em **"Enviar"**
2. Digite um nome para a versão: **`Tracking Implementation - All Events`**
3. Adicione uma descrição: **`Implementação completa de tracking: form submit, phone clicks, email, CTAs, portfolio, services, social, directions`**
4. Clique em **"Publicar"**

---

## 🧪 Teste e Validação

### Método 1: Modo de Visualização do GTM

1. No GTM, clique em **"Visualizar"** (canto superior direito)
2. Digite a URL do seu site: **`https://seusite.com`**
3. Clique em **"Connect"**
4. Uma nova aba abrirá com o site e o painel de debug do GTM
5. Teste cada ação:
   - ✅ Preencha e envie o formulário → Verifique se `form_submit` aparece
   - ✅ Clique em telefone → Verifique se `phone_click` aparece com `click_location` correto
   - ✅ Clique em email → Verifique se `email_click` aparece
   - ✅ Clique em CTAs → Verifique se `cta_click` aparece
   - ✅ Navegue para Portfolio → Verifique se `portfolio_view` aparece
   - ✅ Filtre portfolio → Verifique se `portfolio_filter` aparece
   - ✅ Clique em serviço → Verifique se `service_click` aparece
   - ✅ Clique em rede social → Verifique se `social_click` aparece
   - ✅ Clique em direções → Verifique se `directions_click` aparece

### Método 2: Console do Navegador

1. Abra o site
2. Pressione **F12** para abrir o DevTools
3. Vá para a aba **"Console"**
4. Digite: `dataLayer` e pressione Enter
5. Você verá um array com todos os eventos
6. Teste cada ação e veja os eventos sendo adicionados ao dataLayer

### Método 3: Google Analytics 4 (após 24-48h)

1. Acesse [Google Analytics](https://analytics.google.com/)
2. Selecione sua propriedade
3. Vá para **"Relatórios" > "Engajamento" > "Eventos"**
4. Você verá todos os eventos personalizados:
   - `form_submit`
   - `phone_click`
   - `email_click`
   - `cta_click`
   - `portfolio_view`
   - `portfolio_filter`
   - `service_click`
   - `social_click`
   - `directions_click`

---

## 📈 Relatórios Recomendados no GA4

### 1. Funil de Conversão

Crie um funil para entender a jornada do usuário:

1. **Visualização de página** (page_view)
2. **Clique em CTA** (cta_click)
3. **Submissão de formulário** (form_submit)

### 2. Análise de Fontes de Contato

Compare qual método de contato é mais usado:
- `phone_click` vs `form_submit` vs `email_click`

### 3. CTAs Mais Efetivos

Analise qual CTA gera mais conversões:
- Parâmetro `cta_location`: hero vs final_cta
- Parâmetro `cta_text`: get_free_quote vs visit_showroom

### 4. Categorias de Portfolio Populares

Veja quais categorias mais interessam os usuários:
- Parâmetro `filter_category` no evento `portfolio_filter`

### 5. Engajamento com Serviços

Identifique quais serviços geram mais interesse:
- Parâmetro `service_name` no evento `service_click`

---

## 🎯 Conversões Sugeridas no GA4

Configure estas ações como conversões no GA4:

1. **form_submit** ✅ PRINCIPAL
2. **phone_click** ✅ PRINCIPAL
3. **email_click** ✅ SECUNDÁRIA
4. **cta_click** (apenas quando `cta_text` = 'get_free_quote') ✅ SECUNDÁRIA

Para marcar como conversão:
1. Vá para **"Configurar" > "Eventos"**
2. Encontre o evento
3. Ative a opção **"Marcar como conversão"**

---

## 📊 Resumo Final

### Implementação Completa

✅ **9 Variáveis** da camada de dados criadas
✅ **9 Acionadores** personalizados criados
✅ **10 Tags** GA4 criadas (1 config + 9 eventos)
✅ **9 Eventos** personalizados implementados no código
✅ **6 Localizações** de phone click rastreadas
✅ **2 Redes sociais** rastreadas (Facebook e Instagram)
✅ **5 Serviços** rastreados individualmente

### Impacto em Performance

✅ **Mínimo**: Apenas ~2KB de código JavaScript adicional
✅ **Sem bibliotecas extras**: Usa GTM já existente
✅ **Assíncrono**: Não bloqueia renderização
✅ **Condicional**: Só executa se GTM estiver carregado

### Dados Coletados

Com esta implementação, você poderá rastrear:

1. **Taxa de conversão** do formulário
2. **Preferência de contato** (telefone vs formulário vs email)
3. **CTAs mais efetivos** (Hero vs Final CTA)
4. **Localização de phone clicks** mais efetiva
5. **Categorias de portfolio** mais populares
6. **Serviços** com mais interesse
7. **Engajamento com redes sociais**
8. **Cliques em direções** (interesse em visitar showroom)
9. **Jornada completa do usuário**

---

## 🆘 Troubleshooting

### Eventos não aparecem no GTM Preview

1. Verifique se o site está carregando corretamente
2. Abra o console (F12) e procure por erros
3. Digite `dataLayer` no console para ver se os eventos estão sendo enviados
4. Verifique se o GTM está instalado corretamente na página

### Tags não disparam

1. Verifique se o acionador está configurado corretamente
2. Confirme que o nome do evento no acionador corresponde ao código
3. Use o modo de visualização para debug

### Dados não aparecem no GA4

1. Aguarde 24-48 horas para os dados aparecerem
2. Use o **"DebugView"** no GA4 para ver eventos em tempo real
3. Verifique se o ID de medição GA4 está correto

---

## 📞 Suporte

Se tiver dúvidas durante a implementação:

1. Consulte a [documentação oficial do GTM](https://support.google.com/tagmanager)
2. Consulte a [documentação do GA4](https://support.google.com/analytics/answer/9304153)
3. Use o modo de visualização do GTM para debug

---

---

## 🚀 Otimizações de Performance no GTM

### Configuração de Scripts Condicionais para Melhor Performance

Para melhorar o tempo de carregamento inicial da página, configure os seguintes scripts no GTM para carregar apenas quando necessário:

#### 1. **reCAPTCHA - Carregar Apenas quando Formulário Estiver Visível**

**Problema:** O CSS do reCAPTCHA (39.7 KiB) é carregado sempre, mesmo quando o formulário não está visível.

**Solução:** Configurar o reCAPTCHA para carregar apenas quando o formulário estiver visível:

1. No GTM, vá para **"Tags"** e encontre a tag do reCAPTCHA
2. Clique para editar
3. Em **"Acionamento"**, remova o acionador padrão (All Pages)
4. Crie um novo acionador do tipo **"Intersection Observer"** ou **"Scroll Depth"**:
   - Tipo: **"Element Visibility"**
   - Selecionar elemento: **`#quote`** ou **`iframe[id*="zRsGmUvk"]`** (ID do formulário)
   - Quando: **"50% visível"**
5. Salve e publique

**Benefício:** Economiza 39.7 KiB de CSS no carregamento inicial (~160ms de economia).

#### 2. **Facebook Pixel - Carregar após Interação do Usuário**

**Problema:** Facebook Pixel carrega scripts pesados no carregamento inicial.

**Solução:** Configurar para carregar apenas após primeira interação:

1. No GTM, encontre a tag do Facebook Pixel
2. Crie um novo acionador do tipo **"Evento personalizado"**
3. Nome do evento: **`gtm.click`** ou **`gtm.scroll`**
4. Configure para disparar apenas uma vez por sessão
5. Adicione este acionador à tag do Facebook Pixel
6. Salve e publique

#### 3. **Microsoft Clarity - Carregar após 3s ou Interação**

**Problema:** Clarity pode impactar performance no carregamento inicial.

**Solução:** Configurar delay de 3 segundos ou após primeira interação:

1. No GTM, encontre a tag do Clarity
2. Crie um novo acionador do tipo **"Timer"**
3. Configure para disparar após **3 segundos**
4. OU use acionador de evento personalizado similar ao Facebook Pixel
5. Salve e publique

**Nota:** Essas configurações devem ser testadas em ambiente de desenvolvimento antes de aplicar em produção.

---

**Documento criado em:** 11 de Novembro de 2025
**Versão:** 1.1
**Status:** ✅ Implementação Completa + Otimizações de Performance

