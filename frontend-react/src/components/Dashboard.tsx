import "../styles/dashboard.css";
import img from '../assets/img.jpg'
import product from '../assets/producto.jpg'
import { useState, useEffect } from 'react'
import { url_backend } from '../url'

export default function Dashboard() {
  const [data, setData]  = useState<any>()


  useEffect(() => {
    const loadSession = async () => {
      const dataSession = await fetch(`${url_backend}/api/data`, {
        credentials: "include"
      });

      console.log(dataSession.status)
      if (dataSession.status === 401) {
        console.log(" no autorizado")
      } 
      else if (dataSession.status === 200) {
        const dataJson = await dataSession.json()
        setData(dataJson)
      }
    }

    loadSession()
  
    return () => {
      
    }
  }, [])
  
  console.log(data);
  
  const sentLogOut = async () => {
    fetch(`${url_backend}/api/logout`, {
      method: "POST"
    })
    setData(null)
  }

  return (
   <body>
    
      <div className="sidebar">
        <div className="logo"></div>
        <ul className="menu">
          <li className="active">
            <a href="#">
              <i className="fas fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-people-group"></i>
              <span>Personal</span>
            </a>
          </li>

          <li className="logout">
            <a href="#" onClick={sentLogOut}>
              <i className="fas fa-sign-out-alt"></i>
              <span >Cerrar Sesión</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="main--content">
        <div className="header--wrapper">
          <div className="header--title">
            <span>Primary</span>
            <h2>Dashboard</h2>
          </div>
          <div className="user--info">
            {data ? data.username : ""}
            <img src={img} alt="" />
          </div>
        </div>

        <div className="card--container">
          <h3 className="main--title">DATOS DEL PRODUCTO</h3>
          <div className="card--wrapper">
            <div className="card--image">
              <img src={product} alt="" />
            </div>
            <div className="card--button">
              <label className="card--button__label" htmlFor="btn-modal">
                Agregar
              </label>

              <input type="checkbox" id="btn-modal" />
              <div className="container-modal">
                <div className="content-modal">
                  <h2>Agregar Producto</h2>
                  {/* <hr style="height: 1px; background-color: #fff;" /> */}
                  {/* <hr
                    style={{
                      height: "1px",
                      backgroundColor: "#fff",
                    }}
                  /> */}
                  <form className="form" action="" onSubmit={(event) => event.preventDefault() }>
                    <div className="form--div">
                      <div>
                        <label htmlFor="">Nombre:</label>
                        <input type="text" />
                        <br />
                        <label htmlFor="">Precio:</label>
                        <input type="text" />
                        <br />
                        <label htmlFor="">Cantidad:</label>
                        <input type="text" />
                        <br />
                        <label htmlFor="">Marca:</label>
                        <input type="text" />
                      </div>
                    </div>
                    {/* <hr style="height: 1px; background-color: #fff;" /> */}
                    {/* <hr
                      style={{
                        height: "1px",
                        backgroundColor: "#fff",
                      }}
                    /> */}
                    <div className="btn">
                      <label htmlFor="btn-modal">Cerrar</label>
                      <button>Agregar</button>
                    </div>
                  </form>
                </div>
                <label htmlFor="btn-modal" className="cerrar-modal"></label>
              </div>

              <label className="card--button__label" htmlFor="btn-modal2">
                Consultar
              </label>

              <input type="checkbox" id="btn-modal2" />
              <div className="container-modal2">
                <div className="content-modal2">
                  <h2>Consultar Producto</h2>
                  {/* <hr style="height: 1px; background-color: #fff;" /> */}
                            {/* <hr style={{
                                height: "1px",
                                backgroundColor: "#fff"
                            }}/> */}
                  <div className="search--box">
                    <i className="fa-solid fa-search"></i>
                    <input type="text" placeholder="Search" />
                  </div>
                  <div className="table-container2">
                    <table>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th>Marca</th>
                          <th>Accion</th>
                        </tr>
                      </thead>
                        <tbody>
                          <tr>
                            <td>00001</td>
                            <td>Arroz</td>
                            <td>$50</td>
                            <td>100</td>
                            <td>Costeño</td>
                            <td>
                              <label htmlFor="btn-modal3">Edit</label>
                              {/* <button style="color: red;">Delet</button> */}
                              <button style={{color: "red"}}>Delet</button>
                            </td>
                          </tr>

                          <tr>
                            <td>00002</td>
                            <td>Azucar</td>
                            <td>$20</td>
                            <td>100</td>
                            <td>Rubia</td>
                            <td>
                              <label htmlFor="btn-modal3">Edit</label>
                              <button style={{color: "red"}}>Delet</button>
                            </td>
                          </tr>
                        </tbody>
                    </table>
                  </div>
                  {/* <hr style="height: 1px; background-color: #fff;" /> */}
                            {/* <hr style={{
                                height: "1px",
                                backgroundColor: "#fff"
                            }}/> */}
                  <div className="btn">
                    <label htmlFor="btn-modal2">Cerrar</label>
                  </div>
                </div>
                <label htmlFor="btn-modal2" className="cerrar-modal"></label>
              </div>
            </div>
          </div>
          <div className="tabular--wrapper">
            <h3 className="main-title">Tabla del Producto</h3>
            <div className="table-container">
              <form action="">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Marca</th>
                      <th>Accion</th>
                    </tr>
                  </thead>
                    <tbody>
                      <tr>
                        <td>00001</td>
                        <td>Arroz</td>
                        <td>$50</td>
                        <td>100</td>
                        <td>Costeño</td>
                        <td>
                          <label htmlFor="btn-modal3">Edit</label>
                          {/* <button style="color: red;">Delet</button> */}
                          <button style={{color: "red"}}>Delet</button>
                        </td>
                      </tr>

                      <tr>
                        <td>00002</td>
                        <td>Azucar</td>
                        <td>$20</td>
                        <td>100</td>
                        <td>Rubia</td>
                        <td>
                          <label htmlFor="btn-modal3">Edit</label>
                          {/* <button style="color: red;">Delet</button> */}
                          <button style={{color: "red"}}>Delet</button>
                        </td>
                      </tr>

                      <tr>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>
                          <label htmlFor="btn-modal3">Edit</label>
                          <input type="checkbox" id="btn-modal3" />
                          <div className="container-modal3">
                            <div className="content-modal3">
                              <h2>Editar Producto</h2>
                              <div className="form">
                                {/* <hr style="height: 1px; background-color: #fff;" /> */}
                            {/* <hr style={{
                                height: "1px",
                                backgroundColor: "#fff"
                            }}/> */}
                                <div className="form--div">
                                  <div className="form--div2">
                                    <label htmlFor="">ID:</label>
                                    <input type="text" readOnly={true} />
                                    <br />
                                    <label htmlFor="">Nombre:</label>
                                    <input type="text" />
                                    <br />
                                    <label htmlFor="">Precio:</label>
                                    <input type="text" />
                                    <br />
                                    <label htmlFor="">Cantidad:</label>
                                    <input type="text" />
                                    <br />
                                    <label htmlFor="">Marca:</label>
                                    <input type="text" />
                                  </div>
                                </div>
                                {/* <hr style="height: 1px; background-color: #fff;" /> */}
                            {/* <hr style={{
                                height: "1px",
                                backgroundColor: "#fff"
                            }}/> */}
                                <div className="btn">
                                  <label htmlFor="btn-modal3">Cerrar</label>
                                  <button>Editar</button>
                                </div>
                              </div>
                            </div>
                            <label
                              htmlFor="btn-modal3"
                              className="cerrar-modal"
                            ></label>
                          </div>
                          {/* <button style="color: red;">Delet</button> */}
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={7}>
                          *Solo se muestran los 5 ultimos registros*
                        </td>
                      </tr>
                    </tfoot>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
      </body>
  );
}
