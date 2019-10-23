# Программирование с нуля

Цель данного пособия — показать, что между языками программирования высокого уровня много общего и выбор языка не является каким либо фундаментальным решением в жизни разработчика.

Информация представленная здесь, является результатом анализа других источников и попыткой структурировать этот материал в целях объяснения понятным языком основ написания и интерпретации компьтерных программ.

Пособие не является полноценным руководством по программированию на каком либо языке так, как он абстрагируется от конкретного языка программирования. Пособие можно рассматривать в качестве введения в основные концепции разработки компьтерных программ.

Этот материал написан для тех, кто:

* не знает с чего начать
* хочет познакомиться с основами разработки компьтерных программ

## Оглавление
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Структура языков программирования высокого уровня](#%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0-%D1%8F%D0%B7%D1%8B%D0%BA%D0%BE%D0%B2-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2%D1%8B%D1%81%D0%BE%D0%BA%D0%BE%D0%B3%D0%BE-%D1%83%D1%80%D0%BE%D0%B2%D0%BD%D1%8F)
- [Языки программирования](#%D1%8F%D0%B7%D1%8B%D0%BA%D0%B8-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F)
- [Элементы языка](#%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-%D1%8F%D0%B7%D1%8B%D0%BA%D0%B0)
  - [Алфавит](#%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82)
  - [Лексемы](#%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%BC%D1%8B)
  - [Идентификаторы](#%D0%B8%D0%B4%D0%B5%D0%BD%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80%D1%8B)
  - [Ключевые (зарезервированные) слова](#%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%B2%D1%8B%D0%B5-%D0%B7%D0%B0%D1%80%D0%B5%D0%B7%D0%B5%D1%80%D0%B2%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D1%81%D0%BB%D0%BE%D0%B2%D0%B0)
  - [Литералы](#%D0%BB%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D0%BB%D1%8B)
- [Синтаксис](#%D1%81%D0%B8%D0%BD%D1%82%D0%B0%D0%BA%D1%81%D0%B8%D1%81)
- [Организация данных](#%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85)
  - [Простые типы данных](#%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%8B%D0%B5-%D1%82%D0%B8%D0%BF%D1%8B-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85)
  - [Составные типы данных](#%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BD%D1%8B%D0%B5-%D1%82%D0%B8%D0%BF%D1%8B-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85)
- [Действия над данными](#%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D1%8F-%D0%BD%D0%B0%D0%B4-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8)
  - [Объявление переменных](#%D0%BE%D0%B1%D1%8A%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D1%85)
  - [Объявление констант](#%D0%BE%D0%B1%D1%8A%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82)
  - [Требования при объявлении идентификаторов](#%D1%82%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BF%D1%80%D0%B8-%D0%BE%D0%B1%D1%8A%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B8-%D0%B8%D0%B4%D0%B5%D0%BD%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80%D0%BE%D0%B2)
  - [Ввод-вывод данных](#%D0%B2%D0%B2%D0%BE%D0%B4-%D0%B2%D1%8B%D0%B2%D0%BE%D0%B4-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85)
- [Обработка данных](#%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85)
  - [Выражения](#%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F)
  - [Операторы](#%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B)
    - [Оператор присваивания](#%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80-%D0%BF%D1%80%D0%B8%D1%81%D0%B2%D0%B0%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F)
    - [Арифметические операторы](#%D0%B0%D1%80%D0%B8%D1%84%D0%BC%D0%B5%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B)
    - [Операторы отношения](#%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B-%D0%BE%D1%82%D0%BD%D0%BE%D1%88%D0%B5%D0%BD%D0%B8%D1%8F)
    - [Логические операторы](#%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B)
    - [Строковые операторы](#%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B)
    - [Условные](#%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5)
      - [Полный условный оператор](#%D0%BF%D0%BE%D0%BB%D0%BD%D1%8B%D0%B9-%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%BD%D1%8B%D0%B9-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80)
      - [Не полный условный оператор](#%D0%BD%D0%B5-%D0%BF%D0%BE%D0%BB%D0%BD%D1%8B%D0%B9-%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%BD%D1%8B%D0%B9-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80)
      - [Переключатель](#%D0%BF%D0%B5%D1%80%D0%B5%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D1%82%D0%B5%D0%BB%D1%8C)
    - [Циклы](#%D1%86%D0%B8%D0%BA%D0%BB%D1%8B)
      - [Циклы с предусловием](#%D1%86%D0%B8%D0%BA%D0%BB%D1%8B-%D1%81-%D0%BF%D1%80%D0%B5%D0%B4%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D0%B5%D0%BC)
      - [Циклы с постусловием](#%D1%86%D0%B8%D0%BA%D0%BB%D1%8B-%D1%81-%D0%BF%D0%BE%D1%81%D1%82%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D0%B5%D0%BC)
      - [Цикл со счётчиком](#%D1%86%D0%B8%D0%BA%D0%BB-%D1%81%D0%BE-%D1%81%D1%87%D1%91%D1%82%D1%87%D0%B8%D0%BA%D0%BE%D0%BC)
  - [Подпрограммы, функции](#%D0%BF%D0%BE%D0%B4%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8)
  - [Модули](#%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D0%B8)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Структура языков программирования высокого уровня

Во всяком языке программирования определены способы организации данных и способы организации действий над данными. Несмотря на разнообразие языков программирования высокого уровня, их изучение происходит приблизительно по одной схеме. Это связано с общностью структуры различных языков, которая отражена на схеме:

![](/structure.png)

## Языки программирования
> Язык программирования — предназначен для написания компьютерных программ, которые представляют собой набор правил, позволяющих компьютеру выполнить тот или иной вычислительный процесс, организовать управление различными объектами. Язык программирования отличается от естественных языков тем, что предназначен для управления ЭВМ, в то время как естественные языки используются, прежде всего, для общения людей между собой. Большинство языков программирования использует специальные конструкции для определения и манипулирования структурами данных и управления процессом вычислений.

Сервис контроля версий GitHub опубликовал собственный рейтинг [10 самых популярных языков программирования в 2018 году](https://octoverse.github.com/projects#languages). Согласно этой статистики были выбраны 6 наиболее востребованных языков программирования в настоящее время:

* JavaScript (NodeJS)
* Java
* Python
* Php
* C++
* C#
* Pascal

В качестве основного языка согласно статистике был выбран JavaScript (NodeJS). На данной странице будут демонстрироваться примеры кода написанные именно на нем. Большинство примеров на нём можно будет выполнить прямо в консоли браузера. Примеры кода на других языках будут доступны под примерами в виде ссылок на тематические страницы.

Дополнительно был добавлен Pascal, т.к. он используется для обучения программированию в старших классах и на первых курсах вузов, что является основой для ряда других языков. Он добавит контраста в гамму различий синтаксических парадигм других языков программирования.

## Элементы языка

### Алфавит
> Алфавит — набор разрешенных символов, с помощью которых могут быть образованы [лексемы](/README.md#лексемы), выражения и операторы данного языка.

Алфавит языка включает:
* Прописные и строчные латинские буквы и знак подчеркивания
* Арабские цифры от 0 до 9
* Специальные знаки: " {} , [] () + - * / % . : ? < > = ! & # ~ ;
* Пробельные символы: пробел, символы табуляции, символы перехода на новую cтроку

### Лексемы
> Лексема — последовательность допустимых символов языка программирования, имеющие определенное значение.
        
Лексемы представлены такими категориями как:
* [Идентификаторы](/README.md#идентификаторы)
* [Ключевые (зарезервированные) слова](/README.md#ключевые-зарезервированные-слова)
* Знаки операций: + - * / % =
* Разделители: скобки, точка, запятая, пробельные символы
* [Литералы](/README.md#литералы): цифры, строки, символы и т.д.

**Границы лексем** определяются другими лексемами, такими, как разделители или знаки операций.

### Идентификаторы
> Идентификаторами — в языках программирования называются имена, использующиеся для переменных, констант, функций и других определяемых пользователем объектов.

При объявлении идентификатора в большинстве языков присутствуют ограничения:
* могут использоваться только латинские буквы, цифры и знак подчеркивания
* прописные и строчные буквы различаются
* первым символом не может быть цифра
* пробелы внутри имен не допускаются
* не должен совпадать с ключевыми словами

Также рекомендуется давать идентификаторам осмысленные и не сильно длинные имена, это упростит в дальнейшем семантический анализ программы пользователем не знакомым с логикой работы программы. 

В целях еще большего упрощения семантического анализа, рекомендуется документировать участки кода сложные для понимания или необходимые другим разработчикам при использовании вашей программы. Данная документация может быть легко преобразована в документацию по вашему коду с помощью определенных пакетов решений, которые есть для каждого языка программирования.

Пример документированного кода описывающий пример создания объекта типа координата:

```js
/**
 * Generate a point.
 *
 * @param x - The x coordinate.
 * @param y - The y coordinate.
 * @returns {Object} point - The point generated by the factory.
 * @returns {number} point.x - The x coordinate.
 * @returns {number} point.y - The y coordinate.
 */
var pointFactory = function (x, y) {
    return {
        x:x,
        y:y
    }
}
```

### Ключевые (зарезервированные) слова
> Ключевые (зарезервированные) слова — это предопределенные зарезервированные слова, которые имеют специальное значение для определенного языка программирования. Их использование строго регламентировано. Имена объектов программы определяемые пользователем не могут совпадать с ключевыми словами.

Для краткости зарезервированные слова в дальнейшем будем называть ключевыми.

Примеры некоторых ключевых слов встречающиеся в большинстве языков:
* break
* case
* for
* while
* do
* class
* catch
* continue

### Литералы
> Литералы — это некие фиксированные данные в программном коде. Литералы представляют собой константы, включаемые непосредственно в текст программы.

Пример присвоения литерала "Мой кот вышел погулять" переменной "Cat" и вывода литерала "Мой кот вышел погулять" в консоль:

```js
var cat = 'Мой кот вышел погулять';
console.log('Мой кот вышел погулять');
```

:books: [Примеры](/literals.md)

## Синтаксис
> Синтаксис — набор правил, описывающий комбинации лексем, считающиеся правильно структурированной программой или её фрагментом.

Пример небольшой программы на JavaScript:

```js
function greet(user) {
  console.log('Hello ' + user + '!');
}
greet('World');
```

:books: [Примеры](/hello_world.md)

## Организация данных
> Организация данных — представление данных и управление данными в соответствии с определенными соглашениями.

Данные могут быть представлены различными типами. Разнообразие типов данных различается между языками программирования. Как правило, в современных языках программирования уже присутствуют типы данных необходимые для решения большинства задач.
Типы данных делятся на простые и составные (сложные).
Далее будут рассмотрены основные типы данных, представленные в рассматриваемых языках программирования.

### Простые типы данных
> Простые типы данных — это, символы, числа и другие элементы, дальнейшее дробление которых не имеет смысла.

В большинстве языков простые типы можно разделить на следующие группы:
* Целые числа: 1, 14, 65859565
* Вещественные числа: 3.141592653589793, 678.45212
* Логические: true, false
* Символьные: 'A', 'B', 'C', '9', '♫'
* Null, undefined, void
* Указатели

Пример объявления переменных простых типов на JavaScript:

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
> Составные типы данных — это типы, которые формируются на основе комбинаций простых типов.

Примеры базовых составных типов в разных языках:
* Объекты: { x: 10, y: 12 }
* Массивы: [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
* Строковые: 'Hello', 'John Doe'
* Классы: class MyType {}

Пример объявления переменных составных типов на JavaScript:

```js
var myEmptyObject = {};
var myObject = { x: 10, y: 12 };

var myEmptyArray = [];
var myArray = [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ];

class MyUser {
  constructor(name) {
    this.name = name
  }
}
var user = new MyUser('John Doe');
```

## Действия над данными
> Над всеми типами данных могут выполняться четыре операции: создание, чтение, обновление и удаление.

* Создание — или объявление, заключается в выделении памяти для хранения данных и связывает идентификатор с этой областью памяти.
* Чтение — используется для доступа к данным находящимся в выделенной области памяти. Форма операции доступа зависит от типа данных, к которой осуществляется обращение.
* Обновление — позволяет заменить значение данных в памяти на другое значение.
* Удаление — противоположна по своему действию операции создания.

Помимо этих общих операций для каждого типа данных могут быть определены специфические операции, работающие только с данными указанного типа.

Отдельно стоит сказать про операцию "Удаления", так как она доступна только элементам которые были созданы в процессе работы программы.
Такие элементы называются динамическими, так как они работают с динамической областью памяти доступной всем программам выполняющимся на компьютере, следовательно есть конечный предел памяти для всех программам, как только этот предел будет достигнут это повлечет за собой неприятные последствия, например в операционных системах семейства Windows это может вызвать закрытие программы операционной системой из-за превышения лимита потребляемой памяти.

Во многих языках программирования существуют автоматизированные сборщики мусора которые сами следят за использованием таких динамических данных и сами очищают неиспользуемые объекты. 

В языках без сборщиков мусора (Pascal, C++) разработчикам приходится следить самим за объемом памяти которых потребляет их программа и вовремя высвобождать её после использования динамических данных.

### Объявление (создание) переменных
> Переменная — поименованная, либо адресуемая иным способом область памяти, адрес которой можно использовать для осуществления доступа к данным и изменять их значение в ходе выполнения программы.

```js
let pi = 3.141592653589793;
let person = "John Doe";
let answer = 'Yes I am!';
```
:books: [Примеры](/declaration_vars.md)

### Объявление констант
> Константа — способ адресации данных, изменение которых программой не предполагается или запрещается. 

Применение констант повышает надёжность программы так, как запрещает изменение значения константы и позволяет переиспользовать данные встречающиеся в разных частях программы.

```js
const PI = 3.141592653589793;
```
:books: [Примеры](/declaration_const.md)

### Требования к именам объектов определяемых пользователем
В современных языках программирования длина имени объектов определяемых пользователем практически не ограничена. Хорошим стилем является осмысленное именование переменных, что в свою очередь повышает читабельность кода программы и облегчает её семантический анализ.

Ограничения при объявлении идентификаторов:
* Разрешается использовать строчные и прописные буквы, цифры и символ подчёркивания
* Первым символом обязательно должна быть буква, далее допускается использование цифр
* В имени переменной не должно быть пробелов
* Имя переменной не может совпадать с [ключевыми словами](/dictionary.md#%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%B2%D1%8B%D0%B5-%D1%81%D0%BB%D0%BE%D0%B2%D0%B0)
* В большинстве языков заглавные и строчные буквы в именах переменных различаются, переменные a и A — разные переменные.

### Ввод-вывод данных
Изначально компьютерные программы создавались с целью автоматизации обработки информации, в следствии чего появилось понятие - "Оператор ЭВМ". Оператор ЭВМ выполняет ручной ввод информации в компьютерную программу через пользовательский интерфейс. С течением времени эта модель остается неизменной, вне зависимости от среды и устройств на которых выполняется ПО например персональный компьютер, игровая консоль, смартфон, все на чем можно запустить компьютерную программу. В следствии чего, поведение любой компьютерной программы укладывается в следующую схему:

![Пример поведения любой программы](/basic-flow.png)

Из схемы видно, что любая компьютерная программа получает данные от пользователя, из файла, по сети или от другой программы, обрабатывает и (или) выводит данные на экран, в файл, отправляет по сети или в другую программу. Для обеспечения этой функциональности любой язык программирования имеет необходимые инструменты для ввода данных и вывода данных.
Ниже приведен отрывок программмы который выводит в консоль фразу "Hello World!".

```js
console.log('Hello World!');
```

:books: [Примеры](/stdout.md)

Данный пример иллюстрирует простой механизм вывода фразы "Hello World!" в консоль.

## Обработка данных

### Выражения
> Выражением является любой корректный блок кода, который возвращает значение.

Результатом вычисления выражения является величина определенного типа, как правило типы выражений ограниченный типами данных конкретного языка программирования, числовые, строковые, логические и .т.д.

```js
var a = 'Hello ' + 'World!';
var b = true && false
var с = 10 + 5;
```

:books: [Примеры](/expressions.md)

### Операторы
> Оператор — это составная часть программы, предписывающая определённый порядок преобразования информации. В состав операторов могут входить служебные слова, данные, выражения и другие операторы.

Основные операторы: 
* присваивания
* арифметические
* отношения
* логические
* строковые 
* условные
* циклы

#### Оператор присваивания
Основной оператор присваивания — это знак равно (=), он и присваивает значение правого операнда, левому. 
То есть в выражении x = 10, присваивается (устанавливается) значение 10, переменной x.

Список операторов:
* = оператор присвания
* += присваивание со сложением
* -= присваивание с вычитанием
* \*= присваивание с умножением
* /= присваивание с делением

```js
var a = 10;
var b = 'Hello World!';
a += 3; // в развернутом виде a = a + 3
a -= 5; // в развернутом виде a = a - 5
```

Результатом выполнения оператора присваивания является изменение состояния данных: все переменные, отличные от переменной, стоящей в левой части оператора присваивания, не меняют своего значения, а указанная переменная получает значение выражения, стоящего в правой части оператора присваивания. 

#### Арифметические операторы
Арифметические операторы своими операндами принимают числовые значения такие как литералы или переменные и возвращают одно значение соответствующие типу принимающей переменной.

Список операторов:
* \* умножение;
* / деление;
* \+ сложение;
* \- вычитание;
* % остаток от целочисленного деления.

```js
var a = 10 + 5;
var b = 10 * 5;
var c = 10 / 5;
var d = 12 % 5;
```

#### Операторы отношения
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
var b = 10 > 5; // true
var c = 10 != 5; // true
var d = 10 <= 5; // false
var e = 'a' == 'b'; // false
```

#### Логические операторы
Когда необходимо объединить несколько операций сравнения в одном выражение используются логические операции, это необходимо, так как операции отношения сравнивают только два аргумента, в реальной практике условия бывают намного сложнее.

Список операторов:
* && логическое И
* || логическое ИЛИ

```js
var a = true && true // true
var b = true && false // false
var c = false && true // false
var d = true  || true // true
var e = false || true // true
var f = true  || false // true
var g = false || false // false
```

#### Строковые операторы
В дополнение к операторам отношения, которые могут использоваться со строковыми значениями, оператор (+) позволяет объединить две и более строки, возвращая при этом строку, которая представляет собой объединение двух строк-операндов.

```js
var a = 'Hello' + 'World!';
var b = 'Hello' + ' ' + 'World!';
var c = 'Hello ' + 'John Doe' ;
```

#### Условные
Условные операторы применяется в случаях, когда выполнение или невыполнение некоторого набора команд должно зависеть от некоторого условия. Еще условные операторы называют, операторами ветвления.

Условные операторы являются неотъемлемой частью программ на всех языках программирования. Основным условным оператором является оператор "if".

Основные виды условных операторов:
* полный условный оператор
* не полный условный оператор
* переключатель

##### Полный условный оператор
Полный условный оператор соответствует алгоритмической структуре полного ветвления: 

![Полный условный оператор](/if_full.png)

Данной блок схеме соответствует следующий фрагмент кода, который проверяет утверждение, что 5 больше 10, в случае выполнения этого условия выведет в консоль сообщение "5 больше 10", в противном случае выведет сообщение "5 меньше 10":

```js
if (5 > 10) {
  console.log('5 больше 10');
} else {
  console.log('5 меньше 10');
}
```

:books: [Примеры](/if_full.md)

##### Не полный условный оператор
Алгоритмическая структура неполного ветвления реализуется с помощью неполного условного оператора, который имеет вид:

![Не полный условный оператор](/if_short.png)

Данной блок схеме соответствует следующий фрагмент кода, который проверяет утверждение, что значение переменной 5 больше или равно 10, в случае выполнения этого условия в консоль будет выведен текст, в противном случае программа пропусти набор команд и продолжит своё выполнение:

```js
if (5 >= 10) {
  console.log('5 больше или равно 10');
}
```

:books: [Примеры](/if_short.md)

##### Переключатель
Конструкция переключатель заменяет собой сразу несколько if, в разных языках такой конструкции соответствует своё ключевое слово.
Она представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами. 
Алгоритмическая структура переключателя имеет следующий вид:

![Не полный условный оператор](/if_switch.png)

Данной блок схеме соответствует следующий фрагмент кода, здесь предусмотрены три логические ветви, в первом случае если в переменную "creature" присвоено значение 'Волк' или 'Заяц' будет выведена в консоль строка содержащая имя этого персонажа, во всех остальных случаях будет выведена строка из ветки 'default':

```js
switch (creature) {
  case 'Волк':
    console.log('Это волк');
    break;
  case 'Заяц':
    console.log('Это заяц');
    break;
  default:
    console.log('Другой сказочный персонаж');
    break;
}
```

:books: [Примеры](/switch.md)

#### Циклы
> Цикл — разновидность конструкции в языках программирования, суть которой в многократном повторении одного и того же набора инструкций.
Например, вывести товары из списка один за другим. Или просто перебрать все числа от 1 до 10 и для каждого выполнить одинаковый набор действий. Цикл состоит из условия и тела цикла.

> Итерация — один шаг циклического процесса. Одно повторение тела цикла.

> Тело цикла - это набор действий (программных операций), которые подразумеваются к повторению раз за разом при работе цикла.

 В тело заключены инструкции, выполнение которых будет происходить при каждой итерации цикла до достижения условия завершения или прерывания выполнения цикла.

В циклах предусмотрена команда досрочного выхода из цикла. Команда досрочного выхода применяется, когда необходимо прервать выполнение цикла, в котором условие выхода ещё не достигнуто. Такое бывает, например, когда при выполнении тела цикла обнаруживается ошибка, после которой дальнейшая работа цикла не имеет смысла. Команда досрочного выхода обычно называется **break**.

Существую случаи когда в текущей итерации цикла необходимо пропустить все команды до конца тела цикла. При этом сам цикл прерываться не должен, условия продолжения или выхода должны вычисляться обычным образом, для такого случая предусмотрена команда пропуска итерации, обычно это **continue**.

Основные виды операторов цикла:
* с предусловием
* с постусловием
* со счетчиком

##### Циклы с предусловием
> Цикл с предусловием — цикл, который выполняется, пока истинно некоторое условие, указанное перед его началом. Это условие проверяется до выполнения тела цикла, поэтому тело цикла может быть не выполнено ни разу, если условие с самого начала ложно.

Данному типу циклов соответствует следующая алгоритмическая структура: 

![Циклы с предусловием](/cycles_pre.png)

Данной блок схеме соответствует следующий фрагмент кода, который запускает пять итераций цикла и на каждой выводит в консоль значение счетчика:

```js
var i = 0;  
while (i < 5) {
  console.log('Значение переменной i:' + i);
  i++;  
}
```

:books: [Примеры](/cycles_pre.md)

##### Циклы с постусловием
> Цикл с постусловием — цикл, в котором условие проверяется после выполнения тела цикла. Отсюда следует, что тело всегда выполняется хотя бы один раз.

Данному типу циклов соответствует следующая алгоритмическая структура: 

![Циклы с постусловием](/cycles_post.png)

Данной блок схеме соответствует следующий фрагмент кода, который запускает восемь итераций цикла и на каждой выводит в консоль значение счетчика:


```js
var i = 0;
do {
  console.log('Значение переменной i:' + i);
  i++;
} while (i < 8);
```

:books: [Примеры](/cycles_post.md)

##### Цикл со счётчиком
> Цикл со счётчиком — цикл, для которого предусмотрена специальная конструкция, в которой некоторая переменная изменяет своё значение от заданного начального значения до конечного значения с некоторым шагом, и для каждого значения этой переменной тело цикла выполняется один раз.

Данному типу циклов соответствует следующая алгоритмическая структура: 

![Циклы с постусловием](/cycles_pre.png)

Данной блок схеме соответствует следующий фрагмент кода, который запускает три итерации цикла и на каждой выводит в консоль значение счетчика:

```js
for (var i = 0; i < 3; i++) { 
  console.log('Значение переменной i:' + i);
}
```

:books: [Примеры](/cycles_for.md)

В большинстве языков, цикл for, несмотря на синтаксическую форму, в действительности является циклом с предусловием, но имеет более удобную в использовании форму записи и изоляцию переменной используемой в качестве счетчика, таким образом код выше полностью повторяет функциональность кода ниже:

```js
var i = 0;
while (i < 3) {
  console.log('Значение переменной i:' + i);
  i++;
}
```

### Подпрограммы, функции
> Функция — в программировании представляет собой обособленный участок кода, который можно вызывать, обратившись к нему по имени, которым он был назван, очень часто функции называют – подпрограммами. 

Функция должна быть соответствующим образом объявлена и определена. Объявление функции, кроме имени, содержит список имён передаваемых параметров. 

Для того, чтобы использовать ранее определённую функцию, необходимо в требуемом месте программы указать имя функции и перечислить передаваемые в функцию параметры. При вызове происходит выполнение команд внутри тела функции. 

Функция может возвращать значение или быть прервана. В обоих случаях это выполняется с помощью оператора **return**, при этом выполнение основной программы продолжается с места, где эта функция была вызвана.

Пример объявления функции с идентификатором "max", которая принимает два параметра (а и b), определяет большее значение и возвращает его:

```js
function max(a, b) {
  return a > b ? a : b; 
}
```

Пример объявления функции с идентификатором "myFunction", которая принимает три параметра (p1, p2 и p3) и возвращает их произведение:

```js
function myFunction(p1, p2, p3) {
  return p1 * p2 * p3;
}
```

:books: [Примеры](/functions.md)

### Модули
> Модуль — функционально законченный фрагмент программы, оформленный в виде отдельного файла с исходным кодом.

Удобство использования модулей заключается в возможности обновления или замены модуля, без необходимости изменения остальной программы и является средством разбиения задачи на простые подзадачи, реализующие как правило, только одну функцию основной задачи.

В модули можно выносить части программы, использование которых необходимо в разных частях программы или в других модулях. Таким образом, сложность первоначальной задачи распределяется между отдельными модулями. 

Благодаря модульной архитектуре появляется возможность передавать части программ реализующие определенные задачи от разработчика к разработчику, что позволяет создавать большие приложения, включающие в себя тысячи модулей.

Пример модуля, содержащего функцию "sum", реализующую сложение двух аргументов, данный модуль сохранен в файл "myFirstModule.js":
```js
module.exports.sum = function (a, b) {
  return a + b
};
```

Пример подключения модуля и вызова функции "sum" из файла "myFirstModule.js":
```js
var utils = require('./myFirstModule');
console.log(utils.sum(5, 8));
```
