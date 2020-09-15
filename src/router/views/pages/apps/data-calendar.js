const categories = [
  {
    name: 'Danger',
    value: 'bg-danger',
  },
  {
    name: 'Success',
    value: 'bg-success',
  },
  {
    name: 'Primary',
    value: 'bg-primary',
  },
  {
    name: 'Info',
    value: 'bg-info',
  },
  {
    name: 'Dark',
    value: 'bg-dark',
  },
  {
    name: 'Warning',
    value: 'bg-warning',
  },
]

const calendarEvents = [
  {
    id: 1,
    title: 'Reunión con Shreyu',
    start: new Date().setDate(new Date().getDate() + 1),
    end: new Date().setDate(new Date().getDate() + 2),
    className: 'bg-warning text-white',
  },
  {
    id: 2,
    title: 'Backend',
    start: new Date(),
    end: new Date(),
    className: 'bg-success text-white',
  },
  {
    id: 3,
    title: 'Foto Sistema',
    start: new Date().setDate(new Date().getDate() + 8),
    className: 'bg-info text-white',
  },
  {
    id: 4,
    title: 'Comprar recursos de diseño',
    start: new Date().setDate(new Date().getDate() + 7),
    className: 'bg-primary text-white',
  },
]

export { categories, calendarEvents }
