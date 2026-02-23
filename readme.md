### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:

getElementById() == select just one element and it is unique. cannot reuse one id name to another element
getElementsByClassName() == Selects multiple elements by class name (returns an HTMLCollection).

querySelector() == Selects the first matching element using a CSS selector.

querySelectorAll() == Selects all matching elements using a CSS selector.

### 2. How do you create and insert a new element into the DOM?

Answer:

to create an element we should use == document.createElement("elementname");
to add content we should write == elementname.innerHTML = "the content";
To insert into DOM == document.body.appendChild(elementname);

example:

const div = document.createElement("div");
div.innerText = "Hello World";
document.body.appendChild(div);

### 3. What is Event Bubbling? And how does it work?

Answer:

Event Bubbling means:
When an event happens on a child element, it first runs on the child, then moves up to its parent, then grandparent

Example:
If I click a button inside a div:

Button event runs first

Then div event runs

Then body event runs

This upward movement is called bubbling.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Answer:

Event Delegation means:

Instead of adding event listeners to many child elements, you add one listener to the parent and handle events using bubbling.

It is useful because:

Improves performance

Works for dynamically added elements

Reduces duplicate event listeners

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:

preventDefault() == Stops the browser’s default behavior (like stopping form submission or link navigation).

stopPropagation() == Stops the event from bubbling up to parent elements.

Example:

event.preventDefault(); // Stops default action
event.stopPropagation(); // Stops bubbling
