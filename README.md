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
  console.log('Hello ' + user + '!');
}
greet('World');
```

:books: [Примеры на всех языках](/hello_world.md)

## Организация данных
> Организация данных - представление данных и управление данными в соответствии с определенными соглашениями.

Данные могут быть представлены различными типами. Разнообразие типов данных различается между языками.
Далее будут рассмотрены типы данных присутствующие в любом языке и покрывающие весь спектр потребностей.

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
var a;

console.log(a) //undefined
console.log(x) //reference in null
```

### Составные типы данных
> Составные типы формируются на основе комбинаций простых типов.

Примеры базовых составных типов в разных языках:
* Объекты: { x: 10, y: 12 }
* Массивы: [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]

```js
var myEmptyObject = {};
var myObject = { x: 10, y: 12 };

var myEmptyArray = [];
var myArray = [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ];
```

## Действия над данными
Над всеми типами данных могут выполняться четыре операции: создание, чтение, обновление и удаление.

* Операция создания заключается в выделении памяти для хранения данных и связывает идентификатор с этой областью памяти.
* Операция чтение используется для доступа к данным находящимся в выделенной области памяти. Форма операции доступа зависит от типа данных, к которой осуществляется обращение.
* Операция обновления позволяет заменить значение данных в памяти на другое значение.
* Операция удаление противоположна по своему действию операции создания.

Помимо этих общих операций для каждого типа данных могут быть определены специфические операции, работающие только с данными указанного типа. Отдельно стоит сказать про операцию удаления, так как она работает только с динамически создаваемыми переменными или указателями.

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
Компьютерные программы получают данные, обрабатывают и выводят данные на экран, в файл, отправляют по сети или в другую программу.
Следовательно, любой язык программирования должен иметь инструменты как для ввода данных, так и вывода данных.

Рассмотрим пример вывода данных с клавиатуры на примере платформы Node.js:
```js
console.log('Hello World!');
```
Данный пример иллюстрирует простой механизм вывода фразы "Hello World!" на экран.

### Обработка данных

#### Операции
> Операции — конструкции в языках программирования, аналогичные по записи математическим операциям, то есть специальный способ записи некоторых действий.

Наиболее часто применяются: 
* присваивания
* арифметические
* отношения
* логические
* строковые 
* сдвиговые

В отличие от функций, операции часто являются базовыми элементами языка, обозначаются различными символами пунктуации и несколько отличаются от языка к языку.

Операции делятся по количеству принимаемых аргументов на:

* унарные — один аргумент: отрицание, унарный минус
* бинарные — два аргумента: сложение, вычитание, умножение и т.д.
* тернарные — три аргумента: условие ? выражение1 : выражение2

##### Присваивания
Основной оператор присваивания - это знак равно (=), он и присваивает значение правого операнда, левому. 
То есть в выражении x = 10, присваивает значение 10, переменной x.

Список операторов:
* = оператор присвания

```js
var z = 10;
var x = 'Hello World!';
```

##### Арифметические
Арифметические операторы своими операндами принимают числовые значения такие как литерали или переменные и возвращают одно значение соответствующие типу принимающей переменной.

Список операторов:
* \* умножение;
* / деление;
* \+ сложение;
* \- вычитание;
* % остаток от целочисленного деления.

```js
var b = 10 + 5;
var c = 10 * 5;
var d = 10 / 5;
var e = 12 % 5;
```

##### Отношения
Операторы отношения (реляционные операторы) сравнивают свои операнды и возвращают значение типа Boolean, зависящее от того, был ли результат сравнения истинным или ложным.

Список операторов:
* == равно
* != не равно
* \< меньше
* \> больше
* <= меньше или равно
* \>= больше или равно

```js
var a = 'Hello' == 'World!';
var b = 10 > 5;
var c = 10 != 5;
var d = 10 <= 5;
```

##### Логические
Когда необходимо объединить несколько операций сравнения в одном выражение используются логические операции, это необходимо так как операции отношения сравнивают только два аргумента, в реальной практике условия бывают намного сложнее.

Список операторов:
* && логическое И
* || логическое ИЛИ

```js
var a = true  && true
var b = true  && false
var c = false && true
var d = true  || true
var e = false || true
var f = true  || false
```

##### Строковые
В дополнение к операторам отношения, которые могут использоваться со строковыми значениями, оператор (+) позволяет объединить две и более строки, возвращая при этом строку, которая представляет собой объединение двух строк-операндов.

```js
var a = 'Hello' + 'World!';
var b = 'Hello' + ' ' + 'World!';
var c = 'Hello ' + 'John Doe';
```

#### Выражения и операторы

#### Подпрограммы

#### Модули
