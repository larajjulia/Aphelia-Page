const deleteBtn = document.getElementById('deleteBtn');
const popup = document.getElementById('popup');
const cancelBtn = document.getElementById('cancelBtn');
const confirmBtn = document.getElementById('confirmBtn');

deleteBtn.onclick = () => {
    popup.style.display = 'flex';
};

cancelBtn.onclick = () => {
    popup.style.display = 'none';
};

confirmBtn.onclick = () => {
    popup.style.display = 'none';
    // Aqui você pode adicionar a lógica de exclusão real
    alert('Item excluído com sucesso!');
};