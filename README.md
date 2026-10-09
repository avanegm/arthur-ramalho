# Arthur Ramalho — Advocacia e Consultoria Jurídica

Site institucional responsivo em React + Vite + TypeScript, seguindo a direção visual clássica e sofisticada aprovada no conceito: azul-marinho, dourado, off-white, tipografia serifada e fotografia jurídica.

## Requisitos

- Node.js 20 ou mais recente
- npm

## Rodar localmente

```bash
npm install
npm run dev
```

Abra a URL mostrada no terminal pelo Vite.

## Gerar build de produção

```bash
npm run build
npm run preview
```

O resultado de produção será gerado em `dist/`.

## Personalizar antes de publicar

Edite `src/config.ts`:

- `whatsappNumber`: número com código do país e DDD, apenas dígitos (exemplo de formato: `5515999999999`).
- `email`: e-mail profissional, caso queira exibi-lo no contato.
- `oabNumber`: número e UF da OAB depois que estiver confirmado.
- `city`: texto de localização/área de atendimento.

Os botões de WhatsApp rolam para a seção de contato enquanto o número não estiver configurado. Depois de adicionar o número, eles abrem uma conversa com uma mensagem inicial.

## Conteúdo e validação

As áreas de atuação e a formação foram montadas com base nas informações fornecidas para este projeto. Antes de publicar, confirme com Arthur os dados profissionais, a situação e identificação da inscrição na OAB, o texto biográfico, as formas de atendimento e os canais de contato. Não publique informações provisórias como se estivessem confirmadas.

## Imagens

As fotografias locais em `public/images/` foram extraídas de áreas exclusivamente visuais do mockup conceitual aprovado para que a primeira versão possa rodar sem depender de um serviço externo de imagens.
