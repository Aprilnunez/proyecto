import './Nav.css';


function Nav({titulo, action}) {

    return (
        <nav>
            <div className="container">
                <h1>Waldorf</h1>
                <ul>
                    <button onClick={action}> Productos </button>
                    <button onClick={action}> Como Comprar.. </button>
                    <button onClick={action}> Contacto </button>


                </ul>


            </div>
        </nav>
    )
}

export default Nav;