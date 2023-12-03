# Loops & Arrays Code Review 3

# https://squidicarus.github.io/mr_robogerbot/

## Mr. Roboger's Numberhood

Input a number and get a Roboger response!

## Main objectives for this project

- Separate business logic and user interface logic.

- Tests are included for each business logic behavior and code is committed after each test passes.

- Application includes a loop and works as expected.

- Application can be used repeatedly to see new results.

- Project is in a polished, portfolio-quality state.

- The prompt's required functionality and baseline project requirements are in place by the deadline

## Setup/Installation Requirements

**How to clone repository**

1. Go to 
**https://github.com/SquidIcarus/mr_robogerbot**
and click on the "Code" button and copy the URL.

2. Open Terminal/GitBash

3. Within the desired directory, use the **git clone** command followed by the copied repository URL.

4. Press enter and the repository should be cloned to your directory.



## Technologies used:

**software Tools**
- GitBash
- VsCode

**Language**
- HTML
- CSS
- JavaScript

## Known Bugs

# Test-Driven Development (TDD)
``` Describe: CreateNumArray(num)```

```Test: "When user inputs the number 5, it will create an array of elements from 0-5.";```
```Code: CreateNumArray(5);``` 
```Expected Output: [0, 1, 2, 3, 4, 5];```

```Test: "When user inputs the number 13, it will create an array of elements from 0-13.";```
```Code: CreateNumArray(13);``` 
```Expected Output: [0, 1, 2, 3, 4, 5, 6 ,7, 8, 9, 10. 11, 12, 13];```

```Test: "When user inputs the number 0, it will create an array of just 0.";```
```Code: CreateNumArray(0);```
```Expected Output: [0];```

```Describe: glitchArray(numArray);```

```Test: forEach loop will change all elements with a 1 to "BeeP!". When user inputs the number 2;```
```Code: glitchArray([0, 1, 2]);```
```Expected Output: [0, "BeeP!", 2];```

```Test: forEach loop will change all elements with a 2 to "BooP!". When user inputs the number 12;```
```Code: glitchArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);```
```Expected Output: [0, "BeeP", "BooP!", 3, 4, 5, 6, 7, 8, 9, "BeeP!", "BeeP!", "BooP!", "BeeP!", "BeeP!", "BeeP!"];```

```Test: forEach loop will change all elements with a 3 to "Won't you be my neighbor!", when user inputs the number 3;```
```Code: glitchArray([0, 1, 2, 3]);```
```Expected Output: [0, "BeeP!", "BooP!", "Won't you be my neighbor!"];```




## License
[Copyright © 2023 Landon Leadford](LICENSE.txt)
