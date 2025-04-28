import React from 'react';
import { Layout } from '../components/layout/Layout';

export const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1>Privacy Policy</h1>
          <p className="lead">Last updated: June 15, 2025</p>

          <h2>1. Introduction</h2>
          <p>
            Doyen Autos ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <h2>2. Data We Collect</h2>
          <ul>
            <li>Contact information (name, email, phone number)</li>
            <li>Vehicle preferences and search history</li>
            <li>Financial information for financing applications</li>
            <li>Usage data and cookies</li>
            <li>Location data (with consent)</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <ul>
            <li>To provide and improve our services</li>
            <li>To process vehicle inquiries and purchases</li>
            <li>To communicate about promotions and updates</li>
            <li>To analyze website performance and user behavior</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>4. Data Storage and Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>5. Your Rights</h2>
          <p>Under GDPR, you have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
          </ul>

          <h2>6. Contact Us</h2>
          <p>
            For any privacy-related questions or requests, please contact us at:
            <br />
            Email: privacy@doyen.africa
            <br />
            Phone: +234 809 231 6563
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;