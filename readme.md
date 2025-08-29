#What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById find the element with a specific ID.
getElementsByClassName find elements have a certain ClassName.
querySelector find the first matched element using CSS selector.
querySelectorAll find all matched elements using CSS selector.

#How do you create and insert a new element into the DOM?
To create element:
let newElement = document.createElement("div");

To add element:
let parentContainer=document.getElementById("container");
parentContainer.appendChild(newElement);

#What is Event Bubbling and how does it work?
When an event triggered on an element in JS, bubbles up through its parent elements in the DOM is Event bubbling.

If i clicked on an element (such as button), then the event fires on it first then it automatically moves up to its parent and so on.

#What is Event Delegation in JavaScript? Why is it useful?
When i put one event listener on a parent element to handle events from its child elements, using event bubbling, this technique is called event delegation.

Its saves memory, reduce code clutter, less errors.

#What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() stops an event's default action. 
stopPropagation() stops the event from bubbling up to parent elements.