import Contato from "../components/Contato";
import { NavLink } from "react-router-dom";
function Fale (){
    return(
        <>
         
         <div className="container-fluid ">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 cor ">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href=""
                                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <img className="logo" src="img/logo.png" alt="" />
                            </a>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                                id="menu">
                                <li className="nav-item">
                                    <NavLink to='/' className='align-middle px-0 link'><i className="fs-4 bi-house  text-white"></i><span
                                        className="ms-1 d-none d-sm-inline text-white">Home</span></NavLink>
                                </li>
 
                                <li>
                                    <NavLink to='/caro' className='align-middle px-0 link'> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-currency-dollar" viewBox="0 0 16 16">
                                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                                    </svg> <span
                                        className="ms-1 d-none d-sm-inline text-white ">Destinos mais caros</span></NavLink>
                                </li>

                                <li>
                                    <NavLink to='/barato' className='align-middle px-0 link'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-compass-fill" viewBox="0 0 16 16">
                                        <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z" />
                                    </svg><span className="ms-1 d-none d-sm-inline">Destinos mais
                                        baratos</span> </NavLink>

                                </li>
                                <li>
                                    <NavLink to='/maisvisitados' className='align-middle px-0 link'>  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-airplane" viewBox="0 0 16 16">
                                        <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Zm.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1c-.213 0-.458.158-.678.599Z" />
                                    </svg><span className="ms-1 d-none d-sm-inline">Lugares mais
                                        visitados</span> </NavLink>

                                </li>
                                <li>
                                    <a href="#submenu3" data-bs-toggle="collapse"
                                        className="nav-link px-0 align-middle  text-white">
                                        <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Estações</span> </a>
                                    <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                        <li className="w-100">
                                        <NavLink to='/verao' className='align-middle px-0 link'><span className="d-none d-sm-inline">Verão</span> </NavLink>  
                                            
                                        </li>
                                        <li>
                                        <NavLink to='/outono' className='align-middle px-0 link'>  <span className="d-none d-sm-inline">Outono</span> </NavLink>
                                            
                                        </li>
                                        <li> <NavLink to='/primavera' className='align-middle px-0 link'> <span
                                                className="d-none d-sm-inline">Primavera</span>  </NavLink>
                                            
                                        </li>
                                        <li>
                                        <NavLink to='/inverno' className='align-middle px-0 link'> <span
                                                className="d-none d-sm-inline">inverno</span>   </NavLink>
                                           
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                <NavLink to='/sobre' className='align-middle px-0 link'>  <i className="fs-4 bi-table  text-white"></i> <span
                                            className="ms-1 d-none d-sm-inline  text-white">Sobre nós</span>   </NavLink>
                                      
                                </li>
                                <li>
                                <NavLink to='/fale' className='align-middle px-0 link'>   <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Contato</span>   </NavLink>
                                      
                                </li>
                            </ul>
                            <hr />
                            <div className="dropdown pb-4">
                                <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                                    id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="img/burri.jpg" alt="hugenerd" width="30" height="30"
                                        className="rounded-circle" />
                                    <span className="d-none d-sm-inline mx-1">burrito</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                    <li><a className="dropdown-item" href="#">New project...</a></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="/">Sign out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col py-3">
                        <Contato/>
                    </div>

                </div>
            </div>
 

        
        </>
    )
}
export default Fale;