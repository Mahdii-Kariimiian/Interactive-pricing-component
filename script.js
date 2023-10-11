const $ = document
const scroll = $.getElementById("scroll")
const handler = $.getElementById("handler")
const views = $.getElementById("views")
const price = $.getElementById("price")
const checkbox = $.getElementById("checkbox")
// Drag slider on mousedown
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
// Calculate the price based on the scroll position
function priceCalculator (percentage) {
        const scrollPercent = percentage/scroll.clientWidth
        YearlyMonthly (scrollPercent)
    if (scrollPercent < .103) {
        views.innerText = "10K"
    } else if (.103<= scrollPercent && scrollPercent < .312) {
        views.innerText = "50K"
    } else if (.312<= scrollPercent && scrollPercent < .518) {
        views.innerText = "100K"
    } else if (.518<= scrollPercent && scrollPercent <.722) {
        views.innerText = "500K"
    } else if(.722 <= scrollPercent && scrollPercent <= 83) { 
        views.innerText = "1M"
    }
}
// toggle between yearly and monthly
function YearlyMonthly (scrollPercent) {
    if (checkbox.checked) {
        duraion.innerText = "Monthly"
        if (scrollPercent < .103) {
            price.innerText = "$8"
        } else if (.103<= scrollPercent && scrollPercent < .312) {
            price.innerText = "$12"
        } else if (.312<= scrollPercent && scrollPercent < .518) {
            price.innerText = '$16'
        } else if (.518<= scrollPercent && scrollPercent <.722) {
            price.innerText = '$24'
        } else if(.722 <= scrollPercent && scrollPercent <= 83) { 
            price.innerText = '$32'
        }
    } else {
        duraion.innerText = "Yearly"
        if (scrollPercent < .103) {
            price.innerText = '$72'
        } else if (.103<= scrollPercent && scrollPercent < .312) {
            price.innerText = '$108'
        } else if (.312<= scrollPercent && scrollPercent < .518) {
            price.innerText = '$144'
        } else if (.518<= scrollPercent && scrollPercent <.722) {
            price.innerText = '$216'
        } else if(.722 <= scrollPercent && scrollPercent <= 83) { 
            price.innerText = '$288'
        }
    }
}

