const articleId = document.getElementById('articleId');

const deleteButton = document.getElementById('deleteArticleButton');

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('deleteArticleButton').addEventListener("click", () => {
        alert('toto');
        console.log(articleId);
        fetch(`/api/articles/${article._id}/delete`, {method: 'POST'})
            .then(response => response.json())
            .catch(error => console.error(error));
    })
})