# Interactive pricing component

Junior challenge at frontendmentors.io 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I used](#what-i-learned)
- [Author](#author)

## Overview

User can use the slider and toggle to see prices for different page view numbers

### Screenshot

![Interactive pricing component](https://github.com/Mahdii-Kariimiian/Interactive-pricing-component/assets/134393975/42a86623-f3b8-460c-82d6-02b6f89d3912)

![Interactive pricing component1](https://github.com/Mahdii-Kariimiian/Interactive-pricing-component/assets/134393975/f79e3168-a42f-4745-877a-ddbb798b3dd8)

### Links

- Vercel: https://interactive-pricing-component-kappa-seven.vercel.app/

## My process
### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript

### What I used

Here is a glimpse of what I used to build this mini project.
````
CSS
./* toggle */

.switch { /* checkbox works in this area */
    position:relative;
    display: inline-block;
    height: 1.4rem;
    width: 2.5rem;
}

.slider { /* background for slider to toggle */
    cursor: pointer;
    position: absolute;
    top:0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: var(--LightGrayishBlue);
    border-radius: 50px;
}

.slider:hover {
    background-color: var(--StrongCyan);
}

.checkbox:checked + .slider:hover {
    background-color: var(--StrongCyan);
}

.slider:before { /* slider for toggle */
    position: absolute;
    display:flex;
    align-items: center;
    content: "";
    top: 12%;
    left: .2rem;
    width: 40%;
    height: 1rem;
    background-color: var(--White);
    border-radius: 50px;
}

.checkbox:checked + .slider { /* checked for yearly */
    background-color: var(--LightGrayishBlue);
}

  .checkbox:checked + .slider:before { 
    transform: translateX(0);
    transition: all .5s ease;
  }

  .checkbox + .slider:before { /* not checked for monthly  */
    transform: translateX(100%);
    transition: all .5s ease;
  }

  .month-free  {
        font-size: .65rem;
        font-weight: 600;
        position:relative;
  }

  /* End of toggle */
JavaScript
let isDragging = false 
handler.addEventListener("mousedown" , function handleMouseMove (event) {
    isDragging = true;
    const initialX = event.clientX - handler.getBoundingClientRect().left;

    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            const newX = event.clientX - scroll.getBoundingClientRect().left - initialX;
            
            // Ensure the handler stays within the scroll's boundaries
            const maxX = scroll.clientWidth - handler.clientWidth;
            const adjustedX = Math.max(0, Math.min(newX, maxX));
            handler.style.left = adjustedX + 'px';
            priceCalculator(adjustedX)
        }

        document.addEventListener('mouseup', () => {
            isDragging = false;
            document.removeEventListener('mousemove', handleMouseMove);
        });
    })
})

````
## Author
Mahdi Karimian
- linkedin (www.linkedin.com/in/mahdi-karimian-116643273)
- Frontend Mentor – @Mahdii-Kariimiian (https://www.frontendmentor.io/profile/Mahdii-Kariimiian)


