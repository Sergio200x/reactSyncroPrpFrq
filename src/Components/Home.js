import {Link} from 'react-router-dom'

function Home (){
    


    return (
            <div className='principal_container'> 
                <h1 className='h1_dash'>Dashboard All Clean</h1> 
                    
                    <h2 className='h3_dash'>Beinvenidos/as.</h2> 
                    <h3>
                        <Link to="/totalUsuarios" >Consulta de usuarios</Link> 
                        
                    </h3>
                    <h3>
                    <Link to='/products'>Consulta de Productos</Link> 
                    </h3>
                    <h3>
                    <Link to='/Categorias'>Consulta de Categorias</Link> 
                    </h3>
                    
                    
             </div>
        )    
}

export default Home