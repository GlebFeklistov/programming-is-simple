# Программирование с нуля

Во всяком языке программирования определены способы организации данных и способы организации действий над данными. Несмотря на разнообразие языков программирования, их изучение происходит приблизительно по одной схеме. Это связано с общностью структуры различных языков программирования высокого уровня, которая отражена на схеме:

![](/structure.png)

## Языки программирования

GitHub опубликовал собственный рейтинг [15 самых популярных языков программирования](https://octoverse.github.com/projects#languages). Согласно этой статистики были выбраны наиболее востребованные языки программирования в настоящее время:

* JavaScript (NodeJS)
* Java
* Python
* Php
* C++
* C#
* Turbo Pascal

## Элементы языка

### Алфавит языка
> Алфавит — набор разрешенных символов, с помощью которых могут быть образованы [лексемы](/README.md#лексемы), выражения и операторы данного языка.

Алфавит языка включает:
* Прописные и строчные латинские буквы и знак подчеркивания
* Арабские цифры от 0 до 9
* Специальные знаки: " {} , [] () + - * / % . : ? < > = ! & # ~ ;
* Пробельные символы: пробел, символы табуляции, символы перехода на новую cтроку

### Лексемы
> Лексема — последовательность допустимых символов языка программирования, имеющая смысл для [транслятора](/dictionary.md#транслятор-англ-translator---переводчик).

Из символов алфавита формируются лексемы языка:
* [Идентификаторы](/dictionary.md#идентификатор)
* [Ключевые (зарезервированные) слова](/dictionary.md#ключевые-слова)
* Знаки операций: + - * / % =
* Разделители: скобки, точка, запятая, пробельные символы

**Границы лексем** определяются другими лексемами, такими, как разделители или знаки операций.

### Синтаксис
> Синтаксис — набор правил, описывающий комбинации лексем, считающиеся правильно структурированной программой или её фрагментом.

```js
function greet(user) {
  console.log("Hello " + user + "!");
}
greet('World');
```

:books: [Примеры на всех языках](/hello_world.md)

## Организация данных
Представление данных и управление данными в соответствии с определенными соглашениями.
Данные могут быть представлены различным образом: изображение, текст, звук.

### Простые типы данных
> Символы, числа и т.п. элементы, дальнейшее дробление которых не имеет смысла.

В большинстве языков простые типы можно разделить на следующие группы:
* Целые числа: 1, 14, 65859565
* Вещественные числа: 3.141592653589793, 678.45212
* Логические: true, false
* Строковые: 'Hello', 'John Doe'
* Символьные: 'A', 'B', 'C', '9', '♫'
* Null, undefined, void
* Указатели

```js
var myInt = 10;
var PI = 3.141592653589793;
var bool = true;
var string = 'Hello World!';
var char = 'z'
var a; //undefined
console.log(x) //reference in null
```

### Составные типы данных
> Составные типы формируются на основе комбинаций простых типов.

Примеры базовых составных типов в разных языках:
* Объекты: { x: 10, y: 12 }
* Массивы: [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]

```js
var myObject = { x: 10, y: 12 };
var myArray = [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ];
```

## Действия над данными
Над всеми типами данных могут выполняться четыре операции: создание, чтение, обновление и удаление.

* Операция создания заключается в выделении памяти для хранения данных и связывает идентификатор с этой областью памяти.
* Операция удаление противоположна по своему действию операции создания.
* Операция чтение используется для доступа к данным находящимся в выделенной области памяти. Форма операции доступа зависит от типа данных, к которой осуществляется обращение.
* Операция обновления позволяет заменить значение данных в памяти на другое значение.

```js
var a; //создание переменной (объявление)
a = 10; //обновление
console.log(a); //чтение и вывод на экран
a = null; //удаление значения переменной
```

Вышеуказанные четыре операции обязательны для всех типов данных. Помимо этих общих операций для каждого типа данных могут быть определены специфические операции, работающие только с данными указанного типа.

### Объявление переменных
> Переменная — поименованная, либо адресуемая иным способом область памяти, адрес которой можно использовать для осуществления доступа к данным и изменять их значение в ходе выполнения программы.
```js
let pi = 3.141592653589793;
let person = "John Doe";
let answer = 'Yes I am!';
```
:books: [Примеры на всех языках](/declaration_vars.md)

### Объявление констант
> Константа — способ адресации данных, изменение которых программой не предполагается или запрещается. 

Применение констант повышает надёжность и безошибочность программы, позволяя избегать использования техники [«магических чисел»](/bad_practices.md#магические-числа).
```js
const PI = 3.141592653589793;
```
:books: [Примеры на всех языках](/declaration_const.md)

### Требования при объявлении идентификаторов

Требования при объявлении итентификаторов
Хорошим стилем является осмысленное именование переменных. Разрешается использовать строчные и прописные буквы, цифры и символ подчёркивания. Первым символом обязательно должна быть буква, в имени переменной не должно быть пробелов. В современных языках программирования длина имени практически не ограничена. Имя переменной не может совпадать с [ключевыми словами](/dictionary.md#%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%B2%D1%8B%D0%B5-%D1%81%D0%BB%D0%BE%D0%B2%D0%B0). В большинстве языков заглавные и строчные буквы в именах переменных различаются, переменные a и A — разные переменные.

### Ввод-вывод данных

### Обработка данных
#### Операции
#### Выражения и операторы
#### Подпрограммы
#### Модули
