//  import React from "react";
// // import { motion } from "framer-motion";
// import { ArrowRight, Music2, Palette, DollarSign, Wallet, Vote, FileText, Sparkles, Images } from "lucide-react";
// import { Button } from "react-bootstrap";

 
// const blueGlow = {
// textShadow:
// "0 0 6px rgba(56,189,248,.9), 0 0 14px rgba(56,189,248,.6), 0 0 30px rgba(56,189,248,.4)",
// };

// const Section = ({ id, children, className = "" }) => (
// <section id={id} className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
// );

// export default function MaybeArtLanding() {
//     const glow = {
// textShadow:
// "0 0 10px #ff00c8, 0 0 20px #ff00c8, 0 0 40px #ff00c8, 0 0 80px #ff00c8",
// };
// const reflection = {
// position: "absolute",
// top: "100%",
// left: 0,
// width: "100%",
// height: "50%",
// background: "linear-gradient(to bottom, rgba(255,0,200,0.3), transparent)",
// filter: "blur(8px)",
// transform: "scaleY(-1)",
// opacity: 0.4,
// };

//     const blueGlow = {
// textShadow:
// "0 0 6px rgba(56,189,248,.9), 0 0 14px rgba(56,189,248,.6), 0 0 30px rgba(56,189,248,.4)",
// };

//     const Section = ({ id, children, className = "" }) => (
// <section id={id} className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
// );
// return (
// <div className="min-h-screen w-full bg-black text-white font-sans overflow-x-hidden">
// {/* HERO */}
// <div className="relative bg-black text-center overflow-hidden">
// <Section className="relative pt-24 pb-24 sm:pt-28 sm:pb-32">
// {/* <motion.div
// initial={{ opacity: 0, y: 24 }}
// animate={{ opacity: 1, y: 0 }}
// transition={{ duration: 0.7 }}
// className="relative"
// > */}
// <h1
// className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-fuchsia-400"
// style={glow}
// >
// <span className="inline-block mx-2">MAY</span>
// <span className="inline-block mx-2 text-white">BE</span>
// <span className="inline-block mx-2">ART</span>
// <div style={reflection}></div>
// </h1>
// <p
// className="mt-6 text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-300"
// style={blueGlow}
// >
// Turning Creativity into Currency
// </p>

// <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
// <Button asChild size="lg" className="rounded-2xl px-6 py-6 text-base font-bold shadow-[0_0_20px_rgba(255,0,128,.5)]">
// <a href="/create">Create Artist Page</a>
// </Button>
// <Button asChild variant="secondary" size="lg" className="rounded-2xl px-6 py-6 text-base font-bold">
// <a href="/buy">Buy $MAYBEART</a>
// </Button>
// <Button asChild variant="outline" size="lg" className="rounded-2xl px-6 py-6 text-base font-bold border-fuchsia-400 text-fuchsia-300 hover:text-white hover:bg-fuchsia-500/20">
// <a href="/whitepaper">Read Whitepaper</a>
// </Button>
// </div>

// <div className="mt-8 text-sm text-white/70">
// Featured works by Ryan West • Unreleased tracks by John Butler & DJ MC O • NFT auctions & royalties
// </div>
// </motion.div>
// </Section>
// </div>
// </div>
// );
// }
