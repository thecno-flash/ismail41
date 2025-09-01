import React from 'react';
import { createRoot } from 'react-dom/client';

const destinations = [
  {
    name: 'باريس، فرنسا',
    description: 'مدينة الحب والفن، استكشف برج إيفل ومتحف اللوفر.',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760c0341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'جزر المالديف',
    description: 'استرخِ في المنتجعات الفاخرة فوق الماء واستمتع بالمياه الفيروزية.',
    imageUrl: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80'
  },
  {
    name: 'كيوتو، اليابان',
    description: 'اكتشف المعابد الهادئة، والحدائق الخلابة، وثقافة الجيشا التقليدية.',
    imageUrl: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }
];

const features = [
  {
    icon: '✈️',
    title: 'رحلات مخصصة',
    description: 'نصمم رحلات تناسب اهتماماتك وميزانيتك الخاصة.'
  },
  {
    icon: '💸',
    title: 'أفضل الأسعار',
    description: 'نضمن لك الحصول على أفضل العروض والأسعار التنافسية.'
  },
  {
    icon: '🗺️',
    title: 'مرشدون خبراء',
    description: 'استكشف الوجهات مع مرشدين محليين متخصصين.'
  }
];

const testimonials = [
  {
    quote: 'كانت أفضل رحلة في حياتي! التنظيم كان رائعاً والوجهات كانت مذهلة. شكراً لكم!',
    name: 'سارة أحمد',
    rating: 5
  },
  {
    quote: 'تجربة فريدة من نوعها. لقد اهتموا بكل التفاصيل الصغيرة وجعلوا إجازتنا لا تُنسى.',
    name: 'علي محمد',
    rating: 5
  },
  {
    quote: 'خدمة عملاء ممتازة وفريق عمل متعاون جداً. أنصح بهم بشدة!',
    name: 'فاطمة حسن',
    rating: 4
  }
];


const App = () => {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('شكراً لاشتراكك!');
    (e.target as HTMLFormElement).reset();
  };
  
  return (
    <>
      <header className="main-header">
        <div className="container">
          <h1 className="logo">رحلات حول العالم</h1>
          <nav className="main-nav">
            <ul>
              <li><a href="#destinations">الوجهات</a></li>
              <li><a href="#why-choose-us">لماذا تختارنا</a></li>
              <li><a href="#testimonials">آراء العملاء</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <h1>اكتشف مغامرتك القادمة</h1>
          <p>رحلات لا تُنسى إلى أروع الوجهات في العالم.</p>
          <a href="#destinations" className="btn">استكشف الوجهات</a>
        </section>

        <section id="destinations">
          <div className="container">
            <h2 className="section-title">وجهات مميزة</h2>
            <div className="destinations-grid">
              {destinations.map((dest, index) => (
                <div key={index} className="destination-card">
                  <img src={dest.imageUrl} alt={dest.name} />
                  <div className="card-content">
                    <h3>{dest.name}</h3>
                    <p>{dest.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-choose-us">
          <div className="container">
            <h2 className="section-title">لماذا تختارنا؟</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials">
            <div className="container">
                <h2 className="section-title">آراء عملائنا</h2>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <p className="quote">"{testimonial.quote}"</p>
                            <div className="rating">
                                {'★'.repeat(testimonial.rating)}
                                {'☆'.repeat(5 - testimonial.rating)}
                            </div>
                            <h4 className="name">- {testimonial.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="newsletter">
            <div className="container">
                <h2>اشترك في نشرتنا البريدية</h2>
                <p>احصل على آخر العروض والوجهات مباشرة في بريدك الإلكتروني.</p>
                <form onSubmit={handleNewsletterSubmit}>
                    <input type="email" placeholder="أدخل بريدك الإلكتروني" required />
                    <button type="submit" className="btn">اشتراك</button>
                </form>
            </div>
        </section>

      </main>

      <footer className="main-footer">
        <div className="container">
            <div className="footer-content">
                <p>&copy; 2024 رحلات حول العالم. جميع الحقوق محفوظة.</p>
                <p className="whatsapp-contact">للتواصل عبر واتساب: 0101245</p>
            </div>
        </div>
      </footer>
      
      {/* زر واتساب العائم */}
      {/* TODO: استبدل هذا الرقم برقم الواتساب الصحيح بالصيغة الدولية الكاملة (مثال: 201012345678) */}
      <a 
        href="https://wa.me/201012345678"
        className="whatsapp-fab" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب"
      >
        <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.8-27.2l-6.9-4.1-72.3 19 19.3-70.4-4.5-7.2c-18.4-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);