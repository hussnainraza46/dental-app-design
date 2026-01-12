import { Card } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Star, Calendar, Award, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function DoctorsPage() {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cosmetic Dentistry',
      experience: '15+ years',
      education: 'DDS, Harvard School of Dental Medicine',
      rating: 4.9,
      reviews: 234,
      bio: 'Dr. Johnson specializes in cosmetic dentistry with a focus on smile makeovers and veneers. She has helped thousands of patients achieve their dream smiles.',
      image: 'https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      availableDays: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Orthodontics',
      experience: '12+ years',
      education: 'DMD, University of Pennsylvania',
      rating: 4.8,
      reviews: 189,
      bio: 'Dr. Chen is an expert in orthodontics, offering both traditional braces and modern clear aligner treatments for all ages.',
      image: 'https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      availableDays: ['Monday', 'Wednesday', 'Thursday', 'Saturday'],
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatric Dentistry',
      experience: '10+ years',
      education: 'DDS, Columbia University',
      rating: 5.0,
      reviews: 156,
      bio: 'Dr. Rodriguez provides gentle, compassionate care for children of all ages, making dental visits fun and stress-free.',
      image: 'https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      availableDays: ['Tuesday', 'Wednesday', 'Friday', 'Saturday'],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-white to-secondary dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <Award className="w-4 h-4 mr-2" />
              Expert Team
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Meet Our Doctors
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our team of experienced dental professionals is dedicated to providing you with the highest quality care in a comfortable environment.
          </p>
        </div>
      </section>

      {/* Doctors List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  <div className="md:col-span-1">
                    <div className="aspect-square rounded-xl overflow-hidden mb-4">
                      <ImageWithFallback
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(doctor.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-muted-foreground">
                        {doctor.rating} ({doctor.reviews} reviews)
                      </span>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h2 className="text-3xl font-bold text-foreground mb-2">
                        {doctor.name}
                      </h2>
                      <p className="text-xl text-primary font-semibold">
                        {doctor.specialty}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Award className="w-5 h-5" />
                        <span>{doctor.experience} Experience</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <GraduationCap className="w-5 h-5" />
                        <span>{doctor.education}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {doctor.bio}
                    </p>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        Available Days
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {doctor.availableDays.map((day, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                          >
                            {day}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Link to="/book" className="flex-1">
                        <Button className="w-full">Book Appointment</Button>
                      </Link>
                      <Button variant="outline" className="flex-1">
                        View Full Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
