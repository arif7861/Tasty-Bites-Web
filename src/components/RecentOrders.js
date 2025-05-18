import React, { useEffect, useState } from 'react';

const RecentOrders = () => {
  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    const orders = localStorage.getItem('recentOrders');
    if (orders) {
      setRecentOrders(JSON.parse(orders));
    }
  }, []);

  return (
    <section style={{ maxWidth: '700px', margin: '40px auto', padding: '20px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#d32f2f', fontWeight: '700', fontSize: '2rem' }}>Recent Orders</h2>
      {recentOrders.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>No recent orders found.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {recentOrders.map((order, index) => (
            <li
              key={index}
              style={{
                marginBottom: '20px',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                backgroundColor: '#fff',
                borderLeft: '6px solid #d32f2f',
              }}
            >
              <p style={{ margin: '0 0 10px 0', fontWeight: '600', fontSize: '1.1rem' }}>
                <strong>Order Date:</strong> {new Date(order.date).toLocaleString()}
              </p>
              {order.items && order.items.length > 0 ? (
                <div style={{ marginBottom: '10px' }}>
                  <strong>Items:</strong>
                  <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
                    {order.items.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: '6px', fontSize: '1rem', color: '#333' }}>
                        {item.name} - ₹{item.price} x {item.quantity}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p style={{ fontStyle: 'italic', color: '#666' }}>No items information available.</p>
              )}
              <p style={{ margin: '0 0 6px 0' }}>
                <strong>Name:</strong> {order.name || 'N/A'}
              </p>
              <p style={{ margin: '0 0 6px 0' }}>
                <strong>Email:</strong> {order.email || 'N/A'}
              </p>
              <p style={{ margin: '0 0 6px 0' }}>
                <strong>Phone:</strong> {order.phone || 'N/A'}
              </p>
              <p style={{ margin: '0 0 6px 0' }}>
                <strong>Address:</strong> {order.addressLine || 'N/A'}, {order.state || ''} - {order.pincode || ''}
              </p>
              <p style={{ margin: '0 0 6px 0' }}>
                <strong>Category:</strong> {order.category || 'N/A'}
              </p>
              <p style={{ margin: '0 0 6px 0' }}>
                <strong>Payment Method:</strong> {order.paymentMethod || 'N/A'}
              </p>
              <p style={{ margin: '0 0 6px 0' }}>
                <strong>Delivery Partner:</strong> {order.deliveryPartner || 'N/A'}
              </p>
              <p style={{ margin: 0 }}>
                <strong>Coupon Code:</strong> {order.couponCode || 'N/A'}
              </p>
              <p style={{ margin: 0 }}>
                <strong>Tip:</strong> ₹{order.tip || 0}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default RecentOrders;
