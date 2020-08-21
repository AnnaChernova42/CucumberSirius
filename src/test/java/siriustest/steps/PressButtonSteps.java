package siriustest.steps;

import cucumber.api.java.ru.Когда;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import siriustest.manage.TestManager;

public class PressButtonSteps {

    private static final String translatedSymbols = "translate(normalize-space(), ' \u00A0\u200B\u00AD', '')";
    private static final String translatedSymbolsText = "translate(text(), ' \u00A0\u200B\u00AD', '')";
    private Actions actionsExecutor = TestManager.getInputExecutor();
    private WebDriverWait wait = TestManager.getWait();

    @Когда("^пользователь нажимает кнопку \"([^\"]*)\"$")
    public void userPressesButton(String buttonText) throws Throwable {
        buttonText = buttonText.replaceAll(" ", "");
        WebElement button = wait.until(ExpectedConditions.presenceOfElementLocated
                (By.xpath("//*[" + translatedSymbols + " = '" + buttonText + "' or " + translatedSymbolsText + " = '" + buttonText + "']/text()/..")));
        try {
            button.click();
        } catch (WebDriverException wex) {
            actionsExecutor.moveToElement(button).click().perform();
        }
    }

    @Когда("^пользователь выбирает поставщика \"([^\"]*)\"$")
    public void userSelectPU(String buttonText) throws Throwable {
        buttonText = buttonText.replaceAll(" ", "");
        WebElement button = wait.until(ExpectedConditions.presenceOfElementLocated
                (By.xpath("//*[" + translatedSymbols + " = '" + buttonText + "' or " + translatedSymbolsText + " = '" + buttonText + "']/text()/..")));
        try {
            button.click();
        } catch (WebDriverException wex) {
            actionsExecutor.moveToElement(button).click().perform();
        }
    }

    @Когда("^пользователь нажимает кнопку 'Карандаш'$")
    public void userPressesButtonEdit() throws Throwable {
        WebElement homeButton = wait.until(ExpectedConditions.presenceOfElementLocated
                (By.xpath( "//*[contains(@class, 'total_item-edit-ico')]" )));
        homeButton.click();
    }

    @Когда("^пользователь нажимает кнопку 'Домой'$")
    public void userPressesButtonHOME() throws Throwable {
        WebElement homeButton = wait.until(ExpectedConditions.presenceOfElementLocated
                (By.xpath( "//*[contains(@class, 'b-btn b-btn-menu-dual') or contains(@class, 'tabs_item ndc') or contains(@class, 'tabs_item main_menu ')]" )));
        homeButton.click();
    }

    @Когда("^пользователь нажимает кнопку 'Операции'")
    public void userPressesButtonOperatoin() throws Throwable {
        WebElement OperationButton = wait.until(ExpectedConditions.presenceOfElementLocated
                (By.xpath( "//*[contains(@class, 'b-btn b-btn_combobox-menu')]" )));
        /* total_operations-trigger */
        OperationButton.click();
    }


    @Когда("^пользователь нажимает кнопку 'Помощь'$")
    public void userPressesButtonHELP() throws Throwable {
        WebElement helpButton = wait.until(ExpectedConditions.presenceOfElementLocated
                (By.xpath("//*[@class = 'help_button']")));
        helpButton.click();
    }

    @Когда("^пользователь нажимает кнопку \"([^\"]*)\" на чеке$")
    public void userPressesButtonOnCheck(String buttonText) throws Throwable {
        buttonText = buttonText.replaceAll(" ", "");
        WebElement button = wait.until(ExpectedConditions.presenceOfElementLocated
                (By.xpath("//*[" + translatedSymbols + " = '" + buttonText + "']")));
        button.click();
    }

    @Когда("^пользователь нажимает кнопку 'прокрутка календаря назад'$")
    public void userPressesButtonCalendarSwitcherPrev() throws Throwable {
        WebElement calendarSwitcherButton = wait.until(ExpectedConditions.presenceOfElementLocated
                (By.className("switcher_prev")));
        calendarSwitcherButton.click();
    }

    @Когда("^пользователь нажимает кнопку 'прокрутка календаря вперед'$")
    public void userPressesButtonCalendarSwitcherNext() throws Throwable {
        WebElement calendarSwitcherButton = wait.until(ExpectedConditions.presenceOfElementLocated
                (By.className("switcher_next")));
        calendarSwitcherButton.click();
    }

    @Когда("^пользователь прокручивает страницу вниз \"([^\"]*)\" раз$")
    public void userScrollsDown(int count) throws Throwable {
        WebElement scrollButton = wait.until(ExpectedConditions.presenceOfElementLocated
                (By.xpath("//*[contains(@class, 'scroll-bar_next') and not(contains(@style, 'display::none'))][not(ancestor::div[contains(@style,'display:none')])]")));
        for ( int i = 0; i < count; i++ )
            scrollButton.click();
    }

    @Когда("^пользователь прокручивает страницу вверх \"([^\"]*)\" раз$")
    public void userScrollsUp(int count) throws Throwable {
        WebElement scrollButton = wait.until(ExpectedConditions.presenceOfElementLocated
                (By.xpath("//*[contains(@class, 'scroll-bar_prev') and not(contains(@style, 'display::none'))][not(ancestor::div[contains(@style,'display:none')])]")));
        for ( int i = 0; i < count; i++ )
            scrollButton.click();
    }



    // ARM

    @Когда("^пользователь кликает по строке \"([^\"]*)\"$")
    public void userPressesCell(String buttonText) throws Throwable {
        buttonText = buttonText.replaceAll(" ", "");
        WebElement button = wait.until(ExpectedConditions.presenceOfElementLocated
           (By.xpath( "//*[contains(@class, 'row')]" )));
//<div class="cell number" style="width: 2em; height: 1.3em;">1</div>
        try {
            button.click();
        } catch (WebDriverException wex) {
            actionsExecutor.moveToElement(button).click().perform();
        }
    }

    @Когда("^установить чек-бокс \"([^\"]*)\"$")
    public void userSetCheckBox(String buttonText) throws Throwable {
        buttonText = buttonText.replaceAll(" ", "");
        WebElement button = wait.until(ExpectedConditions.presenceOfElementLocated
                (By.xpath("//*[" + translatedSymbols + " = '" + buttonText + "' or " + translatedSymbolsText + " = '" + buttonText + "']/text()/..")));
        try {
            button.click();
        } catch (WebDriverException wex) {
            actionsExecutor.moveToElement(button).click().perform();
        }
    }

}
