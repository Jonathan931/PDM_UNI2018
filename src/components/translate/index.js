import I18n from 'react-native-i18n';
import en from './en-US';
import ptBR from './ pt-BR';

// Em casos de idiomas como 'en-US' ou 'en-GB', ele irá consultar a config 'en'
I18n.fallbacks = true

// Setamos os idiomar suportados. Obs: utilizei o 'object shorthand' para setar o objeto 'en'
I18n.translations = {
  'pt-BR': ptBR,
  'en': en,
}

// criamos a funcão que irá receber a chave e iremos retornar a tradução
const translate = key => I18n.t(key)

export default translate