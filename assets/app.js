document.querySelectorAll('[data-user]').forEach(b=>b.onclick=()=>{document.querySelector('[name=username]').value=b.dataset.user;document.querySelector('[name=password]').value=b.dataset.pass;});
