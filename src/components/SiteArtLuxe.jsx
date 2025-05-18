import React, { useState } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function ContactPage() {
  return (
    <div className="min-h-screen bg-black/80 text-white px-4 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Contactez-nous</h2>
      <p className="mb-6 text-gray-300 text-base md:text-lg">Pour plus d'informations ou pour faire une offre, remplissez le formulaire ci-dessous.</p>
      <form className="space-y-4 max-w-xl mx-auto">
        <input type="text" placeholder="Nom" className="w-full border rounded px-4 py-2 text-black" />
        <input type="email" placeholder="Email" className="w-full border rounded px-4 py-2 text-black" />
        <textarea placeholder="Votre message" rows="4" className="w-full border rounded px-4 py-2 text-black"></textarea>
        <button type="submit" className="w-full bg-white text-black px-4 py-2 rounded">Envoyer</button>
      </form>
    </div>
  );
}

export default function SiteArtLuxe() {
  const [menuOpen, setMenuOpen] = useState(false);

  const imageFiles = [
    "monet_impression.jpg",
    "vangogh_starrynight.jpg",
    "cezanne_stilllife.jpg",
    "renoir_moulin.jpg",
    "degas_ballet.jpg",
    "seurat_sunday.jpg"
  ];

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-[url('/background-dark-elegant.jpg')] bg-fixed bg-cover text-gray-100 font-sans">
              {/* HEADER */}
              <header className="bg-black bg-opacity-70 shadow-md fixed w-full z-40 backdrop-blur">
                <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
                  <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">Galerie Yves Santa</h1>
                  <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {menuOpen ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                      </svg>
                    </button>
                  </div>
                  <nav className="space-x-6 hidden md:flex text-gray-200">
                    <a href="#oeuvres" className="hover:underline">Oeuvres</a>
                    <a href="#apropos" className="hover:underline">À propos</a>
                    <Link to="/contact" className="hover:underline">Contact</Link>
                  </nav>
                </div>
                {menuOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="md:hidden bg-black bg-opacity-90 text-white px-4 py-4 space-y-2 text-center"
                  >
                    <a href="#oeuvres" className="block" onClick={() => setMenuOpen(false)}>Oeuvres</a>
                    <a href="#apropos" className="block" onClick={() => setMenuOpen(false)}>À propos</a>
                    <Link to="/contact" className="block" onClick={() => setMenuOpen(false)}>Contact</Link>
                  </motion.div>
                )}
              </header>

              {/* HERO */}
              <section className="pt-28 md:pt-32 pb-16 md:pb-20 px-4 text-center">
                <motion.h2
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-3xl md:text-6xl font-bold mb-6 text-white"
                >
                  L'art de collectionner avec passion
                </motion.h2>
                <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto mb-6">
                  Découvrez une sélection exclusive d'œuvres d'art prêtes à être acquises.
                </p>
                <button className="bg-white text-black text-sm md:text-lg px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg hover:bg-gray-200">
                  Voir les oeuvres
                </button>
              </section>

              {/* OEUVRES */}
              <section id="oeuvres" className="bg-black/60 py-12 md:py-16 px-4 backdrop-blur-sm">
                <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-12 text-white">Œuvres en vente</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                  {imageFiles.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-2xl shadow-xl hover:scale-105 transition-transform bg-white text-black">
                      <div className="p-0">
                        <div className="relative group">
                          <img
                            src={`/${image}`}
                            alt={`Oeuvre ${index + 1}`}
                            className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm">
                            Zoom +
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold text-base md:text-lg mb-2">Titre de l'œuvre #{index + 1}</h4>
                          <p className="text-gray-700 text-sm">Artiste inconnu - 20e siècle</p>
                          <p className="text-right text-sm font-medium mt-4 text-gray-900">Prix sur demande</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* À PROPOS */}
              <section id="apropos" className="py-16 md:py-20 bg-black/70 px-4 backdrop-blur-sm text-white">
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-6">À propos de la galerie</h3>
                  <p className="text-gray-300 text-base md:text-lg">
                    Yves Santa propose à la revente des œuvres d'art sélectionnées avec soin, dans une logique de passion et d'investissement. Chaque pièce est choisie pour son caractère unique et son potentiel artistique.
                  </p>
                </div>
              </section>

              {/* FOOTER */}
              <footer className="bg-black text-white py-6 text-center text-sm">
                <p>&copy; 2025 Galerie Yves Santa. Tous droits réservés.</p>
              </footer>
            </div>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
