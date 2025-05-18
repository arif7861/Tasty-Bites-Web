import React, { useState } from 'react';

const faqs = [
  { question: 'How do I place an order?', answer: 'You can place an order by selecting your favorite items and proceeding to checkout.' },
  { question: 'What payment methods are accepted?', answer: 'We accept credit cards, debit cards, and online wallets.' },
  { question: 'How can I track my order?', answer: 'You can track your order status in your account dashboard under "My Orders".' },
];

const HelpSupport = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{
      padding: '40px 20px',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
      maxWidth: '800px',
      margin: '40px auto',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#333',
    }}>
      <h2 style={{ color: '#d32f2f', marginBottom: '20px', fontWeight: '700', fontSize: '2rem' }}>Help & Support</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        If you have any questions or need assistance, please contact our support team.
      </p>
      <div style={{ display: 'flex', gap: '40px', marginTop: '20px', marginBottom: '30px', fontSize: '1rem' }}>
        <div><strong>Email:</strong> support@tastybites.com</div>
        <div><strong>Phone:</strong> +1 234 567 890</div>
        <div><strong>Live Chat:</strong> Available 9am - 9pm</div>
      </div>
      <h3 style={{ color: '#d32f2f', marginBottom: '15px', fontWeight: '600', fontSize: '1.5rem' }}>FAQs</h3>
      <div>
        {faqs.map((faq, index) => (
          <div key={index} style={{
            marginBottom: '10px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            padding: '10px 15px',
            backgroundColor: openIndex === index ? '#f9f9f9' : 'white',
            transition: 'background-color 0.3s',
            cursor: 'pointer',
          }}>
            <div
              onClick={() => toggleFAQ(index)}
              style={{
                fontWeight: 'bold',
                color: '#d32f2f',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '1.1rem',
                userSelect: 'none',
              }}
            >
              {faq.question}
              <span style={{ fontSize: '1.5rem', lineHeight: '1' }}>{openIndex === index ? '−' : '+'}</span>
            </div>
            {openIndex === index && (
              <div style={{ marginTop: '8px', color: '#555', fontSize: '1rem', lineHeight: '1.5' }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HelpSupport;
