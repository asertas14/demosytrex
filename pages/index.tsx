import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Script from 'next/script'
import Link from 'next/link'
import { useEffect } from 'react'

export default function BankDemo() {
  useEffect(() => {
    // Asegurarse que el script de Amazon Connect se carga después que el DOM está listo
    const loadAmazonConnect = () => {
      if (window.amazon_connect) {
        window.amazon_connect('styles', { 
          iconType: 'CHAT_VOICE', 
          openChat: { color: '#ffffff', backgroundColor: '#0047AB' }, 
          closeChat: { color: '#ffffff', backgroundColor: '#0047AB' }
        });
        window.amazon_connect('snippetId', 'QVFJREFIaWFZYXRVSlpIekdkUUg5YXhZenVQMktKRXNIWTVFQWpBYVErTEdzRnpvZHdIdm9KZHBJNGE3NWJDclZrekg3NVBOQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNVzBtMEdtcW9vOWwwRGNDSEFnRVFnQ3NqblhWRy9rc0k3ZEo1eGwwM1JKKzYyS1dWeC93akVmdDg0ZnFNSVZCbHQ0Z0g5TzVoT20reXQxUGU6OkZ0SmZhTlptQ09hM2IvMERqNjBDY0U1SDlscHBQSmZ1NWxjcTlNRG8xSFBmL0tHQWFLRDNMdGRvNUZFdDExREdvT2ZHaXNVTHVzbDNSVVJQeEVjK0FKUXFsbjE5eklqQnNYTVh2b0hNQXlBNjhOa1lOQ3ppRk5KZ0hSaDJ0ZmRiYTNSY1dJZ2h6Lzg3dkV1Uk1kK1ZyQVA5a0ZOVkh0Yz0=');
        window.amazon_connect('supportedMessagingContentTypes', [ 'text/plain', 'text/markdown' ]);
      }
    };

    // Intentar cargar después de un breve retraso para asegurar que el script está disponible
    setTimeout(loadAmazonConnect, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#0047AB] text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold">US Demo Bank</div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="#" className="hover:text-blue-200 transition-colors">Personal</Link></li>
              <li><Link href="#" className="hover:text-blue-200 transition-colors">Business</Link></li>
              <li><Link href="#" className="hover:text-blue-200 transition-colors">Loans</Link></li>
              <li><Link href="#" className="hover:text-blue-200 transition-colors">Investments</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-[#0047AB] text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Welcome to US Demo Bank</h1>
            <p className="text-xl mb-8">Secure, innovative banking solutions for your financial needs</p>
            <Button className="bg-white text-[#0047AB] hover:bg-blue-50">
              Open an Account
            </Button>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Personal Banking</h3>
                  <p className="text-gray-600">Tailored accounts and services for individual financial goals.</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Business Solutions</h3>
                  <p className="text-gray-600">Comprehensive financial tools to help your business thrive.</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Loan Services</h3>
                  <p className="text-gray-600">Flexible lending options for personal and business needs.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 US Demo Bank. All rights reserved.</p>
        </div>
      </footer>

      <Script id="amazon-connect-chat" strategy="afterInteractive">
        {`
          (function(w, d, x, id){
            s=d.createElement('script');
            s.src='https://dtn7rvxwwlhud.cloudfront.net/amazon-connect-chat-interface-client.js';
            s.async=1;
            s.id=id;
            d.getElementsByTagName('head')[0].appendChild(s);
            w[x] =  w[x] || function() { (w[x].ac = w[x].ac || []).push(arguments) };
          })(window, document, 'amazon_connect', 'a573e81f-c6f3-44ca-bde3-fa36387c972c');
        `}
      </Script>
    </div>
  )
}
