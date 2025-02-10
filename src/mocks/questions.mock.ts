import {
  IQuestion,
  QuestionTypes,
} from '@/pages/questions/models/question.model';

export const mockedQuestions: IQuestion[] = [
  {
    step: 1,
    title: '¿Tienes algún problema en el cuero cabelludo?',
    description: 'Selecciona todas las opciones que apliquen.',
    options: {
      type: QuestionTypes.MULTIPLE,
      data: [
        {
          label: 'Dolor repentino y/o enrojecimiento',
          value: 'sudden_pain_or_redness',
        },
        {
          label: 'Caspa',
          value: 'dandruff',
        },
        {
          label: 'Psoriasis',
          value: 'psoriasis',
        },
        {
          label: 'Quemadura de sol',
          value: 'sunburn',
        },
        {
          label: 'Otro',
          value: 'other',
        },
        {
          label: 'No, ninguno de los anteriores',
          value: 'none',
        },
      ],
    },
  },
  {
    step: 2,
    title: '¿Hay antecedentes de caída del cabello en tu familia?',
    description: '',
    options: {
      type: QuestionTypes.SINGLE,
      data: [
        {
          label: 'No',
          value: 'no',
        },
        {
          label: 'Sí',
          value: 'yes',
        },
        {
          label: 'No estoy seguro',
          value: 'im_not_sure',
        },
      ],
    },
  },
  {
    step: 3,
    title: '¿Tienes o has tenido alguna de las siguientes condiciones médicas?',
    description: 'Selecciona todas las opciones que apliquen.',
    options: {
      type: QuestionTypes.MULTIPLE,
      data: [
        {
          label: 'Cáncer de mama',
          value: 'breast_cancer',
        },
        {
          label: 'Cáncer de próstata',
          value: 'prostate_cancer',
        },
        {
          label: 'Presión arterial baja incontrolada',
          value: 'uncontrolled_low_blood_pressure',
        },
        {
          label: 'Otras enfermedades autoinmunes o reumáticas',
          value: 'autoimmune_or_rheumatic',
        },
        {
          label: 'Problemas de tiroides',
          value: 'thyroid_problems',
        },
        {
          label: 'Enfermedades del corazón',
          value: 'heart_diseases',
        },
        {
          label: 'Enfermedades de riñón o hígado',
          value: 'kidney_or_liver_disease',
        },
        {
          label: 'No, ninguno de los anteriores',
          value: 'none',
        },
      ],
    },
  },
  {
    step: 4,
    title: '¿Tienes o has tenido alguna de estas condiciones de salud mental?',
    description: 'Selecciona todas las opciones que apliquen.',
    options: {
      type: QuestionTypes.MULTIPLE,
      data: [
        {
          label: 'Depresión',
          value: 'depression',
        },
        {
          label: 'Desorden de bipolaridad',
          value: 'bipolar_disorder',
        },
        {
          label: 'Ansiedad',
          value: 'anxiety',
        },
        {
          label: 'Ataques de pánico',
          value: 'panic_attacks',
        },
        {
          label: 'Desorden de estrés postraumático',
          value: 'post-traumatic_stress_disorder',
        },
        {
          label: 'Esquizofrenia',
          value: 'schizophrenia',
        },
        {
          label: 'No, ninguno de los anteriores',
          value: 'none',
        },
      ],
    },
  },
];
