function Hero() {
    
    const saludar = () => {
        alert('Hola!');
    }


    return (
        <>
            <h1>Bienvenidos a mi tienda</h1>
            <p>Giftbox</p>
            <button onClick={saludar}>Saludar</button>
        </>
    )
}

export default Hero;
