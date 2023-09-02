import "../styles/dashboard.css";
import img from "../assets/img.jpg";
import product from "../assets/producto.jpg";
import React, { useState, useEffect, useRef } from "react";
import { url_backend } from "../url";

export default function Dashboard() {
  const [data, setData] = useState<any>();
  const [dataDB, setDataDB] = useState<any[]>();
  const formCreateProduct = useRef<HTMLFormElement>(null);
  const [wordSearch, setWordSearch] = useState<any>(null);
  const formEditProduct = useRef<HTMLFormElement>(null);
  const IdProductEdit = useRef<HTMLInputElement>(null);

  const sentCreateProduct = async () => {
    if (formCreateProduct.current) {
      const formCreate = new FormData(formCreateProduct.current);

      const nombre = formCreate.get("nombre");
      const precio = formCreate.get("precio");
      const cantidad = formCreate.get("cantidad");
      const marca = formCreate.get("marca");

      const createObj = {
        nombre,
        precio,
        cantidad,
        marca,
        id: data.id,
        user: data.username,
      };

      const dataCreateProduct = await fetch(
        `${url_backend}/api/createProduct`,
        {
          method: "POST",
          headers: {
            "Content-type": "Application/json",
          },
          body: JSON.stringify(createObj),
          credentials: "include",
        }
      );
      const json = await dataCreateProduct.json();
      setDataDB([...dataDB, json]);
      formCreateProduct.current.reset();

      console.log(createObj);
    }
  };

  useEffect(() => {
    const loadSession = async () => {
      const dataSession = await fetch(`${url_backend}/api/data`, {
        credentials: "include",
      });

      if (dataSession.status === 401) {
        console.log(" no autorizado");
        const urlSeparate = window.location.href.split("/");
        urlSeparate.pop();

        window.location.href = urlSeparate.join("/");
      } else if (dataSession.status === 200) {
        const dataJson = await dataSession.json();
        const uploadData = async (userCurrent: string) => {
          const dataAll = await fetch(`${url_backend}/api/findWithParams`, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              userId: userCurrent,
            }),
          });

          return await dataAll.json();
        };

        const finddata = await uploadData(dataJson.id);
        setDataDB(finddata);

        setData(dataJson);
      }
    };

    loadSession();

    return () => {};
  }, []);

  const sentLogOut = async () => {
    fetch(`${url_backend}/api/logout`, {
      method: "POST",
    });
    setData(null);
    const urlSeparate = window.location.href.split("/");
    urlSeparate.pop();

    window.location.href = urlSeparate.join("/");
  };

  const sentDeleteAny = async (event: React.MouseEvent) => {
    const elementbtn = event.target as HTMLElement;
    const parentNode = elementbtn.parentNode?.parentNode;
    let dataInner;
    if (parentNode) {
      dataInner = Array.from(parentNode.childNodes)[0] as HTMLElement;

      console.log(dataInner.innerHTML);
    }
    const deleteObj = {
      idProduct: Number(dataInner?.innerHTML),
      userid: data.id,
    };
    console.log(deleteObj);

    fetch(`${url_backend}/api/deleteWithParams`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(deleteObj),
    });
    const uploadData = async (userCurrent: string) => {
      const dataAll = await fetch(`${url_backend}/api/findWithParams`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          userId: userCurrent,
        }),
      });

      return await dataAll.json();
    };
    const newData = await uploadData(data.id);
    // console.log(newData)
    setDataDB([...newData]);
  };

  const sentEditAny = async () => {
    if (formEditProduct.current) {
      const dataForm = new FormData(formEditProduct.current);

      const id = dataForm.get("idProduct");
      const nombre = dataForm.get("nombre");
      const precio = dataForm.get("precio");
      const cantidad = dataForm.get("cantidad");
      const marca = dataForm.get("marca");
      const editObj = {
        idProduct: id,
        nombre,
        precio,
        cantidad,
        marca,
        userId: data.id,
      };

      console.log(editObj);

      fetch(`${url_backend}/api/updateProduct`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(editObj),
      });
    }
    const uploadData = async (userCurrent: string) => {
      const dataAll = await fetch(`${url_backend}/api/findWithParams`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          userId: userCurrent,
        }),
      });

      return await dataAll.json();
    };
    const newData = await uploadData(data.id);
    setDataDB([...newData]);
    console.log(newData);
    window.location.reload()
  };
  const changeEdit = (event: React.MouseEvent) => {
    const elementbtn = event.target as HTMLElement;
    const parentNode = elementbtn.parentNode?.parentNode;
    let dataInner;
    if (parentNode && IdProductEdit.current) {
      dataInner = Array.from(parentNode.childNodes)[0] as HTMLElement;
      IdProductEdit.current.value = dataInner.innerHTML;
    }
  };

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
              <span>Cerrar Sesión</span>
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
                  <form
                    ref={formCreateProduct}
                    className="form"
                    action=""
                    onSubmit={(event) => event.preventDefault()}
                  >
                    <div className="form--div">
                      <div>
                        <label htmlFor="">Nombre:</label>
                        <input type="text" name="nombre" />
                        <br />
                        <label htmlFor="">Precio:</label>
                        <input type="number" name="precio" />
                        <br />
                        <label htmlFor="">Cantidad:</label>
                        <input type="number" name="cantidad" />
                        <br />
                        <label htmlFor="">Marca:</label>
                        <input type="text" name="marca" />
                      </div>
                    </div>
                    <div className="btn">
                      <label htmlFor="btn-modal">Cerrar</label>
                      <button onClick={sentCreateProduct}>Agregar</button>
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
                  <div className="search--box">
                    <i className="fa-solid fa-search"></i>
                    <input
                      onChange={(event) => {
                        setWordSearch(Number(event.target.value));
                      }}
                      type="text"
                      placeholder="Search"
                    />
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
                        {dataDB
                          ? dataDB
                              .filter((value) => {
                                return value.id_product === wordSearch;
                              })
                              .map((value) => {
                                return (
                                  <tr key={crypto.randomUUID()}>
                                    <td>{value.id_product}</td>
                                    <td>{value.nombre}</td>
                                    <td>{value.precio}</td>
                                    <td>{value.cantidad}</td>
                                    <td>{value.marca}</td>
                                    <td>
                                      <label
                                        htmlFor="btn-modal3"
                                        onClick={changeEdit}
                                      >
                                        Edit
                                      </label>
                                      <button
                                        onClick={sentDeleteAny}
                                        style={{ color: "red" }}
                                      >
                                        Delet
                                      </button>
                                    </td>
                                  </tr>
                                );
                              })
                          : undefined}
                      </tbody>
                    </table>
                  </div>
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
                  {dataDB
                    ? dataDB.map((value: any) => (
                        <tr key={crypto.randomUUID()}>
                          <td>{value.id_product}</td>
                          <td>{value.nombre}</td>
                          <td>{value.precio}</td>
                          <td>{value.cantidad}</td>
                          <td>{value.marca}</td>
                          <td>
                            <label htmlFor="btn-modal3" onClick={changeEdit}>
                              Edit
                            </label>
                            <button
                              style={{ color: "red" }}
                              onClick={sentDeleteAny}
                            >
                              Delet
                            </button>
                          </td>
                        </tr>
                      ))
                    : undefined}

                  <tr>
                    <td>
                      <input type="checkbox" id="btn-modal3" />
                      <div className="container-modal3">
                        <div className="content-modal3">
                          <h2>Editar Producto</h2>
                          <div className="form">
                            <form
                              ref={formEditProduct}
                              onSubmit={(event) => event.preventDefault()}
                            >
                              <div className="form--div">
                                <div className="form--div2">
                                  <label htmlFor="">ID:</label>
                                  <input
                                    ref={IdProductEdit}
                                    type="text"
                                    name="idProduct"
                                    readOnly={true}
                                  />
                                  <br />
                                  <label htmlFor="">Nombre:</label>
                                  <input type="text" name="nombre" />
                                  <br />
                                  <label htmlFor="">Precio:</label>
                                  <input type="number" name="precio" />
                                  <br />
                                  <label htmlFor="">Cantidad:</label>
                                  <input type="number" name="cantidad" />
                                  <br />
                                  <label htmlFor="">Marca:</label>
                                  <input type="text" name="marca" />
                                </div>
                                f
                              </div>
                              <div className="btn">
                                <label htmlFor="btn-modal3">Cerrar</label>
                                <button onClick={sentEditAny}>Editar</button>
                              </div>
                            </form>
                          </div>
                        </div>
                        <label
                          htmlFor="btn-modal3"
                          className="cerrar-modal"
                        ></label>
                      </div>
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
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
