// ************ helper functions *******************// 
module.exports = {
    addClasses: function(el, args) {
        if (args) {
            for (let item of args) {
                el.classList.add(item);
            }
        }
    },
    
    
    
    // ************ Library **************** //
    
    
    //*********** Creating and Appending Elements to the DOM  *******/
    
    
    create: function(...items) {
        if(items.length === 1) {
            let el = document.createElement(items[0]);
            return el;
        }
        else if (items.length === 2) {
            let el = document.createElement(items[0]);
            el.textContent = items[1];
            return el;
        }
        else if(items.length >= 3) {
            let el = document.createElement(items[0]);
            if(items[1] !== '') {
                el.textContent = items[1];
            }
            let classes = items.slice(2);
            this.addClasses(el, classes);
            return el;     
        }
    
    },
    
    
    append: function(...items) {
        if(items.length === 2 && typeof items[0] !== 'string') {
            let el = items[0];
            let elAppendingTo = items[1];
            document.querySelector(elAppendingTo).append(el);
        }
        else if (items.length === 2) {
            let el = document.createElement(items[0]);
            let elAppendingTo = items[1];
            document.querySelector(elAppendingTo).append(el);
        }
        else if (items.length >= 3) {
            if(items[0] === 'div' || items[0] === 'section' || items[0] === 'article' 
            || items[0] === 'header' || items[0] === 'main' || items[0] === 'footer' 
            || items[0] === 'nav' || items[0] === 'aside') 
            {
                let el = document.createElement(items[0]);
                let elAppendingTo = items[1];
                let classes = items.slice(2);
                this.addClasses(el, classes);
                document.querySelector(elAppendingTo).append(el);
                return el;
            }
            else {
                let el = document.createElement(items[0]);
                let content = items[1];
                let elAppendingTo = items[2];
                let classes = items.slice(3);
                el.textContent = content;
                this.addClasses(el, classes);
                document.querySelector(elAppendingTo).append(el);
                return el;
            }
        }
    },
    
    
    // elementType, content, destination, elementAppendingTo, ...classes
    insert: function(...items) {
        if (typeof items[0] !== 'string' && items.length === 3) {
            elementType = items[0];
            destination = items[1];
            elAppendingTo = items[2];
            switch(destination) {
                case 'before':
                    document.querySelector(elAppendingTo).before(elementType);
                    break;
                case 'after':
                    document.querySelector(elAppendingTo).after(elementType);
                    break;
                default:
                    console.log('Error: use "before" or "after" as destination')
            }
        }
        else if (typeof items[0] !== 'string' && items.length > 3) {
            elementType = items[0];
            destination = items[1];
            elAppendingTo = items[2];
            classes = items.slice(3);
            this.addClasses(elementType, classes);
            switch(destination) {
                case 'before':
                    document.querySelector(elAppendingTo).before(elementType);
                    break;
                case 'after':
                    document.querySelector(elAppendingTo).after(elementType);
                    break;
                default:
                    console.log('Error: use "before" or "after" as destination')
            }
        } 
        else if (items.length === 3) {
            let el = document.createElement(items[0]);
            let destination = items[1];
            let elAppendingTo = items[2];
            switch(destination) {
                case 'before':
                    document.querySelector(elAppendingTo).before(el);
                    break;
                case 'after':
                    document.querySelector(elAppendingTo).after(el);
                    break;
                default:
                    console.log('Error: use "before" or "after" as destination')
            }
        }
        else {
            let el = document.createElement(items[0]);
            el.textContent = items[1];
            let classes = items.slice(4);
            this.addClasses(el, classes);
            switch(items[2]) {
                case 'before':
                    document.querySelector(items[3]).before(el);
                    return el;
                case 'after':
                    document.querySelector(items[3]).after(el);
                    return el;
                default:
                    console.log('Error: use "before" or "after" as destination')
            }
        }
    },
    
    center: function(...elements) {
        for(let item of elements) {
            item.style.textAlign = "center";
        }
    },   
    
    
    color: function(...elements) {
        for (let item of elements) {
            let color = elements[elements.length - 1];
            if(typeof item === 'string') break;
            item.style.color = color;
        }
    },
    
    background: function(...elements) {
        for (let item of elements) {
            let background = elements[elements.length - 1];
            if(typeof item === 'string') break;
            item.style.background = background;
        }
    },
    
    boxIt: function(...elements) {
        if(typeof elements[elements.length - 1] === 'string') {
            let color = elements[elements.length - 1];
            for (let item of elements) {
                if(typeof item === 'string') break;
                item.style.border = `2px solid ${color}`;
                item.style.boxShadow = `2px 2px 2px gray`;
                console.log(item)
            }
        } else {
            let color = 'black';
            for (let item of elements) {
                if(typeof item === 'string') break;
                item.style.border = `2px solid ${color}`;
                item.style.boxShadow = `2px 2px 2px gray`;
                console.log(item)
            }
        }
    },
    
    img: function(...elements) {
        let source = elements[0];
        let alt = elements[1];
        let width = elements[2];
        let height = elements[3];
        let theImage = document.createElement('img');
        theImage.setAttribute('src', source);
        theImage.setAttribute('alt', alt);
        theImage.setAttribute('width', width);
        theImage.setAttribute('height', height);
    
        return theImage;
    },
    
    smoothEdges: function(...elements) {
        for (let item of elements) {
            item.style.borderRadius = "5px";
        }
    },
    
    circle: function(...elements) {
        for (let item of elements) {
            item.style.borderRadius = '50%';
        }
    },
    
    waveEdges: function(...elements) {
        for (let item of elements) {
            item.style.borderRadius = "20% 0 20% 0";
        }
    },
    
    underline: function(...elements) {
        let color;
        if(typeof elements[elements.length - 1] === 'string') {
            color = elements[elements.length - 1];
        }
        for (let item of elements) {
            if(typeof item === 'string') break;
            item.style.borderBottom = `1px solid ${color}`;
        }
    },
    
    appendAll: function(...items) {
        let elToAppendTo = items.splice(-1);
        for(let item of items) {
            append(item, elToAppendTo);
        }
        
    },
    
    gridify: function(container, numOfColumns = 1) {
        container.style.display = 'grid';
        let auto = 'auto ';
        let totalColumns = auto.repeat(numOfColumns);
        totalColumns.trimRight();
        container.style.gridTemplateColumns = totalColumns;
        container.style.gridGap = "10px";
        container.style.justifyItems = 'center';
    }
}


