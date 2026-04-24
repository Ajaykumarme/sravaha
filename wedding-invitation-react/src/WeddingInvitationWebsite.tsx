import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  Car,
  Clock3,
  Heart,
  Landmark,
  MapPin,
  MicVocal,
  Music2,
  Navigation,
  PlayCircle,
  ScrollText,
  Sparkles,
  Users,
  Utensils,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";

export default function WeddingInvitationWebsite() {
  const weddingDate = new Date("2026-05-01T10:12:00+05:30").getTime();
  const youtubeId = "NHNtA7eNmfY";
  const introVideoId = "ATgax1Qp86w";

  const groomImage = "https://i.ibb.co/bM3SmbLh/1.png";
  const brideImage = "https://i.ibb.co/pjCX0xYK/2.png";
  const groomImage1 = "https://i.ibb.co/C38Q6Tnb/3.png";
  const brideImage1 = "https://i.ibb.co/5g783K4c/4.png";
  const coupleImage = "https://i.ibb.co/Qj3LWtRX/3.png";
  const family = "https://i.ibb.co/cX3vNTQh/2.png";
  const family2 = "https://i.ibb.co/zT15J6FZ/1.png";
  const invitationImage = "https://i.ibb.co/PvbMhV8K/Invitation.jpg";

  const venueLink = "https://maps.app.goo.gl/pnywRZh7a6YRTMzC9?g_st=ic";
  const mapEmbed =
    "https://www.google.com/maps?q=Sabari+A%2FC+Function+Hall+Mustafanagar+Khammam&output=embed";

  const galleryImages = useMemo(
    () => [
      { src: coupleImage, label: "Sravan Kumar & Neha" },
      { src: groomImage1, label: "Groom" },
      { src: brideImage1, label: "Bride" },
      { src: family, label: "Groom-family" },
      { src: family2, label: "Bride-family" },
      { src: invitationImage, label: "Invitation" },
    ],
    [],
  );

  const [entered, setEntered] = useState(false);
  const [muted, setMuted] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [audioStarted, setAudioStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(weddingDate));
  const [introInView, setIntroInView] = useState(false);
  const [introSoundOn, setIntroSoundOn] = useState(false);
  const videoSectionRef = useRef<HTMLElement | null>(null);

  const [wishes] = useState([
    {
      id: 1,
      name: "Family Blessings",
      message:
        "May your new journey be filled with laughter, harmony, prosperity, and endless love.",
    },
    {
      id: 2,
      name: "Well Wishers",
      message:
        "Wishing Sravan Kumar and Neha a lifetime of togetherness, trust, and beautiful memories.",
    },
    {
      id: 3,
      name: "Loved Ones",
      message:
        "May every sunrise bring joy and every moment strengthen your bond forever.",
    },
  ]);

  useEffect(() => {
    document.title = "Sravan Kumar ❤️ Neha | Wedding Invitation";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "A luxurious cinematic wedding invitation website for Sravan Kumar and Neha.",
      );
    }
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(weddingDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [weddingDate]);

  useEffect(() => {
    const section = videoSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.45;
        setIntroInView(visible);

        if (!visible) {
          setIntroSoundOn(false);
        }
      },
      {
        threshold: [0.2, 0.35, 0.45, 0.6, 0.75],
      },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [entered]);

  const effectiveBgMuted = muted || introInView;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const enterWedding = () => {
    setEntered(true);
    setAudioStarted(true);
  };

  const enableIntroSound = () => {
    setIntroSoundOn(true);
  };

  return (
    <div className="min-h-screen bg-[#120817] text-[#f8efe3] selection:bg-[#d4af37]/30 selection:text-white">
      <style>{`
        :root {
          --background: #120817;
          --deep-purple: #241032;
          --card: rgba(255,255,255,0.06);
          --card-strong: rgba(255,255,255,0.09);
          --foreground: #f8efe3;
          --muted-foreground: rgba(248,239,227,0.65);
          --gold: #d4af37;
          --gold-soft: #f2dd9b;
          --ivory: #fff8ef;
          --shadow-elegant: 0 20px 80px rgba(0,0,0,0.35);
          --shadow-glow: 0 0 30px rgba(212,175,55,0.2);
        }
        html { scroll-behavior: smooth; }
        body {
          background: var(--background);
          color: var(--foreground);
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
        }
        .font-display { font-family: Georgia, "Times New Roman", serif; }
        .font-script { font-family: "Brush Script MT", "Lucida Handwriting", cursive; }
        .font-serif-body { font-family: Georgia, "Times New Roman", serif; }
        .text-gold { color: var(--gold); }
        .text-ivory { color: var(--ivory); }
        .text-muted { color: var(--muted-foreground); }
        .bg-gradient-gold {
          background-image: linear-gradient(135deg, #f8edc0 0%, #d4af37 45%, #f1d983 100%);
        }
        .text-gradient-gold {
          background-image: linear-gradient(135deg, #fff5d7 0%, #d4af37 45%, #f1d983 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .gold-border {
          border: 1px solid rgba(212, 175, 55, 0.28);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.04), 0 0 0 1px rgba(255,255,255,0.02);
        }
        .glass-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04));
          backdrop-filter: blur(14px);
          box-shadow: var(--shadow-elegant);
        }
        .shadow-elegant { box-shadow: var(--shadow-elegant); }
        .shadow-glow { box-shadow: var(--shadow-glow); }
        .hero-bg {
          background:
            radial-gradient(circle at top, rgba(212,175,55,0.14), transparent 32%),
            radial-gradient(circle at 80% 10%, rgba(147,51,234,0.18), transparent 26%),
            radial-gradient(circle at 10% 90%, rgba(255,255,255,0.06), transparent 18%),
            linear-gradient(180deg, rgba(18,8,23,0.78), rgba(18,8,23,0.88));
        }
        .section-bg {
          background:
            radial-gradient(circle at top, rgba(212,175,55,0.07), transparent 28%),
            linear-gradient(180deg, rgba(36,16,50,0.45), rgba(18,8,23,1));
        }
        .ornament-line {
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.8), transparent);
          height: 1px;
        }
        .shimmer-text {
          background: linear-gradient(90deg, #fff8ef 0%, #f5ddb0 25%, #ffffff 50%, #f0d37d 75%, #fff8ef 100%);
          background-size: 220% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer 5s linear infinite;
        }
        .petal {
          position: absolute;
          border-radius: 999px;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,.9), rgba(255,209,220,.55) 55%, rgba(212,175,55,.22));
          filter: blur(0.4px);
          animation: petalFloat linear infinite;
        }
        .soft-rays::before {
          content: "";
          position: absolute;
          inset: -10%;
          background: conic-gradient(from 180deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.06) 30deg, transparent 60deg, rgba(212,175,55,0.06) 110deg, transparent 150deg, rgba(255,255,255,0.04) 220deg, transparent 260deg, rgba(212,175,55,0.07) 320deg, transparent 360deg);
          filter: blur(32px);
          animation: spinSlow 24s linear infinite;
          opacity: 0.5;
        }
        .animate-float {
          animation: floatY 6s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease both;
        }
        .animate-scale-in {
          animation: scaleIn 0.8s ease both;
        }
        .animate-glow-pulse {
          animation: glowPulse 2.5s ease-in-out infinite;
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 220% center; }
        }
        @keyframes petalFloat {
          0% { transform: translate3d(0,-10vh,0) rotate(0deg); }
          50% { transform: translate3d(12px,50vh,0) rotate(140deg); }
          100% { transform: translate3d(-18px,115vh,0) rotate(280deg); }
        }
        @keyframes spinSlow {
          0% { transform: rotate(0deg) scale(1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 1; filter: drop-shadow(0 0 0 rgba(212,175,55,0)); }
          50% { opacity: 0.85; filter: drop-shadow(0 0 12px rgba(212,175,55,0.35)); }
        }
      `}</style>

      <AnimatePresence>
        {!entered && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-[#0d0513]"
          >
            <div className="absolute inset-0 hero-bg" />
            <div className="absolute inset-0 soft-rays" />
            <FloatingSparkles count={26} />
            <div className="relative z-10 mx-4 w-full max-w-3xl rounded-[34px] gold-border glass-card p-8 text-center sm:p-12">
              <p className="font-script text-3xl sm:text-5xl text-gold">Welcome to Our Wedding Story</p>
              <div className="mt-5 text-xs uppercase tracking-[0.45em] text-muted">A Premium Telugu Marriage Invitation</div>
              <h1 className="font-display mt-8 text-5xl sm:text-7xl text-ivory leading-tight">
                <span className="block shimmer-text">Sravan Kumar</span>
                <span className="block font-script text-5xl sm:text-7xl text-gold my-2">&</span>
                <span className="block shimmer-text">Neha</span>
              </h1>
              <Ornament label="Two Hearts · One Forever" />
              <p className="font-serif-body italic text-base sm:text-xl text-[#f8efe3cc] max-w-2xl mx-auto leading-relaxed">
                With joyful hearts and family blessings, we invite you to celebrate our marriage
                on <span className="text-gold font-semibold">Friday, 1st May 2026</span> at{" "}
                <span className="text-gold font-semibold">10:12 AM</span>.
              </p>
              <button
                onClick={enterWedding}
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-gold px-7 py-3.5 font-display text-sm tracking-[0.16em] text-[#2d1b08] shadow-glow transition hover:scale-105"
              >
                <Sparkles size={16} /> Tap to Enter Our Wedding Story
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {audioStarted && (
        <iframe
          title="Wedding Music"
          className="fixed -left-[9999px] top-0 h-px w-px opacity-0 pointer-events-none"
          width="1"
          height="1"
          allow="autoplay; encrypted-media"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&loop=1&playlist=${youtubeId}&controls=0&mute=${effectiveBgMuted ? 1 : 0}&modestbranding=1&playsinline=1&rel=0`}
        />
      )}

      <button
        type="button"
        onClick={() => setMuted((m) => !m)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full gold-border glass-card text-ivory transition hover:scale-105"
      >
        {effectiveBgMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#120817cc] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <button onClick={() => scrollTo("hero")} className="text-left">
            <div className="font-display text-xl sm:text-2xl text-ivory">Sravan Kumar ❤️ Neha</div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-[#d4af37cc]">Wedding Invitation</div>
          </button>
          <div className="hidden items-center gap-5 lg:flex">
            {[
              ["hero", "Home"],
              ["invitation", "Invitation"],
              ["story", "Story"],
              ["video", "Intro Video"],
              ["couple", "Couple"],
              ["family", "Family"],
              ["events", "Events"],
              ["gallery", "Gallery"],
              ["venue", "Venue"],
              ["rsvp", "Celebrate"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm text-[#f8efe3b5] transition hover:text-white"
              >
                {label}
              </button>
            ))}
          </div>
          <a
            href={venueLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gradient-gold px-4 py-2 font-display text-xs text-[#2d1b08] shadow-glow transition hover:scale-105 sm:text-sm"
          >
            Navigate to Venue
          </a>
        </div>
      </header>

      <main className="overflow-hidden pt-[72px]">
        <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: `url(${coupleImage})` }} />
          <div className="absolute inset-0 hero-bg" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#12081799] via-[#12081766] to-[#120817]" />
          <FloatingSparkles count={50} />

          <div className="relative z-10 text-center px-6 py-20 max-w-5xl mx-auto animate-fade-in">
            <p className="font-script text-2xl sm:text-4xl text-gold mb-2">We Invite You To</p>
            <h2 className="text-xs sm:text-sm tracking-[0.4em] text-[#f8efe3aa] uppercase mb-6">The Wedding Celebration Of</h2>

            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl text-ivory leading-tight">
              <span className="block shimmer-text">Sravan Kumar</span>
              <span className="block font-script text-6xl sm:text-8xl text-gold my-2">&</span>
              <span className="block shimmer-text">Neha</span>
            </h1>

            <Ornament label="Two Hearts · One Forever" />

            <p className="font-serif-body italic text-base sm:text-xl text-[#f8efe3db] max-w-2xl mx-auto leading-relaxed">
              With joyful hearts and family blessings, we invite you to celebrate our marriage
              on <span className="text-gold font-semibold">Friday, 1st May 2026</span> at{" "}
              <span className="text-gold font-semibold">10:12 AM</span>.
            </p>

            <div className="mt-10">
              <Countdown timeLeft={timeLeft} />
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button onClick={() => scrollTo("invitation")} className="px-6 py-3 rounded-full bg-gradient-gold text-[#2d1b08] font-display text-sm tracking-wider shadow-glow hover:scale-105 transition flex items-center gap-2">
                <ScrollText size={16} /> View Invitation
              </button>
              <button onClick={() => scrollTo("video")} className="px-6 py-3 rounded-full gold-border glass-card text-ivory font-display text-sm tracking-wider hover:bg-white/10 transition flex items-center gap-2">
                <PlayCircle size={16} /> Watch Intro Video
              </button>
              <button onClick={() => scrollTo("venue")} className="px-6 py-3 rounded-full gold-border glass-card text-ivory font-display text-sm tracking-wider hover:bg-white/10 transition flex items-center gap-2">
                <MapPin size={16} /> Venue Location
              </button>
            </div>
          </div>

          <div
            aria-hidden
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[120%] h-40 opacity-40 blur-3xl"
            style={{ background: `url(${coupleImage}) center/cover` }}
          />
        </section>

        <section id="invitation" className="relative py-24 px-6 section-bg">
          <div className="max-w-3xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden gold-border glass-card shadow-elegant p-8 sm:p-14 text-center animate-scale-in">
              <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at center, rgba(212,175,55,0.9) 0, transparent 18%), radial-gradient(circle at center, rgba(212,175,55,0.18) 0, transparent 65%)",
                  backgroundSize: "280px 280px, cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative">
                <div className="mx-auto w-20 h-20 mb-4 rounded-full border border-[#d4af3755] flex items-center justify-center bg-white/5">
                  <Sparkles className="text-gold" size={30} />
                </div>
                <p className="font-script text-3xl sm:text-4xl text-gold">Shubha Lekha</p>
                <p className="text-xs tracking-[0.4em] uppercase mt-2 text-[#f8efe3a1]">Wedding Invitation</p>
                <Ornament />

                <p className="font-serif-body italic text-[#f8efe3cc] leading-relaxed">
                  With the divine blessings of Lord Ganesha and the love of our families,
                  we joyfully invite you to grace the auspicious wedding ceremony of
                </p>

                <h2 className="font-display text-3xl sm:text-5xl mt-6 text-ivory">
                  Sravan Kumar
                  <span className="block font-script text-4xl sm:text-6xl text-gold my-1">&</span>
                  Neha
                </h2>

                <Ornament />

                <div className="grid sm:grid-cols-3 gap-6 mt-6 text-sm">
                  <div>
                    <p className="text-[#f8efe3a1] uppercase tracking-widest text-xs">Date</p>
                    <p className="font-display text-lg text-gold mt-1">1 May 2026</p>
                    <p className="text-[#f8efe3a1] text-xs">Friday</p>
                  </div>
                  <div className="sm:border-x border-[#d4af3730] sm:px-4">
                    <p className="text-[#f8efe3a1] uppercase tracking-widest text-xs">Muhurtham</p>
                    <p className="font-display text-lg text-gold mt-1">10:12 AM</p>
                    <p className="text-[#f8efe3a1] text-xs">Swathi Nakshatram</p>
                  </div>
                  <div>
                    <p className="text-[#f8efe3a1] uppercase tracking-widest text-xs">Lagnam</p>
                    <p className="font-display text-lg text-gold mt-1">Midhuna</p>
                    <p className="text-[#f8efe3a1] text-xs">Auspicious Hour</p>
                  </div>
                </div>

                <Ornament />
                <p className="font-serif-body italic text-sm text-[#f8efe3b3]">Your presence and blessings will make our day truly memorable.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="relative py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              script="Our Story"
              title="A Love Written by Destiny"
              description="Sravan Kumar and Neha begin a beautiful new chapter together, joined by love, family blessings, and lifelong promises. Surrounded by loved ones, they invite you to witness their special day and celebrate their forever journey."
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Beautiful Beginning",
                  subtitle: "Two paths, one promise",
                  body: "Their journey began with warmth, trust, and a connection that blossomed into something timeless and true.",
                },
                {
                  title: "Family Blessings",
                  subtitle: "Tradition meets togetherness",
                  body: "As families came together with joy and grace, their bond became a celebration of love rooted in tradition.",
                },
                {
                  title: "Forever Starts Here",
                  subtitle: "A new chapter begins",
                  body: "On this sacred day, surrounded by love, Sravan Kumar and Neha step into a life of shared dreams and lifelong companionship.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="relative rounded-2xl gold-border glass-card p-8 shadow-elegant"
                >
                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-[#2d1b08] shadow-glow">
                    <Heart size={18} />
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#f8efe3a1] text-center">Chapter {i + 1}</p>
                  <h3 className="font-display text-2xl text-center mt-3 text-ivory">{item.title}</h3>
                  <p className="font-script text-xl text-center text-gold mt-2">{item.subtitle}</p>
                  <p className="mt-5 text-sm leading-7 text-[#f8efe3c4] text-center">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="video" ref={videoSectionRef} className="relative py-24 px-6 section-bg">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              script="Cinematic Entry"
              title="Intro Video"
              description="The intro video starts automatically on mobile in muted mode. Tap the sound button on the video to hear it."
            />

            <div className="mt-12 rounded-[28px] gold-border glass-card p-4 sm:p-6 shadow-elegant">
              <div className="overflow-hidden rounded-3xl border border-[#d4af3725] bg-black aspect-video relative">
                {entered ? (
                  <>
                    <iframe
                      key={`${introInView ? "play" : "idle"}-${introSoundOn ? "sound" : "muted"}`}
                      title="Sravan Kumar and Neha Wedding Intro Video"
                      src={
                        introInView
                          ? `https://www.youtube-nocookie.com/embed/${introVideoId}?autoplay=1&mute=${introSoundOn ? 0 : 1}&controls=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&fs=0&disablekb=1&iv_load_policy=3`
                          : `https://www.youtube-nocookie.com/embed/${introVideoId}?autoplay=0&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&fs=0&disablekb=1&iv_load_policy=3`
                      }
                      className="h-full w-full pointer-events-none"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen={false}
                    />

                    {!introSoundOn && introInView && (
                      <button
                        type="button"
                        onClick={enableIntroSound}
                        className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-gradient-gold px-5 py-2.5 font-display text-xs tracking-[0.16em] text-[#2d1b08] shadow-glow transition hover:scale-105"
                      >
                        Tap for Intro Sound
                      </button>
                    )}
                  </>
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-center text-[#f8efe3b8] px-6">
                    <div>
                      <PlayCircle className="mx-auto mb-3 text-gold" size={42} />
                      <p className="font-display text-lg text-ivory">Enter the wedding story to play the intro video</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="couple" className="relative py-24 px-6 bg-gradient-to-b from-[#120817] via-[#24103266] to-[#120817]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-script text-3xl text-gold">The Couple</p>
              <h2 className="font-display text-3xl sm:text-5xl mt-2 text-gradient-gold">Bride & Groom</h2>
              <Ornament label="Sravan Kumar ❤ Neha" />
            </div>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <CoupleProfile
                img={groomImage}
                name="Sravan Kumar"
                qualification="B.Tech"
                role="The Groom"
                side="left"
                parentLabel="Son of"
                parents={["Sri Samala Dasaradha", "Smt. Samala Jayalaxmi"]}
              />

              <CoupleProfile
                img={brideImage}
                name="Neha"
                qualification="M.Sc"
                role="The Bride"
                side="right"
                parentLabel="Daughter of"
                parents={["Sri Chalamala Narasimha Rao", "Smt. Kavitha"]}
              />
            </div>
          </div>
        </section>

        <section id="family" className="relative py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              script="Invited By"
              title="Family Blessings"
              description="With the warmest love of two families, we welcome you to join our celebration."
            />
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {[
                {
                  side: "Groom's Family",
                  surname: "Samala Family",
                  members: [
                    { name: "Sri Samala Dasaradha", relation: "Father" },
                    { name: "Smt. Samala Jayalaxmi", relation: "Mother" },
                  ],
                },
                {
                  side: "Bride's Family",
                  surname: "Chalamala Family",
                  members: [
                    { name: "Sri Chalamala Narasimha Rao", relation: "Father" },
                    { name: "Smt. Kavitha", relation: "Mother" },
                  ],
                },
              ].map((family, i) => (
                <motion.div
                  key={family.side}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="relative rounded-2xl gold-border glass-card p-8 text-center shadow-elegant"
                >
                  <div className="mx-auto h-14 w-14 rounded-full bg-gradient-gold text-[#2d1b08] flex items-center justify-center mb-3 shadow-glow">
                    <Users size={22} />
                  </div>
                  <p className="text-xs tracking-[0.3em] uppercase text-[#f8efe3a1]">{family.side}</p>
                  <h3 className="font-script text-4xl text-gold mt-1">{family.surname}</h3>
                  <Ornament />
                  <ul className="space-y-4">
                    {family.members.map((m) => (
                      <li key={m.name}>
                        <p className="font-display text-lg text-ivory">{m.name}</p>
                        <p className="text-xs uppercase tracking-widest text-[#f8efe3a1]">{m.relation}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="relative py-24 px-6 section-bg">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              script="Save the Date"
              title="Wedding Events"
              description="A graceful timeline of the beautiful moments that make this day unforgettable."
            />

            <div className="grid md:grid-cols-2 gap-8 mt-14">
              {[
                {
                  icon: MicVocal,
                  title: "Wedding Ceremony",
                  date: "1 May 2026 · Friday",
                  time: "10:12 AM Muhurtham",
                  venue: "Sabari A/C Function Hall, Khammam",
                  note: "Swathi Nakshatram · Midhuna Lagnam",
                },
                {
                  icon: Utensils,
                  title: "Grand Lunch",
                  date: "1 May 2026 · Friday",
                  time: "12:30 PM onwards",
                  venue: "Sabari A/C Function Hall, Khammam",
                  note: "Traditional Telugu Bhojanam",
                },
              ].map((e, i) => {
                const Icon = e.icon;
                return (
                  <motion.div
                    key={e.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className="group relative rounded-2xl gold-border glass-card p-8 shadow-elegant hover:-translate-y-2 transition"
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-gradient-gold text-[#2d1b08] flex items-center justify-center shadow-glow">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-2xl text-ivory text-center mt-2">{e.title}</h3>
                    <Ornament />
                    <ul className="space-y-3 text-sm text-[#f8efe3cf]">
                      <li className="flex items-start gap-3"><CalendarDays size={16} className="text-gold mt-0.5" /><span>{e.date}</span></li>
                      <li className="flex items-start gap-3"><Clock3 size={16} className="text-gold mt-0.5" /><span>{e.time}</span></li>
                      <li className="flex items-start gap-3"><MapPin size={16} className="text-gold mt-0.5" /><span>{e.venue}</span></li>
                    </ul>
                    <p className="mt-4 text-center font-script text-xl text-gold">{e.note}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="gallery" className="relative py-24 px-6 bg-gradient-to-b from-[#120817] via-[#24103266] to-[#120817]">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              script="Memories"
              title="Our Gallery"
              description="A luxurious collection of portraits, wedding moments, and invitation memories."
            />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-12">
              {galleryImages.map((image, i) => (
                <button
                  key={`${image.label}-${i}`}
                  onClick={() => setLightbox(image.src)}
                  className={`group relative overflow-hidden rounded-xl gold-border shadow-elegant ${
                    i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.label}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120817dd] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition" />
                  <div className="absolute bottom-0 inset-x-0 p-4 text-left">
                    <p className="font-display text-lg text-ivory">{image.label}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="venue" className="relative py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              script="The Venue"
              title="Sabari A/C Function Hall"
              description="A warm and elegant celebration space in Khammam for this beautiful wedding day."
            />

            <div className="grid lg:grid-cols-2 gap-8 items-stretch mt-12">
              <div className="rounded-2xl gold-border overflow-hidden shadow-elegant min-h-[360px] animate-scale-in">
                <iframe title="Venue Map" src={mapEmbed} className="w-full h-full min-h-[360px] border-0" loading="lazy" />
              </div>

              <div className="rounded-2xl gold-border glass-card p-8 shadow-elegant animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0 shadow-glow">
                    <MapPin className="text-[#2d1b08]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-ivory">Sabari A/C Function Hall</h3>
                    <p className="font-serif-body italic text-[#f8efe3cc] mt-1 leading-7">
                      Agraharam Railway Gate,
                      <br />
                      16th Division, Mustafanagar,
                      <br />
                      Khammam
                    </p>
                  </div>
                </div>
                <Ornament />
                <ul className="space-y-3 text-sm text-[#f8efe3cf]">
                  <li className="flex items-start gap-3"><Landmark size={16} className="text-gold mt-0.5" /> Near Agraharam Railway Gate, easy to find</li>
                  <li className="flex items-start gap-3"><Car size={16} className="text-gold mt-0.5" /> Ample on-site parking available</li>
                  <li className="flex items-start gap-3"><MapPin size={16} className="text-gold mt-0.5" /> Lunch served from 12:30 PM onwards</li>
                </ul>

                <a href={venueLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-[#2d1b08] font-display text-sm tracking-wider shadow-glow hover:scale-105 transition">
                  <Navigation size={16} /> Navigate to Venue
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="rsvp" className="relative py-24 px-6 section-bg">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              script="Celebrate"
              title="Celebrate With Us"
              description="We would be honored by your presence as our families come together to bless this beautiful new beginning."
            />

            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 mt-12">
              <div className="rounded-2xl gold-border glass-card p-8 shadow-elegant">
                <p className="font-script text-3xl text-gold">Celebrate With Us</p>
                <Ornament />
                <p className="font-serif-body italic text-[#f8efe3cc] leading-7">
                  Join us as we celebrate the wedding of Sravan Kumar and Neha with love, joy, music, blessings, and togetherness.
                </p>
                <div className="mt-8 space-y-4 text-sm text-[#f8efe3cf]">
                  <div className="flex items-start gap-3"><CalendarDays className="mt-1 text-gold" size={16} />1 May 2026 · Friday</div>
                  <div className="flex items-start gap-3"><Clock3 className="mt-1 text-gold" size={16} />Wedding Muhurtham · 10:12 AM</div>
                  <div className="flex items-start gap-3"><MapPin className="mt-1 text-gold" size={16} />Sabari A/C Function Hall, Khammam</div>
                  <div className="flex items-start gap-3"><Sparkles className="mt-1 text-gold" size={16} />Swathi Nakshatram · Midhuna Lagnam</div>
                  <div className="flex items-start gap-3"><Music2 className="mt-1 text-gold" size={16} />Background Music · Traditional Nadaswaram Soft Entry Music</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {wishes.map((wish, i) => (
                  <motion.div
                    key={wish.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className={`rounded-2xl gold-border glass-card p-6 shadow-elegant ${i === 2 ? "md:col-span-2" : ""}`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-[#2d1b08] shadow-glow">
                      <Heart size={16} />
                    </div>
                    <h4 className="font-display text-2xl text-ivory mt-4">{wish.name}</h4>
                    <p className="mt-4 text-sm leading-7 text-[#f8efe3c8]">{wish.message}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative py-16 px-6 border-t border-[#d4af3725] bg-gradient-to-b from-[#120817] to-[#241032]">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="mx-auto text-gold animate-glow-pulse" size={28} />
          <p className="mt-4 font-script text-4xl text-gold">With Love & Blessings</p>
          <Ornament />
          <p className="font-display text-lg text-ivory tracking-widest">
            SAMALA FAMILY <span className="text-gold mx-2">·</span> CHALAMALA FAMILY
          </p>
          <p className="mt-6 font-serif-body italic text-[#f8efe3b0] max-w-xl mx-auto leading-7">
            Thank you for being a part of Sravan Kumar & Neha&apos;s special day.
            Your presence and blessings mean the world to us.
          </p>
          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[#f8efe38a]">
            Sravan Kumar ❤ Neha · 1 May 2026 · Khammam
          </p>
        </div>
      </footer>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[110] bg-[#120817f2] backdrop-blur-md flex items-center justify-center p-6"
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 rounded-full border border-white/10 bg-white/10 p-2 text-white"
            >
              <X size={18} />
            </button>
            <motion.img
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={lightbox}
              alt="Gallery Preview"
              className="max-h-[90vh] max-w-full rounded-2xl gold-border shadow-glow"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CoupleProfile({
  img,
  name,
  qualification,
  role,
  parents,
  side,
  parentLabel,
}: {
  img: string;
  name: string;
  qualification: string;
  role: string;
  parents: string[];
  side: "left" | "right";
  parentLabel: string;
}) {
  return (
    <div className={`group relative animate-fade-in ${side === "right" ? "md:mt-16" : ""}`}>
      <div className="absolute -inset-3 bg-gradient-gold opacity-10 blur-2xl rounded-full group-hover:opacity-30 transition" />
      <div className="relative rounded-3xl overflow-hidden gold-border glass-card shadow-elegant">
        <div className="relative h-[420px] overflow-hidden">
          <img
            src={img}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120817] via-[#12081766] to-transparent" />
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
            <span className="px-3 py-1 rounded-full text-xs tracking-widest font-display bg-gradient-gold text-[#2d1b08] shadow-glow">
              {role}
            </span>
          </div>
        </div>

        <div className="p-6 text-center -mt-6 relative">
          <h3 className="font-script text-5xl text-gold leading-none">{name}</h3>
          <p className="mt-2 text-xs tracking-[0.3em] uppercase text-[#f8efe3a1]">{qualification}</p>
          <Ornament />
          <p className="text-xs tracking-widest uppercase text-[#f8efe3a1] mb-2">{parentLabel}</p>
          {parents.map((p) => (
            <p key={p} className="font-serif-body text-base text-[#fff8efe6] leading-7">
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function Countdown({
  timeLeft,
}: {
  timeLeft: { days: number; hours: number; minutes: number; seconds: number };
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
      {[
        [timeLeft.days, "Days"],
        [timeLeft.hours, "Hours"],
        [timeLeft.minutes, "Minutes"],
        [timeLeft.seconds, "Seconds"],
      ].map(([value, label]) => (
        <div
          key={String(label)}
          className="rounded-2xl gold-border glass-card px-5 py-5 text-center shadow-elegant animate-float"
        >
          <div className="font-display text-3xl sm:text-4xl text-ivory">{value}</div>
          <div className="mt-2 text-[11px] uppercase tracking-[0.35em] text-[#d4af37cf]">{label}</div>
        </div>
      ))}
    </div>
  );
}

function Ornament({ label }: { label?: string }) {
  return (
    <div className="my-7 flex items-center justify-center gap-4 text-center">
      <div className="ornament-line w-16 sm:w-24" />
      <div className="flex items-center gap-2 text-gold">
        <Sparkles size={14} />
        {label ? (
          <span className="font-display text-sm tracking-[0.25em] uppercase text-[#f0d37d]">{label}</span>
        ) : (
          <span className="font-script text-2xl">✦</span>
        )}
        <Sparkles size={14} />
      </div>
      <div className="ornament-line w-16 sm:w-24" />
    </div>
  );
}

function SectionHeading({
  script,
  title,
  description,
}: {
  script: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center mb-12">
      <p className="font-script text-3xl text-gold">{script}</p>
      <h2 className="font-display text-3xl sm:text-5xl mt-2 text-gradient-gold">{title}</h2>
      <Ornament />
      <p className="font-serif-body italic text-[#f8efe3c4] max-w-3xl mx-auto leading-7">{description}</p>
    </div>
  );
}

function FloatingSparkles({ count }: { count: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: `${(i * 9.7) % 100}%`,
            top: `${(i * 5.4) % 30}%`,
            width: `${6 + (i % 4) * 4}px`,
            height: `${8 + (i % 3) * 4}px`,
            opacity: 0.18 + (i % 5) * 0.05,
            animationDelay: `${i * 0.45}s`,
            animationDuration: `${10 + (i % 5) * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

function getTimeLeft(target: number) {
  const diff = Math.max(target - Date.now(), 0);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}