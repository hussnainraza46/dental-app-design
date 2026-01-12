import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Calendar, Users, Activity, DollarSign, 
  Clock, CheckCircle2, XCircle, Search,
  MoreVertical, TrendingUp 
} from 'lucide-react';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function AdminPage() {
  const stats = [
    {
      title: 'Total Appointments',
      value: '156',
      change: '+12%',
      icon: Calendar,
      color: 'text-blue-600',
      bg: 'bg-blue-50 dark:bg-blue-950/30',
    },
    {
      title: 'Active Patients',
      value: '892',
      change: '+8%',
      icon: Users,
      color: 'text-green-600',
      bg: 'bg-green-50 dark:bg-green-950/30',
    },
    {
      title: 'Revenue',
      value: '$45,230',
      change: '+15%',
      icon: DollarSign,
      color: 'text-purple-600',
      bg: 'bg-purple-50 dark:bg-purple-950/30',
    },
    {
      title: 'Success Rate',
      value: '98.5%',
      change: '+2%',
      icon: Activity,
      color: 'text-amber-600',
      bg: 'bg-amber-50 dark:bg-amber-950/30',
    },
  ];

  const upcomingAppointments = [
    {
      id: '1',
      patient: 'Jennifer Smith',
      doctor: 'Dr. Sarah Johnson',
      time: '9:00 AM',
      date: 'Today',
      type: 'Checkup',
      status: 'confirmed',
    },
    {
      id: '2',
      patient: 'Robert Wilson',
      doctor: 'Dr. Michael Chen',
      time: '10:30 AM',
      date: 'Today',
      type: 'Orthodontics',
      status: 'confirmed',
    },
    {
      id: '3',
      patient: 'Lisa Martinez',
      doctor: 'Dr. Emily Rodriguez',
      time: '2:00 PM',
      date: 'Today',
      type: 'Cleaning',
      status: 'pending',
    },
    {
      id: '4',
      patient: 'David Brown',
      doctor: 'Dr. Sarah Johnson',
      time: '3:30 PM',
      date: 'Tomorrow',
      type: 'Implant',
      status: 'confirmed',
    },
    {
      id: '5',
      patient: 'Maria Garcia',
      doctor: 'Dr. Michael Chen',
      time: '11:00 AM',
      date: 'Tomorrow',
      type: 'Braces',
      status: 'pending',
    },
  ];

  const recentPatients = [
    {
      id: '1',
      name: 'Jennifer Smith',
      lastVisit: '2 days ago',
      nextAppointment: 'In 3 days',
      status: 'active',
    },
    {
      id: '2',
      name: 'Robert Wilson',
      lastVisit: '5 days ago',
      nextAppointment: 'In 1 week',
      status: 'active',
    },
    {
      id: '3',
      name: 'Lisa Martinez',
      lastVisit: '1 week ago',
      nextAppointment: 'Not scheduled',
      status: 'inactive',
    },
    {
      id: '4',
      name: 'David Brown',
      lastVisit: '3 days ago',
      nextAppointment: 'Tomorrow',
      status: 'active',
    },
  ];

  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cosmetic Dentistry',
      appointments: 45,
      rating: 4.9,
      availability: 'Available',
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Orthodontics',
      appointments: 38,
      rating: 4.8,
      availability: 'Busy',
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatric Dentistry',
      appointments: 42,
      rating: 5.0,
      availability: 'Available',
    },
  ];

  return (
    <div className="min-h-screen bg-secondary/30 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your clinic overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <Badge variant="secondary" className="text-green-600 bg-green-50 dark:bg-green-950/30">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stat.change}
                </Badge>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="appointments" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="doctors">Doctors</TabsTrigger>
          </TabsList>

          {/* Appointments Tab */}
          <TabsContent value="appointments" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">Upcoming Appointments</h2>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-9 w-[200px]" />
                  </div>
                  <Button>Add Appointment</Button>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient</TableHead>
                    <TableHead>Doctor</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {upcomingAppointments.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell className="font-medium">{appointment.patient}</TableCell>
                      <TableCell>{appointment.doctor}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>{appointment.date}, {appointment.time}</span>
                        </div>
                      </TableCell>
                      <TableCell>{appointment.type}</TableCell>
                      <TableCell>
                        <Badge
                          variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}
                          className={
                            appointment.status === 'confirmed'
                              ? 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300'
                              : ''
                          }
                        >
                          {appointment.status === 'confirmed' ? (
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                          ) : (
                            <Clock className="w-3 h-3 mr-1" />
                          )}
                          {appointment.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Reschedule</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Cancel</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          {/* Patients Tab */}
          <TabsContent value="patients" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">Recent Patients</h2>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search patients..." className="pl-9 w-[200px]" />
                  </div>
                  <Button>Add Patient</Button>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient Name</TableHead>
                    <TableHead>Last Visit</TableHead>
                    <TableHead>Next Appointment</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentPatients.map((patient) => (
                    <TableRow key={patient.id}>
                      <TableCell className="font-medium">{patient.name}</TableCell>
                      <TableCell>{patient.lastVisit}</TableCell>
                      <TableCell>{patient.nextAppointment}</TableCell>
                      <TableCell>
                        <Badge
                          variant={patient.status === 'active' ? 'default' : 'secondary'}
                          className={
                            patient.status === 'active'
                              ? 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300'
                              : ''
                          }
                        >
                          {patient.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>Medical History</DropdownMenuItem>
                            <DropdownMenuItem>Schedule Appointment</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          {/* Doctors Tab */}
          <TabsContent value="doctors" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {doctors.map((doctor, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                      {doctor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                      <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Appointments</span>
                      <Badge variant="secondary">{doctor.appointments}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Rating</span>
                      <span className="text-sm font-medium text-foreground">{doctor.rating}/5.0</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Status</span>
                      <Badge
                        variant={doctor.availability === 'Available' ? 'default' : 'secondary'}
                        className={
                          doctor.availability === 'Available'
                            ? 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300'
                            : ''
                        }
                      >
                        {doctor.availability}
                      </Badge>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-4">
                    View Schedule
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
