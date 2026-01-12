import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Calendar } from './ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { CheckCircle2, User, Phone, Mail } from 'lucide-react';
import { toast } from 'sonner';

export function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
  });

  const doctors = [
    { id: '1', name: 'Dr. Sarah Johnson', specialty: 'Cosmetic Dentistry' },
    { id: '2', name: 'Dr. Michael Chen', specialty: 'Orthodontics' },
    { id: '3', name: 'Dr. Emily Rodriguez', specialty: 'Pediatric Dentistry' },
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Appointment booked successfully!', {
      description: `Your appointment with ${doctors.find(d => d.id === selectedDoctor)?.name} on ${selectedDate?.toLocaleDateString()} at ${selectedTime}`,
    });
    // Reset form
    setStep(1);
    setSelectedDoctor('');
    setSelectedDate(undefined);
    setSelectedTime('');
    setFormData({ name: '', email: '', phone: '', reason: '' });
  };

  return (
    <div className="min-h-screen bg-secondary/30 dark:bg-slate-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Book an Appointment
          </h1>
          <p className="text-lg text-muted-foreground">
            Schedule your visit in just a few simple steps
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    step >= num
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {step > num ? <CheckCircle2 className="w-6 h-6" /> : num}
                </div>
                {num < 4 && (
                  <div
                    className={`w-12 sm:w-20 h-1 ${
                      step > num ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-8 sm:gap-16 mt-2">
            <span className="text-xs sm:text-sm text-muted-foreground">Doctor</span>
            <span className="text-xs sm:text-sm text-muted-foreground">Date</span>
            <span className="text-xs sm:text-sm text-muted-foreground">Time</span>
            <span className="text-xs sm:text-sm text-muted-foreground">Details</span>
          </div>
        </div>

        <Card className="p-6 sm:p-8">
          {/* Step 1: Select Doctor */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Select a Doctor</h2>
              <div className="grid gap-4">
                {doctors.map((doctor) => (
                  <button
                    key={doctor.id}
                    onClick={() => setSelectedDoctor(doctor.id)}
                    className={`p-6 rounded-xl border-2 transition-all text-left ${
                      selectedDoctor === doctor.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                        {doctor.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground">{doctor.name}</h3>
                        <p className="text-muted-foreground">{doctor.specialty}</p>
                      </div>
                      {selectedDoctor === doctor.id && (
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
              <Button
                onClick={() => setStep(2)}
                disabled={!selectedDoctor}
                className="w-full"
                size="lg"
              >
                Continue
              </Button>
            </div>
          )}

          {/* Step 2: Select Date */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Select a Date</h2>
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0}
                  className="rounded-lg border"
                />
              </div>
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Back
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  disabled={!selectedDate}
                  className="flex-1"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Select Time */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Select a Time</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedTime === time
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                  Back
                </Button>
                <Button
                  onClick={() => setStep(4)}
                  disabled={!selectedTime}
                  className="flex-1"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Patient Details */}
          {step === 4 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Your Details</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="reason">Reason for Visit</Label>
                  <Select
                    value={formData.reason}
                    onValueChange={(value) => setFormData({ ...formData, reason: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="checkup">Regular Checkup</SelectItem>
                      <SelectItem value="cleaning">Teeth Cleaning</SelectItem>
                      <SelectItem value="pain">Tooth Pain</SelectItem>
                      <SelectItem value="cosmetic">Cosmetic Procedure</SelectItem>
                      <SelectItem value="emergency">Emergency</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Summary */}
              <Card className="p-4 bg-secondary/50">
                <h3 className="font-semibold text-foreground mb-3">Appointment Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Doctor:</span>
                    <span className="font-medium">
                      {doctors.find(d => d.id === selectedDoctor)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date:</span>
                    <span className="font-medium">
                      {selectedDate?.toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                </div>
              </Card>

              <div className="flex gap-4">
                <Button type="button" variant="outline" onClick={() => setStep(3)} className="flex-1">
                  Back
                </Button>
                <Button type="submit" className="flex-1">
                  Confirm Booking
                </Button>
              </div>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
}
