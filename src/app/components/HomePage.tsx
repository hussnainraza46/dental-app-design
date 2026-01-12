import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Sparkles, Shield, Clock, Star, Phone, Mail, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomePage() {
  const services = [
    {
      title: 'Teeth Cleaning',
      description: 'Professional deep cleaning for a brighter, healthier smile',
      icon: Sparkles,
      price: '$99',
      image: 'https://images.unsplash.com/photo-1655636304332-5a98fee2b828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    },
    {
      title: 'Braces & Orthodontics',
      description: 'Straighten your teeth with modern orthodontic solutions',
      icon: Shield,
      price: 'From $2,999',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    },
    {
      title: 'Dental Implants',
      description: 'Permanent solution for missing teeth',
      icon: Shield,
      price: 'From $1,499',
      image: 'https://images.unsplash.com/photo-1758205308179-4e00e0e4060b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    },
    {
      title: 'Teeth Whitening',
      description: 'Get a brilliant white smile in just one visit',
      icon: Sparkles,
      price: '$299',
      image: 'https://images.unsplash.com/photo-1655636304332-5a98fee2b828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    },
  ];

  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cosmetic Dentistry',
      experience: '15+ years',
      image: 'https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300',
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Orthodontics',
      experience: '12+ years',
      image: 'https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300',
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatric Dentistry',
      experience: '10+ years',
      image: 'https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300',
    },
  ];

  const reviews = [
    {
      name: 'Jennifer Smith',
      rating: 5,
      text: 'Outstanding service! The staff was professional and caring. My teeth have never looked better!',
    },
    {
      name: 'Robert Wilson',
      rating: 5,
      text: 'Very modern clinic with the latest equipment. Dr. Johnson is amazing and explained everything clearly.',
    },
    {
      name: 'Lisa Martinez',
      rating: 5,
      text: 'Highly recommend! They made me feel comfortable during my entire visit. Great experience!',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-white to-secondary dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Premium Dental Care
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Smile,<br />Our Priority
              </h1>
              <p className="text-lg text-muted-foreground">
                Experience world-class dental care with our team of expert dentists. We combine advanced technology with a gentle touch to ensure your comfort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book">
                  <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                    Book Appointment
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Patients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">4.9</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1611690061822-b707a67bfebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="Smiling patient and dentist"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive dental care tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden border border-border hover:border-primary/50 cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <service.icon className="w-8 h-8 text-primary" />
                    <span className="text-primary font-semibold">{service.price}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16 bg-secondary/30 dark:bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meet Our Doctors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert professionals dedicated to your dental health
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">{doctor.specialty}</p>
                  <p className="text-sm text-muted-foreground mb-4">{doctor.experience}</p>
                  <Link to="/doctors">
                    <Button variant="outline" className="w-full">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Patient Reviews
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what our patients have to say about their experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{review.text}</p>
                <p className="font-semibold text-foreground">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Info Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Opening Hours</h3>
                <p className="text-white/90 text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p className="text-white/90 text-sm">Sat: 9:00 AM - 4:00 PM</p>
                <p className="text-white/90 text-sm">Sun: Closed</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Contact Us</h3>
                <p className="text-white/90 text-sm">Phone: (555) 123-4567</p>
                <p className="text-white/90 text-sm">Email: info@dentalclinic.com</p>
                <p className="text-white/90 text-sm">WhatsApp: (555) 123-4567</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-white/90 text-sm">123 Dental Street</p>
                <p className="text-white/90 text-sm">Medical District</p>
                <p className="text-white/90 text-sm">New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
