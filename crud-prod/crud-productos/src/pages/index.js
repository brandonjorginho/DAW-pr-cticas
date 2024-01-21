// pages/index.js
import { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import Swal from 'sweetalert2';

export default function Home() {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({ nombre: '', precio: '', descripcion: '' });
  const [imagenProducto, setImagenProducto] = useState(null);
  const [mostrarAgregar, setMostrarAgregar] = useState(false);

  useEffect(() => {
    // Obtener la lista de productos al cargar la página
    obtenerListaProductos();
  }, []);

  const obtenerListaProductos = async () => {
    const response = await fetch('/api/products');
    const data = await response.json();
    setProductos(data);
  };

  const agregarProducto = async () => {
    const formData = new FormData();
    formData.append('nombre', nuevoProducto.nombre);
    formData.append('precio', nuevoProducto.precio);
    formData.append('descripcion', nuevoProducto.descripcion);
    formData.append('imagen', imagenProducto);

    const response = await fetch('/api/products', {
      method: 'POST',
      body: formData,
    });

    if (response.status === 201) {
      // Producto agregado exitosamente, mostrar mensaje con SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'El producto ha sido agregado.',
      });

      // Limpiar el formulario
      setNuevoProducto({ nombre: '', precio: '', descripcion: '' });
      setImagenProducto(null);

      // Actualizar la lista de productos
      obtenerListaProductos();
    } else {
      // Manejar errores si es necesario
      console.error('Error al agregar el producto');
    }
  };

  const eliminarProducto = async (id) => {
    const response = await fetch(`/api/products?id=${id}`, {
      method: 'DELETE',
    });

    if (response.status === 200) {
      // Producto eliminado exitosamente, actualizar la lista de productos
      obtenerListaProductos();
      Swal.fire({
        icon: 'success',
        title: 'Eliminado',
        text: 'El producto ha sido eliminado.',
      });
    } else {
      // Manejar errores si es necesario
      console.error('Error al eliminar el producto');
    }
  };

  const actualizarProducto = async (id) => {
    // Puedes implementar la lógica para actualizar el producto según tus necesidades.
    Swal.fire({
      icon: 'info',
      title: 'Actualizar',
      text: '0:',
    });
  };

  const onDrop = (acceptedFiles) => {
    // Tomar solo la primera imagen en caso de que el usuario cargue múltiples archivos
    const file = acceptedFiles[0];
    setImagenProducto(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*', maxFiles: 1 });

  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-center">CRUD - Productos</h1>

      <div className="flex justify-center mb-4 space-x-4">
        <button
          className={`px-4 py-2 rounded w-[120px] ${mostrarAgregar ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
          onClick={() => setMostrarAgregar(true)}
        >
          Agregar
        </button>
        <button
          className={`px-4 py-2 rounded w-[120px] ${!mostrarAgregar ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
          onClick={() => {
            setMostrarAgregar(false);
            // Obtener la lista de productos al cambiar a la vista "Ver Productos"
            obtenerListaProductos();
          }}
        >
          Ver
        </button>
      </div>

      {mostrarAgregar && (
        <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Agregar nuevo producto</h2>
          <div>
            <div className="mb-4">
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-600">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                value={nuevoProducto.nombre}
                onChange={(e) => setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="precio" className="block text-sm font-medium text-gray-600">
                Precio
              </label>
              <input
                type="text"
                id="precio"
                value={nuevoProducto.precio}
                onChange={(e) => setNuevoProducto({ ...nuevoProducto, precio: e.target.value })}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="descripcion" className="block text-sm font-medium text-gray-600">
                Descripción
              </label>
              <input
                type="text"
                id="descripcion"
                value={nuevoProducto.descripcion}
                onChange={(e) => setNuevoProducto({ ...nuevoProducto, descripcion: e.target.value })}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4 text-center">
              <label className="block text-sm font-medium text-gray-600">Imagen</label>
              <div {...getRootProps()} className="mt-1 p-2 border bg-gray-400 rounded-md cursor-pointer">
                <input {...getInputProps()} />
                <p className="text-gray-800">Seleccione el archivo</p>
              </div>
              {imagenProducto && (
                <img src={URL.createObjectURL(imagenProducto)} alt="Producto" className="max-w-full mt-2 mx-auto" style={{ maxHeight: '100px' }} />
              )}
            </div>

            <button
              onClick={agregarProducto}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Agregar Producto
            </button>
          </div>
        </div>
      )}

      {!mostrarAgregar && (
        <div className="flex flex-wrap justify-center">
          {productos.map((producto) => (
            <div key={producto.id} className="w-80 h-96 rounded border p-4 m-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg border border-black">
              <div className="flex-shrink-0 mb-4">
                {producto.imagen && (
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-20 h-20 object-cover rounded"
                  />
                )}
              </div>
              <div className="flex-grow text-center">
                <h3 className="text-lg font-bold mb-2">{producto.nombre}</h3>
                <p className="text-gray-600 mb-2">Precio: ${producto.precio}</p>
                <p className="text-gray-600 mb-4">Descripción: {producto.descripcion}</p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => eliminarProducto(producto.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Eliminar
                  </button>
                  <button
                    onClick={() => actualizarProducto(producto.id)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Actualizar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
