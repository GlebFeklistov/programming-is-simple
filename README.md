# Программирование с нуля

Во всяком языке программирования определены способы организации данных и способы организации действий над данными. Несмотря на разнообразие языков программирования, их изучение происходит приблизительно по одной схеме. Это связано с общностью структуры различных языков программирования высокого уровня, которая отражена на схеме:

![](/structure.png)

## Цель
> Цель данного пособия — показать, что между языками программирования намного больше общего, чем кажется на первый взгляд, выбор языка не является ключевым моментом, развеять миф, что этому учатся долгое время, необходимы специфические знания, высокий уровень IQ и прочие психологические преграды. 

Мы хотим показать, что как и в любом другом виде деятельности за которую берется человек на протяжении всей своей задокументированной истории, он всегда проходит две точки: от полного нуля до стадии возведения навыка в искусство. Руководствуясь лишь идеей, желанием и целеустремленностью, все необходимое он приобретает в течении этого пути.

В программировании мы ничего изобретать не будем и потому в техническом плане у нас уже есть все необходимое.
У вас еще нет навыков и знаний в области программирования, но природа уже позаботилась о вас, наделив самыми важными навыка которые помогли вам дожить до текущего момента — это способность получать и обрабатывать поступающую информацию.

Информация представленная здесь является попыткой проанализировать и структурировать материалы из других источников в целях объяснить понятным языком основы написания программ абстрагируясь от конкретного языка. Следует понимать, что это лишь базис для дальнейшего, самостоятельного развития.

> Мы искренне считаем, что в каждом есть потенциал творца, просто ему иногда надо немного (или много) помочь раскрыться...

Желаем вам удачи и да пребудет с вами: "Живи долго и процветай!" :vulcan_salute:


## Языки программирования высокого уровня
> Язык программирования — средства которого обеспечивают описание задачи в наглядном, легко воспринимаемом виде, удобном для разработчика. Он не зависит от внутреннего устройства платформы на которой выполняется, поэтому программы, написанные на языках высокого уровня, требуют перевода в машинный код другими программами.

