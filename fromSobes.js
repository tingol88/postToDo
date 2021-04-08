// 1) получить данные с сервера
// 2) вывести данные в виде ненумерованного списка (имя, фамилия,
//    дата регистрации)
// 3) оставить в списке только активных пользователей,
//    отсортировать по дате регистрации
// 4) добавить стили - отступы для элементов списка по 16px,
//    цвет текста для имени / фамилии - красный для девушек,
//    синий для мужчин
// 4) реализовать поле ввода с поиском по имени и фамилии пользователя
// 5) Создать компонент пользователей - Users
// 6) Подключить компонент Users к App.js

// const API_URL = "https://boiling-spire-41304.herokuapp.com/users";

// const TodoList = () => {
//   const [arrPersons, setArrPersons] = useState([]);
//   const [findedPersons, setFindedPersons] = useState([])
//   const [nameInputFind, setNameInputFind] = useState('')
//   const [surnameInputFind, setSurnameInputFind] = useState('')
//   useEffect(() => {
//     (async () => {
//       const response = await fetch(API_URL);
//       const result = await response.json()

//       const filterResult = (result.filter((el) => el.active)).sort((a, b) => {
//         return new Date(a.joined).getTime() - new Date(b.joined).getTime()
//       })
//       setArrPersons(filterResult)
//     })()

//   }, [])

//   const nameInputHandler = ((event) => {
//     setNameInputFind(event.target.value)
//   })
//   const surnameInputHandler = ((event) => {
//     setSurnameInputFind(event.target.value);
//   })
//   const buttonHandler = ((event) => {
//     event.preventDefault();
//     if (nameInputFind && surnameInputFind) {
//       const resultArr = (arrPersons.filter(
//         (el) => (el.name).toLowerCase().includes(nameInputFind.toLowerCase())
//           && (el.surname).toLowerCase().includes(surnameInputFind.toLowerCase())
//       ))
//       if (!!resultArr.length) { setFindedPersons(resultArr) } else { alert('ничего не найдено') }
//     } else if (nameInputFind) {
//       const resultArr = arrPersons.filter((el) => (el.name).toLowerCase().includes(nameInputFind.toLowerCase()))
//       if (!!resultArr.length) { setFindedPersons(resultArr) } else { alert('ничего не найдено') }
//     } else if (surnameInputFind) {
//       const resultArr = arrPersons.filter((el) => (el.surname).toLowerCase().includes(surnameInputFind.toLowerCase()))
//       if (!!resultArr.length) { setFindedPersons(resultArr) } else { alert('ничего не найдено') }
//     } else alert('заполните поля')
//   })

//   return (
//     <div>
//       Component TodoList
//       <Todo />
//       <form onSubmit={buttonHandler}>
//         <input onChange={nameInputHandler} type="text" value={nameInputFind} placeholder='Введите имя или его часть' />
//         <input onChange={surnameInputHandler} type="text" value={surnameInputFind} placeholder='Введите фамилию или ее часть' />
//         <button>Найти по имени или фамилии</button>
//       </form>

//       {findedPersons[0] && findedPersons.map((person, index) => (<div key={index}>{person.name} {person.surname}</div>))}
//       {arrPersons && arrPersons.map((el, index) => {
//         return (
//           <li className='person' key={index}>
//             <div className={el.gender === 'male' ? 'red' : 'blue'}> Имя: {el.name}</div>
//             <div>Фамилия: {el.surname}</div>
//             <div>Дата присоединения: {el.joined}</div>
//             <div>Статус: {el.active ? 'true' : 'false'}</div>
//             <div>Пол: {el.gender}</div>
//           </li>
//         )
//       })}
//     </div >
//   );
// }
// export default TodoList;


// function find(num, arr) {
//   if (arr[arr.length-1] < num) return false
//   if (arr === []) {return false};
//   if (arr.length === 1 && arr[0] === num) { return 0 } else if(arr.length === 1 && arr[0] !== num) { return false }
//   let center = Math.floor(arr.length / 2)
//   if (arr[center] === num) {
//     return center
//   } else if (arr[center] < num) {
//     return center + find(num, arr.splice(center, arr.length))
//   } else {
//     return find(num, arr.splice(0, center))
//   }
// }
// console.log(find(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
function humanReadable(seconds) {
  const date = new Date((seconds -3600 * 3) * 1000)
console.log(date.toLocaleTimeString('ru', { day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }));
  const strDate = date.toLocaleTimeString('ru', { day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })
const arrDate = toString(strDate).split(' ')
  console.log(strDate);
  if (arrDate[0] === '1') {
    console.log(1);
    return arrDate[1]
  } else {
    console.log(2);
    const splitTime = arrDate[1].split(':')
    splitTime[0] = +splitTime[0] + arrDate[0] * 24
    if (splitTime[0] > 99) splitTime[0] = 99
    return splitTime.join(':')
  }
}

console.log(humanReadable(0));

// Test.assertEquals(humanReadable(0), '00:00:00', 'humanReadable(0)');
// Test.assertEquals(humanReadable(5), '00:00:05', 'humanReadable(5)');
// Test.assertEquals(humanReadable(60), '00:01:00', 'humanReadable(60)');
// Test.assertEquals(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
// Test.assertEquals(humanReadable(359999), '99:59:59', 'humanReadable(359999)');

