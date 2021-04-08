const initState = {
  user: {name: 'kitty',
  email: 'sweete@kitty.com',
  id: 1,
},
  todos: [{
    createAt: Date.now(),
    title: "Похлопать кота по попе 500e6 раз annually or daily one time at year",
    id: Math.random() * 100,
    isDone: false,
  },
  {
    createAt: Date.now(),
    title: "Осыпать поцелуйками своего маленького котенка перед сном каждый день пожизненно",
    id: Math.random() * 100,
    isDone: false,
  },
  {
    createAt: Date.now(),
    title: "Не трогать прыщики которые не выдавливаются на котенке",
    id: Math.random() * 100,
    isDone: false,
  },
]
}

export default initState
