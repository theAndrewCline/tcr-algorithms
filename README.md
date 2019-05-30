# tcr-algorithms

This repository is a quick set up for Javascript and VSCode for you to be able to try the Test && Commit || Revert workflow.

Basicly TCR works like this. 

1. Write a small test
2. Write a small piece of code to make it pass
3. Run the TCR script

If your tests pass they will be commited. :white_check_mark:

If they fail, all the code you wrote will be deleted and you get to try again. :boom:

For more information, Kent Beck has a [YouTube Video](https://www.youtube.com/watch?v=ZrHBVTCbcE0) that explains the workflow.

## Getting Setup :rocket:

You could simply download this repository, `npm install`, and start crushing it. 

The command to run TCR is `npm run tcr`. Super easy :thumbsup:

## Setting Up Run On Save

Now that you are setup, you might want to automate your workflow like Kent Beck. If you look in the .vscode directory, you may see that I have included some settings for VSCode extention called Run On Save. 

To get that working you just need to install it.

## Things to note

### 1. This project uses Jest 
so you can look at their documentation for questions on assertions and writing tests.

### 2. You can use multiple files
You may have noticed that I simply created a test file and wrote my production code in the test file. It's possible to seperate your files out. But you may need to make some adjustments to the Run On Save settings.


