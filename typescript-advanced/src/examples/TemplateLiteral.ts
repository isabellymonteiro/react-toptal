// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html

type MessageType = "error" | "notification" | "request"

type Lang = "br" | "en" | "fr"

type MessageTypeTranslations = `${MessageType}_${Lang}`

export type MessageTranslations = {
  [key in MessageTypeTranslations]: Capitalize<string>
}

/*
  // works
  const error: Partial<MessageTranslations> = {
    error_br: "Algo deu errado",
    error_en: "Something went wrong",
    error_fr: "Il y a eu une erreur!"
  }

  // does not work
  const anotherError: Partial<MessageTranslations> = {
    br: "algo deu errado",
    en: "something went wrong",
    fr: "il y a eu une erreur!"
  }

  // does not work
  const otherError: Partial<MessageTranslations> = {
    error_br: "algo deu errado",
    error_en: "something went wrong",
    error_fr: "il y a eu une erreur!"
  }
*/
