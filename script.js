// Funções anônimas 

function mensagem() {
    console. log('Essa mensagem aparece após 3 segundos!');
}

setTimeout(mensagem, 3000);

setTimeout(() => {
    console. log('Essa mensagem aparece após 3 segundos!')
})

const shoes = [
    { nome: 'Nike', preco: 200, imagem: 'https://e7.pngegg.com/pngimages/94/744/png-clipart-internet-meme-4chan-shoe-meme-boots-sneakers.png' },
    { nome: 'Adidas', preco: 120, imagem: 'https://e7.pngegg.com/pngimages/94/744/png-clipart-internet-meme-4chan-shoe-meme-boots-sneakers.png' },
    { nome: 'Puma', preco: 100, imagem: 'https://e7.pngegg.com/pngimages/94/744/png-clipart-internet-meme-4chan-shoe-meme-boots-sneakers.png'  },
    { nome: 'Reebok', preco: 80, imagem: 'https://e7.pngegg.com/pngimages/94/744/png-clipart-internet-meme-4chan-shoe-meme-boots-sneakers.png' },
    { nome: 'Vans', preco: 60, imagem: 'https://e7.pngegg.com/pngimages/94/744/png-clipart-internet-meme-4chan-shoe-meme-boots-sneakers.png'  },
    { nome: 'Converse', preco: 40, imagem: 'https://e7.pngegg.com/pngimages/94/744/png-clipart-internet-meme-4chan-shoe-meme-boots-sneakers.png'  },
    { nome: 'Crocs', preco: 1, imagem: 'https://e7.pngegg.com/pngimages/94/744/png-clipart-internet-meme-4chan-shoe-meme-boots-sneakers.png'  }
]

const shoesList = document.getElementById('shoes-list')

shoes.forEach((shoe) => {
    const li = document.createElement('li')
    li.textContent = `${shoe.nome} - $${shoe.preco}`
    const img = document.createElement('img')
    img.src = shoe.imagem
    img.width = 100
    li.appendChild(img)
    shoesList.appendChild(li)
})