Чтобы определиться на каких языках составлять примеры, мы обратились к крупнейшему веб-сервису для хостинга IT-проектов и их совместной разработки. GitHub опубликовал собственный рейтинг [10 самых популярных языков программирования в 2018 году](https://octoverse.github.com/projects#languages). Согласно этой статистики были выбраны 6 наиболее востребованных языков программирования в настоящее время:

* JavaScript (NodeJS)
* Java
* Python
* Php
* C++
* C#
* Pascal

В качестве основного языка согласно статистике был выбран JavaScript (NodeJS). На данной странице будут демонстрироваться примеры кода написанные именно на нем. Большинство примеров на нём можно будет выполнить прямо в консоли браузера. Примеры кода на других языках будут доступны под примерами ввиде ссылок на тематические сраницы.

Дополнительно был добавлен Pascal, т.к. он используется для обучения программированию в старших классах и на первых курсах вузов, что является основой для ряда других языков. Он добавит контраста в гамму различий сиснтаксических парадигм других языков программирования, поможет переосмыслить пройденный путь и немного поностальгировать.

## Элементы языков

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

Так-же рекомендуется давать идентификаторам осмысленные и не сильно длинные имена, это упростит в дальшейшем семантический анализ программы. 

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
> Ключевые (зарезервированные) слова — это предопределенные идентификаторы, которые имеют специальное значение для определенного языка. Их использование строго регламентировано. Имена объектов программы не могут совпадать с ключевыми словами.

Примеры некоторых ключевых слов встречающиеся в большинстве языков:
* break
* case
* class
* catch
* const
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

Данные могут быть представлены различными типами. Разнообразие типов данных различается между языками программирования. Как правило в современных языках программирования уже присутствуют типы данных необходимые для решения большинства задач.
Как правило типы данных делятся на простые и составные (сложные).
Далее будут рассмотрены основные типы данных представленные в рассматриваемых языках программирования.

### Простые типы данных
> Простые типы данных — это, символы, числа и т.п. элементы, дальнейшее дробление которых не имеет смысла.

В большинстве языков простые типы можно разделить на следующие группы:
* Целые числа: 1, 14, 65859565
* Вещественные числа: 3.141592653589793, 678.45212
* Логические: true, false
* Строковые: 'Hello', 'John Doe'
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

Пример объявления переменных составных типов на JavaScript:

```js
var myEmptyObject = {};
var myObject = { x: 10, y: 12 };

var myEmptyArray = [];
var myArray = [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ];
```

## Действия над данными
> Над всеми типами данных могут выполняться четыре операции: создание, чтение, обновление и удаление.

* Создание — заключается в выделении памяти для хранения данных и связывает идентификатор с этой областью памяти.
* Чтение — используется для доступа к данным находящимся в выделенной области памяти. Форма операции доступа зависит от типа данных, к которой осуществляется обращение.
* Ообновление — позволяет заменить значение данных в памяти на другое значение.
* Удалениуе — противоположна по своему действию операции создания.

Помимо этих общих операций для каждого типа данных могут быть определены специфические операции, работающие только с данными указанного типа.

Отдельно стоит сказать про операцию "Удаления", так как она доступна только элементам которые были созданы в процессе работы программы.
Такие элементы называются динамическими, так как они работают с динамической областью памяти доступной всем программам выполняющимся на компьютере, следовательно есть конечный предел памяти для всех программам, как только этот предел будет достигнут это повлечет за собой неприятные последствия, от увеличения времени отклика программ до полного откзаза операционной системы.
Но не все так печально, в большинстве языков программирования существуют автоматизированные сборщики мусора которые сами следят за использованием таких динамических данных и уничтожают их после использования. 
В языках без сборщиков мусора (Pascal, C++, C#) разработчикам приходится следить самим за объемом памяти которых потребляет их программа и вовремя высвобождать её после использования динамических данных.

### Объявление переменных
> Переменная — поименованная, либо адресуемая иным способом область памяти, адрес которой можно использовать для осуществления доступа к данным и изменять их значение в ходе выполнения программы.

```js
let pi = 3.141592653589793;
let person = "John Doe";
let answer = 'Yes I am!';
```
:books: [Примеры](/declaration_vars.md)

### Объявление констант
> Константа — способ адресации данных, изменение которых программой не предполагается или запрещается. 

Применение констант повышает надёжность и безошибочность программы, позволяя избегать использования техники [«магических чисел»](/bad_practices.md#магические-числа).
```js
const PI = 3.141592653589793;
```
:books: [Примеры](/declaration_const.md)

### Требования при объявлении идентификаторов
В современных языках программирования длина имени практически не ограничена. Хорошим стилем является осмысленное именование переменных, что в свою очередь повышает читабельность кода программы и облегчает её семантический анализ.

Ограничения при объявлении итентификаторов:
* Разрешается использовать строчные и прописные буквы, цифры и символ подчёркивания
* Первым символом обязательно должна быть буква, далее допускается использование цифр
* В имени переменной не должно быть пробелов
* Имя переменной не может совпадать с [ключевыми словами](/dictionary.md#%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%B2%D1%8B%D0%B5-%D1%81%D0%BB%D0%BE%D0%B2%D0%B0)
* В большинстве языков заглавные и строчные буквы в именах переменных различаются, переменные a и A — разные переменные.

### Ввод-вывод данных
Компьютерные программы получают данные, обрабатывают и выводят данные на экран, в файл, отправляют по сети или в другую программу.
Следовательно, любой язык программирования должен иметь инструменты как для ввода данных, так и для вывода данных.

```js
console.log('Hello World!');
```

:books: [Примеры](/stdout.md)

Данный пример иллюстрирует простой механизм вывода фразы "Hello World!" на экран.

## Обработка данных

### Выражения
> Выражением является любой корректный блок кода, который возвращает значение.

Результатом вычисления выражения является величина определенного типа, как правило типы выражений ограниченый типами данных конкретного языка программирования, числовые, строковые, логические и .т.д.

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
* условные или ветвления
* циклы

#### Оператор присваивания
Основной оператор присваивания — это знак равно (=), он и присваивает значение правого операнда, левому. 
То есть в выражении x = 10, присваивает значение 10, переменной x.

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
```

Результатом выполнения оператора присваивания является изменение состояния данных: все переменные, отличные от переменной, стоящей в левой части оператора присваивания, не меняют своего значения, а указанная переменная получает значение выражения, стоящего в правой части оператора присваивания. 

#### Арифметические операторы
Арифметические операторы своими операндами принимают числовые значения такие как литерали или переменные и возвращают одно значение соответствующие типу принимающей переменной.

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
var b = 10 > 5;
var c = 10 != 5;
var d = 10 <= 5;
```

#### Логические операторы
Когда необходимо объединить несколько операций сравнения в одном выражение используются логические операции, это необходимо так как операции отношения сравнивают только два аргумента, в реальной практике условия бывают намного сложнее.

Список операторов:
* && логическое И
* || логическое ИЛИ

```js
var a = true && true
var b = true && false
var c = false && true
var d = true  || true
var e = false || true
var f = true  || false
var g = false || false
```

#### Строковые операторы
В дополнение к операторам отношения, которые могут использоваться со строковыми значениями, оператор (+) позволяет объединить две и более строки, возвращая при этом строку, которая представляет собой объединение двух строк-операндов.

```js
var a = 'Hello' + 'World!';
var b = 'Hello' + ' ' + 'World!';
var c = 'Hello ' + 'John Doe';
```

#### Условные или ветвления
Условные операторы применяется в случаях, когда выполнение или невыполнение некоторого набора команд должно зависеть от некоторого условия. Еще условные операторы называют, операторами ветвления.

Условные операторы являются неотъемлемой частью программ на всех языках программирования. Основным условным оператором является оператор if и его продолжение else. В ряде языков программирования кроме if-else существуют дополнительные операторы ветвления.

Основные виды условных операторов:
* полный условный оператор
* не полный условный оператор
* переключатель

##### Полный условный оператор
Полный условный оператор соответствует алгоритмической структуре полного ветвления: 

![Полный условный оператор](/if_full.png)

Данной блок схеме соответствует следующий фрагмент кода:

```js
if (a > 10) {
  //  Здесь выполняются инструкции, если результат выражения больше 10
  console.log('a больше 10');
} else {
  //  Здесь выполняются инструкции, если результат выражения меньше 10
  console.log('a меньше 10');
}
```

:books: [Примеры](/if_full.md)

##### Не полный условный оператор
Алгоритмическая структура неполного ветвления реализуется с помощью неполного условного оператора, который имеет вид:

![Не полный условный оператор](/if_short.png)

Данной блок схеме соответствует следующий фрагмент кода:

```js
if (a >= 10) {
  //  Здесь выполняются инструкции, если результат выражения больше или равен 10
  console.log('a больше или равно 10');
}
```

:books: [Примеры](/if_short.md)

##### Переключатель
Конструкция переключатель заменяет собой сразу несколько if, в разных языках такой конструкции соотвествует своё ключевое слово.
Она представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами. 
Алгоритмическая структура переключтеля имеет следующий вид:

![Не полный условный оператор](/if_switch.png)

Данной блок схеме соответствует следующий фрагмент кода:

```js
switch (a > 10) {
  case true:
    //  Здесь выполняются инструкции, если результат выражения больше 10
    console.log('a больше 10');
    break;
  case false:
    //  Здесь выполняются инструкции, если результат выражения меньше или равен 10
    console.log('a меньше или равно 10');
    break;
  default:
    //  Здесь находятся инструкции, которые выполняются при отсутствии соответствующего значения
    console.log('фигня какая-то');
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
> Цикл с предусловием — цикл, который выполняется, пока истинно некоторое условие, указанное перед его началом. Это условие проверяется до выполнения тела цикла, поэтому тело цикла может быть не выполнено ни разу если условие с самого начала ложно.

Данному типу циклов соответствует следующая алгоритмическая структура: 

![Циклы с предусловием](/cycles_pre.png)

Данной блок схеме соответствует следующий фрагмент кода:

```js
var i = 0;  
while (i < 3) {
  alert(i);
  i++;  
}
```

:books: [Примеры](/cycles_pre.md)

##### Циклы с постусловием
> Цикл с постусловием — цикл, в котором условие проверяется после выполнения тела цикла. Отсюда следует, что тело всегда выполняется хотя бы один раз.

Данному типу циклов соответствует следующая алгоритмическая структура: 

![Циклы с постусловием](/cycles_post.png)

Данной блок схеме соответствует следующий фрагмент кода:

```js
var i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
```

:books: [Примеры](/cycles_post.md)

##### Цикл со счётчиком
> Цикл со счётчиком — цикл, для которого предусмотрена специальная конструкция, в которой некоторая переменная изменяет своё значение от заданного начального значения до конечного значения с некоторым шагом, и для каждого значения этой переменной тело цикла выполняется один раз.

Данному типу циклов соответствует следующая алгоритмическая структура: 

![Циклы с постусловием](/cycles_pre.png)

Данной блок схеме соответствует следующий фрагмент кода:

```js
for (var i = 0; i < 3; i++) { 
  alert(i);
}
```

:books: [Примеры](/cycles_for.md)

В большинстве языков, цикл for, несмотря на синтаксическую форму, в действительности является циклом с предусловием, но имеет более удобную в использовании форму записи и изоляцию переменной используемой в качестве счетчика, таким образом код выше полностью повторяет функциональность кода ниже:

```js
var i = 0;
while (i < 3) {
  alert(i);
  i++;
}
```

### Подпрограммы, функции
> Функция — в программировании представляет собой обособленный участок кода, который можно вызывать, обратившись к нему по имени, которым он был назван, очень часто функции называют – подпрограммами. 

Функция должна быть соответствующим образом объявлена и определена. Объявление функции, кроме имени, содержит список имён передаваемых параметров. 

Для того, чтобы использовать ранее определённую функцию, необходимо в требуемом месте программы указать имя функции и перечислить передаваемые в функцию параметры. При вызове происходит выполнение команд внутри тела функции. 

Функция может возвращать значение или быть прервана. В обоих случаях это выполняется с помощью оператора **return**, при этом выполнение основной программы продолжается с места, где эта функция была вызвана.

Пример объявления функции с идентификатором "max", которая принимает два параметра (а и b), определяет больший из них и возвращает его значение:

```
function max(a, b) {
  return a > b ? a : b; 
}
```

:books: [Примеры](/functions.md)

### Модули

