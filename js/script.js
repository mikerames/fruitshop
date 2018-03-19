// global variables
const list = document.getElementById('fruitlist');
const removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
const plusSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve"> <polygon points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 455,242.5 "/></svg>';
const minusSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve"> <rect y="212.5" width="455" height="30"/></svg>'

let total = 0;
let totalCost;
let data = {
    cart: []
};

let fruits = [
    { fruit: 'Bananas', description: 'Best bananas from madeira', location: 'Madeira, PRT', price: 5, img: '<svg version="1.1" id="Bananas" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 359.78 359.78" style="enable-background:new 0 0 359.78 359.78;" xml:space="preserve"><g><path d="M349.2,156.69c-6.8-10-18-9.2-33.2-4.8c18.4-29.6,17.6-57.2-2.8-76.8c-11.6-11.2-28-2-50.4,10.4c-26.8,15.2-63.2,35.6-111.2,34.8c-20-0.4-42-12.8-56.8-21.2l-3.2-2c0,0,0-0.4-0.4-0.4c-2.8-5.2-5.2-9.6-7.6-13.6h25.2c8.4,0,15.6-6.8,15.6-15.6v-26.8c0-8.4-6.8-15.6-15.6-15.6H15.6c-8.4,0-15.6,6.8-15.6,15.6v26.8c0,8.4,6.8,15.6,15.6,15.6h23.6c-7.2,9.6-13.6,22.8-18,35.2c-19.6,55.2-17.6,133.2,47.2,186c23.6,19.2,62.4,30.4,106.4,30.4c54.8,0,102.8-17.2,122.4-43.2c7.2-10,10.8-20.8,10-32.4c29.2-18.8,47.6-41.2,51.6-62.8C361.6,182.29,358.4,168.69,349.2,156.69z M151.2,135.09c51.6,0.8,92-21.6,118.8-36.8c14.4-8,29.2-16.4,33.2-12.8c26,24.8,2,59.6-11.2,74.4c-28.4,9.6-65.6,21.2-109.2,12.4c-40.8-8-62.8-30-77.2-51.2C119.2,128.29,135.2,134.69,151.2,135.09z M15.6,68.69c-0.4,0-0.8-0.4-0.8-1.2v-26.8c0-0.4,0.4-1.2,1.2-1.2h92.8c0.4,0,1.2,0.4,1.2,1.2v26.8c0,0.4-0.4,1.2-1.2,1.2H15.6z M285.6,282.69c-16.8,22.4-61.2,37.6-110.8,37.6c-40.8,0-76-10-97.2-27.2c-71.6-58.4-52-140.8-44.4-164.8c10-31.2,23.6-44.8,27.6-45.2c2.8,0,4.8,12.4,6,22c4.4,29.6,11.6,79.2,68,112.8c44.4,26.4,90.8,26.4,121.2,26.8c16.4,0,33.6,0,35.2,5.2C294.8,262.29,292.8,272.69,285.6,282.69z M344.8,193.49c-3.2,16.4-18,34.4-40.8,50.4c-5.6-13.2-23.6-13.6-48-13.6c-30.8,0-72.8-0.4-114-24.8c-45.2-27.2-54.8-65.2-59.6-93.6c14.4,26.8,39.2,63.6,97.2,75.2c50.8,10,94.4-5.2,123.2-15.2c15.6-5.6,31.6-11.2,34.8-6.8C344.4,173.89,346.8,183.49,344.8,193.49z"/></g><g><path d="M225.6,258.29c-0.8-4-4.8-6.8-8.4-6.4c-92,14.8-134.4-60-136-63.2c-2-3.6-6.4-4.8-10-2.8c-3.6,2-4.8,6.4-2.8,10c0.4,0.8,40.8,72.8,125.6,72.8c8,0,16.8-0.8,25.6-2C223.6,265.89,226.4,262.29,225.6,258.29z"/></g></svg>' },
    { fruit: 'Apples', description: 'Finest apples from Spain', location: 'Sevilha, ESP', price: 7, img: '<svg version="1.1" id="Apples" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 344.438 344.438" style="enable-background:new 0 0 344.438 344.438;" xml:space="preserve"><g><path d="M316.912,182.438c-4.8-89.6-64.8-103.2-99.6-103.2c-20,0-38,4-48,6.8c-0.4-3.2-0.8-7.6-0.8-12v-0.4c0-0.4,0-0.8,0-0.8c-0.4-14.8,1.6-33.6,10.8-46c5.2-7.2,12-11.2,21.2-12.4c4-0.4,6.8-4,6.4-8c-0.4-4-4-6.8-8-6.4c-13.2,1.6-23.6,8-31.2,18c-4,5.6-7.2,12.4-9.2,19.2c-2.4-4.4-5.6-8.4-9.2-12.4c-18.8-18.8-47.2-19.2-48.8-19.2c-2,0-4,0.8-5.2,2c-1.2,1.2-2,3.2-2,5.2c0,1.2,0.8,30,19.2,48.8c13.2,13.2,32,17.6,41.6,18.8c0,2,0.4,3.6,0.4,5.2c-10.4-2.8-27.2-6-45.6-6c-30.8,0-54.8,9.2-72,27.2c-1.6,1.6-2.4,4.4-2,6.8c0.4,2.4,2.4,4.4,4.8,5.2c20.4,7.2,34.4,26.8,34.4,48.4c0,9.2-2.4,18.4-7.6,26.4c-1.2,2-1.2,4.4-0.4,6.8c2.8,6.4,4.4,13.2,4.4,20.4c0,23.2-15.6,43.6-38,49.6c-2,0.4-4,2-4.8,4s-0.8,4.4,0.4,6.4c20,38.4,57.2,63.6,94.4,63.6c15.2,0,29.2-4.4,40-12.4c10.8,8,25.2,12.4,40.4,12.4c26.4,0,53.6-12.8,74.4-34.4C297.312,288.838,320.512,249.238,316.912,182.438z M122.512,51.238c-9.2-9.2-12.8-22-14-30.4c8.4,1.6,21.2,5.2,30.4,14c9.2,9.2,12.8,22,14,30.4C144.512,64.038,131.712,60.438,122.512,51.238z M266.512,300.038c-18,19.2-41.2,30-64,30c-14,0-26.4-4.4-35.2-12.4c-1.2-1.2-3.2-2-4.8-2c-1.6,0-3.6,0.8-4.8,2c-8.8,8-21.2,12.4-35.2,12.4c-29.6,0-59.6-18.8-78-48.4c24-10.8,40-34.4,40-60.8c0-8-1.2-15.6-4-22.8c5.2-9.6,7.6-20,7.6-30.8c0-24-13.2-45.6-33.2-57.2c13.6-10.4,31.6-15.6,53.6-15.6c27.6,0,51.2,8.4,51.6,8.4s0.8,0,1.6,0.4c0.4,0,0.8,0,1.2,0c0.4,0,0.8,0,1.2,0h0.4c0.4,0,0.4,0,0.8,0c0.4,0,24-8.8,51.6-8.8c53.2,0,82,30,85.2,88.8C305.712,244.838,284.912,280.838,266.512,300.038z"/></g></svg>' },
    { fruit: 'Pineapples', description: 'Grown in a perfect climate', location: 'Azores, PRT', price: 7, img: '<svg version="1.1" id="Pineapples" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 423.2 423.2" style="enable-background:new 0 0 423.2 423.2;" xml:space="preserve"><g><path d="M350.6,62c-0.8-3.2-4.8-5.6-8.4-5.6c-2,0-37.6,0.4-71.2,23.6c10.8-15.2,26.4-31.2,46.8-42c3.2-1.6,4.4-5.2,3.6-8.4s-4-5.6-7.6-5.2c-2.4,0.4-49.6,4.8-78,38c-2-22-7.2-52-20.8-61.2c-0.4,0-0.8-0.4-0.8-0.4c-0.4-0.4-1.2-0.4-1.6-0.8c-0.4,0-1.2,0-1.6,0c-0.4,0-0.8,0-1.2,0c-0.8,0-1.2,0.4-2,0.8c-0.4,0-0.4,0-0.8,0.4c-13.6,9.2-18.8,39.2-20.8,61.2c-28.4-33.2-76-38-78-38c-3.6-0.4-6.8,2-7.6,5.2c-0.8,3.2,0.4,6.8,3.6,8.4c20.4,10.8,36,26.8,46.8,42c-33.6-23.2-69.2-23.6-71.2-23.6c-3.6,0-6.4,2.4-7.2,6c-0.8,3.6,1.2,6.8,4.4,8c56,22,81.6,88,87.2,104.4c-7.6,4.8-14.8,10.8-21.2,18c0,0-0.4,0-0.4,0.4c-0.4,0.4-0.8,1.2-1.2,1.6c-14,16-24.8,37.2-30.4,60.8c0,0.4,0,0.4,0,0.8c-2.4,11.2-4,23.2-4,35.6c0,1.6,0,3.6,0.4,5.2c0,0.4,0,0.8,0,1.2c0.8,24.8,7.2,47.6,17.6,66.8c0,0.4,0.4,0.4,0.4,0.8c11.6,21.6,28.4,38.4,48,48c0.4,0.4,1.2,0.8,1.6,0.8c11.6,5.6,23.6,8.4,36.8,8.4c13.2,0,25.2-3.2,36.8-8.4c0.4,0,1.2-0.4,1.6-0.8c20-10,37.2-27.6,48.8-50.4c0.4-0.4,0.4-0.8,0.8-1.2c9.6-18.8,15.2-40.4,16-64c0-0.4,0-0.8,0-1.2c0-1.6,0.4-3.2,0.4-5.2c0-12.4-1.6-24.4-4-35.6c0-0.4,0-0.4,0-0.8c-5.6-24-16-44.8-30.4-61.2c-0.4-0.4-0.8-1.2-1.2-1.6c0,0-0.4,0-0.4-0.4c-6.4-7.2-13.6-13.2-21.2-18C264.6,158,290.2,92,346.2,70C349.4,68.8,351.4,65.2,350.6,62z M187.4,179.2l13.2,14L175.8,220l-19.2-21.2C165.8,189.6,176.2,183.2,187.4,179.2z M210.6,204l25.2,27.2l-24.8,28l-25.6-28.4L210.6,204z M203.8,175.6c2-0.4,4.4-0.4,6.8-0.4s4.4,0.4,6.8,0.4l-6.8,7.2L203.8,175.6z M211.4,281.2l32,35.6l-32.8,38.8L179,318.4L211.4,281.2zM169.8,306.4L143.4,276l32.4-34.8l26,28.8L169.8,306.4z M221,270.4l24.8-28.4l32,34.4L252.6,306L221,270.4z M147,209.6l18.8,21.2l-32,34.4l-8.4-10C129.8,237.6,137.4,222.4,147,209.6z M121.8,273.6l2,2l-2.4,2.8C121.4,276.8,121.8,275.2,121.8,273.6z M121,300l12.4-13.2l26.4,31.2l-27.2,31.2C125.8,334.4,122.2,318,121,300z M174.2,398.4c-13.6-7.6-25.6-20-34.8-35.2l29.6-34l32,37.6L174.2,398.4z M210.6,408.8c-8,0-15.2-1.6-22.8-4l22.8-26.8l22.8,26.8C226.2,407.2,218.6,408.8,210.6,408.8z M247,398.4l-26.8-31.6l33.2-38.8l29.6,33.2C273.8,377.2,261.4,390.4,247,398.4z M289.8,346.8l-27.2-30l25.2-29.6l12.4,13.2C299.4,316.8,295.8,332.8,289.8,346.8z M299.4,273.2c0,1.6,0.4,3.2,0.4,4.8l-2.4-2.4L299.4,273.2z M295.8,255.2l-8.4,10l-31.6-34l18.8-21.2C283.8,222.4,291.4,237.6,295.8,255.2z M264.6,198.8l-18.8,21.6l-25.2-26.8l13.2-14C245,183.2,255.4,190,264.6,198.8zM244.6,168c-3.2-1.6-6.8-2.8-10-3.6c-0.4,0-0.8-0.4-1.2-0.4c-7.2-2-15.2-3.2-22.8-3.2c-8,0-15.6,1.2-22.8,3.2c-0.4,0-0.8,0-0.8,0.4c-3.6,1.2-6.8,2.4-10,3.6c-5.6-16.4-22.8-58-57.2-88c18.4,7.6,39.6,21.6,54.8,47.6c2,3.2,5.6,4.4,9.2,3.2c3.2-1.6,5.2-5.2,4-8.8c-0.8-2-12.4-41.2-44.8-72.4c16,7.2,32.8,19.2,42,39.2c1.6,3.2,4.8,4.8,8,4c3.2-0.8,5.6-3.6,5.6-7.2c0.4-21.6,4-54.4,11.6-67.6c7.2,12.8,11.2,45.6,11.6,67.6c0,3.6,2.4,6.4,5.6,7.2c3.2,0.8,6.8-0.8,8-4c9.2-19.6,26-32,42-39.2C245,81.2,233.4,120,233,122c-1.2,3.6,0.8,7.2,4,8.8c3.2,1.6,7.2,0,9.2-3.2c15.2-26.4,36.8-40.4,55.6-48C267.4,109.2,250.2,151.6,244.6,168z"/></g></svg>' },
    { fruit: 'Oranges', description: 'From the orange country', location: 'Amsterdam, NLD', price: 2, img: '<svg version="1.1" id="Oranges" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 382 382" style="enable-background:new 0 0 382 382;" xml:space="preserve"><g><path d="M270.8,63.71c2.4-18.8,8.8-39.2,23.2-46c3.6-1.6,5.2-6,3.6-9.6c-1.6-3.6-6-5.2-9.6-3.6c-22,9.6-29.6,36.8-32,59.2c-48,2.8-90,34-106,79.2c-9.6-2.4-20-4-30.4-4c-66,0-119.6,53.6-119.6,119.6s53.6,119.6,119.6,119.6c51.6,0,96-33.2,112.4-79.2c10,2.8,20,4,30.4,4c66,0,119.6-53.6,119.6-119.6C382,119.71,332.8,68.11,270.8,63.71z M119.6,363.31c-58,0-104.8-47.2-104.8-104.8c0-57.6,47.2-104.8,104.8-104.8s104.8,47.2,104.8,104.8C224.4,316.11,177.6,363.31,119.6,363.31zM262.8,287.71c-8.8,0-17.6-1.2-26.4-3.2c2-8.4,2.8-17.2,2.8-26c0-50.4-31.2-93.2-75.2-110.8c14-38.8,50-66,91.2-69.2c-0.4,9.6,0.4,16.4,0.4,17.2c0.4,3.6,3.6,6.8,7.2,6.8c0,0,0.4,0,0.8,0c4-0.4,6.8-4,6.8-8c-0.4-4-0.4-9.6-0.4-16c54.8,3.6,98,49.2,98,104.4C367.6,240.91,320.4,287.71,262.8,287.71z"/></g><g><path d="M119.6,165.31c-51.2,0-93.2,41.6-93.2,93.2s41.6,93.2,93.2,93.2c51.6,0,93.2-41.6,93.2-93.2C212.8,206.91,171.2,165.31,119.6,165.31z M59.2,208.11l42.8,42.8H41.6C43.2,234.91,49.6,220.11,59.2,208.11z M41.6,265.71H102l-42.8,42.8C49.2,296.51,42.8,281.71,41.6,265.71z M112.4,336.11c-16-1.6-30.8-8-42.8-17.6l42.8-42.8V336.11z M112.4,240.51l-42.8-42.8c12-10,26.8-16.4,42.8-17.6V240.51z M197.6,250.91h-60.4l42.8-42.8C190,220.11,196.4,234.91,197.6,250.91zM127.2,180.11c16,1.6,30.8,8,42.8,17.6l-42.8,42.8V180.11z M127.2,336.11v-60.4l42.8,42.8C158,328.51,143.2,334.91,127.2,336.11zM180,308.51l-42.8-42.8h60.4C196,281.71,189.6,296.51,180,308.51z"/></g><g><path d="M284.4,90.91c-4,0-7.2,3.2-7.2,7.2c0,8-6.4,14.4-14.4,14.4s-14.4-6.4-14.4-14.4c0-4-3.2-7.2-7.2-7.2s-7.2,3.2-7.2,7.2c0,16,13.2,29.2,29.2,29.2s29.2-13.2,29.2-29.2C292,94.11,288.4,90.91,284.4,90.91z"/></g></svg>' }
];


