$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Touch/Платежи наличными/Авторизация/1084. Авторизация в гостевом блоке (успешно).feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: ru"
    }
  ],
  "line": 6,
  "name": "Платежи наличными",
  "description": "",
  "id": "платежи-наличными",
  "keyword": "Функционал",
  "tags": [
    {
      "line": 3,
      "name": "@TOUCH"
    },
    {
      "line": 4,
      "name": "@ПН"
    }
  ]
});
formatter.before({
  "duration": 47675596989,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Авторизация в гостевом блоке (успешно)",
  "description": "",
  "id": "платежи-наличными;авторизация-в-гостевом-блоке-(успешно)",
  "type": "scenario",
  "keyword": "Сценарий",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@testcase_1084_161765"
    },
    {
      "line": 10,
      "name": "@testcase_1168_161771"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "страница \u0027Платежи наличными\u0027 открыта",
  "keyword": "Пусть "
});
formatter.step({
  "line": 13,
  "name": "шаблон \"atm_cash_menu\" отображен",
  "keyword": "То "
});
formatter.step({
  "line": 14,
  "name": "в логе ПН сервера присутствует строка \"PaymentSource \u003d 0\"",
  "keyword": "И "
});
formatter.step({
  "line": 15,
  "name": "в логе ПН сервера присутствует строка \"cashout \u003d 1\"",
  "keyword": "И "
});
formatter.step({
  "line": 16,
  "name": "в логе ПН сервера присутствует строка \"FormFactor \u003d ERROR_ON_GET_VALUE:err_code\"",
  "keyword": "И "
});
formatter.step({
  "line": 17,
  "name": "в логе ПН сервера присутствует строка \"cashin \u003d 1\"",
  "keyword": "И "
});
formatter.step({
  "line": 18,
  "name": "в логе ПН сервера присутствует строка \"nfcReader \u003d 1\"",
  "keyword": "И "
});
formatter.step({
  "line": 19,
  "name": "в логе ПН сервера присутствует строка \"PaymentAuthRes \u003d 0\"",
  "keyword": "И "
});
formatter.step({
  "line": 20,
  "name": "в логе ПН сервера присутствует строка \"PaymentStatus \u003d 0\"",
  "keyword": "И "
});
formatter.step({
  "line": 21,
  "name": "в логе ПН сервера присутствует строка \"printer \u003d 1\"",
  "keyword": "И "
});
formatter.step({
  "line": 22,
  "name": "в логе ПН сервера присутствует строка \"system \u003d cash_pay\"",
  "keyword": "И "
});
formatter.step({
  "line": 23,
  "name": "в логе ПН сервера присутствует строка \"terminal \u003d 222212\"",
  "keyword": "И "
});
formatter.step({
  "line": 24,
  "name": "в логе ПН сервера присутствует строка \"PaymentCurrency \u003d 0\"",
  "keyword": "И "
});
formatter.step({
  "line": 25,
  "name": "в логе ПН сервера присутствует строка \"PaymentProvidedAmount \u003d 0\"",
  "keyword": "И "
});
formatter.step({
  "line": 26,
  "name": "в логе ПН сервера присутствует строка \"NotesAccept \u003d BNA\"",
  "keyword": "И "
});
formatter.step({
  "line": 27,
  "name": "в логе ПН сервера присутствует строка \"DisplayType \u003d touch\"",
  "keyword": "И "
});
formatter.step({
  "line": 28,
  "name": "в логе ПН сервера присутствует строка \"ClientType \u003d 2\"",
  "keyword": "И "
});
formatter.step({
  "line": 29,
  "name": "в логе ПН сервера присутствует строка \"cardreader \u003d 1\"",
  "keyword": "И "
});
formatter.step({
  "line": 30,
  "name": "в логе ПН сервера присутствует строка \"scanner \u003d 1\"",
  "keyword": "И "
});
formatter.step({
  "line": 31,
  "name": "в логе ПН сервера присутствует строка \"PaymentRequestedAmount \u003d 000000000000\"",
  "keyword": "И "
});
formatter.step({
  "line": 32,
  "name": "в логе ПН сервера присутствует строка \"Пропускаем проверку токена\"",
  "keyword": "И "
});
formatter.step({
  "line": 33,
  "name": "в логе ПН сервера присутствует строка \"ЕРИБ REQUEST: GuestCSALogon\"",
  "keyword": "И "
});
formatter.step({
  "line": 34,
  "name": "в логе ПН сервера присутствует строка \"/CSAATM/login.do\"",
  "keyword": "И "
});
formatter.step({
  "line": 35,
  "name": "в логе ПН сервера присутствует строка \"POST параметры: []\"",
  "keyword": "И "
});
formatter.step({
  "line": 36,
  "name": "в логе ПН сервера присутствует строка \"ЕРИБ REQUEST: NodeLogon\"",
  "keyword": "И "
});
formatter.step({
  "line": 37,
  "name": "в логе ПН сервера присутствует строка \"postCSAGuestLogin.do\"",
  "keyword": "И "
});
formatter.step({
  "line": 38,
  "name": "в логе ПН сервера присутствует строка \"POST параметры: [token \u003d \u0027170323124206546938003371720400100011007865\u0027 , codeATM \u003d \u0027222212\u0027 , atmRegionCode \u003d \u002717401\u0027 , atmTB \u003d \u002742\u0027 , atmOSB \u003d \u00278611\u0027 ]\"",
  "keyword": "И "
});
formatter.match({
  "location": "OpenPageSteps.openedCashPayPage()"
});
formatter.result({
  "duration": 11858400007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "atm_cash_menu",
      "offset": 8
    }
  ],
  "location": "CheckDisplaySteps.templateShouldBeAn(String)"
});
formatter.result({
  "duration": 4422578207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PaymentSource \u003d 0",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 659067730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cashout \u003d 1",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 24042378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FormFactor \u003d ERROR_ON_GET_VALUE:err_code",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 23708484,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cashin \u003d 1",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 22889467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nfcReader \u003d 1",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 23092980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PaymentAuthRes \u003d 0",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 23724037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PaymentStatus \u003d 0",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 32590273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "printer \u003d 1",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 23468239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "system \u003d cash_pay",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 23213103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "terminal \u003d 222212",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 23655206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PaymentCurrency \u003d 0",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 22419565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PaymentProvidedAmount \u003d 0",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 24187650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NotesAccept \u003d BNA",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 22667422,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DisplayType \u003d touch",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 24064881,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ClientType \u003d 2",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 26032508,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat siriustest.steps.UserActionSteps.serverLogShouldContainStringPN(UserActionSteps.java:62)\r\n\tat ✽.И в логе ПН сервера присутствует строка \"ClientType \u003d 2\"(Touch/Платежи наличными/Авторизация/1084. Авторизация в гостевом блоке (успешно).feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "cardreader \u003d 1",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "scanner \u003d 1",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PaymentRequestedAmount \u003d 000000000000",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Пропускаем проверку токена",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ЕРИБ REQUEST: GuestCSALogon",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "/CSAATM/login.do",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "POST параметры: []",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ЕРИБ REQUEST: NodeLogon",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "postCSAGuestLogin.do",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "POST параметры: [token \u003d \u0027170323124206546938003371720400100011007865\u0027 , codeATM \u003d \u0027222212\u0027 , atmRegionCode \u003d \u002717401\u0027 , atmTB \u003d \u002742\u0027 , atmOSB \u003d \u00278611\u0027 ]",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 5266630023,
  "status": "passed"
});
formatter.uri("Touch/Платежи наличными/Выбор поставщика/1171.Форма платежи и переводы.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: ru"
    }
  ],
  "line": 6,
  "name": "Платежи наличными",
  "description": "",
  "id": "платежи-наличными",
  "keyword": "Функционал",
  "tags": [
    {
      "line": 3,
      "name": "@TOUCH"
    },
    {
      "line": 4,
      "name": "@ПН"
    }
  ]
});
formatter.before({
  "duration": 4244007936,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Форма платежи и переводы",
  "description": "",
  "id": "платежи-наличными;форма-платежи-и-переводы",
  "type": "scenario",
  "keyword": "Сценарий",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@testcase_1171_161766"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "страница \u0027Платежи наличными\u0027 открыта",
  "keyword": "Пусть "
});
formatter.step({
  "line": 12,
  "name": "шаблон \"atm_cash_menu\" отображен",
  "keyword": "То "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "# Запрос справочника поставщиков"
    }
  ],
  "line": 14,
  "name": "элемент с текстом \"Платежи наличными\" отображен",
  "keyword": "И "
});
formatter.step({
  "line": 15,
  "name": "элемент с текстом \"ЕИРЦ\" отображен",
  "keyword": "И "
});
formatter.step({
  "line": 16,
  "name": "в логе ПН сервера присутствует строка \"REQUEST: chooseProvider\"",
  "keyword": "И "
});
formatter.step({
  "line": 17,
  "name": "в логе ПН сервера присутствует строка \"private/dictionary/servicesPayments.do\"",
  "keyword": "И "
});
formatter.step({
  "line": 18,
  "name": "в логе ПН сервера присутствует строка \"POST параметры: [regionGuid \u003d \u002745000\u0027 ]\"",
  "keyword": "И "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "# Запрос популярных поставщиков"
    }
  ],
  "line": 20,
  "name": "в логе ПН сервера присутствует строка \"REQUEST: choosePopular\"",
  "keyword": "И "
});
formatter.step({
  "line": 21,
  "name": "в логе ПН сервера присутствует строка \"private/dictionary/popularPayments.do\"",
  "keyword": "И "
});
formatter.step({
  "line": 22,
  "name": "в логе ПН сервера присутствует строка \"POST параметры: [regionGuid \u003d \u002745000\u0027 , paginationSize \u003d \u00276\u0027 , type \u003d \u0027provider\u0027 ]\"",
  "keyword": "И "
});
formatter.match({
  "location": "OpenPageSteps.openedCashPayPage()"
});
formatter.result({
  "duration": 8240510153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "atm_cash_menu",
      "offset": 8
    }
  ],
  "location": "CheckDisplaySteps.templateShouldBeAn(String)"
});
formatter.result({
  "duration": 917405657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Платежи наличными",
      "offset": 19
    }
  ],
  "location": "CheckDisplaySteps.elementShouldBeDisplayed(String)"
});
formatter.result({
  "duration": 127195215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ЕИРЦ",
      "offset": 19
    }
  ],
  "location": "CheckDisplaySteps.elementShouldBeDisplayed(String)"
});
formatter.result({
  "duration": 46511251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "REQUEST: chooseProvider",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 206181248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "private/dictionary/servicesPayments.do",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 23831585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST параметры: [regionGuid \u003d \u002745000\u0027 ]",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 23981821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "REQUEST: choosePopular",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 25566909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "private/dictionary/popularPayments.do",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 26255545,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST параметры: [regionGuid \u003d \u002745000\u0027 , paginationSize \u003d \u00276\u0027 , type \u003d \u0027provider\u0027 ]",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 25018250,
  "status": "passed"
});
formatter.after({
  "duration": 1020926472,
  "status": "passed"
});
formatter.uri("Touch/Платежи наличными/Выбор поставщика/1172.Выбор категории.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: ru"
    }
  ],
  "line": 6,
  "name": "Платежи наличными",
  "description": "",
  "id": "платежи-наличными",
  "keyword": "Функционал",
  "tags": [
    {
      "line": 3,
      "name": "@TOUCH"
    },
    {
      "line": 4,
      "name": "@ПН"
    }
  ]
});
formatter.before({
  "duration": 3075209950,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Выбор категории",
  "description": "",
  "id": "платежи-наличными;выбор-категории",
  "type": "scenario",
  "keyword": "Сценарий",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@testcase_1172_161767"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "страница \u0027Платежи наличными\u0027 открыта",
  "keyword": "Пусть "
});
formatter.step({
  "line": 12,
  "name": "пользователь нажимает кнопку \"Платежи наличными\"",
  "keyword": "Если "
});
formatter.step({
  "line": 13,
  "name": "шаблон \"atm_menu_inner\" отображен",
  "keyword": "То "
});
formatter.step({
  "line": 14,
  "name": "элемент \"title\" с текстом \"Платежи наличными\" отображен",
  "keyword": "И "
});
formatter.step({
  "line": 15,
  "name": "элемент \"caption\" с текстом \"Выберите поставщика\" отображен",
  "keyword": "И "
});
formatter.step({
  "line": 16,
  "name": "элемент с текстом \"Завершить обслуживание\" отображен",
  "keyword": "И "
});
formatter.step({
  "line": 17,
  "name": "в логе ПН сервера присутствует строка \"ЕРИБ REQUEST: chooseProvider\"",
  "keyword": "И "
});
formatter.step({
  "line": 18,
  "name": "в логе ПН сервера присутствует строка \"private/dictionary/servicesPayments.do\"",
  "keyword": "И "
});
formatter.step({
  "line": 19,
  "name": "в логе ПН сервера присутствует строка \"POST параметры: [id \u003d \u0027CASHPAY\u0027 , regionGuid \u003d \u002745000\u0027 , paginationSize \u003d \u0027200\u0027 ]\"",
  "keyword": "И "
});
formatter.match({
  "location": "OpenPageSteps.openedCashPayPage()"
});
formatter.result({
  "duration": 2388451492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Платежи наличными",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 1530465130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "atm_menu_inner",
      "offset": 8
    }
  ],
  "location": "CheckDisplaySteps.templateShouldBeAn(String)"
});
formatter.result({
  "duration": 2181882410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 9
    },
    {
      "val": "Платежи наличными",
      "offset": 27
    }
  ],
  "location": "CheckDisplaySteps.elementShouldBeDisplayed(String,String)"
});
formatter.result({
  "duration": 55026053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "caption",
      "offset": 9
    },
    {
      "val": "Выберите поставщика",
      "offset": 29
    }
  ],
  "location": "CheckDisplaySteps.elementShouldBeDisplayed(String,String)"
});
formatter.result({
  "duration": 54154751,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Завершить обслуживание",
      "offset": 19
    }
  ],
  "location": "CheckDisplaySteps.elementShouldBeDisplayed(String)"
});
formatter.result({
  "duration": 33836503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ЕРИБ REQUEST: chooseProvider",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 186455009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "private/dictionary/servicesPayments.do",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 24035760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST параметры: [id \u003d \u0027CASHPAY\u0027 , regionGuid \u003d \u002745000\u0027 , paginationSize \u003d \u0027200\u0027 ]",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 25613237,
  "status": "passed"
});
formatter.after({
  "duration": 942413980,
  "status": "passed"
});
formatter.uri("Touch/Платежи наличными/Выбор поставщика/1173.Выбран ПУ, у ПУ 1 услуга.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: ru"
    }
  ],
  "line": 6,
  "name": "Платежи наличными",
  "description": "",
  "id": "платежи-наличными",
  "keyword": "Функционал",
  "tags": [
    {
      "line": 3,
      "name": "@TOUCH"
    },
    {
      "line": 4,
      "name": "@ПН"
    }
  ]
});
formatter.before({
  "duration": 3377131182,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Выбран ПУ, у ПУ 1 услуга (Наличный расчет)",
  "description": "",
  "id": "платежи-наличными;выбран-пу,-у-пу-1-услуга-(наличный-расчет)",
  "type": "scenario",
  "keyword": "Сценарий",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@testcase_1173_161768"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "страница \u0027Платежи наличными\u0027 открыта",
  "keyword": "Пусть "
});
formatter.step({
  "line": 12,
  "name": "пользователь нажимает кнопку \"Платежи наличными\"",
  "keyword": "Если "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#автоматический выбор услуги с isPUForCash\u003dtrue,puTypeSum\u003d0 наименование совпадает"
    }
  ],
  "line": 14,
  "name": "пользователь нажимает кнопку \"1 одноименная услуга\"",
  "keyword": "Если "
});
formatter.step({
  "line": 15,
  "name": "шаблон \"atm_total\" отображен",
  "keyword": "То "
});
formatter.step({
  "line": 16,
  "name": "в логе ПН сервера присутствует строка \"ЕРИБ REQUEST: initCashPayment\"",
  "keyword": "И "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#автоматический выбор услуги с isPUForCash\u003dfalse, puTypeSum\u003d1, наименование совпадает, провайдер в описании услуги называется не правильно"
    }
  ],
  "line": 18,
  "name": "пользователь нажимает кнопку \"Назад\"",
  "keyword": "Если "
});
formatter.step({
  "line": 19,
  "name": "пользователь нажимает кнопку \"Платежи наличными\"",
  "keyword": "Если "
});
formatter.step({
  "line": 20,
  "name": "пользователь нажимает кнопку \"1 одноименная услуга безнал\"",
  "keyword": "Если "
});
formatter.step({
  "line": 21,
  "name": "шаблон \"atm_attention\" отображен",
  "keyword": "То "
});
formatter.step({
  "line": 22,
  "name": "пользователь нажимает кнопку \"Далее\"",
  "keyword": "Если "
});
formatter.step({
  "line": 23,
  "name": "шаблон \"atm_total\" отображен",
  "keyword": "То "
});
formatter.step({
  "line": 24,
  "name": "в логе ПН сервера присутствует строка \"ЕРИБ REQUEST: initCashPayment\"",
  "keyword": "И "
});
formatter.match({
  "location": "OpenPageSteps.openedCashPayPage()"
});
formatter.result({
  "duration": 2882698846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Платежи наличными",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 998895733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 одноименная услуга",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 980780062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "atm_total",
      "offset": 8
    }
  ],
  "location": "CheckDisplaySteps.templateShouldBeAn(String)"
});
formatter.result({
  "duration": 699576493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ЕРИБ REQUEST: initCashPayment",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 196731608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Назад",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 229917860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Платежи наличными",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 1173517844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 одноименная услуга безнал",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 739875125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "atm_attention",
      "offset": 8
    }
  ],
  "location": "CheckDisplaySteps.templateShouldBeAn(String)"
});
formatter.result({
  "duration": 977379899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Далее",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 129406065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "atm_total",
      "offset": 8
    }
  ],
  "location": "CheckDisplaySteps.templateShouldBeAn(String)"
});
formatter.result({
  "duration": 655479276,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ЕРИБ REQUEST: initCashPayment",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 229288789,
  "status": "passed"
});
formatter.after({
  "duration": 1384426558,
  "status": "passed"
});
formatter.uri("Touch/Платежи наличными/ПУ для платежей наличными/1227.Оплата сотовых операторов.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: ru"
    }
  ],
  "line": 6,
  "name": "Платежи наличными",
  "description": "",
  "id": "платежи-наличными",
  "keyword": "Функционал",
  "tags": [
    {
      "line": 3,
      "name": "@TOUCH"
    },
    {
      "line": 4,
      "name": "@ПН"
    }
  ]
});
formatter.before({
  "duration": 2955727397,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Оплата сотовых операторов",
  "description": "",
  "id": "платежи-наличными;оплата-сотовых-операторов",
  "type": "scenario",
  "keyword": "Сценарий",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@testcase_1227_161772"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "страница \u0027Платежи наличными\u0027 открыта",
  "keyword": "Пусть "
});
formatter.step({
  "line": 12,
  "name": "пользователь нажимает кнопку \"МТС\"",
  "keyword": "Если "
});
formatter.step({
  "line": 13,
  "name": "пользователь ожидает \"5\" секунд",
  "keyword": "И "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "# То в логе ПН сервера присутствует строка \"payments/servicesPayments/edit.do\""
    }
  ],
  "line": 15,
  "name": "в логе ПН сервера присутствует строка \"POST параметры: [billing \u003d \u0027mob\u0027 , service \u003d \u0027100\u0027 , provider \u003d \u0027200\u0027 , serviceGuid \u003d \u0027100_guid\u0027 , providerGuid \u003d \u0027200_guid\u0027 , operation \u003d \u0027init\u0027 ]\"",
  "keyword": "То "
});
formatter.step({
  "line": 16,
  "name": "пользователь вводит \"3693693693\"",
  "keyword": "Если "
});
formatter.step({
  "line": 17,
  "name": "пользователь нажимает кнопку \"Далее\"",
  "keyword": "Если "
});
formatter.step({
  "line": 18,
  "name": "пользователь вводит \"500\"",
  "keyword": "Если "
});
formatter.step({
  "line": 19,
  "name": "пользователь ожидает \"2\" секунд",
  "keyword": "И "
});
formatter.step({
  "line": 20,
  "name": "пользователь нажимает кнопку \"Далее\"",
  "keyword": "Если "
});
formatter.step({
  "line": 21,
  "name": "шаблон \"atm_total\" отображен",
  "keyword": "То "
});
formatter.step({
  "line": 22,
  "name": "в логе ПН сервера присутствует строка \"servicesPayments/edit.do\"",
  "keyword": "И "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "# И в логе ПН сервера присутствует строка \"POST параметры: [billing \u003d \u0027mob\u0027 , service \u003d \u0027100\u0027 , provider \u003d \u0027200\u0027 , serviceGuid \u003d \u0027100_guid\u0027 , providerGuid \u003d \u0027200_guid\u0027 , field(RecIdentifier) \u003d \u00273462346234\u0027 , field(amount) \u003d \u00272346.00\u0027 , operation \u003d \u0027next\u0027 , transactionToken \u003d \u0027timeout123456\u0027 , operationUID \u003d \u0027AAfecf5401c685dcb2306de97889ead1\u0027 ]\""
    }
  ],
  "line": 24,
  "name": "пользователь нажимает кнопку \"Оплатить наличными\"",
  "keyword": "Если "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#   То в логе ПН сервера присутствует строка \"ATM template: ATM_INPUT\""
    }
  ],
  "line": 26,
  "name": "пользователь вводит \"3693693693\"",
  "keyword": "Если "
});
formatter.step({
  "line": 27,
  "name": "пользователь нажимает кнопку \"Далее\"",
  "keyword": "Если "
});
formatter.step({
  "line": 28,
  "name": "пользователь нажимает кнопку \"100\"",
  "keyword": "Если "
});
formatter.step({
  "line": 29,
  "name": "пользователь нажимает кнопку \"Оплатить\"",
  "keyword": "Если "
});
formatter.step({
  "line": 30,
  "name": "пользователь ожидает \"5\" секунд",
  "keyword": "И "
});
formatter.step({
  "line": 31,
  "name": "в логе ПН сервера присутствует строка \"PackOfPayments/confirm.do\"",
  "keyword": "То "
});
formatter.step({
  "comments": [
    {
      "line": 32,
      "value": "#   И в логе ПН сервера присутствует строка \"POST параметры: [bundleId \u003d \u00271\u0027 , rrn \u003d \u0027723861912781\u0027 , dateSV \u003d \u002711.07.2017T17:30:21\u0027 , stan \u003d \u00272200900\u0027 , phoneClientNumber \u003d \u00273452345673\u0027 , mainId \u003d \u00274101776\u0027 , operation \u003d \u0027confirm\u0027 , transactionToken \u003d \u0027rpjsbMobile\u0027 , cashSum \u003d \u0027500.00\u0027 ]\""
    }
  ],
  "line": 33,
  "name": "пользователь нажимает кнопку \"Напечатать чек\"",
  "keyword": "Если "
});
formatter.step({
  "line": 34,
  "name": "в логе ПН сервера присутствует строка \"payments/printCheck.do\"",
  "keyword": "То "
});
formatter.step({
  "comments": [
    {
      "line": 35,
      "value": "#     И в логе ПН сервера присутствует строка \"POST параметры: [id \u003d \u00274101776\u0027 ]\""
    },
    {
      "line": 36,
      "value": "#    И в логе ПН сервера присутствует строка \"REQUEST: choosePopular\""
    }
  ],
  "line": 37,
  "name": "пользователь нажимает кнопку \"ОК\"",
  "keyword": "Если "
});
formatter.step({
  "line": 38,
  "name": "пользователь нажимает кнопку \"Завершить обслуживание\"",
  "keyword": "Если "
});
formatter.match({
  "location": "OpenPageSteps.openedCashPayPage()"
});
formatter.result({
  "duration": 1450098182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "МТС",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 837672416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 22
    }
  ],
  "location": "UserActionSteps.userWaitsForTimeout(int)"
});
formatter.result({
  "duration": 4997767309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST параметры: [billing \u003d \u0027mob\u0027 , service \u003d \u0027100\u0027 , provider \u003d \u0027200\u0027 , serviceGuid \u003d \u0027100_guid\u0027 , providerGuid \u003d \u0027200_guid\u0027 , operation \u003d \u0027init\u0027 ]",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 230319923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3693693693",
      "offset": 21
    }
  ],
  "location": "UserActionSteps.userInsertsIntoFieldTouch(String)"
});
formatter.result({
  "duration": 547698909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Далее",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 178295279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 21
    }
  ],
  "location": "UserActionSteps.userInsertsIntoFieldTouch(String)"
});
formatter.result({
  "duration": 85369074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    }
  ],
  "location": "UserActionSteps.userWaitsForTimeout(int)"
});
formatter.result({
  "duration": 2013565244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Далее",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 137204103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "atm_total",
      "offset": 8
    }
  ],
  "location": "CheckDisplaySteps.templateShouldBeAn(String)"
});
formatter.result({
  "duration": 671837782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "servicesPayments/edit.do",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 233391486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Оплатить наличными",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 109842637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3693693693",
      "offset": 21
    }
  ],
  "location": "UserActionSteps.userInsertsIntoFieldTouch(String)"
});
formatter.result({
  "duration": 788940718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Далее",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 93974878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 2363111591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Оплатить",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 122361192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 22
    }
  ],
  "location": "UserActionSteps.userWaitsForTimeout(int)"
});
formatter.result({
  "duration": 4996162366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PackOfPayments/confirm.do",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 245060581,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat siriustest.steps.UserActionSteps.serverLogShouldContainStringPN(UserActionSteps.java:62)\r\n\tat ✽.То в логе ПН сервера присутствует строка \"PackOfPayments/confirm.do\"(Touch/Платежи наличными/ПУ для платежей наличными/1227.Оплата сотовых операторов.feature:31)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Напечатать чек",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "payments/printCheck.do",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ОК",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Завершить обслуживание",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 2530550506,
  "status": "passed"
});
formatter.uri("Touch/Платежи наличными/Подготовка основного платежа/1104.Подготовка основного платежа.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: ru"
    }
  ],
  "line": 6,
  "name": "Платежи наличными",
  "description": "",
  "id": "платежи-наличными",
  "keyword": "Функционал",
  "tags": [
    {
      "line": 3,
      "name": "@TOUCH"
    },
    {
      "line": 4,
      "name": "@ПН"
    }
  ]
});
formatter.before({
  "duration": 4626670051,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Подгготовка основного платежа",
  "description": "",
  "id": "платежи-наличными;подгготовка-основного-платежа",
  "type": "scenario",
  "keyword": "Сценарий",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@testcase_1104_161769"
    },
    {
      "line": 10,
      "name": "@testcase_1198_161770"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "страница \u0027Платежи наличными\u0027 открыта",
  "keyword": "Пусть "
});
formatter.step({
  "line": 13,
  "name": "пользователь нажимает кнопку \"Платежи наличными\"",
  "keyword": "Если "
});
formatter.step({
  "line": 14,
  "name": "пользователь нажимает кнопку \"Нал люб\"",
  "keyword": "Если "
});
formatter.step({
  "line": 15,
  "name": "элемент \"title\" с текстом \"Нал люб\" отображен",
  "keyword": "То "
});
formatter.step({
  "line": 16,
  "name": "пользователь нажимает кнопку \"1.CashPay true puTypeSum\u003d0\"",
  "keyword": "Если "
});
formatter.step({
  "line": 17,
  "name": "элемент \"title\" с текстом \"1.CashPay true puTypeSum\u003d0\" отображен",
  "keyword": "То "
});
formatter.step({
  "line": 18,
  "name": "в логе ПН сервера присутствует строка \"private/payments/servicesPayments/edit.do\"",
  "keyword": "И "
});
formatter.step({
  "line": 19,
  "name": "в логе ПН сервера присутствует строка \"POST параметры: [billing \u003d \u0027Cashpay1.t0\u0027 , service \u003d \u00270001\u0027 , provider \u003d \u0027CashOnlyTruePTS0\u0027 , serviceGuid \u003d \u00279999_1t0\u0027 , operation \u003d \u0027init\u0027 ]\"",
  "keyword": "И "
});
formatter.step({
  "line": 20,
  "name": "пользователь нажимает кнопку \"Далее\"",
  "keyword": "Если "
});
formatter.step({
  "line": 21,
  "name": "шаблон \"atm_total\" отображен",
  "keyword": "То "
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "#   И элемент \"commission\" с текстом \"Комиссия\" отсутствует"
    },
    {
      "line": 23,
      "value": "#  И в логе ПН сервера присутствует строка \"POST параметры: [billing \u003d \u0027Cashpay1.f0\u0027 , service \u003d \u00270001\u0027 , provider \u003d \u0027CashOnlyFalsePTS0\u0027 , serviceGuid \u003d \u00279999_1f0\u0027 , field(RecIdentifier) \u003d \u00279871234567\u0027 , field(amount) \u003d \u0027500.00\u0027 , operation \u003d \u0027next\u0027 , transactionToken \u003d \u0027CashPay\u0027 , operationUID \u003d \u0027AA726b207aacdce35431c8fb83eb43c0\u0027 ]\""
    }
  ],
  "line": 24,
  "name": "пользователь нажимает кнопку \"Оплатить наличными\"",
  "keyword": "Если "
});
formatter.step({
  "line": 25,
  "name": "шаблон \"atm_input_phone\" отображен",
  "keyword": "То "
});
formatter.step({
  "line": 26,
  "name": "пользователь вводит \"9054564545\"",
  "keyword": "Если "
});
formatter.step({
  "line": 27,
  "name": "пользователь нажимает кнопку \"Далее\"",
  "keyword": "Если "
});
formatter.step({
  "line": 28,
  "name": "шаблон \"atm_ndc_input_cash\" отображен",
  "keyword": "То "
});
formatter.step({
  "line": 29,
  "name": "пользователь нажимает кнопку \"100\"",
  "keyword": "Если "
});
formatter.step({
  "line": 30,
  "name": "пользователь нажимает кнопку \"Оплатить\"",
  "keyword": "Если "
});
formatter.step({
  "line": 31,
  "name": "шаблон \"atm_ok_self\" отображен",
  "keyword": "То "
});
formatter.step({
  "line": 32,
  "name": "в логе ПН сервера присутствует строка \"ЕРИБ REQUEST: doConfirmCashPayment\"",
  "keyword": "И "
});
formatter.step({
  "line": 33,
  "name": "в логе ПН сервера присутствует строка \"PackOfPayments/confirm.do\"",
  "keyword": "И "
});
formatter.match({
  "location": "OpenPageSteps.openedCashPayPage()"
});
formatter.result({
  "duration": 1763157721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Платежи наличными",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 876909468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Нал люб",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 841541156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 9
    },
    {
      "val": "Нал люб",
      "offset": 27
    }
  ],
  "location": "CheckDisplaySteps.elementShouldBeDisplayed(String,String)"
});
formatter.result({
  "duration": 666693691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1.CashPay true puTypeSum\u003d0",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 118982208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 9
    },
    {
      "val": "1.CashPay true puTypeSum\u003d0",
      "offset": 27
    }
  ],
  "location": "CheckDisplaySteps.elementShouldBeDisplayed(String,String)"
});
formatter.result({
  "duration": 822309635,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "private/payments/servicesPayments/edit.do",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 1800362618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST параметры: [billing \u003d \u0027Cashpay1.t0\u0027 , service \u003d \u00270001\u0027 , provider \u003d \u0027CashOnlyTruePTS0\u0027 , serviceGuid \u003d \u00279999_1t0\u0027 , operation \u003d \u0027init\u0027 ]",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 36602630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Далее",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 142441844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "atm_total",
      "offset": 8
    }
  ],
  "location": "CheckDisplaySteps.templateShouldBeAn(String)"
});
formatter.result({
  "duration": 36221084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Оплатить наличными",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 710517903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "atm_input_phone",
      "offset": 8
    }
  ],
  "location": "CheckDisplaySteps.templateShouldBeAn(String)"
});
formatter.result({
  "duration": 713069598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9054564545",
      "offset": 21
    }
  ],
  "location": "UserActionSteps.userInsertsIntoFieldTouch(String)"
});
formatter.result({
  "duration": 199857441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Далее",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 97625876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "atm_ndc_input_cash",
      "offset": 8
    }
  ],
  "location": "CheckDisplaySteps.templateShouldBeAn(String)"
});
formatter.result({
  "duration": 1610866491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 110567011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Оплатить",
      "offset": 30
    }
  ],
  "location": "PressButtonSteps.userPressesButton(String)"
});
formatter.result({
  "duration": 108104003,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "atm_ok_self",
      "offset": 8
    }
  ],
  "location": "CheckDisplaySteps.templateShouldBeAn(String)"
});
formatter.result({
  "duration": 2035344487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ЕРИБ REQUEST: doConfirmCashPayment",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 275436362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PackOfPayments/confirm.do",
      "offset": 39
    }
  ],
  "location": "UserActionSteps.serverLogShouldContainStringPN(String)"
});
formatter.result({
  "duration": 43183559,
  "status": "passed"
});
formatter.after({
  "duration": 1182014114,
  "status": "passed"
});
});