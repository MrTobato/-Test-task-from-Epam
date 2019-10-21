console.log('GG');

const request = new XMLHttpRequest();
 
/*  Составляем строку запроса и кладем данные, строка состоит из: 
пути до файла обработчика ? имя в GET запросе где будет лежать значение запроса id_product и 
через & мы передаем количество qty_product. */ 
const url = "http://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture";

/* Здесь мы указываем параметры соединения с сервером, т.е. мы указываем метод соединения GET, 
а после запятой мы указываем путь к файлу на сервере который будет обрабатывать наш запрос. */ 
request.open('GET', url);

// Указываем заголовки для сервера, говорим что тип данных, - контент который мы хотим получить должен быть не закодирован. 
request.setRequestHeader('Content-Type', 'application/x-www-form-url');
 
// Здесь мы получаем ответ от сервера на запрос, лучше сказать ждем ответ от сервера 
request.addEventListener("readystatechange", () => {
{
 /*   request.readyState - возвращает текущее состояние объекта XHR(XMLHttpRequest) объекта, 
 бывает 4 состояния 4-е состояние запроса - операция полностью завершена, пришел ответ от сервера, 
 вот то что нам нужно request.status это статус ответа, 
 нам нужен код 200 это нормальный ответ сервера, 401 файл не найден, 500 сервер дал ошибку и прочее...   */
	if (request.readyState === 4 && request.status === 200) {
	
      // выводим в консоль то что ответил сервер
	  console.log( request.responseXML );
    }
  }
});
 
// Выполняем запрос 

/* 1. Создаём новый XMLHttpRequest-объект
let xhr = new XMLHttpRequest();

// 2. Настраиваем его: GET-запрос по URL /article/.../load
xhr.open('GET', 'http://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture');

// 3. Отсылаем запрос
xhr.send();

xhr.withCredentials = true;

// 4. Этот код сработает после того, как мы получим ответ сервера
xhr.onload = function() {
  if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
  } else { // если всё прошло гладко, выводим результат
    alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Получено ${event.loaded} из ${event.total} байт`);
  } else {
    alert(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
  }

};

xhr.onerror = function() {
  alert("Запрос не удался");
};
*/