window.onload = listFruits();

function listFruits() {

    let i, ul, item, buttons, add, img;

    for (i = 0; i < fruits.length; i++) {
        //creates list item for each fruit
        ul = document.getElementById('fruitlist');
        item = document.createElement('div');
        img = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        img.innerHTML = fruits[i].img;
        item.appendChild(img);
        ul.appendChild(img);
    }

    // Creates single eventlistener that can be used by each image
    document.getElementById('fruitlist').addEventListener('click', addToCart);

};

// checks if value already exists in temp array
// in order to avoid adding same fruit more than once
function checkValue(value, arr) {
    let status = 'Not exist';
    for (var i = 0; i < arr.length; i++) {
        let fruit = arr[i];
        if (fruit == value) {
            status = 'Exist';
            break;
        }
    }
    return status;
}


// add clicked fruit to cart
function addToCart(e) {

    // gets fruit name
    const fruit = e.target.childNodes["0"].id;
    let status = checkValue(fruit, data.cart);
    if (status !== 'Not exist') {
        return;
    }
    // adds fruit to temp array
    data.cart.push(fruit);

    // starts creating dom on cart with clicked fruit
    // it will create 5 sections per fruit on cart
    // plus the main one that includes all these 5 others 

    // gets clicked fruit position in fruits array
    const fruitIdx = fruits.map(function (e) { return e.fruit; }).indexOf(fruit);

    // main div fruit section 1
    const divFruit = document.createElement('div');
    divFruit.classList.add('fruit');
    divFruit.setAttribute('id', fruit);
    divFruit.innerText = fruits[fruitIdx].fruit;
    //button remove fruit from cart
    var btnRem = document.createElement('button')
    btnRem.setAttribute('id', 'btn-rem');
    btnRem.innerHTML = removeSVG;
    var btnSpan = document.createElement('span')
    btnSpan.appendChild(btnRem);
    divFruit.appendChild(btnSpan);


    /* const divDescription = document.createElement('div');
    divDescription.classList.add('description');
    divDescription.innerText = fruits[fruitIdx].description;
     */

    // description section 2
    var divDescription = document.createTextNode(fruits[fruitIdx].description);

    // location section 3
    const divLocation = document.createElement('div');
    divLocation.classList.add('location');
    divLocation.innerText = 'Location: ' + fruits[fruitIdx].location;

    /* var divLocation = document.createTextNode(fruits[fruitIdx].location);
     */

    // quantity section 4
    const qty = document.createElement('div');
    qty.classList.add('quantity');
    const btnMinus = document.createElement('button');
    btnMinus.classList.add('btn-minus');
    btnMinus.setAttribute('id', 'btn-minus');
    btnMinus.innerHTML = minusSVG;
    const qtyValue = document.createElement('input');
    qtyValue.setAttribute('id', 'inputqty' + fruits[fruitIdx].fruit);
    qtyValue.setAttribute('type', 'text');
    qtyValue.setAttribute('name', 'name');
    qtyValue.setAttribute('value', '1');
    const btnPlus = document.createElement('button');
    btnPlus.classList.add('btn-plus');
    btnPlus.setAttribute('id', 'btn-plus');
    btnPlus.innerHTML = plusSVG;

    // price section 5
    const divPrice = document.createElement('div');
    divPrice.classList.add('price');
    divPrice.setAttribute('id', 'price' + fruits[fruitIdx].fruit);
    divPrice.innerText = 'Price: ' + fruits[fruitIdx].price;

    // main section per fruit on cart 
    // that appends all previous sections and
    // isolated elements (qty section)  
    const itemDetails = document.createElement('div');
    itemDetails.classList.add('itemDetails');
    itemDetails.setAttribute('id', 'itemDetails' + fruit);
    itemDetails.appendChild(divFruit);
    itemDetails.appendChild(divDescription);
    itemDetails.appendChild(divLocation);
    itemDetails.appendChild(qty);
    itemDetails.appendChild(btnMinus);
    itemDetails.appendChild(qtyValue);
    itemDetails.appendChild(btnPlus);
    itemDetails.appendChild(divPrice);

    // cart is related to right column that only appears
    // when the client clicks on a fruit from the fruit list
    // on the left column
    const cart = document.getElementById('cart');
    cart.appendChild(itemDetails);
    // single break line
    document.createElement('hr');
    // creates total section
    divTotal = document.createElement('div');
    divTotal.classList.add('total');
    divTotal.setAttribute('id', 'total');
    document.getElementById('two').appendChild(divTotal);
    // gets total id and updates it 
    totalCost = document.getElementById('total');
    total += parseInt(fruits[fruitIdx].price);
    totalCost.innerText = 'Total: ' + total;

    // creates unique listener dedicated to the qty section
    document.getElementById('cart').addEventListener('click', btnQty);

    console.log('Total: ' + total)
}

