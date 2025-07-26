"use client";
import Image from "next/image";
import { useRef, RefObject, createRef, useState, useEffect } from "react";
import {
  ChatBubbleBottomCenterIcon,
  UserIcon,
  PlayIcon,
  ShareIcon,
  HeartIcon,
  CameraIcon,
  SparklesIcon,
  FilmIcon,
  PaintBrushIcon,
  ComputerDesktopIcon,
  ChatBubbleBottomCenterTextIcon,
  StarIcon,
  LightBulbIcon,
  CheckCircleIcon,
  EyeIcon,
  PhoneIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Chip,
  Avatar,
} from "@heroui/react";

export default function HomePage() {
  const handleFollow = () => {
    window.location.href =
      "https://www.instagram.com/na.audiovisual/?igsh=MTFsczJyb2dnMWl5NA%3D%3D#";
  };

  const services = [
    {
      icon: <FilmIcon className="w-6 h-6" />,
      title: "Vídeos para marcas e profissionais",
      description:
        "Reels, vídeos institucionais, vídeos para Instagram, biografias visuais, bastidores e conteúdo estratégico.",
    },
    {
      icon: <SparklesIcon className="w-6 h-6" />,
      title: "Direção criativa personalizada",
      description:
        "Roteiro, consultoria e acompanhamento para quem quer se posicionar com clareza e presença.",
    },
    {
      icon: <CameraIcon className="w-6 h-6" />,
      title: "Eventos que viram memória",
      description:
        "Registros sensíveis de eventos, experiências, celebrações e palestras — com imagens que tocam e permanecem.",
    },
    {
      icon: <ComputerDesktopIcon className="w-6 h-6" />,
      title: "Criação de sites e identidade digital",
      description:
        "Criação de sites autorais e funcionais para profissionais, marcas e eventos.",
    },
    {
      icon: <PaintBrushIcon className="w-6 h-6" />,
      title: "Criação de artes estáticas",
      description:
        "Posts, identidade visual, mini branding para redes sociais e materiais gráficos — tudo com personalidade e intenção.",
    },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO, Studio Criativo",
      avatar: "/profile.jpg",
      text: "Nicole transformou completamente minha presença digital. Seus vídeos não apenas capturam quem eu sou, mas elevam minha marca a um nível que eu nem imaginava ser possível.",
    },
    {
      name: "João Santos",
      role: "Dentista",
      avatar: "/profile.jpg",
      text: "Trabalhar com a NA foi revelador. Nicole tem um olhar único que fez meus pacientes se conectarem comigo antes mesmo da primeira consulta. Minha agenda nunca esteve tão cheia.",
    },
    {
      name: "Ana Costa",
      role: "Coach de Carreira",
      avatar: "/profile.jpg",
      text: "O diferencial da Nicole está na sensibilidade. Ela não só grava, ela entende sua essência e traduz isso em imagens que tocam e convencem. Meus resultados triplicaram!",
    },
    {
      name: "Carlos Mendes",
      role: "Advogado",
      avatar: "/profile.jpg",
      text: "A Nicole conseguiu capturar minha seriedade profissional sem perder a humanidade. Os vídeos me ajudaram a conquistar a confiança de clientes antes mesmo do primeiro encontro.",
    },
    {
      name: "Fernanda Lima",
      role: "Nutricionista",
      avatar: "/profile.jpg",
      text: "Com a ajuda da NA audiovisual, meu Instagram se tornou uma ferramenta poderosa de educação e atração de pacientes. A sensibilidade da Nicole fez toda a diferença.",
    },
  ];

  const portfolioVideos = [
    {
      src: "https://www.youtube.com/embed/IqxuMfK74S0",
      title: "Quentin",
      thumbnail: "/tumb/quentin.jpg",
    },
    {
      src: "https://www.youtube.com/embed/NpKPRA0owEk",
      title: "Green",
      thumbnail: "/tumb/green.jpg",
    },
    {
      src: "https://www.youtube.com/embed/Sy0s5yQD3zs",
      title: "Leovaz",
      thumbnail: "/tumb/leovaz.jpg",
    },
    {
      src: "https://www.youtube.com/embed/y0K9jIN4N_Q",
      title: "Odontologia",
      thumbnail: "/tumb/odontologia.jpg",
    },
    {
      src: "https://www.youtube.com/embed/GupNGOBIrek",
      title: "Café",
      thumbnail: "/tumb/cafe.jpg",
    },
  ];

  const videoRefs = useRef<RefObject<HTMLVideoElement>[]>([]);
  if (videoRefs.current.length !== portfolioVideos.length) {
    videoRefs.current = Array(portfolioVideos.length)
      .fill(null)
      .map(() => createRef<HTMLVideoElement>());
  }

  const handleContact = () => {
    window.location.href = "https://wa.me/5511992278171"; // Replace with actual WhatsApp number
  };

  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Carrossel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Carrega favoritos do localStorage ao montar
  useEffect(() => {
    const stored = localStorage.getItem("na_favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  // Atualiza localStorage sempre que favorites mudar
  useEffect(() => {
    localStorage.setItem("na_favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Função para alternar favorito
  const toggleFavorite = (index: number) => {
    setFavorites((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Nicole Abreu - NA Audiovisual",
        text: "Conheça o trabalho da Nicole Abreu!",
        url: window.location.href,
      });
    } else {
      alert("O compartilhamento nativo não é suportado neste navegador.");
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950">
      <Button
        isIconOnly
        variant="flat"
        size="lg"
        className="fixed bottom-4 right-4 bg-stone-800 backdrop-blur-sm border border-stone-700 rounded-full z-50"
        onPress={handleContact}
        startContent={<PhoneIcon className="w-5 h-5" />}
      />
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/profile.jpg"
            alt="Nicole Abreu"
            className="w-full h-full object-cover mask-b-from-20% mask-b-to-80% md:object-contain"
          />
          {/* logo */}
          <img
            src="/logo.png"
            alt="NA Audiovisual Logo"
            className="absolute top-6 left-6 w-24 h-auto"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Profile Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <div className="max-w-2xl mx-auto w-full space-y-6">
            {/* Profile Header */}
            <div className="flex items-end gap-4">
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-2">Nicole Abreu</h1>
                <p className="text-lg text-gray-200 mb-4">
                  Filmmaker e diretora criativa especializada em transformar
                  essência em imagem
                </p>
                <Chip color="primary" variant="flat" className="mb-4">
                  NA Audiovisual
                </Chip>
              </div>
            </div>

            {/* Stats and Actions */}
            <div className="flex items-center justify-between bg-stone-900/30 backdrop-blur-lg border border-stone-300/10 rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <UserIcon className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold">213</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChatBubbleBottomCenterIcon className="w-5 h-5 text-green-400" />
                  <span className="font-semibold">42</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  isIconOnly
                  variant="flat"
                  className="bg-stone-800/30 backdrop-blur-sm border border-stone-300/10"
                  startContent={<ShareIcon className="w-5 h-5 text-gray-400" />}
                  onPress={handleShare}
                />

                <Button
                  isIconOnly
                  variant="flat"
                  className="bg-stone-800/30 backdrop-blur-sm border border-stone-300/10"
                >
                  <HeartIcon
                    className={`w-5 h-5 ${
                      favorites.includes(0) ? "text-red-500" : "text-gray-400"
                    }`}
                    onClick={() => toggleFavorite(0)}
                  />
                </Button>
                <Button color="primary" onPress={handleFollow} className="px-6">
                  Seguir
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* About Section */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-white mb-8">Sobre Mim</h2>
          <div className="grid md:grid-cols-2 gap-4 text-stone-300">
            <div className="space-y-4">
              <p className=" leading-relaxed">
                Sou feita de algo que não se ensina: a arte de ver o outro e
                transformá-lo em imagem.
              </p>
              <p className="leading-relaxed">
                Sou <strong className="text-white">Nicole Abreu</strong>,
                fundadora da NA audiovisual.
              </p>
              <p className="leading-relaxed">
                Desde cedo, descobri que filmar não era só gravar… era sentir.
              </p>
            </div>
            <div className="space-y-4">
              <p className="leading-relaxed">
                Meu diferencial está no olhar: sou sensível, intuitiva e
                estratégica. Sei como criar conforto diante da câmera, traduzir
                a personalidade de cada cliente e fazer com que o vídeo não
                pareça um script, mas uma extensão da pessoa.
              </p>
              <p className="leading-relaxed">
                Com o tempo, desenvolvi um jeito próprio de conduzir gravações:
                leve, respeitoso e sensível. Não apenas capto imagens — eu crio
                experiências onde as pessoas se reconhecem.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Serviços
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-stone-800/20 backdrop-blur-lg border border-stone-300/10 hover:border-stone-300/20 hover:bg-stone-700/20 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-stone-500/10"
              >
                <CardHeader className="flex gap-3">
                  <div className="p-2 bg-stone-600/20 backdrop-blur-sm rounded-lg text-stone-300 border border-stone-400/10">
                    {service.icon}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Portfólio</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Aqui você encontra um pouco do olhar da NA audiovisual. Cada vídeo
              carrega uma história, uma intenção, um cuidado com quem está sendo
              visto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioVideos.map((video, index) => (
              <Card
                key={index}
                className="bg-stone-800/20 backdrop-blur-lg border border-stone-300/10 hover:border-stone-300/20 hover:bg-stone-700/20 transition-all duration-300 group cursor-pointer shadow-2xl hover:shadow-stone-500/10"
              >
                <CardBody className="p-0 relative overflow-hidden">
                  <div className="relative aspect-video bg-stone-900 overflow-hidden rounded-t-lg">
                    <iframe
                      src={video.src}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                      title={video.title}
                      allowFullScreen
                      ref={(el) => {
                        if (el && !videoRefs.current[index]) {
                          videoRefs.current[index] =
                            createRef<HTMLVideoElement>();
                        }
                      }}
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold">{video.title}</h3>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Carousel Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            O que dizem sobre mim
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto mb-12">
            A NA audiovisual é mais do que uma produtora: é uma parceira que
            entende a essência de cada cliente e transforma isso em imagens que
            falam por si mesmas. Veja o que meus clientes têm a dizer.
          </p>

          {/* Carousel Container */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-stone-800/20 backdrop-blur-lg border border-stone-300/10 hover:border-stone-300/20 hover:bg-stone-700/20 transition-all duration-300 shadow-2xl">
                      <CardBody className="p-8">
                        {/* Stars */}
                        <div className="flex justify-center gap-1 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className="w-5 h-5 text-yellow-400"
                            />
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-stone-300 leading-relaxed mb-6 italic relative text-lg">
                          <span className="relative z-10">
                            " {testimonial.text} "
                          </span>
                        </blockquote>

                        {/* Author */}
                        <div className="flex items-center justify-center gap-4">
                          <Avatar
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-16 h-16 border-2 border-stone-300/20"
                          />
                          <div>
                            <h4 className="text-white font-semibold text-lg">
                              {testimonial.name}
                            </h4>
                            <p className="text-stone-400">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              isIconOnly
              variant="flat"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-stone-800/80 backdrop-blur-sm border border-stone-300/20 hover:bg-stone-700/80 z-10"
              onPress={prevTestimonial}
            >
              <ChevronLeftIcon className="w-6 h-6 text-white" />
            </Button>

            <Button
              isIconOnly
              variant="flat"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-stone-800/80 backdrop-blur-sm border border-stone-300/20 hover:bg-stone-700/80 z-10"
              onPress={nextTestimonial}
            >
              <ChevronRightIcon className="w-6 h-6 text-white" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-stone-300 scale-125"
                      : "bg-stone-600 hover:bg-stone-500"
                  }`}
                  onClick={() => goToTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose NA Audiovisual Section */}
        <section className="relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Por que contratar a NA audiovisual?
            </h2>
            <p className="text-stone-400 max-w-3xl mx-auto text-lg">
              Hoje, quem não se posiciona nas redes, não é lembrado.
              <br />A NA audiovisual vai além da gravação: entregamos
              estratégia, direção e presença.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-stone-800/20 backdrop-blur-lg border border-stone-300/10 hover:border-stone-300/20 hover:bg-stone-700/20 transition-all duration-300 shadow-2xl text-center group">
              <CardBody className="p-8">
                <div className="p-4 bg-stone-600/20 backdrop-blur-sm rounded-full text-stone-300 border border-stone-400/10 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <LightBulbIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Estratégia + Criação
                </h3>
                <p className="text-stone-400 leading-relaxed">
                  Se você quer atrair clientes que se conectam com você, o vídeo
                  é o caminho.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-stone-800/20 backdrop-blur-lg border border-stone-300/10 hover:border-stone-300/20 hover:bg-stone-700/20 transition-all duration-300 shadow-2xl text-center group">
              <CardBody className="p-8">
                <div className="p-4 bg-stone-600/20 backdrop-blur-sm rounded-full text-stone-300 border border-stone-400/10 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircleIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Profissionalismo + Essência
                </h3>
                <p className="text-stone-400 leading-relaxed">
                  Se quer profissionalizar sua imagem sem perder sua essência,
                  aqui é o seu lugar.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-stone-800/20 backdrop-blur-lg border border-stone-300/10 hover:border-stone-300/20 hover:bg-stone-700/20 transition-all duration-300 shadow-2xl text-center group">
              <CardBody className="p-8">
                <div className="p-4 bg-stone-600/20 backdrop-blur-sm rounded-full text-stone-300 border border-stone-400/10 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <EyeIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Visibilidade + Desejo
                </h3>
                <p className="text-stone-400 leading-relaxed">
                  Se quer ser vista, lembrada e desejada — nós te mostramos
                  como.
                </p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          <Card className="bg-gradient-to-r from-stone-600/20 to-stone-600/20 backdrop-blur-sm border border-stone-500/30">
            <CardBody className="p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Vamos criar algo incrível juntos?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Transforme sua essência em imagem. Entre em contato e descubra
                como posso ajudar você a contar sua história de forma única e
                autêntica.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button
                  color="primary"
                  size="lg"
                  onPress={handleFollow}
                  className="px-8"
                  startContent={<UserIcon className="w-5 h-5" />}
                >
                  Seguir no Instagram
                </Button>
                <Button
                  variant="bordered"
                  size="lg"
                  className="px-8 border-white/30 text-white hover:bg-white/10"
                  onPress={handleContact}
                  startContent={
                    <ChatBubbleBottomCenterTextIcon className="w-5 h-5" />
                  }
                >
                  Entre em Contato
                </Button>
              </div>
            </CardBody>
          </Card>
        </section>
      </div>
    </main>
  );
}
