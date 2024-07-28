import React, {useState} from 'react';

const MyComponents = () => {
    const images = [
        {
            id: 1,
            url: './images/ori.png',
        },
        {
            id: 2,
            url: './images/TUNICII.jpg',
        },
        {
            id: 3,
            url: './images/tuniciv.jpg',
        },
        {
            id: 4,
            url: './images/tunicOther.jpg',
        }
    ]

    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        // nessa linha adicionamos 1 ao estado atual da imagem, e usamos o módulo para manter o ciclo de imagens dentro da array. Por exemplo, se o tamanho da array é 3, quando chegamos no final dela, 3 % 3 é 0, então voltamos para o inicio da array.
        const nextIndex = (currentImage + 1) % images.length;

        setCurrentImage(nextIndex);

    }


    return(
        
            <img 
                src={images[currentImage].url} 
                alt={`Images ${images[currentImage].id}`}
                onClick={nextImage}
                style={{
                    width: '100%', 
                    height: '100vh', 
                    objectFit: 'cover', 
                    cursor: 'pointer'
                }}
            />           
        
    )
}

export default MyComponents;