export type ProcessStep = {
  belt: string;
  title: string;
  text: string;
};

export const processSteps: ProcessStep[] = [
  {
    belt: "Paso 01 — Respira",
    title: "Diagnóstico",
    text: "Analizamos cómo llegan y se pierden consultas hoy: canales, horarios pico, visibilidad en Google y puntos de fuga. Sin compromiso.",
  },
  {
    belt: "Paso 02 — Alinea",
    title: "Diseño del sistema",
    text: "Te proponemos el combo exacto: qué automatizar, qué responde el chatbot, qué capta la landing, qué atiende la voz y qué posicionar en buscadores.",
  },
  {
    belt: "Paso 03 — Activa",
    title: "Implementación",
    text: "Lo montamos, lo entrenamos con los datos de tu estudio y lo probamos contigo hasta que quede listo para el día a día.",
  },
  {
    belt: "Paso 04 — Fluye",
    title: "Optimización continua",
    text: "Medimos conversaciones, consultas captadas y visibilidad. Ajustamos con constancia para que el sistema mejore poco a poco, como una buena práctica.",
  },
];
