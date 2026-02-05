// TAB SLIDER 

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabContentItems = document.querySelectorAll('.tab_content_items button') // кнопки внутри родителя
const tabContentItemsParent = document.querySelector('.tab_content_items') // родитель кнопок

const hide = () => {
    tabContentBlocks.forEach(block => block.style.display = 'none')
    tabContentItems.forEach(button => button.classList.remove('tab_content_item_active'))
}

const show = (i = 0) => {
    tabContentBlocks[i].style.display = 'block'
    tabContentItems[i].classList.add('tab_content_item_active')
}

hide()
show()

tabContentItemsParent.addEventListener('click', (event) => {
    if (event.target.tagName.toLowerCase() === 'button') {
        tabContentItems.forEach((button, index) => {
            if (button === event.target) {
                hide()
                show(index)
            }
        })
    }
})

let currentIndex = 0; 


setInterval(() => {
    let nextIndex = currentIndex + 1;        
    if (nextIndex >= tabContentBlocks.length) { 
        nextIndex = 0;                        
    }
    hide();
    show(nextIndex);
    currentIndex = nextIndex; 
}, 3000);