import { enUS, esES, ptBR } from '@mui/material/locale';

export const allLangs = [
    {
        label: 'Portuguese',
        value: 'pt',
        systemValue: ptBR,
        icon: '/assets/icons/pt-circle.png'
    },
    {
        label: 'Spanish',
        value: 'es',
        systemValue: esES,
        icon: '/assets/icons/es-circle.png'
    },
    {
        label: 'English',
        value: 'en',
        systemValue: enUS,
        icon: '/assets/icons/en-circle.png'
    }
];

export const defaultLang = allLangs[0]; // Portuguese
