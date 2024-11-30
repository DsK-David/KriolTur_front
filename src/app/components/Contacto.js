// components/Contacto.js

"use client"; // Adicionando a diretiva "use client" no topo

import { useState, useRef } from "react";

const Contacto = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef(null); // Usando useRef para referenciar o formulário

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log("Dados do formulário:", formData);

    // Reseta o formulário após envio
    formRef.current.reset();
  };

  return (
    <section id="contato" className="bg-sand py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">Fale Conosco</h2>
        <p className="text-xl text-gray-700 mb-6">
          Envie-nos uma mensagem e nós responderemos em breve.
        </p>
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="max-w-md mx-auto"
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Seu email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Sua mensagem"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-lg"
          >
            Enviar
          </button>
        </form>
        {isSubmitted && (
          <p className="mt-4 text-lg text-green-500">
            Mensagem enviada com sucesso!
          </p>
        )}
      </div>
    </section>
  );
};

export default Contacto;
