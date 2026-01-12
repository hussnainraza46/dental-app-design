import { Card } from './ui/card';
import { Target, Eye, Users, Award, Heart, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Your comfort and wellbeing are our top priorities',
    },
    {
      icon: Shield,
      title: 'Quality & Safety',
      description: 'State-of-the-art equipment and sterilization protocols',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly trained professionals dedicated to excellence',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Latest techniques and technology in dental care',
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Dentist',
      image: 'https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300',
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Orthodontist',
      image: 'https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300',
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Pediatric Dentist',
      image: 'https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300',
    },
    {
      name: 'Jessica Williams',
      role: 'Dental Hygienist',
      image: 'https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300',
    },
  ];

  const clinicImages = [
    'https://images.unsplash.com/photo-1704455306925-1401c3012117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    'https://images.unsplash.com/photo-1758205308179-4e00e0e4060b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    'https://images.unsplash.com/photo-1704455306925-1401c3012117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    'https://images.unsplash.com/photo-1758205308179-4e00e0e4060b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-white to-secondary dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                  <Heart className="w-4 h-4 mr-2" />
                  About Us
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Your Trusted Dental Care Partner
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For over 15 years, we've been providing exceptional dental care to families in our community. Our state-of-the-art facility and experienced team are dedicated to making every visit comfortable and effective.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that everyone deserves a healthy, beautiful smile, and we're committed to making that a reality for each of our patients.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1704455306925-1401c3012117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="Dental clinic interior"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide compassionate, high-quality dental care that improves the oral health and overall wellbeing of our patients. We strive to create a welcoming environment where every patient feels valued and cared for.
              </p>
            </Card>
            <Card className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading dental practice in our community, known for excellence in patient care, innovative treatments, and a commitment to improving smiles and lives for generations to come.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/30 dark:bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated professionals behind your smile
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Photos */}
      <section className="py-16 bg-secondary/30 dark:bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Facility
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A modern, comfortable environment designed with you in mind
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clinicImages.map((image, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src={image}
                  alt={`Clinic photo ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
