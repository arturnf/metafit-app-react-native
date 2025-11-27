## 📱 Aplicativo de Geração de Dietas com IA – React Native + Laravel

Este projeto é um aplicativo mobile desenvolvido em React Native, que se conecta a um backend em Laravel para gerar dietas personalizadas com IA, utilizando o modelo Gemini 2.0 Flash.

O app oferece uma experiência fluida e moderna, coletando dados do usuário, enviando ao backend e exibindo uma dieta completa gerada pela inteligência artificial.

👉 Backend do projeto (Laravel):
https://github.com/arturnf/api-metafit-app
![App Screenshot](https://arturferreira.com/imgs/imgsProjetos/metafit.png)

## 🚀 Visão Geral

O usuário informa:

- Peso

- Altura

- Idade

- Objetivo (perder, ganhar ou manter peso)

### Nível de atividade física

O app envia esses dados ao backend Laravel, que:

- Processa o perfil do usuário

- Conecta-se à API do Gemini 2.0 Flash

- Retorna uma dieta completa e personalizada

#### O resultado inclui:

- Refeições distribuídas ao longo do dia

- Recomendações nutricionais

- Ajuste conforme objetivo

- Texto estruturado e fácil de seguir

## 🛠️ Tecnologias Utilizadas
#### 📱 Mobile

- React Native (Expo)

- TypeScript

- React Query (TanStack)

- Context API (para estado global, como usuário)

- React Navigation

- useContext

#### ☁️ Backend

- Laravel 10

- PHP 8.2

- Gemini 2.0 Flash API (Google)

## 📚 Funcionalidades Principais
### 📝 Formulário de Dados

Entrada de peso, altura, idade

Seleção de objetivo

Nível de atividade física

Validação dos campos

### 🤖 Geração Inteligente de Dieta

Consumo de API usando React Query

Revalidação automática

Cache inteligente

Tratamento de erros e estados de carregamento

### 📋 Interface Moderna

Telas fluidas

Indicadores visuais de carregamento

Cards organizando a dieta gerada

## ⚙️ Como Rodar o Projeto

Clone:
```
  git clone https://github.com/arturnf/metafit-app-react-native
  cd metafit-app-react-native
```

Instale dependências:

```
  npm install
```

Configure a url em `services/api.ts`:

```
  baseURL: "suaUrlAqui"
```

Inicie o app
```
  npx expo start
```

