import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Card from "../components/Card";
import Title from "../components/Title";
import Section from "../components/Section";

import hero from "../assets/hero.png";

function Home() {
  return (
    <div className="min-h-screen bg-dragon-white text-dragon-black">

      <NavBar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[calc(100vh-78px)] overflow-hidden bg-dragon-black">

        {/* Imagem de fundo */}

        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Dragão Barbado"
            className="h-full w-full object-cover opacity-50"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-dragon-black via-dragon-black/85 to-dragon-brownDark/50" />

          <div className="absolute inset-0 bg-gradient-to-t from-dragon-black via-transparent to-dragon-black/30" />
        </div>

        {/* Conteúdo */}

        <div className="relative mx-auto flex min-h-[calc(100vh-78px)] w-[92%] max-w-7xl items-center">

          <div className="max-w-3xl py-20">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-dragon-beige" />

              <span className="text-xs font-bold uppercase tracking-[0.35em] text-dragon-beige">
                Barbearia • Estilo • Tradição
              </span>
            </div>

            <h1 className="text-6xl font-black uppercase leading-[0.88] tracking-tight text-dragon-white sm:text-7xl md:text-8xl lg:text-9xl">

              Dragão

              <span className="mt-3 block text-dragon-beige">
                Barbado
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-stone-300 sm:text-lg">
              Muito mais que uma barbearia.
              Um lugar para cuidar do seu estilo, da sua barba
              e sair com a confiança renovada.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Button
                href="/notfound"
                variant="primary"
              >
                Agendar horário
              </Button>

              <Button
                href="/sobre"
                variant="light"
              >
                Conheça a Dragão
              </Button>

            </div>

            {/* Pequenos destaques */}

            <div className="mt-14 grid max-w-lg grid-cols-3 border-t border-white/10 pt-6">

              <div>
                <strong className="block text-2xl font-black text-dragon-white">
                  +500
                </strong>

                <span className="text-xs uppercase tracking-wider text-stone-400">
                  Clientes
                </span>
              </div>

              <div className="border-l border-white/10 pl-5">
                <strong className="block text-2xl font-black text-dragon-white">
                  5+
                </strong>

                <span className="text-xs uppercase tracking-wider text-stone-400">
                  Anos
                </span>
              </div>

              <div className="border-l border-white/10 pl-5">
                <strong className="block text-2xl font-black text-dragon-white">
                  4.9
                </strong>

                <span className="text-xs uppercase tracking-wider text-stone-400">
                  Avaliação
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Indicador inferior */}

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-center sm:flex">

          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400">
            Explore
          </span>

          <div className="h-10 w-px bg-gradient-to-b from-dragon-beige to-transparent" />

        </div>

      </section>


      {/* =====================================================
          INTRODUÇÃO
      ===================================================== */}

      <Section>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <div>

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-dragon-brownLight">
              Nossa essência
            </span>

            <h2 className="mt-4 text-4xl font-black leading-tight text-dragon-brownDark sm:text-5xl">
              Seu estilo merece
              <span className="block text-dragon-brown">
                um lugar à altura.
              </span>
            </h2>

            <div className="mt-6 h-1 w-16 bg-gradient-to-r from-dragon-brown to-dragon-beige" />

            <p className="mt-7 leading-relaxed text-stone-600">
              Na Dragão Barbado, acreditamos que uma boa experiência
              começa muito antes do corte terminar. Cada detalhe foi
              pensado para que você possa relaxar, conversar e sair
              daqui se sentindo ainda melhor.
            </p>

            <p className="mt-4 leading-relaxed text-stone-600">
              Trabalhamos com cortes clássicos, estilos modernos,
              barba e cuidados masculinos, sempre buscando respeitar
              a personalidade de cada cliente.
            </p>

            <div className="mt-8">
              <Button
                href="/sobre"
                variant="secondary"
              >
                Nossa história
              </Button>
            </div>

          </div>


          {/* Card visual */}

          <div className="relative">

            <div className="absolute -right-4 -top-4 h-32 w-32 border-r-2 border-t-2 border-dragon-beige" />

            <div className="relative overflow-hidden bg-dragon-brownDark p-2">

              <img
                src={hero}
                alt="Interior da Dragão Barbado"
                className="h-[450px] w-full object-cover opacity-80"
              />

              <div className="absolute inset-2 bg-gradient-to-t from-dragon-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8">

                <span className="text-xs uppercase tracking-[0.3em] text-dragon-beige">
                  Dragão Barbado
                </span>

                <h3 className="mt-2 text-3xl font-black uppercase text-white">
                  Estilo & tradição
                </h3>

              </div>

            </div>

            <div className="absolute -bottom-4 -left-4 h-24 w-24 border-b-2 border-l-2 border-dragon-brownLight" />

          </div>

        </div>

      </Section>


      {/* =====================================================
          SERVIÇOS
      ===================================================== */}

      <Section dark>

        <Title
          light
          subtitle="Escolha o cuidado que combina com você."
        >
          Nossos Serviços
        </Title>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <Card
            title="Corte Masculino"
            description="Corte personalizado, acabamento impecável e estilo pensado para você."
            price="R$ 45,00"
          >
            <div className="mb-5 h-px bg-dragon-beige/20" />

            <ul className="mb-5 space-y-2 text-sm text-stone-400">
              <li>✓ Corte personalizado</li>
              <li>✓ Acabamento</li>
              <li>✓ Finalização</li>
            </ul>
          </Card>


          <Card
            title="Barba"
            description="Modelagem completa para deixar sua barba alinhada e com personalidade."
            price="R$ 35,00"
          >
            <div className="mb-5 h-px bg-dragon-beige/20" />

            <ul className="mb-5 space-y-2 text-sm text-stone-400">
              <li>✓ Modelagem</li>
              <li>✓ Acabamento</li>
              <li>✓ Toalha quente</li>
            </ul>
          </Card>


          <Card
            title="Corte + Barba"
            description="A experiência completa para renovar seu visual da cabeça aos detalhes."
            price="R$ 70,00"
          >
            <div className="mb-5 h-px bg-dragon-beige/20" />

            <ul className="mb-5 space-y-2 text-sm text-stone-400">
              <li>✓ Corte completo</li>
              <li>✓ Barba completa</li>
              <li>✓ Finalização premium</li>
            </ul>
          </Card>

        </div>

        <div className="mt-12 text-center">

          <Button
            href="/produtos"
            variant="light"
          >
            Ver todos os serviços
          </Button>

        </div>

      </Section>


      {/* =====================================================
          EXPERIÊNCIA
      ===================================================== */}

      <section className="bg-dragon-brownDark">

        <div className="mx-auto grid w-full max-w-7xl lg:grid-cols-2">

          <div className="flex min-h-[500px] items-center px-[4%] py-16 lg:px-12">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-dragon-beige">
                Por que a Dragão?
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
                Não é apenas
                <span className="block text-dragon-beige">
                  um corte.
                </span>
              </h2>

              <p className="mt-6 max-w-lg leading-relaxed text-stone-300">
                É o momento em que você para, relaxa e deixa nossos
                profissionais cuidarem do seu visual.
              </p>

              <div className="mt-8">
                <Button href="/contato">
                  Agendar agora
                </Button>
              </div>

            </div>

          </div>


          <div className="grid grid-cols-2">

            <div className="flex min-h-[250px] flex-col justify-center border border-white/10 bg-black/20 p-8">

              <span className="text-4xl text-dragon-beige">
                ✂
              </span>

              <h3 className="mt-5 text-xl font-bold text-white">
                Precisão
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                Cada detalhe do seu corte recebe nossa atenção.
              </p>

            </div>


            <div className="flex min-h-[250px] flex-col justify-center border border-white/10 bg-black/30 p-8">

              <span className="text-4xl text-dragon-beige">
                ★
              </span>

              <h3 className="mt-5 text-xl font-bold text-white">
                Qualidade
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                Produtos e técnicas pensados para entregar o melhor.
              </p>

            </div>


            <div className="flex min-h-[250px] flex-col justify-center border border-white/10 bg-black/30 p-8">

              <span className="text-4xl text-dragon-beige">
                ♛
              </span>

              <h3 className="mt-5 text-xl font-bold text-white">
                Experiência
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                Um ambiente feito para você se sentir em casa.
              </p>

            </div>


            <div className="flex min-h-[250px] flex-col justify-center border border-white/10 bg-black/20 p-8">

              <span className="text-4xl text-dragon-beige">
                ⚡
              </span>

              <h3 className="mt-5 text-xl font-bold text-white">
                Personalidade
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                Seu visual deve representar quem você é.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DEPOIMENTOS
      ===================================================== */}

      <Section>

        <Title
          subtitle="Quem passa pela Dragão Barbado sabe a diferença."
        >
          O que nossos clientes dizem
        </Title>


        <div className="grid gap-6 md:grid-cols-3">

          <div className="border border-stone-200 bg-white p-7 shadow-sm">

            <div className="text-lg tracking-widest text-dragon-brownLight">
              ★★★★★
            </div>

            <p className="mt-5 leading-relaxed text-stone-600">
              "Ambiente muito bom e o atendimento é excelente.
              O corte ficou exatamente como eu queria."
            </p>

            <div className="mt-6 border-t border-stone-200 pt-5">

              <strong className="text-sm font-bold text-dragon-brownDark">
                Lucas Almeida
              </strong>

              <span className="mt-1 block text-xs text-stone-400">
                Cliente
              </span>

            </div>

          </div>


          <div className="border border-stone-200 bg-white p-7 shadow-sm">

            <div className="text-lg tracking-widest text-dragon-brownLight">
              ★★★★★
            </div>

            <p className="mt-5 leading-relaxed text-stone-600">
              "Já testei várias barbearias e finalmente encontrei
              uma que entende exatamente o estilo que gosto."
            </p>

            <div className="mt-6 border-t border-stone-200 pt-5">

              <strong className="text-sm font-bold text-dragon-brownDark">
                Rafael Santos
              </strong>

              <span className="mt-1 block text-xs text-stone-400">
                Cliente
              </span>

            </div>

          </div>


          <div className="border border-stone-200 bg-white p-7 shadow-sm">

            <div className="text-lg tracking-widest text-dragon-brownLight">
              ★★★★★
            </div>

            <p className="mt-5 leading-relaxed text-stone-600">
              "O corte e a barba ficaram muito bons. O ambiente
              também é diferenciado. Com certeza vou voltar."
            </p>

            <div className="mt-6 border-t border-stone-200 pt-5">

              <strong className="text-sm font-bold text-dragon-brownDark">
                Gabriel Costa
              </strong>

              <span className="mt-1 block text-xs text-stone-400">
                Cliente
              </span>

            </div>

          </div>

        </div>

      </Section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-dragon-black">

        <div className="absolute inset-0 bg-gradient-to-r from-dragon-black via-dragon-brownDark to-dragon-black opacity-80" />

        <div className="relative mx-auto flex w-[92%] max-w-5xl flex-col items-center py-24 text-center">

          <span className="text-xs font-bold uppercase tracking-[0.35em] text-dragon-beige">
            Seu próximo visual começa aqui
          </span>

          <h2 className="mt-5 text-4xl font-black uppercase leading-tight text-white sm:text-5xl md:text-6xl">
            Pronto para ficar
            <span className="block text-dragon-beige">
              barbado?
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-stone-400">
            Escolha seu serviço, marque seu horário e venha
            conhecer a experiência Dragão Barbado.
          </p>

          <div className="mt-9">

            <Button href="/contato">
              Agendar meu horário
            </Button>

          </div>

        </div>

      </section>


      <Footer />

    </div>
  );
}

export default Home;