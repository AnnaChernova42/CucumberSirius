#language: ru
@exampletests
@all_steps_touch_rus_example
Функционал: Все шаги на русском языке

  Сценарий: Пример всех шагов на русском языке
    Дано страница 'Платежи и переводы' открыта
    Дано адресная строка содержит "sirius-atm"
    Когда пользователь нажимает кнопку "ЕИРЦ"
      Тогда клавиатура отображена
      И элемент "caption" с текстом "Код плательщика" отображен
    Когда пользователь нажимает кнопку "Далее"
      Тогда элемент "caption" с текстом "Код плательщика" отображен
    Когда пользователь вводит "1234567890"
      Тогда элемент с текстом "1234567890" отображен
    Когда пользователь нажимает кнопку 'Backspace' "7" раз
      Тогда элемент с текстом "1234567890" не отображен
      И элемент с текстом "123" отображен
    Когда пользователь вводит "4567890"
    Когда пользователь ожидает "40" секунд
      Тогда элемент 'экран ожидания' отображен
      И элемент 'support' с текстом "КОНТАКТНЫЙ ЦЕНТР - 900, 8 (800) 555-55-50" отображен
    Если пользователь нажимает кнопку "Да"
      То элемент 'notes' с текстом "Введите код плательщика - 10 цифр" отображен
    Если пользователь нажимает кнопку "Далее"
      То шаблон "atm_input_month" отображен
    Когда пользователь нажимает кнопку 'прокрутка календаря вперед'
      Тогда элемент с текстом "Апрель 2018" отображен
    Когда пользователь нажимает кнопку 'прокрутка календаря назад'
      И пользователь нажимает кнопку 'прокрутка календаря назад'
        Тогда элемент с текстом "Апрель 2016" отображен
    Когда пользователь нажимает кнопку "Май"
      Тогда элемент с текстом "Май 2016" отображен
    Когда пользователь нажимает кнопку "Далее"
      Тогда элемент с текстом "Вклады" отображен
    Когда пользователь прокручивает страницу вниз "1" раз
      И пользователь прокручивает страницу вверх "1" раз
      И пользователь прокручивает страницу вниз "1" раз
      И пользователь нажимает кнопку "40817810838123731213"
      И пользователь нажимает кнопку "Далее"
        Тогда элемент прокрутки страницы отображен
        И элемент "Информация по получателю средств" с текстом "В адрес этого поставщика Вы можете оплатить улуги ЖКХ по ЕПД" отображен на странице 'Итого'
        И элемент "Период оплаты" с текстом "11/2013" отображен на странице 'Итого'
    Когда пользователь нажимает кнопку "Меню"
      Тогда элемент 'поле региона' с текстом "Все регионы" отображен
    Когда пользователь нажимает кнопку "Оплата услуг сканированием штрих-кода"
      Тогда элемент "title" с текстом "Оплата услуг сканированием штрих-кода" отображен
    Когда пользователь нажимает кнопку "Назад"
      Тогда элемент с текстом "Поиск услуг и организаций" не отображен
    Когда пользователь нажимает кнопку "Поиск услуг и организаций"
      Тогда элемент "description" с текстом "Введите наименование услуги или организации, ИНН или номер расчетного счета" отображен
      И клавиатура отображена
    Когда пользователь вводит "мос"
      Когда пользователь нажимает кнопку "Найти"
        Тогда элемент с текстом "ЕИРЦ (нал со сдачей)" не отображен
    Когда пользователь нажимает кнопку 'Помощь'
      Тогда элемент 'помощь' с текстом "Поиск может быть выполнен при вводе минимум 3-х символов" отображен
    Когда пользователь нажимает кнопку 'Помощь'
      Тогда элемент с текстом "Поиск может быть выполнен при вводе минимум 3-х символов" отображен
    Когда пользователь нажимает кнопку "Меню"
      Тогда элемент с текстом "Переводы" отображен
    Когда пользователь нажимает кнопку "Переводы"
      Тогда элемент с текстом "Между своими счетами" отображен
    Когда пользователь нажимает кнопку "Между своими счетами"
      Тогда элемент "caption" с текстом "Списать с" отображен
    Когда пользователь нажимает кнопку "Electron"
      И пользователь нажимает кнопку "Далее"
        Тогда элемент "caption" с текстом "Зачислить на" отображен
    Когда пользователь нажимает кнопку "Maestro"
      И пользователь нажимает кнопку "Далее"
        Тогда элемент "caption" с текстом "Сумма зачисления" отображен
    Когда пользователь нажимает кнопку "2"
      Тогда элемент с текстом "2482" отображен
    Когда пользователь нажимает кнопку "Далее"
      Тогда элемент "caption" с текстом "Перевод подготовлен" отображен
      И элемент с текстом "Обратите внимание! Вы можете выполнить операцию без подтверждения в Контактном центре на сумму до 50 000,00 руб и с подтверждением на сумму до 500 000,00 руб." отображен
    Когда пользователь нажимает кнопку "Перевести"
      Тогда элемент "caption" с текстом "Операция успешно завершена" отображен на странице 'ОК'
    Когда пользователь нажимает кнопку "Напечатать чек"
      Тогда чек отображен
      Тогда на чеке отображена строка "ПАО СБЕРБАНК"
    Когда пользователь нажимает кнопку "Ошибка" на чеке
      Тогда элемент "description" с текстом "Не удалось распечатать чек. Вы можете распечатать чек позднее, выбрав нужную операцию в разделе «История операций»" отображен на странице 'ОК'
    Когда пользователь нажимает кнопку "Платежи и переводы"
      Тогда элемент с текстом "История операций" не отображен
    Когда пользователь нажимает кнопку "Транспорт"
      Тогда элемент "caption" с текстом "Выберите поставщика" отображен
    Когда пользователь нажимает кнопку "Парковочные технологии"
      Тогда элемент "caption" с текстом "Сервис временно недоступен. Ошибка 216." отображен на странице 'Ошибка'
      И элемент "description" с текстом "Повторите операцию позже или обратитесь в службу поддержки" отображен на странице 'Ошибка'
    Когда пользователь ожидает "10" секунд
      И страница 'Главный экран' открыта
        Тогда приветствие "Здравствуйте, САТУРН ПЛАНЕТОВИЧ" отображено
    Когда пользователь нажимает кнопку "Платежи и переводы"
      То элемент с текстом "Здравствуйте, САТУРН ПЛАНЕТОВИЧ" не отображен
    Когда пользователь нажимает кнопку 'Домой'
      Тогда приветствие "Здравствуйте, САТУРН ПЛАНЕТОВИЧ" отображено