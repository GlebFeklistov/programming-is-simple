# Программирование с нуля

Во всяком языке программирования определены способы организации данных и способы организации действий над данными. Несмотря на разнообразие языков программирования, их изучение происходит приблизительно по одной схеме. Это связано с общностью структуры различных языков программирования высокого уровня, которая отражена на схеме:

![](/structure.png)

## Языки программирования
Языки примеры которых будут приведены в тексте:
* JavaScript
* Java
* Python
* Php
* C++
* C#
* Turbo Pascal

## Элементы языка

### Алфавит
Набор разрешенных символов, с помощью которых могут быть образованы лексемы, выражения и операторы данного языка.

Алфавит языка включает:
* прописные и строчные латинские буквы и знак подчеркивания
* арабские цифры от 0 до 9
* специальные знаки: " {} , [] () + - * / % . : ? < > = ! & # ~ ;
* пробельные символы: пробел, символы табуляции, символы перехода на новую cтроку

### Лексемы
Лексема (информатика) — последовательность допустимых символов языка программирования, имеющая смысл для [транслятора](https://github.com/GlebFeklistov/programming-is-simple/blob/master/dictionary.md#%D1%82%D1%80%D0%B0%D0%BD%D1%81%D0%BB%D1%8F%D1%82%D0%BE%D1%80-%D0%B0%D0%BD%D0%B3%D0%BB-translator---%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D1%87%D0%B8%D0%BA).

Из символов алфавита формируются лексемы языка:
* [идентификаторы](https://github.com/GlebFeklistov/programming-is-simple/blob/master/dictionary.md#%D0%B8%D0%B4%D0%B5%D0%BD%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80)
* [ключевые (зарезервированные) слова](https://github.com/GlebFeklistov/programming-is-simple/blob/master/dictionary.md#%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%B2%D1%8B%D0%B5-%D1%81%D0%BB%D0%BE%D0%B2%D0%B0)
* знаки операций: + - * / % =
* разделители: скобки, точка, запятая, пробельные символы

**Границы лексем** определяются другими лексемами, такими, как разделители или знаки операций.

### Синтаксис
Набор правил, описывающий комбинации лексем, считающиеся правильно структурированной программой или её фрагментом.

:bulb: [Примеры](/hello_world.md)

## Организация данных
Представление данных и управление данными в соответствии с определенными соглашениями.
Данные могут быть представлены различным образом: изображение, текст, звук.

### Простые типы данных
символы, числа и т.п. элементы, дальнейшее дробление которых не имеет смысла. Из простых типов данных формируются сложные типы данных или структурированные данные.

### Структурированные типы данных
Под структурированными типами данных в общем случае понимают набор из простых типов данных и связей между ними.

## Действия над данными
Над всеми структурами данных могут выполняться четыре операции: создание, чтение, обновление и удаление.

* Операция создания заключается в выделении памяти для хранения структуры данных, так-же эта операция называет объявлением переменной или константы.
* Операция удаление противоположна по своему действию операции создания.
* Операция чтение используется для доступа к данным внутри самой структуры. Форма операции доступа зависит от типа структуры данных, к которой осуществляется обращение.
* Операция обновления позволяет заменить значения данных в структуре на другие.
Вышеуказанные четыре операции обязательны для всех структур и типов данных. Помимо этих общих операций для каждой структуры данных могут быть определены операции специфические, работающие только с данными указанного типа.

### Объявление переменных или констант
Переменная (программирование) — поименованная, либо адресуемая иным способом область памяти, адрес которой можно использовать для осуществления доступа к данным и изменять значение в ходе выполнения программы.

Другими словами переменная, это область памяти, имеющая идентификатор, который иначе называют именем переменной.
Хорошим стилем является осмысленное именование переменных. Разрешается использовать строчные и прописные буквы, цифры и символ подчёркивания. Первым символом обязательно должна быть буква, в имени переменной не должно быть пробелов. В современных версиях языков длина имени практически не ограничена. Имя переменной не может совпадать с [ключевыми словами](https://github.com/GlebFeklistov/programming-is-simple/blob/master/dictionary.md#%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%B2%D1%8B%D0%B5-%D1%81%D0%BB%D0%BE%D0%B2%D0%B0). В большинстве языков заглавные и строчные буквы в именах переменных различаются, переменные a и A — разные переменные.

### Ввод-вывод данных

### Обработка данных
#### Операции
#### Выражения и операторы
#### Подпрограммы