// when client clicks to add or remove qty for a certain fruit
function btnQty(e) {

    // get related itemDetails id
    let itemDetId = e.target.parentElement.parentElement.parentElement.id;

    // if btn clicked is remove, plus or minus
    let btnQty = e.target.id;
    console.log(btnQty);
    let fruit;
    // if parentelement is itemDetails or 
    // fruit name tbu as reference for price
    if (itemDetId.length > 11) {
        fruit = itemDetId.substr(11);
    } else {
        fruit = e.target.parentElement.firstChild.id;
    }

    // gets unique identifier to price section
    let strPrice = document.getElementById('price' + fruit).innerText;

    // gets only numbers from string
    const price = strPrice.replace(/^\D+/g, "");

    // gets unique identifier to the related fruit input qty
    let inputQty = document.getElementById('inputqty' + fruit);

    // parses to integer the string value
    let inputQtyNum = parseInt(inputQty.value);

    // this is used as a reference to update 
    // the total cost when client manages qty
    let costBefore = 0;
    costBefore = price * parseInt(inputQty.value);

    // if client increased or decreased qty to buy
    if (btnQty === 'btn-plus') {
        inputQty.value = parseInt(inputQty.value) + 1;
        inputQty.innerText = inputQty.value;
    } else if (btnQty === 'btn-minus' && inputQtyNum >= 1) {
        inputQty.value = parseInt(inputQty.value) - 1;
        inputQty.innerText = inputQty.value;
    } else if (btnQty === 'btn-rem') {
        let elem = document.getElementById(itemDetId);
        elem.parentNode.removeChild(elem);
        //remove from temp array to
        data.cart.splice(data.cart.indexOf(fruit), 1);
    }

    // always update current total with the previous cost
    total -= costBefore;

    //when plus or minus    
    if (btnQty !== 'btn-rem') {
        // calculates the new cost having the new qty
        cost = price * inputQty.value;
        // updates total with new cost 
        total = total += cost;
    }

    // write the updated total
    if (total != 0) {
        totalCost.innerText = 'Total: ' + total;
    } else {
        document.getElementById('two').removeChild(document.getElementById('total'));
    }
}






 /* <div class="quantity">
      <button class="plus-btn" type="button" name="button">
        <img src="plus.svg" alt="" />
      </button>
      <input type="text" name="name" value="1">
      <button class="minus-btn" type="button" name="button">
        <img src="minus.svg" alt="" />
      </button>
    </div>
 */