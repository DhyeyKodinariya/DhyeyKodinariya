var addItemId=0;
function addToCart(item){
    addItemId +=1;
    var selitem = document.createElement('div');
    selitem.classList.add('cartImg');
    selitem.setAttribute('id',addItemId);
    var img = document.createElement('img');
    img.setAttribute('src',item.children[0].currentSrc);
    var title = document.createElement('div');
    title.innerText = item.children[1].innerText;
    var label = document.createElement('div');
    label.innerText = item.children[2].children[0].innerText;
    var select= document.createElement('span');
    select.innerText = item.children[2].children[1].value;
    label.append(select);
    var delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.setAttribute('onclick','del('+addItemId+')');
    var cartItems = document.getElementById('title');
    selitem.append(img);
    selitem.append(title);
    selitem.append(label);
    selitem.append(delBtn);
    cartItems.append(selitem);

}

function del(item){
    document.getElementById(item).remove();
}