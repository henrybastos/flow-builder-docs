# XPath examples

```md
//div
> Gets a div

//div[@id="myDiv"]
> Gets a `div` with the ID attribute equal to `"myDiv"`.

//span[contains(@class, "one_of_my_classes")]
> Gets a `span` which contains `"one_of_my_classes"` in its class attribute.

//button[contains(text(), "Buy")]
> Gets a `button` which contains the text `"Buy"` inside of it.

//custom-component[@data-guide-debug-id='2456db61-f109-4065-b6fc-881d1dffd723']

* DOM Example: <custom-component data-guide-debug-id="2456db61-f109-4065-b6fc-881d1dffd723"></custom-component>

> Gets a `custom-component` with the attribute `data-guide-debug-id` that 
> equals to `'2456db61-f109-4065-b6fc-881d1dffd723'`.
```