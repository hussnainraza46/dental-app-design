import { Card } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, Smile, Zap, Heart, Stethoscope } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ServicesPage() {
  const services = [
    {
      title: 'General Dentistry',
      description: 'Comprehensive oral care including checkups, cleanings, and preventive treatments to maintain your dental health.',
      icon: Stethoscope,
      price: 'From $99',
      features: ['Regular Checkups', 'Deep Cleaning', 'Cavity Fillings', 'X-Rays'],
      image: 'https://images.unsplash.com/photo-1655636304332-5a98fee2b828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    },
    {
      title: 'Teeth Whitening',
      description: 'Professional whitening treatments that brighten your smile by several shades in just one visit.',
      icon: Sparkles,
      price: '$299',
      features: ['In-Office Whitening', 'Take-Home Kits', 'Fast Results', 'Safe & Effective'],
      image: 'https://images.unsplash.com/photo-1655636304332-5a98fee2b828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    },
    {
      title: 'Braces & Orthodontics',
      description: 'Modern orthodontic solutions including traditional braces, clear aligners, and retainers.',
      icon: Shield,
      price: 'From $2,999',
      features: ['Metal Braces', 'Clear Aligners', 'Retainers', 'Ongoing Monitoring'],
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    },
    {
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solution that looks, feels, and functions like natural teeth.',
      icon: Heart,
      price: 'From $1,499',
      features: ['Single Implants', 'Multiple Implants', 'Full Arch', 'Bone Grafting'],
      image: 'https://images.unsplash.com/photo-1758205308179-4e00e0e4060b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with veneers, bonding, and other aesthetic treatments.',
      icon: Smile,
      price: 'From $599',
      features: ['Porcelain Veneers', 'Dental Bonding', 'Gum Contouring', 'Smile Makeover'],
      image: 'https://images.unsplash.com/photo-1655636304332-5a98fee2b828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    },
    {
      title: 'Emergency Care',
      description: 'Immediate dental care for urgent issues like severe pain, broken teeth, or infections.',
      icon: Zap,
      price: 'Same-Day',
      features: ['24/7 Availability', 'Same-Day Appointments', 'Pain Relief', 'Urgent Repairs'],
      image: 'https://images.unsplash.com/photo-1758205308179-4e00e0e4060b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-white to-secondary dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Comprehensive Care
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Dental Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From routine cleanings to advanced cosmetic procedures, we offer a full range of dental services to keep your smile healthy and beautiful.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="grid md:grid-cols-2">
                  <div className="aspect-square md:aspect-auto overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <service.icon className="w-10 h-10 text-primary" />
                      <span className="text-primary font-bold text-lg">{service.price}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-1">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link to="/book">
                      <Button className="w-full">Book Appointment</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule your consultation today and discover the difference expert dental care can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Book Appointment
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
