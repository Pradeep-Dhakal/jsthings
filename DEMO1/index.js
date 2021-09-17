const myName = document.querySelector('#name');
const btn = document.querySelector('#btn');

const showname = () => {

    myName.innerHTML = "my name is pradeep";

}

btn.addEventListner('click', showname);

