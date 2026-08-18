import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Title from "../components/Title";
import Section from "../components/Section";

// Lista de produtos mockados
const PRODUTOS = [
  {
    id: 1,
    nome: "Óleo para Barba Amber",
    categoria: "Barba",
    preco: "R$ 59,90",
    descricao: "Hidratação profunda com fragrância amadeirada e brilho natural.",
    imagem: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 2,
    nome: "Pomada Matte Modeladora",
    categoria: "Cabelo",
    preco: "R$ 49,90",
    descricao: "Fixação forte sem brilho, ideal para penteados estruturados no dia a dia.",
    imagem: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 3,
    nome: "Balm Pós-Barba Refrescante",
    categoria: "Barba",
    preco: "R$ 45,00",
    descricao: "Acalma a pele, reduz irritações e previne foliculite pós-barbear.",
    imagem: "https://images.unsplash.com/photo-1608248597260-6f216e58f63f?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 4,
    nome: "Shampoo Fortificante 2 em 1",
    categoria: "Cabelo",
    preco: "R$ 54,90",
    descricao: "Limpeza profunda para cabelos e barba com extrato de menta e cevada.",
    imagem: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 5,
    nome: "Kit Lenhador Completo",
    categoria: "Kits",
    preco: "R$ 139,90",
    descricao: "Inclui Óleo, Balm, Pente de madeira e Shampoo em estojo especial.",
    imagem: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 6,
    nome: "Pente de Madeira Duplo",
    categoria: "Acessórios",
    preco: "R$ 29,90",
    descricao: "Desfaz nós sem gerar estática nem frizz nos fios da barba.",
    imagem: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=500"
  }
];

const CATEGORIAS = ["Todos", "Barba", "Cabelo", "Kits", "Acessórios"];

function Produtos() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  const produtosFiltrados =
    categoriaAtiva === "Todos"
      ? PRODUTOS
      : PRODUTOS.filter((p) => p.categoria === categoriaAtiva);

  const handleComprarWhatsApp = (nomeProduto) => {
    const mensagem = encodeURIComponent(`Olá! Gostaria de encomendar o produto: ${nomeProduto}`);
    window.open(`https://wa.me/5500000000000?text=${mensagem}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-dragon-black text-dragon-white">
      <NavBar />

      {/* Header da Página */}
      <section className="relative bg-dragon-brownDark py-16 text-center">
        <div className="mx-auto w-[92%] max-w-7xl">
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-dragon-beige">
            Cuidado Masculino
          </span>
          <h1 className="mt-3 text-4xl font-black uppercase text-dragon-white sm:text-5xl md:text-6xl">
            Nossos <span className="text-dragon-beige">Produtos</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-stone-300">
            Linha selecionada e testada por nossos barbeiros para manter seu estilo e cuidados em dia.
          </p>
        </div>
      </section>

      {/* Seção Principal de Produtos */}
      <Section dark>
        {/* Filtro por Categoria */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`rounded border px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                categoriaAtiva === cat
                  ? "border-dragon-beige bg-dragon-beige text-dragon-black shadow-md"
                  : "border-white/10 bg-black/30 text-stone-400 hover:border-dragon-beige/50 hover:text-dragon-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Produtos */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {produtosFiltrados.map((produto) => (
            <div
              key={produto.id}
              className="group flex flex-col overflow-hidden rounded-lg border border-white/10 bg-black/40 transition-all duration-300 hover:border-dragon-beige/50"
            >
              {/* Imagem do Produto */}
              <div className="relative h-64 overflow-hidden bg-dragon-brownDark/20">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 rounded border border-dragon-beige/30 bg-dragon-black/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-dragon-beige">
                  {produto.categoria}
                </span>
              </div>

              {/* Informações */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-bold text-dragon-white">{produto.nome}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-400">
                    {produto.descricao}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-2xl font-black text-dragon-beige">
                    {produto.preco}
                  </span>
                  <Button
                    variant="primary"
                    onClick={() => handleComprarWhatsApp(produto.nome)}
                  >
                    Encomendar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default Produtos;