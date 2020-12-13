function Hero() {
    
    const saludar = () => {
        alert('Hola!');
    }


    return (
        <>

            <button onClick={saludar}>Saludar</button>
        </>
    )
}

export default Hero;
