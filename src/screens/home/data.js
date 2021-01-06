import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    
    title: 'Full Body Assessment',
    formType: 'Assessment'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',

    title: 'Progress Note',
    formType: 'Report'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',

    title: 'Service Delivery Note',
    formType: 'Report'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',

    title: 'Vitals Assessment',
    formType: 'Assessment'
  },
];
