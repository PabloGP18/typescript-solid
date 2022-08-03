# Single responsibility principle

## Theory
A class should only have a single responsibility, that is, only changes to one part of the software's specification should be able to affect the specification of the class.
That might sound very theoretic so look at the old.ts file and open the index.html file, you can see the software has some options to handle fuel, music and the engine.
There are a couple of problems with this:

- The Car class is a classic example of a so-called “God object” — that is, an object that knows about and does everything. These types of objects are really hard to maintain, extend and test.
- We have to prefix every variable with the correct domain eg. "engineStatus". It would be nicer to just name it "Status" but we cannot do this in the car because you might confuse it with the status of the MusicPlayer.
- What if want different types of engines with different ways of consuming fuel? We would have to put a lot of extra if-statements in our car class.

## Your mission
Look at the old.ts file and open the index.html file, you can see the software has some options to handle fuel, music and the engine. However, these are really 3 separate domains making the current Car object really strange.
Refactor the code, so we have at least a separate class for Car, Engine and MusicPlayer. Where do you think we should place the fuel functionality?

### Extra challenge
Make a new type of Engine that also consumes Fuel

## What I found about the Single responsibility principle
“There should never be more than one reason for a class to change.”

Therefore, a class should have one purpose/responsibility and only one reason to change. Following this principle leads to better maintenance of the code and minimizes potential side effects.

In the following bad example, you see how there are multiple responsibilities. First, we model a book and save the book as a file. We ran into two purposes here:
![Singe_responsiblity_principle](../Images/SRP.png)

The second example shows you how to deal with this by following the Single Responsibility Principle. Instead of having only one class, we have two classes, one for each purpose.
![Singe_responsiblity_principle](../Images/SRPgoodversion.png)



