'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCartAfterPayment } from '@/redux/slices/cartSlice';
import { useRouter } from 'next/router';

const SuccessPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    // Limpiar el carrito sin confirmación
    dispatch(clearCartAfterPayment());

    // Redirigir a la página principal después de 3 segundos
    const timeout = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [dispatch, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          ¡Pago Exitoso!
        </h1>
        <p className="text-gray-600 mb-4">
          Gracias por tu compra. Tu pedido ha sido procesado correctamente.
        </p>
        <p className="text-sm text-gray-500">
          Serás redirigido a la página principal en unos segundos...
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;