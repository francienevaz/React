import './App.css'
import { useState, useEffect } from "react";

import { useFetch } from './hooks/useFetch';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

function App() {
  const url = "http://localhost:3000/products"

  const [ products, setProducts ] = useState([]);

  const [ name, setName ] = useState("");
  const [ price, setPrice ] = useState("");
  
  // resgatando dados

  // 4 - custom hook
  // importando o data do useFetch que retornamos na funcao useFetch
  // e renomeamos para items
  const { data: items, httpConfig, loading, error} = useFetch(url);

  useEffect(() => {
    if(items) {
      setProducts(items)
    }
  }, [items])


  // useEffect(()=>{
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(url);

  //       const data = await res.json()

  //       setProducts(data)

  //     } catch (err) {
  //       console.error("Erro ao buscar produtos", err);
  //     }
  //   };
    
  //   fetchData();
  // }, []);

  // adicionando produtos - POST

  const handleSubmit = async (e) => {
    e.preventDefault();

    // quando setamos o "name" no input, nao precisamos especificar aqui, exemplo: 
    // const product = {
    // name: {name}, 
    // price: {price}
    // }  -- o Javascript ja identifica 

    const product = {
      name,
      price
    }

    // const res = await fetch(url, {
    //   method: "POST", 
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // // Carregamento dinamico
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // Refatorando o POST
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  // deletando produtos
  const handleDelete = (id) => {
    httpConfig(id, "DELETE");

    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  }

  return (
    <>
      <div className='App'>
        <h1>Lista de Produtos</h1>
        {/* {Loading} */}
        {loading && <p>Carregando...</p>}
        {!error && (
          <ul>          
          {/* usamos o () ao inves do {} na função para retorna o objeto */}
          {products && products.map((item) => (
            <li key={item.id}>
              Produto: {item.name} - R${item.price} <button type='button' name='close' className='close' onClick={() => handleDelete(item.id)}><FontAwesomeIcon icon={faRectangleXmark} /></button></li>
          ))}
          </ul>
        )}
        {error && <p>{error}</p>}
        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              <span>Nome:</span>
              <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              <span>Preço:</span>
              <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
            {loading && <input type="submit" disabled value="Aguarde..." />}
            {!loading && <input type="submit" value="Criar" />}            
          </form>
        </div>
      </div>
    </>
  )
}

export default App
